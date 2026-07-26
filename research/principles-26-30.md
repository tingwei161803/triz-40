# 查證筆記:原則 26–30(Copying / Cheap Short-living / Mechanics Substitution / Pneumatics & Hydraulics / Flexible Shells）

研究者:triz-p26-30。所有 `sources` 與帶 `sourceUrl` 的案例都以 WebFetch 開啟驗證;純事實(年代、發明人)另以 WebSearch 交叉查證。triz-journal.com 當日回傳 HTTP 522 無法開啟,故未採用,改以 triz40.com 為原則正典文字來源。

## 共用來源(全部 WebFetch 驗證可開啟)

- **triz40.com — The 40 Principles**:https://www.triz40.com/aff_Principles_TRIZ.php — 原則 26–30 的子原則與經典例(碰撞假人、砂模、磁場、可充氣結構、薄膜等)正典依據。
- **Wikipedia — TRIZ**:https://en.wikipedia.org/wiki/TRIZ — 一般背景(主條目未逐條列 40 原則,僅作通論來源)。

子原則文字採 Altshuller 標準版本(與 triz40.com 敘述一致),雙語重寫。

---

## 原則 26 Copying 複製(11 案例)

**經典教材案例(可直接寫)**:碰撞測試假人、光學複製/攝影測量、飛行模擬器、原型樣品。皆為 40 principles 教材對 26 的標準舉例。

**查證過的事實案例**:
- Thales 用影子量金字塔:WebSearch 確認約公元前 600 年,以相似三角形(棍影 vs 塔影)推算塔高。屬「光學複製代替難以量測的原物」。列為 ancient,未附 sourceUrl(僅 WebSearch 查證,未逐頁 WebFetch)。
- 碰撞測試假人:WebSearch 確認 Sierra Sam(1949,Sierra Engineering)、GM Hybrid III(1977)。WebFetch 驗證 https://en.wikipedia.org/wiki/Crash_test_dummy(儀器化擬人替身)→ 作 sourceUrl。
- 知識蒸餾:WebSearch + WebFetch 驗證 Hinton, Vinyals, Dean 2015,arXiv 1503.02531(學生模型複製教師軟輸出)→ 作 sourceUrl。
- 紅外線熱影像:對應子原則「可見光→紅外/紫外複製」,列 mechanical。
- 其餘(街景/VR、預備環境與唯讀複本、模擬器 QEMU、合成資料/sim-to-real)為通識性技術事實,未附 sourceUrl。

**sources**:triz40、Wikipedia TRIZ、Wikipedia Crash test dummy、arXiv 1503.02531(皆 WebFetch 驗證)。

---

## 原則 27 Cheap Short-living Objects 廉價短壽物品(11 案例)

**經典教材案例**:拋棄式刮鬍刀/餐具、單次使用醫療耗材、砂模鑄造。皆為 27 的標準舉例。

**查證過的事實案例**:
- Kulhar 陶土拋棄杯:WebFetch 驗證 https://en.wikipedia.org/wiki/Kulhar(南亞未上釉、單次使用、幾乎不重複用)→ 作 sourceUrl 與 source。
- 犧牲陽極:WebSearch 確認 Humphry Davy 1824 向 Royal Society 報告,鋅/鐵保護銅船殼(HMS Samarang);與剪切銷同列 mechanical「犧牲廉價件保護昂貴件」。未附 sourceUrl(僅 WebSearch;AMPP/Wikipedia 頁未逐一 WebFetch)。
- 植物散播廉價種子:自然界演化例(spec 允許自然界歸 ancient)。
- 軟體/AI 例(無伺服器臨時容器、一次性密碼/短效權杖、可搶占/競價 GPU、臨時模型部署)為通識性技術事實,未附 sourceUrl。

**捨棄**:原考慮「快時尚」作 business 例,因價值判斷易生爭議且非必要(business 已由活動手環滿足),捨棄。

**sources**:triz40、Wikipedia TRIZ、Wikipedia Kulhar(皆 WebFetch 驗證)。

---

## 原則 28 Mechanics Substitution 機械系統替代(12 案例)

**經典教材案例**:指南針(磁場導航)、磁浮、感應加熱、天然氣加臭(嗅覺替代偵測器)。皆為 28 的標準舉例,分別對應「感官場」「電磁場」子原則。

**查證過的事實案例**:
- 磁浮:WebFetch 驗證 https://en.wikipedia.org/wiki/Maglev(磁懸浮取代車輪)→ sourceUrl。
- 磁流變阻尼器:WebFetch 驗證 https://en.wikipedia.org/wiki/Magnetorheological_fluid(鐵磁粒子+磁場變硬,汽車 MagneRide)→ sourceUrl,對應子原則「場+可活化粒子」。
- 軟體定義無線電:WebFetch 驗證 https://en.wikipedia.org/wiki/Software-defined_radio(混頻/濾波/調變由硬體改為軟體)→ sourceUrl。
- 天然氣加臭:WebSearch 確認 1937 New London 校園氣爆後德州立法強制加硫醇(嗅覺警示)。作 daily「感官手段取代偵測器」,未附 sourceUrl。
- 蝙蝠回聲定位(聲學場)、NFC 感應支付、無鑰匙智慧鎖、SDN、5G/雷達波束成形(可動且有結構的場)、電腦視覺檢測(光學場取代機械量規)為通識性事實,未附 sourceUrl。

**註**:原則 28 偏物理場,software≥2 以「以軟體場/可程式層取代機械與硬體機構」詮釋(SDR、SDN);ai≥2 用波束成形(對應子原則:靜態→可動、無結構→有結構)與電腦視覺檢測。

**sources**:triz40、Wikipedia Maglev、Wikipedia Magnetorheological fluid、Wikipedia Software-defined radio(皆 WebFetch 驗證)。

---

## 原則 29 Pneumatics and Hydraulics 氣壓與液壓(12 案例)

**經典教材案例**:液壓煞車/壓床/挖土機、充氣輪胎與空氣懸吊、氣墊船、安全氣囊、氣墊鞋/凝膠/水床/氣泡紙、氣送管。皆為 29 的標準舉例。

**查證過的事實案例**:
- 魚鰾:WebFetch 驗證 https://en.wikipedia.org/wiki/Swim_bladder(充氣器官調浮力)→ sourceUrl,自然界例歸 ancient。
- 氣送管:WebFetch 驗證 https://en.wikipedia.org/wiki/Pneumatic_tube(壓縮空氣送現金/文件/檢體,銀行/醫院)→ sourceUrl。
- 氣動軟體機器人夾爪:WebFetch 驗證 https://en.wikipedia.org/wiki/Soft_robotics(氣壓驅動柔性致動)→ sourceUrl,以「學習控制策略」帶入 AI/前沿。
- 鍛爐風箱(古代氣壓工具)為通識事實。
- 軟體例採流體力學類比:訊息佇列作緩衝池(對應液壓蓄能器/氣墊)、背壓與流量控制(reactive streams/TCP,直接借自流體力學)。AI 例另加「AI 叢集液體/浸沒冷卻」(以液體部件取代空氣+固體散熱片)。皆為通識性技術事實,未附 sourceUrl。

**sources**:triz40、Wikipedia Swim bladder、Wikipedia Pneumatic tube、Wikipedia Soft robotics(皆 WebFetch 驗證)。

---

## 原則 30 Flexible Shells and Thin Films 撓性殼與薄膜(11 案例)

**經典教材案例**:充氣/薄膜結構、保鮮膜/收縮膜/真空包裝、塗層、隔膜泵。皆為 30 的標準舉例,並對應子原則「以薄膜隔離物體與環境」。

**查證過的事實案例**:
- 細胞膜:WebFetch 驗證 https://en.wikipedia.org/wiki/Cell_membrane(脂質雙層薄膜區隔並保護細胞內部)→ sourceUrl,自然界例歸 ancient,對應「隔離」子原則。
- 張力薄膜屋頂:WebFetch 驗證 https://en.wikipedia.org/wiki/Tensile_structure(確認 Frei Otto 用於 1972 慕尼黑奧運體育場屋頂)→ sourceUrl。
- LoRA:WebFetch 驗證 https://arxiv.org/abs/2106.09685(凍結預訓練權重、注入可訓練低秩層)→ sourceUrl,詮釋為「薄轉接層包覆凍結大模型」。
- 帳篷/蒙古包(撓性外殼庇護所)、不沾/保護塗層、軟袋包裝、容器與沙箱(對應「隔離」子原則)、精簡客戶端、撓性薄膜/電子皮膚感測器為通識性事實,未附 sourceUrl。

**LoRA 去重說明**:LoRA 同時契合原則 27(廉價可拋)與 30(薄轉接層),為避免重複,27 改用「臨時模型部署/可搶占 GPU」,LoRA 僅用於 30(薄膜/隔離語意更貼切)。

**sources**:triz40、Wikipedia Cell membrane、Wikipedia Tensile structure、arXiv 2106.09685(皆 WebFetch 驗證)。

---

## 交件自我檢查

- 五檔 JSON 皆以 `uv run python -c "import json;json.load(...)"` 驗證合法。
- 案例數:p26=11, p27=11, p28=12, p29=12, p30=11(皆 ≥9)。
- 六域分佈:五檔皆滿足 ancient≥1、mechanical≥2、daily≥1、business≥1、software≥2、ai≥2;domain 值全部合法。
- en/zh 皆齊(title 與 body 雙語完整)。
- 所有 sources 與 sourceUrl 皆 WebFetch 驗證可開啟;未逐頁 WebFetch 的事實不附 sourceUrl(僅寫入 body 並於本筆記記錄 WebSearch 查證)。
