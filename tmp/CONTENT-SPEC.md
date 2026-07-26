# TRIZ-40 內容產出規格(所有研究代理共用)

本站蒐集 TRIZ(萃思)40 項發明原則,每項原則要有**大量跨時代案例**(古代→機械→資訊→AI)。
你負責其中一段原則。**嚴格照本規格產出,否則無法合併。**

## 輸出檔案

1. **每項原則一個 JSON 檔**:`tmp/principles/p{NN}.json`(NN = 兩位數,例 `p01.json`)
   - 必須是**合法 JSON**(不是 JS),UTF-8,無註解、無尾逗號。
2. **查證筆記一個 Markdown**:`research/principles-{NN}-{MM}.md`(你負責的區段,例 `principles-01-05.md`)
   - 每項原則列:實際查閱過的來源連結、哪些案例是 TRIZ 經典教材案例、哪些是你搜尋查證過的新案例、有疑慮而捨棄的內容。

路徑都相對於 `/Users/tw/Coding/side-project/triz-40/`。

## JSON Schema(每項原則)

```json
{
  "id": 1,
  "slug": "segmentation",
  "name": { "en": "Segmentation", "zh": "分割" },
  "aliases": { "en": ["Division", "Fragmentation"], "zh": ["切割", "細分"] },
  "definition": { "en": "2–3 sentences.", "zh": "2–3 句。" },
  "subPrinciples": [
    { "en": "Divide an object into independent parts.", "zh": "把物體分成獨立的部分。" }
  ],
  "examples": [
    {
      "domain": "software",
      "title": { "en": "Microservices architecture", "zh": "微服務架構" },
      "body": { "en": "1–3 sentences: what it is AND how it embodies this principle.", "zh": "1–3 句:是什麼+如何體現本原則。" },
      "sourceUrl": "https://example.com/optional-verified-url"
    }
  ],
  "sources": [
    { "label": "Wikipedia — 40 principles", "url": "https://..." }
  ]
}
```

## 案例要求(核心!)

- 每項原則 **≥ 9 個案例,目標 10–12 個**。
- `domain` 只能是這 6 個值,分佈要求:
  | domain | 意義 | 最低數量 |
  |--------|------|---------|
  | `ancient` | 古代/傳統工藝/自然界(約 1850 前,或生物演化) | ≥ 1 |
  | `mechanical` | 機械/製造/硬體工程 | ≥ 2 |
  | `daily` | 日常生活/消費產品 | ≥ 1 |
  | `business` | 商業/管理/流程 | ≥ 1 |
  | `software` | 軟體/資訊/網路 | ≥ 2 |
  | `ai` | AI/機器學習/前沿科技 | ≥ 2 |
- 每個案例的 `body` 必須**明確連回原則機制**(不是只介紹產品),en/zh 內容對等。
- `sourceUrl` 選填:**只放你用 WebFetch 確認可開啟且內容相關的網址**;查不到就省略欄位,不要編造。
- TRIZ 教科書經典案例(如分割之於組合家具、可伸縮天線)可直接寫,於 research 筆記標「經典教材案例」。
- 涉及具體事實(公司、年代、數據)的新案例,用 WebSearch/WebFetch 查證後再寫;查不到就換案例。
- AI 案例請具體(如 MoE 混合專家、LoRA、RAG、模型蒸餾、聯邦學習、CI/CD、A/B testing…),避免空泛的「AI 也能用」。

## 語言規則

- `en` 在前(本站預設語言),`zh` 為台灣繁體中文(軟體、資訊、演算法、機器學習;**不用**软件/信息/算法)。
- 語氣:清楚、中性、像線上刊物;不要行銷腔、不要 emoji。
- 原則的 `name.zh` 用下表的標準名;其他常見譯名放 `aliases.zh`。

## sources 要求

- 每項原則 2–5 條,**全部用 WebFetch 驗證過可開啟**。
- 建議來源:Wikipedia(en/zh)、Oxford Creativity (triz.co.uk)、triz-journal.com、altshuller.ru 英文區、大學/學會教材、公司工程部落格、論文。

## 40 項原則標準名稱表(id / slug / en / zh)

| id | slug | en | zh |
|----|------|----|----|
| 1 | segmentation | Segmentation | 分割 |
| 2 | taking-out | Taking Out | 抽取 |
| 3 | local-quality | Local Quality | 局部品質 |
| 4 | asymmetry | Asymmetry | 非對稱 |
| 5 | merging | Merging | 合併 |
| 6 | universality | Universality | 萬用 |
| 7 | nesting | Nested Doll | 套疊 |
| 8 | anti-weight | Anti-weight | 平衡力 |
| 9 | preliminary-anti-action | Preliminary Anti-action | 預先反作用 |
| 10 | preliminary-action | Preliminary Action | 預先作用 |
| 11 | beforehand-cushioning | Beforehand Cushioning | 事先緩衝 |
| 12 | equipotentiality | Equipotentiality | 等位性 |
| 13 | the-other-way-round | The Other Way Round | 反向操作 |
| 14 | spheroidality | Spheroidality / Curvature | 曲面化 |
| 15 | dynamics | Dynamics | 動態化 |
| 16 | partial-or-excessive | Partial or Excessive Actions | 部分或過量作用 |
| 17 | another-dimension | Another Dimension | 移至新維度 |
| 18 | mechanical-vibration | Mechanical Vibration | 機械振動 |
| 19 | periodic-action | Periodic Action | 週期性作用 |
| 20 | continuity-of-useful-action | Continuity of Useful Action | 連續有效作用 |
| 21 | skipping | Skipping / Rushing Through | 快速作業 |
| 22 | blessing-in-disguise | Blessing in Disguise | 轉害為利 |
| 23 | feedback | Feedback | 回饋 |
| 24 | intermediary | Intermediary | 中介物 |
| 25 | self-service | Self-service | 自我服務 |
| 26 | copying | Copying | 複製 |
| 27 | cheap-short-living | Cheap Short-living Objects | 廉價短壽物品 |
| 28 | mechanics-substitution | Mechanics Substitution | 機械系統替代 |
| 29 | pneumatics-hydraulics | Pneumatics and Hydraulics | 氣壓與液壓 |
| 30 | flexible-shells | Flexible Shells and Thin Films | 撓性殼與薄膜 |
| 31 | porous-materials | Porous Materials | 多孔材料 |
| 32 | color-changes | Color Changes | 改變顏色 |
| 33 | homogeneity | Homogeneity | 同質性 |
| 34 | discarding-recovering | Discarding and Recovering | 拋棄與再生 |
| 35 | parameter-changes | Parameter Changes | 參數改變 |
| 36 | phase-transitions | Phase Transitions | 相變化 |
| 37 | thermal-expansion | Thermal Expansion | 熱膨脹 |
| 38 | strong-oxidants | Strong Oxidants | 強氧化劑 |
| 39 | inert-atmosphere | Inert Atmosphere | 惰性環境 |
| 40 | composite-materials | Composite Materials | 複合材料 |

## subPrinciples

用 Altshuller 原版的子原則條目(每項原則通常 1–4 條),雙語。可參考標準 40 principles 文獻(如 triz.co.uk、Wikipedia「40 principles of invention」)。

## 輔助內容代理(只有被指派的代理要做)

- `tmp/aux/history.json`:`{ "events": [ { "date": "1946", "title": {en,zh}, "body": {en,zh} } ] }` — 12–15 個事件,Altshuller 生平與 TRIZ 發展(出生、專利局起點、致史達林信與勞改、1956 首篇論文、ARIZ、著作、TRIZ 學派擴散、蘇聯解體後西傳、Samsung 等企業採用、1998 逝世、與 AI 結合的近況),**年代逐一查證**。
- `tmp/aux/glossary.json`:`{ "terms": [ { "term": {en,zh}, "def": {en,zh} } ] }` — 18–24 個 TRIZ 術語(TRIZ/萃思、技術矛盾、物理矛盾、39 工程參數、矛盾矩陣、理想性、IFR 理想最終結果、ARIZ、物質-場分析、S 曲線、九宮格/系統算子、資源、裁剪、功能分析、演化趨勢、心理慣性、分離原理、聰明小人法、專利五級…)。
- `tmp/aux/quiz.json`:`{ "questions": [ { "q": {en,zh}, "options": [{en,zh}×4], "answerIndex": 0, "explain": {en,zh} } ] }` — 18–20 題「這個案例用了哪項原則?」,選項為 4 個原則名,難度混合,案例不要跟 principles JSON 撞太多。
- 查證筆記寫到 `research/aux-history-glossary.md`。

## 最後自我檢查(交件前必做)

1. JSON 用工具驗證過合法(可用 `uv run python -c "import json;json.load(open('...'))"`)。
2. 每項原則案例數 ≥9、六域分佈達標、en/zh 都齊。
3. 所有 sourceUrl / sources 都 WebFetch 驗證過。
4. 回報訊息**只要**:寫了哪些檔、每檔案例數、來源數;**不要**把內容全文貼回來。
