# TRIZ 原則 6–10 查證筆記

負責原則:6 Universality 萬用、7 Nested Doll 套疊、8 Anti-weight 平衡力、9 Preliminary Anti-action 預先反作用、10 Preliminary Action 預先作用。

研究方法:先以 `triz40.com` 與 `triz.org` 兩個原則總表確立各原則的官方子原則與經典教材案例(兩者皆以 WebFetch 開啟驗證),再對每個涉及公司/年代/技術細節的現代案例(軟體、AI、商業)逐一 WebFetch 查證機制描述後才寫入 body。所有寫進 JSON 的 `sources` 與 `sourceUrl` 皆已 WebFetch 開啟並確認內容相關。

共用來源(兩者皆驗證可開啟):
- TRIZ40 原則總表(含各原則官方子原則與短例):https://www.triz40.com/aff_Principles_TRIZ.php
- triz.org 40 Principles(原則描述):https://triz.org/principles/

備註:UWaterloo 版 Tate/Domb 經典 PDF(TRIZ40.pdf)為壓縮 PDF,WebFetch 無法取出文字,故改用上述兩個 HTML 總表作為經典案例依據。

---

## 原則 6:Universality 萬用

官方子原則(triz40 / triz.org 一致):一個物件執行多種功能,因而可省去其他元件。

**經典教材案例**(直接沿用,triz40 明列):
- 瑞士刀(刀+剪刀+起子+開瓶器)— sourceUrl 用 triz40。
- (triz40 另列牙刷柄內含牙膏、兒童安全座椅可變推車等,擇要不全用。)

**查證後採用的案例:**
- 聯合收割機(收割+脫粒+揚穀合為一機,名稱由來)— 查證 https://en.wikipedia.org/wiki/Combine_harvester,確認「combine」正是因整合多道工序而得名。
- WeChat 超級應用程式(通訊+社群+支付+小程式)— 查證 https://en.wikipedia.org/wiki/WeChat,原文稱其為 super-app / "app for everything"。
- BusyBox(單一執行檔實作 300+ Unix 指令,自稱「嵌入式 Linux 的瑞士刀」)— 查證 https://en.wikipedia.org/wiki/BusyBox,確認 300+ 指令與別名。
- 智慧型手機、USB-C 通用埠、Unix「一切皆檔案」、基礎模型、多模態模型:皆為通識性機制描述,不涉及需查證的具體數據,故不附 sourceUrl。

**自然/古代域:** 大象鼻子(一器官負責呼吸、嗅、喝、抓、發聲)作為演化把多功能整合進單一附肢的例子。

**捨棄:** triz40 提到的「會議主持人兼記錄兼計時」商業例偏薄弱,改用 WeChat 超級 app,案例更具體且可查證。

案例數 10;六域 ancient1/mechanical2/daily2/business1/software2/ai2,達標。sources 5。

---

## 原則 7:Nested Doll 套疊

官方子原則(兩表一致):物件逐層置入另一物件;或一物穿過另一物的空腔。

**經典教材案例:**
- 伸縮天線(triz40 明列 "Extending radio antenna")— sourceUrl 用 triz40。
- 可疊放椅子(triz40 明列 "Stackable garden chairs")— sourceUrl 用 triz40。
- 俄羅斯套娃(命名由來的傳統工藝)、可收放起落架、套疊量杯:經典短例,通識描述,不另附 sourceUrl。

**查證後採用的案例:**
- 網路封包封裝(HTTP→TCP→IP→乙太訊框逐層包覆)— 查證 https://en.wikipedia.org/wiki/Encapsulation_(networking),原文正以此四層鏈說明 payload 逐層被包。屬「穿過空腔/逐層套入」的軟體對應。
- 巢狀交叉驗證(內層調參包在外層評估迴圈裡)— 查證 https://scikit-learn.org/stable/modules/cross_validation.html,確認 nested CV 為內外雙層結構(該頁有專屬 nested vs non-nested 範例連結)。
- Matryoshka 表徵學習(把由粗到細資訊塞進同一嵌入向量的巢狀前綴,可截短)— 查證 https://arxiv.org/abs/2205.13147,Kusupati et al.,2022-05 初投稿;確認「以俄羅斯套娃為喻、多粒度巢狀、可截短不需重訓」。此為最貼切的現代 AI 套疊案例。
- 店中店(shop-in-shop):商業域,較小事業體嵌入較大賣場空間,通識概念,不附 sourceUrl。
- 巢狀虛擬化(容器在 VM 內、VM 在 hypervisor 上):通識描述,不附 sourceUrl。

案例數 10;六域 ancient1/mechanical2/daily2/business1/software2/ai2,達標。sources 5。

---

## 原則 8:Anti-weight 平衡力

官方子原則(兩表一致):(a) 與能提供升力的物體結合以抵重;(b) 讓物件與環境互動(空氣動力/流體動力/浮力)以抵重。

**經典教材案例:**
- 機翼升力、水翼抬升船體(triz40/triz.org 常引的空氣/流體動力抵重例)。水翼另查證 https://en.wikipedia.org/wiki/Hydrofoil,確認升力抬離船體降阻。

**查證後採用的案例:**
- 魚鰾(充氣器官讓魚以環境浮力抵銷體重、免游動維持深度)— 查證 https://en.wikipedia.org/wiki/Swim_bladder。自然/古代域。
- 電梯配重(配重=轎廂+約 40–50% 額定載重,馬達只拉重量差)— 查證 https://en.wikipedia.org/wiki/Elevator,原文確認 40–50% 數字。
- 平衡臂檯燈 Anglepoise(彈簧各角度抵銷燈臂重量、撥到哪停到哪)— 查證 https://en.wikipedia.org/wiki/Balanced-arm_lamp。
- 財務避險(反向部位抵銷價格風險「重量」;航空公司燃油期貨)— 查證 https://en.wikipedia.org/wiki/Hedge_(finance),原文有航空公司燃油避險例。
- CDN 邊緣分流(邊緣節點承擔源站負載,屬「用環境承重」)— 查證 https://en.wikipedia.org/wiki/Content_delivery_network。
- RLHF 的 KL 懲罰項(反向項把策略拉回參考模型,平衡獎勵推向退化輸出的傾向)— 查證 https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback,原文確認 KL 懲罰項與其抑制漂移的作用。
- 氦氣廣告氣球(浮力>自重)、無伺服器自動擴縮(用雲端彈性容量吸收尖峰)、不平衡資料類別加權(給少數類別反向權重):通識機制描述,不附 sourceUrl。

**說明(誠實標註):** 軟體/AI 的抗重案例為「用反向力/環境力抵銷不利負擔」之機制對應延伸(CDN、自動擴縮=用環境承重;類別加權、KL 懲罰=加入反向力平衡),body 已明確扣回機制。這類跨域對應為 TRIZ 實務常見做法,非牽強套用。

案例數 11;六域 ancient1/mechanical3/daily2/business1/software2/ai2,達標。sources 5。

---

## 原則 9:Preliminary Anti-action 預先反作用

官方子原則(兩表一致):(a) 若作用同時有害有益,改以能控制害處的反向作用;(b) 事先建立可對抗日後不良應力的相反應力。

**經典教材案例:**
- 預力混凝土(鋼腱先壓縮混凝土,抵銷日後張力)— 查證 https://en.wikipedia.org/wiki/Prestressed_concrete,原文確認「事先施加壓應力以對抗服役張力」。屬子原則 (b) 的標準教材例。

**查證後採用的案例:**
- 人痘接種/variolation(金納前中/印/非洲即刻意以輕症材料預先致敏,抵抗日後真感染)— 查證 https://en.wikipedia.org/wiki/Inoculation,確認古代多地實作。古代域。
- 強化玻璃(急冷使表面預壓、核心張力;裂縫須先克服表面壓應力)— 查證 https://en.wikipedia.org/wiki/Tempered_glass。
- 珠擊處理(彈丸打出表面殘餘壓應力,對抗疲勞裂縫張應力)— 查證 https://en.wikipedia.org/wiki/Shot_peening,原文確認壓應力抗疲勞。
- 事前驗屍 pre-mortem(啟動前先假設已失敗、回推並預先反制風險)— 查證 https://en.wikipedia.org/wiki/Pre-mortem,確認 Gary Klein 2007 HBR。商業域。
- Netflix Chaos Monkey(營業時間刻意隨機關伺服器,預先注入故障以逼出韌性=替系統打疫苗)— 查證 https://en.wikipedia.org/wiki/Chaos_engineering,原文確認隨機終止實例、2012 開源。
- 對抗訓練(訓練時餵對抗樣本,預先受控遇襲以抵抗日後攻擊)— 查證 https://en.wikipedia.org/wiki/Adversarial_machine_learning(該頁在 Defenses 明列 adversarial training)。
- 上漆前貼遮蔽膠帶(預先擋掉漆到不該漆的害處)、參數化查詢(執行前先中和注入)、部署前紅隊測試(先反制越獄):通識/機制描述,不附 sourceUrl。

案例數 10;六域 ancient1/mechanical3/daily1/business1/software2/ai2,達標。sources 5。

---

## 原則 10:Preliminary Action 預先作用

官方子原則(兩表一致):(a) 需要前先完成物件全部/部分必要改變;(b) 事先把物件安排就緒,使能從最方便處立即作用、不浪費時間。

**經典教材案例:**
- 背膠壁紙(製造時就上好膠,貼時只需沾濕)— triz40 明列 "Pre-pasted wall paper",sourceUrl 用 triz40。
- 預鑽孔組合家具、預壓撕裂虛線:經典短例,通識描述,不另附 sourceUrl。

**查證後採用的案例:**
- 機場入境預先查驗 preclearance(登機前於外國機場先過移民/海關,落地即以國內旅客離開)— 查證 https://en.wikipedia.org/wiki/Preclearance。商業/流程域。
- KV 快取與提示快取(先算好詞元的 key/value 或提示前綴,後續呼叫直接沿用)— 查證 https://platform.claude.com/docs/en/docs/build-with-claude/prompt-caching(原網址 docs.anthropic.com 已 301 轉址至 platform.claude.com,已依轉址重新驗證),確認「快取並重用已處理前綴、降低延遲與成本」。
- 浸種催芽(播種前先浸泡使發芽啟動)、預鑄模組化營建、mise en place 備料就位、預取/預先計算、資料庫索引、RAG 預先計算嵌入向量:皆為通識/機制描述,不附 sourceUrl。

案例數 11;六域 ancient1/mechanical3/daily2/business1/software2/ai2,達標。sources 4。

---

## 總覽

| 原則 | 案例數 | 六域達標 | sources |
|------|--------|----------|---------|
| 06 Universality 萬用 | 10 | 是 | 5 |
| 07 Nested Doll 套疊 | 10 | 是 | 5 |
| 08 Anti-weight 平衡力 | 11 | 是 | 5 |
| 09 Preliminary Anti-action 預先反作用 | 10 | 是 | 5 |
| 10 Preliminary Action 預先作用 | 11 | 是 | 4 |

所有 JSON 已用 `uv run python -c "import json; json.load(...)"` 驗證合法。所有 sources 與 sourceUrl 皆經 WebFetch 開啟且內容相關。zh 為台灣繁體(用軟體/資訊/演算法/機器學習等,無簡體用詞)。
