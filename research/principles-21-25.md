# 查證筆記:原則 21–25(Skipping / Blessing in Disguise / Feedback / Intermediary / Self-service)

研究者:TRIZ 內容研究員(原則 21–25)。所有 `sources` 與標注 sourceUrl 的網址皆以 WebFetch 實際開啟驗證;具體事實(公司、年代、機制)另以 WebSearch 查證。

## 共用參考來源(每項原則的 sources,全部 WebFetch 驗證可開啟)

- TRIZ40.com 各原則專頁(Principle-21 ~ 25):定義與子原則的主要依據,逐頁 WebFetch 驗證。
- triz.org/principles/:確認 21–25 的標準定義與子原則措辭(WebFetch 驗證,頁面完整描述五項)。
- the-trizjournal.com/40-inventive-business-principles-examples/:商業情境案例的依據(WebFetch 驗證)。
- en.wikipedia.org/wiki/TRIZ:一般背景來源(WebFetch 驗證可開啟;注意該頁不逐條列出 40 原則,僅作總論來源)。

子原則措辭同時交叉比對 Altshuller 原版條目(triz40.com 與 triz.org 一致)。

---

## 原則 21 — Skipping / 快速作業

**定義/子原則**:以高速執行有害、危險或高成本的操作,讓破壞效應來不及發生;或快速通過有害的中間狀態。來源:triz40 Principle-21、triz.org。

- **經典教材案例**:高速牙科鑽(triz40 明列)、落錘鍛造、超臨界軸快速通過共振轉速——皆為 TRIZ 標準教材反覆使用的案例。鋼材淬火作為「快速通過有害相變區間」的傳統工藝詮釋。
- **查證過的新/跨域案例**:
  - 急速冷凍(IQF):小冰晶 vs 大冰晶破壞細胞壁的機制為食品科學常識,未附 sourceUrl。
  - 大爆炸式系統切換(big-bang cutover):對應 the-trizjournal 商業版「快速執行痛苦決策以縮短痛苦期」。
  - 縮短臨界區間、毫秒級 stop-the-world GC 暫停:並行程式與 GC 常識,體現「把有害的阻塞階段做到最短」。
  - 提前停止(early stopping):跳過過度擬合階段;ML 常識。
  - 推測式解碼(speculative decoding):WebSearch 查證——小草稿模型提議、大模型平行驗證,2–3x 加速且輸出相同(BentoML / 多篇 arXiv 一致)。
  - 少步數擴散/一致性模型:WebSearch 查證——Consistency Models(Song et al., ICML 2023),把數百步去噪蒸餾為 1–數步。
- sourceUrl 僅附牙科鑽(triz40 Principle-21,已驗證)。其餘為機制性常識或以 WebSearch 查證事實,未附特定網址以免掛上未逐頁 WebFetch 的連結。

## 原則 22 — Blessing in Disguise / 轉害為利

**定義/子原則**:三條(利用有害因素、結合兩個有害作用相互抵消、放大有害因素直到不再有害)。來源:triz40 Principle-22、triz.org、the-trizjournal。

- **經典教材案例**:逆火(backfire)滅火、再生煞車(regenerative braking)、廢熱/廢料回收——皆為 TRIZ 標準案例。
- **查證過的新/跨域案例**:
  - 尼羅河氾濫沉積肥沃淤泥:古埃及農業史常識,對應子原則一(利用環境的有害效應)。
  - 渦輪增壓器:WebFetch 驗證 en.wikipedia Turbocharger——以廢氣動能驅動渦輪壓縮進氣。sourceUrl 已附。
  - 再生煞車:WebFetch 驗證 en.wikipedia Regenerative_braking。sourceUrl 已附。
  - 3M 便利貼:WebSearch + WebFetch(en.wikipedia Post-it_note)雙重查證——1968 Spencer Silver 意外做出弱黏著劑(視為失敗),1974 Art Fry 提出應用,1980 全美上市。sourceUrl 已附。
  - 混沌工程 / Netflix Chaos Monkey:WebSearch(Gremlin/SD Times 等)+ WebFetch(en.wikipedia Chaos_engineering)查證——2011 Netflix,刻意隨機關閉正式環境伺服器以驗證韌性。sourceUrl 已附。
  - 模糊測試(fuzzing):以有害輸入找漏洞,資安常識。
  - 對抗訓練、GAN:AI 常識;GAN 另以 WebFetch(en.wikipedia GAN)驗證「兩網路零和對抗」。sourceUrl 附於 GAN。
  - 差分隱私雜訊:對應子原則三(放大有害因素直到不再有害),資訊安全/隱私常識。

## 原則 23 — Feedback / 回饋

**定義/子原則**:兩條(引入回饋;若已存在則改變其大小或影響)。來源:triz40 Principle-23、triz.org。

- **經典教材案例**:恆溫器、統計製程管制(SPC)——triz40/the-trizjournal 明列。Watt 離心調速器為控制學與 TRIZ 常見的回饋範例。
- **查證過的新/跨域案例**:
  - 克特西比烏斯(Ktesibios)浮子調節水鐘:WebSearch 查證(historyofinformation.com、academia.edu「Feedback control in ancient water clocks」、lewisgroup.uta.edu 控制史)——約公元前 3 世紀,最早的自動回饋自我調節裝置之一。**注意**:en.wikipedia 的 Ctesibius 條目只說他「改良水鐘」,未明確描述浮子回饋調節,故**未**把該 Wikipedia 連結掛為 sourceUrl,以免內容不對應;事實本身有其他來源支持。
  - 定速巡航、A/B 測試、精實創業 build-measure-learn:控制/產品常識,對應回饋閉環。
  - TCP 壅塞控制:WebFetch 驗證 en.wikipedia TCP_congestion_control——以 ACK 與封包遺失為回饋調整傳送視窗。sourceUrl 已附。
  - 反向傳播:誤差回饋驅動學習,ML 常識。
  - RLHF:WebFetch 驗證 en.wikipedia RLHF——人類偏好訓練獎勵模型,再回饋微調語言模型。sourceUrl 已附。
  - 推薦系統點擊回饋:互動回饋更新模型,常識。

## 原則 24 — Intermediary / 中介物

**定義/子原則**:兩條(使用中介載體/流程;把物體暫時與可移除的另一物結合)。來源:triz40 Principle-24、triz.org。

- **經典教材案例**:木工釘沖(nailset,triz40 明列)、隔熱手套/鍋墊。催化劑為 TRIZ 常見的「中介後不被消耗」範例。
- **查證過的新/跨域案例**:
  - 蜜蜂傳粉:自然界/演化的中介載體,生物學常識(對應 spec 的「自然界」古代域)。
  - 履約保證(escrow)、支付網路:對應 the-trizjournal 商業版「中立第三方/中介」。
  - 訊息代理(Kafka/RabbitMQ)、反向代理/API 閘道:分散式系統常識,典型中介物。
  - RAG 檢索器:檢索器在問題與知識間居中媒介,AI 常識。
  - MCP(Model Context Protocol):WebSearch + WebFetch(en.wikipedia Model_Context_Protocol)查證——Anthropic 2024 年推出的開放標準,作為模型與外部工具/資料之間的標準化中介層。sourceUrl 已附。
  - 嵌入向量作為共用表徵:跨模態檢索的中介表徵,AI 常識。

## 原則 25 — Self-service / 自我服務

**定義/子原則**:兩條(讓物體執行自身輔助/維修功能;利用廢棄資源/能量/物質)。來源:triz40 Principle-25、triz.org。

- **經典教材案例**:鹵素燈再生循環(tungsten halogen cycle,triz40 明列)、自潤軸承、廢熱發電/廚餘堆肥——皆為 TRIZ 標準案例。掃地機器人自動回充亦見於 triz40。
- **查證過的新/跨域案例**:
  - 糞肥/堆肥作肥料:古代農業「廢棄物即資源」,對應子原則二。
  - 高溫裂解自清潔烤箱:以自身高熱清潔自己,家電常識。
  - IKEA 平整包裝自組:顧客承擔部分服務,對應 the-trizjournal 商業版「自我服務」。
  - 自動垃圾回收、Kubernetes 自我修復:執行環境/叢集自行維護,系統常識。
  - reCAPTCHA:WebSearch + WebFetch(en.wikipedia ReCAPTCHA)查證——Luis von Ahn,2007,利用人類驗證時的餘力辨識 OCR 失敗的掃描字詞來數位化書籍(利用「廢棄」人力資源)。sourceUrl 已附。
  - 自監督學習:WebFetch 驗證 en.wikipedia Self-supervised_learning——資料自行產生監督訊號。sourceUrl 已附。
  - 自我對弈(AlphaGo Zero):WebSearch + WebFetch(en.wikipedia AlphaGo_Zero)查證——2017 DeepMind,靠與自己對弈產生訓練資料,不用人類棋譜。sourceUrl 已附。
  - Self-Instruct 合成資料:LLM 自行生成微調資料,近年 LLM 常識。

---

## 有疑慮而處理的內容

- **Ktesibios 浮子調節水鐘**:事實以多個來源查證,但 en.wikipedia Ctesibius 未明確支持「回饋調節」框架,故不掛該 Wikipedia 為 sourceUrl(見上)。
- **Oxford Creativity(triz.co.uk)PDF**:原欲作為 sources,但 WebFetch 取回為二進位 PDF、內容無法在頁面層級驗證文字,故未採用,改用 triz40 / triz.org / the-trizjournal / Wikipedia 四個可開啟且內容對應的來源。
- **zh.wikipedia.org/wiki/萃思**:WebFetch 回 404,標題不存在;未採用中文 Wikipedia 作為來源。中文資源(mymkc、永禎)品質不一,未掛入 sources,以維持來源可靠度。
- **sourceUrl 原則**:僅在該網址已逐頁 WebFetch 驗證「可開啟且內容對應該案例」時才附上;純機制性常識或僅以 WebSearch 查證事實者,寧可省略 sourceUrl,不編造連結。
