#!/usr/bin/env python3
"""
Start Next.js dev server on a port, stopping existing listeners first.

Usage:
  python3 scripts/start-dev.py [--turbo]
"""

from __future__ import annotations

import argparse
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--turbo", action="store_true", help="Use Next.js turbopack mode")
    return parser.parse_args()


def get_port() -> int:
    try:
        return int(os.getenv("PORT", "3006"))
    except ValueError:
        return 3006


def get_pids_on_port(port: int) -> list[str]:
    lsof = shutil.which("lsof")
    if not lsof:
        print("未检测到 lsof，跳过端口占用检查。")
        return []

    result = subprocess.run(
        [lsof, "-tiTCP", str(port), "-sTCP:LISTEN", "-n", "-P"],
        stdout=subprocess.PIPE,
        stderr=subprocess.DEVNULL,
        text=True,
    )
    pids = [pid.strip() for pid in result.stdout.splitlines() if pid.strip()]
    # 去重并保持顺序
    return list(dict.fromkeys(pids))


def resolve_next_command() -> tuple[str, list[str]]:
    project_root = Path(__file__).resolve().parent.parent
    local_next = project_root / "node_modules" / ".bin" / "next"
    if local_next.exists():
        return str(local_next), []

    local_next_exe = shutil.which("next")
    if local_next_exe:
        return local_next_exe, []

    npx = shutil.which("npx")
    if not npx:
        return "", []

    return npx, ["next"]


def main() -> None:
    args = parse_args()
    port = get_port()

    pids = get_pids_on_port(port)
    if pids:
        print(f"检测到端口 {port} 正在被占用")
        print(f"准备停止进程: {' '.join(pids)}")
        subprocess.run(["kill", *pids], check=False)
        time.sleep(1)

        pids = get_pids_on_port(port)
        if pids:
            print(f"部分进程未退出，正在强制结束: {' '.join(pids)}")
            subprocess.run(["kill", "-9", *pids], check=False)

    base_cmd, prefix_args = resolve_next_command()
    if not base_cmd:
        print("未找到 next 命令，也未找到 npx，请先安装依赖（npm install）后再试。")
        sys.exit(1)

    cmd = [base_cmd, *prefix_args, "dev"]
    if args.turbo:
        cmd.append("--turbopack")
    else:
        cmd.append("--webpack")
    cmd.extend(["-p", str(port)])
    print(f"启动服务: {' '.join(cmd)}")

    os.execv(cmd[0], cmd)


if __name__ == "__main__":
    main()
