# 查證筆記:TRIZ 原則 16–20

負責原則:16 部分或過量作用、17 移至新維度、18 機械振動、19 週期性作用、20 連續有效作用。

## 共用來源(每項原則的 `sources` 都含前兩者,已 WebFetch 驗證可開啟)

- **TRIZ40 — 40 Inventive Principles**:<https://www.triz40.com/aff_Principles_TRIZ.php> — WebFetch 成功,取得 16–20 的子原則與例子。
- **triz.org — The 40 Principles**:<https://triz.org/principles/> — WebFetch 成功,子原則措辭一致(如 P19 灑水器脈動、P20「full capacity、消除空動作」)。
- 註:triz-journal.com 原文 522 逾時無法開啟,故未列為來源。子原則以 triz40.com + triz.org 交叉比對確立。

子原則措辭採 Altshuller 原版:P16「取略多或略少」;P17「二/三維移動、多層、傾斜/改朝向、用另一面」;P18「振動→提高頻率至超音波→共振→壓電/場致」;P19「連續改脈衝→改頻率/幅度→用間歇做另一件事」;P20「滿載連續、消除空動作」。

---

## P16 部分或過量作用

**經典教材案例(直接採用)**:量穀斗刮平(過量後刮除)、近淨成形鑄造後精加工、螺栓先預緊再鎖緊(furniture/flange,triz40 明列)、矽利康打過量再抹平(triz.org 明列 silicone sealant)、有損壓縮/JPEG、超取樣抗鋸齒 SSAA。

**查證過的新案例**:
- MVP 最小可行產品 — 驗證 <https://en.wikipedia.org/wiki/Minimum_viable_product>;修正:此詞由 Frank Robinson 於 2001 年提出,後經 Steve Blank / Eric Ries 的精實創業推廣,故文案寫「2001 年提出、經精實創業運動普及」,未把發明權歸給 Ries。
- Dropout — 驗證 <https://en.wikipedia.org/wiki/Dilution_(neural_networks)>;確認由 Hinton 等人於 2012 年提出(arXiv 2012;JMLR 論文 2014)。文案採 2012。
- 過量參數化再剪枝 — 驗證 <https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network)>;確認「訓練後移除最不重要權重以縮小網路」。維基未提 lottery ticket 假說,故文案不特別引用該假說,只寫通則。
- 低精度量化(8-bit/4-bit)— 業界通則,未加 sourceUrl。

**六域**:ancient1 / mechanical2 / daily1 / business1 / software2 / ai3 = 10。

---

## P17 移至新維度

**經典教材案例**:梯田(垂直多層耕作)、立體停車場、多層立體交流道、上下舖(triz 類型例)、OLAP 多維資料立方體。

**查證過的新案例**:
- QR Code — 驗證 <https://en.wikipedia.org/wiki/QR_code>;確認 Denso Wave(發明人 Masahiro Hara)1994 年、二維較一維大幅提升容量。文案由「數百倍」改保守寫「多出許多倍」以免過度精確。
- 矩陣式組織 — 驗證 <https://en.wikipedia.org/wiki/Matrix_management>;確認「沿兩維同時回報」、1950 年代美國航太業興起。
- 詞向量 Word2vec — 驗證 <https://en.wikipedia.org/wiki/Word2vec>;確認 Google(Mikolov 團隊)2013 年、語境相近者於向量空間鄰近。
- NeRF 神經輻射場 — 驗證 <https://en.wikipedia.org/wiki/Neural_radiance_field>;確認 2020 年由 Mildenhall 等人提出、由 2D 照片重建 3D 體積表示。
- 摺疊手機 — 三星 Galaxy Fold 2019 年上市(業界共識,未加 sourceUrl,僅標年代)。

**六域**:ancient1 / mechanical2 / daily2 / business1 / software2 / ai2 = 10。

---

## P18 機械振動

**經典教材案例**:手搖篩篩分、混凝土振動棒、超音波清洗(提高頻率至超音波)、體外震波碎石(共振/聲能碎石,triz 常見教材例)、音波電動牙刷。

**查證過的新案例**:
- 體外震波碎石 — 驗證 <https://en.wikipedia.org/wiki/Lithotripsy>;確認 ESWL 非侵入、1980 年首次用於腎結石。歸類 mechanical(醫療器械工程)。
- Chaos Monkey / 混沌工程 — 驗證 <https://en.wikipedia.org/wiki/Chaos_engineering>;確認 Netflix 2011 年推出、隨機終止線上機器以測試韌性。
- 擴散模型 — 驗證 <https://en.wikipedia.org/wiki/Diffusion_model>;確認 DDPM 2020 年(Ho 等人)、加高斯雜訊再逆轉去噪。
- SGD 雜訊有益逃離尖銳極小值 — 最佳化領域通則,未加 sourceUrl。

**應用類比(非經典教材,於文案中以「把某子原則套用到…」措辭標示,不宣稱為 Altshuller 原例)**:
- 高頻交易(business)— 對應「提高作用頻率」子原則。屬合理延伸,非教科書案例;文案明說「這是把提高作用頻率的想法套用到市場」。
- 抖動 Dithering(software)— 「刻意加入高頻振動改善量化」,信號處理通則。

**六域**:ancient1 / mechanical3 / daily1 / business1 / software2 / ai2 = 10。

---

## P19 週期性作用

**經典教材案例**:四行程內燃機(脈衝動力+間歇做前置)、衝擊鑽、閃爍自行車燈(triz 常見「閃燈比恆亮省電且更醒目」)、PWM 脈寬調變、cron 排程、心跳訊息。

**自然界案例**:脈動式血液循環(心跳脈衝,舒張間歇供冠狀動脈充血)— 歸 ancient(生物演化),兼示「用間歇做另一件事」子原則。

**查證過的新案例**:
- 敏捷 Sprint — 驗證 <https://en.wikipedia.org/wiki/Scrum_(software_development)>;確認固定長度 1–4 週(常見 2 週)、期末有 review + retrospective(間歇做調整)。
- 週期性學習率 / 暖重啟 SGDR — 驗證 <https://arxiv.org/abs/1608.03983>;確認 Loshchilov & Hutter 2016(ICLR 2017)、以餘弦退火週期性重啟學習率。註:Wikipedia「Learning rate」頁只列單調衰減、未提 SGDR,故改引 arXiv 原論文。
- 聯邦學習通訊回合 — 驗證 <https://en.wikipedia.org/wiki/Federated_learning>;確認 Google(McMahan 等人)2016–2017、週期性回合+回合間本地訓練。

**六域**:ancient1 / mechanical3 / daily1 / business1 / software2 / ai2 = 10。

---

## P20 連續有效作用

**經典教材案例**:諾利亞提水輪(河流驅動連續提水)、雙向列印(消除回程空動作,Altshuller 經典「列印於回程」)、飛輪儲能(填補動力行程間歇)、電扶梯 vs 電梯(連續 vs 停等,triz.org 明列 escalator)、CI/CD、串流處理。

**查證過的新案例**:
- 連續鑄造 — 驗證 <https://en.wikipedia.org/wiki/Continuous_casting>;確認連鑄成不間斷連鑄胚、免除停停走走、提升良率。
- vLLM 連續批次處理 — 驗證 <https://docs.vllm.ai/en/latest/>;文件明列「Continuous batching of incoming requests」與 PagedAttention,確認動態插入請求以維持 GPU 滿載。
- 日不落(follow-the-sun)作業 — 跨時區交接使工作全天候不停,管理通則,未加 sourceUrl。
- 線上/持續學習 — ML 通則,未加 sourceUrl。

**六域**:ancient1 / mechanical3 / daily1 / business1 / software2 / ai2 = 10。
此檔 `sources` 為 4 條(triz40、triz.org、continuous casting、vLLM docs),全部 WebFetch 驗證,符合 2–5 條規範。

---

## 捨棄/未採用

- triz-journal.com 原始 40 principles 長文:522 逾時,未能開啟,不列為來源。
- P19「cyclical learning rate」原想引 Wikipedia「Learning rate」,但該頁未涵蓋週期性排程,改引 SGDR arXiv,避免來源與文案不符。
- lottery ticket 假說:Pruning 維基未提及,為免引用不實,文案僅寫「訓練大網路後剪枝」通則,不點名該假說。
