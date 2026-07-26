# 查證筆記:TRIZ 原則 1–5(Segmentation / Taking Out / Local Quality / Asymmetry / Merging)

負責人:內容研究員(原則 1–5)。所有 `sources` 與 `sourceUrl` 皆以 WebFetch 實際開啟並確認內容相關後才寫入。

## 共用來源(跨五項原則)

以下三個為 TRIZ 通用來源,全部 WebFetch 驗證可開啟:

- **triz40.com — The 40 Principles**：<https://www.triz40.com/aff_Principles_TRIZ.php>。用來核對原則 1–5 的子原則措辭與經典例(磚砌、伸縮天線、百葉窗、稻草人、便當分格、極性插頭、多刀片刮鬍刀等)。
- **Wikipedia — TRIZ**:<https://en.wikipedia.org/wiki/TRIZ>。核對 TRIZ 定義與 Altshuller 生平(1946 於蘇聯海軍審查發明提案時起步、1950 遭捕、史達林死後獲釋)。此頁未逐條列出 40 原則細節。
- **Oxford Creativity — TRIZ**:<https://www.triz.co.uk/>。確認為 Oxford Creativity 官方 TRIZ 網站,首頁載明 TRIZ 為系統化問題解決方法(用於 p02、p03 的一般性來源)。

> 已捨棄來源:`the-triz-journal.com/40-inventive-principles-examples/` — WebFetch 回傳 `getaddrinfo ENOTFOUND`,網域無法解析,未採用。

---

## 原則 1 Segmentation 分割(11 例)

**經典教材案例(直接沿用,triz40.com 核對)**:磚石砌築、自然界體節、伸縮天線、百葉窗、模組化組合家具、刻痕巧克力片。

**查證過的新/現代案例**:
- 市場區隔(business)— WebFetch Wikipedia「Market segmentation」確認「將市場切分成有意義的次群體(區隔)」。`sourceUrl` 已附。
- 微服務(software)— WebFetch Wikipedia「Microservices」確認為「把單體切成可獨立部署的鬆耦合服務」。`sourceUrl` 已附。
- 資料庫分片(software)— 為業界通用概念,未加 `sourceUrl`(未逐一 WebFetch 專頁)。
- MoE 專家混合(ai)— WebFetch Wikipedia「Mixture of experts」確認「將問題空間切分、由 gating 路由到專家子網」,並列出 Switch Transformer、GLaM(1.2T)、Mixtral 8x7B、DBRX 等真實模型。`sourceUrl` 已附。
- RAG 文件分塊(ai)— 業界通用做法,未加 `sourceUrl`。

`sources`(5):triz40 / Wikipedia TRIZ / Wikipedia Microservices / Wikipedia Market segmentation / Wikipedia MoE。

## 原則 2 Taking Out 抽取(10 例)

**經典教材案例**:稻草人(抽取「人的嚇阻性質」)、壓縮機置於室外(抽離噪音與熱)、光纖導光(取光留熱)— 皆為 TRIZ 標準例,triz40.com 核對。

**查證過的新/現代案例**:
- 低咖啡因咖啡(daily)、非核心業務外包(business)— 概念清楚,未加 `sourceUrl`。
- CDN、把設定/機密抽離程式碼(software)— 業界通用,未加 `sourceUrl`。
- 神經網路剪枝(ai)— WebFetch Wikipedia「Pruning (artificial neural network)」確認「移除參數以縮小模型、維持準確度」,頁面標題無誤。`sourceUrl` 已附。
- 命名實體辨識、RAG 檢索(ai)— 通用技術,未加 `sourceUrl`。

`sources`(4):triz40 / Wikipedia TRIZ / Oxford Creativity / Wikipedia Pruning。

## 原則 3 Local Quality 局部品質(11 例)

**經典教材案例**:帶橡皮擦的鉛筆(每端不同功能)、便當/冰箱分區(各區最適條件)、羊角錘 — triz40.com 核對。

**查證過的案例**:
- 差別硬化刀刃(ancient)— WebFetch Wikipedia「Differential heat treatment」確認刀刃硬(martensite, ~HRc60)、刀背軟韌(pearlite),為單一物體內的非均勻硬度。`sourceUrl` 已附。
- 表面硬化齒輪(mechanical)— 滲碳為標準冶金製程,概念確立,未加 `sourceUrl`。
- 專業分工部門、分層儲存、選擇性索引 — 通用概念,未加 `sourceUrl`。
- 混合精度訓練、注意力機制、LoRA 領域適配器(ai)— 皆為確立的 ML 技術,體現「非均勻分配」;未逐一加 `sourceUrl`。

`sources`(4):triz40 / Wikipedia TRIZ / Oxford Creativity / Wikipedia Differential heat treatment。

## 原則 4 Asymmetry 非對稱(11 例)

**經典教材案例**:極性插頭(只能一種方向插)— triz40.com 核對。

**查證過的案例**:
- 比目魚眼睛遷移(ancient/nature)、翻土犁(ancient)— 生物/工具的自然與傳統不對稱,概念確立,未加 `sourceUrl`。
- 翼型、D 形鍵軸(mechanical)、缺角 SIM/SD 卡(daily)、帶路貨定價(business)— 概念清楚,未加 `sourceUrl`。
- 公開金鑰加密(software)— WebFetch Wikipedia「Public-key cryptography」確認「一對不同的公鑰/私鑰」,此不對稱為系統核心。`sourceUrl` 已附。
- ADSL 非對稱寬頻(software)— WebFetch Wikipedia「Asymmetric digital subscriber line」確認「下載頻寬刻意大於上傳」。`sourceUrl` 已附。
- 非對稱損失函數、非對稱量化(ai)— 皆為真實 ML 技術(非對稱量化用非零 offset 貼合非零中心資料);未加 `sourceUrl`。

`sources`(4):triz40 / Wikipedia TRIZ / Wikipedia Public-key cryptography / Wikipedia ADSL。

> 捨棄:原考慮「asymmetric information / 檸檬市場」作 business 例,因它是一種既存的資訊落差、而非刻意設計的不對稱形狀,與本原則機制較不貼合,改用「帶路貨定價」(整條產品線刻意不對稱加成)。

## 原則 5 Merging 合併(11 例)

**經典教材案例**:多刀片刮鬍刀(合併相同刀片)— triz40.com 核對;一捆木棒(伊索寓言,合併相同弱元素)。

**查證過的案例**:
- 內共生/粒線體(ancient/nature)— 演化上兩生物合併,概念確立,未加 `sourceUrl`。
- 聯合收割機(mechanical)— WebFetch Wikipedia「Combine harvester」確認名稱來自「combine 收割、脫粒、風選三道工序於一機」。`sourceUrl` 已附。
- 多功能事務機(daily)— 概念清楚,未加 `sourceUrl`。
- 併購 M&A(business)— WebFetch Wikipedia「Mergers and acquisitions」確認「兩實體整併為單一法律實體」。`sourceUrl` 已附。
- Git merge、請求批次化(software)— 通用概念,未加 `sourceUrl`。
- 模型合併 / model soups(ai)— WebFetch arXiv 2203.05482(Wortsman et al., 2022)確認核心為「把多個同基底微調模型的權重取平均併成一個模型,提升準確度且不增推論成本」。`sourceUrl` 已附。
- 連續批次處理 vLLM(ai)— WebSearch 佐證 vLLM「動態把湧入請求合併進運作中的批次」,吞吐量可達數倍(Anyscale 記錄 23x);未加 `sourceUrl`(未 WebFetch 專頁)。
- 集成學習(ai)— 通用 ML 概念,未加 `sourceUrl`。

`sources`(5):triz40 / Wikipedia TRIZ / Wikipedia Combine harvester / Wikipedia M&A / arXiv model soups。

---

## 交件自我檢查

- 5 檔皆以 `uv run python` 載入驗證為合法 JSON。
- 每檔案例數:p01=11, p02=10, p03=11, p04=11, p05=11,皆 ≥9。
- 六域分佈(ancient≥1, mechanical≥2, daily≥1, business≥1, software≥2, ai≥2)以程式逐檔檢查全數達標。
- en/zh 皆齊;zh 使用台灣繁體(軟體、資訊、演算法、網路、伺服器、快取、剪枝、量化、金鑰)。
- 所有 `sources` 與已附之 `sourceUrl` 皆 WebFetch 驗證可開啟且內容相關;查不到或未逐一驗證專頁者一律省略 `sourceUrl`,未編造網址。
