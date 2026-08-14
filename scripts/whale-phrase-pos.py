#!/usr/bin/env python3
"""
给雅思王听力（whale-chapter-*.ts）中缺词性的【词组】（含空格）补充词性：
- 已有 pos 的行跳过（增量）
- 词性判定优先级：
  1. ielts-all（ielts-vocabulary.ts）词组匹配
  2. 以冠词/限定词开头 → n.（名词短语）
  3. 以常见动词原形开头 → v.（动词短语）
  4. 介词短语/其他 → 取最后一个实词按后缀规则推断
用法：python3 scripts/whale-phrase-pos.py
"""
import json
import re
import sys

FILES = [
    "src/lib/speller/whale-chapter-3.ts",
    "src/lib/speller/whale-chapter-4.ts",
    "src/lib/speller/whale-chapter-5.ts",
    "src/lib/speller/whale-chapter-8.ts",
    "src/lib/speller/whale-chapter-11.ts",
]

# ── ielts-all 词性表（含词组）──
pos_map = {}
vocab_src = open("src/app/mock/ielts-vocabulary.ts", encoding="utf-8").read()
obj_re = re.compile(r'"word":\s*"([^"]+)",\s*"partOfSpeech":\s*"([^"]*)"')
for m in obj_re.finditer(vocab_src):
    for form in m.group(1).split("/"):
        pos_map[form.strip().lower()] = m.group(2)


# 常见 -ate 名词（certificate/chocolate/candidate 等，不能按动词后缀误判）
ATE_NOUNS = {
    "certificate", "chocolate", "candidate", "climate", "senate", "estate", "palate",
    "mandate", "pirate", "citrate", "fate", "gate", "date", "mate", "rate", "state",
    "plate", "skate", "crate", "slate", "debate", "graduate", "associate", "estimate",
    "duplicate", "separate", "climate", "private", "fortunate", "adequate", "accurate",
    "desperate", "moderate", "appropriate", "approximate", "delicate", "immediate",
    "ultimate", "passionate", "affectionate", "coordinate", "climate", "stipulate",
}

# 常见 -en 动词（open/happen/strengthen 等）；linen/garden/kitchen 等是名词不能误判
EN_VERBS = {
    "open", "happen", "listen", "strengthen", "widen", "broaden", "weaken", "tighten",
    "shorten", "lengthen", "deepen", "sharpen", "brighten", "darken", "harden", "soften",
    "loosen", "moisten", "fasten", "awaken", "blacken", "whiten", "redden", "quicken",
    "thicken", "fatten", "flatten", "gladden", "sadden", "straighten", "sweeten",
    "toughen", "waken", "christen", "frighten", "hasten", "hearten", "lighten", "liken",
    "ripen", "roughen", "sicken", "slacken", "smarten", "stiffen", "threaten", "worsen",
    "enlighten", "embolden", "enliven", "freshen", "lessen", "quicken", "reopen",
}

# 常见 -ent 名词（student/extent/agent 等，不能按形容词后缀误判）
ENT_NOUNS = {
    "student", "resident", "extent", "agent", "patient", "comment", "moment", "segment", "element",
    "client", "incident", "accident", "opponent", "component", "correspondent", "percent",
    "parent", "current", "present", "continent", "content", "event", "sent", "rent",
    "tent", "scent", "experiment", "instrument", "document", "department", "argument",
    "environment", "government", "management", "movement", "statement", "treatment",
    "apartment", "equipment", "agreement", "achievement", "arrangement", "assessment",
    "assignment", "attachment", "commitment", "development", "employment", "engagement",
    "entertainment", "establishment", "excitement", "experiment", "improvement",
    "involvement", "judgment", "measurement", "payment", "punishment", "requirement",
    "settlement", "temperament", "investment", "advertisement", "appointment", "basement",
}

# 常见 -ive 名词/兼类（representative/alternative 等）
IVE_NOUNS = {
    "representative", "alternative", "native", "initiative", "objective", "executive",
    "relative", "negative", "positive", "detective", "incentive", "motive", "narrative",
    "adjective", "captive", "explosive", "archive", "aggressive", "offensive",
    "perspective", "prospective", "restorative", "restrictive", "successive", "subjective",
    "substantive", "suggestive", "supportive", "survive", "drive", "arrive", "believe",
    "leave", "achieve", "receive", "relieve", "retrieve", "thrive", "strive", "alive",
}

# 常见 -able 名词（table/cable/vegetable 等，不能按形容词后缀误判）
ABLE_NOUNS = {"table", "cable", "fable", "vegetable", "timetable", "stable", "parable", "syllable"}

# -ise 动词白名单（noise/paradise/surprise 等名词不能误判）
ISE_VERBS = {
    "raise", "praise", "rise", "practise", "promise", "compromise", "advise", "revise",
    "supervise", "exercise", "disguise", "surprise", "advertise", "analyse", "realise",
    "recognise", "organise", "emphasise", "apologise", "criticise", "minimise",
    "maximise", "specialise", "generalise", "summarise", "standardise", "modernise",
    "industrialise", "computerise", "digitise", "prioritise", "stabilise", "mobilise",
    "televise", "devise", "improvise", "franchise", "premise", "expertise", "concise",
    "precise", "paradise", "merchandise", "wisdom",
}

# -ize 动词白名单（size 等名词不能误判）
IZE_VERBS = {
    "recognize", "organize", "analyze", "realize", "prioritize", "maximize", "minimize",
    "specialize", "generalize", "summarize", "standardize", "modernize", "industrialize",
    "computerize", "digitize", "memorize", "apologize", "emphasize", "criticize",
    "utilize", "stabilize", "mobilize", "visualize", "authorize", "categorize",
    "characterize", "customize", "dramatize", "economize", "finalize", "formalize",
    "harmonize", "idealize", "jeopardize", "legalize", "magnetize", "materialize",
    "mechanize", "minimize", "monopolize", "normalize", "optimize", "organize",
    "patronize", "polarize", "popularize", "privatize", "publicize", "randomize",
    "rationalize", "recognize", "regularize", "revolutionize", "sanitize", "scrutinize",
    "sensitize", "socialize", "specialize", "stabilize", "standardize", "stigmatize",
    "subsidize", "summarize", "symbolize", "synthesize", "systematize", "terrorize",
    "theorize", "utilize", "verbalize", "vitalize", "vocalize", "vulgarize", "winterize",
}

# 常见 -ant 名词（assistant/consultant 等）
ANT_NOUNS = {
    "assistant", "consultant", "servant", "accountant", "participant", "applicant",
    "immigrant", "merchant", "elephant", "infant", "giant", "tyrant", "warrant", "tenant",
    "constant", "instant", "restaurant", "pant", "grant", "plant", "pleasant", "peasant",
    "debutant", "dependant", "descendant", "disinfectant", "emigrant", "entrant",
    "inhabitant", "occupant", "pendant", "protestant", "resultant", "stimulant",
    "surfactant", "syndicant", "taxant", "variant", "volunteer",
}

# 常见 -ary 名词（vocabulary/dictionary/library 等）
ARY_NOUNS = {
    "vocabulary", "dictionary", "library", "salary", "secretary", "boundary", "category",
    "century", "ceremony", "charity", "commentary", "diary", "directory", "discovery",
    "estuary", "fairy", "glossary", "grocery", "inquiry", "itinerary", "jury",
    "laboratory", "machinery", "memory", "ministry", "monastery", "mystery", "salary",
    "sanitary", "secretary", "seminary", "summary", "surgery", "territory", "treasury",
    "january", "february", "ordinary", "primary", "secondary", "temporary", "voluntary",
    "necessary", "stationary", "contemporary", "boundary", "commentary", "customary",
    "documentary", "elementary", "emergency", "extraordinary", "imaginary", "literary",
    "momentary", "necessary", "obligatory", "ordinary", "penitentiary", "planetary",
    "preliminary", "primary", "revolutionary", "rotary", "secondary", "secretary",
    "solitary", "stationary", "subsidiary", "temporary", "unnecessary", "voluntary",
}


def infer_pos(word: str) -> str:
    w = word.lower()
    if w.endswith(("tion", "sion", "ment", "ness", "ity", "er", "or", "ist", "ism", "ance", "ence", "hood", "ship", "dom", "age", "ure", "ture", "ics", "ology", "graphy")):
        return "n."
    if w.endswith("ate") and w in ATE_NOUNS:
        return "n."
    if w.endswith("ate"):
        return "v."
    if w.endswith("ify"):
        return "v."
    if w.endswith("ise"):
        # 动词白名单；noise/paradise/expertise 等名词不误判
        return "v." if w in ISE_VERBS else "n."
    if w.endswith("ize"):
        # 动词白名单；size/prize 等名词不误判
        return "v." if w in IZE_VERBS else "n."
    if w.endswith("en"):
        # 动词白名单；linen/garden/kitchen 等名词不误判
        return "v." if w in EN_VERBS else "n."
    if w.endswith("able") and w in ABLE_NOUNS:
        return "n."
    # -ish：动词白名单（finish/punish…），english/foolish 等是名词/形容词不能误判为 v.
    if w.endswith("ish"):
        if w in {"finish", "punish", "publish", "vanish", "establish", "cherish", "nourish",
                 "furnish", "astonish", "distinguish", "banish", "demolish", "embellish",
                 "flourish", "impoverish", "languish", "perish", "polish", "replenish", "tarnish"}:
            return "v."
        return "n."
    if w.endswith("al"):
        if w in {"journal", "animal", "hospital", "capital", "festival", "crystal", "signal",
                 "mineral", "rival", "metal", "coral", "pedal", "petal", "vocal", "trial",
                 "denial", "arrival", "proposal", "approval", "removal", "survival", "refusal",
                 "disposal", "betrayal", "appraisal", "rehearsal", "interval", "funeral",
                 "cathedral", "decimal", "mammal", "mural", "oval", "panel", "portal",
                 "quarrel", "recital", "referral", "renewal", "reversal", "several", "total",
                 "tunnel", "vandal", "medal", "meal", "rental", "material", "cereal", "casual",
                 "carnival", "dial", "fatal", "final", "formal", "general", "local", "moral",
                 "normal", "oral", "personal", "principal", "radical", "rural", "signal",
                 "special", "tribal", "verbal", "visual", "annual", "casual", "cereal",
                 "chemical", "criminal", "cultural", "digital", "editorial", "essential",
                 "eternal", "external", "federal", "funeral", "gradual", "ideal", "illegal",
                 "individual", "internal", "loyal", "manual", "material", "medical",
                 "mental", "mortal", "mutual", "natural", "naval", "neutral", "occasional",
                 "official", "optional", "original", "partial", "practical", "professional",
                 "racial", "radical", "rational", "real", "regional", "royal", "rural",
                 "seasonal", "social", "special", "spiritual", "structural", "traditional",
                 "tropical", "universal", "unusual", "usual", "vital", "vocational", "vocal",
                 "wooden", "woolen"}:
            return "n."
        return "adj."
    if w.endswith("ent") and w in ENT_NOUNS:
        return "n."
    if w.endswith("ant") and w in ANT_NOUNS:
        return "n."
    if w.endswith("ary") and w in ARY_NOUNS:
        return "n."
    if w.endswith("ive") and w in IVE_NOUNS:
        return "n."
    if w.endswith(("ous", "ive", "ful", "able", "ible", "ical", "less", "ent", "ant", "ary", "like")):
        return "adj."
    # -ic：多为形容词，但 panic/music/logic 等常见名词排除
    if w.endswith("ic"):
        if w in {"panic", "music", "logic", "traffic", "topic", "clinic", "fabric", "relic",
                 "public", "magic", "critic", "ethic", "lyric", "optic", "mechanic", "mimic",
                 "tonic", "tropic", "toxic", "rustic", "cubic", "physic", "tactic", "static",
                 "picnic", "stoic"}:
            return "n."
        return "adj."
    if w.endswith("ly"):
        return "adv."
    return "n."


# 名词短语开头（冠词/限定词/数量词）
DETERMINERS = {
    "a", "an", "the", "this", "that", "these", "those", "my", "your", "his", "her",
    "our", "their", "its", "some", "any", "no", "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten", "each", "every", "both", "all", "many",
    "much", "few", "little", "several", "other", "another", "first", "second", "third",
    "most", "more", "lot", "lots", "plenty", "number", "kind", "sort", "type", "variety",
}

# 介词/虚词（取最后一个实词时跳过）
FUNCTION_WORDS = {
    "a", "an", "the", "of", "to", "in", "on", "at", "by", "for", "with", "from", "up",
    "down", "out", "off", "over", "under", "about", "after", "before", "between",
    "during", "into", "through", "along", "across", "among", "around", "behind",
    "below", "beneath", "beside", "beyond", "except", "near", "past", "per", "since",
    "until", "upon", "via", "within", "without", "and", "or", "but", "as", "if", "than",
    "so", "very", "too", "more", "most", "less", "least", "not", "no", "off", "etc",
}

# 常见动词原形（多词短语以动词开头 → v.）；仅含【强动词】——
# 兼类词（sound/fire/travel/waste 等既是名词又是动词）不在此列，
# 避免 sound effect、fire alarm 这类名词短语被误判为动词短语
VERB_FIRST = {
    "agree",
    "allow",
    "appear",
    "arrive",
    "ask",
    "be",
    "believe",
    "belong",
    "borrow",
    "bring",
    "build",
    "buy",
    "carry",
    "catch",
    "choose",
    "clean",
    "collect",
    "come",
    "compare",
    "complete",
    "consider",
    "continue",
    "copy",
    "count",
    "create",
    "cry",
    "cut",
    "damage",
    "deal",
    "decide",
    "deliver",
    "describe",
    "design",
    "develop",
    "die",
    "discover",
    "discuss",
    "do",
    "draw",
    "dream",
    "drink",
    "earn",
    "eat",
    "encourage",
    "enjoy",
    "enter",
    "expect",
    "explain",
    "fail",
    "fall",
    "feel",
    "fill",
    "find",
    "fix",
    "fly",
    "follow",
    "force",
    "forget",
    "gain",
    "get",
    "give",
    "go",
    "grow",
    "guess",
    "hang",
    "happen",
    "hate",
    "have",
    "hear",
    "hope",
    "hurt",
    "imagine",
    "improve",
    "include",
    "increase",
    "introduce",
    "invite",
    "join",
    "keep",
    "kill",
    "know",
    "laugh",
    "lay",
    "lead",
    "learn",
    "leave",
    "let",
    "lie",
    "like",
    "listen",
    "look",
    "lose",
    "make",
    "manage",
    "marry",
    "matter",
    "mean",
    "meet",
    "mention",
    "miss",
    "mix",
    "move",
    "need",
    "observe",
    "offer",
    "organise",
    "organize",
    "own",
    "pass",
    "pay",
    "perform",
    "persuade",
    "pick",
    "play",
    "practice",
    "practise",
    "prefer",
    "prepare",
    "press",
    "prevent",
    "print",
    "produce",
    "promise",
    "protect",
    "prove",
    "provide",
    "punish",
    "put",
    "raise",
    "reach",
    "read",
    "realise",
    "realize",
    "receive",
    "reduce",
    "refuse",
    "regret",
    "relax",
    "remain",
    "remember",
    "remind",
    "remove",
    "repair",
    "repeat",
    "replace",
    "reply",
    "require",
    "ring",
    "rise",
    "risk",
    "run",
    "save",
    "say",
    "search",
    "see",
    "seem",
    "sell",
    "send",
    "serve",
    "set",
    "settle",
    "shake",
    "share",
    "shout",
    "show",
    "shut",
    "sing",
    "sit",
    "sleep",
    "smile",
    "solve",
    "speak",
    "spell",
    "spend",
    "split",
    "spread",
    "stand",
    "star",
    "stay",
    "steal",
    "stick",
    "stop",
    "strike",
    "succeed",
    "suffer",
    "suggest",
    "supply",
    "suppose",
    "survive",
    "swim",
    "take",
    "talk",
    "teach",
    "tear",
    "tell",
    "thank",
    "think",
    "throw",
    "touch",
    "treat",
    "trouble",
    "trust",
    "try",
    "understand",
    "use",
    "vary",
    "visit",
    "wait",
    "wake",
    "want",
    "warn",
    "wash",
    "wear",
    "win",
    "wish",
    "wonder",
    "worry",
    "wrap",
    "write",
}


# 动词白名单扩充：ielts-all 中【纯 v.】标注的单词（avoid/assume/analyse 等不规则动词）。
# 用 v.strip() == "v." 而非 "v." in v：避免 sound/fire/travel 等 n./v. 兼类词混入
VERB_FIRST |= {k for k, v in pos_map.items() if v.strip() == "v." and " " not in k}


def phrase_pos(phrase: str) -> str:
    hit = pos_map.get(phrase.lower())
    if hit:
        return hit
    words = [w.strip("'\".,;:!?()") for w in phrase.lower().split()]
    first = words[0]
    # 冠词/限定词开头 → 名词短语
    if first in DETERMINERS:
        return "n."
    # 强动词开头（sound/fire 等兼类词不在 VERB_FIRST）→ 动词短语
    if first in VERB_FIRST:
        return "v."
    # verb + 介词/副词（focus on、relate to、check in、give up…）→ 动词短语
    if len(words) >= 2 and words[1] in FUNCTION_WORDS and infer_pos(first) == "v.":
        return "v."
    # 取最后一个实词按后缀规则推断
    for w in reversed(words):
        if w not in FUNCTION_WORDS:
            return infer_pos(w)
    return "n."


def unescape(s: str) -> str:
    try:
        return json.loads('"' + s + '"')
    except Exception:
        return s


def esc(s: str) -> str:
    return json.dumps(s, ensure_ascii=True)[1:-1]


def main():
    total = filled = 0
    for path in FILES:
        src = open(path, encoding="utf-8").read()
        lines = src.split("\n")
        out = []
        for line in lines:
            wm = re.search(r'word:\s*"([^"]+)"', line)
            if not wm:
                out.append(line)
                continue
            if "pos:" in line:  # 已有词性，跳过（增量）
                out.append(line)
                continue
            word = unescape(wm.group(1))
            pos = phrase_pos(word)
            # 词性加到 meaning 前（与单词格式一致，如 "n. 均衡饮食"）
            mm = re.search(r'meaning:\s*"((?:[^"\\]|\\.)*)"', line)
            if mm:
                meaning = unescape(mm.group(1))
                if meaning and not re.match(r"^[a-z]+\.", meaning):
                    line = line[:mm.start(1)] + esc(pos + " " + meaning) + line[mm.end(1):]
            line = line.rstrip()
            if line.endswith("},"):
                line = line[:-2] + f', pos: "{esc(pos)}"}},'
            elif line.endswith("}"):
                line = line[:-1] + f', pos: "{esc(pos)}"}}'
            else:
                out.append(line)
                continue
            total += 1
            if " " in word:
                filled += 1
            out.append(line)
        open(path, "w", encoding="utf-8").write("\n".join(out))
    print(f"共补 {total} 个词的词性（其中词组 {filled}）")


if __name__ == "__main__":
    main()
