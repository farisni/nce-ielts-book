"use client";

import { useState } from "react";
import { WheelPicker } from "@/components/motion/wheel-picker";
import { NativeLikesCounterBaseUI } from "@/components/uitripled/native-likes-counter-baseui";
import { NativeFlipText } from "@/components/uitripled/native-flip-text-baseui";
import { GlowingBadge } from "@/components/unlumen-ui/glowing-badge";
import { CursorCard } from "@/components/ui/cursor-card";
import { ImageRevealList } from "@/components/ui/image-reveal-list";
import { LineHoverLink } from "@/components/ui/line-hover-link";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/motion/popover";
import { TransportBadge } from "@/components/8starlabs-ui/transport-badge";
import StatusIndicator from "@/components/8starlabs-ui/status-indicator";

const MONTHS = [
  "一月", "二月", "三月", "四月", "五月", "六月",
  "七月", "八月", "九月", "十月", "十一月", "十二月",
];

const CITIES = [
  { label: "北京", value: "beijing" },
  { label: "上海", value: "shanghai" },
  { label: "广州", value: "guangzhou" },
  { label: "深圳", value: "shenzhen" },
  { label: "杭州", value: "hangzhou" },
  { label: "成都", value: "chengdu" },
  { label: "武汉", value: "wuhan" },
  { label: "南京", value: "nanjing" },
  { label: "西安", value: "xian" },
  { label: "重庆", value: "chongqing" },
];

const AGES = Array.from({ length: 80 }, (_, i) => String(i + 1));

const SAMPLE_USERS = [
  { id: "1", name: "Alice", avatar: "https://i.pravatar.cc/80?img=1" },
  { id: "2", name: "Bob", avatar: "https://i.pravatar.cc/80?img=2" },
  { id: "3", name: "Carol", avatar: "https://i.pravatar.cc/80?img=3" },
  { id: "4", name: "Dave", avatar: "https://i.pravatar.cc/80?img=4" },
  { id: "5", name: "Eve", avatar: "https://i.pravatar.cc/80?img=5" },
  { id: "6", name: "Frank", avatar: "https://i.pravatar.cc/80?img=6" },
  { id: "7", name: "Grace", avatar: "https://i.pravatar.cc/80?img=7" },
  { id: "8", name: "Hank", avatar: "https://i.pravatar.cc/80?img=8" },
];

const MORE_USERS = [
  { id: "9", name: "Ivy", avatar: "https://i.pravatar.cc/80?img=9" },
  { id: "10", name: "Jack", avatar: "https://i.pravatar.cc/80?img=10" },
  { id: "11", name: "Kate", avatar: "https://i.pravatar.cc/80?img=11" },
  { id: "12", name: "Leo", avatar: "https://i.pravatar.cc/80?img=12" },
];

export default function UIShowcase() {
  const [day, setDay] = useState("15");
  const [month, setMonth] = useState("六月");
  const [city, setCity] = useState("shanghai");
  const [age, setAge] = useState("25");

  const loadMore = async () => {
    await new Promise((r) => setTimeout(r, 800));
    return MORE_USERS;
  };

  return (
    <main className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-2xl rounded-lg border border-dashed border-border p-8 space-y-10">
        <div>
          <h1 className="text-lg font-semibold mb-2">UI Showcase</h1>
          <p className="text-sm text-muted-foreground">Wheel Picker &amp; Native Likes Counter</p>
        </div>

        {/* ── Wheel Picker ── */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Wheel Picker</h2>

          <div className="space-y-3">
            <h3 className="text-xs font-medium text-muted-foreground">Date Picker（官方 Demo）</h3>
            <div className="inline-flex items-center justify-center gap-1">
              <WheelPicker
                options={Array.from({ length: 31 }, (_, i) => String(i + 1))}
                value={day}
                onValueChange={setDay}
                className="w-14 border-0 !bg-transparent"
                visibleCount={7}
                itemHeight={42}
                aria-label="Day"
              />
              <WheelPicker
                options={MONTHS}
                value={month}
                onValueChange={setMonth}
                className="w-20 border-0 !bg-transparent"
                visibleCount={7}
                itemHeight={42}
                aria-label="Month"
              />
              <WheelPicker
                options={AGES}
                value={age}
                onValueChange={setAge}
                className="w-20 border-0 !bg-transparent"
                visibleCount={7}
                itemHeight={42}
                aria-label="Year"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              选中: <span className="text-foreground font-medium">{day}</span> / <span className="text-foreground font-medium">{month}</span> / <span className="text-foreground font-medium">{age}</span>
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-medium text-muted-foreground">城市选择（{'{ label, value }'}[]）</h3>
            <div className="flex items-center gap-6">
              <WheelPicker
                options={CITIES}
                value={city}
                onValueChange={setCity}
                visibleCount={5}
                itemHeight={36}
                aria-label="选择城市"
              />
              <span className="text-sm text-muted-foreground">选中: <span className="text-foreground font-medium">{CITIES.find(c => c.value === city)?.label ?? city}</span></span>
            </div>
          </div>
        </div>

        {/* ── Native Likes Counter ── */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Native Likes Counter</h2>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">default</h3>
            <NativeLikesCounterBaseUI
              count={42}
              users={SAMPLE_USERS.slice(0, 3)}
              onLoadMore={loadMore}
              hasMore
              maxAvatars={5}
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">liked</h3>
            <NativeLikesCounterBaseUI count={128} users={SAMPLE_USERS.slice(0, 4)} liked maxAvatars={5} />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">subtle</h3>
            <NativeLikesCounterBaseUI count={7} users={SAMPLE_USERS.slice(0, 2)} variant="subtle" maxAvatars={5} />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">outline</h3>
            <NativeLikesCounterBaseUI count={3} users={SAMPLE_USERS.slice(0, 1)} variant="outline" maxAvatars={5} />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">ghost</h3>
            <NativeLikesCounterBaseUI count={99} variant="ghost" maxAvatars={5} />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">sizes (sm / default / lg)</h3>
            <div className="flex items-center gap-4 flex-wrap">
              <NativeLikesCounterBaseUI count={5} users={SAMPLE_USERS.slice(0, 2)} size="sm" maxAvatars={3} />
              <NativeLikesCounterBaseUI count={5} users={SAMPLE_USERS.slice(0, 2)} size="default" maxAvatars={3} />
              <NativeLikesCounterBaseUI count={5} users={SAMPLE_USERS.slice(0, 2)} size="lg" maxAvatars={3} />
            </div>
          </div>
        </div>

        {/* ── Native Flip Text ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Native Flip Text</h2>
          <div className="text-2xl font-semibold">
            <span className="text-muted-foreground">I love </span>
            <NativeFlipText words={["React", "Vue", "Svelte", "Next.js", "TypeScript"]} duration={2000} className="text-foreground" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">自定义时长 (3s)</h3>
            <NativeFlipText words={["🚀 快速", "🎨 美观", "⚡️ 高效", "🔧 灵活", "💡 智能"]} duration={3000} className="text-lg font-medium" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">单字切换</h3>
            <NativeFlipText words={["一", "二", "三", "四", "五"]} duration={1000} className="text-4xl font-bold" />
          </div>
        </div>

        {/* ── Glowing Badge ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Glowing Badge</h2>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">variants</h3>
            <div className="flex flex-wrap gap-2">
              <GlowingBadge>default</GlowingBadge>
              <GlowingBadge variant="success">success</GlowingBadge>
              <GlowingBadge variant="warning">warning</GlowingBadge>
              <GlowingBadge variant="error">error</GlowingBadge>
              <GlowingBadge variant="info">info</GlowingBadge>
              <GlowingBadge variant="neutral">neutral</GlowingBadge>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">pulse</h3>
            <div className="flex flex-wrap gap-2">
              <GlowingBadge variant="success" pulse>Online</GlowingBadge>
              <GlowingBadge variant="error" pulse>Error</GlowingBadge>
              <GlowingBadge variant="info" pulse>Updating</GlowingBadge>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">dot</h3>
            <div className="flex flex-wrap gap-2">
              <GlowingBadge variant="success" dot pulse>Active</GlowingBadge>
              <GlowingBadge variant="warning" dot>Pending</GlowingBadge>
              <GlowingBadge variant="neutral" dot>Idle</GlowingBadge>
            </div>
          </div>
        </div>

        {/* ── Cursor Card ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Cursor Card</h2>
          <p className="text-sm text-muted-foreground">
            Hover over the links below to see the preview card that follows your cursor.
          </p>
          <div className="text-sm space-x-2">
            <CursorCard
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
              description="A breathtaking mountain landscape at golden hour with snow-capped peaks."
            >
              Mountains
            </CursorCard>
            <CursorCard
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop"
              description="Tropical beach with crystal clear turquoise water and white sand."
            >
              Beach
            </CursorCard>
            <CursorCard
              image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop"
              description="Sunlight filtering through a dense forest canopy in spring."
            >
              Forest
            </CursorCard>
          </div>
        </div>

        {/* ── Image Reveal List ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Image Reveal List</h2>
          <p className="text-sm text-muted-foreground">Hover over list items to reveal the image.</p>
          <ImageRevealList
            items={[
              { id: "1", title: "Mountain Retreat", subtitle: "Switzerland", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=280&fit=crop", number: "01" },
              { id: "2", title: "Ocean View", subtitle: "Maldives", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=280&fit=crop", number: "02" },
              { id: "3", title: "City Lights", subtitle: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&h=280&fit=crop", number: "03" },
              { id: "4", title: "Desert Dunes", subtitle: "Sahara", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=200&h=280&fit=crop", number: "04" },
            ]}
          />
        </div>

        {/* ── Line Hover Link ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Line Hover Link</h2>
          <p className="text-sm text-muted-foreground">Various underline animation variants on hover.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <LineHoverLink variant="slide" href="#">Slide</LineHoverLink>
            <LineHoverLink variant="double" href="#">Double</LineHoverLink>
            <LineHoverLink variant="grow" href="#">Grow</LineHoverLink>
            <LineHoverLink variant="strike" href="#">Strike</LineHoverLink>
            <LineHoverLink variant="fade" href="#">Fade</LineHoverLink>
            <LineHoverLink variant="pulse" href="#">Pulse</LineHoverLink>
            <LineHoverLink variant="swap" href="#">Swap</LineHoverLink>
            <LineHoverLink variant="sweep" href="#">Sweep</LineHoverLink>
            <LineHoverLink variant="bounce" href="#">Bounce</LineHoverLink>
            <LineHoverLink variant="arc" href="#">Arc</LineHoverLink>
            <LineHoverLink variant="scribble" href="#">Scribble</LineHoverLink>
          </div>
        </div>

        {/* ── Popover ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Popover</h2>
          <p className="text-sm text-muted-foreground">Gooey animated popover with click / hover trigger.</p>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">click (default)</h3>
            <Popover>
              <PopoverTrigger>
                <button className="px-3 py-1.5 text-sm rounded-md border border-border hover:bg-muted transition-colors">Click me</button>
              </PopoverTrigger>
              <PopoverContent className="p-4 w-64">
                <p className="text-sm font-medium">Hello from Popover!</p>
                <p className="text-xs text-muted-foreground mt-1">This is a gooey animated popover triggered by click.</p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">hover</h3>
            <Popover trigger="hover" side="top">
              <PopoverTrigger>
                <span className="inline-block px-3 py-1.5 text-sm rounded-md border border-dashed border-border hover:bg-muted transition-colors cursor-default">Hover me</span>
              </PopoverTrigger>
              <PopoverContent className="p-3 w-56">
                <p className="text-sm">Hover-triggered popover</p>
                <p className="text-xs text-muted-foreground mt-1">Appears on the top side.</p>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* ── Transport Badge ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Transport Badge</h2>
          <p className="text-sm text-muted-foreground">Singapore MRT station code badges.</p>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">single line</h3>
            <div className="flex flex-wrap gap-2">
              <TransportBadge stationCode="NS1" system="SG" stationName="Jurong East" showStationName />
              <TransportBadge stationCode="EW4" system="SG" stationName="Tanah Merah" showStationName />
              <TransportBadge stationCode="NE5" system="SG" stationName="Clarke Quay" showStationName />
              <TransportBadge stationCode="DT14" system="SG" stationName="Bugis" showStationName />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-medium text-muted-foreground">interchange (multi)</h3>
            <div className="flex flex-wrap gap-2">
              <TransportBadge stationCode={["EW4", "CG1"]} system="SG" stationName="Tanah Merah" showStationName />
              <TransportBadge stationCode={["NS25", "EW13"]} system="SG" stationName="City Hall" showStationName size="lg" />
            </div>
          </div>
        </div>

        {/* ── Status Indicator ── */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold border-b border-dashed border-border pb-2">Status Indicator</h2>
          <p className="text-sm text-muted-foreground">Animated status dot with ping effect for active/down/fixing states.</p>

          <div className="flex flex-wrap gap-6">
            <StatusIndicator state="active" label="Active" />
            <StatusIndicator state="down" label="Down" />
            <StatusIndicator state="fixing" label="Fixing" />
            <StatusIndicator state="idle" label="Idle" />
          </div>

          <div className="flex flex-wrap gap-6">
            <StatusIndicator state="active" size="sm" label="SM" />
            <StatusIndicator state="active" size="md" label="MD" />
            <StatusIndicator state="active" size="lg" label="LG" />
          </div>
        </div>
      </div>
    </main>
  );
}
