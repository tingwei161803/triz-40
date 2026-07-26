#!/usr/bin/env python3
"""Assemble data/data.js from tmp/principles/*.json + tmp/aux/*.json.

Usage: uv run python tmp/build_data.py
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PDIR = ROOT / "tmp" / "principles"
ADIR = ROOT / "tmp" / "aux"
OUT = ROOT / "data" / "data.js"

VALID_DOMAINS = {"ancient", "mechanical", "daily", "business", "software", "ai"}

GROUPS = [
    {"key": "structure", "en": "Structure & Space", "zh": "結構與空間"},
    {"key": "process", "en": "Time & Process", "zh": "時間與程序"},
    {"key": "matter", "en": "Matter & Energy", "zh": "物質與能量"},
    {"key": "system", "en": "System & Information", "zh": "系統與資訊"},
]
GROUP_OF = {}
for pid in [1, 2, 3, 4, 5, 7, 14, 17, 30, 31, 40]: GROUP_OF[pid] = "structure"
for pid in [9, 10, 11, 15, 16, 18, 19, 20, 21, 34]: GROUP_OF[pid] = "process"
for pid in [8, 12, 28, 29, 32, 33, 35, 36, 37, 38, 39]: GROUP_OF[pid] = "matter"
for pid in [6, 13, 22, 23, 24, 25, 26, 27]: GROUP_OF[pid] = "system"
assert len(GROUP_OF) == 40

DOMAINS = [
    {"key": "ancient", "en": "Ancient & Traditional", "zh": "古代與傳統", "icon": "account_balance"},
    {"key": "mechanical", "en": "Mechanical & Manufacturing", "zh": "機械與製造", "icon": "precision_manufacturing"},
    {"key": "daily", "en": "Everyday Life", "zh": "日常生活", "icon": "coffee"},
    {"key": "business", "en": "Business & Management", "zh": "商業與管理", "icon": "storefront"},
    {"key": "software", "en": "Software & IT", "zh": "軟體與資訊", "icon": "terminal"},
    {"key": "ai", "en": "AI & Frontier Tech", "zh": "AI 與前沿科技", "icon": "neurology"},
]

# ---------------------------------------------------------------- principles
errors, warnings = [], []
principles = []
for n in range(1, 41):
    fp = PDIR / f"p{n:02d}.json"
    if not fp.exists():
        errors.append(f"missing {fp.name}")
        continue
    try:
        d = json.loads(fp.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        errors.append(f"{fp.name}: invalid JSON ({e})")
        continue
    if d.get("id") != n:
        errors.append(f"{fp.name}: id={d.get('id')} != {n}")
        continue
    exs = d.get("examples", [])
    bad = [e for e in exs if e.get("domain") not in VALID_DOMAINS]
    if bad:
        errors.append(f"{fp.name}: bad domains {[e.get('domain') for e in bad]}")
    if len(exs) < 9:
        warnings.append(f"{fp.name}: only {len(exs)} examples")
    doms = {e.get("domain") for e in exs}
    for need, minimum in [("software", 2), ("ai", 2), ("ancient", 1), ("mechanical", 2)]:
        have = sum(1 for e in exs if e.get("domain") == need)
        if have < minimum:
            warnings.append(f"{fp.name}: {need} examples {have} < {minimum}")
    d["group"] = GROUP_OF[n]
    principles.append(d)

principles.sort(key=lambda d: d["id"])

# ---------------------------------------------------------------- aux
def load_aux(name, key):
    fp = ADIR / name
    if not fp.exists():
        errors.append(f"missing {fp}")
        return []
    try:
        return json.loads(fp.read_text(encoding="utf-8")).get(key, [])
    except json.JSONDecodeError as e:
        errors.append(f"{name}: invalid JSON ({e})")
        return []

history = load_aux("history.json", "events")
glossary = sorted(load_aux("glossary.json", "terms"),
                  key=lambda t: (t.get("term", {}).get("en") or "").lower())
quiz = load_aux("quiz.json", "questions")
for i, q in enumerate(quiz):
    if not (isinstance(q.get("answerIndex"), int) and 0 <= q["answerIndex"] < len(q.get("options", []))):
        errors.append(f"quiz q{i}: bad answerIndex")

if errors:
    print("ERRORS:")
    for e in errors:
        print("  -", e)
    sys.exit(1)

total_examples = sum(len(p.get("examples", [])) for p in principles)
total_sources = sum(len(p.get("sources", [])) for p in principles)

# ---------------------------------------------------------------- site copy
HUB_INTRO = [
    {"en": "In 1946, a young patent examiner in the Soviet navy named Genrich Altshuller began asking a heretical question: is invention a matter of luck, or does it follow patterns? After screening hundreds of thousands of patents, he and his colleagues found that across every industry, inventors kept resolving contradictions with the same small set of moves — forty of them. He called the method TRIZ, the Theory of Inventive Problem Solving.",
     "zh": "1946 年,蘇聯海軍專利部門一位年輕的審查員阿舒勒(Genrich Altshuller)開始追問一個離經叛道的問題:發明靠的是運氣,還是有跡可循?他與同事篩讀了數十萬件專利後發現:無論哪個產業,發明家化解矛盾的手法翻來覆去就是那幾招——整理出來共四十種。這套方法後來被稱為 TRIZ(發明性問題解決理論),台灣譯作「萃思」。"},
    {"en": "This site collects all forty principles with hundreds of examples arranged along one axis: time. The same principle that shaped a 2,000-year-old plough shows up in jet engines, in microservices, and in this year's AI architectures. Browse the principles, wander the cases, then test yourself.",
     "zh": "這個網站完整收錄四十項原則,並沿著「時間」這條軸線鋪開數百個案例:塑造兩千年前農具的原則,同樣出現在噴射引擎、微服務架構,以及今年的 AI 模型設計裡。你可以逐項瀏覽原則、漫遊跨時代案例,再用測驗檢驗自己。"},
]

ABOUT_SECTIONS = [
    {"id": "origin", "heading": {"en": "Why this site exists", "zh": "緣起"}, "blocks": [
        {"type": "p", "text": {
            "en": "At the SV–Asia Youth Innovation Leaders Summit (July 19, 2026, National Taiwan University), Chih-Yao Wu — executive director of the Chinese Innovation and Invention Society and a long-time promoter of invention education in Taiwan — gave a talk that mentioned TRIZ and its forty inventive principles. That one mention turned into this rabbit hole: a full bilingual field guide to all forty principles, with cases stretching from ancient crafts to modern AI systems.",
            "zh": "在矽谷亞洲青年創新領袖峰會(2026 年 7 月 19 日,台灣大學)上,長期推動發明教育的中華創新發明學會執行長吳智堯,在演講中提到了 TRIZ 萃思與它的四十項發明原則。那一句話成了這個坑的起點:把四十項原則完整整理成一份雙語圖鑑,案例從古代工藝一路鋪到現代 AI 系統。"}},
        {"type": "p", "text": {
            "en": "TRIZ deserves the treatment. Most creativity advice tells you to think outside the box; TRIZ hands you a map of the box, drawn from the patterns of several hundred thousand actual inventions.",
            "zh": "TRIZ 值得這樣被整理。多數創意方法論叫你「跳出框架思考」;TRIZ 則直接給你一張框架的地圖——而且是從數十萬件真實發明的模式中畫出來的。"}},
    ]},
    {"id": "what-is-triz", "heading": {"en": "What is TRIZ?", "zh": "什麼是 TRIZ?"}, "blocks": [
        {"type": "p", "text": {
            "en": "TRIZ (Russian: Теория решения изобретательских задач, \"Theory of Inventive Problem Solving\") was developed from 1946 onwards by Genrich Altshuller and his colleagues in the Soviet Union. Its core observations: inventive problems contain contradictions (improving one parameter worsens another); the same contradictions recur across industries; and the inventive moves that resolve them recur too. Altshuller distilled forty such moves — the 40 Inventive Principles — and mapped them against 39 engineering parameters in his famous contradiction matrix.",
            "zh": "TRIZ(俄文 Теория решения изобретательских задач,「發明性問題解決理論」)由阿舒勒與同事自 1946 年起在蘇聯發展。核心觀察有三:發明性問題都藏著矛盾(改善一個參數會惡化另一個);相同的矛盾在不同產業反覆出現;化解矛盾的手法也反覆出現。阿舒勒把這些手法提煉成四十項發明原則,並以 39 個工程參數交叉編成著名的矛盾矩陣。"}},
        {"type": "quote", "text": {
            "en": "You can wait a hundred years for enlightenment, or you can solve the problem in 15 minutes with these principles. — attributed to Genrich Altshuller",
            "zh": "「你可以等一百年等靈光乍現,也可以用這些原則在十五分鐘內解決問題。」——相傳出自阿舒勒"}},
        {"type": "p", "text": {
            "en": "The principles were formulated for mechanical engineering, but they describe something more general: the finite geometry of good solutions. That is why this site deliberately pairs each principle with software, business and AI cases — the domains changed, the moves did not.",
            "zh": "這些原則雖然誕生於機械工程,描述的卻是更普遍的東西:好解法的有限幾何。這也是本站刻意為每項原則配上軟體、商業與 AI 案例的原因——領域變了,手法沒變。"}},
    ]},
    {"id": "method", "heading": {"en": "How this was compiled", "zh": "整理方法與資料來源"}, "blocks": [
        {"type": "p", "text": {
            "en": "Definitions and sub-principles follow the standard TRIZ literature. Examples come in two kinds: classic textbook cases from the TRIZ tradition, and modern cases (especially software and AI) researched and verified against public sources for this site. Every principle's detail view lists its sources; the raw research notes live in the repository's /research folder.",
            "zh": "各原則的定義與子原則依循標準 TRIZ 文獻。案例分兩類:一類是 TRIZ 傳統中的經典教材案例,另一類是為本站蒐集、並比對公開來源查證過的現代案例(尤其是軟體與 AI 領域)。每項原則的詳情頁都列有來源;原始查證筆記放在 repo 的 /research 資料夾。"}},
        {"type": "ul", "items": {
            "en": ["Principle names follow common English usage; Chinese names follow translations common in Taiwan's TRIZ community, with alternates listed as aliases.",
                   "The four thematic groups (Structure, Process, Matter, System) are this site's own editorial grouping — not an official TRIZ taxonomy.",
                   "Software and AI cases marked as structural analogies are interpretations, not claims that the inventors consciously applied TRIZ."],
            "zh": ["原則英文名採常見用法;中文名以台灣萃思社群常見譯名為主,其他譯名列為別名。",
                   "四個主題分組(結構、程序、物質、系統)是本站自行編排的閱讀分類,並非 TRIZ 官方分類。",
                   "標註為結構類比的軟體與 AI 案例屬於詮釋,不代表其發明者有意識地套用了 TRIZ。"]}},
    ]},
    {"id": "disclaimer", "heading": {"en": "Disclaimer", "zh": "聲明"}, "blocks": [
        {"type": "p", "text": {
            "en": "This is an independent educational project. It is not affiliated with any TRIZ association, the summit, or any speaker mentioned. Corrections and better examples are welcome — open an issue on GitHub.",
            "zh": "本站為獨立的教育性專案,與任何 TRIZ 學會、前述峰會或講者皆無隸屬關係。歡迎指正錯誤或提供更好的案例——請到 GitHub 開 issue。"}},
    ]},
]

META = {
    "title": {"en": "TRIZ 40 Inventive Principles", "zh": "TRIZ 萃思 40 項發明原則"},
    "subtitle": {"en": "Definitions, sub-principles and hundreds of cases — from ancient crafts to AI.",
                 "zh": "定義、子原則與數百個案例——從古代工藝到 AI。"},
    "repo": "tingwei161803/triz-40",
}

PAGES = [
    {"slug": "home", "layout": "hub", "icon": "home",
     "title": {"en": "Overview", "zh": "總覽"},
     "subtitle": {"en": "Forty ways inventors have always resolved contradictions — traced from ancient crafts to mechanical engineering, software and AI.",
                  "zh": "發明家化解矛盾的四十種手法——從古代工藝、機械工程,一路對照到軟體與 AI。"},
     "intro": HUB_INTRO,
     "stats": [
         {"value": 40, "label": {"en": "Inventive principles", "zh": "發明原則"}},
         {"value": total_examples, "label": {"en": "Cases across eras", "zh": "跨時代案例"}},
         {"value": 6, "label": {"en": "Domains, ancient → AI", "zh": "領域,古代 → AI"}},
         {"value": total_sources, "label": {"en": "Verified sources", "zh": "查證來源"}},
     ]},
    {"slug": "principles", "layout": "principles", "icon": "format_list_numbered",
     "title": {"en": "The 40 Principles", "zh": "40 項原則"},
     "subtitle": {"en": "The complete list. Open any principle for its definition, sub-principles, cases across six domains, and sources.",
                  "zh": "完整清單。點開任一原則可見定義、子原則、橫跨六個領域的案例與來源。"},
     "groups": GROUPS, "domains": DOMAINS, "items": principles},
    {"slug": "cases", "layout": "cases", "icon": "explore",
     "title": {"en": "Cases Across Eras", "zh": "跨時代案例"},
     "subtitle": {"en": "Every case on this site in one stream, from ancient crafts to AI. Filter by domain or search.",
                  "zh": "全站案例一次攤開,從古代工藝到 AI。可依領域篩選或搜尋。"},
     "domains": DOMAINS},
    {"slug": "history", "layout": "timeline", "icon": "history_edu",
     "title": {"en": "History", "zh": "發展史"},
     "subtitle": {"en": "Genrich Altshuller and the improbable journey of TRIZ — from a navy patent office and the Gulag to global engineering practice.",
                  "zh": "阿舒勒與 TRIZ 的傳奇旅程——從海軍專利局、古拉格勞改營,到全球工程界的方法論。"},
     "events": history},
    {"slug": "glossary", "layout": "glossary", "icon": "menu_book",
     "title": {"en": "Glossary", "zh": "詞彙表"},
     "subtitle": {"en": "The TRIZ vocabulary beyond the 40 principles: contradictions, ideality, ARIZ, Su-Field analysis and more.",
                  "zh": "四十項原則之外的 TRIZ 詞彙:矛盾、理想性、ARIZ、物質-場分析等。"},
     "terms": glossary},
    {"slug": "flashcards", "layout": "flashcards", "icon": "style",
     "title": {"en": "Flashcards", "zh": "翻卡"},
     "subtitle": {"en": "Name on the front, definition on the back. Shuffle and drill all forty.",
                  "zh": "正面是原則名,背面是定義。可洗牌,四十張練到熟。"}},
    {"slug": "quiz", "layout": "quiz", "icon": "quiz",
     "title": {"en": "Quiz", "zh": "測驗"},
     "subtitle": {"en": "Which principle does each real case use? Instant feedback, with explanations.",
                  "zh": "每個真實案例用了哪項原則?即時對答並附解說。"},
     "questions": quiz},
    {"slug": "about", "layout": "article", "icon": "info",
     "title": {"en": "About & Sources", "zh": "關於本站"},
     "subtitle": {"en": "Why this exists, how it was compiled, and what to trust.",
                  "zh": "這個站為什麼存在、怎麼整理、哪些內容該怎麼看。"},
     "sections": ABOUT_SECTIONS},
]

HEADER = """/* =========================================================================
   data/data.js — single source of truth for the site (plain globals).
   Generated from tmp/principles/*.json + tmp/aux/*.json by tmp/build_data.py.
   Do not edit by hand; edit the source JSON and re-run the build script.
   ========================================================================= */

"""

def js(obj):
    return json.dumps(obj, ensure_ascii=False, indent=2)

OUT.write_text(HEADER +
               "window.SITE_META = " + js(META) + ";\n\n" +
               "window.SITE_PAGES = " + js(PAGES) + ";\n",
               encoding="utf-8")

print(f"OK: wrote {OUT.relative_to(ROOT)}")
print(f"  principles: {len(principles)}  examples: {total_examples}  sources: {total_sources}")
print(f"  history: {len(history)}  glossary: {len(glossary)}  quiz: {len(quiz)}")
if warnings:
    print("WARNINGS:")
    for w in warnings:
        print("  -", w)
