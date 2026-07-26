# TRIZ 原則 31–35 查證筆記

研究員負責原則 31–35。所有 `sources` 與帶 `sourceUrl` 的案例皆以 WebFetch 實際開啟並確認內容相關後才寫入。以下逐項列出:子原則來源、經典教材案例、查證過的新案例、以及捨棄的內容。

共用主來源(WebFetch 驗證可開啟,列出各原則子原則與示例):
- triz40.com「40 Inventive Principles」總表(lang=en):<https://www.triz40.com/aff_Principles_TRIZ.php?lang=en> — 確認載入,principles 31–35 皆有子原則與示例。
- Wikipedia「TRIZ」:<https://en.wikipedia.org/wiki/TRIZ> — 確認載入,提及 40 principles(但無逐項細節,故不作為單項來源)。

---

## 原則 31 — Porous Materials 多孔材料

**子原則(Altshuller,triz40 驗證)**
- A. 使物體多孔,或加入多孔元素(嵌件、塗層)。
- B. 若已多孔,利用孔隙引入有用物質/功能。

**經典教材案例**
- 鑽孔減重(結構件、航太肋板)— triz40 列「weight reduction through drilling」。
- 燒結多孔青銅自潤軸承(Oilite)— 孔隙靠毛細吸油、受熱受壓釋油。經典教材+ WebFetch 驗證:<https://en.wikipedia.org/wiki/Plain_bearing>(明列 sintered/Oilite「porous walls draw oil in via capillary action and release the oil when pressure or heat is applied」)。
- 通風多孔鞋墊(triz40 示例)。

**查證過的新案例**
- Gore-Tex 膨體 PTFE(ePTFE)防水透氣膜:孔徑約 0.2µm,比水滴小約兩萬倍、比水蒸氣分子大約 700 倍,靠尺寸排除;每平方英寸約 90 億個孔。來源 WebSearch(gore-tex.com、alpinetrek、mammut 等一致)。機制正確,故採用;為求保守未附單一 sourceUrl。
- 金屬有機骨架(MOF)/多孔金屬氫化物儲氣:WebFetch 驗證 <https://en.wikipedia.org/wiki/Metal%E2%80%93organic_framework>(「MOFs are of interest for the storage of gases such as hydrogen and carbon dioxide」,MOF-5 1999 超高孔隙度)。另 WebSearch 佐證碳氣凝膠/NaAlH4 奈米限域改善儲氫動力學。
- 開放式創新(Open Innovation, Chesbrough)作為「多孔的組織邊界」:WebFetch 驗證 <https://en.wikipedia.org/wiki/Open_innovation>(「The boundaries between a firm and its environment have become more permeable」)。商業域類比,子原則 A/B(讓外部有用知識流入)。
- 稀疏檔案(sparse file):把空白區以中繼資料「孔洞」表示。WebFetch 驗證 <https://en.wikipedia.org/wiki/Sparse_file>。
- 稀疏矩陣儲存(CSR)、神經網路剪枝(sparse/pruned network)、Dropout:皆為成熟技術,對應「使結構多孔以減重而保功能」;未附 sourceUrl。
- 鳥類氣腔骨(pneumatized bones):自然演化的多孔輕量骨骼,支撐飛行。常識性生物事實,未附 sourceUrl。

**捨棄**
- 「多孔=海綿」過於空泛,改以有機制的鞋墊/軸承/膜替代。

---

## 原則 32 — Color Changes 改變顏色

**子原則(triz40 驗證)**
- A. 改變物體或環境的顏色。
- B. 改變物體或環境的透明度。
- C. 用有色/發光添加劑,讓難見之物可見。
- D. 若已用添加劑,改用發光示蹤劑。

**經典教材案例**
- 液晶額溫貼片變色指示發燒(triz40 示例)。
- 滴定指示劑、光致變色鏡片、感溫變色溫度計(40 principles 化學版 PDF、triz40)。

**查證過的新案例**
- 頭足類(章魚/烏賊)色素細胞 chromatophore 變色偽裝/示意:WebFetch 驗證 <https://en.wikipedia.org/wiki/Chromatophore>(肌肉牽張色囊改變顏色;偽裝與社交顯示)。自然/古老域。
- 螢光/有色滲透探傷(dye penetrant inspection)顯現表面裂紋:WebFetch 驗證 <https://en.wikipedia.org/wiki/Dye_penetrant_inspection>(顯像劑把滲入裂縫的染料吸出形成可見指示)。
- 光致變色(Transitions)鏡片遇 UV 變深:WebFetch 驗證 <https://en.wikipedia.org/wiki/Photochromism>(「Reversible photochromism is the basis of color changing lenses for sunglasses」)。
- 感溫變色(液晶/leuco 染料)指示:WebFetch 驗證 <https://en.wikipedia.org/wiki/Thermochromism>(額溫、嬰兒奶瓶、Coors Light 罐)。
- 電致變色智慧玻璃(Boeing 787 客艙可調光窗、建築)改變透明度:子原則 B。事實廣為人知,為求保守未附單一 sourceUrl。
- Grad-CAM / 顯著圖(saliency map)彩色熱圖標示模型判斷所依區域:WebFetch 驗證 <https://en.wikipedia.org/wiki/Saliency_map>(XAI 用彩色熱圖顯示影響決策的像素;CAM)。
- RAG(紅黃綠)狀態燈號、程式碼語法高亮、資料熱圖 / 彩色 git diff、Transformer 注意力視覺化:對應子原則 C(用顏色讓難見之物可見);成熟做法,未附 sourceUrl。

**捨棄**
- 「碳粉/影印」與本原則關聯較弱,未採用。

---

## 原則 33 — Homogeneity 同質性

**子原則(triz40 驗證)**
- A. 讓與某物體互動的物體採用相同材料(或性質相近的材料)。

**經典教材案例**
- 鑽石加工鑽石:WebFetch 驗證 <https://en.wikipedia.org/wiki/Diamond_tool>(鑽石為最硬材料之一,用於切磨拋光鑽石與超硬材料;註:對鋼鐵因高溫下與 Fe/Co/Ni 反應而不適用,故案例改述為「加工鑽石與超硬材料」以求精確)。
- 可食甜筒/威化容器:容器與內容物同為可食材料(triz40「biodegradable peat seedling pots」同屬「容器與所種植物同命運」思路)。
- 生物可分解育苗盆(triz40 示例)。

**查證過的新案例**
- 鋼筋混凝土:鋼與混凝土熱膨脹係數相近(混凝土 1.0–1.5×10⁻⁵、鋼 1.2×10⁻⁵),故同步脹縮不致破壞鍵結。WebFetch 驗證 <https://en.wikipedia.org/wiki/Reinforced_concrete>(「coefficient of thermal expansion of concrete is similar to that of steel」)。屬「性質同質」的教科書案例。
- ISO 貨櫃標準化:統一尺寸使船/吊車/卡車/火車可互換裝卸(intermodal),降成本。WebFetch 驗證 <https://en.wikipedia.org/wiki/Containerization>。商業/物流域。
- 自我對弈(self-play)RL:AlphaGo Zero/AlphaZero 與自身副本對弈,對手即同一模型。WebFetch 驗證 <https://en.wikipedia.org/wiki/Self-play>。
- 聯邦平均(FedAvg):標準做法要求各用戶端採用相同模型架構,才能對權重取平均聚合。WebFetch 驗證 <https://en.wikipedia.org/wiki/Federated_learning>(標準框架多假設共用架構;異質 HeteroFL 屬例外)。措辭已精確標明「標準/需相同架構」。
- 同構 JavaScript(client/server 同語言)、容器化 dev/prod 環境一致、傳統木榫木釘(木對木同步脹縮)、焊接用同合金填料、LEGO 通用凸點介面:同質性成熟案例;未附 sourceUrl。

**捨棄**
- 「只招文化相似員工」易誤導且非工程本意,未採用。
- 「鑽石只有鑽石能加工」原措辭不精確(CBN 亦可加工鋼),已改述。

---

## 原則 34 — Discarding and Recovering 拋棄與再生

**子原則(triz40 驗證)**
- A. 把已完成功能的部分拋棄(溶解、蒸發等)或在運作中改變。
- B. 反之,在運作中即時補充/再生耗損的部分。

**經典教材案例**
- 多節火箭拋離已用完的節省重:WebFetch 驗證 <https://en.wikipedia.org/wiki/Multistage_rocket>(「By jettisoning stages when they run out of propellant, the mass of the remaining rocket is decreased」)。
- 可溶解藥物膠囊、可吸收縫線、冰模、自銳刀刃(triz40 示例)。

**查證過的新案例**
- 鹿角每年脫落再長新角(拋棄+再生):WebFetch 驗證 <https://en.wikipedia.org/wiki/Antler>(「Antlers are shed and regrown each year」)。自然域,同時體現 A、B。
- 可吸收手術縫線,被人體水解/蛋白酶分解吸收,免拆線:WebFetch 驗證 <https://en.wikipedia.org/wiki/Surgical_suture>(absorbable sutures degraded via proteolysis/hydrolysis)。
- 再製造 / 循環經濟(remanufacturing,回收 core 重建如新):WebFetch 驗證 <https://en.wikipedia.org/wiki/Remanufacturing>(拆解、清潔、以再用+新件重建至原規格)。商業域(子原則 B 再生)。
- 垃圾回收(GC)回收不再被引用的記憶體:WebFetch 驗證 <https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>。
- 燒蝕式隔熱盾(再入時燒蝕帶走熱)、囓齒動物門牙持續生長補償磨損、LRU 快取淘汰、KV-cache 淘汰 / 滑動視窗注意力(StreamingLLM)、梯度檢查點(丟棄前向激活、反向重算):皆對應 A/B;成熟技術,為求保守未附 sourceUrl。梯度檢查點同時體現「拋棄後再生」。

**捨棄**
- 無明顯捨棄項;火箭/縫線/GC 為最穩固代表。

---

## 原則 35 — Parameter Changes 參數改變

**子原則(triz40 驗證)**
- A. 改變物理狀態(氣/液/固)。
- B. 改變濃度或稠度。
- C. 改變柔軟/彈性程度。
- D. 改變溫度。

**經典教材案例**
- 以液態運輸石油/天然氣以縮小體積(triz40「Transport petroleum as a liquid instead of a gas」)。
- 硫化橡膠、糖心冷凍、可調阻尼、居里點加熱(triz40 示例)。

**查證過的新案例**
- LNG:冷卻至約 −162°C 液化,體積縮約 1/600 便於儲運:WebFetch 驗證 <https://en.wikipedia.org/wiki/Liquefied_natural_gas>(「approximately 1/600th the volume」；−145 至 −163°C)。子原則 A。
- 硫化(Goodyear 1839):硫+熱交聯,使黏軟天然橡膠變成堅韌有彈性的橡膠:WebFetch 驗證 <https://en.wikipedia.org/wiki/Vulcanization>。子原則 C/B。
- 冷凍乾燥/即溶咖啡:昇華除水,輕量耐儲、可復水:WebFetch 驗證 <https://en.wikipedia.org/wiki/Freeze_drying>(含 instant coffee)。子原則 B/A。
- LLM 取樣溫度(softmax temperature):單一參數調節輸出分佈的隨機/確定程度:WebFetch 驗證 <https://en.wikipedia.org/wiki/Softmax_function>(「higher temperature → more uniform/random; lower → sharper」)。子原則 D 的抽象化。
- 陶土燒成陶器(軟→硬)、鋼淬火回火(以溫度改硬度韌性)、濃縮清潔劑/肥皂多型態、可口可樂濃縮糖漿模式(運濃縮、當地稀釋充氣)、資料壓縮、冷熱儲存分層(S3 Standard vs Glacier)、模型量化(FP32→INT8/INT4 縮小模型):對應 A–D;成熟事實,為求保守未附 sourceUrl。註:Wikipedia「Quantization (signal processing)」不涵蓋 ML 量化,故量化案例不附該 sourceUrl。

**捨棄**
- 未採用空泛的「改變參數即可」;每案例皆綁定具體子原則(狀態/濃度/彈性/溫度)。
