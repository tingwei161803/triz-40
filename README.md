# TRIZ 萃思 40 項發明原則 · TRIZ 40 Inventive Principles

> 從古代工藝到 AI:TRIZ 40 項發明原則的雙語圖鑑,收錄 437 個跨時代案例與 174 條查證來源。

在 2026 年矽谷亞洲青年創新領袖峰會上聽到中華創新發明學會執行長吳智堯介紹 TRIZ 萃思,回家便掉進了這個坑:把阿舒勒(Genrich Altshuller)從數十萬件專利中歸納出的 40 項發明原則完整整理成一個網站——每項原則都配上定義、子原則,以及從古代工藝、機械工程、日常生活、商業管理,一路到軟體與 AI 的大量案例。

---

## 🔗 線上版 / Live

| | |
|---|---|
| 🌐 網站 | <https://triz-40.peteraim.com/> |

> 直接點進去就能用,無需安裝。可用 `https://triz-40.peteraim.com/principles.html#<slug>` 深連結到特定原則(例如 `#segmentation`)。

---

## ✨ 功能特色

- 🌏 **雙語切換** — English / 繁體中文一鍵切換,整站無殘留
- 🌗 **深色 / 淺色模式** — 手動切換並記憶偏好
- 📑 **多頁面** — 總覽、40 項原則、跨時代案例、發展史、詞彙表、翻卡、測驗、關於,共 8 頁
- 🔍 **即時搜尋** — 原則、案例、術語皆可即時過濾
- 🏷️ **雙軸篩選** — 原則依 4 個主題分組、案例依 6 個領域(古代 → AI)篩選
- 🔗 **深連結** — 每項原則都有專屬 `#<slug>`,可直接分享
- 🃏 **翻卡練習** — 40 張字卡,可洗牌,支援鍵盤操作
- ✅ **隨堂測驗** — 20 題「這個案例用了哪項原則?」即時對答與計分
- 📱 **響應式設計** — 手機、平板、桌機皆適配
- ⚡ **純靜態** — 零 build、無後端、載入快

---

## 📂 內容結構 / 資料來源

```
triz-40/
├── index.html            # 總覽(hub)
├── principles.html       # 40 項原則(搜尋/篩選/詳情)
├── cases.html            # 437 個跨時代案例
├── history.html          # TRIZ 發展史時間軸
├── glossary.html         # 24 條 TRIZ 術語
├── flashcards.html       # 翻卡練習
├── quiz.html             # 隨堂測驗
├── about.html            # 關於本站與方法說明
├── assets/               # 樣式與前端邏輯(shell.js / app.js / styles.css)
├── data/data.js          # 全站唯一資料檔(由 tmp/build_data.py 產生)
├── tmp/                  # 資料管線:內容規格、40 份原則 JSON、輔助資料、合併腳本
└── research/             # 每項原則的查證筆記與來源
```

本站內容整理自**標準 TRIZ 文獻與公開資料**(Wikipedia、Oxford Creativity、The TRIZ Journal、triz40.com 等,完整清單見各原則詳情頁與 `/research`)。案例分兩類:TRIZ 傳統的經典教材案例,以及為本站蒐集並逐一查證的現代案例(尤其軟體與 AI 領域);標註為結構類比的案例屬於詮釋,不代表發明者有意識地套用 TRIZ。

> ⚠️ **非官方**:本網站為個人整理之非官方教育資源,與任何 TRIZ 學會或組織無隸屬關係,
> 如有錯誤或出入,請以原始文獻為準,也歡迎開 issue 指正。

### 資料維護

內容的單一事實來源是 `tmp/principles/*.json` 與 `tmp/aux/*.json`;修改後執行:

```bash
uv run python tmp/build_data.py   # 重新產生 data/data.js
```

---

## 🛠 本機使用

```bash
# 1. clone 專案
git clone https://github.com/tingwei161803/triz-40.git
cd triz-40

# 2a. 最簡單:直接開啟 index.html
open index.html

# 2b. 或啟動本機伺服器(建議,深連結才正常)
uv run python -m http.server 4173
# 然後瀏覽 http://localhost:4173
```

> 本專案為純靜態網站,不需安裝任何依賴。若要跑本機伺服器,一律使用 `uv`。

---

## 📊 流量分析

本站使用 Google Analytics 4(property:「TRIZ 40 發明原則 - GA4」)做匿名流量統計,僅用於了解閱讀情況,不涉及任何個人識別資訊。

---

## 📝 聲明 / License

- 本站為非官方整理;TRIZ 方法論與原始文獻之著作權歸原作者所有,各案例出處見來源連結。
- 程式碼以 MIT 授權釋出。
- 如為權利人且希望調整或移除內容,請開 issue 聯絡。
