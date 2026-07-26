/* =========================================================================
   data/data.js — single source of truth for the site (plain globals).
   Generated from tmp/principles/*.json + tmp/aux/*.json by tmp/build_data.py.
   Do not edit by hand; edit the source JSON and re-run the build script.
   ========================================================================= */

window.SITE_META = {
  "title": {
    "en": "TRIZ 40 Inventive Principles",
    "zh": "TRIZ 萃思 40 項發明原則"
  },
  "subtitle": {
    "en": "Definitions, sub-principles and hundreds of cases — from ancient crafts to AI.",
    "zh": "定義、子原則與數百個案例——從古代工藝到 AI。"
  },
  "repo": "tingwei161803/triz-40"
};

window.SITE_PAGES = [
  {
    "slug": "home",
    "layout": "hub",
    "icon": "home",
    "title": {
      "en": "Overview",
      "zh": "總覽"
    },
    "subtitle": {
      "en": "Forty ways inventors have always resolved contradictions — traced from ancient crafts to mechanical engineering, software and AI.",
      "zh": "發明家化解矛盾的四十種手法——從古代工藝、機械工程,一路對照到軟體與 AI。"
    },
    "intro": [
      {
        "en": "In 1946, a young patent examiner in the Soviet navy named Genrich Altshuller began asking a heretical question: is invention a matter of luck, or does it follow patterns? After screening hundreds of thousands of patents, he and his colleagues found that across every industry, inventors kept resolving contradictions with the same small set of moves — forty of them. He called the method TRIZ, the Theory of Inventive Problem Solving.",
        "zh": "1946 年,蘇聯海軍專利部門一位年輕的審查員阿舒勒(Genrich Altshuller)開始追問一個離經叛道的問題:發明靠的是運氣,還是有跡可循?他與同事篩讀了數十萬件專利後發現:無論哪個產業,發明家化解矛盾的手法翻來覆去就是那幾招——整理出來共四十種。這套方法後來被稱為 TRIZ(發明性問題解決理論),台灣譯作「萃思」。"
      },
      {
        "en": "This site collects all forty principles with hundreds of examples arranged along one axis: time. The same principle that shaped a 2,000-year-old plough shows up in jet engines, in microservices, and in this year's AI architectures. Browse the principles, wander the cases, then test yourself.",
        "zh": "這個網站完整收錄四十項原則,並沿著「時間」這條軸線鋪開數百個案例:塑造兩千年前農具的原則,同樣出現在噴射引擎、微服務架構,以及今年的 AI 模型設計裡。你可以逐項瀏覽原則、漫遊跨時代案例,再用測驗檢驗自己。"
      }
    ],
    "stats": [
      {
        "value": 40,
        "label": {
          "en": "Inventive principles",
          "zh": "發明原則"
        }
      },
      {
        "value": 437,
        "label": {
          "en": "Cases across eras",
          "zh": "跨時代案例"
        }
      },
      {
        "value": 6,
        "label": {
          "en": "Domains, ancient → AI",
          "zh": "領域,古代 → AI"
        }
      },
      {
        "value": 174,
        "label": {
          "en": "Verified sources",
          "zh": "查證來源"
        }
      }
    ]
  },
  {
    "slug": "principles",
    "layout": "principles",
    "icon": "format_list_numbered",
    "title": {
      "en": "The 40 Principles",
      "zh": "40 項原則"
    },
    "subtitle": {
      "en": "The complete list. Open any principle for its definition, sub-principles, cases across six domains, and sources.",
      "zh": "完整清單。點開任一原則可見定義、子原則、橫跨六個領域的案例與來源。"
    },
    "groups": [
      {
        "key": "structure",
        "en": "Structure & Space",
        "zh": "結構與空間"
      },
      {
        "key": "process",
        "en": "Time & Process",
        "zh": "時間與程序"
      },
      {
        "key": "matter",
        "en": "Matter & Energy",
        "zh": "物質與能量"
      },
      {
        "key": "system",
        "en": "System & Information",
        "zh": "系統與資訊"
      }
    ],
    "domains": [
      {
        "key": "ancient",
        "en": "Ancient & Traditional",
        "zh": "古代與傳統",
        "icon": "account_balance"
      },
      {
        "key": "mechanical",
        "en": "Mechanical & Manufacturing",
        "zh": "機械與製造",
        "icon": "precision_manufacturing"
      },
      {
        "key": "daily",
        "en": "Everyday Life",
        "zh": "日常生活",
        "icon": "coffee"
      },
      {
        "key": "business",
        "en": "Business & Management",
        "zh": "商業與管理",
        "icon": "storefront"
      },
      {
        "key": "software",
        "en": "Software & IT",
        "zh": "軟體與資訊",
        "icon": "terminal"
      },
      {
        "key": "ai",
        "en": "AI & Frontier Tech",
        "zh": "AI 與前沿科技",
        "icon": "neurology"
      }
    ],
    "items": [
      {
        "id": 1,
        "slug": "segmentation",
        "name": {
          "en": "Segmentation",
          "zh": "分割"
        },
        "aliases": {
          "en": [
            "Division",
            "Fragmentation"
          ],
          "zh": [
            "切割",
            "細分"
          ]
        },
        "definition": {
          "en": "Divide an object into independent parts, make it easy to disassemble, or increase its degree of fragmentation. Breaking a whole into smaller pieces makes each part easier to build, replace, move, or optimize on its own.",
          "zh": "把物體分成獨立的部分、讓它容易拆解,或提高其分割與細分的程度。將整體拆成較小的單元,能讓每個部分更容易製造、替換、搬運,或個別最佳化。"
        },
        "subPrinciples": [
          {
            "en": "Divide an object into independent parts.",
            "zh": "把物體分成獨立的部分。"
          },
          {
            "en": "Make an object easy to disassemble.",
            "zh": "讓物體容易拆解。"
          },
          {
            "en": "Increase the degree of fragmentation or segmentation.",
            "zh": "提高分割或細分的程度。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Brick and block masonry",
              "zh": "磚石砌築"
            },
            "body": {
              "en": "Instead of quarrying and moving one giant monolith, builders assemble a wall from many small, identical bricks. Each unit is easy to carry and lay, and a damaged brick can be replaced without rebuilding the whole wall.",
              "zh": "工匠不必開採並搬運一整塊巨石,而是用許多小而規格一致的磚塊砌成牆面。每塊磚都容易搬運與堆砌,單塊損壞時也能替換,不必重建整面牆。"
            }
          },
          {
            "domain": "ancient",
            "title": {
              "en": "Segmented bodies in nature",
              "zh": "自然界的體節"
            },
            "body": {
              "en": "Insects, crustaceans, and earthworms are built from repeated body segments. Segmentation lets each section bend and move independently, giving the animal a flexibility that a single rigid body could not.",
              "zh": "昆蟲、甲殼類與蚯蚓都由重複的體節構成。分節讓每一段能獨立彎曲與活動,賦予身體單一剛體無法達到的靈活度。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Telescoping antenna",
              "zh": "伸縮天線"
            },
            "body": {
              "en": "A radio antenna is split into nested tubular sections that slide inside one another. Segmentation lets a long antenna collapse into a compact length for storage and extend again when reception is needed.",
              "zh": "收音機天線被分成一節節可互相套疊的管段。分割讓長天線能收合成精巧的長度以便收納,需要接收訊號時再拉長。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Venetian blinds",
              "zh": "百葉窗"
            },
            "body": {
              "en": "A solid shutter is replaced by many thin, independently tilting slats. Increasing the degree of fragmentation lets the user finely control light and airflow instead of choosing only fully open or fully closed.",
              "zh": "整片實心的窗板被換成許多可獨立傾斜的細窄葉片。提高分割程度後,使用者能細膩地調節光線與通風,而不是只能全開或全關。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Modular sectional furniture",
              "zh": "模組化組合家具"
            },
            "body": {
              "en": "Flat-pack and sectional furniture ships as separate panels and modules that bolt together on site. Easy disassembly makes the product cheap to transport and simple to reconfigure or repair.",
              "zh": "組合式與模組化家具以分開的板件與模組出貨,到現場再鎖接組裝。容易拆解讓產品運送成本低,也方便重新配置或維修。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Scored chocolate bar",
              "zh": "刻痕巧克力片"
            },
            "body": {
              "en": "A chocolate bar is molded with grooves that divide it into small squares. The built-in segmentation lets a person snap off exactly one portion cleanly, without a knife.",
              "zh": "巧克力片在製造時就壓出溝槽,把它分成一小格一小格。這種內建的分割讓人不必用刀,就能乾淨地剝下剛好一份。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Market segmentation",
              "zh": "市場區隔"
            },
            "body": {
              "en": "Rather than treating buyers as one undifferentiated mass, a company divides the market into segments with distinct needs and targets each with tailored products and messaging. Splitting the whole makes each part addressable and easier to serve profitably.",
              "zh": "公司不再把買家當成沒有差異的一整群,而是把市場切分成需求各異的區隔,對每個區隔投放量身打造的產品與訊息。把整體分割後,每個部分都變得可針對,也更容易有利可圖地服務。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Market_segmentation"
          },
          {
            "domain": "software",
            "title": {
              "en": "Microservices architecture",
              "zh": "微服務架構"
            },
            "body": {
              "en": "A large monolithic application is split into many small services, each independently developed, deployed, and scaled. Segmenting the system lets teams work in parallel and lets one service fail or update without taking down the rest.",
              "zh": "龐大的單體應用程式被拆成許多小型服務,各自獨立開發、部署與擴充。將系統分割後,團隊能平行作業,單一服務故障或更新時也不會拖垮其他部分。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Microservices"
          },
          {
            "domain": "software",
            "title": {
              "en": "Database sharding",
              "zh": "資料庫分片"
            },
            "body": {
              "en": "A database too large for one server is partitioned into shards, each holding a slice of the rows on a separate machine. Splitting the data spreads the load and lets storage grow horizontally.",
              "zh": "單一伺服器裝不下的資料庫,被切分成多個分片,每個分片在不同機器上存放一部分的列資料。把資料分割後,負載得以分散,儲存也能水平擴充。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Mixture of Experts (MoE) models",
              "zh": "專家混合(MoE)模型"
            },
            "body": {
              "en": "An MoE model divides one large network into many expert subnetworks, and a router sends each input only to a few relevant experts. This segmentation lets the model hold huge total capacity while activating only a small, cheap fraction of it per token.",
              "zh": "MoE 模型把一個大型網路分割成許多專家子網路,再由路由器把每個輸入只送往少數相關的專家。這種分割讓模型擁有龐大的總容量,卻在處理每個 token 時只啟動其中一小部分,運算成本很低。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Mixture_of_experts"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Chunking documents for retrieval (RAG)",
              "zh": "檢索增強生成的文件分塊(RAG)"
            },
            "body": {
              "en": "In retrieval-augmented generation, long documents are split into smaller chunks that are embedded and indexed separately. Segmentation lets the system fetch just the few passages relevant to a query instead of feeding whole documents to the model.",
              "zh": "在檢索增強生成中,長文件被切成較小的區塊,分別做嵌入並建立索引。分割讓系統只取回與問題相關的少數段落,而不必把整份文件塞給模型。"
            }
          }
        ],
        "sources": [
          {
            "label": "triz40.com — The 40 Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          },
          {
            "label": "Wikipedia — Microservices",
            "url": "https://en.wikipedia.org/wiki/Microservices"
          },
          {
            "label": "Wikipedia — Market segmentation",
            "url": "https://en.wikipedia.org/wiki/Market_segmentation"
          },
          {
            "label": "Wikipedia — Mixture of experts",
            "url": "https://en.wikipedia.org/wiki/Mixture_of_experts"
          }
        ],
        "group": "structure"
      },
      {
        "id": 2,
        "slug": "taking-out",
        "name": {
          "en": "Taking Out",
          "zh": "抽取"
        },
        "aliases": {
          "en": [
            "Extraction",
            "Separation",
            "Removal"
          ],
          "zh": [
            "抽離",
            "分離",
            "移出"
          ]
        },
        "definition": {
          "en": "Separate an interfering part or property from an object, or conversely single out the only part or property you actually need. You keep the useful element and leave behind the harmful, costly, or irrelevant rest.",
          "zh": "把會干擾的部分或性質從物體中分離出來;或反過來,只單獨取出你真正需要的那一個部分或性質。保留有用的元素,捨棄有害、昂貴或無關的其餘部分。"
        },
        "subPrinciples": [
          {
            "en": "Separate an interfering part or property from an object.",
            "zh": "把會干擾的部分或性質從物體中分離出來。"
          },
          {
            "en": "Single out the only necessary part (or property) of an object.",
            "zh": "只單獨取出物體中唯一必要的部分(或性質)。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "The scarecrow",
              "zh": "稻草人"
            },
            "body": {
              "en": "A scarecrow keeps birds off a field by presenting only the deterrent property of a human, its shape and apparent presence, without an actual person standing guard. The useful threat is extracted and left in place while the farmer works elsewhere.",
              "zh": "稻草人只把人類的嚇阻性質——外形與存在感——擺在田裡,就能趕走鳥類,而不需要真人站崗。有用的『威脅感』被抽取出來留在原地,農夫則能到別處工作。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Compressor placed outside the building",
              "zh": "壓縮機置於室外"
            },
            "body": {
              "en": "In an air-conditioning or refrigeration system, the noisy, heat-generating compressor is separated from the living space and mounted outdoors. The interfering noise and heat are taken out while the cooling function stays inside.",
              "zh": "在空調或冷藏系統中,吵雜又發熱的壓縮機被分離到室外安裝。干擾的噪音與熱被抽離,製冷功能則留在室內。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Fiber-optic light guide",
              "zh": "光纖導光"
            },
            "body": {
              "en": "To light a spot that must stay cool or dry, a lamp is placed far away and only its light is piped in through optical fibers. The light is extracted and delivered while the heat, electricity, and bulk of the lamp are left behind.",
              "zh": "要照亮一個必須保持低溫或乾燥的地方,可把燈放在遠處,只用光纖把光導引過來。光被抽取並傳送到定點,燈的熱、電與體積則被留在原處。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Decaffeinated coffee",
              "zh": "低咖啡因咖啡"
            },
            "body": {
              "en": "Decaffeination removes the caffeine from coffee beans while preserving the flavor compounds. The single unwanted property, caffeine, is taken out, leaving the drink otherwise intact.",
              "zh": "低咖啡因製程把咖啡豆中的咖啡因移除,同時保留風味物質。單一不需要的性質——咖啡因——被抽離,飲品的其餘部分則維持不變。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Outsourcing non-core functions",
              "zh": "非核心業務外包"
            },
            "body": {
              "en": "A company hands off support functions such as payroll, IT, or facilities to outside specialists so it can concentrate on its core business. The distracting, non-core activities are separated out from the organization.",
              "zh": "公司把薪資、資訊或設施等支援性業務交給外部專業廠商,好讓自己專注於核心事業。分散注意力的非核心活動,被從組織中抽離出去。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Content delivery network (CDN)",
              "zh": "內容傳遞網路(CDN)"
            },
            "body": {
              "en": "A CDN copies a website's static assets, its images, scripts, and video, out to edge servers close to users. The heavy, cacheable content is separated from the origin server so that only dynamic requests still travel the long distance.",
              "zh": "CDN 把網站的靜態資產——圖片、指令碼、影片——抽取複製到靠近使用者的邊緣伺服器。體積大、可快取的內容被從來源伺服器分離出去,只有動態請求還需要長途傳輸。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Extracting configuration and secrets from code",
              "zh": "把設定與機密抽離程式碼"
            },
            "body": {
              "en": "Following twelve-factor practice, passwords, API keys, and environment-specific settings are pulled out of the source code and injected from the environment. The sensitive, changeable part is separated from the stable code so the same build runs safely anywhere.",
              "zh": "依照 twelve-factor 的做法,密碼、API 金鑰與各環境專屬設定被從原始碼中抽離,改由環境注入。敏感、易變的部分與穩定的程式碼分離,讓同一份建置能安全地在任何環境執行。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Neural network pruning",
              "zh": "神經網路剪枝"
            },
            "body": {
              "en": "Pruning removes redundant weights or whole neurons from a trained network, singling out the parameters that actually matter. Taking out the dead weight yields a smaller, faster model with little loss of accuracy.",
              "zh": "剪枝把訓練好的網路中冗餘的權重或整個神經元移除,只保留真正重要的參數。抽掉這些無用的權重後,模型變得更小更快,準確度幾乎不受影響。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network)"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Named-entity recognition",
              "zh": "命名實體辨識"
            },
            "body": {
              "en": "Named-entity recognition scans free text and pulls out just the structured items of interest, such as people, places, dates, and amounts. The single needed property is extracted from a noisy document and everything else is ignored.",
              "zh": "命名實體辨識掃描自由文字,只抽取出感興趣的結構化項目——人名、地點、日期、金額。所需的單一資訊從雜亂的文件中被抽取出來,其餘一律略過。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Retrieval in RAG pipelines",
              "zh": "RAG 流程中的檢索"
            },
            "body": {
              "en": "Before a language model answers, a retriever pulls out only the handful of passages relevant to the question from a large corpus. The necessary evidence is singled out and handed to the model, leaving the rest of the knowledge base untouched.",
              "zh": "在語言模型作答之前,檢索器先從龐大的語料庫中,只取出與問題相關的少數段落。必要的證據被單獨挑出交給模型,知識庫的其餘部分則原封不動。"
            }
          }
        ],
        "sources": [
          {
            "label": "triz40.com — The 40 Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          },
          {
            "label": "Oxford Creativity — TRIZ",
            "url": "https://www.triz.co.uk/"
          },
          {
            "label": "Wikipedia — Pruning (artificial neural network)",
            "url": "https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network)"
          }
        ],
        "group": "structure"
      },
      {
        "id": 3,
        "slug": "local-quality",
        "name": {
          "en": "Local Quality",
          "zh": "局部品質"
        },
        "aliases": {
          "en": [
            "Local Property",
            "Non-uniformity"
          ],
          "zh": [
            "局部特性",
            "不均勻化"
          ]
        },
        "definition": {
          "en": "Change a structure or environment from uniform to non-uniform, make each part operate under the conditions that suit it best, and let each part perform a different useful function. Instead of one compromise everywhere, each region gets exactly the property it needs.",
          "zh": "把結構或環境從均勻改為不均勻,讓每個部分都在最適合自己的條件下運作,並讓每個部分各自承擔不同而有用的功能。與其到處都用同一種折衷,不如讓每個區域都取得它真正需要的特性。"
        },
        "subPrinciples": [
          {
            "en": "Change an object's structure (or its external environment) from uniform to non-uniform.",
            "zh": "把物體的結構(或其外部環境)從均勻改為不均勻。"
          },
          {
            "en": "Make each part of an object function in the conditions most suitable for its operation.",
            "zh": "讓物體的每個部分,都在最適合其運作的條件下工作。"
          },
          {
            "en": "Make each part of an object fulfill a different and useful function.",
            "zh": "讓物體的每個部分各自承擔不同而有用的功能。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Differentially hardened sword blade",
              "zh": "差別硬化的刀刃"
            },
            "body": {
              "en": "Swordsmiths coat a blade's spine with clay before quenching so only the edge cools fast and turns hard, while the spine stays soft and tough. One blade thus carries two local qualities: a wear-resistant edge and a shock-absorbing back.",
              "zh": "刀匠在淬火前於刀背敷上黏土,讓只有刀刃快速冷卻而變硬,刀背則保持柔軟而堅韌。一把刀因此擁有兩種局部特性:耐磨的刀刃與吸震的刀背。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Differential_heat_treatment"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Claw hammer",
              "zh": "羊角錘"
            },
            "body": {
              "en": "A claw hammer puts a flat striking face on one side of the head and a curved claw for pulling nails on the other. The two ends are locally shaped for opposite tasks: driving nails in and prying them out.",
              "zh": "羊角錘的錘頭一側是打擊用的平面,另一側是拔釘用的彎鉤。兩端各自為相反的任務——把釘子敲入與撬出——做了在地化的造形。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Case-hardened gears",
              "zh": "表面硬化齒輪"
            },
            "body": {
              "en": "Gear teeth are carburized so the surface becomes hard and wear-resistant while the core stays tough and ductile. The part is deliberately non-uniform: hard where it rubs, tough where it must absorb shock.",
              "zh": "齒輪的齒面經滲碳處理而變得堅硬耐磨,芯部則保持堅韌有延展性。這個零件刻意做成不均勻:摩擦處硬,需承受衝擊處韌。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Pencil with an eraser",
              "zh": "帶橡皮擦的鉛筆"
            },
            "body": {
              "en": "A pencil combines a graphite core for writing at one end with a rubber tip for erasing at the other. Each end is given a different, locally useful function within a single tool.",
              "zh": "鉛筆一端是書寫用的石墨筆芯,另一端是擦除用的橡皮。同一支工具中,每一端都被賦予不同而在地有用的功能。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Refrigerator with distinct zones",
              "zh": "分區控溫冰箱"
            },
            "body": {
              "en": "A fridge is not one uniform cold box: the freezer, the chiller, the crisper drawer, and the door shelves are each held at the temperature and humidity that suit their contents. Each region is tuned to its own local conditions.",
              "zh": "冰箱不是一個溫度均勻的冷箱:冷凍室、冷藏室、蔬果保鮮抽屜與門邊層架,各自維持適合其內容物的溫度與濕度。每個區域都依自己的局部條件做了調校。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Specialized departments and roles",
              "zh": "專業分工的部門與職務"
            },
            "body": {
              "en": "Instead of every employee doing everything, a firm creates specialized units, such as sales, engineering, finance, and support, each staffed and equipped for its own kind of work. The organization becomes non-uniform so each part operates under conditions suited to its task.",
              "zh": "公司不讓每位員工什麼都做,而是設立專業單位——業務、工程、財務、客服——各自配置適合其工作的人力與資源。組織因此變得不均勻,讓每個部分都在適合其任務的條件下運作。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Tiered (hot, warm, cold) storage",
              "zh": "分層(熱、溫、冷)儲存"
            },
            "body": {
              "en": "A storage system keeps frequently accessed data on fast, expensive media and rarely used data on slow, cheap media. Rather than one uniform tier, each data region sits on the medium whose cost and speed suit its access pattern.",
              "zh": "儲存系統把常存取的資料放在快速昂貴的媒介,把很少用到的資料放在緩慢廉價的媒介。與其用單一均勻的層級,不如讓每一段資料都落在成本與速度最適合其存取模式的媒介上。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Selective database indexing",
              "zh": "選擇性資料庫索引"
            },
            "body": {
              "en": "Rather than treating all columns alike, a database is given indexes only on the columns that queries actually filter or sort by. The structure is made non-uniform so lookup effort is invested exactly where it pays off.",
              "zh": "資料庫不對所有欄位一視同仁,而是只在查詢實際會篩選或排序的欄位上建立索引。結構被做成不均勻,讓查找的成本剛好投注在有回報的地方。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Mixed-precision training",
              "zh": "混合精度訓練"
            },
            "body": {
              "en": "Deep-learning training stores most values in low-precision 16-bit format for speed but keeps sensitive accumulations, such as the master weights, in 32-bit. Precision is applied non-uniformly: cheap where it is safe, high where the math is delicate.",
              "zh": "深度學習訓練把大多數數值以低精度的 16 位元格式儲存以加快速度,卻把敏感的累加值(例如主權重)保留在 32 位元。精度被不均勻地分配:安全處用低精度,運算細緻處用高精度。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Attention mechanism",
              "zh": "注意力機制"
            },
            "body": {
              "en": "A transformer's attention layer assigns each part of the input a different weight, letting the model dwell on the tokens that matter for the current prediction. Processing is made non-uniform across the sequence rather than treating every token equally.",
              "zh": "Transformer 的注意力層為輸入的每個部分分配不同的權重,讓模型能停留在對當前預測重要的 token 上。處理過程在整個序列上變得不均勻,而不是對每個 token 一視同仁。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "LoRA domain adapters",
              "zh": "LoRA 領域適配器"
            },
            "body": {
              "en": "Low-rank adapters (LoRA) attach small trainable modules to a frozen base model, one per domain or task. Each adapter tailors the shared model to its own local conditions, such as legal, medical, or coding text, without disturbing the others.",
              "zh": "低秩適配器(LoRA)在凍結的基礎模型上外掛小型可訓練模組,每個領域或任務各一個。每個適配器把共用模型調整到自己的局部條件——法律、醫療、程式碼——而不影響其他適配器。"
            }
          }
        ],
        "sources": [
          {
            "label": "triz40.com — The 40 Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          },
          {
            "label": "Oxford Creativity — TRIZ",
            "url": "https://www.triz.co.uk/"
          },
          {
            "label": "Wikipedia — Differential heat treatment",
            "url": "https://en.wikipedia.org/wiki/Differential_heat_treatment"
          }
        ],
        "group": "structure"
      },
      {
        "id": 4,
        "slug": "asymmetry",
        "name": {
          "en": "Asymmetry",
          "zh": "非對稱"
        },
        "aliases": {
          "en": [
            "Asymmetrical Shape"
          ],
          "zh": [
            "不對稱",
            "非對稱化"
          ]
        },
        "definition": {
          "en": "Replace a symmetrical form with an asymmetrical one, or increase the degree of an existing asymmetry. A deliberately lopsided shape can fit only one way, match an uneven load, or perform a function that symmetry cannot.",
          "zh": "把對稱的形狀換成非對稱,或加大既有的不對稱程度。刻意做成不對稱的形狀,可以只有一種裝法、能配合不均勻的受力,或完成對稱形狀辦不到的功能。"
        },
        "subPrinciples": [
          {
            "en": "Change the shape of an object from symmetrical to asymmetrical.",
            "zh": "把物體的形狀從對稱改為非對稱。"
          },
          {
            "en": "If an object is already asymmetrical, increase the degree of its asymmetry.",
            "zh": "若物體本來就不對稱,則加大其不對稱的程度。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Flatfish eye migration",
              "zh": "比目魚的眼睛遷移"
            },
            "body": {
              "en": "A flounder starts life symmetrical, but as it settles to lie on one side of the seabed, one eye migrates so that both end up on the upward-facing side. Evolution broke the body's symmetry to fit a life lived flat on the bottom.",
              "zh": "比目魚幼時左右對稱,但當牠側躺在海床上生活時,一隻眼睛會遷移,使兩眼都落在朝上的一側。演化打破了身體的對稱,以適應平貼海底的生活。"
            }
          },
          {
            "domain": "ancient",
            "title": {
              "en": "The mouldboard plough",
              "zh": "犁壁(翻土犁)"
            },
            "body": {
              "en": "A mouldboard plough is asymmetric: its curved board turns the cut soil over to one side only. The lopsided shape does work, inverting the furrow, that a symmetric blade could not.",
              "zh": "翻土犁是不對稱的:彎曲的犁壁只把切開的土翻向一側。這個偏向一邊的形狀完成了對稱犁刀辦不到的工作——把犁溝翻轉過來。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Polarized electrical plug",
              "zh": "極性電源插頭"
            },
            "body": {
              "en": "A polarized plug has one blade wider than the other so it can only be inserted one way, guaranteeing the live and neutral wires connect correctly. The shape is made asymmetric to enforce a single correct orientation.",
              "zh": "極性插頭的一片插腳比另一片寬,因此只能以一種方向插入,確保火線與中性線正確連接。形狀被做成不對稱,以強制唯一正確的方向。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Cambered aircraft wing (airfoil)",
              "zh": "有弧度的機翼(翼型)"
            },
            "body": {
              "en": "An aircraft wing is curved more on top than on the bottom. This deliberate asymmetry of the cross-section makes air move differently over each surface and generates the pressure difference that produces lift.",
              "zh": "飛機機翼上表面的弧度比下表面大。這種橫截面刻意的不對稱,讓空氣在上下兩面以不同方式流過,產生升力所需的壓力差。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Keyed (D-shaped) shaft",
              "zh": "鍵槽(D 形)軸"
            },
            "body": {
              "en": "A round shaft is given a flat or a keyway so that a knob or gear mounts in only one angular position and cannot slip. Breaking the circular symmetry lets the joint transmit torque and fix its orientation.",
              "zh": "圓形的軸被削出一個平面或鍵槽,使旋鈕或齒輪只能以一種角度安裝,且不會打滑。打破圓形的對稱,讓接合能傳遞扭矩並固定方位。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Notched SIM and memory cards",
              "zh": "缺角的 SIM 卡與記憶卡"
            },
            "body": {
              "en": "SIM cards and SD cards have one corner cut off so they physically cannot be inserted the wrong way round. The asymmetric outline is a foolproofing cue that guides correct insertion.",
              "zh": "SIM 卡與 SD 卡有一個角被切掉,因此在物理上就無法反向插入。這個不對稱的輪廓是一種防呆提示,引導使用者正確插入。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Loss-leader pricing",
              "zh": "帶路貨(虧本招徠)定價"
            },
            "body": {
              "en": "A retailer prices a few staple items below cost to draw shoppers in, then earns its margin on everything else in the basket. The pricing across the product line is deliberately asymmetric rather than uniformly marked up.",
              "zh": "零售商把少數民生商品定在成本以下以吸引顧客上門,再從購物籃裡的其他商品賺取利潤。整條產品線的定價刻意做成不對稱,而非一律加成。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Public-key (asymmetric) cryptography",
              "zh": "公開金鑰(非對稱)加密"
            },
            "body": {
              "en": "Asymmetric cryptography uses a pair of different keys: a public key that anyone may use to encrypt, and a private key that only the owner holds to decrypt. The deliberate asymmetry between the two keys is what lets strangers exchange secrets safely.",
              "zh": "非對稱加密使用一對不同的金鑰:任何人都能用來加密的公開金鑰,以及只有擁有者持有、用來解密的私密金鑰。兩把金鑰之間刻意的不對稱,正是讓陌生人能安全交換秘密的關鍵。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Public-key_cryptography"
          },
          {
            "domain": "software",
            "title": {
              "en": "Asymmetric broadband (ADSL)",
              "zh": "非對稱寬頻(ADSL)"
            },
            "body": {
              "en": "ADSL deliberately gives a home far more download bandwidth than upload, matching the way most people receive much more data than they send. The link is made asymmetric to fit real traffic instead of splitting capacity evenly.",
              "zh": "ADSL 刻意讓家庭的下載頻寬遠大於上傳,以配合多數人接收的資料遠多於送出的使用習慣。連線被做成不對稱,以貼合真實流量,而非平均分配容量。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Asymmetric_digital_subscriber_line"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Asymmetric loss functions",
              "zh": "非對稱損失函數"
            },
            "body": {
              "en": "In tasks such as fraud or disease detection, a model is trained with a loss that penalizes a missed positive far more heavily than a false alarm. Making the loss asymmetric steers the model toward the kind of error that is cheaper to make.",
              "zh": "在詐騙或疾病偵測等任務中,模型以一種對漏報懲罰遠大於誤報的損失函數來訓練。把損失函數做成不對稱,能引導模型去犯代價較低的那類錯誤。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Asymmetric quantization",
              "zh": "非對稱量化"
            },
            "body": {
              "en": "When compressing model weights to low-bit integers, asymmetric quantization uses a nonzero offset so the numeric range can hug data that is not centered on zero, unlike symmetric quantization. The extra asymmetry preserves accuracy for skewed distributions such as post-ReLU activations.",
              "zh": "在把模型權重壓縮成低位元整數時,非對稱量化採用非零的偏移量,讓數值範圍能貼合並非以零為中心的資料,這與對稱量化不同。多出來的不對稱性,能為偏斜分布(例如經過 ReLU 的激活值)保留準確度。"
            }
          }
        ],
        "sources": [
          {
            "label": "triz40.com — The 40 Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          },
          {
            "label": "Wikipedia — Public-key cryptography",
            "url": "https://en.wikipedia.org/wiki/Public-key_cryptography"
          },
          {
            "label": "Wikipedia — Asymmetric digital subscriber line",
            "url": "https://en.wikipedia.org/wiki/Asymmetric_digital_subscriber_line"
          }
        ],
        "group": "structure"
      },
      {
        "id": 5,
        "slug": "merging",
        "name": {
          "en": "Merging",
          "zh": "合併"
        },
        "aliases": {
          "en": [
            "Consolidation",
            "Combining",
            "Integration"
          ],
          "zh": [
            "整合",
            "結合",
            "併合"
          ]
        },
        "definition": {
          "en": "Bring identical or similar objects together in space, or make similar operations run together and in parallel in time. Combining many like elements into one system yields economies, shared structure, and effects that a single element cannot produce.",
          "zh": "把相同或相似的物體在空間上聚合在一起,或讓相似的操作在時間上並行、連續地一起進行。把許多同類元素併成一個系統,能帶來規模效益、共用結構,以及單一元素做不到的效果。"
        },
        "subPrinciples": [
          {
            "en": "Bring closer together or merge identical or similar objects; assemble identical or similar parts to perform parallel operations.",
            "zh": "把相同或相似的物體聚合(或合併)在一起;集合相同或相似的部件以進行並行的作業。"
          },
          {
            "en": "Make operations contiguous or parallel; bring them together in time.",
            "zh": "讓操作變得連續或並行;把它們在時間上聚合在一起。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Endosymbiosis (mitochondria in cells)",
              "zh": "內共生(細胞中的粒線體)"
            },
            "body": {
              "en": "Complex cells arose when one microbe engulfed another and the two merged into a single organism, the engulfed partner becoming the mitochondrion. Evolution combined two separate living things into one more capable unit.",
              "zh": "當一個微生物吞入另一個、兩者併成單一生物時,複雜細胞於焉出現,被吞入的夥伴成了粒線體。演化把兩個獨立的生命體合併成一個更有能力的單元。"
            }
          },
          {
            "domain": "ancient",
            "title": {
              "en": "A bundle of sticks",
              "zh": "一捆木棒"
            },
            "body": {
              "en": "A single stick snaps easily, but many sticks bound together resist breaking, the moral of Aesop's fable and a real structural fact. Merging identical weak elements produces a bundle far stronger than the sum of its parts.",
              "zh": "單根木棒一折就斷,但許多木棒綁在一起就難以折斷——這是《伊索寓言》的寓意,也是真實的結構事實。把相同的脆弱元素合併,能造出遠比各部分加總更堅固的一束。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Combine harvester",
              "zh": "聯合收割機"
            },
            "body": {
              "en": "The combine gets its name from combining three formerly separate operations, reaping, threshing, and winnowing, into one continuous pass through the field. Merging the steps in time turns days of labor into a single machine's work.",
              "zh": "聯合收割機的名字來自它把過去三道分開的工序——收割、脫粒、風選——合併成在田裡連續完成的一趟作業。把這些步驟在時間上合併,讓原本要好幾天的人力工作,變成一台機器就能完成。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Combine_harvester"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Multi-blade razor",
              "zh": "多刀片刮鬍刀"
            },
            "body": {
              "en": "A cartridge razor lines up several identical blades in one head so each stroke cuts the whiskers multiple times. Merging identical blades into a single tool gives a closer shave in one pass.",
              "zh": "刮鬍刀的刀頭把數片相同的刀片排在一起,讓每刷一次就對鬍鬚切割多次。把相同的刀片合併到單一工具上,一刷就能刮得更乾淨。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "All-in-one printer",
              "zh": "多功能事務機"
            },
            "body": {
              "en": "An all-in-one machine merges a printer, scanner, copier, and fax into one device that shares a single paper path, power supply, and control panel. Combining the similar machines saves desk space and cost.",
              "zh": "多功能事務機把印表機、掃描器、影印機與傳真機合併成一台裝置,共用同一條進紙路徑、電源與控制面板。把這些相似的機器合併,省下桌面空間與成本。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Mergers and acquisitions",
              "zh": "併購(M&A)"
            },
            "body": {
              "en": "In a merger, two companies consolidate into a single entity to combine their markets, capabilities, and overhead. Bringing similar organizations together aims to yield scale and shared functions that neither had alone.",
              "zh": "在合併案中,兩家公司整併成單一實體,以結合各自的市場、能力與後勤。把相似的組織合併在一起,目的是取得任一方單獨都沒有的規模與共用職能。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Mergers_and_acquisitions"
          },
          {
            "domain": "software",
            "title": {
              "en": "Version-control merge",
              "zh": "版本控制的合併"
            },
            "body": {
              "en": "A merge in a version-control system like Git combines the changes from two divergent lines of development back into one branch. Parallel work by many contributors is brought together into a single, unified history.",
              "zh": "在 Git 這類版本控制系統中,合併會把兩條分歧的開發線所做的變更重新併回一條分支。許多貢獻者的並行工作被聚合成單一、統一的歷史。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Request batching",
              "zh": "請求批次化"
            },
            "body": {
              "en": "Instead of sending many tiny queries one by one, a client bundles them into a single batched request to the server. Merging the calls cuts round-trips and network overhead dramatically.",
              "zh": "客戶端不再把許多微小的查詢一個一個送出,而是把它們打包成單一的批次請求送給伺服器。把這些呼叫合併,能大幅減少往返次數與網路開銷。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Model merging (model soups)",
              "zh": "模型合併(model soups)"
            },
            "body": {
              "en": "Model merging averages the weights of several models fine-tuned from the same base into one combined model. Merging their parameters can raise accuracy and robustness without any extra inference cost, unlike running an ensemble.",
              "zh": "模型合併把數個從同一基礎微調而來的模型的權重取平均,併成一個結合後的模型。合併它們的參數能提升準確度與穩健性,而且不像跑集成那樣增加任何推論成本。"
            },
            "sourceUrl": "https://arxiv.org/abs/2203.05482"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Continuous batching in LLM serving",
              "zh": "LLM 服務的連續批次處理"
            },
            "body": {
              "en": "An LLM inference server such as vLLM dynamically merges incoming user requests into one running batch that grows and shrinks as tokens are generated. Combining requests keeps the GPU busy and can raise throughput many times over.",
              "zh": "像 vLLM 這樣的 LLM 推論伺服器,會動態地把湧入的使用者請求合併進一個運作中的批次,這個批次會隨著 token 的生成而增減。把請求合併能讓 GPU 保持忙碌,吞吐量可提升數倍。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Ensemble learning",
              "zh": "集成學習"
            },
            "body": {
              "en": "Ensemble methods such as random forests and boosting combine the predictions of many models into one stronger prediction. Merging diverse weak learners cancels out their individual errors and yields higher accuracy than any single model.",
              "zh": "隨機森林、boosting 等集成方法,把許多模型的預測合併成單一而更強的預測。把多樣的弱學習器合併,能抵銷它們各自的誤差,得到比任一單一模型更高的準確度。"
            }
          }
        ],
        "sources": [
          {
            "label": "triz40.com — The 40 Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          },
          {
            "label": "Wikipedia — Combine harvester",
            "url": "https://en.wikipedia.org/wiki/Combine_harvester"
          },
          {
            "label": "Wikipedia — Mergers and acquisitions",
            "url": "https://en.wikipedia.org/wiki/Mergers_and_acquisitions"
          },
          {
            "label": "Model soups (Wortsman et al., 2022) — arXiv",
            "url": "https://arxiv.org/abs/2203.05482"
          }
        ],
        "group": "structure"
      },
      {
        "id": 6,
        "slug": "universality",
        "name": {
          "en": "Universality",
          "zh": "萬用"
        },
        "aliases": {
          "en": [
            "Multifunctionality",
            "Consolidation"
          ],
          "zh": [
            "多功能",
            "通用"
          ]
        },
        "definition": {
          "en": "Make one object or part perform several functions so that other parts can be eliminated. A single universal element replaces the need for multiple specialized ones.",
          "zh": "讓一個物件或零件同時執行多種功能,藉此省去其他零件。用一個萬用元件取代多個專用元件。"
        },
        "subPrinciples": [
          {
            "en": "Make a part or object perform multiple functions, eliminating the need for other parts.",
            "zh": "讓一個零件或物件執行多種功能,省去對其他零件的需求。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "An elephant's trunk",
              "zh": "大象的鼻子"
            },
            "body": {
              "en": "An elephant uses one organ to breathe, smell, drink, grasp food and trumpet. Evolution consolidated many functions into a single appendage, sparing the need for separate specialized structures.",
              "zh": "大象用同一個器官呼吸、嗅聞、喝水、抓取食物並發出叫聲;演化把多種功能整合進一個附肢,省去了對多個專用構造的需求。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Swiss Army knife",
              "zh": "瑞士刀"
            },
            "body": {
              "en": "One handle carries a blade, scissors, screwdriver, corkscrew and more, so a single tool replaces a whole toolbox. It is the textbook illustration of one object serving many functions.",
              "zh": "一個握柄整合刀刃、剪刀、螺絲起子、開瓶器等,用單一工具取代一整箱工具,是「一物多用」最經典的教科書範例。"
            },
            "sourceUrl": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Combine harvester",
              "zh": "聯合收割機"
            },
            "body": {
              "en": "The machine merges reaping, threshing and winnowing, once three separate operations, into a single pass. That consolidation of functions is exactly why it is called a 'combine.'",
              "zh": "這種機器把收割、脫粒、揚穀這三道原本分開的工序整合成單次作業完成;正因為把多種功能合而為一,才被稱為「聯合」收割機。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Combine_harvester"
          },
          {
            "domain": "daily",
            "title": {
              "en": "The smartphone",
              "zh": "智慧型手機"
            },
            "body": {
              "en": "A phone that is also a camera, music player, satnav, flashlight and wallet folds a drawer full of single-purpose gadgets into one device the user always carries.",
              "zh": "一支手機同時是相機、音樂播放器、衛星導航、手電筒與錢包,把一整抽屜的單一用途裝置整合進一台隨身裝置。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "USB-C universal port",
              "zh": "USB-C 通用埠"
            },
            "body": {
              "en": "One reversible connector carries power, data and video, so a single port replaces the separate charging, display and peripheral sockets a laptop used to need.",
              "zh": "同一個可正反插的接頭同時傳輸電力、資料與影像,用單一連接埠取代筆電過去分開的充電、顯示與周邊插孔。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "WeChat super-app",
              "zh": "微信超級應用程式"
            },
            "body": {
              "en": "WeChat bundles messaging, a social feed, payments and third-party mini-programs such as ride-hailing and shopping into one app, so users rarely leave it. The whole business is one platform performing many services.",
              "zh": "微信把即時通訊、社群動態、支付與叫車、購物等第三方小程式整合進單一應用程式,使用者幾乎無需離開;整個商業模式就是「一個平台承載多種服務」。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/WeChat"
          },
          {
            "domain": "software",
            "title": {
              "en": "BusyBox",
              "zh": "BusyBox"
            },
            "body": {
              "en": "A single small executable implements tiny versions of more than 300 Unix commands, which is why it is nicknamed 'The Swiss Army Knife of Embedded Linux.' One binary does the job of a whole coreutils suite.",
              "zh": "單一個小型執行檔實作了三百多個 Unix 指令的精簡版,因而被稱為「嵌入式 Linux 的瑞士刀」;一個二進位檔就取代了整套 coreutils。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/BusyBox"
          },
          {
            "domain": "software",
            "title": {
              "en": "Unix 'everything is a file'",
              "zh": "Unix「一切皆檔案」"
            },
            "body": {
              "en": "Unix exposes devices, pipes and sockets through one universal file interface (open, read, write, close), so a single abstraction serves resources that would otherwise each need their own API.",
              "zh": "Unix 用同一套通用的檔案介面(open、read、write、close)來操作裝置、管線與 socket,單一抽象層就服務了原本各需專屬 API 的資源。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Foundation models",
              "zh": "基礎模型"
            },
            "body": {
              "en": "A single pretrained large language model handles translation, summarization, coding and question answering without task-specific models, replacing a zoo of specialized systems with one general-purpose model.",
              "zh": "單一個預訓練大型語言模型不需為各任務另建模型,就能處理翻譯、摘要、寫程式與問答,用一個通用模型取代了一整群專用系統。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Multimodal models",
              "zh": "多模態模型"
            },
            "body": {
              "en": "A modern multimodal model accepts text, images and audio in the same network, so one system replaces the separate vision, speech and language pipelines once needed for each modality.",
              "zh": "現代的多模態模型能在同一個網路中接受文字、影像與音訊輸入,用一個系統取代過去每種模態各自分開的視覺、語音與語言處理管線。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Combine harvester",
            "url": "https://en.wikipedia.org/wiki/Combine_harvester"
          },
          {
            "label": "Wikipedia — WeChat",
            "url": "https://en.wikipedia.org/wiki/WeChat"
          },
          {
            "label": "Wikipedia — BusyBox",
            "url": "https://en.wikipedia.org/wiki/BusyBox"
          }
        ],
        "group": "system"
      },
      {
        "id": 7,
        "slug": "nesting",
        "name": {
          "en": "Nested Doll",
          "zh": "套疊"
        },
        "aliases": {
          "en": [
            "Nesting",
            "Russian Dolls",
            "Matryoshka"
          ],
          "zh": [
            "巢狀",
            "俄羅斯娃娃",
            "嵌套"
          ]
        },
        "definition": {
          "en": "Place one object inside another, and that one inside a third, and so on. Alternatively, let one object pass through a cavity in another.",
          "zh": "把一個物件放進另一個物件裡,再放進第三個,依此類推;或讓一個物件穿過另一個物件的空腔。"
        },
        "subPrinciples": [
          {
            "en": "Place one object inside another; place each object, in turn, inside the next.",
            "zh": "把一個物件放進另一個裡面,再逐層放進下一個。"
          },
          {
            "en": "Make one part pass through a cavity in the other.",
            "zh": "讓一個零件穿過另一個零件的空腔。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Russian nesting dolls (matryoshka)",
              "zh": "俄羅斯套娃(瑪特廖什卡)"
            },
            "body": {
              "en": "The traditional craft that names the principle: a set of hollow wooden dolls of decreasing size, each holding the next inside it, storing many objects within the footprint of the largest one.",
              "zh": "為本原則命名的傳統工藝:一組由大到小的中空木娃娃,每個都套住下一個,用最大一個的體積收納了許多物件。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Telescoping antenna",
              "zh": "伸縮天線"
            },
            "body": {
              "en": "Tubes of shrinking diameter each slide inside the next, so a long antenna collapses into a short stack. Nesting lets a large extended length fit into a small stored space.",
              "zh": "口徑依序縮小的管節逐層套入下一節,讓長天線收合成短短一疊;套疊使伸展後的大長度能收進很小的空間。"
            },
            "sourceUrl": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Retractable landing gear",
              "zh": "可收放起落架"
            },
            "body": {
              "en": "After take-off an aircraft folds its wheels up and stows them inside cavities in the fuselage and wings, so the gear rides through a hollow in the airframe instead of hanging in the airstream.",
              "zh": "飛機起飛後把輪組收摺進機身與機翼的空腔內,起落架穿進機體的空腔中,而不再懸在氣流裡。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Stackable chairs",
              "zh": "可疊放的椅子"
            },
            "body": {
              "en": "Chairs shaped so each nests into the one below let a stack of many occupy roughly the floor space of a single chair, storing them by placing each object inside the next.",
              "zh": "椅子的造型讓每張都能套進下一張,一疊多張只佔用約一張椅子的地面空間;靠「逐層套入」來收納。"
            },
            "sourceUrl": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Nesting measuring cups",
              "zh": "套疊量杯"
            },
            "body": {
              "en": "Graduated cups of decreasing size stack one inside another, so a full set of sizes stores as a single compact column in the drawer.",
              "zh": "容量遞減的量杯一個套進一個,整組不同尺寸收納時變成抽屜裡一疊緊湊的圓柱。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Store within a store",
              "zh": "店中店"
            },
            "body": {
              "en": "A retailer hosts a branded concession — a pharmacy, coffee bar or electronics counter — inside its own floor space, nesting a smaller business within the larger one to share footfall and rent.",
              "zh": "零售商在自家賣場空間內設置品牌專櫃(藥局、咖啡吧或 3C 櫃),把較小的事業體套進較大的事業體中,共享人流與租金。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Network packet encapsulation",
              "zh": "網路封包封裝"
            },
            "body": {
              "en": "As data goes down the stack, a web page's bytes are wrapped in an HTTP header, then a TCP header, then IP, then an Ethernet frame — each layer's packet nested inside the next, exactly like the dolls.",
              "zh": "資料往協定堆疊下層傳遞時,網頁的位元組先被包上 HTTP 標頭,再包 TCP、再包 IP、再包成乙太網路訊框;每一層的封包都套在下一層裡,就像套娃一樣。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Encapsulation_(networking)"
          },
          {
            "domain": "software",
            "title": {
              "en": "Nested virtualization",
              "zh": "巢狀虛擬化"
            },
            "body": {
              "en": "A container runs inside a virtual machine that itself runs on a hypervisor, so execution environments sit one inside another, each isolated layer nested within the layer that hosts it.",
              "zh": "一個容器跑在虛擬機裡,而虛擬機又跑在 hypervisor 上,執行環境一層套一層;每個隔離層都嵌在承載它的那一層之內。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Nested cross-validation",
              "zh": "巢狀交叉驗證"
            },
            "body": {
              "en": "An inner cross-validation loop selects hyperparameters while sitting entirely inside an outer loop that estimates performance, so the tuning fold is nested within the evaluation fold to avoid optimistic bias.",
              "zh": "內層交叉驗證負責挑選超參數,完整地包在負責估計效能的外層迴圈裡;調參的折疊被套進評估的折疊中,以避免過度樂觀的偏誤。"
            },
            "sourceUrl": "https://scikit-learn.org/stable/modules/cross_validation.html"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Matryoshka embeddings",
              "zh": "套娃式表徵(Matryoshka embeddings)"
            },
            "body": {
              "en": "Matryoshka Representation Learning packs coarse-to-fine information into nested prefixes of one embedding vector, so it can be truncated to a shorter vector — like opening a smaller doll — without retraining.",
              "zh": "套娃式表徵學習把由粗到細的資訊塞進同一個嵌入向量的巢狀前綴中,因此可以像打開較小的娃娃那樣把它截短成較短的向量,而無需重新訓練。"
            },
            "sourceUrl": "https://arxiv.org/abs/2205.13147"
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Encapsulation (networking)",
            "url": "https://en.wikipedia.org/wiki/Encapsulation_(networking)"
          },
          {
            "label": "scikit-learn — Cross-validation (nested CV)",
            "url": "https://scikit-learn.org/stable/modules/cross_validation.html"
          },
          {
            "label": "Kusupati et al. — Matryoshka Representation Learning (arXiv:2205.13147)",
            "url": "https://arxiv.org/abs/2205.13147"
          }
        ],
        "group": "structure"
      },
      {
        "id": 8,
        "slug": "anti-weight",
        "name": {
          "en": "Anti-weight",
          "zh": "平衡力"
        },
        "aliases": {
          "en": [
            "Counterweight",
            "Prior counteraction of weight"
          ],
          "zh": [
            "抗重",
            "配重"
          ]
        },
        "definition": {
          "en": "Compensate for the weight of an object by combining it with something that provides lift, or by making it interact with the environment through aerodynamic, hydrodynamic or buoyancy forces.",
          "zh": "藉由把物件和能提供升力的東西結合,或讓它透過空氣動力、流體動力、浮力等與環境互動,來抵銷物件的重量。"
        },
        "subPrinciples": [
          {
            "en": "Compensate for the weight of an object by merging it with other objects that provide lift.",
            "zh": "把物件和其他能提供升力的物件結合,以抵銷其重量。"
          },
          {
            "en": "Compensate for weight by making the object interact with the environment through aerodynamic, hydrodynamic, buoyancy and other forces.",
            "zh": "讓物件透過空氣動力、流體動力、浮力等與環境互動,以抵銷其重量。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Fish swim bladder",
              "zh": "魚鰾"
            },
            "body": {
              "en": "A gas-filled organ lets a bony fish match the buoyancy of the surrounding water to its own weight, so it holds any depth without constantly swimming. The environment's upthrust cancels its weight.",
              "zh": "充氣的器官讓硬骨魚把周圍水的浮力調到與自身體重相當,無需不斷游動就能停在任一深度;環境的浮力抵銷了牠的重量。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Swim_bladder"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Elevator counterweight",
              "zh": "電梯配重"
            },
            "body": {
              "en": "A counterweight equal to the car plus about 40-50% of its load hangs on the other side of the rope, so the motor only lifts the small difference in weight rather than the whole car.",
              "zh": "一個等於轎廂重量加上約四到五成載重的配重掛在鋼索另一端,馬達只需拉動兩邊微小的重量差,而不必吊起整個轎廂。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Elevator"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Hydrofoil",
              "zh": "水翼船"
            },
            "body": {
              "en": "Wing-like foils under the hull generate hydrodynamic lift as the boat speeds up, raising the hull clear of the water so drag drops. The moving water carries the vessel's weight.",
              "zh": "船體下方的翼狀水翼在船加速時產生流體動力升力,把船體抬離水面以降低阻力;流動的水承擔了船的重量。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Hydrofoil"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Aircraft wing lift",
              "zh": "機翼升力"
            },
            "body": {
              "en": "The wing's shape deflects air downward and generates lift that exactly supports the aircraft's weight in cruise, letting a heavy machine ride on nothing but moving air.",
              "zh": "機翼的形狀把空氣向下偏折並產生升力,在巡航時恰好支撐飛機的重量,讓沉重的機器僅憑流動的空氣就能懸浮飛行。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Balanced-arm lamp (Anglepoise)",
              "zh": "平衡臂檯燈(Anglepoise)"
            },
            "body": {
              "en": "Springs counteract the weight of the lamp's arm at every angle, so the head stays wherever it is nudged instead of drooping. A built-in anti-weight holds the position.",
              "zh": "彈簧在每個角度都抵銷燈臂的重量,燈頭撥到哪就停在哪、不會垂落;內建的平衡力維持了它的姿勢。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Balanced-arm_lamp"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Helium advertising balloon",
              "zh": "氦氣廣告氣球"
            },
            "body": {
              "en": "Filled with a gas lighter than air, the balloon's buoyancy exceeds its own weight, so it lifts banners and signs aloft with no mast. The surrounding air holds the load up.",
              "zh": "灌入比空氣輕的氣體後,氣球的浮力超過自身重量,不需桅杆就能把布條與招牌托上高空;周圍的空氣把負載撐了起來。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Financial hedging",
              "zh": "財務避險"
            },
            "body": {
              "en": "An airline buys fuel futures in advance so a gain on the hedge offsets the extra cost when jet-fuel prices rise. An opposing position counterbalances the 'weight' of price risk.",
              "zh": "航空公司預先買進燃油期貨,油價上漲時避險部位的獲利正好抵銷多出的成本;一個反向部位平衡了價格風險這個「重量」。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Hedge_(finance)"
          },
          {
            "domain": "software",
            "title": {
              "en": "CDN edge offloading",
              "zh": "CDN 邊緣分流"
            },
            "body": {
              "en": "A content delivery network serves cached pages from distributed edge servers near users, so most traffic never reaches the origin. The surrounding network carries the load the origin would otherwise bear.",
              "zh": "內容傳遞網路從靠近使用者的分散式邊緣伺服器供應快取頁面,大多數流量根本不會打到源站;周邊網路承擔了源站原本要扛的負載。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Content_delivery_network"
          },
          {
            "domain": "software",
            "title": {
              "en": "Serverless auto-scaling",
              "zh": "無伺服器自動擴縮"
            },
            "body": {
              "en": "Instead of provisioning servers for peak load, an app leans on the cloud's elastic capacity to absorb traffic spikes on demand, letting the environment carry the burden of the heaviest moments.",
              "zh": "應用程式不為尖峰負載自行備妥伺服器,而是仰賴雲端的彈性容量隨需吸收流量高峰,讓環境承擔最沉重時刻的負擔。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Class weighting for imbalanced data",
              "zh": "不平衡資料的類別加權"
            },
            "body": {
              "en": "When one class vastly outnumbers another, the training loss gives the minority class a higher weight — an opposing force that counterbalances the majority's dominance so the model does not ignore rare cases.",
              "zh": "當某一類別的數量遠多於另一類別時,訓練損失會給少數類別較高的權重;這股反向的力量平衡了多數類別的壓倒性優勢,讓模型不會忽略罕見樣本。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "KL penalty in RLHF",
              "zh": "RLHF 中的 KL 懲罰項"
            },
            "body": {
              "en": "During RLHF the objective adds a KL-divergence penalty that pulls the fine-tuned policy back toward the original model — an opposing term that counterweights the reward's push toward degenerate, reward-hacking outputs.",
              "zh": "在 RLHF 中,目標函數加入一個 KL 散度懲罰項,把微調後的策略拉回原始模型;這個反向項平衡了獎勵訊號把模型推向退化、鑽獎勵漏洞輸出的傾向。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback"
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Swim bladder",
            "url": "https://en.wikipedia.org/wiki/Swim_bladder"
          },
          {
            "label": "Wikipedia — Elevator (counterweight)",
            "url": "https://en.wikipedia.org/wiki/Elevator"
          },
          {
            "label": "Wikipedia — Reinforcement learning from human feedback (KL penalty)",
            "url": "https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback"
          }
        ],
        "group": "matter"
      },
      {
        "id": 9,
        "slug": "preliminary-anti-action",
        "name": {
          "en": "Preliminary Anti-action",
          "zh": "預先反作用"
        },
        "aliases": {
          "en": [
            "Prior counteraction",
            "Preliminary counteraction"
          ],
          "zh": [
            "預先反制",
            "事先反作用"
          ]
        },
        "definition": {
          "en": "If an action will have both useful and harmful effects, perform a counter-action in advance to neutralize the harm. Or introduce, beforehand, stresses that oppose the undesirable stresses expected later.",
          "zh": "如果某個作用同時帶來有益與有害的效果,就預先施加反向作用以中和其害處;或事先加入能對抗日後不良應力的相反應力。"
        },
        "subPrinciples": [
          {
            "en": "If it is necessary to do an action with both harmful and useful effects, replace it with anti-actions that control the harmful effects.",
            "zh": "若必須執行同時有害又有益的作用,改用能控制有害效果的反向作用。"
          },
          {
            "en": "Create beforehand stresses in an object that will oppose known undesirable working stresses later.",
            "zh": "事先在物件中建立能對抗日後已知不良工作應力的相反應力。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Variolation (early inoculation)",
              "zh": "人痘接種(早期免疫接種)"
            },
            "body": {
              "en": "Long before Jenner, people in China, India and Africa deliberately exposed the healthy to material from a mild smallpox case, provoking the disease in a controlled form beforehand so the body could resist the real infection later.",
              "zh": "早在金納之前,中國、印度與非洲的人們就刻意讓健康者接觸輕症天花的材料,預先以受控的形式引發疾病,使身體日後能抵抗真正的感染。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Inoculation"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Prestressed concrete",
              "zh": "預力混凝土"
            },
            "body": {
              "en": "Tendons compress the concrete before it ever carries load, so when service loads try to stretch it they must first cancel that built-in compression. The counter-stress is applied in advance.",
              "zh": "鋼腱在混凝土承載前就先把它壓縮,日後使用荷載想拉伸它時,得先抵銷這股內建的壓應力;反向應力是事先施加的。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Prestressed_concrete"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Tempered glass",
              "zh": "強化玻璃"
            },
            "body": {
              "en": "Rapid cooling locks the glass surface into compression and the core into tension; a crack must overcome the pre-applied surface compression before it can spread, so the anti-action is baked in during manufacture.",
              "zh": "急速冷卻讓玻璃表面處於壓縮、核心處於張力;裂縫必須先克服預先施加的表面壓應力才能擴展,反作用在製造時就已內建。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Tempered_glass"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Shot peening",
              "zh": "珠擊處理"
            },
            "body": {
              "en": "Bombarding a metal part with shot pounds a compressive residual-stress layer into its surface beforehand, opposing the tensile stresses that would otherwise start fatigue cracks in service.",
              "zh": "用彈丸轟擊金屬件,事先在表面打出一層殘餘壓應力,對抗日後使用時會引發疲勞裂縫的張應力。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Shot_peening"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Masking before painting",
              "zh": "上漆前貼遮蔽膠帶"
            },
            "body": {
              "en": "Before rolling paint, you tape over trim and sockets — a pre-emptive counter-move that blocks the harmful side effect of paint landing where it should not, instead of cleaning it up afterward.",
              "zh": "滾漆之前先把飾條與插座貼起來;這是預先的反制動作,擋掉「漆到不該漆的地方」這個有害副作用,而非事後清理。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Pre-mortem analysis",
              "zh": "事前驗屍(pre-mortem)"
            },
            "body": {
              "en": "Before a project starts, the team imagines it has already failed and works backward to name the causes, so risks are countered in advance instead of merely diagnosed in a post-mortem.",
              "zh": "專案啟動前,團隊先想像它已經失敗,再回推失敗的原因,好讓風險在事前就被反制,而不是等到事後檢討才被診斷出來。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Pre-mortem"
          },
          {
            "domain": "software",
            "title": {
              "en": "Parameterized queries",
              "zh": "參數化查詢"
            },
            "body": {
              "en": "By binding user input as data rather than concatenating it into SQL, the application neutralizes injection before any query runs. The harmful effect of untrusted input is disarmed in advance.",
              "zh": "把使用者輸入以資料形式綁定,而非串接進 SQL 字串,應用程式在任何查詢執行前就中和了注入攻擊;不可信輸入的害處被預先解除。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Netflix Chaos Monkey",
              "zh": "Netflix Chaos Monkey"
            },
            "body": {
              "en": "Netflix deliberately kills random production servers during business hours, injecting the very failure it fears beforehand so engineers are forced to build systems that survive it — a vaccine for the infrastructure.",
              "zh": "Netflix 在營業時間刻意隨機關掉正式環境的伺服器,預先注入它最擔心的故障,逼工程師打造能承受故障的系統;這等於是替基礎架構打疫苗。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Chaos_engineering"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Adversarial training",
              "zh": "對抗訓練"
            },
            "body": {
              "en": "Models are fed deliberately perturbed 'adversarial' examples during training, meeting the attack in a controlled way beforehand so the deployed model resists such manipulations later — an anti-action against future attacks.",
              "zh": "訓練時刻意餵給模型經過擾動的「對抗樣本」,預先以受控方式遭遇攻擊,使上線後的模型能抵抗這類操弄;這是針對未來攻擊的反作用。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Adversarial_machine_learning"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Red-teaming before deployment",
              "zh": "部署前的紅隊測試"
            },
            "body": {
              "en": "Before release, teams probe a model for harmful outputs and fine-tune it against them, pre-emptively counteracting jailbreaks and unsafe responses that users would otherwise trigger in production.",
              "zh": "發布前,團隊主動探測模型的有害輸出並針對它們微調,預先反制使用者日後在正式環境可能觸發的越獄與不安全回應。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Prestressed concrete",
            "url": "https://en.wikipedia.org/wiki/Prestressed_concrete"
          },
          {
            "label": "Wikipedia — Inoculation (variolation)",
            "url": "https://en.wikipedia.org/wiki/Inoculation"
          },
          {
            "label": "Wikipedia — Chaos engineering (Chaos Monkey)",
            "url": "https://en.wikipedia.org/wiki/Chaos_engineering"
          },
          {
            "label": "Wikipedia — Adversarial machine learning",
            "url": "https://en.wikipedia.org/wiki/Adversarial_machine_learning"
          }
        ],
        "group": "process"
      },
      {
        "id": 10,
        "slug": "preliminary-action",
        "name": {
          "en": "Preliminary Action",
          "zh": "預先作用"
        },
        "aliases": {
          "en": [
            "Prior action",
            "Preparation"
          ],
          "zh": [
            "事先作用",
            "預備動作"
          ]
        },
        "definition": {
          "en": "Carry out a required change to an object, fully or partially, before it is needed. Arrange objects in advance so they can go into action immediately, from the most convenient place, without wasting time.",
          "zh": "在需要之前,就先對物件完成全部或部分必要的改變;並事先把物件安排就緒,使其能從最方便的位置立即投入作用,不浪費時間。"
        },
        "subPrinciples": [
          {
            "en": "Perform, before it is needed, the required change of an object (either fully or partially).",
            "zh": "在需要之前,就先完成物件全部或部分的必要改變。"
          },
          {
            "en": "Pre-arrange objects so they can come into action from the most convenient place and without losing time.",
            "zh": "事先把物件安排妥當,使其能從最方便的位置、不浪費時間地投入作用。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Pre-soaking seeds (seed priming)",
              "zh": "浸種催芽(種子預處理)"
            },
            "body": {
              "en": "Traditional farmers soak seeds before sowing so germination has already begun when they hit the soil, doing part of the required change in advance to save days in the field.",
              "zh": "傳統農民在播種前先浸泡種子,使其入土時發芽已經啟動;把部分必要的改變提前完成,替田裡省下好幾天。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Pre-drilled flat-pack furniture",
              "zh": "預鑽孔的組合家具"
            },
            "body": {
              "en": "Flat-pack furniture arrives with every screw hole already bored, so assembly is just alignment and fastening. The hardest machining is done in advance at the factory.",
              "zh": "組合家具出貨時每個螺絲孔都已鑽好,組裝只剩對位與鎖固;最費工的加工在工廠就事先完成了。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Perforated tear lines",
              "zh": "預壓的撕裂虛線"
            },
            "body": {
              "en": "Stamps, paper towels and packaging carry a line of tiny holes punched in advance, so the material tears cleanly along it exactly when needed, without scissors.",
              "zh": "郵票、紙巾與包裝上都有一排事先打好的小孔,材料在需要時能沿線乾淨撕開,不必動用剪刀。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Prefabricated modular construction",
              "zh": "預鑄模組化營建"
            },
            "body": {
              "en": "Whole room modules are built and fitted out in a factory, then trucked to site and craned together, so most of the construction is finished before it ever reaches the ground.",
              "zh": "整間房間的模組在工廠內建好並裝修完成,再運到工地吊裝拼合;大部分營建工作在抵達現場前就已完成。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Pre-pasted wallpaper",
              "zh": "背膠壁紙"
            },
            "body": {
              "en": "The adhesive is already applied to the back of the wallpaper; the hanger just wets and hangs it, because the gluing step was performed in advance during manufacture.",
              "zh": "壁紙背面已經上好膠;貼的人只要沾濕就能上牆,因為上膠這道工序在製造時就事先完成了。"
            },
            "sourceUrl": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Mise en place",
              "zh": "備料就位(mise en place)"
            },
            "body": {
              "en": "A cook chops, measures and arranges every ingredient before the burner is lit, so during service each component is ready to go into the pan instantly, without losing time.",
              "zh": "廚師在開火前就把每樣食材切好、量好、擺好位置,出餐時每個配料都能立刻下鍋,不浪費時間。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Airport customs preclearance",
              "zh": "機場入境預先查驗"
            },
            "body": {
              "en": "Travellers clear immigration and customs at the foreign departure airport before boarding, so on landing they walk out as domestic passengers. The inspection is done in advance where it is convenient.",
              "zh": "旅客在國外的出發機場、登機前就先完成移民與海關查驗,落地後可直接以國內旅客身分離開;查驗在方便的地點事先完成。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Preclearance"
          },
          {
            "domain": "software",
            "title": {
              "en": "Prefetching and precomputation",
              "zh": "預取與預先計算"
            },
            "body": {
              "en": "Browsers and apps fetch and render likely-next resources ahead of the user's click, and systems precompute materialized views, so the result is already waiting the moment it is requested.",
              "zh": "瀏覽器與應用程式會在使用者點擊前就預先抓取並渲染可能用到的資源,系統也會預先算好物化檢視表,讓結果在被請求的當下就已備妥。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Database indexing",
              "zh": "資料庫索引"
            },
            "body": {
              "en": "An index sorts and structures the data in advance, moving the heavy work out of query time, so future lookups that would otherwise scan the whole table finish almost instantly.",
              "zh": "索引事先把資料排序、建立結構,把繁重的工作移出查詢當下;日後原本得掃描整張表的查找幾乎能瞬間完成。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "KV-cache and prompt caching",
              "zh": "KV 快取與提示快取"
            },
            "body": {
              "en": "Transformers store the key/value tensors of tokens already processed, and prompt caching reuses a processed prompt prefix, so a long context is computed once in advance and simply reused on later calls.",
              "zh": "Transformer 會儲存已處理過詞元的 key/value 張量,提示快取則重用已處理的提示前綴,使長上下文只需事先計算一次,後續呼叫直接沿用。"
            },
            "sourceUrl": "https://platform.claude.com/docs/en/docs/build-with-claude/prompt-caching"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Precomputed embeddings for RAG",
              "zh": "為 RAG 預先計算的嵌入向量"
            },
            "body": {
              "en": "A retrieval-augmented system embeds and indexes the whole document corpus ahead of time, so at query time it only embeds the question and looks up neighbors. The expensive encoding is done in advance.",
              "zh": "檢索增強系統事先把整個文件語料庫轉成嵌入向量並建立索引,查詢時只需把問題轉成向量再查找鄰近項;昂貴的編碼工作已提前完成。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Preclearance",
            "url": "https://en.wikipedia.org/wiki/Preclearance"
          },
          {
            "label": "Anthropic — Prompt caching documentation",
            "url": "https://platform.claude.com/docs/en/docs/build-with-claude/prompt-caching"
          }
        ],
        "group": "process"
      },
      {
        "id": 11,
        "slug": "beforehand-cushioning",
        "name": {
          "en": "Beforehand Cushioning",
          "zh": "事先緩衝"
        },
        "aliases": {
          "en": [
            "Cushion in Advance",
            "Compensate Beforehand",
            "Prepared Compensation"
          ],
          "zh": [
            "預先補償",
            "事先補償",
            "預備緩衝"
          ]
        },
        "definition": {
          "en": "Prepare emergency or backup means in advance to compensate for the relatively low reliability of an object or process. Because failure can never be fully eliminated, you pre-position countermeasures so that when something does go wrong, the damage is already contained.",
          "zh": "事先準備好緊急或備援手段,用來補償物體或流程本來就不夠高的可靠度。既然故障無法完全消除,就預先佈署因應措施,讓事情真的出錯時,損害早已被控制住。"
        },
        "subPrinciples": [
          {
            "en": "Prepare emergency means beforehand to compensate for the relatively low reliability of an object.",
            "zh": "事先準備緊急手段,以補償物體相對偏低的可靠度。"
          },
          {
            "en": "Provide backups, reserves, or safety margins so a single failure does not become a catastrophe.",
            "zh": "提供備援、儲備或安全餘裕,讓單一故障不會演變成災難。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Grain reserves against famine",
              "zh": "防饑荒的存糧"
            },
            "body": {
              "en": "Ancient societies stored surplus grain in silos and granaries during good harvests to survive later lean years. The reserve is prepared in advance precisely because rainfall and harvests are unreliable, cushioning the shock of a bad season.",
              "zh": "古代社會在豐收時把多餘的穀物存進穀倉與糧窖,以熬過日後的歉收年。這批儲備正是因為雨量與收成不可靠而預先備妥,用來緩衝荒年的衝擊。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Automobile airbag",
              "zh": "汽車安全氣囊"
            },
            "body": {
              "en": "An airbag sits folded and inert inside the steering wheel until a crash is detected, then inflates in milliseconds to cushion the occupant. It is an emergency means installed long beforehand to compensate for the ever-present possibility of a collision.",
              "zh": "安全氣囊平時折疊、靜置在方向盤內,一旦偵測到撞擊便在數毫秒內充氣以緩衝乘員。它是遠早於事件就裝好的緊急手段,用來補償隨時可能發生碰撞的風險。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Pressure relief valve",
              "zh": "洩壓安全閥"
            },
            "body": {
              "en": "A safety valve on a boiler or pressure vessel is set to open automatically when internal pressure exceeds a safe threshold, venting before anything ruptures. It is a pre-installed fail-safe that compensates for the vessel's imperfect pressure control.",
              "zh": "鍋爐或壓力容器上的安全閥設定為內部壓力超過安全門檻時自動開啟,在任何破裂發生前先行洩壓。這是預先裝設的失效保護,用來補償容器壓力控制的不完美。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Home smoke alarm and fire extinguisher",
              "zh": "居家煙霧警報器與滅火器"
            },
            "body": {
              "en": "A household keeps a smoke alarm and a fire extinguisher on hand although a fire may never happen. These emergency means are prepared in advance so that if ignition does occur, warning and suppression are already within reach.",
              "zh": "家庭平時就備妥煙霧警報器與滅火器,即使火災或許永遠不會發生。這些緊急手段預先備妥,萬一真的起火,警示與滅火手段早已隨手可得。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Spare tire in the trunk",
              "zh": "後車廂的備胎"
            },
            "body": {
              "en": "A car carries a spare wheel that is dead weight almost all the time, yet it is exactly what lets a driver recover from an unpredictable puncture on the road. The backup is provisioned in advance to compensate for a tire's finite reliability.",
              "zh": "汽車攜帶一顆幾乎全程都是死重的備胎,但它正是駕駛人在路上遇到無法預測的爆胎時得以脫困的關鍵。這個備援是預先配置的,用來補償輪胎有限的可靠度。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Insurance and emergency reserves",
              "zh": "保險與緊急準備金"
            },
            "body": {
              "en": "Individuals and firms pay premiums or set aside cash reserves before any loss occurs, so that a fire, lawsuit, or downturn does not wipe them out. The buffer is funded in advance to absorb the financial impact of inherently uncertain events.",
              "zh": "個人與企業在任何損失發生之前就繳付保費或提撥現金準備金,好讓火災、訴訟或景氣下滑不至於將他們擊垮。這道緩衝在事前就備妥資金,用來吸收本質上不確定事件的財務衝擊。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Safety stock in supply chains",
              "zh": "供應鏈的安全庫存"
            },
            "body": {
              "en": "Operations teams hold extra buffer inventory beyond forecast demand so that a late shipment or a demand spike does not stop the line or empty the shelf. The reserve is positioned beforehand to cushion the unreliability of suppliers and forecasts.",
              "zh": "營運團隊會在預測需求之外多備一層緩衝庫存,好讓到貨延誤或需求暴增不會讓產線停擺或貨架淨空。這批儲備在事前佈署,用來緩衝供應商與預測的不可靠。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Autosave and database backups",
              "zh": "自動存檔與資料庫備份"
            },
            "body": {
              "en": "Editors autosave drafts every few seconds and databases take periodic snapshots, so a crash or accidental deletion loses only minutes of work. The saved state is captured in advance to compensate for the unreliability of processes and hardware.",
              "zh": "編輯器每隔幾秒自動存檔草稿,資料庫則定期建立快照,讓當機或誤刪只損失幾分鐘的工作。這些狀態是預先保存的,用來補償程序與硬體的不可靠。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "RAID and failover redundancy",
              "zh": "磁碟陣列與容錯移轉冗餘"
            },
            "body": {
              "en": "RAID keeps spare disks and parity so a drive can die without data loss, and hot-standby servers wait to take over the instant a primary fails. This redundancy is provisioned in advance to compensate for the certainty that individual components eventually fail.",
              "zh": "磁碟陣列(RAID)保有備援磁碟與同位資料,讓某顆磁碟損壞也不會遺失資料;熱備援伺服器則隨時待命,在主機一故障就立刻接手。這種冗餘是預先配置的,用來補償「個別元件終將故障」這件必然的事。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Model checkpointing during training",
              "zh": "訓練期間的模型檢查點"
            },
            "body": {
              "en": "Long training runs periodically checkpoint the model weights, optimizer state, and scheduler so that a GPU or node failure can be recovered by resuming from the last checkpoint instead of restarting from scratch. The saved state is a beforehand cushion against the low reliability of very long jobs on large clusters.",
              "zh": "長時間的訓練會定期把模型權重、優化器狀態與排程器狀態存成檢查點,讓 GPU 或節點故障時能從最後一個檢查點續跑,而不必從頭重來。這些保存的狀態就是對「大型叢集上超長任務可靠度偏低」所做的事先緩衝。"
            },
            "sourceUrl": "https://www.giskard.ai/glossary/machine-learning-checkpointing"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Redundant sensor fusion in self-driving cars",
              "zh": "自駕車的冗餘感測器融合"
            },
            "body": {
              "en": "Autonomous vehicles carry overlapping cameras, radar, and lidar so that when one sensor is degraded by glare, fog, or rain, the others still supply a reliable picture. The redundancy is designed in beforehand to cushion the unreliability of any single perception channel.",
              "zh": "自駕車搭載相互重疊的相機、雷達與光達,讓某一種感測器因強光、濃霧或雨勢而失準時,其他感測器仍能提供可靠的環境影像。這種冗餘是事先設計進去的,用來緩衝任何單一感知通道的不可靠。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Guardrails and fallbacks in LLM applications",
              "zh": "大型語言模型應用的護欄與後備機制"
            },
            "body": {
              "en": "Production LLM systems wrap the model with content filters, output validators, and a fallback path that retries a backup model or returns a safe default when the primary response is unsafe, malformed, or unavailable. These safeguards are prepared in advance to compensate for the model's probabilistic, occasionally unreliable output.",
              "zh": "正式環境的大型語言模型系統會在模型外圍包上內容過濾、輸出驗證,以及一條後備路徑:當主要回應不安全、格式錯誤或無法取得時,改用備援模型重試或回傳安全預設值。這些防護措施都是事先備妥的,用來補償模型機率式、偶爾不可靠的輸出。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Six Sigma Study Guide — Theory of Inventive Problem Solving (TRIZ)",
            "url": "https://sixsigmastudyguide.com/theory-of-inventive-problem-solving-triz/"
          },
          {
            "label": "Giskard — Machine Learning Checkpointing",
            "url": "https://www.giskard.ai/glossary/machine-learning-checkpointing"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          }
        ],
        "group": "process"
      },
      {
        "id": 12,
        "slug": "equipotentiality",
        "name": {
          "en": "Equipotentiality",
          "zh": "等位性"
        },
        "aliases": {
          "en": [
            "Equal Potential",
            "Remove Tension",
            "Constant Level"
          ],
          "zh": [
            "等勢",
            "等電位",
            "去除高低差"
          ]
        },
        "definition": {
          "en": "Change the operating conditions so that an object no longer has to be raised or lowered in a gravity field, keeping it at one constant level or potential. By removing the height difference you eliminate the wasted effort of lifting and lowering.",
          "zh": "改變運作條件,讓物體不再需要在重力場中被抬高或放低,而是維持在同一個高度或位勢上。只要消除高低差,就能省掉抬起與放下所浪費的力氣。"
        },
        "subPrinciples": [
          {
            "en": "Change operating conditions to eliminate the need to raise or lower objects in a gravity field.",
            "zh": "改變運作條件,消除在重力場中抬高或放低物體的需要。"
          },
          {
            "en": "Redesign the environment so things stay at a constant level or potential rather than moving against a gradient.",
            "zh": "重新設計環境,讓物體維持在固定的高度或位勢,而不是逆著梯度移動。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Canal lock",
              "zh": "運河船閘"
            },
            "body": {
              "en": "A canal lock joins stretches of water at different heights by changing the water level inside a fixed chamber, so the boat simply floats up or down. The heavy vessel is never physically lifted; the environment is adjusted so the boat stays at the water's own level.",
              "zh": "船閘用一座固定的閘室,藉由改變室內水位來銜接不同高度的水段,讓船隻只是隨水浮起或下降。沉重的船身從不需要被實際抬起,而是調整環境,讓船永遠停在水面自身的高度。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Lock_(water_navigation)"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Mechanic's inspection pit",
              "zh": "維修地坑"
            },
            "body": {
              "en": "Instead of hoisting a heavy car up on a lift, a garage digs a pit so the mechanic can walk down and work on the underside while the car stays at ground level. The need to raise the object is removed by lowering the worker instead.",
              "zh": "修車廠不把沉重的車子頂高,而是挖一個地坑,讓技師走下去、在車子維持地面高度時檢修底盤。抬高物體的需要被消除了,改成讓工作者下降。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Truck-height loading dock",
              "zh": "與車床同高的裝卸月台"
            },
            "body": {
              "en": "A warehouse floor is built level with the beds of the trucks that serve it, so pallets roll straight across horizontally instead of being lifted up or set down. The height difference between vehicle and building is engineered away.",
              "zh": "倉庫地面刻意蓋成與進出貨車車床同高,讓棧板水平推移即可,不必抬上或放下。車輛與建物之間的高低差在設計上就被抹平了。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Spring-loaded cafeteria plate dispenser",
              "zh": "彈簧式餐盤升降架"
            },
            "body": {
              "en": "A cafeteria plate stack sits on a spring that pushes the pile up as plates are removed, so the top plate is always presented at the same convenient height. Diners never reach up or bend down; the stack self-adjusts to a constant level.",
              "zh": "自助餐的餐盤疊在一個彈簧上,盤子被取走時彈簧就把整疊往上推,讓最上面那個盤子永遠停在同一個順手的高度。取用者不必抬手或彎腰,整疊餐盤會自動維持在固定高度。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Laundry chute",
              "zh": "洗衣滑槽"
            },
            "body": {
              "en": "A laundry chute lets clothes drop by gravity from an upper floor to the laundry room, so no one has to carry a heavy basket down the stairs. The task is redesigned so the load moves along the existing height gradient instead of being hauled against it.",
              "zh": "洗衣滑槽讓衣物靠重力從樓上落到洗衣間,沒有人得抱著沉重的籃子下樓。這件工作被重新設計成:讓衣物順著既有的高低差移動,而不是逆著它搬運。"
            },
            "sourceUrl": "https://sixsigmastudyguide.com/theory-of-inventive-problem-solving-triz/"
          },
          {
            "domain": "business",
            "title": {
              "en": "Single-level plant layout",
              "zh": "單一平面的廠房佈局"
            },
            "body": {
              "en": "Lean factories lay out the whole production flow on one level with materials staged at working height, so operators slide parts along rather than lifting them between stations. Keeping everything at a constant level cuts handling labor and lifting injuries.",
              "zh": "精實工廠把整條生產流程佈置在同一個平面上,物料也備在工作高度,讓作業員在工站之間滑動零件而不是抬起搬運。把一切維持在固定高度,能減少搬運工時與抬舉造成的傷害。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Move computation to the data",
              "zh": "把運算移到資料端"
            },
            "body": {
              "en": "Big-data frameworks like MapReduce ship a small piece of computation to the node where the data already lives, instead of dragging huge datasets across the network to the code. Avoiding the costly movement of data is the software analogue of not lifting a heavy object against gravity.",
              "zh": "像 MapReduce 這類大數據框架,會把一小段運算送到資料所在的節點,而不是把龐大的資料集拖過網路送到程式那端。避免昂貴的資料搬移,正是「不逆著重力抬起重物」在軟體上的對應。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "CDN edge caching",
              "zh": "內容傳遞網路的邊緣快取"
            },
            "body": {
              "en": "A content delivery network keeps copies of assets on edge servers close to users, so a page load does not have to fetch data all the way from a distant origin every time. Keeping content at the same level as its consumers removes the repeated cost of moving it a long way.",
              "zh": "內容傳遞網路(CDN)把資源複本放在靠近使用者的邊緣伺服器上,讓每次載入頁面時不必大老遠從遙遠的來源伺服器抓取。把內容維持在與使用者相同的層級,就省去了反覆長距離搬運的成本。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Federated learning",
              "zh": "聯邦式學習"
            },
            "body": {
              "en": "Federated learning trains a shared model by sending the model to each device and training on the local data there, so raw data never leaves the phone or hospital. The computation is brought to the data rather than the data being moved to a central server.",
              "zh": "聯邦式學習訓練一個共享模型的做法,是把模型送到各裝置上、用當地的資料就地訓練,原始資料因此從不離開手機或醫院。是把運算帶到資料端,而不是把資料搬到中央伺服器。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Federated_learning"
          },
          {
            "domain": "ai",
            "title": {
              "en": "On-device edge inference",
              "zh": "裝置端邊緣推論"
            },
            "body": {
              "en": "Running a model directly on the phone or camera that captured the data means the raw input never has to be uploaded to the cloud and back. Keeping inference at the same place as the data removes the latency and cost of shipping it elsewhere.",
              "zh": "直接在拍下資料的手機或攝影機上執行模型,意味著原始輸入根本不必上傳到雲端再傳回。把推論維持在與資料相同的位置,就消除了把資料送往他處的延遲與成本。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Six Sigma Study Guide — Theory of Inventive Problem Solving (TRIZ)",
            "url": "https://sixsigmastudyguide.com/theory-of-inventive-problem-solving-triz/"
          },
          {
            "label": "Wikipedia — Lock (water navigation)",
            "url": "https://en.wikipedia.org/wiki/Lock_(water_navigation)"
          },
          {
            "label": "Wikipedia — Federated learning",
            "url": "https://en.wikipedia.org/wiki/Federated_learning"
          }
        ],
        "group": "matter"
      },
      {
        "id": 13,
        "slug": "the-other-way-round",
        "name": {
          "en": "The Other Way Round",
          "zh": "反向操作"
        },
        "aliases": {
          "en": [
            "Do It in Reverse",
            "Inversion",
            "Other Way Around"
          ],
          "zh": [
            "逆向操作",
            "反向思考",
            "顛倒"
          ]
        },
        "definition": {
          "en": "Invert the action normally used to solve the problem, or reverse the roles of moving and fixed parts. Instead of doing the obvious thing, do its opposite, turn the object upside down, or make the environment move rather than the object.",
          "zh": "把平常用來解決問題的動作反過來做,或是對調運動件與固定件的角色。不做那個理所當然的動作,而是做它的相反、把物體顛倒過來,或讓環境動而不是讓物體動。"
        },
        "subPrinciples": [
          {
            "en": "Invert the action used to solve the problem (e.g. instead of cooling an object, heat it).",
            "zh": "把解題所用的動作反過來(例如不去冷卻物體,而是加熱它)。"
          },
          {
            "en": "Make movable parts (or the external environment) fixed, and fixed parts movable.",
            "zh": "把可動的部分(或外部環境)固定住,把固定的部分變成可動的。"
          },
          {
            "en": "Turn the object, process, or situation upside down.",
            "zh": "把物體、流程或情境整個顛倒過來。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "The potter's wheel",
              "zh": "陶輪"
            },
            "body": {
              "en": "Rather than moving the shaping hands around a lump of clay, the potter spins the clay on a wheel and holds the hands relatively still. The workpiece is made to move while the tool stays fixed, the reverse of shaping something by hand.",
              "zh": "陶匠不是讓塑形的雙手繞著陶土轉,而是讓陶土在轉盤上旋轉,雙手則相對固定不動。是讓工件動、讓工具固定,恰好與徒手塑形的方式相反。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "The lathe",
              "zh": "車床"
            },
            "body": {
              "en": "A hand file moves the tool across a stationary workpiece; a lathe reverses this by spinning the workpiece at high speed against a fixed cutting tool. Swapping which element moves lets a single point remove material evenly all the way around.",
              "zh": "手工銼刀是讓工具在固定的工件上移動;車床則把這件事反過來,讓工件高速旋轉、抵著固定的刀具。對調誰在動,就能讓單一刀尖沿著整個圓周均勻地切削材料。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "MRI and CT scanners",
              "zh": "磁振造影與電腦斷層掃描"
            },
            "body": {
              "en": "Instead of passing the patient through the instrument, the scanner keeps the patient still and rotates the imaging ring around the body. Making the machine move rather than the subject gives a stable, precisely registered set of cross-sections.",
              "zh": "掃描儀不是讓病人穿過儀器,而是讓病人保持不動、讓造影環繞著身體旋轉。讓機器動而不是讓受檢者動,能得到穩定且精確對位的一系列斷層影像。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "The treadmill",
              "zh": "跑步機"
            },
            "body": {
              "en": "Normal running moves the runner across fixed ground; a treadmill reverses this by keeping the runner in place while the belt moves under their feet. Fixing the person and moving the ground turns an outdoor activity into something done in one spot.",
              "zh": "一般跑步是讓跑者在固定的地面上前進;跑步機把這件事反過來,讓跑者留在原地、由履帶在腳下移動。固定人、移動地面,就把一項戶外活動變成在一個定點就能完成的事。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Moving walkway and escalator",
              "zh": "電動步道與電扶梯"
            },
            "body": {
              "en": "In an airport concourse the traveler can stand still while the floor itself carries them forward. Instead of the person walking the distance, the environment moves, reversing which side of the journey does the work.",
              "zh": "在機場大廳,旅客可以站著不動,由地板本身把他們往前送。不是由人走完那段距離,而是讓環境移動,把「旅程中誰在出力」這件事對調過來。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Kanban pull production",
              "zh": "看板拉式生產"
            },
            "body": {
              "en": "Traditional manufacturing pushes work downstream according to a forecast; the Toyota Production System reverses the flow so that downstream demand pulls each unit only as capacity permits. Reversing the direction of control keeps inventory low and exposes bottlenecks.",
              "zh": "傳統製造是依預測把工作往下游推;豐田生產方式則把流向反過來,讓下游需求在產能允許時才把每一件產品拉動出來。把控制的方向反轉,能壓低庫存並讓瓶頸現形。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Kanban_(development)"
          },
          {
            "domain": "business",
            "title": {
              "en": "Reverse auction",
              "zh": "逆向拍賣"
            },
            "body": {
              "en": "In an ordinary auction many buyers bid a price up for one seller's item; a reverse auction flips the roles so many sellers compete to offer the lowest price to a single buyer. Inverting who bids against whom is used widely in procurement to drive costs down.",
              "zh": "一般拍賣是許多買家為一位賣家的物品把價格往上喊;逆向拍賣把角色顛倒,讓許多賣家競相向單一買家開出最低價。把「誰向誰出價」反轉過來,廣泛用於採購以壓低成本。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Inversion of control",
              "zh": "控制反轉"
            },
            "body": {
              "en": "In classic procedural code your program calls into a library; with inversion of control the framework holds the main loop and calls your code back at the right moments (\"don't call us, we'll call you\"). Reversing who is in charge of the flow lets frameworks manage the plumbing while you supply only the specifics.",
              "zh": "在傳統程序式程式裡,是你的程式去呼叫函式庫;而在控制反轉中,是框架掌握主迴圈,在適當時機回呼你的程式(「別打給我們,我們會打給你」)。把「誰主導流程」反轉過來,讓框架處理繁瑣的底層,你只需提供具體細節。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Inversion_of_control"
          },
          {
            "domain": "software",
            "title": {
              "en": "Webhooks instead of polling",
              "zh": "以網路鉤子取代輪詢"
            },
            "body": {
              "en": "Rather than a client repeatedly asking a server \"is it ready yet?\", a webhook reverses the direction so the server calls the client back the moment an event occurs. Inverting who initiates the contact removes wasted polling and delivers updates instantly.",
              "zh": "與其讓用戶端反覆問伺服器「好了沒?」,網路鉤子(webhook)把方向反轉,讓伺服器在事件一發生時就回呼用戶端。把「由誰發起聯繫」反轉過來,消除了無謂的輪詢,並能即時送達更新。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Diffusion models",
              "zh": "擴散模型"
            },
            "body": {
              "en": "A diffusion model is trained on a forward process that gradually adds noise to an image until it is pure static, then generates by learning to run that process in reverse, denoising from noise back to a picture. Generation is literally the corruption process done the other way round.",
              "zh": "擴散模型先在一個「前向過程」上訓練:逐步對影像加入雜訊,直到變成純粹的雪花;生成時再學著把這個過程反過來跑,從雜訊一路去噪回到一張圖。所謂生成,其實就是把破壞的過程反向操作。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Diffusion_model"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Backpropagation",
              "zh": "反向傳播"
            },
            "body": {
              "en": "A neural network makes predictions by passing data forward through its layers; backpropagation trains it by sending the error signal in the opposite direction, layer by layer, to compute each weight's gradient. Reversing the direction of the pass is what makes efficient learning possible.",
              "zh": "神經網路是把資料前向地一層層傳遞來做預測;反向傳播則反其道而行,把誤差訊號沿相反方向逐層送回,以計算每個權重的梯度。正是把傳遞的方向反轉過來,才讓高效學習成為可能。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Kanban (development)",
            "url": "https://en.wikipedia.org/wiki/Kanban_(development)"
          },
          {
            "label": "Wikipedia — Inversion of control",
            "url": "https://en.wikipedia.org/wiki/Inversion_of_control"
          },
          {
            "label": "Wikipedia — Diffusion model",
            "url": "https://en.wikipedia.org/wiki/Diffusion_model"
          }
        ],
        "group": "system"
      },
      {
        "id": 14,
        "slug": "spheroidality",
        "name": {
          "en": "Spheroidality / Curvature",
          "zh": "曲面化"
        },
        "aliases": {
          "en": [
            "Curvature",
            "Spheroidality-Curvature",
            "Curvilinearity"
          ],
          "zh": [
            "球面化",
            "曲率化",
            "曲線化"
          ]
        },
        "definition": {
          "en": "Replace straight lines and flat surfaces with curves, and cubes with spheres; use rollers, balls, and spirals; and move from linear to rotary motion. Curved and rounded forms distribute stress, reduce friction, and let motion continue smoothly.",
          "zh": "用曲線取代直線、用曲面取代平面,用球體取代方塊;採用滾子、滾珠與螺旋;並把直線運動改為旋轉運動。彎曲與圓潤的形狀能分散應力、降低摩擦,並讓運動平順地持續下去。"
        },
        "subPrinciples": [
          {
            "en": "Instead of rectilinear parts, surfaces, or forms, use curvilinear ones; move from flat surfaces to spherical ones, from cubes to balls.",
            "zh": "不用直線的零件、表面或形狀,改用曲線的;從平面走向球面,從方塊走向球體。"
          },
          {
            "en": "Use rollers, balls, spirals, and domes.",
            "zh": "使用滾子、滾珠、螺旋與穹頂。"
          },
          {
            "en": "Go from linear to rotary motion; make use of centrifugal force.",
            "zh": "把直線運動改為旋轉運動;善用離心力。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "The arch and the dome",
              "zh": "拱與穹頂"
            },
            "body": {
              "en": "Roman builders replaced the flat stone lintel, which cracks under its own span, with the arch and the dome, whose curvature channels weight into compression along the curve. The rounded form let them span far wider openings and enclose great halls like the Pantheon.",
              "zh": "羅馬工匠用拱與穹頂取代會因跨距而斷裂的平直石過樑,靠曲率把重量沿著弧線導引成壓應力。這種圓弧形狀讓他們得以跨越寬得多的開口,並罩住像萬神殿那樣的大廳。"
            },
            "sourceUrl": "https://sixsigmastudyguide.com/theory-of-inventive-problem-solving-triz/"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Ball and roller bearings",
              "zh": "滾珠與滾子軸承"
            },
            "body": {
              "en": "A plain sliding surface wastes energy to friction; a bearing inserts hardened balls or rollers so the surfaces roll over one another instead of dragging. Substituting curved rolling elements for flat sliding contact is a direct application of curvature.",
              "zh": "單純的滑動面會把能量浪費在摩擦上;軸承則置入淬硬的滾珠或滾子,讓表面彼此滾動而不是拖曳。用曲面的滾動元件取代平面的滑動接觸,正是曲面化的直接應用。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Helical and spiral gears",
              "zh": "斜齒輪與螺旋齒輪"
            },
            "body": {
              "en": "Straight-cut spur gears engage one whole tooth at a time and clatter; helical gears wind the teeth along a curve so contact rolls on gradually and quietly. Curving the tooth line spreads the load and smooths the transmission of motion.",
              "zh": "直齒的正齒輪一次整齒嚙合,會發出撞擊聲;斜齒輪則讓齒沿著曲線盤繞,使接觸漸進地滾入、運轉安靜。把齒線彎成曲線能分散負載,並讓運動的傳遞更平順。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "The ball-point pen",
              "zh": "原子筆"
            },
            "body": {
              "en": "A ball-point pen writes by rolling a tiny hardened sphere in its socket, which picks up ink on one side and lays it down on the paper on the other. The rolling ball replaces the scratchy dragging nib with smooth curved motion.",
              "zh": "原子筆書寫時,是讓筆頭裡一顆微小的淬硬球體在座槽中滾動,一側沾起墨水、另一側把墨水抹到紙上。滾動的球體以平順的曲面運動取代了會刮紙、拖曳的筆尖。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "The computer mouse",
              "zh": "電腦滑鼠"
            },
            "body": {
              "en": "Early mice translated hand motion into cursor movement through a rolling ball underneath, and modern optical mice track a curved surface reflection. Either way, converting sliding hand motion into a rolling or rotational readout is what makes pointing feel effortless.",
              "zh": "早期的滑鼠靠底部一顆滾球把手部移動轉換為游標移動,現代光學滑鼠則追蹤曲面的反射光。無論哪一種,把滑動的手部動作轉成滾動或旋轉的讀值,正是讓指向操作毫不費力的關鍵。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "The circular economy",
              "zh": "循環經濟"
            },
            "body": {
              "en": "The traditional economy runs a straight line from take to make to waste; the circular economy bends that line into a loop where products are reused, repaired, and recycled back into supply. Turning a linear flow into a closed curve keeps materials in play instead of discarding them.",
              "zh": "傳統經濟是一條「取用—製造—丟棄」的直線;循環經濟則把這條線彎成一個環,讓產品被再利用、維修,並回收重新進入供給。把線性流程變成封閉的曲線,能讓材料持續運轉,而不是被丟棄。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Ring buffer",
              "zh": "環形緩衝區"
            },
            "body": {
              "en": "A ring buffer takes a fixed-size array and connects its end back to its beginning, so a producer and consumer can keep wrapping around it indefinitely without shifting data. Bending a straight buffer into a circle turns a bounded space into an endless stream.",
              "zh": "環形緩衝區把一段固定大小的陣列首尾相接,讓生產者與消費者能無限地繞著它循環,而不必搬移資料。把一段直線的緩衝區彎成圓形,就把有限的空間變成源源不絕的串流。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Circular_buffer"
          },
          {
            "domain": "software",
            "title": {
              "en": "Consistent hashing ring",
              "zh": "一致性雜湊環"
            },
            "body": {
              "en": "Consistent hashing places both servers and keys on points around a circle, so a key belongs to the next server clockwise. Because the layout is a ring, adding or removing a node only remaps the small arc of keys near it rather than reshuffling everything.",
              "zh": "一致性雜湊把伺服器與鍵都放在一個圓周上的點,讓每個鍵歸屬於順時針方向的下一台伺服器。正因為佈局是一個環,新增或移除節點時只需重新對應它附近那一小段弧上的鍵,而不必把全部重新洗牌。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Consistent_hashing"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Rotary position embeddings (RoPE)",
              "zh": "旋轉位置編碼(RoPE)"
            },
            "body": {
              "en": "RoPE encodes a token's position by rotating pairs of features in the query and key vectors by an angle proportional to the position. Because position is baked in as a rotation, the dot product between two tokens naturally depends on their relative distance.",
              "zh": "RoPE 把 token 的位置編碼進去的方式,是將查詢與鍵向量中成對的特徵旋轉一個與位置成正比的角度。由於位置是以旋轉的形式嵌入的,兩個 token 之間的內積自然就取決於它們的相對距離。"
            },
            "sourceUrl": "https://nn.labml.ai/transformers/rope/index.html"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Embeddings on the unit hypersphere",
              "zh": "單位超球面上的嵌入向量"
            },
            "body": {
              "en": "Many models L2-normalize their embeddings so every vector lies on the surface of a unit hypersphere, which makes cosine similarity the natural measure and lets interpolation follow the sphere with spherical linear interpolation (slerp). Projecting flat vector space onto a curved surface gives geometry that behaves well for similarity.",
              "zh": "許多模型會把嵌入向量做 L2 正規化,讓每個向量都落在單位超球面的表面上,使餘弦相似度成為自然的度量,並讓內插能以球面線性插值(slerp)沿著球面進行。把平直的向量空間投影到彎曲的表面上,能得到對相似度運算表現良好的幾何結構。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Cyclical feature encoding",
              "zh": "週期性特徵編碼"
            },
            "body": {
              "en": "Feeding an hour of day as the number 0 to 23 tells a model that 23:00 and 01:00 are far apart, which is false; encoding the hour as sine and cosine places it on a circle so late night and early morning sit next to each other. Wrapping a linear scale onto a curve captures periodic structure a straight axis cannot.",
              "zh": "把一天中的小時當成 0 到 23 的數字餵給模型,會讓它以為 23:00 與 01:00 相距很遠,這並不正確;改用正弦與餘弦把小時編碼,就等於把它放到一個圓上,讓深夜與清晨彼此相鄰。把線性刻度纏繞到曲線上,能捕捉到直線座標軸無法表達的週期結構。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Six Sigma Study Guide — Theory of Inventive Problem Solving (TRIZ)",
            "url": "https://sixsigmastudyguide.com/theory-of-inventive-problem-solving-triz/"
          },
          {
            "label": "Wikipedia — Circular buffer",
            "url": "https://en.wikipedia.org/wiki/Circular_buffer"
          },
          {
            "label": "Wikipedia — Consistent hashing",
            "url": "https://en.wikipedia.org/wiki/Consistent_hashing"
          },
          {
            "label": "labml.ai — Rotary Positional Embeddings (RoPE)",
            "url": "https://nn.labml.ai/transformers/rope/index.html"
          }
        ],
        "group": "structure"
      },
      {
        "id": 15,
        "slug": "dynamics",
        "name": {
          "en": "Dynamics",
          "zh": "動態化"
        },
        "aliases": {
          "en": [
            "Dynamism",
            "Dynamicity",
            "Make It Adaptive"
          ],
          "zh": [
            "動態性",
            "彈性化",
            "可調化"
          ]
        },
        "definition": {
          "en": "Let the characteristics of an object, its environment, or a process change so they are optimal at every stage instead of fixed at one compromise. Divide a rigid object into parts that can move relative to each other, and make anything inflexible adaptive or self-adjusting.",
          "zh": "讓物體、環境或流程的特性能夠改變,好在每個階段都保持最佳,而不是固定在單一的折衷值上。把僵硬的物體分成能彼此相對移動的部分,並把任何缺乏彈性的東西變成可調適、能自我調整的。"
        },
        "subPrinciples": [
          {
            "en": "Allow the characteristics of an object, environment, or process to change to be optimal at each stage of operation.",
            "zh": "讓物體、環境或流程的特性能夠改變,好在運作的每個階段都達到最佳。"
          },
          {
            "en": "Divide an object into parts capable of moving relative to each other.",
            "zh": "把物體分成能夠彼此相對移動的部分。"
          },
          {
            "en": "If an object or process is rigid or inflexible, make it movable or adaptive.",
            "zh": "如果物體或流程僵硬、缺乏彈性,就把它變成可動或可調適的。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Articulated plate armor",
              "zh": "關節式甲冑"
            },
            "body": {
              "en": "A single rigid breastplate protects the torso but locks the wearer stiff; medieval armorers divided the shell into overlapping plates joined at the joints so a knight could bend, reach, and fight. Splitting a rigid object into parts that move relative to each other turned armor from a cage into a flexible skin.",
              "zh": "一整片僵硬的胸甲雖能護住軀幹,卻把穿戴者鎖得動彈不得;中世紀的甲匠把外殼分成一片片重疊、在關節處相接的甲片,讓騎士能彎腰、伸手、作戰。把僵硬的物體分成能彼此相對移動的部分,就讓盔甲從牢籠變成靈活的外皮。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Variable-geometry swing wing",
              "zh": "可變後掠翼"
            },
            "body": {
              "en": "No single wing shape is best for both slow takeoff and supersonic flight, so swing-wing aircraft sweep their wings forward for lift at low speed and back for low drag at high speed. Letting the wing geometry change keeps it optimal at every stage of the mission.",
              "zh": "沒有任何一種機翼形狀能同時最適合低速起飛與超音速飛行,因此可變後掠翼飛機在低速時把機翼前展以取得升力、在高速時把機翼後掠以降低阻力。讓機翼幾何能夠改變,就能在任務的每個階段都保持最佳。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "The articulated bus",
              "zh": "鉸接式公車"
            },
            "body": {
              "en": "A long rigid bus cannot turn tight city corners, so an articulated bus is split into two sections joined by a flexible pivot that bends as it steers. Dividing the vehicle into parts that move relative to each other gives it both length and maneuverability.",
              "zh": "一輛又長又僵硬的公車無法轉過狹窄的市區彎道,因此鉸接式公車被分成兩節,由一個會隨轉向彎折的柔性樞紐相連。把車輛分成能彼此相對移動的部分,就讓它同時具備長度與靈活的轉向能力。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "The bendy drinking straw",
              "zh": "可彎吸管"
            },
            "body": {
              "en": "A straight straw forces the drinker to line up with the cup; a bendy straw adds a concertina segment so the rigid tube can bend to any angle. Introducing a movable joint into a stiff object lets it adapt to however the cup and mouth are positioned.",
              "zh": "直吸管逼著喝的人得對準杯子;可彎吸管加入一段風琴狀的伸縮節,讓原本僵硬的管子能彎成任意角度。在僵硬的物體中加入一個可動的關節,就讓它能因應杯子與嘴巴的相對位置而調整。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Adjustable ergonomic chair",
              "zh": "可調式人體工學座椅"
            },
            "body": {
              "en": "A fixed chair fits only the average body; an ergonomic office chair lets seat height, back angle, and armrests all move so each person can tune it to their own frame and task. Making a rigid product adjustable lets one object be optimal for many different users.",
              "zh": "一張固定的椅子只合乎平均體型;人體工學辦公椅則讓座高、椅背角度與扶手都能移動,好讓每個人依自己的身形與工作來微調。把僵硬的產品變成可調的,就讓同一件物品能對許多不同使用者都保持最佳。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Dynamic pricing",
              "zh": "動態定價"
            },
            "body": {
              "en": "Instead of one fixed price, ride-hailing surge fares and airline yield management raise prices when demand is high and lower them when it is slack, tracking the market in real time. Letting the price itself vary keeps it optimal for supply and demand at each moment.",
              "zh": "叫車服務的尖峰加價與航空公司的收益管理,不用單一固定價格,而是在需求高時調漲、需求淡時調降,即時追蹤市場。讓價格本身能夠變動,就能在每一個當下都對供需保持最佳。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Dynamic_pricing"
          },
          {
            "domain": "software",
            "title": {
              "en": "Responsive web design",
              "zh": "響應式網頁設計"
            },
            "body": {
              "en": "A fixed-width page breaks on a phone; responsive design lets the same layout fluidly reflow its columns, images, and menus to fit any screen size and orientation. Making the interface adapt to its environment keeps it optimal from a wide monitor down to a handset.",
              "zh": "固定寬度的頁面在手機上會跑版;響應式設計則讓同一套版面能流暢地重排欄位、圖片與選單,以適應任何螢幕尺寸與方向。讓介面依環境調適,就能從寬螢幕一路到手機都保持最佳呈現。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Autoscaling infrastructure",
              "zh": "自動擴縮的基礎架構"
            },
            "body": {
              "en": "Rather than provisioning a fixed fleet sized for peak load, autoscaling adds servers automatically as traffic rises and removes them when it falls. Letting capacity change with demand keeps the system optimal for both cost and performance at every moment.",
              "zh": "自動擴縮不是預先配置一批依尖峰負載定量的伺服器,而是在流量上升時自動增加伺服器、在流量下降時自動移除。讓容量隨需求變動,就能讓系統在每個當下都對成本與效能保持最佳。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Autoscaling"
          },
          {
            "domain": "software",
            "title": {
              "en": "Adaptive bitrate streaming",
              "zh": "自適應位元率串流"
            },
            "body": {
              "en": "Adaptive bitrate streaming detects the viewer's bandwidth, device, and CPU in real time and switches the video to a matching quality level, dropping resolution when the network slows and raising it when it recovers. Letting the stream's characteristics change on the fly keeps playback smooth under shifting conditions.",
              "zh": "自適應位元率串流會即時偵測觀看者的頻寬、裝置與 CPU,並把影片切換到相符的畫質等級:網路變慢時降低解析度、恢復時再調高。讓串流的特性能即時改變,就能在條件不斷變動下維持播放的流暢。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Adaptive learning-rate optimizers",
              "zh": "自適應學習率優化器"
            },
            "body": {
              "en": "A single fixed learning rate is either too large late in training or too small early on; optimizers like Adam adjust the step size per parameter as training proceeds, from the gradients' own history. Letting the learning rate change stage by stage keeps each update near optimal.",
              "zh": "單一固定的學習率,不是在訓練後期太大、就是在前期太小;像 Adam 這類優化器會在訓練過程中,依梯度自身的歷史為每個參數調整步長。讓學習率能隨階段改變,就讓每一次更新都接近最佳。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Mixture-of-Experts routing",
              "zh": "混合專家路由"
            },
            "body": {
              "en": "A dense network runs its whole weight set for every input; a Mixture-of-Experts model uses a gating network to activate only the few experts relevant to each token, so the active sub-network changes input by input. Letting the model reconfigure which parts fire keeps computation optimal for each token.",
              "zh": "稠密網路對每個輸入都動用整組權重;混合專家(MoE)模型則用一個門控網路,只啟動與每個 token 相關的少數幾位專家,使實際運作的子網路隨著輸入逐一改變。讓模型重新配置哪些部分被觸發,就能對每個 token 都保持最佳的運算配置。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Mixture_of_experts"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Attention as dynamic weighting",
              "zh": "作為動態加權的注意力機制"
            },
            "body": {
              "en": "Rather than combining inputs with fixed weights, the attention mechanism computes input-dependent weights on the fly, so the model reweights which tokens matter for each query it processes. Letting the connections themselves change per input is what lets a transformer focus flexibly on the relevant context.",
              "zh": "注意力機制不是用固定權重來組合輸入,而是即時計算依輸入而定的權重,讓模型針對它處理的每個查詢,重新衡量哪些 token 重要。讓連結本身能隨輸入改變,正是 Transformer 得以靈活聚焦於相關脈絡的原因。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Principles list",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Dynamic pricing",
            "url": "https://en.wikipedia.org/wiki/Dynamic_pricing"
          },
          {
            "label": "Wikipedia — Autoscaling",
            "url": "https://en.wikipedia.org/wiki/Autoscaling"
          },
          {
            "label": "Wikipedia — Adaptive bitrate streaming",
            "url": "https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming"
          },
          {
            "label": "Wikipedia — Mixture of experts",
            "url": "https://en.wikipedia.org/wiki/Mixture_of_experts"
          }
        ],
        "group": "process"
      },
      {
        "id": 16,
        "slug": "partial-or-excessive",
        "name": {
          "en": "Partial or Excessive Actions",
          "zh": "部分或過量作用"
        },
        "aliases": {
          "en": [
            "Partial or Overdone Action",
            "Slightly Less or Slightly More"
          ],
          "zh": [
            "部分作用",
            "過度作用"
          ]
        },
        "definition": {
          "en": "If it is hard to achieve exactly 100% of a desired effect with a given method, deliberately do slightly less or slightly more, which often makes the problem far simpler. Any excess is then removed, or the shortfall is corrected afterwards.",
          "zh": "若用某方法很難剛好達成 100% 的目標效果,不妨刻意做得略少或略多,問題往往因此大幅簡化。過量的部分事後移除,不足的部分再行補正。"
        },
        "subPrinciples": [
          {
            "en": "If 100% of an effect is hard to obtain, achieve somewhat less or somewhat more of it to simplify the problem.",
            "zh": "若很難獲得 100% 的效果,就取略少或略多的量,以簡化問題。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Grain measure levelled with a strickle",
              "zh": "用平斗棍刮平的量穀斗"
            },
            "body": {
              "en": "Traditional dry-goods sellers deliberately heaped grain above the rim of a measuring vessel (excess), then swept a straight strickle across the top to shear off the surplus, giving an exact, repeatable measure. Overshooting and trimming to the line is far easier than pouring exactly to the brim.",
              "zh": "傳統量穀時,商販會故意把穀物堆到量斗口以上(過量),再用一根平直的刮棍橫掃斗口,把多出的部分刮除,得到精確又可重複的量。先裝過頭再刮到基準線,遠比一次倒到剛好齊口容易。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Near-net-shape casting then final machining",
              "zh": "近淨成形鑄造後再精加工"
            },
            "body": {
              "en": "Parts are cast or forged slightly oversized, leaving a thin machining allowance (excess material), then only the critical surfaces are cut down to exact tolerance. Removing a small allowance is cheaper and more accurate than casting straight to final dimensions.",
              "zh": "零件先鑄造或鍛造成略大於成品的尺寸,留下一層薄薄的加工餘量(過量材料),再只針對關鍵面切削到精確公差。切除少量餘量,比直接鑄到最終尺寸更便宜也更準確。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Snug-then-torque bolt tightening",
              "zh": "螺栓先預緊再鎖緊"
            },
            "body": {
              "en": "When bolting a flange or flat-pack furniture, every fastener is first only partially tightened so the parts can still shift into alignment, and only then torqued to full spec in sequence. Fully tightening one bolt at a time would lock in misalignment.",
              "zh": "鎖法蘭或組裝板式家具時,先把每根螺栓只鎖到半緊,讓各部件還能微調對位,最後再依序鎖到規定扭力(部分作用)。若一開始就把單一螺栓鎖死,會把歪斜固定下來。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Applying sealant in excess, then smoothing",
              "zh": "矽利康打多了再抹平"
            },
            "body": {
              "en": "You lay down more silicone sealant than the joint needs, then draw a wet finger or tool along it to press it home and wipe away the surplus. Overfilling guarantees no gaps; the excess is simply removed.",
              "zh": "填縫時故意打上比接縫所需更多的矽利康,再用沾濕的手指或刮刀沿線抹壓,同時刮除多餘的膠。打過量能確保沒有縫隙,多的部分事後抹掉即可。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Minimum viable product",
              "zh": "最小可行產品(MVP)"
            },
            "body": {
              "en": "Instead of building 100% of a planned product, a team ships a minimal version with just enough features to be usable, learns from real customers, then expands. Doing deliberately less first avoids large investment in unwanted features. (Term coined 2001; popularized by the Lean Startup movement.)",
              "zh": "團隊不先做出計畫中 100% 的產品,而是先推出功能剛好夠用的最小版本,從真實顧客身上學習,再逐步擴充。刻意先做「少一點」,可避免把大量資源投在沒人要的功能上。(此詞 2001 年提出,經精實創業運動而普及。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Minimum_viable_product"
          },
          {
            "domain": "software",
            "title": {
              "en": "Supersampling anti-aliasing (SSAA)",
              "zh": "超取樣抗鋸齒(SSAA)"
            },
            "body": {
              "en": "To smooth jagged edges, a renderer draws the scene at a much higher resolution than the display (excess pixels), then averages neighbouring samples down to the final image. The extra work is thrown away, but the downsized result is far cleaner than rendering at native size.",
              "zh": "為了消除鋸齒邊緣,繪圖引擎會以遠高於螢幕的解析度繪製畫面(過量的像素),再把相鄰取樣平均縮回到最終影像。多算的部分被丟棄,但縮小後的成品遠比以原生尺寸直接繪製乾淨。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Lossy compression (JPEG)",
              "zh": "有損壓縮(JPEG)"
            },
            "body": {
              "en": "JPEG deliberately keeps less than 100% of the original image data, discarding high-frequency detail the eye barely notices, to shrink files dramatically. Accepting a partial, imperfect reproduction buys an order-of-magnitude size reduction.",
              "zh": "JPEG 刻意只保留不到 100% 的原始影像資料,捨棄人眼幾乎察覺不到的高頻細節,藉此大幅縮小檔案。接受「部分、不完美」的重現,換來數量級的檔案縮減。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Dropout regularization",
              "zh": "Dropout 隨機失活正則化"
            },
            "body": {
              "en": "During each training step a neural network randomly switches off a fraction of its neurons, so the model never uses 100% of its capacity at once. Training on these partial sub-networks forces redundancy and curbs overfitting. (Introduced by Hinton et al., 2012.)",
              "zh": "在每一次訓練步驟中,神經網路會隨機關閉一部分神經元,使模型不會一次用到 100% 的容量。以這些「部分子網路」訓練,能迫使模型建立冗餘、抑制過度擬合。(Hinton 等人於 2012 年提出。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Dilution_(neural_networks)"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Over-parameterize then prune",
              "zh": "先過量參數化再剪枝"
            },
            "body": {
              "en": "A common recipe is to train a network far larger than needed (excess parameters), then prune away the least important weights to reach a small, fast model that keeps most of the accuracy. The surplus capacity helps learning, then is trimmed off.",
              "zh": "常見做法是先訓練一個遠大於實際需求的網路(過量參數),再把最不重要的權重剪除,得到又小又快、卻仍保有大部分準確度的模型。多餘的容量先幫助學習,之後再修剪掉。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network)"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Low-precision quantization",
              "zh": "低精度量化"
            },
            "body": {
              "en": "Rather than running a model at full 32-bit precision, inference often uses 8-bit or 4-bit numbers, deliberately keeping less than 100% numerical fidelity. This cuts memory and compute several-fold while keeping outputs close to the original; a partial reduction in precision yields a large efficiency gain.",
              "zh": "推論時往往不採用完整的 32 位元精度,而改用 8 位元或 4 位元數值,刻意保留不到 100% 的數值精度。這使記憶體與運算量降為數分之一,輸出卻仍接近原模型;精度上「部分」的犧牲,換來效率上的大幅提升。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Minimum viable product",
            "url": "https://en.wikipedia.org/wiki/Minimum_viable_product"
          },
          {
            "label": "Wikipedia — Dilution (dropout, neural networks)",
            "url": "https://en.wikipedia.org/wiki/Dilution_(neural_networks)"
          },
          {
            "label": "Wikipedia — Pruning (artificial neural network)",
            "url": "https://en.wikipedia.org/wiki/Pruning_(artificial_neural_network)"
          }
        ],
        "group": "process"
      },
      {
        "id": 17,
        "slug": "another-dimension",
        "name": {
          "en": "Another Dimension",
          "zh": "移至新維度"
        },
        "aliases": {
          "en": [
            "Transition to Another Dimension",
            "Moving to a New Dimension",
            "Dimensionality Change"
          ],
          "zh": [
            "移到另一維度",
            "維度轉換",
            "多維化"
          ]
        },
        "definition": {
          "en": "Escape the constraints of a single line or plane by using a second or third dimension: move the object in two- or three-dimensional space, stack it in multiple layers, tilt or re-orient it, or use the other side of a surface.",
          "zh": "跳脫單一直線或單一平面的限制,善用第二或第三維度:讓物體在二維或三維中移動、以多層方式堆疊、將其傾斜或改變朝向,或利用表面的另一面。"
        },
        "subPrinciples": [
          {
            "en": "Move the object in two- or three-dimensional space instead of along a single line.",
            "zh": "讓物體在二維或三維空間中移動,而非侷限於一條線。"
          },
          {
            "en": "Use a multi-layer or multi-storey arrangement instead of a single layer.",
            "zh": "採用多層堆疊,取代單層排列。"
          },
          {
            "en": "Tilt or re-orient the object, or lay it on its side.",
            "zh": "把物體傾斜、改變朝向,或側放。"
          },
          {
            "en": "Use the opposite or adjacent side of a given surface.",
            "zh": "利用某一表面的反面或相鄰面。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Terraced (stepped) farming",
              "zh": "梯田耕作"
            },
            "body": {
              "en": "On steep hillsides where flat land is scarce, farmers cut the slope into stacked horizontal terraces, turning a single sloping surface into many usable levels. Rice terraces across Asia have used this vertical, multi-level approach for centuries.",
              "zh": "在平地稀少的陡坡上,農民把山坡開闢成一階階水平的梯田,把單一斜面變成許多可耕作的層次。亞洲各地的水稻梯田,數百年來便運用這種垂直、多層的方式。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Multi-storey car park",
              "zh": "立體停車場"
            },
            "body": {
              "en": "When ground area is limited, cars are parked on stacked floors instead of one flat lot, multiplying capacity by building upward into the vertical dimension.",
              "zh": "當地面面積有限時,汽車被停放在層層堆疊的樓層上,而非攤在單一平面停車場,藉由向上發展的垂直維度使容量倍增。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Multi-level highway interchange",
              "zh": "多層立體交流道"
            },
            "body": {
              "en": "Crossing traffic streams are separated onto stacked ramps and flyovers so vehicles pass over and under one another without stopping. Using the vertical dimension removes the conflict that a flat intersection creates.",
              "zh": "交會的車流被分配到層層疊起的匝道與高架橋上,使車輛彼此上下穿越而不必停等。利用垂直維度,消除了平面路口原本會產生的交會衝突。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Bunk beds",
              "zh": "上下舖床"
            },
            "body": {
              "en": "In a small room, a second sleeping surface is stacked directly above the first, using the vertical dimension to double sleeping capacity within the same floor footprint.",
              "zh": "在狹小的房間裡,把第二個舖位直接疊在第一個之上,利用垂直維度,在相同地板面積內讓睡眠容量加倍。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Foldable smartphone",
              "zh": "摺疊手機"
            },
            "body": {
              "en": "A folding phone uses the third dimension to reconcile two conflicting sizes: unfolded it is a tablet-sized screen, folded it fits a pocket. Bending into the extra dimension lets one device be both big and small. (Samsung Galaxy Fold, 2019.)",
              "zh": "摺疊手機利用第三維度調和兩個互相衝突的尺寸:攤開時是平板大小的大螢幕,摺起後又能放進口袋。透過在額外維度上彎折,讓同一台裝置既大又小。(三星 Galaxy Fold,2019 年。)"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Matrix organization",
              "zh": "矩陣式組織"
            },
            "body": {
              "en": "Instead of a single chain of command, employees report along two dimensions at once, for example a functional manager and a project manager, so one person's expertise can serve several projects. (Emerged in U.S. aerospace in the 1950s.)",
              "zh": "員工不再只隸屬於單一指揮鏈,而是同時沿兩個維度回報,例如同時對職能主管與專案主管負責,使一個人的專業能同時服務多個專案。(源自 1950 年代美國航太業。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Matrix_management"
          },
          {
            "domain": "software",
            "title": {
              "en": "QR code (2-D barcode)",
              "zh": "QR Code(二維條碼)"
            },
            "body": {
              "en": "A one-dimensional barcode stores data along a single line of stripes; a QR code adds a second dimension, encoding data in a grid of squares read both horizontally and vertically, so it holds far more information in the same footprint. (Invented by Denso Wave, 1994.)",
              "zh": "一維條碼只在單一方向的條紋上儲存資料;QR Code 加入第二個維度,把資料編碼在可橫向、縱向同時讀取的方格網格中,因此在相同面積內能容納多出許多倍的資訊。(Denso Wave 於 1994 年發明。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/QR_code"
          },
          {
            "domain": "software",
            "title": {
              "en": "OLAP data cube",
              "zh": "OLAP 資料立方體"
            },
            "body": {
              "en": "Business analytics arranges measures such as sales along multiple dimensions at once (time, product, region), so a query can slice and pivot the same numbers across any combination of axes instead of scanning a single flat table.",
              "zh": "商業分析把銷售額等指標同時沿多個維度排列(時間、產品、地區),使查詢能在任意軸的組合上切片、樞紐同一批數字,而不必掃描單一的平面表格。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Word embeddings",
              "zh": "詞向量嵌入"
            },
            "body": {
              "en": "Word2vec maps each word to a point in a high-dimensional vector space, so meaning becomes geometry: words used in similar contexts sit close together, and relationships appear as directions. Moving language into a many-dimensional space lets machines reason about semantics with vector arithmetic. (Google, 2013.)",
              "zh": "Word2vec 把每個詞映射到高維向量空間中的一個點,使語意化為幾何:語境相近的詞彼此靠近,詞與詞的關係則呈現為方向。把語言搬進多維空間,讓機器能以向量運算來推理語意。(Google,2013 年。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Word2vec"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Neural radiance fields (NeRF)",
              "zh": "神經輻射場(NeRF)"
            },
            "body": {
              "en": "NeRF takes a handful of ordinary 2-D photographs and lifts them into a continuous 3-D representation, learning the colour and density of every point in a volume so the scene can be viewed from angles never photographed. It reconstructs the missing third dimension. (Introduced 2020.)",
              "zh": "NeRF 以少量普通的二維照片為輸入,將其提升為連續的三維表示,學習體積中每一點的顏色與密度,使場景能從未曾拍攝過的角度觀看。它重建了缺失的第三維度。(2020 年提出。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Neural_radiance_field"
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — QR code",
            "url": "https://en.wikipedia.org/wiki/QR_code"
          },
          {
            "label": "Wikipedia — Word2vec",
            "url": "https://en.wikipedia.org/wiki/Word2vec"
          },
          {
            "label": "Wikipedia — Neural radiance field",
            "url": "https://en.wikipedia.org/wiki/Neural_radiance_field"
          }
        ],
        "group": "structure"
      },
      {
        "id": 18,
        "slug": "mechanical-vibration",
        "name": {
          "en": "Mechanical Vibration",
          "zh": "機械振動"
        },
        "aliases": {
          "en": [
            "Vibration",
            "Oscillation"
          ],
          "zh": [
            "振動",
            "震盪"
          ]
        },
        "definition": {
          "en": "Set an object oscillating or vibrating to do useful work. If it already oscillates, raise the frequency (even to ultrasonic) or exploit its resonant frequency, and use piezoelectric or field-driven vibration where mechanical shaking is impractical.",
          "zh": "讓物體振動或震盪以完成有用的工作。若它本就在振動,就提高頻率(甚至到超音波),或利用其共振頻率;在機械式搖動不便時,改用壓電或場驅動的振動。"
        },
        "subPrinciples": [
          {
            "en": "Cause an object to oscillate or vibrate.",
            "zh": "使物體產生振動或震盪。"
          },
          {
            "en": "If oscillation already exists, increase its frequency, even up to ultrasonic.",
            "zh": "若已有振動,提高其頻率,甚至提高到超音波範圍。"
          },
          {
            "en": "Use an object's resonant frequency.",
            "zh": "利用物體的共振頻率。"
          },
          {
            "en": "Replace mechanical vibration with piezoelectric or field-induced oscillation.",
            "zh": "以壓電或場致震盪取代機械振動。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Sieving by shaking",
              "zh": "篩動過篩"
            },
            "body": {
              "en": "To separate fine flour from coarse bran, or gravel by size, people shake a sieve back and forth; the oscillation makes small particles find and drop through the mesh far faster than gravity alone. Hand-shaken sieves are among the oldest grading tools.",
              "zh": "為了把細麵粉與粗麩皮分開,或依大小篩分砂石,人們前後搖動篩子;這種震動使小顆粒比單靠重力更快找到並落過篩孔。手搖篩是最古老的分級工具之一。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Concrete vibrator",
              "zh": "混凝土振動棒"
            },
            "body": {
              "en": "After pouring concrete, an immersion vibrator is inserted to shake the wet mix; the vibration collapses air voids and lets the material flow into every corner of the formwork, producing a dense, strong casting.",
              "zh": "混凝土澆置後,把插入式振動棒伸入濕拌料中震動;振動使氣泡潰散,並讓材料流入模板的每個角落,形成緻密而堅固的成品。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Ultrasonic cleaning bath",
              "zh": "超音波清洗槽"
            },
            "body": {
              "en": "Delicate parts, jewellery, or lab glassware are cleaned by immersing them in liquid driven at ultrasonic frequency; the high-frequency vibration creates tiny collapsing bubbles (cavitation) that scrub surfaces and reach crevices a brush cannot. This is the 'raise the frequency' sub-principle in action.",
              "zh": "精密零件、珠寶或實驗玻璃器皿,可浸入以超音波頻率驅動的液體中清洗;高頻振動產生微小的潰破氣泡(空蝕),能刷洗表面並深入刷子無法觸及的縫隙。這正是「提高頻率」子原則的體現。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Shock-wave lithotripsy",
              "zh": "體外震波碎石"
            },
            "body": {
              "en": "Kidney stones are broken up without surgery by focusing acoustic shock waves through the body onto the stone; the vibrational energy fragments the hard mass into pieces small enough to pass naturally. (First used on kidney stones in 1980.)",
              "zh": "腎結石可不經手術即被擊碎:將聲學震波穿過人體聚焦於結石上,振動能量把堅硬的結石碎裂成足以自然排出的小塊。(1980 年首次用於腎結石。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Lithotripsy"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Sonic electric toothbrush",
              "zh": "音波電動牙刷"
            },
            "body": {
              "en": "A sonic toothbrush vibrates its bristles tens of thousands of times per minute; the high-frequency oscillation both sweeps away plaque and drives fluid between teeth, cleaning better than the slow strokes of a manual brush.",
              "zh": "音波牙刷讓刷毛每分鐘振動數萬次;高頻震動一方面掃除牙菌斑,一方面推動液流進入齒縫,清潔效果勝過手動牙刷緩慢的來回刷動。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "High-frequency trading",
              "zh": "高頻交易"
            },
            "body": {
              "en": "High-frequency trading takes the everyday action of buying and selling and pushes its frequency to the extreme, thousands of orders per second, so tiny per-trade edges accumulate into profit. It is the 'increase the frequency of the action' idea applied to markets.",
              "zh": "高頻交易把「買進賣出」這個日常動作的頻率推到極致,每秒數千筆委託,使每筆微小的價差累積成利潤。這是把「提高作用頻率」的想法套用到市場上。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Dithering",
              "zh": "抖動(Dithering)"
            },
            "body": {
              "en": "Before reducing an image or audio signal to fewer levels, a small, rapidly varying noise (dither) is added; this deliberate high-frequency 'vibration' breaks up visible banding and audible distortion, trading them for a faint, unobtrusive hiss. Adding oscillation improves the quantized result.",
              "zh": "在把影像或音訊訊號降到較少的位階之前,先加入一種微小、快速變動的雜訊(抖動);這種刻意加入的高頻「振動」能打散可見的色帶與可聽的失真,把它們換成幾乎察覺不到的細微噪聲。加入震盪反而改善了量化後的結果。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Chaos Monkey / chaos engineering",
              "zh": "混沌工程(Chaos Monkey)"
            },
            "body": {
              "en": "Netflix's Chaos Monkey randomly kills live production servers to keep 'shaking' the system, forcing engineers to build services that survive constant small failures. The continual perturbation is a deliberate vibration that reveals weak points before real outages do. (Netflix, 2011.)",
              "zh": "Netflix 的 Chaos Monkey 會隨機終止線上正式環境的伺服器,持續「搖晃」系統,迫使工程師打造出能在不斷發生的小故障下存活的服務。這種持續擾動就是一種刻意的振動,能在真正的大當機之前先暴露弱點。(Netflix,2011 年。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Chaos_engineering"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Noise in stochastic gradient descent",
              "zh": "隨機梯度下降中的雜訊"
            },
            "body": {
              "en": "Because SGD estimates the gradient from small random mini-batches, each step carries a jitter; this built-in 'vibration' shakes the optimizer out of sharp, poor minima and helps it settle in flatter, better-generalizing solutions. The noise is not a defect but a useful oscillation.",
              "zh": "由於隨機梯度下降是以小批隨機樣本估計梯度,每一步都帶有抖動;這種內建的「振動」能把最佳化過程從尖銳、不良的極小值中搖出,幫助它落到較平坦、泛化更好的解。這裡的雜訊不是缺陷,而是有用的震盪。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Denoising diffusion models",
              "zh": "去噪擴散模型"
            },
            "body": {
              "en": "Diffusion generative models work by gradually vibrating an image apart with added Gaussian noise, then training a network to reverse that noising step by step; generation starts from pure noise and is denoised into a picture. Controlled noising and de-noising is the engine of models like Stable Diffusion. (DDPM, 2020.)",
              "zh": "擴散生成模型的作法,是先以逐步加入的高斯雜訊把影像「震散」,再訓練網路一步步逆轉這個加噪過程;生成時從純雜訊出發,逐步去噪成一張圖。可控的加噪與去噪,正是 Stable Diffusion 等模型的引擎。(DDPM,2020 年。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Diffusion_model"
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Lithotripsy",
            "url": "https://en.wikipedia.org/wiki/Lithotripsy"
          },
          {
            "label": "Wikipedia — Chaos engineering",
            "url": "https://en.wikipedia.org/wiki/Chaos_engineering"
          },
          {
            "label": "Wikipedia — Diffusion model",
            "url": "https://en.wikipedia.org/wiki/Diffusion_model"
          }
        ],
        "group": "process"
      },
      {
        "id": 19,
        "slug": "periodic-action",
        "name": {
          "en": "Periodic Action",
          "zh": "週期性作用"
        },
        "aliases": {
          "en": [
            "Pulsed Action",
            "Intermittent Action"
          ],
          "zh": [
            "脈動作用",
            "間歇作用"
          ]
        },
        "definition": {
          "en": "Replace a continuous action with a periodic, pulsed one. If the action is already periodic, change its frequency or magnitude, and use the pauses between pulses to carry out an additional useful action.",
          "zh": "以週期性的脈動作用取代連續作用。若作用本已是週期性的,就改變其頻率或幅度;並利用脈衝之間的間歇,執行另一項有用的作用。"
        },
        "subPrinciples": [
          {
            "en": "Replace a continuous action with a periodic (pulsed) one.",
            "zh": "以週期性(脈衝)作用取代連續作用。"
          },
          {
            "en": "If the action is already periodic, change its frequency or magnitude.",
            "zh": "若作用已是週期性的,改變其頻率或幅度。"
          },
          {
            "en": "Use the pauses between impulses to perform an additional action.",
            "zh": "利用脈衝之間的間歇,執行另一項作用。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Pulsatile blood circulation",
              "zh": "脈動式血液循環"
            },
            "body": {
              "en": "Rather than pushing blood as a steady continuous stream, the heart pumps in rhythmic pulses; the diastolic pauses between beats are exactly when the heart's own coronary arteries fill. Evolution uses periodic action, and the gaps do a second job.",
              "zh": "心臟並非以穩定的連續水流推送血液,而是以有節律的脈衝跳動;心跳之間的舒張間歇,正是心臟自身冠狀動脈充血的時機。演化採用了週期性作用,而間歇還兼做了第二件工作。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Four-stroke internal combustion engine",
              "zh": "四行程內燃機"
            },
            "body": {
              "en": "A piston engine does not burn fuel continuously; it fires in discrete power strokes, and the intervening intake, compression and exhaust strokes use the pauses to prepare the next charge. Periodic combustion, with the gaps doing preparatory work.",
              "zh": "活塞引擎並非連續燃燒燃料,而是以一次次分立的動力行程點火,其間的進氣、壓縮與排氣行程則利用間歇為下一次燃燒做準備。週期性的燃燒,間歇也在做前置工作。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Percussion (hammer) drilling",
              "zh": "衝擊式鑽孔"
            },
            "body": {
              "en": "A hammer drill delivers rapid periodic blows along the bit's axis while it rotates; the pulsed impacts shatter hard masonry that steady pressure alone could not penetrate. Turning a continuous push into pulses does the work.",
              "zh": "衝擊鑽在旋轉的同時,沿鑽頭軸向施予快速的週期性敲擊;脈衝式的衝擊能擊碎單靠穩定壓力無法穿透的堅硬磚石。把連續推壓化為脈衝,才能完成工作。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Pulse-width modulation (PWM)",
              "zh": "脈寬調變(PWM)"
            },
            "body": {
              "en": "To dim an LED or set a motor's speed, PWM does not lower the voltage continuously; it switches full power on and off many times a second and varies the on-fraction of each cycle. Average power is controlled purely by the timing of periodic pulses.",
              "zh": "要調暗 LED 或設定馬達轉速,PWM 並非連續地降低電壓,而是每秒把全功率開關數千次,並改變每個週期中「導通」所佔的比例。平均功率完全由週期性脈衝的時序來控制。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Flashing bicycle light",
              "zh": "閃爍自行車燈"
            },
            "body": {
              "en": "A blinking rear light is far more noticeable to drivers than a steady beam of the same power, and the off intervals cut battery drain. Switching from continuous to periodic emission improves both visibility and run time.",
              "zh": "閃爍的尾燈比同樣功率的恆亮燈更容易被駕駛注意到,而熄滅的間歇又能減少電池耗電。從連續發光改為週期性發光,同時提升了辨識度與續航。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Agile sprints",
              "zh": "敏捷衝刺(Sprint)"
            },
            "body": {
              "en": "Scrum replaces open-ended continuous work with fixed-length sprints of one to four weeks, each delivering a usable increment; the review and retrospective in the gap between sprints feed improvements into the next cycle. Periodic cadence, with the pauses used to adjust course.",
              "zh": "Scrum 以一到四週的固定長度衝刺,取代沒有節奏的連續工作,每個衝刺都交付一個可用的增量;衝刺之間的檢視與回顧會議,則把改進意見帶進下一個週期。週期性的節奏,並利用間歇來調整方向。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Scrum_(software_development)"
          },
          {
            "domain": "software",
            "title": {
              "en": "Scheduled batch jobs (cron)",
              "zh": "排程批次工作(cron)"
            },
            "body": {
              "en": "Instead of a program running non-stop to check for work, a scheduler wakes it at fixed intervals (every minute, hour or night) to do its task and then sleep. Periodic execution frees the machine between runs for other work.",
              "zh": "與其讓程式不停運轉來檢查是否有工作,排程器會在固定間隔(每分鐘、每小時或每晚)喚醒它執行任務,然後再休眠。週期性執行讓機器在兩次執行之間能空出來處理其他工作。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Heartbeat messages",
              "zh": "心跳訊息"
            },
            "body": {
              "en": "Distributed systems have each node emit a small periodic 'heartbeat'; if the beats stop arriving, peers conclude the node has failed and react. A steady pulse, rather than continuous monitoring, is enough to detect liveness cheaply.",
              "zh": "分散式系統讓每個節點週期性地送出一個小小的「心跳」;一旦心跳停止到達,其他節點便判定該節點已失效並做出反應。用穩定的脈動,而非連續監控,就足以廉價地偵測存活狀態。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Cyclical learning rates (warm restarts)",
              "zh": "週期性學習率(暖重啟)"
            },
            "body": {
              "en": "Instead of decaying the learning rate once and monotonically, SGDR periodically resets it high and anneals it down again in repeated cycles; each restart lets the optimizer jump out of one basin and explore another, improving results. (Loshchilov & Hutter, 2016.)",
              "zh": "SGDR 不採用一次性、單調的學習率衰減,而是週期性地把學習率重設得較高,再一次次以餘弦方式退火降低;每次重啟都讓最佳化器跳出一個盆地、探索另一個,藉此改善結果。(Loshchilov 與 Hutter,2016 年。)"
            },
            "sourceUrl": "https://arxiv.org/abs/1608.03983"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Federated learning rounds",
              "zh": "聯邦學習的通訊回合"
            },
            "body": {
              "en": "Federated learning trains a shared model in periodic communication rounds: a server sends the current model out, and in the pause before the next round each device trains locally on its own data; only the resulting updates are sent back and aggregated. Periodic sync, with local computation filling the gaps. (Google, 2016–2017.)",
              "zh": "聯邦學習以週期性的通訊回合訓練共享模型:伺服器把當前模型送出,在下一回合之前的間歇裡,各裝置用自己的資料在本地訓練;最後只把訓練得到的更新送回並彙總。週期性同步,間歇則由本地運算填滿。(Google,2016–2017 年。)"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Federated_learning"
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Scrum (software development)",
            "url": "https://en.wikipedia.org/wiki/Scrum_(software_development)"
          },
          {
            "label": "arXiv — SGDR: Stochastic Gradient Descent with Warm Restarts",
            "url": "https://arxiv.org/abs/1608.03983"
          },
          {
            "label": "Wikipedia — Federated learning",
            "url": "https://en.wikipedia.org/wiki/Federated_learning"
          }
        ],
        "group": "process"
      },
      {
        "id": 20,
        "slug": "continuity-of-useful-action",
        "name": {
          "en": "Continuity of Useful Action",
          "zh": "連續有效作用"
        },
        "aliases": {
          "en": [
            "Continuous Useful Action",
            "Continuity of Action"
          ],
          "zh": [
            "連續作用",
            "持續有效作用"
          ]
        },
        "definition": {
          "en": "Carry the useful work on continuously, with every part of the system working at full load all the time; eliminate idle intervals and the dead, non-productive motions between working strokes.",
          "zh": "讓有用的工作持續不斷地進行,系統的每個部件都隨時滿載運轉;消除閒置的空檔,以及各次工作行程之間無生產力的空動作。"
        },
        "subPrinciples": [
          {
            "en": "Carry on work continuously; make all parts of the object work at full load at all times.",
            "zh": "持續不斷地工作;使物體的每個部件隨時都在滿載運轉。"
          },
          {
            "en": "Eliminate idle and intermediate (non-working) motions.",
            "zh": "消除閒置與中間的(非工作)空動作。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Noria (water-lifting wheel)",
              "zh": "水車(諾利亞提水輪)"
            },
            "body": {
              "en": "A noria is a large wheel rimmed with buckets, turned by the river's own current; as it rotates it scoops water at the bottom and empties it into an aqueduct at the top, without pause, for as long as the river flows. Useful work runs continuously with no operator.",
              "zh": "諾利亞是一種邊緣裝滿水斗的大輪,由河水本身的水流帶動;它一邊旋轉,一邊在底部舀水、在頂部把水倒進引水槽,只要河水不停就永不間斷。有用的工作持續運轉,且無須人力操作。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Continuous casting of steel",
              "zh": "鋼的連續鑄造"
            },
            "body": {
              "en": "Instead of pouring steel into separate moulds to make ingots one at a time, continuous casting solidifies molten steel into an unbroken strand that is cut to length as it emerges, running the process without stop-start interruptions and greatly raising yield.",
              "zh": "連續鑄造不再把鋼水逐一倒入分開的鑄模製成鋼錠,而是把熔鋼凝固成一條不間斷的連鑄胚,在其產出時裁切成段,使製程免除停停走走的中斷,大幅提升良率。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Continuous_casting"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Bidirectional printing",
              "zh": "雙向列印"
            },
            "body": {
              "en": "Early printers printed only as the head moved one way, then wasted the return stroke; bidirectional printers print on both passes, eliminating the idle travel so the head is doing useful work in both directions. A classic 'remove the dead motion' case.",
              "zh": "早期印表機只在列印頭朝一個方向移動時列印,回程行程則被浪費掉;雙向列印機在來回兩趟都列印,消除了空跑,使列印頭在兩個方向上都在做有用的工作。這是「消除空動作」的經典案例。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Flywheel energy storage",
              "zh": "飛輪儲能"
            },
            "body": {
              "en": "A flywheel keeps spinning between an engine's power strokes, storing energy during each pulse and releasing it in the gaps, so the shaft delivers smooth, continuous torque instead of a lurching on-off drive.",
              "zh": "飛輪在引擎的動力行程之間持續旋轉,於每次脈衝時儲存能量、在間歇時釋放,使軸輸出平順而連續的扭矩,而非一頓一頓的開關式驅動。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Escalator vs elevator",
              "zh": "電扶梯與電梯"
            },
            "body": {
              "en": "An elevator sits idle between trips and carries people only in batches; an escalator's steps move continuously, so it accepts and delivers passengers without waiting. Continuous motion replaces the stop-and-wait cycle.",
              "zh": "電梯在兩趟之間閒置,且只能一批批載人;電扶梯的階梯持續移動,因此能不必等待地隨到隨載、隨到隨送。連續的運動取代了停等的循環。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Follow-the-sun operations",
              "zh": "日不落(接力)作業"
            },
            "body": {
              "en": "Global companies hand work between offices in different time zones at each day's end, so a project or support queue is worked on around the clock instead of pausing overnight. The useful work never stops, even though no individual works continuously.",
              "zh": "跨國公司在每天下班時,把工作交接給不同時區的辦事處,使專案或客服佇列全天候有人處理,而不會在夜間停擺。有用的工作從不停歇,儘管沒有任何一個人是連續工作的。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Continuous integration and delivery (CI/CD)",
              "zh": "持續整合與持續交付(CI/CD)"
            },
            "body": {
              "en": "Rather than integrating and releasing software in large, infrequent batches, CI/CD merges, tests and ships small changes continuously as they are made, keeping the pipeline always flowing and shrinking the idle gap between writing code and running it in production.",
              "zh": "CI/CD 不再把軟體以龐大、稀疏的批次整合與發布,而是在變更產生的當下就持續地合併、測試並出貨小型變更,讓管線隨時保持流動,並縮短「寫完程式」到「上線運行」之間的閒置空檔。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Stream processing",
              "zh": "串流處理"
            },
            "body": {
              "en": "Batch systems accumulate data and process it in periodic dumps, leaving results stale between runs; stream processors such as Kafka or Flink consume and compute over events continuously as they arrive, keeping outputs always up to date. Continuous flow replaces the idle wait of batching.",
              "zh": "批次系統把資料累積起來,以週期性的方式一次處理,兩次執行之間結果都是過期的;Kafka、Flink 等串流處理器則在事件抵達的當下就持續消費並運算,使輸出隨時保持最新。連續流動取代了批次處理的閒置等待。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Continuous batching in LLM serving",
              "zh": "大型語言模型服務的連續批次處理"
            },
            "body": {
              "en": "Naive LLM serving waits for a whole batch of requests to finish before starting the next, leaving the GPU idle whenever some replies are shorter. Continuous batching (as in vLLM) slots new requests into the running batch the moment a slot frees, keeping the accelerator at full load. Eliminating idle GPU time is the core idea.",
              "zh": "樸素的大型語言模型服務會等一整批請求全部完成才開始下一批,只要有些回覆較短,GPU 就會空等。連續批次處理(如 vLLM)在有空位騰出的當下,就把新請求插進正在運行的批次,使加速器維持滿載。消除 GPU 的閒置時間,正是其核心思想。"
            },
            "sourceUrl": "https://docs.vllm.ai/en/latest/"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Online (continual) learning",
              "zh": "線上(持續)學習"
            },
            "body": {
              "en": "Instead of retraining a model in occasional large batches, online learning updates it continuously from a stream of incoming data, so the model keeps improving in step with the world rather than going stale between periodic retrains.",
              "zh": "線上學習不採用偶爾一次的大批次重新訓練,而是從持續湧入的資料流中不斷更新模型,使模型與外在世界同步地持續改進,而非在兩次週期性重訓之間逐漸過時。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles with examples",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "triz.org — The 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "Wikipedia — Continuous casting",
            "url": "https://en.wikipedia.org/wiki/Continuous_casting"
          },
          {
            "label": "vLLM documentation — continuous batching & PagedAttention",
            "url": "https://docs.vllm.ai/en/latest/"
          }
        ],
        "group": "process"
      },
      {
        "id": 21,
        "slug": "skipping",
        "name": {
          "en": "Skipping",
          "zh": "快速作業"
        },
        "aliases": {
          "en": [
            "Rushing Through",
            "Hurrying",
            "High-speed Execution"
          ],
          "zh": [
            "快速通過",
            "衝過",
            "高速執行"
          ]
        },
        "definition": {
          "en": "Carry out a harmful, dangerous, or costly operation at very high speed so that the damaging effect has no time to develop or spread. If a process must pass through a harmful stage, rush through it instead of dwelling in it.",
          "zh": "以極高的速度執行有害、危險或高成本的操作,讓破壞性效應來不及發生或擴散。若流程必須經過某個有害階段,就快速衝過去,而不是停留其中。"
        },
        "subPrinciples": [
          {
            "en": "Conduct a process, or certain stages of it (especially destructible, harmful, or hazardous operations), at high speed.",
            "zh": "以高速進行某個流程或其中某些階段(尤其是具破壞性、有害或危險的操作)。"
          },
          {
            "en": "Pass quickly through a harmful intermediate state so its damaging effects have no time to accumulate.",
            "zh": "快速通過某個有害的中間狀態,讓其破壞效應來不及累積。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Quenching steel in traditional smithing",
              "zh": "傳統鍛造中的鋼材淬火"
            },
            "body": {
              "en": "A smith plunges red-hot steel into water to cool it almost instantly. The metal is rushed through the temperature band where soft, weak structures would otherwise form, so it hardens instead. Speed itself is what avoids the unwanted outcome.",
              "zh": "鐵匠把燒紅的鋼材猛然浸入水中,幾乎瞬間冷卻。金屬被快速帶過會生成軟弱組織的溫度區間,因而硬化而非變軟。正是速度本身避免了不想要的結果。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "High-speed dental drill",
              "zh": "高速牙科鑽"
            },
            "body": {
              "en": "A dental drill spins at hundreds of thousands of rpm so it cuts through enamel before frictional heat can build up and reach the sensitive pulp. The harmful side effect (heating the tooth) is outrun by sheer speed.",
              "zh": "牙科鑽以每分鐘數十萬轉高速旋轉,在摩擦熱累積並傳到敏感牙髓之前就切穿琺瑯質。有害的副作用(使牙齒發熱)被純粹的速度甩開。"
            },
            "sourceUrl": "https://www.triz40.com/TRIZ/Principle-21.php"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Drop forging in a single blow",
              "zh": "單擊落錘鍛造"
            },
            "body": {
              "en": "A drop forge shapes a hot billet with one fast, powerful strike of the die. The forming is completed before the workpiece cools or before cracks have time to propagate, so a rapid impact does what slow pressing could not.",
              "zh": "落錘鍛造以模具一次快速而有力的擊打成形熱胚料。成形在工件冷卻、裂紋來得及擴展之前就完成,因此高速衝擊做到了緩慢加壓做不到的事。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Accelerating a rotor through its critical speed",
              "zh": "讓轉子快速通過臨界轉速"
            },
            "body": {
              "en": "A supercritical shaft has a resonant speed at which vibration would grow destructively. Engineers spin the rotor up quickly through that band so the damaging vibration has no time to build before the shaft reaches its stable running speed.",
              "zh": "超臨界軸有一個共振轉速,在該轉速下振動會破壞性地放大。工程師讓轉子快速衝過這個轉速區間,使破壞性振動在軸達到穩定運轉速度前來不及累積。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Flash freezing food",
              "zh": "食物急速冷凍"
            },
            "body": {
              "en": "Individually quick-frozen (IQF) food is chilled so fast that only tiny ice crystals form. Slow freezing lets large crystals grow and rupture cell walls; rushing the freeze avoids that damage and keeps texture intact.",
              "zh": "單體急速冷凍(IQF)食品被極快速地降溫,只形成微小冰晶。緩慢冷凍會讓大冰晶生長並刺破細胞壁;快速冷凍避開了這種破壞,保住了口感。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Pulling off an adhesive bandage fast",
              "zh": "快速撕下 OK 繃"
            },
            "body": {
              "en": "Ripping a bandage off quickly hurts less overall than peeling it slowly. The unavoidable painful action is compressed into a brief instant so the discomfort is over before it can be drawn out.",
              "zh": "快速撕下 OK 繃整體上比慢慢撕更不痛。這個無可避免的疼痛動作被壓縮成短短一瞬,使不適在被拖長之前就結束。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Big-bang system cutover",
              "zh": "大爆炸式系統切換"
            },
            "body": {
              "en": "Instead of running an old and a new ERP system in parallel for months, a company switches everything over in a single fast window such as one weekend. The hazardous transition period, when both systems could disagree, is rushed through and closed quickly.",
              "zh": "與其讓舊系統與新 ERP 系統並行運作數月,企業選擇在單一快速時窗(例如一個週末)一次全面切換。兩套系統可能出現不一致的危險過渡期被快速衝過並迅速收尾。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Minimizing the critical section",
              "zh": "縮短臨界區間"
            },
            "body": {
              "en": "In concurrent code, a thread holds a lock only for the shortest possible span, doing the minimum work while other threads are blocked. Rushing through the mutually exclusive stage keeps the harmful contention brief.",
              "zh": "在並行程式中,執行緒只在最短的時間內持有鎖,在其他執行緒被擋住期間只做最少的工作。快速通過互斥階段,讓有害的競用時間保持極短。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Sub-millisecond stop-the-world GC pauses",
              "zh": "毫秒以下的 stop-the-world 垃圾回收暫停"
            },
            "body": {
              "en": "Modern garbage collectors still need brief \"stop-the-world\" phases, but they make those phases as fast as possible (often under a millisecond). The unavoidable pause is rushed through so it barely affects the running application.",
              "zh": "現代垃圾回收器仍需要短暫的「stop-the-world」階段,但會讓這些階段盡可能快速(常在一毫秒以內)。無可避免的暫停被快速通過,幾乎不影響執行中的應用程式。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Early stopping in model training",
              "zh": "模型訓練中的提前停止"
            },
            "body": {
              "en": "Training is halted as soon as validation error stops improving, so the model never lingers in the overfitting regime. By skipping past the harmful stage of continued training, generalization is preserved.",
              "zh": "一旦驗證誤差不再改善就停止訓練,模型便不會停留在過度擬合的階段。藉由跳過持續訓練這個有害階段,保住了泛化能力。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Speculative decoding for LLM inference",
              "zh": "大型語言模型推論的推測式解碼"
            },
            "body": {
              "en": "A small, fast draft model races ahead proposing several tokens, which the large model then verifies in a single parallel pass. The costly, latency-bound generation stage is rushed through, cutting inference time 2–3x while producing exactly the same output.",
              "zh": "一個小而快的草稿模型搶先提出數個詞元,再由大模型在一次平行運算中驗證。高成本、受延遲限制的生成階段被快速通過,推論時間縮短 2 至 3 倍,而輸出結果完全相同。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Few-step diffusion via consistency models",
              "zh": "以一致性模型實現少步數擴散"
            },
            "body": {
              "en": "A diffusion model that normally needs hundreds of denoising steps is distilled into a consistency model that generates an image in one or a few steps. The slow multi-step process is compressed into a rapid jump from noise to result.",
              "zh": "原本需要數百個去噪步驟的擴散模型,被蒸餾成一致性模型,只用一步或少數幾步就生成影像。緩慢的多步流程被壓縮成從雜訊到結果的快速一躍。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — Principle 21: Skipping",
            "url": "https://www.triz40.com/TRIZ/Principle-21.php"
          },
          {
            "label": "TRIZ.org — 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "The TRIZ Journal — 40 Inventive Business Principles",
            "url": "https://the-trizjournal.com/40-inventive-business-principles-examples/"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          }
        ],
        "group": "process"
      },
      {
        "id": 22,
        "slug": "blessing-in-disguise",
        "name": {
          "en": "Blessing in Disguise",
          "zh": "轉害為利"
        },
        "aliases": {
          "en": [
            "Convert Harm into Benefit",
            "Turn Lemons into Lemonade"
          ],
          "zh": [
            "化害為利",
            "因禍得福"
          ]
        },
        "definition": {
          "en": "Turn a harmful factor or situation into a useful one. Use a harm to achieve a positive effect, combine two harms so they cancel each other, or amplify a harm until it stops being harmful.",
          "zh": "把有害的因素或情境轉化為有用的東西。利用有害因素來達成正面效果、把兩個有害作用結合使其相互抵消,或將有害因素放大到不再有害的程度。"
        },
        "subPrinciples": [
          {
            "en": "Use harmful factors (especially harmful effects of the environment or surroundings) to achieve a positive effect.",
            "zh": "利用有害因素(尤其是環境或周遭的有害效應)來達成正面效果。"
          },
          {
            "en": "Eliminate a harmful action by combining it with another harmful action.",
            "zh": "把一個有害作用與另一個有害作用結合,藉此消除它。"
          },
          {
            "en": "Amplify a harmful factor to such a degree that it is no longer harmful.",
            "zh": "把有害因素放大到某種程度,使它不再有害。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Nile floods depositing fertile silt",
              "zh": "尼羅河氾濫沉積肥沃淤泥"
            },
            "body": {
              "en": "The Nile's annual flood was a destructive event, yet it left behind a layer of nutrient-rich silt that renewed the fields. Ancient Egyptian agriculture turned a recurring hazard into the very foundation of its harvests.",
              "zh": "尼羅河每年的氾濫是破壞性的事件,卻在退去後留下一層富含養分的淤泥,使農田重獲肥力。古埃及農業把一場反覆發生的災害,轉化為收成的根基。"
            }
          },
          {
            "domain": "ancient",
            "title": {
              "en": "Backfire to stop a wildfire",
              "zh": "以逆火阻止野火"
            },
            "body": {
              "en": "Firefighters deliberately set a controlled fire ahead of an advancing wildfire to burn away the fuel in its path. Fire, the very thing they are fighting, is used to defeat fire by combining two harmful burns so the larger one starves.",
              "zh": "消防員在逼近的野火前方刻意點燃受控的火,先燒掉火勢前進路徑上的燃料。他們正在對抗的火,被用來擊敗火——把兩場有害的燃燒結合,讓較大的那場因缺乏燃料而熄滅。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Regenerative braking",
              "zh": "再生煞車"
            },
            "body": {
              "en": "Braking normally throws away a vehicle's kinetic energy as waste heat. Regenerative braking runs the motor as a generator during deceleration, capturing that would-be-wasted energy and storing it back in the battery.",
              "zh": "煞車通常把車輛的動能當作廢熱丟掉。再生煞車在減速時讓馬達當發電機運轉,把原本會浪費掉的能量回收並存回電池。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Regenerative_braking"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Turbocharger driven by exhaust gas",
              "zh": "以廢氣驅動的渦輪增壓器"
            },
            "body": {
              "en": "Exhaust gas is a hot, high-energy waste stream that engines normally dump. A turbocharger routes it through a turbine to compress the intake air, converting a wasteful byproduct into extra engine power.",
              "zh": "廢氣是引擎通常直接排掉的高溫、高能量廢流。渦輪增壓器讓廢氣通過渦輪來壓縮進氣,把浪費掉的副產物轉化為額外的引擎動力。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Turbocharger"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Fermentation of food",
              "zh": "食物發酵"
            },
            "body": {
              "en": "Yogurt, kimchi, cheese, and sourdough all rely on microbial action that, uncontrolled, would simply be spoilage. By steering the harmful process of decay, we get preservation and new flavors instead of rot.",
              "zh": "優格、泡菜、起司與酸種麵包都仰賴微生物作用,而這種作用若失控就只是腐敗。藉由引導腐壞這個有害過程,我們得到的是保存與新風味,而不是腐爛。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "3M Post-it Note from a failed adhesive",
              "zh": "3M 便利貼源自失敗的黏著劑"
            },
            "body": {
              "en": "In 1968 Spencer Silver at 3M accidentally made a weak, reusable adhesive that failed its intended purpose. Rather than discarding the flaw, 3M later paired it with Art Fry's bookmark idea to create the Post-it Note, turning a failure into a signature product.",
              "zh": "1968 年 3M 的 Spencer Silver 意外做出一種黏性弱、可重複撕貼的黏著劑,無法達成原本的用途。3M 並未把這個缺陷丟棄,後來把它與 Art Fry 的書籤點子結合,做出便利貼,把失敗變成招牌產品。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Post-it_note"
          },
          {
            "domain": "software",
            "title": {
              "en": "Chaos engineering (Netflix Chaos Monkey)",
              "zh": "混沌工程(Netflix Chaos Monkey)"
            },
            "body": {
              "en": "Netflix built a tool that deliberately kills random production servers during business hours. The self-inflicted harm forces teams to build systems that survive failure, so a source of outages becomes a driver of resilience.",
              "zh": "Netflix 打造了一個工具,在營業時間內刻意隨機關閉正式環境的伺服器。這種自找的傷害迫使團隊打造能在故障中存活的系統,於是一個造成當機的來源反而成了提升韌性的動力。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Chaos_engineering"
          },
          {
            "domain": "software",
            "title": {
              "en": "Fuzz testing with malformed input",
              "zh": "以畸形輸入進行模糊測試"
            },
            "body": {
              "en": "Fuzzing bombards a program with deliberately malformed and hostile inputs to make it crash. The harmful data is used constructively: every crash it triggers reveals a bug or security hole to fix before an attacker finds it.",
              "zh": "模糊測試用刻意畸形、帶敵意的輸入猛烈轟炸程式,讓它當機。這些有害資料被建設性地運用:它觸發的每一次當機,都揭露一個可在攻擊者發現前修補的漏洞或資安缺口。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Adversarial training",
              "zh": "對抗訓練"
            },
            "body": {
              "en": "Adversarial examples are inputs crafted to fool a model. Adversarial training deliberately feeds these harmful examples in during learning, so the model becomes robust precisely against the attacks that were meant to break it.",
              "zh": "對抗樣本是刻意設計來欺騙模型的輸入。對抗訓練在學習過程中刻意餵入這些有害樣本,使模型正好對那些原本要擊垮它的攻擊產生抵抗力。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Generative adversarial networks (GANs)",
              "zh": "生成對抗網路(GAN)"
            },
            "body": {
              "en": "A GAN pits a generator against a discriminator whose whole job is to expose the generator's fakes. This built-in adversary is a harmful pressure that is harnessed: the competition is exactly what pushes the generator toward realistic output.",
              "zh": "GAN 讓生成器對抗一個判別器,而判別器的任務就是揭穿生成器的假貨。這個內建的對手是一種被駕馭的有害壓力:正是這場競爭把生成器推向逼真的輸出。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Generative_adversarial_network"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Differential privacy noise",
              "zh": "差分隱私雜訊"
            },
            "body": {
              "en": "Adding noise to data normally degrades its accuracy. Differential privacy amplifies that harm on purpose, injecting carefully calibrated noise until individual records can no longer be recovered, turning a defect into a mathematical privacy guarantee.",
              "zh": "在資料中加入雜訊通常會損害其準確度。差分隱私刻意放大這種傷害,注入經過精心校準的雜訊,直到個別紀錄再也無法被還原,把一個缺陷變成數學上的隱私保證。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — Principle 22: Blessing in Disguise",
            "url": "https://www.triz40.com/TRIZ/Principle-22.php"
          },
          {
            "label": "TRIZ.org — 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "The TRIZ Journal — 40 Inventive Business Principles",
            "url": "https://the-trizjournal.com/40-inventive-business-principles-examples/"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          }
        ],
        "group": "system"
      },
      {
        "id": 23,
        "slug": "feedback",
        "name": {
          "en": "Feedback",
          "zh": "回饋"
        },
        "aliases": {
          "en": [
            "Feedback loop",
            "Referring back"
          ],
          "zh": [
            "回饋機制",
            "反饋"
          ]
        },
        "definition": {
          "en": "Introduce feedback: measure the output of a process and feed that information back to regulate it. If feedback already exists, change its magnitude or sensitivity to improve control.",
          "zh": "引入回饋:量測流程的輸出,並把該資訊回饋回去以調節流程。若回饋已經存在,就改變其大小或靈敏度以改善控制。"
        },
        "subPrinciples": [
          {
            "en": "Introduce feedback (referring back, cross-checking) to improve a process or action.",
            "zh": "引入回饋(回頭參照、交叉檢查)以改善流程或作用。"
          },
          {
            "en": "If feedback is already used, change its magnitude or influence.",
            "zh": "若已使用回饋,改變其大小或影響力。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Ktesibios' float-regulator water clock",
              "zh": "克特西比烏斯的浮子調節水鐘"
            },
            "body": {
              "en": "Around 250 BCE Ktesibios built a water clock in which a float senses the water level in a reservoir and adjusts the inflow to keep that level constant. The self-correcting float is one of the earliest known automatic feedback devices.",
              "zh": "約公元前 250 年,克特西比烏斯打造了一具水鐘,其中的浮子感測水槽的水位並調節進水量,以維持水位恆定。這個自我修正的浮子,是已知最早的自動回饋裝置之一。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Watt's centrifugal governor",
              "zh": "瓦特的離心調速器"
            },
            "body": {
              "en": "Spinning flyweights on a steam engine rise as speed increases and, through linkage, close the steam valve. The engine's own output is fed back to throttle its input, holding a steady speed without a human operator.",
              "zh": "蒸汽機上旋轉的飛重會隨轉速上升而張開,並透過連桿關小蒸汽閥。引擎自身的輸出被回饋回去以節制其輸入,無需人為操作就能維持穩定轉速。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Automotive cruise control",
              "zh": "汽車定速巡航"
            },
            "body": {
              "en": "Cruise control continuously measures actual road speed, compares it with the target, and adjusts the throttle to close the gap. On a hill it feeds the growing error back into more throttle to hold the set speed.",
              "zh": "定速巡航持續量測實際車速,與目標值比較,並調整節氣門以縮小差距。上坡時,它把逐漸擴大的誤差回饋成更大的節氣門開度,以維持設定速度。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Home thermostat",
              "zh": "家用恆溫器"
            },
            "body": {
              "en": "A thermostat senses room temperature and switches the heater or air conditioner on and off to hold a setpoint. The measured temperature is fed back as the signal that decides when to act.",
              "zh": "恆溫器感測室溫,並開關暖氣或冷氣以維持設定溫度。量測到的溫度被當作回饋訊號,用來決定何時動作。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Statistical process control",
              "zh": "統計製程管制"
            },
            "body": {
              "en": "On a production line, measurements are plotted on control charts and fed back to operators. When a reading drifts toward the control limits, the feedback prompts an adjustment before defective units are produced.",
              "zh": "在生產線上,量測值被繪製在管制圖上並回饋給操作人員。當讀數漂向管制界限時,回饋會促使人員在生產出不良品之前先做調整。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Lean Startup build-measure-learn loop",
              "zh": "精實創業的建構—量測—學習循環"
            },
            "body": {
              "en": "A startup ships a minimal product, measures how real customers respond, and feeds that evidence back into the next iteration. Each turn of the loop tightens the fit between product and market instead of relying on upfront guesses.",
              "zh": "新創公司先推出最小可行產品,量測真實顧客的反應,再把這些證據回饋到下一次迭代。每一次循環都讓產品與市場更貼合,而不是仰賴事前的猜測。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "TCP congestion control",
              "zh": "TCP 壅塞控制"
            },
            "body": {
              "en": "A TCP sender watches for acknowledgements and packet loss and treats them as feedback about network congestion. It grows the sending window when packets arrive and shrinks it on loss, steering throughput away from collapse.",
              "zh": "TCP 傳送端觀察確認封包與封包遺失,把它們當作網路壅塞的回饋。封包順利抵達時就擴大傳送視窗,遺失時就縮小,讓吞吐量避開崩潰。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/TCP_congestion_control"
          },
          {
            "domain": "software",
            "title": {
              "en": "A/B testing",
              "zh": "A/B 測試"
            },
            "body": {
              "en": "Two versions of a page are shown to different user groups, and their behavior (clicks, conversions) is measured. That behavioral feedback decides which variant ships, replacing opinion with a closed loop of evidence.",
              "zh": "把一個頁面的兩個版本分別呈現給不同的使用者群,並量測他們的行為(點擊、轉換)。這種行為回饋決定哪個版本上線,用一個由證據構成的閉環取代主觀意見。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Backpropagation",
              "zh": "反向傳播"
            },
            "body": {
              "en": "During training, the error between a network's prediction and the correct answer is propagated backward through its layers to adjust the weights. This error feedback is the signal that drives the model to learn.",
              "zh": "訓練時,網路的預測與正確答案之間的誤差會反向傳播穿過各層,以調整權重。這個誤差回饋正是驅動模型學習的訊號。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Reinforcement learning from human feedback (RLHF)",
              "zh": "基於人類回饋的強化學習(RLHF)"
            },
            "body": {
              "en": "Human raters rank a model's responses, and those preferences train a reward model. The reward model then feeds a continuous quality signal back into fine-tuning, steering the language model toward answers people prefer.",
              "zh": "人類評分者對模型的回應進行排序,這些偏好用來訓練一個獎勵模型。獎勵模型再把持續的品質訊號回饋到微調過程,把語言模型導向人們偏好的答案。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Recommendation systems learning from clicks",
              "zh": "從點擊中學習的推薦系統"
            },
            "body": {
              "en": "A recommender shows items and watches which ones users click, watch, or skip. That interaction feedback continuously updates the model's estimate of each user's taste, so recommendations sharpen with every session.",
              "zh": "推薦系統呈現項目,並觀察使用者點擊、觀看或略過哪些。這種互動回饋持續更新模型對每位使用者品味的估計,使推薦隨每次使用而愈加精準。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — Principle 23: Feedback",
            "url": "https://www.triz40.com/TRIZ/Principle-23.php"
          },
          {
            "label": "TRIZ.org — 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "The TRIZ Journal — 40 Inventive Business Principles",
            "url": "https://the-trizjournal.com/40-inventive-business-principles-examples/"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          }
        ],
        "group": "system"
      },
      {
        "id": 24,
        "slug": "intermediary",
        "name": {
          "en": "Intermediary",
          "zh": "中介物"
        },
        "aliases": {
          "en": [
            "Mediator",
            "Go-between",
            "Intermediary carrier"
          ],
          "zh": [
            "中介",
            "媒介",
            "中間物"
          ]
        },
        "definition": {
          "en": "Use an intermediary object or process to carry out or transfer an action. Alternatively, temporarily attach the object to another one that can easily be removed afterwards.",
          "zh": "使用中介物或中介流程來執行或傳遞某個作用。或者,把物體暫時與另一個事後容易移除的物體結合。"
        },
        "subPrinciples": [
          {
            "en": "Use an intermediary carrier article or intermediary process.",
            "zh": "使用中介載體或中介流程。"
          },
          {
            "en": "Merge one object temporarily with another that can be easily removed.",
            "zh": "把物體暫時與另一個容易移除的物體結合。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Bees carrying pollen between flowers",
              "zh": "蜜蜂在花朵間傳遞花粉"
            },
            "body": {
              "en": "Flowering plants cannot move to reproduce, so they enlist bees as intermediary carriers. The bee transports pollen from one flower to another, performing the transfer the plants cannot perform themselves.",
              "zh": "開花植物無法移動來繁殖,於是招募蜜蜂作為中介載體。蜜蜂把花粉從一朵花帶到另一朵花,完成植物自己無法完成的傳遞。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Carpenter's nailset",
              "zh": "木工釘沖"
            },
            "body": {
              "en": "A nailset is a small punch placed between the hammer and the nail head. It carries the hammer blow down and lets the carpenter sink the nail below the surface without the hammer face denting the wood.",
              "zh": "釘沖是一支放在鎚子與釘頭之間的小沖具。它把鎚擊傳遞下去,讓木工能把釘子打進表面以下,而鎚面不會壓傷木材。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Catalyst in a chemical reaction",
              "zh": "化學反應中的催化劑"
            },
            "body": {
              "en": "A catalyst provides an intermediate pathway that lets a reaction proceed faster and at lower temperature, then emerges unchanged at the end. It mediates the transformation without being consumed, so it is effectively removed afterwards.",
              "zh": "催化劑提供一條中間途徑,讓反應更快、在更低溫下進行,最後又原封不動地釋出。它中介了轉化過程卻不被消耗,因此等於事後被移除。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Oven mitt or pot holder",
              "zh": "隔熱手套或鍋墊"
            },
            "body": {
              "en": "An oven mitt is an intermediary inserted between the hand and a hot dish. It temporarily takes on the heat load so the cook can carry the pot, then is set aside once the job is done.",
              "zh": "隔熱手套是插在手與熱鍋之間的中介物。它暫時承擔熱負荷,讓人能端起鍋子,任務完成後便放到一旁。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Escrow service in a transaction",
              "zh": "交易中的第三方履約保證"
            },
            "body": {
              "en": "In a large purchase, a neutral escrow agent holds the buyer's money until the seller delivers, then releases it. The intermediary carries the trust that neither party extends to the other, and steps out once the deal closes.",
              "zh": "在大額交易中,中立的履約保證方先保管買方的款項,待賣方交付後再放款。這個中介物承載了雙方彼此不願給予的信任,並在交易完成後退場。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Payment networks between buyer and merchant",
              "zh": "買方與商家之間的支付網路"
            },
            "body": {
              "en": "A card network or payment processor sits between a shopper and a store, authorizing and settling the money. Neither side has to connect to the other's bank directly; the intermediary carries the payment across.",
              "zh": "卡片網路或支付處理商坐落在消費者與商店之間,負責授權與清算款項。雙方都不必直接連上對方的銀行;中介物把款項傳遞過去。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Message broker (Kafka, RabbitMQ)",
              "zh": "訊息代理(Kafka、RabbitMQ)"
            },
            "body": {
              "en": "A message broker sits between producers and consumers, buffering and routing messages. Because services talk to the broker instead of to each other, the intermediary decouples them and lets them run at different speeds.",
              "zh": "訊息代理坐落在生產者與消費者之間,負責緩衝與路由訊息。由於各服務是與代理對話而非彼此直接對話,這個中介物讓它們解耦,並能以不同速度運作。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Reverse proxy / API gateway",
              "zh": "反向代理 / API 閘道"
            },
            "body": {
              "en": "A reverse proxy such as nginx stands between clients and backend services, handling TLS, routing, and load balancing. Clients only ever talk to the intermediary, which shields and distributes work to the servers behind it.",
              "zh": "像 nginx 這樣的反向代理站在用戶端與後端服務之間,處理 TLS、路由與負載平衡。用戶端只與這個中介物對話,由它遮蔽並把工作分派給背後的伺服器。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Retriever in retrieval-augmented generation (RAG)",
              "zh": "檢索增強生成(RAG)中的檢索器"
            },
            "body": {
              "en": "In RAG, a retriever intermediary searches a knowledge base and hands the most relevant passages to the language model as context. The model never touches the raw corpus directly; the retriever mediates between question and knowledge.",
              "zh": "在 RAG 中,檢索器這個中介物搜尋知識庫,把最相關的段落當作情境交給語言模型。模型從不直接接觸原始語料;檢索器在問題與知識之間居中媒介。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Model Context Protocol (MCP)",
              "zh": "模型情境協定(MCP)"
            },
            "body": {
              "en": "MCP, introduced by Anthropic in 2024, is a standardized intermediary layer between AI models and external tools or data. Instead of a custom connector for every model-system pair, each system exposes one MCP server that any compatible model can use.",
              "zh": "MCP 由 Anthropic 於 2024 年推出,是介於 AI 模型與外部工具或資料之間的標準化中介層。不必為每一組「模型—系統」配對寫專屬連接器,每個系統只需提供一個 MCP 伺服器,任何相容的模型都能使用。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Model_Context_Protocol"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Embeddings as a shared representation",
              "zh": "作為共用表徵的嵌入向量"
            },
            "body": {
              "en": "Text, images, and audio are mapped into a common vector space of embeddings. That shared representation is the intermediary through which otherwise-incomparable items can be searched, matched, and ranked by distance.",
              "zh": "文字、影像與音訊被映射到一個共用的嵌入向量空間。這個共用表徵就是中介物,讓原本無法互相比較的項目,得以透過距離來搜尋、配對與排序。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — Principle 24: Intermediary",
            "url": "https://www.triz40.com/TRIZ/Principle-24.php"
          },
          {
            "label": "TRIZ.org — 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "The TRIZ Journal — 40 Inventive Business Principles",
            "url": "https://the-trizjournal.com/40-inventive-business-principles-examples/"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          }
        ],
        "group": "system"
      },
      {
        "id": 25,
        "slug": "self-service",
        "name": {
          "en": "Self-service",
          "zh": "自我服務"
        },
        "aliases": {
          "en": [
            "Self-servicing",
            "Self-maintenance"
          ],
          "zh": [
            "自助",
            "自我維護"
          ]
        },
        "definition": {
          "en": "Make an object serve itself by carrying out its own auxiliary and maintenance functions. In parallel, make use of waste resources, energy, or materials that would otherwise be discarded.",
          "zh": "讓物體透過執行自身的輔助與維護功能來服務自己。同時,善用原本會被丟棄的廢棄資源、能量或物質。"
        },
        "subPrinciples": [
          {
            "en": "Make an object serve itself by performing auxiliary and repair functions.",
            "zh": "讓物體透過執行輔助與維修功能來服務自己。"
          },
          {
            "en": "Use waste resources, energy, or substances.",
            "zh": "利用廢棄的資源、能量或物質。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Manure and composting as fertilizer",
              "zh": "以糞肥與堆肥作肥料"
            },
            "body": {
              "en": "Traditional farms returned animal manure and crop residue to the fields to feed the next season's crop. The farm serves itself by turning its own waste stream into the fertilizer it needs, closing the loop.",
              "zh": "傳統農場把動物糞便與作物殘渣還回田裡,滋養下一季的作物。農場藉由把自身的廢棄物流轉化為所需的肥料來服務自己,形成一個閉環。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Halogen lamp regenerative cycle",
              "zh": "鹵素燈的再生循環"
            },
            "body": {
              "en": "In a halogen bulb, tungsten that evaporates from the hot filament combines with halogen gas and is redeposited back onto the filament. The lamp repairs its own filament as it burns, extending its life without any external service.",
              "zh": "在鹵素燈泡中,從高溫燈絲蒸發出的鎢與鹵素氣體結合,再重新沉積回燈絲上。燈泡在點亮的同時修復自己的燈絲,無需任何外部維護就延長了壽命。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Self-lubricating bearings",
              "zh": "自潤軸承"
            },
            "body": {
              "en": "An oil-impregnated bronze bearing stores lubricant in its porous structure. As it warms and rotates, it releases just enough oil to lubricate itself, so the bearing services its own maintenance needs.",
              "zh": "含油青銅軸承把潤滑劑儲存在其多孔結構中。當它升溫並轉動時,會釋出剛好足夠的油來潤滑自己,因此軸承自行滿足了維護需求。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Robot vacuum returning to its dock",
              "zh": "自動回充的掃地機器人"
            },
            "body": {
              "en": "A robot vacuum cleans the floor and then, when low on charge, navigates itself back to its base to recharge (and on newer models, empties its own bin). It performs its own housekeeping between jobs.",
              "zh": "掃地機器人清潔地板,電量偏低時會自行導航回到基座充電(較新機型還會自動清空集塵盒)。它在兩次工作之間自行處理自己的後勤。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Self-cleaning pyrolytic oven",
              "zh": "自我清潔的高溫裂解烤箱"
            },
            "body": {
              "en": "A pyrolytic oven runs a cycle that heats itself to around 500°C, burning baked-on food residue down to ash that can be wiped away. The oven uses its own core capability, heat, to clean itself.",
              "zh": "高溫裂解烤箱會執行一段將自身加熱到約攝氏 500 度的循環,把烤焦附著的食物殘渣燒成可擦掉的灰燼。烤箱用自身的核心能力——熱——來清潔自己。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "IKEA flat-pack self-assembly",
              "zh": "IKEA 平整包裝自行組裝"
            },
            "body": {
              "en": "IKEA ships furniture flat and has the customer transport and assemble it. By handing part of the service to the buyer, the model cuts shipping and labor cost, letting the product effectively help produce itself.",
              "zh": "IKEA 以平整包裝出貨家具,由顧客自行運送與組裝。藉由把一部分服務交給買家,這套模式降低了運輸與人力成本,讓產品實際上參與了自己的生產。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Automatic garbage collection",
              "zh": "自動垃圾回收"
            },
            "body": {
              "en": "A managed runtime tracks which objects are no longer reachable and reclaims their memory on its own. The program services its own memory hygiene, sparing the developer from manual allocation and freeing.",
              "zh": "受管理的執行環境會追蹤哪些物件已無法被存取,並自行回收其記憶體。程式自行處理記憶體的整理工作,讓開發者免於手動配置與釋放。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Kubernetes self-healing",
              "zh": "Kubernetes 自我修復"
            },
            "body": {
              "en": "Kubernetes constantly compares the running state against the desired state, and when a container crashes it restarts or reschedules it automatically. The cluster repairs itself without an operator paging in.",
              "zh": "Kubernetes 持續比對執行狀態與期望狀態,當容器崩潰時會自動重啟或重新排程。叢集自行修復,無需人員被呼叫進來處理。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "reCAPTCHA harnessing users' spare effort",
              "zh": "reCAPTCHA 善用使用者的餘力"
            },
            "body": {
              "en": "reCAPTCHA asked users solving a human-verification test to transcribe a word that OCR had failed to read on a scanned book. The system used a waste resource, the effort people already spent proving they were human, to digitize archives for free.",
              "zh": "reCAPTCHA 讓通過人類驗證測試的使用者順便辨識一個 OCR 無法讀出的掃描書籍字詞。系統利用了一種廢棄資源——人們本來就花在證明自己是人的心力——免費地把檔案數位化。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/ReCAPTCHA"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Self-supervised learning",
              "zh": "自監督學習"
            },
            "body": {
              "en": "Self-supervised learning generates its own labels from unlabeled data, for example by masking a word and asking the model to predict it. The data supervises itself, so the model learns at scale without human annotation.",
              "zh": "自監督學習從未標註的資料中自行產生標籤,例如遮住一個詞再讓模型預測它。資料自我監督,使模型能在無需人工標註的情況下大規模學習。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Self-supervised_learning"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Self-play in AlphaGo Zero",
              "zh": "AlphaGo Zero 的自我對弈"
            },
            "body": {
              "en": "AlphaGo Zero learned Go by playing millions of games against itself, with no human game records. It generates its own training data as it improves, serving as both its opponent and its teacher.",
              "zh": "AlphaGo Zero 透過與自己對弈數百萬盤來學習圍棋,完全不用人類的棋譜。它在自我精進的同時產生自己的訓練資料,既是自己的對手,也是自己的老師。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/AlphaGo_Zero"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Self-instruct synthetic data",
              "zh": "Self-Instruct 合成資料"
            },
            "body": {
              "en": "A large language model can generate its own instruction-and-response examples, filter them, and then fine-tune on them. The model bootstraps its own training set, reducing dependence on hand-written data.",
              "zh": "大型語言模型可以自行生成指令與回應的範例,篩選後再用它們來微調自己。模型自行引導出自己的訓練集,降低對人工撰寫資料的依賴。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — Principle 25: Self-service",
            "url": "https://www.triz40.com/TRIZ/Principle-25.php"
          },
          {
            "label": "TRIZ.org — 40 Principles",
            "url": "https://triz.org/principles/"
          },
          {
            "label": "The TRIZ Journal — 40 Inventive Business Principles",
            "url": "https://the-trizjournal.com/40-inventive-business-principles-examples/"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          }
        ],
        "group": "system"
      },
      {
        "id": 26,
        "slug": "copying",
        "name": {
          "en": "Copying",
          "zh": "複製"
        },
        "aliases": {
          "en": [
            "Cheap copies",
            "Optical copies"
          ],
          "zh": [
            "拷貝",
            "翻製"
          ]
        },
        "definition": {
          "en": "Instead of using an object that is unavailable, expensive, or fragile, use a simpler and inexpensive copy of it. An object or process can also be replaced by optical copies (images), and if visible copies are already in use, by infrared or ultraviolet ones, so it can be observed, measured, or practised on without touching the original.",
          "zh": "與其動用難以取得、昂貴或脆弱的物體,不如改用它的簡單、廉價複製品。也可以用光學複製(影像)取代物體或流程,若已使用可見光複製,還能進一步改用紅外線或紫外線影像,讓人在不接觸原件的情況下觀察、量測或演練。"
        },
        "subPrinciples": [
          {
            "en": "Instead of an unavailable, expensive, or fragile object, use simpler and inexpensive copies.",
            "zh": "與其使用難以取得、昂貴或易碎的物體,改用更簡單、更便宜的複製品。"
          },
          {
            "en": "Replace an object or process with optical copies.",
            "zh": "用光學複製品(影像)取代物體或流程。"
          },
          {
            "en": "If visible optical copies are already used, move to infrared or ultraviolet copies.",
            "zh": "若已使用可見光複製,進一步改用紅外線或紫外線的複製影像。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Measuring a pyramid by its shadow",
              "zh": "用影子量金字塔"
            },
            "body": {
              "en": "Around 600 BCE Thales found the height of the Great Pyramid not by scaling it but by comparing the length of its shadow with the shadow of a stick of known height. The shadow is a cheap optical copy that stands in for the object that is too large to measure directly.",
              "zh": "約公元前 600 年,泰勒斯不用攀爬金字塔,而是把金字塔影子的長度與一根已知高度木棍的影子相比,推算出塔高。影子是一份廉價的光學複製品,用來代替無法直接量測的龐大原物。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Crash test dummies",
              "zh": "碰撞測試假人"
            },
            "body": {
              "en": "An instrumented anthropomorphic dummy stands in for a real human in vehicle crashes, recording the forces a body would experience. Engineers gather injury data on an expendable copy instead of risking a person.",
              "zh": "裝滿感測器的擬人假人在碰撞測試中代替真人,記錄人體會承受的力量。工程師用一個可耗損的複製品蒐集傷害資料,而不必拿真人冒險。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Crash_test_dummy"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Photogrammetry",
              "zh": "攝影測量"
            },
            "body": {
              "en": "Surveyors and engineers measure buildings, terrain, and parts from overlapping photographs rather than from the physical object. Dimensions are taken off a stack of optical copies, avoiding scaffolding or a shutdown of the real structure.",
              "zh": "測量師與工程師從多張重疊的照片量測建物、地形與零件,而不是直接量測實體。尺寸是從一疊光學複製影像取得,省去搭鷹架或停用實體結構。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Infrared thermography inspection",
              "zh": "紅外線熱影像檢測"
            },
            "body": {
              "en": "Thermal cameras turn a machine's invisible heat pattern into an infrared copy, revealing overheating bearings or loose electrical joints. Following the principle's step from visible to infrared copies, faults are spotted without dismantling or touching live parts.",
              "zh": "熱像儀把機器看不見的熱分佈轉成紅外線影像,揭露過熱的軸承或鬆脫的電氣接點。正如本原則從可見光進一步走向紅外線複製,不需拆解或碰觸帶電部件就能找出故障。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Flight and driving simulators",
              "zh": "飛行與駕駛模擬器"
            },
            "body": {
              "en": "Pilots and drivers rehearse emergencies in a simulator that copies the cockpit and its behaviour. Dangerous or expensive scenarios are practised on a safe copy instead of the real aircraft or vehicle.",
              "zh": "飛行員與駕駛在模擬器中演練緊急狀況,而模擬器複製了駕駛艙及其操作反應。危險或昂貴的情境是在安全的複製品上練習,而不是在真正的飛機或車輛上。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Virtual tours and street view",
              "zh": "虛擬導覽與街景"
            },
            "body": {
              "en": "Street View and VR property walkthroughs let people inspect a place through optical copies instead of travelling there. The image replaces the costly or impractical visit to the original location.",
              "zh": "街景與 VR 賞屋讓人透過光學複製影像查看某個地方,不必親自前往。影像取代了前往原地的高成本或不切實際的行程。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Prototypes and mock-ups",
              "zh": "原型與樣品模型"
            },
            "body": {
              "en": "Product teams test clay models, foam mock-ups, and paper prototypes before committing to tooling. Cheap copies expose flaws and gather feedback long before the expensive real product exists.",
              "zh": "產品團隊在投入開模之前,先測試黏土模型、泡棉樣品與紙上原型。廉價的複製品能在昂貴的實體產品出現之前,就暴露缺陷並蒐集回饋。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Staging environments and read replicas",
              "zh": "預備環境與唯讀複本"
            },
            "body": {
              "en": "Teams test releases on a staging copy of production and serve heavy queries from database read replicas. Risky work and read load hit a copy, keeping the fragile, expensive live system untouched.",
              "zh": "團隊在正式環境的預備複本上測試版本,並用資料庫唯讀複本承接大量查詢。有風險的操作與讀取負載都落在複本上,讓脆弱又昂貴的正式系統維持不受影響。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Hardware emulators",
              "zh": "硬體模擬器"
            },
            "body": {
              "en": "Emulators such as QEMU and console emulators run software on a virtual copy of hardware that may be scarce, obsolete, or costly. The code executes against a software copy of the machine rather than the physical original.",
              "zh": "QEMU 與遊戲主機模擬器等工具,讓軟體在稀少、過時或昂貴硬體的虛擬複本上執行。程式是對著機器的軟體複製品運作,而不是實體原件。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Knowledge distillation",
              "zh": "知識蒸餾"
            },
            "body": {
              "en": "A small student model is trained to copy the soft output distribution of a large teacher model, inheriting much of its skill at a fraction of the size. The cheap copy is deployed where the expensive original is impractical.",
              "zh": "小型學生模型被訓練來複製大型教師模型的軟輸出分佈,以極小的體積繼承教師大部分的能力。當昂貴的原始模型不切實際時,便部署這個廉價的複製品。"
            },
            "sourceUrl": "https://arxiv.org/abs/1503.02531"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Synthetic data and sim-to-real",
              "zh": "合成資料與模擬轉實境"
            },
            "body": {
              "en": "Robots and self-driving systems are trained in physics simulators and on generated synthetic data before meeting the real world. Learning happens on cheap, safe copies of reality instead of costly or dangerous real trials.",
              "zh": "機器人與自駕系統在物理模擬器與生成的合成資料中訓練,之後才面對真實世界。學習發生在廉價、安全的現實複製品上,而不是昂貴或危險的真實試驗。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — The 40 Principles (Copying)",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          },
          {
            "label": "Wikipedia — Crash test dummy",
            "url": "https://en.wikipedia.org/wiki/Crash_test_dummy"
          },
          {
            "label": "Hinton, Vinyals, Dean — Distilling the Knowledge in a Neural Network (2015)",
            "url": "https://arxiv.org/abs/1503.02531"
          }
        ],
        "group": "system"
      },
      {
        "id": 27,
        "slug": "cheap-short-living",
        "name": {
          "en": "Cheap Short-living Objects",
          "zh": "廉價短壽物品"
        },
        "aliases": {
          "en": [
            "Cheap disposables",
            "Disposable objects"
          ],
          "zh": [
            "拋棄式物品",
            "廉價可拋物"
          ]
        },
        "definition": {
          "en": "Replace an expensive, durable object with a set of cheap, short-lived ones, deliberately trading longevity or another quality for lower cost, better hygiene, or convenience. The benefit comes from accepting that each disposable item is used briefly and then discarded.",
          "zh": "用一批廉價、短壽命的物品,取代昂貴、耐久的單一物品,刻意以壽命或其他性質換取更低成本、更好的衛生或便利。效益來自於接受每個可拋物品只短暫使用便丟棄。"
        },
        "subPrinciples": [
          {
            "en": "Replace an expensive object with a multitude of inexpensive objects, forgoing certain qualities such as longevity.",
            "zh": "用大量廉價物品取代昂貴物品,並放棄某些性質(例如耐用度)。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Kulhar disposable clay cups",
              "zh": "印度陶土拋棄杯(Kulhar)"
            },
            "body": {
              "en": "Across South Asia, tea and yoghurt are served in unglazed clay cups that are fired cheaply, used once, and then smashed. The pottery is deliberately disposable, trading durability for hygiene and near-zero cost.",
              "zh": "在南亞,茶與優格盛裝在未上釉的陶土杯裡,燒製成本低廉,用過一次便摔碎。這種陶器刻意設計成可拋棄,以耐用度換取衛生與近乎零的成本。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Kulhar"
          },
          {
            "domain": "ancient",
            "title": {
              "en": "Plants scattering cheap seeds",
              "zh": "植物播撒廉價種子"
            },
            "body": {
              "en": "A dandelion or poplar releases thousands of tiny, short-lived seeds so that a few take root. Nature spends almost nothing per seed and lets the great majority perish, exactly the cheap-and-many trade-off of this principle.",
              "zh": "蒲公英或楊樹釋放成千上萬顆微小、短壽的種子,只求少數能生根。大自然每顆種子幾乎不花成本,任由絕大多數消亡,正是本原則「廉價又大量」的取捨。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Sand-casting moulds",
              "zh": "砂模鑄造"
            },
            "body": {
              "en": "In sand casting a mould is packed from cheap sand, used for a single pour of molten metal, then broken apart to release the part. A disposable mould is far cheaper than a permanent tool for low-volume or complex castings.",
              "zh": "砂模鑄造用便宜的砂子壓出模具,只供一次澆注熔融金屬,之後便打散取出鑄件。對於小量或複雜的鑄件,一次性的砂模遠比永久模具便宜。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Sacrificial anodes and shear pins",
              "zh": "犧牲陽極與剪切銷"
            },
            "body": {
              "en": "A cheap zinc or magnesium anode is bolted to a ship hull or pipeline and left to corrode away so the expensive steel does not; a shear pin is designed to snap and save the gearbox. A small, sacrificial part is spent to protect a costly one.",
              "zh": "把廉價的鋅或鎂陽極鎖在船殼或管線上,任其被腐蝕,以保護昂貴的鋼材;剪切銷則被設計成先斷裂以保住齒輪箱。用一個廉價、可犧牲的小零件,去保護昂貴的部件。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Disposable razors and tableware",
              "zh": "拋棄式刮鬍刀與餐具"
            },
            "body": {
              "en": "Plastic razors, paper cups, and single-use cutlery cost little and are thrown away after one use. Buyers accept a short life in exchange for low price and no cleaning or maintenance.",
              "zh": "塑膠刮鬍刀、紙杯與免洗餐具成本很低,用一次便丟。使用者以短壽命換取低價,以及免去清洗與保養。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Single-use medical supplies",
              "zh": "單次使用醫療耗材"
            },
            "body": {
              "en": "Disposable syringes, needles, gloves, and gowns are used once and discarded to guarantee sterility. The cost of a cheap new item every time is far lower than the risk of cross-infection from reuse.",
              "zh": "拋棄式針筒、針頭、手套與隔離衣用過一次就丟棄,以確保無菌。每次都用一件廉價新品的成本,遠低於重複使用所帶來的交叉感染風險。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Event wristbands and paper tickets",
              "zh": "活動手環與紙票券"
            },
            "body": {
              "en": "Concerts and parks control access with cheap paper wristbands and single-use tickets printed by the thousand. Each token does its one-time job at scale and is thrown away, avoiding the cost of durable passes.",
              "zh": "演唱會與樂園用廉價紙手環與成千上萬張單次票券控管入場。每個票券只做一次性的工作,用完即丟,省去發放耐用通行證的成本。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Serverless functions and ephemeral containers",
              "zh": "無伺服器函式與臨時容器"
            },
            "body": {
              "en": "Serverless platforms spin up a container to handle one request, then destroy it. Cheap, short-lived compute replaces a permanently running server, and you pay only for the brief life of each instance.",
              "zh": "無伺服器平台為了處理一次請求而啟動一個容器,之後便銷毀它。廉價、短命的運算取代了長時間執行的伺服器,而你只需為每個實例的短暫生命付費。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "One-time passwords and short-lived tokens",
              "zh": "一次性密碼與短效權杖"
            },
            "body": {
              "en": "One-time passwords, short-lived session tokens, and rotating TLS keys expire within seconds or minutes by design. A stolen credential is nearly worthless because the cheap, disposable secret has already died.",
              "zh": "一次性密碼、短效的工作階段權杖與輪替的 TLS 金鑰,依設計會在數秒或數分鐘內失效。被竊的憑證幾乎沒有價值,因為那個廉價、可拋的密鑰早已過期。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Preemptible and spot GPU instances",
              "zh": "可搶占與競價 GPU 實例"
            },
            "body": {
              "en": "Training jobs run on preemptible or spot GPUs that the provider can reclaim at any moment, at a fraction of on-demand price. With frequent checkpointing, teams treat the compute as cheap and disposable and simply resume when an instance is killed.",
              "zh": "訓練工作跑在可被雲端隨時收回的可搶占或競價 GPU 上,價格只是隨需計費的一小部分。搭配頻繁的檢查點,團隊把運算當成廉價、可拋的資源,實例被中止時直接續跑。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Ephemeral model deployments",
              "zh": "臨時模型部署"
            },
            "body": {
              "en": "A quantized or distilled model is deployed just for a short campaign or A/B experiment, then torn down. Rather than maintaining one costly permanent endpoint, teams stand up cheap throwaway models sized for a brief task.",
              "zh": "量化或蒸餾後的模型,只為一次短期活動或 A/B 實驗而部署,結束便撤除。團隊不去維護單一昂貴的常駐端點,而是為短暫任務規模化地建立廉價、用完即棄的模型。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — The 40 Principles (Cheap short-living objects)",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — TRIZ",
            "url": "https://en.wikipedia.org/wiki/TRIZ"
          },
          {
            "label": "Wikipedia — Kulhar",
            "url": "https://en.wikipedia.org/wiki/Kulhar"
          }
        ],
        "group": "system"
      },
      {
        "id": 28,
        "slug": "mechanics-substitution",
        "name": {
          "en": "Mechanics Substitution",
          "zh": "機械系統替代"
        },
        "aliases": {
          "en": [
            "Replacement of mechanical system",
            "Use of fields"
          ],
          "zh": [
            "取代機械系統",
            "改用場"
          ]
        },
        "definition": {
          "en": "Replace a mechanical means — contact, moving parts, rigid linkages — with a sensory field (optical, acoustic, smell or taste) or with electric, magnetic, and electromagnetic fields. Fields can be made movable and structured, and combined with field-sensitive particles, to act on an object without a mechanical connection.",
          "zh": "用感官場(光學、聲學、氣味或味覺)或電、磁、電磁場,取代機械式手段——接觸、活動零件與剛性連桿。場可以由靜態變為可動、由無結構變為有結構,並搭配對場敏感的粒子,在沒有機械連接的情況下作用於物體。"
        },
        "subPrinciples": [
          {
            "en": "Replace a mechanical means with a sensory (optical, acoustic, taste or smell) means.",
            "zh": "用感官(光學、聲學、味覺或嗅覺)手段取代機械手段。"
          },
          {
            "en": "Use electric, magnetic and electromagnetic fields to interact with the object.",
            "zh": "用電場、磁場與電磁場與物體互動。"
          },
          {
            "en": "Change from static fields to movable ones, from unstructured fields to structured ones.",
            "zh": "讓場由靜態變為可動、由無結構變為有結構。"
          },
          {
            "en": "Use fields in conjunction with field-activated particles (e.g. ferromagnetic).",
            "zh": "讓場搭配可被場活化的粒子(如鐵磁粒子)一起使用。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "The magnetic compass",
              "zh": "指南針"
            },
            "body": {
              "en": "Early navigators replaced dependence on visible landmarks with a needle that aligns to Earth's magnetic field. A field, not a mechanical marker, tells the traveller which way is north.",
              "zh": "早期航海者不再只依賴看得見的地標,改用會對齊地球磁場的磁針。指引方向的是一個場,而不是機械式的標記。"
            }
          },
          {
            "domain": "ancient",
            "title": {
              "en": "Bat echolocation",
              "zh": "蝙蝠回聲定位"
            },
            "body": {
              "en": "Bats navigate and hunt in darkness by emitting ultrasound and reading the echoes. An acoustic field replaces both touch and ordinary sight to build a picture of the surroundings.",
              "zh": "蝙蝠在黑暗中發出超音波並解讀回聲來導航與捕食。用一個聲學場取代觸覺與一般視覺,建構出周遭的樣貌。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Maglev trains",
              "zh": "磁浮列車"
            },
            "body": {
              "en": "Magnetic levitation suspends and propels the train with magnetic fields instead of wheels rolling on rails. Removing mechanical contact removes rolling friction and wear.",
              "zh": "磁浮以磁場懸浮並推進列車,取代車輪在軌道上滾動。去除機械接觸,也就去除了滾動摩擦與磨耗。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Maglev"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Magnetorheological dampers",
              "zh": "磁流變阻尼器"
            },
            "body": {
              "en": "MR shock absorbers (such as automotive MagneRide) contain ferromagnetic particles in oil; a magnetic field aligns the particles and stiffens the fluid hundreds of times a second. This is a field acting through field-activated particles rather than mechanical valves.",
              "zh": "磁流變避震器(如汽車的 MagneRide)在油中含有鐵磁粒子,磁場讓粒子排列並使流體每秒變硬數百次。這是靠場作用於被場活化的粒子,而非機械閥門。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Magnetorheological_fluid"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Induction heating",
              "zh": "感應加熱"
            },
            "body": {
              "en": "An induction cooktop or furnace heats metal directly with an alternating electromagnetic field, with no flame and no hot mechanical element touching the workpiece. The field does the work a hot plate used to do.",
              "zh": "感應爐或工業感應加熱以交變電磁場直接加熱金屬,沒有火焰,也沒有灼熱的機械元件接觸工件。原本靠加熱板做的工作,改由場來完成。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Gas odorization",
              "zh": "天然氣加臭"
            },
            "body": {
              "en": "Naturally odourless gas has a trace of mercaptan added so a leak is announced by smell. A sensory (smell) signal replaces a mechanical or electronic detector as the first line of warning.",
              "zh": "本身無味的天然氣加入微量硫醇,讓外洩能靠氣味被察覺。用嗅覺這個感官訊號,取代機械或電子偵測器作為第一道警示。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Keyless smart locks",
              "zh": "無鑰匙智慧鎖"
            },
            "body": {
              "en": "RFID cards, phone Bluetooth, and NFC unlock doors through a short-range field instead of a metal key turning tumblers. The mechanical key-and-cylinder pairing is replaced by an electronic field exchange.",
              "zh": "RFID 卡、手機藍牙與 NFC 透過近距離的場開門,取代金屬鑰匙轉動鎖芯。機械式的鑰匙與鎖芯配對,被電子式的場交握取代。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "NFC contactless payment",
              "zh": "NFC 感應支付"
            },
            "body": {
              "en": "Tap-to-pay completes a transaction over a near-field radio link, removing cash handling and the mechanical swipe of a magnetic stripe. A field carries the data that money and moving parts once did.",
              "zh": "感應支付透過近場無線連結完成交易,省去現金處理與磁條的機械刷卡動作。原本靠現金與活動零件傳遞的資訊,改由一個場承載。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Software-defined radio",
              "zh": "軟體定義無線電"
            },
            "body": {
              "en": "Mixers, filters, and modulators once built as fixed analog hardware are implemented in software operating on the signal. Reconfigurable code replaces the mechanical and hardware components of a radio.",
              "zh": "混頻器、濾波器與調變器原本是固定的類比硬體,如今改由對訊號運作的軟體實現。可重新設定的程式,取代了無線電中的機械與硬體元件。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Software-defined_radio"
          },
          {
            "domain": "software",
            "title": {
              "en": "Software-defined networking",
              "zh": "軟體定義網路"
            },
            "body": {
              "en": "SDN moves control of routing and traffic from hand-configured physical switches to a central software control plane. A programmable layer replaces manual reconfiguration of network hardware.",
              "zh": "軟體定義網路把路由與流量的控制,從手動設定的實體交換器,移到集中的軟體控制平面。用可程式化的一層,取代對網路硬體的人工重新設定。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Adaptive beamforming",
              "zh": "自適應波束成形"
            },
            "body": {
              "en": "5G base stations and radar use phased arrays whose algorithms steer a structured electromagnetic beam toward a user, with no antenna physically rotating. This is a movable, structured field under real-time algorithmic control.",
              "zh": "5G 基地台與雷達使用相位陣列,由演算法把有結構的電磁波束導向使用者,天線完全不必實體轉動。這是一個受即時演算法控制、可動且有結構的場。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Computer-vision inspection",
              "zh": "電腦視覺檢測"
            },
            "body": {
              "en": "On production lines, cameras plus machine-learning models replace mechanical gauges, contact probes, and limit switches. An optical field read by a model does the sensing that moving mechanical parts used to do.",
              "zh": "在生產線上,攝影機加上機器學習模型,取代機械量規、接觸式探針與行程開關。由模型解讀的光學場,完成了原本靠活動機械零件做的感測。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — The 40 Principles (Mechanics substitution)",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Maglev",
            "url": "https://en.wikipedia.org/wiki/Maglev"
          },
          {
            "label": "Wikipedia — Magnetorheological fluid",
            "url": "https://en.wikipedia.org/wiki/Magnetorheological_fluid"
          },
          {
            "label": "Wikipedia — Software-defined radio",
            "url": "https://en.wikipedia.org/wiki/Software-defined_radio"
          }
        ],
        "group": "matter"
      },
      {
        "id": 29,
        "slug": "pneumatics-hydraulics",
        "name": {
          "en": "Pneumatics and Hydraulics",
          "zh": "氣壓與液壓"
        },
        "aliases": {
          "en": [
            "Gas and liquid parts",
            "Fluidics"
          ],
          "zh": [
            "流體驅動",
            "氣液系統"
          ]
        },
        "definition": {
          "en": "Use gaseous or liquid parts of an object in place of solid ones — inflatable, liquid-filled, air-cushion, hydrostatic, or hydro-reactive designs. Fluids conform to shape, spread pressure evenly, and transmit force in ways a rigid solid cannot.",
          "zh": "用物體的氣態或液態部件取代固態部件——例如可充氣、注液、氣墊、液靜壓或水反應式的設計。流體能貼合形狀、均勻分散壓力,並以剛性固體做不到的方式傳遞力量。"
        },
        "subPrinciples": [
          {
            "en": "Use gas and liquid parts of an object instead of solid parts (inflatable, filled with liquids, air cushion, hydrostatic, hydro-reactive).",
            "zh": "用氣體與液體部件取代固體部件(如可充氣、注液、氣墊、液靜壓、水反應)。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "The forge bellows",
              "zh": "鍛爐風箱"
            },
            "body": {
              "en": "Ancient smiths raised fire temperature by squeezing an air bag to deliver a controlled blast of air into the coals. A compressible gas part does the work that no solid tool could.",
              "zh": "古代鐵匠靠擠壓風箱,把可控的氣流送進炭火來提高爐溫。一個可壓縮的氣體部件,完成了任何固體工具都做不到的工作。"
            }
          },
          {
            "domain": "ancient",
            "title": {
              "en": "The fish swim bladder",
              "zh": "魚鰾"
            },
            "body": {
              "en": "Bony fish hold their depth using a gas-filled swim bladder that adjusts buoyancy without any muscular effort. Evolution used a gas-filled part instead of a solid ballast to solve the problem of staying level.",
              "zh": "硬骨魚靠充氣的魚鰾調節浮力,不需肌肉出力就能維持深度。演化用一個充氣部件,而非固態壓艙物,解決了保持水中平衡的問題。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Swim_bladder"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Hydraulic force transmission",
              "zh": "液壓傳力"
            },
            "body": {
              "en": "Brakes, presses, and excavator arms use incompressible fluid in cylinders to multiply and route force smoothly. A column of liquid replaces bulky solid levers and gearing.",
              "zh": "煞車、壓床與挖土機手臂,在油缸中用不可壓縮的液體來放大並平順地傳遞力量。一柱液體取代了笨重的固體槓桿與齒輪。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Pneumatic tires and air suspension",
              "zh": "充氣輪胎與空氣懸吊"
            },
            "body": {
              "en": "A cushion of pressurized gas in tires and air springs absorbs road shock and adjusts ride height where a solid wheel or steel spring would be harsh and fixed. The gas part carries the load and softens impacts.",
              "zh": "輪胎與空氣彈簧中一層加壓氣體,吸收路面衝擊並調整車身高度,而實心輪或鋼製彈簧則會又硬又固定。氣體部件承載重量並緩和衝擊。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Hovercraft air cushion",
              "zh": "氣墊船氣墊"
            },
            "body": {
              "en": "A hovercraft rides on a cushion of pressurized air trapped beneath its skirt, replacing wheels or a hull that would drag. The vehicle floats on gas and can cross land, water, and mud alike.",
              "zh": "氣墊船坐在裙圍下方被封住的加壓空氣墊上,取代會拖曳的車輪或船體。整艘船浮在氣體上,能同樣越過陸地、水面與泥灘。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Air- and gel-cushioned products",
              "zh": "氣墊與凝膠緩衝產品"
            },
            "body": {
              "en": "Air-cushioned shoe soles, gel insoles, waterbeds, and bubble wrap all cushion with trapped gas or liquid instead of solid padding. The fluid pocket spreads pressure and moulds to whatever presses on it.",
              "zh": "氣墊鞋底、凝膠鞋墊、水床與氣泡紙,都用封住的氣體或液體緩衝,而非固體填料。流體囊袋分散壓力,並貼合任何壓上來的東西。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Automotive airbags",
              "zh": "汽車安全氣囊"
            },
            "body": {
              "en": "In a crash a gas generator inflates a bag in milliseconds to cushion the occupant, then it deflates. A gas-filled part appears exactly when needed to do what no permanent solid structure could.",
              "zh": "碰撞時,氣體發生器在數毫秒內充飽氣囊以緩衝乘員,隨後洩氣。一個充氣部件在最需要的瞬間出現,完成任何永久固體結構都做不到的事。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Pneumatic tube transport",
              "zh": "氣送管系統"
            },
            "body": {
              "en": "Banks, hospitals, and large stores shoot cash, documents, and lab samples through tubes on a stream of compressed air. Moving fluid carries the payload, replacing couriers and mechanical conveyors over short distances.",
              "zh": "銀行、醫院與大型賣場用一股壓縮空氣,把現金、文件與檢驗樣本在管道中射送。流動的流體承載物件,在短距離內取代人力傳遞與機械輸送帶。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Pneumatic_tube"
          },
          {
            "domain": "software",
            "title": {
              "en": "Message queues as reservoirs",
              "zh": "訊息佇列作為緩衝池"
            },
            "body": {
              "en": "A message queue absorbs bursty traffic and releases it at a steady rate, much like a hydraulic accumulator or air cushion smoothing pressure spikes. The buffer decouples a fast producer from a slower consumer.",
              "zh": "訊息佇列吸收突發流量,再以穩定速率釋出,就像液壓蓄能器或氣墊平滑壓力尖峰。這個緩衝池讓快速的生產者與較慢的消費者解耦。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Backpressure and flow control",
              "zh": "背壓與流量控制"
            },
            "body": {
              "en": "Reactive streams and TCP flow control let a downstream consumer throttle an upstream producer, borrowing directly from fluid dynamics. Regulating the flow prevents buffers from overflowing like an over-pressurized pipe.",
              "zh": "反應式串流與 TCP 流量控制,讓下游消費者節制上游生產者,概念直接借自流體力學。調節流量能避免緩衝區像過壓管線一樣溢出。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Pneumatic soft-robotic grippers",
              "zh": "氣動軟體機器人夾爪"
            },
            "body": {
              "en": "Soft robots grasp fragile or irregular objects with fingers actuated by air pressure and steered by learned control policies. Fluid pressure, not rigid mechanical joints, lets the gripper conform gently to each object.",
              "zh": "軟體機器人用靠氣壓驅動、由學習到的控制策略操控的手指,抓取脆弱或不規則的物體。讓夾爪能溫柔貼合每個物體的是流體壓力,而非剛性機械關節。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Soft_robotics"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Liquid cooling for AI clusters",
              "zh": "AI 叢集的液體冷卻"
            },
            "body": {
              "en": "Dense GPU clusters for training are cooled by circulating liquid or full immersion instead of air over solid heatsinks. A liquid part carries away heat that air and metal fins alone can no longer handle.",
              "zh": "用於訓練的高密度 GPU 叢集,改以循環液體或全浸沒方式冷卻,而非讓空氣吹過固體散熱片。用一個液體部件帶走空氣與金屬鰭片已無法應付的熱量。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — The 40 Principles (Pneumatics and hydraulics)",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Swim bladder",
            "url": "https://en.wikipedia.org/wiki/Swim_bladder"
          },
          {
            "label": "Wikipedia — Pneumatic tube",
            "url": "https://en.wikipedia.org/wiki/Pneumatic_tube"
          },
          {
            "label": "Wikipedia — Soft robotics",
            "url": "https://en.wikipedia.org/wiki/Soft_robotics"
          }
        ],
        "group": "matter"
      },
      {
        "id": 30,
        "slug": "flexible-shells",
        "name": {
          "en": "Flexible Shells and Thin Films",
          "zh": "撓性殼與薄膜"
        },
        "aliases": {
          "en": [
            "Flexible membranes",
            "Thin films"
          ],
          "zh": [
            "柔性薄膜",
            "薄膜與軟殼"
          ]
        },
        "definition": {
          "en": "Use flexible shells and thin films in place of bulky three-dimensional structures, and use them to isolate an object from its surroundings. A thin membrane can enclose, protect, or separate with a small fraction of the material and weight of a solid form.",
          "zh": "用撓性殼與薄膜取代笨重的三維立體結構,並用它們把物體與周遭環境隔離。一層薄膜只需固體形式的一小部分材料與重量,就能包覆、保護或區隔。"
        },
        "subPrinciples": [
          {
            "en": "Use flexible shells and thin films instead of three-dimensional structures.",
            "zh": "用撓性殼與薄膜取代三維立體結構。"
          },
          {
            "en": "Isolate the object from its external environment using flexible shells and thin films.",
            "zh": "用撓性殼與薄膜把物體與外部環境隔離。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "The cell membrane",
              "zh": "細胞膜"
            },
            "body": {
              "en": "Every living cell is wrapped in a thin lipid-bilayer film that separates and protects its interior from the outside world. Evolution isolated life with a flexible membrane rather than a rigid wall.",
              "zh": "每個活細胞都被一層薄薄的脂質雙層膜包裹,把內部與外界區隔並加以保護。演化用一層撓性薄膜,而非剛硬的牆,把生命隔離開來。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Cell_membrane"
          },
          {
            "domain": "ancient",
            "title": {
              "en": "Tents and yurts",
              "zh": "帳篷與蒙古包"
            },
            "body": {
              "en": "A hide or felt skin stretched over a light frame gives shelter without heavy walls, and is among the oldest human dwellings. The flexible shell keeps out weather at a fraction of the material of a solid building.",
              "zh": "把獸皮或毛氈張在輕巧的骨架上,不需厚重的牆就能遮風避雨,是人類最古老的住所之一。這層撓性外殼用固體建築一小部分的材料,就能擋住風雨。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Tensile membrane roofs",
              "zh": "張力薄膜屋頂"
            },
            "body": {
              "en": "Frei Otto's roof for the 1972 Munich Olympic Stadium spans huge areas with pretensioned fabric membranes instead of heavy rigid structure. Thin film in tension does the work of massive beams and slabs.",
              "zh": "弗萊·奧托為 1972 年慕尼黑奧運體育場設計的屋頂,用預張的織物薄膜跨越大面積,取代笨重的剛性結構。受張力的薄膜,完成了粗大樑板才能做的事。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Tensile_structure"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Diaphragm pumps and sensors",
              "zh": "隔膜泵與感測器"
            },
            "body": {
              "en": "A flexing membrane replaces a rigid piston to move fluid in a diaphragm pump or to register pressure in a sensor, while sealing the mechanism from the medium. The thin film both actuates and isolates.",
              "zh": "在隔膜泵中,一片可撓動的膜取代剛性活塞來推送流體;在感測器中則用來偵測壓力,同時把機構與介質隔開。這層薄膜既作動、又隔離。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Cling film and vacuum packaging",
              "zh": "保鮮膜與真空包裝"
            },
            "body": {
              "en": "Cling film, shrink wrap, and vacuum packs seal food in a thin plastic skin that isolates it from air and moisture. A film a fraction of a millimetre thick replaces a rigid container.",
              "zh": "保鮮膜、收縮膜與真空包裝,用一層薄塑膠皮把食物封住,隔絕空氣與水氣。一層不到一毫米厚的薄膜,就取代了硬質容器。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Non-stick and protective coatings",
              "zh": "不沾與保護塗層"
            },
            "body": {
              "en": "A PTFE film on a pan or a screen protector on a phone changes how a surface behaves without adding a bulky part. The thin film isolates the base material and gives it a new property.",
              "zh": "鍋面上的鐵氟龍塗層,或手機上的保護貼,不必加上笨重的部件就改變了表面的行為。薄膜把基材隔離,並賦予它新的性質。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Flexible pouch packaging",
              "zh": "軟袋包裝"
            },
            "body": {
              "en": "Stand-up pouches replace rigid cans, bottles, and boxes for foods, detergents, and refills. A flexible film shell cuts material, weight, and shipping cost while still isolating the product.",
              "zh": "站立軟袋在食品、清潔劑與補充包上取代硬質的罐、瓶與盒。撓性薄膜外殼在仍能隔離產品的同時,減少材料、重量與運輸成本。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Containers and sandboxes",
              "zh": "容器與沙箱"
            },
            "body": {
              "en": "A container wraps an application in a lightweight isolating shell that separates it from the host, without the bulk of a full virtual machine. The thin boundary isolates the process much as a membrane isolates a cell.",
              "zh": "容器用一層輕量的隔離外殼把應用程式包起來,將它與主機區隔,而不需一整套虛擬機的笨重。這層薄邊界隔離程序,就像細胞膜隔離細胞一樣。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Thin clients and browser apps",
              "zh": "精簡客戶端與瀏覽器應用"
            },
            "body": {
              "en": "A thin client or browser app is a lightweight front-end shell, while the heavy computation runs on the server. The bulky local install is replaced by a slim layer that only renders and relays.",
              "zh": "精簡客戶端或瀏覽器應用是一層輕量的前端外殼,繁重的運算則跑在伺服器上。笨重的本機安裝被一層只負責呈現與轉送的薄層取代。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "LoRA and adapter layers",
              "zh": "LoRA 與轉接層"
            },
            "body": {
              "en": "LoRA wraps a large frozen foundation model in thin trainable low-rank layers, adapting it to a task without touching the bulk of its weights. The lightweight film of parameters isolates the change from the underlying model.",
              "zh": "LoRA 在龐大的凍結基礎模型外,包上一層薄薄、可訓練的低秩層,不動用大部分權重就讓模型適配新任務。這層輕量的參數薄膜,把改動與底層模型隔離開來。"
            },
            "sourceUrl": "https://arxiv.org/abs/2106.09685"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Flexible thin-film and e-skin sensors",
              "zh": "撓性薄膜與電子皮膚感測器"
            },
            "body": {
              "en": "Bendable thin-film electronics and electronic skin let AI-driven wearables sense health signals or give prosthetics a sense of touch, conforming to the body. Sensing moves from rigid boards to a flexible film worn like a second skin.",
              "zh": "可彎曲的薄膜電子與電子皮膚,讓 AI 驅動的穿戴裝置偵測健康訊號,或讓義肢具備觸覺,並貼合身體。感測從剛性電路板,轉移到像第二層皮膚般穿戴的撓性薄膜上。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — The 40 Principles (Flexible shells and thin films)",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Cell membrane",
            "url": "https://en.wikipedia.org/wiki/Cell_membrane"
          },
          {
            "label": "Wikipedia — Tensile structure",
            "url": "https://en.wikipedia.org/wiki/Tensile_structure"
          },
          {
            "label": "Hu et al. — LoRA: Low-Rank Adaptation of Large Language Models (2021)",
            "url": "https://arxiv.org/abs/2106.09685"
          }
        ],
        "group": "structure"
      },
      {
        "id": 31,
        "slug": "porous-materials",
        "name": {
          "en": "Porous Materials",
          "zh": "多孔材料"
        },
        "aliases": {
          "en": [
            "Porosity",
            "Use of Porous Materials"
          ],
          "zh": [
            "多孔性",
            "孔隙化"
          ]
        },
        "definition": {
          "en": "Make an object porous, or add porous elements such as inserts and coatings. If the object is already porous, use its pores to hold or deliver a useful substance or function.",
          "zh": "把物體變成多孔的,或加入多孔的嵌件、塗層等元素。如果物體本來就是多孔的,就利用這些孔隙來存放或輸送有用的物質或功能。"
        },
        "subPrinciples": [
          {
            "en": "Make an object porous or add porous elements (inserts, coatings, etc.).",
            "zh": "把物體變成多孔的,或加入多孔的元素(嵌件、塗層等)。"
          },
          {
            "en": "If an object is already porous, use the pores to introduce a useful substance or function.",
            "zh": "如果物體本來就是多孔的,利用這些孔隙引入有用的物質或功能。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Pneumatized bird bones",
              "zh": "鳥類的氣腔骨"
            },
            "body": {
              "en": "Many birds evolved hollow, air-filled bones threaded with internal struts. The porosity strips out weight for flight while the struts preserve strength, exactly the trade-off of making an object porous.",
              "zh": "許多鳥類演化出中空、充氣、內部有支柱交錯的骨骼。這種多孔結構去掉了飛行所需削減的重量,而內部支柱又保住強度,正是把物體變得多孔以減重卻不失功能的取捨。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Lightening holes in structures",
              "zh": "結構件的減重孔"
            },
            "body": {
              "en": "Aircraft ribs, brackets, and racing-car parts are drilled with rows of holes. Removing material where stress is low makes the part porous and lighter without meaningfully weakening it.",
              "zh": "飛機肋板、支架與賽車零件上會鑽出一排排的孔。在受力低的地方挖掉材料,讓零件變得多孔而更輕,又幾乎不損及強度。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Sintered self-lubricating bearings",
              "zh": "燒結自潤軸承"
            },
            "body": {
              "en": "Oilite-type bearings are made of porous sintered bronze whose pores are soaked with oil. The pores draw oil in by capillary action and release it when heat or pressure rises, so the bearing lubricates itself.",
              "zh": "Oilite 這類軸承由多孔燒結青銅製成,孔隙裡吸滿了油。孔隙靠毛細作用把油吸入,受熱或受壓升高時又把油釋出,使軸承能自行潤滑。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Plain_bearing"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Metal-organic frameworks for gas storage",
              "zh": "金屬有機骨架儲氣"
            },
            "body": {
              "en": "Metal-organic frameworks (MOFs) are crystalline solids riddled with nanoscale pores and enormous internal surface area. They store hydrogen, methane, or CO2 by packing gas molecules into those pores, an object made porous specifically to hold a useful substance.",
              "zh": "金屬有機骨架(MOF)是充滿奈米級孔隙、內部表面積極大的結晶固體。它把氫、甲烷或二氧化碳分子塞進這些孔隙中儲存,正是為了容納有用物質而把材料做成多孔的。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Metal%E2%80%93organic_framework"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Gore-Tex breathable membrane",
              "zh": "Gore-Tex 透氣膜"
            },
            "body": {
              "en": "Gore-Tex is expanded PTFE pierced by billions of pores about 0.2 micrometres across. Each pore is far too small for a liquid water droplet yet far larger than a water-vapour molecule, so the porous film keeps rain out while letting sweat escape.",
              "zh": "Gore-Tex 是膨體 PTFE,布滿數十億個約 0.2 微米的孔。每個孔遠小於液態水滴,卻遠大於水蒸氣分子,於是這層多孔薄膜擋得住雨水,又能讓汗氣排出。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Activated carbon filters",
              "zh": "活性碳濾芯"
            },
            "body": {
              "en": "Water and air purifiers use activated carbon, a material processed to have a vast network of tiny pores. Contaminant molecules are trapped inside those pores by adsorption, so the porosity is what does the cleaning.",
              "zh": "淨水與空氣清淨機用的活性碳,是經過處理、內部布滿大量微孔的材料。污染物分子被吸附困在這些孔隙裡,靠的正是這身多孔結構來過濾。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Open innovation",
              "zh": "開放式創新"
            },
            "body": {
              "en": "In open innovation a company deliberately makes its boundary permeable so external ideas, technologies, and routes to market can flow in and out. The firm is treated like a porous body that lets useful knowledge pass through instead of a sealed one.",
              "zh": "開放式創新讓公司刻意把邊界變得可穿透,使外部的點子、技術與通路能雙向流入流出。公司被當成一個多孔的個體,讓有用的知識穿透進來,而不是密不透風。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Open_innovation"
          },
          {
            "domain": "software",
            "title": {
              "en": "Sparse files",
              "zh": "稀疏檔案"
            },
            "body": {
              "en": "A sparse file records long runs of empty bytes as small metadata 'holes' instead of writing real zero blocks to disk. The file is effectively porous, so a 100 GB disk image with 2 GB of real data occupies only about 2 GB.",
              "zh": "稀疏檔案把大段空白位元組記成小小的中繼資料「孔洞」,而不是真的把零區塊寫到磁碟。檔案因此變得多孔:一個 100 GB 的磁碟映像若只有 2 GB 實資料,實際只佔約 2 GB。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Sparse_file"
          },
          {
            "domain": "software",
            "title": {
              "en": "Sparse matrix storage",
              "zh": "稀疏矩陣儲存"
            },
            "body": {
              "en": "Scientific and graph computations store matrices that are mostly zeros in formats like CSR, keeping only the non-zero entries and their positions. Leaving the zeros as implicit 'holes' cuts memory and speeds up the maths.",
              "zh": "科學計算與圖運算會用 CSR 之類的格式儲存幾乎全是零的矩陣,只保留非零元素與其位置。把零當成隱含的「孔洞」略去,既省記憶體又加快運算。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Neural network pruning",
              "zh": "神經網路剪枝"
            },
            "body": {
              "en": "Pruning removes the weights and connections that contribute least, turning a dense network into a sparse, porous one. The model shrinks and runs faster while keeping most of its accuracy, the same weight-for-strength trade-off as drilling holes in metal.",
              "zh": "剪枝會移除貢獻最小的權重與連結,把稠密網路變成稀疏、多孔的網路。模型變小、跑得更快,又保住大部分準確度,和在金屬上鑽孔減重卻保強度是同一種取捨。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Dropout regularization",
              "zh": "Dropout 正則化"
            },
            "body": {
              "en": "During training, dropout randomly switches off a fraction of neurons on each pass, punching temporary holes in the network. Forcing the model to work while porous stops it relying on any single unit and reduces overfitting.",
              "zh": "訓練時 dropout 會在每一次前向傳遞隨機關閉一部分神經元,等於在網路上臨時打洞。逼模型在多孔狀態下運作,使它不依賴任何單一單元,降低過度擬合。"
            }
          }
        ],
        "sources": [
          {
            "label": "triz40.com — 40 Inventive Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php?lang=en"
          },
          {
            "label": "Wikipedia — Plain bearing (sintered/Oilite)",
            "url": "https://en.wikipedia.org/wiki/Plain_bearing"
          },
          {
            "label": "Wikipedia — Metal-organic framework",
            "url": "https://en.wikipedia.org/wiki/Metal%E2%80%93organic_framework"
          },
          {
            "label": "Wikipedia — Sparse file",
            "url": "https://en.wikipedia.org/wiki/Sparse_file"
          },
          {
            "label": "Wikipedia — Open innovation",
            "url": "https://en.wikipedia.org/wiki/Open_innovation"
          }
        ],
        "group": "structure"
      },
      {
        "id": 32,
        "slug": "color-changes",
        "name": {
          "en": "Color Changes",
          "zh": "改變顏色"
        },
        "aliases": {
          "en": [
            "Changing the Color",
            "Optical Property Changes"
          ],
          "zh": [
            "顏色改變",
            "變色"
          ]
        },
        "definition": {
          "en": "Change the color or the transparency of an object or its surroundings. To make things that are hard to see observable, add colored or luminescent markers, and use tracers to follow processes.",
          "zh": "改變物體或其周圍環境的顏色或透明度。為了讓難以看見的東西變得可觀察,加入有色或發光的標記,並用示蹤劑追蹤過程。"
        },
        "subPrinciples": [
          {
            "en": "Change the color of an object or its surroundings.",
            "zh": "改變物體或其周圍環境的顏色。"
          },
          {
            "en": "Change the transparency of an object or its surroundings.",
            "zh": "改變物體或其周圍環境的透明度。"
          },
          {
            "en": "To improve visibility of hard-to-see things, use colored additives or luminescent elements.",
            "zh": "為了讓難以看見的東西更明顯,使用有色添加劑或發光元素。"
          },
          {
            "en": "If such additives are already used, employ luminescent traces or tracer elements.",
            "zh": "如果已經使用這類添加劑,改用發光示蹤劑或標記物來追蹤。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Cephalopod camouflage",
              "zh": "頭足類的偽裝"
            },
            "body": {
              "en": "Octopuses and cuttlefish carry chromatophore organs whose pigment sacs are stretched or relaxed by muscles to change color in an instant. They shift color to blend into the background or signal to others, a natural mastery of changing an object's color.",
              "zh": "章魚與烏賊身上有色素細胞器官,靠肌肉把色囊拉張或放鬆,瞬間改變顏色。牠們藉此融入背景或向同類示意,是自然界改變物體顏色的高手。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Chromatophore"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Temper colors on steel",
              "zh": "鋼的回火色"
            },
            "body": {
              "en": "When a blacksmith reheats hardened steel, a thin oxide layer paints the surface straw, then bronze, then blue as temperature climbs. The color is a built-in readout of temperature, letting the smith judge the temper by eye.",
              "zh": "鐵匠回火淬硬的鋼時,表面會生成一層薄氧化膜,隨溫度升高依序呈現稻草黃、古銅、再到藍色。這顏色就是內建的溫度讀數,讓鐵匠用肉眼判斷回火程度。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Dye penetrant crack inspection",
              "zh": "染料滲透探傷"
            },
            "body": {
              "en": "To find cracks too fine to see, inspectors coat a part with colored or fluorescent penetrant, wipe the surface, then apply a developer that draws the dye back out of any flaw. The crack shows up as a bright colored line, making the invisible visible.",
              "zh": "為了找出肉眼看不到的細裂紋,檢測員在零件上塗有色或螢光滲透液,擦掉表面後再上顯像劑,把滲入缺陷裡的染料吸回表面。裂紋便顯現為一條明亮的彩色線,讓看不見的變得看得見。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Dye_penetrant_inspection"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Photochromic eyeglass lenses",
              "zh": "光致變色眼鏡片"
            },
            "body": {
              "en": "Transitions-type lenses contain molecules that reversibly rearrange under ultraviolet light, darkening outdoors and clearing indoors. The lens changes its own color in response to the surrounding light.",
              "zh": "Transitions 這類鏡片含有能在紫外光下可逆重排的分子,在戶外變深、回到室內變回透明。鏡片會依周遭光線自行改變顏色。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Photochromism"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Thermochromic indicators",
              "zh": "感溫變色指示"
            },
            "body": {
              "en": "Forehead fever strips, color-changing mugs, and 'cold-activated' drink cans use liquid crystals or leuco dyes that switch color at set temperatures. A quantity you cannot see directly, temperature, is turned into an obvious color.",
              "zh": "額溫貼片、變色馬克杯與「冰鎮變色」飲料罐,用的是液晶或 leuco 染料,在特定溫度切換顏色。把一個看不見的量——溫度——變成一眼可見的顏色。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Thermochromism"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Electrochromic smart windows",
              "zh": "電致變色智慧窗"
            },
            "body": {
              "en": "The dimmable cabin windows on the Boeing 787 and electrochromic building glass darken or clear when a small voltage is applied. Here it is the transparency, rather than the hue, that is changed on demand.",
              "zh": "波音 787 客艙的可調光窗與建築用電致變色玻璃,施加小電壓即可變暗或變清。這裡按需改變的是透明度,而不是色調。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Red-amber-green status reporting",
              "zh": "紅黃綠狀態燈號"
            },
            "body": {
              "en": "Project and portfolio dashboards mark each item red, amber, or green for health. Encoding status as color lets a manager scan dozens of items and spot the ones in trouble at a glance.",
              "zh": "專案與投資組合儀表板用紅、黃、綠標示每個項目的健康狀態。把狀態編碼成顏色,讓管理者掃過幾十個項目,一眼看出哪些出了問題。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Syntax highlighting",
              "zh": "語法高亮"
            },
            "body": {
              "en": "Code editors color keywords, strings, comments, and numbers differently. The added color makes the structure of otherwise uniform text visible, so bugs like an unclosed string jump out immediately.",
              "zh": "程式碼編輯器把關鍵字、字串、註解與數字塗上不同顏色。這些顏色讓原本一片均質的文字結構變得可見,像未關閉的字串這類錯誤便立刻跳出來。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Heatmaps and colored diffs",
              "zh": "熱圖與彩色差異比對"
            },
            "body": {
              "en": "Data heatmaps and version-control diffs (green for added lines, red for removed) paint numbers and changes with color. Patterns and edits that would be invisible in a raw table or plain text become obvious.",
              "zh": "資料熱圖與版本控制的差異比對(綠色代表新增、紅色代表刪除)用顏色描繪數值與變動。原本在純表格或純文字裡看不出來的模式與修改,因此變得一目瞭然。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Grad-CAM saliency heatmaps",
              "zh": "Grad-CAM 顯著性熱圖"
            },
            "body": {
              "en": "Explainability tools like Grad-CAM overlay a colored heatmap on an image to show which regions most influenced a neural network's decision. Color makes the model's otherwise hidden reasoning observable.",
              "zh": "Grad-CAM 這類可解釋性工具會在影像上疊一層彩色熱圖,標示哪些區域最影響神經網路的判斷。顏色讓模型原本隱而不顯的推理變得可觀察。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Saliency_map"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Attention weight visualization",
              "zh": "注意力權重視覺化"
            },
            "body": {
              "en": "Tools such as BertViz draw the attention weights of a transformer as colored lines and grids, with intensity showing how strongly each token attends to another. The color turns an abstract matrix of numbers into something a researcher can read.",
              "zh": "BertViz 這類工具把 Transformer 的注意力權重畫成彩色的連線與方格,顏色深淺代表每個詞元對另一個詞元的注意強度。顏色把抽象的數字矩陣,變成研究者能讀懂的圖像。"
            }
          }
        ],
        "sources": [
          {
            "label": "Wikipedia — Photochromism",
            "url": "https://en.wikipedia.org/wiki/Photochromism"
          },
          {
            "label": "Wikipedia — Thermochromism",
            "url": "https://en.wikipedia.org/wiki/Thermochromism"
          },
          {
            "label": "Wikipedia — Dye penetrant inspection",
            "url": "https://en.wikipedia.org/wiki/Dye_penetrant_inspection"
          },
          {
            "label": "Wikipedia — Chromatophore",
            "url": "https://en.wikipedia.org/wiki/Chromatophore"
          },
          {
            "label": "Wikipedia — Saliency map",
            "url": "https://en.wikipedia.org/wiki/Saliency_map"
          }
        ],
        "group": "matter"
      },
      {
        "id": 33,
        "slug": "homogeneity",
        "name": {
          "en": "Homogeneity",
          "zh": "同質性"
        },
        "aliases": {
          "en": [
            "Uniformity",
            "Same Material"
          ],
          "zh": [
            "同質",
            "均質性"
          ]
        },
        "definition": {
          "en": "Make objects that interact with a given object out of the same material, or a material with matching properties. Sharing composition or a key property (hardness, thermal expansion, format) removes mismatches at the interface.",
          "zh": "讓與某物體互動的其他物體,採用相同的材料,或性質相匹配的材料。共用材質或某項關鍵性質(硬度、熱膨脹、格式),就能消除介面上的不相容。"
        },
        "subPrinciples": [
          {
            "en": "Make objects that interact with a given object out of the same material (or a material with similar properties).",
            "zh": "讓與某物體互動的其他物體,採用相同材料(或性質相近的材料)。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Wood joinery with wooden pegs",
              "zh": "木榫與木釘接合"
            },
            "body": {
              "en": "Traditional joinery fastens timber with wooden pegs and dowels rather than metal nails. Because peg and beam are the same material, they swell, shrink, and age together, so the joint does not loosen or corrode.",
              "zh": "傳統木工用木釘、木榫來固定木材,而不是金屬釘。因為釘與樑同為木料,會一起脹縮、一起老化,接合處便不會鬆脫或鏽蝕。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Diamond cuts diamond",
              "zh": "以鑽石加工鑽石"
            },
            "body": {
              "en": "Diamond is one of the hardest known materials, so diamonds and other superhard workpieces are cut, ground, and polished with diamond abrasive. Only a material of matching hardness can finish it, so the tool is made of the same substance as the work.",
              "zh": "鑽石是已知最硬的材料之一,因此鑽石與其他超硬工件要用鑽石磨料來切割、研磨、拋光。唯有硬度相當的材料才加工得動它,於是刀具用了與工件相同的物質。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Diamond_tool"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Reinforced concrete",
              "zh": "鋼筋混凝土"
            },
            "body": {
              "en": "Steel and concrete have nearly the same coefficient of thermal expansion, so a reinforced beam heats and cools as one piece. That matched property is precisely why the steel does not tear away from the concrete as temperature changes.",
              "zh": "鋼與混凝土的熱膨脹係數幾乎相同,因此鋼筋混凝土梁會像一整塊一樣受熱冷卻。正是這項相匹配的性質,讓鋼筋在溫度變化時不會與混凝土脫離開裂。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Reinforced_concrete"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Same-alloy welding filler",
              "zh": "同合金焊接填料"
            },
            "body": {
              "en": "To weld a metal well, the filler rod is normally chosen to match the alloy of the base metal. Matching composition gives the weld the same strength, corrosion resistance, and expansion as the parts it joins.",
              "zh": "要把金屬焊好,填料棒通常選用與母材相同的合金。成分相符,焊道就有和被連接零件一致的強度、耐蝕性與膨脹特性。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "The edible ice-cream cone",
              "zh": "可食甜筒"
            },
            "body": {
              "en": "An ice-cream cone is a container made of the same class of edible material as its contents. Because holder and held are both food, there is no packaging to peel off or throw away, you simply eat the container too.",
              "zh": "冰淇淋甜筒是一個用與內容物同類可食材料做成的容器。因為盛裝的與被盛裝的都是食物,沒有包裝要剝要丟,連容器一起吃掉就行。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "LEGO's universal stud",
              "zh": "樂高的通用凸點"
            },
            "body": {
              "en": "Every LEGO brick uses the identical stud-and-tube coupling at the same spacing. Because all pieces share one interface, any brick connects to any other, which is homogeneity applied to a connection standard.",
              "zh": "每一塊樂高積木都用相同間距、相同規格的凸點與管孔耦合。因為所有零件共用同一種介面,任何積木都能接上任何積木,這是把同質性用在連接標準上。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "ISO shipping containers",
              "zh": "ISO 標準貨櫃"
            },
            "body": {
              "en": "Standard shipping containers share fixed outer dimensions and corner fittings worldwide. Because every container is the same, one set of ships, cranes, trucks, and rail cars can handle all of them interchangeably, collapsing the cost of moving goods between transport modes.",
              "zh": "標準貨櫃在全球共用固定的外部尺寸與角件。因為每個貨櫃都一樣,同一套船、吊車、卡車與火車就能通用地裝卸所有貨櫃,把貨物在不同運輸方式間轉運的成本大幅壓低。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Containerization"
          },
          {
            "domain": "software",
            "title": {
              "en": "Isomorphic JavaScript",
              "zh": "同構 JavaScript"
            },
            "body": {
              "en": "Isomorphic (universal) JavaScript runs the same language on both the browser and the Node.js server. Sharing one language lets the same validation, routing, and data models run on each side without translation between two stacks.",
              "zh": "同構(通用)JavaScript 讓瀏覽器與 Node.js 伺服器兩端跑同一種語言。共用一種語言,同一套驗證、路由與資料模型就能在兩邊運行,不必在兩套技術棧之間轉譯。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Dev/prod parity with containers",
              "zh": "以容器達成開發/正式環境一致"
            },
            "body": {
              "en": "Container images package an app with an identical operating system and dependencies for development, testing, and production. Making every environment the same removes the 'works on my machine' class of bugs caused by mismatched surroundings.",
              "zh": "容器映像把應用程式連同完全相同的作業系統與相依套件,一起打包給開發、測試與正式環境使用。讓每個環境都一致,就消除了因環境不一致而生的「在我機器上明明可以」那類問題。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Self-play reinforcement learning",
              "zh": "自我對弈強化學習"
            },
            "body": {
              "en": "AlphaGo Zero and AlphaZero learn by playing millions of games against copies of themselves. The opponent is the same model, so the system always faces an evenly matched adversary and improves as it improves.",
              "zh": "AlphaGo Zero 與 AlphaZero 透過與自身的副本對弈數百萬局來學習。對手就是同一個模型,系統因此始終面對實力相當的對手,並在自己變強的同時一起變強。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Self-play"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Federated averaging",
              "zh": "聯邦平均"
            },
            "body": {
              "en": "In standard federated learning with FedAvg, every client trains the same model architecture on its own private data, and the server averages their weights into one global model. Sharing an identical architecture is what makes the updates directly averageable.",
              "zh": "在採用 FedAvg 的標準聯邦學習中,每個用戶端都用相同的模型架構在自己的私有資料上訓練,伺服器再把它們的權重平均成一個全域模型。正因共用完全相同的架構,各方的更新才能直接取平均。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Federated_learning"
          }
        ],
        "sources": [
          {
            "label": "Wikipedia — Diamond tool",
            "url": "https://en.wikipedia.org/wiki/Diamond_tool"
          },
          {
            "label": "Wikipedia — Reinforced concrete",
            "url": "https://en.wikipedia.org/wiki/Reinforced_concrete"
          },
          {
            "label": "Wikipedia — Containerization",
            "url": "https://en.wikipedia.org/wiki/Containerization"
          },
          {
            "label": "Wikipedia — Self-play (reinforcement learning)",
            "url": "https://en.wikipedia.org/wiki/Self-play"
          },
          {
            "label": "Wikipedia — Federated learning",
            "url": "https://en.wikipedia.org/wiki/Federated_learning"
          }
        ],
        "group": "matter"
      },
      {
        "id": 34,
        "slug": "discarding-recovering",
        "name": {
          "en": "Discarding and Recovering",
          "zh": "拋棄與再生"
        },
        "aliases": {
          "en": [
            "Rejecting and Regenerating",
            "Discarding and Regenerating"
          ],
          "zh": [
            "丟棄與復原",
            "拋棄與復原"
          ]
        },
        "definition": {
          "en": "Discard parts of an object once they have done their job, by dissolving, evaporating, or otherwise removing them. Conversely, restore consumable parts that are used up, doing so directly during operation.",
          "zh": "當物體的某些部分完成任務後,就把它們拋棄——以溶解、蒸發或其他方式去除。反過來,對於會耗損的部分,則在運作過程中即時補充、再生。"
        },
        "subPrinciples": [
          {
            "en": "Discard portions of an object that have fulfilled their function (dissolve, evaporate, etc.), or modify them during operation.",
            "zh": "把已完成功能的部分拋棄(溶解、蒸發等),或在運作中即時改變它們。"
          },
          {
            "en": "Conversely, restore consumable parts of an object directly during operation.",
            "zh": "反過來,在運作過程中即時補充、再生已耗損的部分。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Deer antlers",
              "zh": "鹿角"
            },
            "body": {
              "en": "Deer grow a set of antlers, use them for a season, then shed them and regrow a fresh set the next year. Nature both discards the spent structure and regenerates a replacement on a cycle.",
              "zh": "鹿長出一對角,用一季後便脫落,隔年再長出全新的一對。自然界既把用過的結構拋棄,又週期性地再生出替代品。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Antler"
          },
          {
            "domain": "ancient",
            "title": {
              "en": "Ever-growing rodent incisors",
              "zh": "不斷生長的囓齒動物門牙"
            },
            "body": {
              "en": "A rodent's front teeth wear down constantly from gnawing, so they grow continuously throughout life to make up the loss. The tool restores itself as fast as it is consumed.",
              "zh": "囓齒動物的門牙因啃咬而不斷磨損,於是牠們的門牙終生持續生長來補足損耗。這件工具以與消耗相同的速度自我再生。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Multistage rocket staging",
              "zh": "多節火箭分節"
            },
            "body": {
              "en": "A launch vehicle jettisons each lower stage the moment its propellant runs out. Discarding the now-useless empty tank and engine sheds dead weight so the remaining rocket accelerates more efficiently.",
              "zh": "運載火箭在每一節推進劑用盡的當下就拋掉那一節。把已無用的空油箱與引擎拋棄,甩掉死重,剩下的火箭便能更有效率地加速。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Multistage_rocket"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Ablative heat shields",
              "zh": "燒蝕式隔熱盾"
            },
            "body": {
              "en": "A re-entry capsule's heat shield is designed to char and erode away during descent. The material deliberately sacrifices itself, carrying the enormous heat off with the debris it sheds.",
              "zh": "再入艙的隔熱盾被設計成在下降過程中焦化、逐層剝蝕。這材料刻意犧牲自己,把巨大的熱量隨著剝落的碎屑一起帶走。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Absorbable surgical sutures",
              "zh": "可吸收手術縫線"
            },
            "body": {
              "en": "Absorbable sutures hold a wound closed and are then broken down and absorbed by the body through hydrolysis. Once they have done their job they simply disappear, so no second procedure is needed to remove them.",
              "zh": "可吸收縫線先把傷口固定,之後由人體透過水解分解並吸收掉。任務完成後它們就自行消失,無須再做一次拆線手術。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Surgical_suture"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Dissolving capsules and pods",
              "zh": "會溶解的膠囊與洗滌球"
            },
            "body": {
              "en": "A medicine capsule or a laundry pod uses a shell that carries and protects the dose, then dissolves the moment it is in the stomach or the wash water. The container discards itself once delivery is complete.",
              "zh": "藥物膠囊或洗衣球用一層外殼盛裝並保護內容物,一進到胃裡或洗衣水中就溶解。容器在完成輸送後便自我拋棄。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Remanufacturing and the circular economy",
              "zh": "再製造與循環經濟"
            },
            "body": {
              "en": "Remanufacturers collect worn 'cores', engines, alternators, printer cartridges, then clean and rebuild them to like-new specification. Rather than discarding used products, the business recovers and regenerates their value.",
              "zh": "再製造商回收磨損的「核心件」——引擎、發電機、碳粉匣——加以清潔並重建到近乎全新的規格。這門生意不是把用過的產品丟掉,而是把它們的價值回收、再生。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Remanufacturing"
          },
          {
            "domain": "software",
            "title": {
              "en": "Garbage collection",
              "zh": "垃圾回收"
            },
            "body": {
              "en": "A garbage collector automatically finds objects the program can no longer reach and reclaims their memory. Memory that has served its purpose is discarded and recovered for reuse, without the programmer freeing it by hand.",
              "zh": "垃圾回收器會自動找出程式再也無法觸及的物件,並回收它們的記憶體。已完成用途的記憶體被拋棄並回收再利用,不必由程式設計師手動釋放。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
          },
          {
            "domain": "software",
            "title": {
              "en": "LRU cache eviction",
              "zh": "LRU 快取淘汰"
            },
            "body": {
              "en": "When a cache fills up, a least-recently-used policy discards the entries least likely to be needed again to make room for new ones. Old data is deliberately thrown out so the limited, fast store keeps holding what matters.",
              "zh": "當快取滿了,最近最少使用(LRU)策略會淘汰最不可能再被用到的項目,好騰出空間給新資料。刻意把舊資料丟掉,讓有限而快速的儲存空間持續保有重要內容。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "KV-cache eviction for long contexts",
              "zh": "長脈絡的 KV 快取淘汰"
            },
            "body": {
              "en": "When a language model generates very long text, methods like sliding-window attention drop the key/value cache of the oldest tokens to keep memory bounded. Context that has aged out of relevance is discarded so generation can continue indefinitely.",
              "zh": "當語言模型生成很長的文字時,滑動視窗注意力這類方法會丟棄最舊詞元的鍵/值(KV)快取,把記憶體用量控制住。已因時間久遠而不再相關的脈絡被拋棄,生成才能無限延續。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Gradient checkpointing",
              "zh": "梯度檢查點"
            },
            "body": {
              "en": "To train large models with limited memory, gradient checkpointing throws away most intermediate activations during the forward pass and recomputes them on demand during backpropagation. It discards data to save memory, then regenerates exactly what it needs, embodying both halves of the principle.",
              "zh": "為了在有限記憶體下訓練大型模型,梯度檢查點在前向傳遞時丟掉大部分中間激活值,等反向傳播需要時再重新計算出來。它先拋棄資料以省記憶體,再精確再生所需的部分,同時體現了本原則的兩面。"
            }
          }
        ],
        "sources": [
          {
            "label": "Wikipedia — Antler",
            "url": "https://en.wikipedia.org/wiki/Antler"
          },
          {
            "label": "Wikipedia — Multistage rocket",
            "url": "https://en.wikipedia.org/wiki/Multistage_rocket"
          },
          {
            "label": "Wikipedia — Surgical suture (absorbable)",
            "url": "https://en.wikipedia.org/wiki/Surgical_suture"
          },
          {
            "label": "Wikipedia — Garbage collection (computer science)",
            "url": "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)"
          },
          {
            "label": "Wikipedia — Remanufacturing",
            "url": "https://en.wikipedia.org/wiki/Remanufacturing"
          }
        ],
        "group": "process"
      },
      {
        "id": 35,
        "slug": "parameter-changes",
        "name": {
          "en": "Parameter Changes",
          "zh": "參數改變"
        },
        "aliases": {
          "en": [
            "Transformation of Properties",
            "Changing Physical or Chemical State"
          ],
          "zh": [
            "性質轉變",
            "改變物理化學狀態"
          ]
        },
        "definition": {
          "en": "Change a parameter of the object: its physical state, its concentration or consistency, its degree of flexibility, or its temperature. Adjusting one property can make the object easier to store, transport, or use.",
          "zh": "改變物體的某項參數:物理狀態、濃度或稠度、柔軟或彈性的程度、或溫度。調整一項性質,往往就能讓物體更容易儲存、運輸或使用。"
        },
        "subPrinciples": [
          {
            "en": "Change the object's physical state (e.g., to a gas, liquid, or solid).",
            "zh": "改變物體的物理狀態(如變成氣態、液態或固態)。"
          },
          {
            "en": "Change the concentration or consistency.",
            "zh": "改變濃度或稠度。"
          },
          {
            "en": "Change the degree of flexibility.",
            "zh": "改變柔軟或彈性的程度。"
          },
          {
            "en": "Change the temperature.",
            "zh": "改變溫度。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Firing clay into ceramic",
              "zh": "把陶土燒成陶器"
            },
            "body": {
              "en": "A potter shapes soft, workable clay and then fires it, driving off water and fusing the particles into hard, durable ceramic. Heat changes the material's state from plastic to rigid, locking in the chosen form.",
              "zh": "陶匠先把柔軟好塑的陶土捏出形狀,再入窯燒製,趕走水分並使顆粒熔結成堅硬耐久的陶瓷。熱把材料的狀態從可塑變為剛硬,把選定的造型定住。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Liquefied natural gas",
              "zh": "液化天然氣"
            },
            "body": {
              "en": "Natural gas is cooled to about minus 162 degrees Celsius until it condenses into a liquid roughly one six-hundredth of its gaseous volume. Changing its physical state makes it dense enough to ship across oceans in tankers.",
              "zh": "天然氣被冷卻到約攝氏零下 162 度,凝結成液體,體積約只剩氣態的六百分之一。改變它的物理狀態,使它密到足以用油輪跨洋運送。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Liquefied_natural_gas"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Vulcanizing rubber",
              "zh": "橡膠硫化"
            },
            "body": {
              "en": "Goodyear's vulcanization heats natural rubber with sulfur, cross-linking its polymer chains. The change turns a soft, sticky substance into a tough, elastic material that keeps its shape, which is what makes durable tires possible.",
              "zh": "固特異的硫化法把天然橡膠與硫加熱,使其聚合物鏈交聯。這一改變把黏軟的物質變成堅韌有彈性、能保持形狀的材料,耐用的輪胎才得以成真。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Vulcanization"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Quenching and tempering steel",
              "zh": "鋼的淬火與回火"
            },
            "body": {
              "en": "Heating steel and cooling it at controlled rates changes its hardness and toughness without changing its shape. By tuning temperature, the same alloy can be made either hard and brittle or springy and tough for a given job.",
              "zh": "把鋼加熱並以受控速率冷卻,可在不改變形狀的前提下改變它的硬度與韌性。透過調控溫度,同一種合金既可做得又硬又脆,也可做得富彈性又強韌,以配合不同用途。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Freeze-dried food and instant coffee",
              "zh": "冷凍乾燥食品與即溶咖啡"
            },
            "body": {
              "en": "Freeze drying removes water from brewed coffee or fruit by sublimation, leaving a light, shelf-stable solid that rehydrates later. Changing the water content and state trades away weight and spoilage while keeping flavor.",
              "zh": "冷凍乾燥藉昇華把沖煮咖啡或水果中的水分去除,留下輕巧、耐儲存、日後可復水的固體。改變含水量與狀態,以此換掉重量與腐敗,又保住風味。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Freeze_drying"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Concentrated and multi-form detergents",
              "zh": "濃縮與多型態清潔劑"
            },
            "body": {
              "en": "The same cleaning product is sold as a bar, a powder, a concentrated liquid, or a gel. Changing concentration and consistency lets makers cut shipping weight and lets users pick the form that suits the task.",
              "zh": "同一種清潔產品被做成肥皂塊、粉狀、濃縮液或凝膠。改變濃度與稠度,讓廠商減少運輸重量,也讓使用者挑選最適合當下任務的型態。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Coca-Cola's concentrate model",
              "zh": "可口可樂的濃縮糖漿模式"
            },
            "body": {
              "en": "Coca-Cola ships a highly concentrated syrup to local bottlers, who add water and carbonation before sale. Transporting the product in concentrated form slashes shipping cost, since the bulky water is added near the customer.",
              "zh": "可口可樂把高度濃縮的糖漿運給各地的裝瓶商,由他們在出售前加水、充碳酸。以濃縮型態運送產品,大幅降低運輸成本,因為佔體積的水是在靠近顧客處才加入。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Data compression",
              "zh": "資料壓縮"
            },
            "body": {
              "en": "Compression re-encodes data into a denser form for storage or transfer, then decompresses it back for use. Changing the 'consistency' of the data cuts bandwidth and disk cost while the information itself is preserved.",
              "zh": "壓縮把資料重新編碼成更緊密的型態以便儲存或傳輸,使用時再解壓縮還原。改變資料的「稠度」,在保留資訊本身的同時,降低頻寬與磁碟成本。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Hot and cold storage tiers",
              "zh": "冷熱儲存分層"
            },
            "body": {
              "en": "Cloud storage offers 'hot' tiers for instant access and 'cold' tiers like archival storage that are far cheaper but slow to retrieve. Moving rarely used data to a colder tier borrows the temperature idea to trade access speed for cost.",
              "zh": "雲端儲存提供可即時存取的「熱」層,以及像封存儲存那樣便宜許多但取回較慢的「冷」層。把少用的資料移到較冷的層,借用了溫度的概念,以存取速度換取成本。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Model quantization",
              "zh": "模型量化"
            },
            "body": {
              "en": "Quantization lowers the numerical precision of a model's weights, for example from 32-bit floats to 8-bit or 4-bit integers. Changing this parameter shrinks the model and speeds up inference, usually with little loss of accuracy.",
              "zh": "量化降低模型權重的數值精度,例如從 32 位元浮點數降到 8 位元或 4 位元整數。改變這項參數,能縮小模型並加快推論,而準確度通常只損失一點點。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Sampling temperature in language models",
              "zh": "語言模型的取樣溫度"
            },
            "body": {
              "en": "The temperature parameter reshapes a model's output distribution: a low temperature makes it sharp and deterministic, a high one makes it flatter and more random. Turning this single knob tunes the balance between safe, predictable text and creative, varied text.",
              "zh": "溫度參數會重塑模型的輸出分佈:低溫使分佈變得尖銳而確定,高溫則使它變得平坦而更隨機。轉動這一個旋鈕,就能調節「穩妥可預測」與「有創意、多變化」之間的平衡。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Softmax_function"
          }
        ],
        "sources": [
          {
            "label": "Wikipedia — Liquefied natural gas",
            "url": "https://en.wikipedia.org/wiki/Liquefied_natural_gas"
          },
          {
            "label": "Wikipedia — Vulcanization",
            "url": "https://en.wikipedia.org/wiki/Vulcanization"
          },
          {
            "label": "Wikipedia — Freeze drying",
            "url": "https://en.wikipedia.org/wiki/Freeze_drying"
          },
          {
            "label": "Wikipedia — Softmax function (temperature)",
            "url": "https://en.wikipedia.org/wiki/Softmax_function"
          },
          {
            "label": "triz40.com — 40 Inventive Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php?lang=en"
          }
        ],
        "group": "matter"
      },
      {
        "id": 36,
        "slug": "phase-transitions",
        "name": {
          "en": "Phase Transitions",
          "zh": "相變化"
        },
        "aliases": {
          "en": [
            "Phase Transformation",
            "Phase Change"
          ],
          "zh": [
            "相變",
            "相轉變"
          ]
        },
        "definition": {
          "en": "Use the physical phenomena that occur during a change of state — such as volume change or the absorption and release of latent heat — to do useful work. The transition between phases (solid, liquid, gas) can also be exploited as an abrupt, threshold-like switch in a system's behavior.",
          "zh": "利用物質在相變(固、液、氣之間轉換)時發生的物理現象——例如體積變化、潛熱的吸收或釋放——來完成有用的工作。相與相之間的轉換,本身也可以當成一種臨界、突變式的開關來運用。"
        },
        "subPrinciples": [
          {
            "en": "Use phenomena occurring during phase transitions, such as volume changes or the loss or absorption of heat.",
            "zh": "運用相變過程中發生的現象,例如體積變化,或放熱與吸熱。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Frost weathering splitting rock",
              "zh": "凍融風化裂解岩石"
            },
            "body": {
              "en": "Water seeps into cracks in rock, freezes overnight and expands by about 9%, prying the crack wider; repeated freeze-thaw cycles eventually break the rock apart. The work is done entirely by the volume change of the liquid-to-solid phase transition.",
              "zh": "水滲入岩石裂縫,夜間結冰時體積膨脹約 9%,把裂縫撐得更開;反覆的凍融循環最終使岩石崩解。做功完全來自液態轉固態相變時的體積變化。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Heat pump and refrigeration cycle",
              "zh": "熱泵與製冷循環"
            },
            "body": {
              "en": "A refrigerant is cycled so that it evaporates on the cold side, absorbing latent heat, and condenses on the warm side, releasing it, pumping heat from cold to hot. The whole machine runs on the heat absorbed and released during liquid-vapor phase transitions.",
              "zh": "冷媒在循環中於低溫側蒸發、吸收潛熱,於高溫側冷凝、釋放潛熱,把熱量從冷端搬到熱端。整台機器就是靠液氣相變時吸放的潛熱在運作。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Phase_transition"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Heat pipe",
              "zh": "熱管"
            },
            "body": {
              "en": "A sealed heat pipe contains a working fluid that evaporates at the hot end and condenses at the cold end, carrying large amounts of heat with almost no temperature drop. It moves heat far more effectively than solid metal by riding the latent heat of the phase change.",
              "zh": "密封的熱管內含工作流體,在熱端蒸發、冷端冷凝,幾乎沒有溫差就能搬運大量熱量。它靠相變潛熱傳熱,效率遠高於實心金屬。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Reusable sodium acetate hand warmer",
              "zh": "可重複使用的醋酸鈉暖手包"
            },
            "body": {
              "en": "Clicking a metal disc in a supersaturated sodium acetate solution triggers crystallization, and the liquid-to-solid transition releases its latent heat of fusion (about 264–289 J/g), warming the pack to around 54°C. Boiling it re-dissolves the crystals to reset it.",
              "zh": "按壓過飽和醋酸鈉溶液中的金屬片會觸發結晶,液態轉固態的相變釋放出熔化潛熱(約 264–289 J/g),讓暖手包升溫到約 54°C。用水煮沸使晶體再溶解即可重複使用。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Phase-change cooling vest",
              "zh": "相變化降溫背心"
            },
            "body": {
              "en": "A cooling vest holds pouches of a phase-change material engineered to melt at around 18°C; as it melts it absorbs body heat, keeping the wearer cool for hours. The comfort comes from the latent heat soaked up during the solid-to-liquid transition.",
              "zh": "降溫背心內含相變材料的小包,設計成約 18°C 熔化;熔化時吸收體熱,讓穿戴者維持涼爽數小時。降溫效果來自固態轉液態時吸收的潛熱。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Dry-ice cold-chain logistics",
              "zh": "乾冰冷鏈物流"
            },
            "body": {
              "en": "To ship vaccines and frozen food, carriers pack boxes with solid CO2 (dry ice), which sublimes directly to gas and absorbs heat, holding cargo below freezing for days without any powered refrigeration. The logistics model is built on the heat absorbed during a solid-to-gas phase transition.",
              "zh": "運送疫苗與冷凍食品時,業者在箱內放入固態二氧化碳(乾冰),它直接昇華為氣體並吸熱,不需任何耗電製冷就能讓貨物維持冰點以下數天。整套物流模式建立在固態轉氣態相變所吸收的熱量上。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Satisfiability phase transition",
              "zh": "可滿足性相變"
            },
            "body": {
              "en": "In random 3-SAT, as the ratio of clauses to variables crosses about 4.27, instances flip abruptly from almost-always solvable to almost-always unsolvable, with the hardest problems clustered right at that threshold. Computer scientists call this sharp, threshold-like switch a phase transition.",
              "zh": "在隨機 3-SAT 問題中,當子句數與變數數的比值越過約 4.27 時,問題會從「幾乎都可解」突然翻轉成「幾乎都不可解」,而最難的實例正好聚集在這個臨界點附近。電腦科學家把這種銳利的臨界切換稱為相變。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Giant component in random networks",
              "zh": "隨機網路中的巨型連通分量"
            },
            "body": {
              "en": "In an Erdős–Rényi random graph, as edges are added past a critical density (average degree 1), a giant connected component emerges abruptly, jumping from scattered small pieces to one network spanning most nodes. This percolation threshold is the canonical phase transition of network science.",
              "zh": "在 Erdős–Rényi 隨機圖中,當加入的邊超過臨界密度(平均度數為 1)時,一個巨型連通分量會突然出現,從零散的小片段瞬間變成涵蓋大多數節點的單一網路。這個滲流臨界點正是網路科學的經典相變。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Grokking in neural networks",
              "zh": "神經網路的頓悟(grokking)"
            },
            "body": {
              "en": "Power et al. (2022) found that small networks can sit at perfect training accuracy but chance-level test accuracy for a long time, then abruptly generalize almost perfectly. This sudden, delayed jump behaves like a phase transition in the model's internal representations.",
              "zh": "Power 等人(2022)發現,小型網路可能長時間停留在訓練準確率滿分、但測試準確率如同亂猜的狀態,接著突然幾乎完美地泛化。這種延遲而突發的躍升,就像模型內部表徵的一次相變。"
            },
            "sourceUrl": "https://arxiv.org/abs/2201.02177"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Emergent abilities at scale",
              "zh": "隨規模浮現的能力"
            },
            "body": {
              "en": "Wei et al. (2022) documented abilities such as multi-step arithmetic that stay at chance level until a model passes a critical scale, then rise sharply — behavior the authors describe as a phase transition. The capability is absent in smaller models and appears abruptly in larger ones.",
              "zh": "Wei 等人(2022)記錄到像多步驟算術這類能力,在模型跨過某個臨界規模前一直停在亂猜水準,之後才急遽提升——作者將此描述為相變。這種能力在小模型中不存在,到大模型才突然出現。"
            },
            "sourceUrl": "https://arxiv.org/abs/2206.07682"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Simulated annealing",
              "zh": "模擬退火"
            },
            "body": {
              "en": "Simulated annealing borrows directly from metallurgy: a 'temperature' parameter is lowered on a schedule so the search first explores widely, like a hot disordered melt, then settles into a low-energy solution, like a cooling crystal. The algorithm mimics the ordering that happens across a physical phase change.",
              "zh": "模擬退火直接借用冶金學的概念:依排程降低一個「溫度」參數,使搜尋先廣泛探索(像高溫無序的熔融態),再逐漸收斂到低能量解(像冷卻結晶)。這個演算法模仿了物理相變過程中的有序化。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Phase transition",
            "url": "https://en.wikipedia.org/wiki/Phase_transition"
          },
          {
            "label": "Power et al. (2022) — Grokking: Generalization Beyond Overfitting",
            "url": "https://arxiv.org/abs/2201.02177"
          },
          {
            "label": "Wei et al. (2022) — Emergent Abilities of Large Language Models",
            "url": "https://arxiv.org/abs/2206.07682"
          }
        ],
        "group": "matter"
      },
      {
        "id": 37,
        "slug": "thermal-expansion",
        "name": {
          "en": "Thermal Expansion",
          "zh": "熱膨脹"
        },
        "aliases": {
          "en": [
            "Thermal Contraction",
            "Expansion and Contraction"
          ],
          "zh": [
            "熱脹冷縮",
            "溫度形變"
          ]
        },
        "definition": {
          "en": "Use the expansion or contraction of materials with temperature to produce motion, force, or a tight fit. When one material is not enough, combine several materials with different coefficients of thermal expansion so their differential movement does the work.",
          "zh": "利用材料隨溫度膨脹或收縮的特性來產生運動、力量或緊密配合。單一材料不夠時,就搭配數種熱膨脹係數不同的材料,用它們之間的相對位移來做功。"
        },
        "subPrinciples": [
          {
            "en": "Use the thermal expansion (or contraction) of materials.",
            "zh": "運用材料的熱膨脹(或熱收縮)。"
          },
          {
            "en": "If thermal expansion is already used, combine multiple materials with different coefficients of thermal expansion.",
            "zh": "若已運用熱膨脹,則搭配多種熱膨脹係數不同的材料。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Fire-setting in ancient mining",
              "zh": "古代採礦的火裂法"
            },
            "body": {
              "en": "Miners from the Neolithic onward built fires against a rock face; the intense heat made different parts of the rock expand by different amounts, cracking it apart so it could be levered out, sometimes helped by dousing with water. It broke hard rock before explosives existed, using thermal expansion alone.",
              "zh": "從新石器時代起,礦工會在岩壁旁生火;高溫使岩石各部位膨脹程度不同而裂開,便於撬出,有時再潑水加速。在炸藥出現之前,人們就靠純粹的熱膨脹來破開堅硬岩石。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Fire-setting"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Shrink-fit assembly",
              "zh": "熱套(過盈配合)組裝"
            },
            "body": {
              "en": "To join a ring or bearing tightly onto a shaft, engineers heat the outer part so it expands, slip it over the shaft, then let it cool and contract into an interference fit with no bolts. The clamping force comes entirely from thermal contraction.",
              "zh": "要把套環或軸承緊密裝到軸上,工程師會加熱外件使其膨脹,套上軸後讓它冷卻收縮,形成不靠螺栓的過盈配合。夾持力完全來自熱收縮。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Thermal_expansion"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Expansion joints in rails and bridges",
              "zh": "鐵軌與橋樑的伸縮縫"
            },
            "body": {
              "en": "Long steel rails and bridge decks are built with gaps or interlocking expansion joints so they can lengthen in summer heat and shorten in winter without buckling. The design deliberately makes room for thermal expansion instead of fighting it.",
              "zh": "長段鋼軌與橋面在施工時會留下間隙或交錯的伸縮縫,讓它們在夏季受熱伸長、冬季收縮而不致挫曲。這種設計刻意為熱膨脹預留空間,而非硬性對抗。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Thermal_expansion"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Bimetallic-strip thermostat",
              "zh": "雙金屬片恆溫器"
            },
            "body": {
              "en": "Two metals with different expansion coefficients are bonded into a strip; as temperature rises the strip bends toward the slower-expanding side, opening or closing a switch. It turns a temperature change into mechanical motion by pairing two materials, exactly as the second sub-principle suggests.",
              "zh": "把兩種熱膨脹係數不同的金屬貼合成一片;溫度上升時,金屬片朝膨脹較慢的一側彎曲,藉此開閉開關。它正如第二條子原則所述,用兩種材料把溫度變化轉成機械運動。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Loosening a stuck metal jar lid",
              "zh": "鬆開卡死的金屬瓶蓋"
            },
            "body": {
              "en": "Running hot water over a stuck metal lid on a glass jar makes the metal expand more than the glass, loosening the grip so the lid twists off easily. The trick works precisely because the two materials expand at different rates.",
              "zh": "用熱水沖玻璃罐上卡死的金屬蓋,金屬膨脹得比玻璃多,鬆開了咬合,蓋子就好轉開。這招之所以有效,正是因為兩種材料的膨脹速率不同。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Liquid-in-glass thermometer",
              "zh": "玻璃液體溫度計"
            },
            "body": {
              "en": "A classic thermometer holds a thread of mercury or coloured alcohol that expands up a thin calibrated tube as it warms, letting you read temperature off the height. The measurement is a direct readout of thermal expansion.",
              "zh": "傳統溫度計裝有一段水銀或染色酒精,受熱時沿著細長的刻度管上升,讓人從液柱高度讀出溫度。這項量測就是熱膨脹的直接顯示。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Elastic seasonal capacity",
              "zh": "隨季節伸縮的營運量能"
            },
            "body": {
              "en": "Retailers and logistics firms expand headcount, inventory, and warehouse space ahead of peak seasons and contract them afterward, sizing the operation to the 'heat' of demand. It is the management analogue of expanding and contracting a material with temperature so capacity always matches load.",
              "zh": "零售與物流業者在旺季來臨前擴充人力、庫存與倉儲空間,旺季過後再收縮,讓營運規模隨需求的「熱度」調整。這是把材料隨溫度脹縮的概念套用到管理上,使量能始終貼合負載。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Cloud autoscaling",
              "zh": "雲端自動擴縮"
            },
            "body": {
              "en": "Autoscalers such as the Kubernetes Horizontal Pod Autoscaler add server replicas when traffic rises and remove them when it falls, so capacity tracks load in real time. It is the software analogue of a material expanding and contracting with 'heat' — here, request volume.",
              "zh": "像 Kubernetes 水平 Pod 自動擴縮器這類機制,會在流量上升時增加伺服器副本、下降時移除,使量能即時貼合負載。這是把材料隨「熱度」(此處是請求量)脹縮的概念,搬到軟體上。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Growable dynamic arrays",
              "zh": "可增長的動態陣列"
            },
            "body": {
              "en": "Dynamic arrays like a C++ vector, Go slice, or Python list expand their backing storage as elements are added and can shrink again, so the container's size flexes with its contents. The data structure 'expands and contracts' on demand rather than fixing its size up front.",
              "zh": "像 C++ 的 vector、Go 的 slice 或 Python 的 list 這類動態陣列,會在加入元素時擴充底層儲存空間,也能再縮小,使容器大小隨內容伸縮。這個資料結構按需「脹縮」,而非一開始就固定尺寸。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Elastic distributed training",
              "zh": "彈性分散式訓練"
            },
            "body": {
              "en": "Elastic training frameworks let a large-model job add or drop GPU workers as resources free up, while gradient accumulation 'expands' the effective batch size when memory is tight. The training footprint stretches and shrinks to fit the available hardware.",
              "zh": "彈性訓練框架讓大型模型的工作在資源釋出時增減 GPU 節點,並用梯度累積在記憶體吃緊時「撐大」有效批次量。訓練規模會伸縮以配合可用硬體。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Adaptive-compute inference",
              "zh": "自適應運算量的推論"
            },
            "body": {
              "en": "Early-exit networks and adaptive-computation methods let a model spend more layers on hard inputs and exit early on easy ones, expanding or contracting the compute per example. The model 'stretches' its effort to the difficulty of each input rather than using a fixed amount.",
              "zh": "早退出網路與自適應運算方法,讓模型對困難輸入多用幾層、對簡單輸入提早退出,依此擴張或收縮每筆的運算量。模型會把算力「伸縮」到每筆輸入的難度,而非一律用固定量。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Thermal expansion",
            "url": "https://en.wikipedia.org/wiki/Thermal_expansion"
          },
          {
            "label": "Wikipedia — Fire-setting",
            "url": "https://en.wikipedia.org/wiki/Fire-setting"
          },
          {
            "label": "Kubernetes — Horizontal Pod Autoscaling",
            "url": "https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/"
          }
        ],
        "group": "matter"
      },
      {
        "id": 38,
        "slug": "strong-oxidants",
        "name": {
          "en": "Strong Oxidants",
          "zh": "強氧化劑"
        },
        "aliases": {
          "en": [
            "Accelerated Oxidation",
            "Enriched Atmosphere"
          ],
          "zh": [
            "加速氧化",
            "富氧環境"
          ]
        },
        "definition": {
          "en": "Intensify a process by supplying a more reactive agent — enriching the air with oxygen, using pure oxygen, or moving on to ozone or ionized oxygen. More broadly, drive a system harder with a stronger, more aggressive stressor to make it react faster or reveal its limits.",
          "zh": "用更活潑的作用劑來強化一個過程——例如把空氣富氧化、改用純氧,再進一步用臭氧或離子化氧。更廣義地說,就是用更強、更激進的壓力源去推逼系統,使它反應更快或顯露極限。"
        },
        "subPrinciples": [
          {
            "en": "Replace common air with oxygen-enriched air.",
            "zh": "以富氧空氣取代一般空氣。"
          },
          {
            "en": "Replace enriched air with pure oxygen.",
            "zh": "以純氧取代富氧空氣。"
          },
          {
            "en": "Expose air or oxygen to ionizing radiation, or use ionized oxygen; go further to ozone.",
            "zh": "以游離輻射照射空氣或氧氣,或使用離子化氧;更進一步改用臭氧。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Bellows and blast in smelting",
              "zh": "冶煉中的風箱與鼓風"
            },
            "body": {
              "en": "Ancient smiths pumped bellows to force extra air into the forge or furnace; the added oxygen raised the combustion temperature enough to smelt ore and work metal. Feeding more oxygen to the fire is the oldest form of enriching the reacting atmosphere.",
              "zh": "古代工匠用風箱把額外的空氣鼓入爐火;多出來的氧氣把燃燒溫度拉高到足以冶煉礦石、鍛打金屬。給爐火供給更多氧氣,正是最古老的富氧化作法。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Basic oxygen steelmaking",
              "zh": "鹼性氧氣煉鋼"
            },
            "body": {
              "en": "A water-cooled lance blows high-purity oxygen onto molten pig iron, rapidly oxidizing away carbon and other impurities in about 20 minutes to make steel. Switching from air to pure oxygen is exactly the escalation the principle describes, and it makes over half the world's steel.",
              "zh": "水冷噴槍把高純度氧氣吹到熔融生鐵上,約 20 分鐘內就快速氧化掉碳與其他雜質而煉成鋼。從空氣升級到純氧,正是本原則所描述的強化手法,全球逾半數的鋼都這樣生產。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Basic_oxygen_steelmaking"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Oxy-fuel cutting torch",
              "zh": "氧燃料切割炬"
            },
            "body": {
              "en": "An oxy-acetylene torch preheats steel, then blasts a jet of pure oxygen that oxidizes the iron and blows the molten oxide away, cutting through thick plate. The pure-oxygen stream is what turns a hot flame into a cutting tool.",
              "zh": "氧乙炔切割炬先預熱鋼材,再噴出一股純氧,使鐵氧化並把熔融氧化物吹走,切穿厚板。正是這股純氧,把高溫火焰變成了切割工具。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Hydrogen peroxide disinfection",
              "zh": "過氧化氫消毒"
            },
            "body": {
              "en": "Hydrogen peroxide poured on a wound or used to treat water is a strong oxidant that tears apart the cell walls of microbes, killing them. The disinfecting power is the oxidizer aggressively attacking organic matter.",
              "zh": "倒在傷口上或用於水處理的過氧化氫是一種強氧化劑,會破壞微生物的細胞壁而將其殺死。消毒力就來自氧化劑對有機物的猛烈攻擊。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Oxygen bleach and ozone water treatment",
              "zh": "氧系漂白劑與臭氧水處理"
            },
            "body": {
              "en": "Oxygen (percarbonate) bleach releases active oxygen to break down laundry stains, and municipal plants bubble ozone through water to oxidize pathogens and contaminants. Both step up from ordinary air to a much stronger oxidizer to finish the job.",
              "zh": "氧系(過碳酸鈉)漂白劑釋出活性氧來分解衣物污漬,自來水廠則把臭氧通入水中氧化病原與污染物。兩者都從一般空氣升級到強得多的氧化劑來完成任務。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Bank regulatory stress tests",
              "zh": "銀行監理壓力測試"
            },
            "body": {
              "en": "Regulators subject banks to deliberately severe hypothetical scenarios — deep recessions, market crashes — to expose weak capital positions before a real crisis does. Applying an intensified, worst-case stressor to surface hidden fragility is the management version of using a stronger oxidant.",
              "zh": "監理機關讓銀行面對刻意設計的嚴苛假想情境——深度衰退、市場崩盤——以在真正危機發生前,揭露脆弱的資本狀況。用加劇的最壞情境去逼出隱藏的脆弱,正是把「用更強氧化劑」搬到管理上的版本。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Chaos engineering",
              "zh": "混沌工程"
            },
            "body": {
              "en": "Netflix's Chaos Monkey deliberately kills servers in live production so teams are forced to build systems that survive failure. Injecting a strong, aggressive stressor on purpose accelerates the discovery of weaknesses, the software counterpart of an intensified oxidizing attack.",
              "zh": "Netflix 的 Chaos Monkey 會在正式環境中刻意關掉伺服器,逼團隊打造能撐過故障的系統。故意注入強烈、激進的壓力源來加速找出弱點,正是「加劇氧化攻擊」在軟體上的對應。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Chaos_engineering"
          },
          {
            "domain": "software",
            "title": {
              "en": "Fuzz testing",
              "zh": "模糊測試"
            },
            "body": {
              "en": "Fuzzers bombard a program with huge volumes of malformed and random inputs to rapidly trigger crashes and security bugs that normal testing misses. The aggressive, high-intensity input stream is a strong stressor that oxidizes the code's hidden defects out into the open.",
              "zh": "模糊測試工具用大量畸形與隨機輸入猛轟程式,快速觸發一般測試漏掉的當機與安全漏洞。這股激進而高強度的輸入流,就是一種強壓力源,把程式碼中隱藏的缺陷「氧化」出來。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Adversarial training",
              "zh": "對抗訓練"
            },
            "body": {
              "en": "To harden a model, adversarial training generates worst-case perturbed inputs from a strong attacker and trains on them, so the model learns to withstand the hardest cases. A stronger adversary acts like a stronger oxidant — the fiercer the attack during training, the tougher the model becomes.",
              "zh": "為了讓模型更堅固,對抗訓練會用強力攻擊者產生最壞情況的擾動輸入並拿來訓練,使模型學會抵禦最難的案例。更強的對手就像更強的氧化劑——訓練時攻擊越猛,模型就越耐打。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Red-teaming language models",
              "zh": "語言模型的紅隊測試"
            },
            "body": {
              "en": "Red teams, increasingly aided by automated adversarial attackers, hammer a language model with aggressive, adversarial prompts to surface harmful or unsafe outputs before release. The deliberately hostile probing is a strong stressor applied to force failure modes into view.",
              "zh": "紅隊(越來越常搭配自動化的對抗攻擊者)用激進的對抗提示猛攻語言模型,在發布前逼出有害或不安全的輸出。這種刻意帶敵意的探測,就是施加強壓力源,把失效模式逼現出來。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Hard-negative mining",
              "zh": "困難負樣本挖掘"
            },
            "body": {
              "en": "Instead of training on easy examples, hard-negative mining selects the most confusing, difficult samples that sit near the decision boundary, concentrating the model's effort where it learns most. Feeding the model the hardest cases is a more potent training stressor that sharpens it faster.",
              "zh": "困難負樣本挖掘不拿簡單樣本訓練,而是挑出最容易混淆、落在決策邊界附近的難樣本,把模型的學習集中在收穫最大之處。餵給模型最難的案例,是一種更強效的訓練壓力,能讓它更快變得銳利。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Basic oxygen steelmaking",
            "url": "https://en.wikipedia.org/wiki/Basic_oxygen_steelmaking"
          },
          {
            "label": "Wikipedia — Chaos engineering",
            "url": "https://en.wikipedia.org/wiki/Chaos_engineering"
          }
        ],
        "group": "matter"
      },
      {
        "id": 39,
        "slug": "inert-atmosphere",
        "name": {
          "en": "Inert Atmosphere",
          "zh": "惰性環境"
        },
        "aliases": {
          "en": [
            "Inert Environment",
            "Inert Gas"
          ],
          "zh": [
            "惰性氣氛",
            "鈍性環境"
          ]
        },
        "definition": {
          "en": "Replace the normal, reactive surroundings with an inert one so that unwanted reactions cannot happen, or add neutral, inert elements to a system to protect or stabilize it. Isolation from the ordinary environment keeps a process safe and controlled.",
          "zh": "用惰性的環境取代正常、會起反應的環境,讓不想要的反應無從發生;或在系統中加入中性、惰性的成分來保護或穩定它。與一般環境隔離,可讓過程保持安全而受控。"
        },
        "subPrinciples": [
          {
            "en": "Replace a normal environment with an inert one.",
            "zh": "以惰性環境取代正常環境。"
          },
          {
            "en": "Add neutral parts or inert additives to an object.",
            "zh": "在物體中加入中性零件或惰性添加物。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Hermetic underground grain pits",
              "zh": "密封的地下穀窖"
            },
            "body": {
              "en": "From Neolithic times, farmers stored grain in sealed underground pits where the grain's own respiration used up the oxygen and filled the space with carbon dioxide. The self-made inert atmosphere suffocated insects and moulds, preserving the harvest for months.",
              "zh": "從新石器時代起,農人把穀物存放在密封的地下窖中,穀物自身的呼吸耗盡氧氣、讓空間充滿二氧化碳。這種自然形成的惰性氣氛悶死了昆蟲與黴菌,使收成保存數月。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Inert-gas shielding in welding",
              "zh": "焊接的惰性氣體保護"
            },
            "body": {
              "en": "In TIG and MIG welding, a stream of argon blankets the molten weld pool so oxygen and nitrogen from the air cannot reach it and cause porosity or oxidation. Replacing ordinary air with an inert gas keeps the weld clean and strong.",
              "zh": "在 TIG 與 MIG 焊接中,一股氬氣覆蓋熔池,使空氣中的氧與氮無法接觸到它而造成氣孔或氧化。用惰性氣體取代一般空氣,讓焊道保持乾淨而堅固。"
            }
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Argon-filled incandescent bulb",
              "zh": "充氬的白熾燈泡"
            },
            "body": {
              "en": "Incandescent bulbs are filled with argon or nitrogen rather than air, because the inert gas stops the white-hot tungsten filament from oxidizing and slows its evaporation, so it lasts months instead of minutes. The bulb works only inside a protective inert environment.",
              "zh": "白熾燈泡填充的是氬氣或氮氣而非空氣,因為惰性氣體能阻止白熱的鎢絲氧化、並減緩其蒸發,讓壽命從幾分鐘延長到數月。燈泡只有在這種保護性的惰性環境中才能運作。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Nitrogen-flushed snack bags",
              "zh": "充氮的零食包裝"
            },
            "body": {
              "en": "Potato-chip bags are flushed with nitrogen to push oxygen below 3%, which stops the oils going rancid and cushions the fragile chips. Swapping the air for an inert gas both preserves freshness and protects the contents.",
              "zh": "洋芋片包裝會充入氮氣,把氧含量壓到 3% 以下,既防止油脂酸敗,也緩衝了易碎的洋芋片。用惰性氣體換掉空氣,同時保鮮又保護內容物。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Modified_atmosphere"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Inert-gas wine preservation",
              "zh": "惰性氣體保存葡萄酒"
            },
            "body": {
              "en": "Wine savers spray a layer of argon or nitrogen over the surface of an opened bottle; being heavier than air, the inert gas sits on the wine and keeps oxygen away so it does not oxidize and spoil. It is a household inert-atmosphere trick.",
              "zh": "葡萄酒保鮮噴劑會在開瓶後的酒面上噴一層氬氣或氮氣;這些比空氣重的惰性氣體覆在酒上,隔絕氧氣,使酒不致氧化變質。這是家庭版的惰性環境妙招。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Inert fillers in tablets and detergents",
              "zh": "藥錠與洗劑中的惰性填料"
            },
            "body": {
              "en": "A pill's tiny active dose is bulked out with inert excipients like cellulose or lactose so it can be handled and swallowed, and powdered detergents use inert fillers to add volume. Neutral additives that take no part in the reaction embody the second sub-principle.",
              "zh": "藥錠中極少量的有效成分,靠纖維素、乳糖等惰性賦形劑撐出體積,才方便拿取與吞服;粉狀洗劑也用惰性填料來增量。這些不參與反應的中性添加物,正體現了第二條子原則。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Fintech regulatory sandbox",
              "zh": "金融科技監理沙盒"
            },
            "body": {
              "en": "The UK FCA's regulatory sandbox lets firms test innovative financial products with real customers on a small scale, shielded by waivers and 'no enforcement action' letters from the full weight of the rules. The protected, controlled environment is a business inert atmosphere for safe experimentation.",
              "zh": "英國 FCA 的監理沙盒讓業者以小規模、對真實顧客測試創新金融產品,並以豁免與「不採取執法行動」函,擋開完整法規的壓力。這個受保護、受控的環境,就是供安全實驗用的商業版惰性環境。"
            },
            "sourceUrl": "https://www.fca.org.uk/firms/innovation/regulatory-sandbox"
          },
          {
            "domain": "software",
            "title": {
              "en": "Sandboxing and containers",
              "zh": "沙箱與容器"
            },
            "body": {
              "en": "Untrusted code is run inside a sandbox — a container, virtual machine, or user-space kernel like gVisor — that walls it off from the host's filesystem and network. Placing the process in an isolated, inert environment means even malicious code cannot react with the wider system.",
              "zh": "不受信任的程式碼會在沙箱中執行——容器、虛擬機,或像 gVisor 這類使用者空間核心——把它與主機的檔案系統和網路隔開。把行程放進隔離的惰性環境,即使是惡意程式碼也無法對外部系統起作用。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Air-gapped and staging environments",
              "zh": "氣隙與預備環境"
            },
            "body": {
              "en": "Critical systems are air-gapped from any network, and risky changes are first tried in a staging environment that mirrors production but cannot touch live data. Both wrap the work in an isolated space where a mistake cannot spread to the real system.",
              "zh": "關鍵系統會與任何網路做氣隙隔離,而有風險的變更會先在鏡像正式環境、卻碰不到正式資料的預備環境試行。兩者都把作業包在隔離空間裡,讓錯誤無法擴散到真正的系統。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Sandboxed agent code execution",
              "zh": "沙箱化的代理程式碼執行"
            },
            "body": {
              "en": "AI agents that write and run code do so inside isolated microVMs or user-space kernels (Firecracker, gVisor), with default-deny filesystem and network access, so attacker-influenced code cannot reach the host. The agent acts only inside an inert, contained environment.",
              "zh": "會撰寫並執行程式碼的 AI 代理,是在隔離的微型虛擬機或使用者空間核心(Firecracker、gVisor)中運作,預設拒絕檔案與網路存取,使受攻擊者影響的程式碼碰不到主機。代理只在惰性、受封閉的環境中行動。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Differential privacy noise",
              "zh": "差分隱私雜訊"
            },
            "body": {
              "en": "Differential privacy adds carefully calibrated random noise to data or gradients so that no single individual's record can be recovered from a model's outputs. The neutral, inert noise is an additive that neutralizes privacy leakage without changing the useful signal, mirroring the second sub-principle.",
              "zh": "差分隱私在資料或梯度中加入精心校準的隨機雜訊,使模型輸出無法還原出任何單一個體的紀錄。這種中性、惰性的雜訊是一種添加物,在不改變有用訊號的情況下,消解隱私外洩,正呼應第二條子原則。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Modified atmosphere",
            "url": "https://en.wikipedia.org/wiki/Modified_atmosphere"
          },
          {
            "label": "UK FCA — Regulatory Sandbox",
            "url": "https://www.fca.org.uk/firms/innovation/regulatory-sandbox"
          }
        ],
        "group": "matter"
      },
      {
        "id": 40,
        "slug": "composite-materials",
        "name": {
          "en": "Composite Materials",
          "zh": "複合材料"
        },
        "aliases": {
          "en": [
            "Composites",
            "Composite Structures"
          ],
          "zh": [
            "複合材質",
            "合成材料"
          ]
        },
        "definition": {
          "en": "Change from a uniform material to a composite one, combining two or more constituents with different properties so the whole outperforms any single part. Each ingredient contributes what it is best at — strength, lightness, flexibility — and their weaknesses cancel out.",
          "zh": "從均質材料改為複合材料,把兩種以上性質不同的成分結合起來,使整體勝過任何單一部分。每種成分貢獻它最擅長的特性——強度、輕量、彈性——彼此的弱點則互相抵消。"
        },
        "subPrinciples": [
          {
            "en": "Change from uniform to composite (multiple) materials.",
            "zh": "從均質材料改為複合(多種)材料。"
          }
        ],
        "examples": [
          {
            "domain": "ancient",
            "title": {
              "en": "Composite bow",
              "zh": "複合弓"
            },
            "body": {
              "en": "As early as the 2nd millennium BCE, bowyers laminated horn on the belly, wood in the core, and sinew on the back, because horn resists compression and sinew resists tension. The composite stores far more energy in a short, powerful bow than any single material could.",
              "zh": "早在西元前二千年,製弓匠就把角貼在弓腹、木材作弓芯、筋腱貼在弓背,因為角耐壓縮、筋耐拉伸。這種複合結構讓一把短而強勁的弓,儲存遠比任何單一材料更多的能量。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Composite_bow"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Reinforced concrete",
              "zh": "鋼筋混凝土"
            },
            "body": {
              "en": "Concrete is strong in compression but weak in tension, so steel reinforcing bars are cast into it to carry the tensile loads. The composite handles both compression and tension, which neither material could do well alone.",
              "zh": "混凝土耐壓卻不耐拉,因此把鋼筋澆築其中來承受拉力。這種複合材料同時應付壓力與拉力,而這是任一材料單獨都做不好的。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Composite_material"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Carbon-fiber-reinforced polymer",
              "zh": "碳纖維強化聚合物"
            },
            "body": {
              "en": "Carbon fibers embedded in a polymer matrix give an extraordinary strength-to-weight ratio, which is why the Boeing 787 and Airbus A350 build wings and fuselage from it. The fibers carry load while the resin binds and shapes them — a division of labor between constituents.",
              "zh": "嵌在聚合物基材中的碳纖維,提供極高的強度重量比,這正是波音 787 與空中巴士 A350 用它製造機翼與機身的原因。纖維承載力量、樹脂則黏合並定型——這是成分之間的分工。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Composite_material"
          },
          {
            "domain": "mechanical",
            "title": {
              "en": "Plywood",
              "zh": "合板"
            },
            "body": {
              "en": "Plywood glues thin wood veneers together with their grain rotated at right angles between layers, so weaknesses in one direction are covered by strength in another. Layering the same material at different orientations makes a board that is stronger and less prone to warping than solid wood.",
              "zh": "合板把薄木單板層層黏合,層與層之間的木紋相互垂直,使某一方向的弱點被另一方向的強度補上。把同一材料以不同方向疊層,做出比實木更強、更不易翹曲的板材。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Composite_material"
          },
          {
            "domain": "daily",
            "title": {
              "en": "Composite sports equipment",
              "zh": "複合材料運動器材"
            },
            "body": {
              "en": "Skis, tennis rackets, golf-club shafts, and boat hulls are built from fiberglass and carbon composites that pair stiff fibers with a light resin. Combining dissimilar materials gives gear that is light, strong, and springy at once.",
              "zh": "滑雪板、網球拍、高爾夫球桿身與船殼,都用玻璃纖維與碳纖維複合材料製成,把剛硬的纖維配上輕巧的樹脂。結合性質不同的材料,做出同時輕、強又有彈性的器材。"
            }
          },
          {
            "domain": "daily",
            "title": {
              "en": "Multi-layer laminates: GORE-TEX and cookware",
              "zh": "多層貼合:GORE-TEX 與炊具"
            },
            "body": {
              "en": "GORE-TEX bonds a waterproof-breathable membrane between fabric layers, and non-stick pans layer a slick coating over an aluminium or steel base. Each layer supplies one property the others lack, so the finished product does several jobs at once.",
              "zh": "GORE-TEX 把防水透氣膜貼合在布料層之間,不沾鍋則在鋁或鋼底上鍍一層滑面塗層。每一層供給其他層所缺的一種特性,使成品同時勝任多項功能。"
            }
          },
          {
            "domain": "business",
            "title": {
              "en": "Diversified investment portfolio",
              "zh": "多元分散的投資組合"
            },
            "body": {
              "en": "A portfolio blends assets with uncorrelated risks — stocks, bonds, commodities — so that when one falls another holds, giving better risk-adjusted returns than any single holding. Combining dissimilar 'constituents' into one structure is the finance analogue of a composite material.",
              "zh": "投資組合把風險不相關的資產——股票、債券、大宗商品——混在一起,使某項下跌時另一項撐住,得到比任何單一標的更好的風險調整後報酬。把性質不同的「成分」結合成一個結構,正是複合材料在金融上的對應。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Polyglot microservices and persistence",
              "zh": "多語言微服務與多元儲存"
            },
            "body": {
              "en": "A system may write each service in the language best suited to it and use polyglot persistence — a relational database, a document store, and a cache side by side — each chosen for the job it does best. The application is a composite of specialized parts rather than one uniform stack.",
              "zh": "一個系統可以用最合適的語言撰寫各個服務,並採用多元儲存——關聯式資料庫、文件資料庫與快取並存——每項都為它最擅長的工作而選。整個應用是由專職零件組成的複合體,而非單一均質的技術堆疊。"
            }
          },
          {
            "domain": "software",
            "title": {
              "en": "Hybrid cloud",
              "zh": "混合雲"
            },
            "body": {
              "en": "A hybrid cloud combines public cloud for elastic scale, private infrastructure for sensitive data, and sometimes edge nodes for low latency into one platform. Each environment contributes a strength the others lack, exactly as a composite blends materials.",
              "zh": "混合雲把提供彈性擴充的公有雲、存放敏感資料的私有基礎設施,有時再加上降低延遲的邊緣節點,整合成單一平台。每種環境貢獻其他所缺的一項優勢,正如複合材料混合各種材料。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Ensemble learning",
              "zh": "整體學習(ensemble)"
            },
            "body": {
              "en": "Ensembles such as random forests and gradient boosting combine many diverse weak learners, averaging or stacking their outputs into a predictor stronger than any single model. Blending dissimilar components to beat any one of them is the composite principle applied to models.",
              "zh": "隨機森林、梯度提升等整體方法,把許多多樣的弱學習器結合起來,以平均或堆疊其輸出,組成比任何單一模型更強的預測器。混合性質不同的成分以勝過其中任一個,正是複合原則用在模型上。"
            }
          },
          {
            "domain": "ai",
            "title": {
              "en": "Mixture of experts",
              "zh": "混合專家(MoE)"
            },
            "body": {
              "en": "A mixture-of-experts layer replaces one big feed-forward network with many specialized expert subnetworks plus a router that sends each token to just a few of them. Combining specialized parts into one model — used in the largest transformers — lets total capacity grow without proportional compute.",
              "zh": "混合專家層用許多專職的專家子網路加上一個路由器取代單一的大型前饋網路,路由器只把每個 token 送給其中少數幾個專家。把專職零件組成單一模型(用於最大型的 transformer),讓總容量增長而不必等比增加運算。"
            },
            "sourceUrl": "https://en.wikipedia.org/wiki/Mixture_of_experts"
          },
          {
            "domain": "ai",
            "title": {
              "en": "Multimodal models",
              "zh": "多模態模型"
            },
            "body": {
              "en": "Multimodal models like CLIP and GPT-4V combine a vision encoder with a language model so one system can reason over images and text together. Fusing components built for different modalities into a single model is a composite in the space of learned representations.",
              "zh": "像 CLIP 與 GPT-4V 這類多模態模型,把視覺編碼器與語言模型結合,使單一系統能同時對影像與文字進行推理。把為不同模態打造的元件融合成單一模型,是表徵空間中的複合材料。"
            }
          }
        ],
        "sources": [
          {
            "label": "TRIZ40 — 40 Inventive Principles",
            "url": "https://www.triz40.com/aff_Principles_TRIZ.php"
          },
          {
            "label": "Wikipedia — Composite material",
            "url": "https://en.wikipedia.org/wiki/Composite_material"
          },
          {
            "label": "Wikipedia — Composite bow",
            "url": "https://en.wikipedia.org/wiki/Composite_bow"
          },
          {
            "label": "Wikipedia — Mixture of experts",
            "url": "https://en.wikipedia.org/wiki/Mixture_of_experts"
          }
        ],
        "group": "structure"
      }
    ]
  },
  {
    "slug": "cases",
    "layout": "cases",
    "icon": "explore",
    "title": {
      "en": "Cases Across Eras",
      "zh": "跨時代案例"
    },
    "subtitle": {
      "en": "Every case on this site in one stream, from ancient crafts to AI. Filter by domain or search.",
      "zh": "全站案例一次攤開,從古代工藝到 AI。可依領域篩選或搜尋。"
    },
    "domains": [
      {
        "key": "ancient",
        "en": "Ancient & Traditional",
        "zh": "古代與傳統",
        "icon": "account_balance"
      },
      {
        "key": "mechanical",
        "en": "Mechanical & Manufacturing",
        "zh": "機械與製造",
        "icon": "precision_manufacturing"
      },
      {
        "key": "daily",
        "en": "Everyday Life",
        "zh": "日常生活",
        "icon": "coffee"
      },
      {
        "key": "business",
        "en": "Business & Management",
        "zh": "商業與管理",
        "icon": "storefront"
      },
      {
        "key": "software",
        "en": "Software & IT",
        "zh": "軟體與資訊",
        "icon": "terminal"
      },
      {
        "key": "ai",
        "en": "AI & Frontier Tech",
        "zh": "AI 與前沿科技",
        "icon": "neurology"
      }
    ]
  },
  {
    "slug": "history",
    "layout": "timeline",
    "icon": "history_edu",
    "title": {
      "en": "History",
      "zh": "發展史"
    },
    "subtitle": {
      "en": "Genrich Altshuller and the improbable journey of TRIZ — from a navy patent office and the Gulag to global engineering practice.",
      "zh": "阿舒勒與 TRIZ 的傳奇旅程——從海軍專利局、古拉格勞改營,到全球工程界的方法論。"
    },
    "events": [
      {
        "date": "1926",
        "title": {
          "en": "Birth in Tashkent",
          "zh": "生於塔什干"
        },
        "body": {
          "en": "Genrikh Saulovich Altshuller is born on 15 October 1926 in Tashkent, in the Uzbek Soviet Socialist Republic, and grows up mostly in Baku, Azerbaijan. He is the future creator of TRIZ, the Theory of Inventive Problem Solving.",
          "zh": "1926 年 10 月 15 日,根里希·薩烏洛維奇·阿奇舒勒(Genrikh Altshuller)出生於烏茲別克蘇維埃社會主義共和國的塔什干,童年多半在亞塞拜然的巴庫度過。他日後創立了 TRIZ(萃思),即發明問題解決理論。"
        }
      },
      {
        "date": "1943",
        "title": {
          "en": "First author's certificate as a teenager",
          "zh": "少年時期取得第一張發明證書"
        },
        "body": {
          "en": "While still a secondary-school student, at about age 17, Altshuller receives his first Soviet author's certificate (patent) for an underwater diving apparatus. His early inventing convinces him that creativity should be teachable rather than a matter of luck.",
          "zh": "阿奇舒勒還在念中學、約 17 歲時,便以一項水下潛水裝置取得他人生第一張蘇聯發明證書(專利)。這段少年發明經驗讓他相信:創造力應該是可以傳授的,而非只能靠運氣。"
        }
      },
      {
        "date": "1946",
        "title": {
          "en": "Working in a naval patent office",
          "zh": "進入海軍專利部門"
        },
        "body": {
          "en": "Around age 20 Altshuller is assigned to the patent department of the Caspian Sea military flotilla, where inventors come to him for help. Unable to find a systematic method for inventing, he begins studying large numbers of patents to look for repeating patterns behind strong inventions.",
          "zh": "約莫 20 歲時,阿奇舒勒被派往裏海艦隊的專利部門,發明人紛紛來找他協助。由於遍尋不著一套系統化的發明方法,他開始大量研究專利,想找出優秀發明背後反覆出現的規律。"
        }
      },
      {
        "date": "1948",
        "title": {
          "en": "Letter to Stalin",
          "zh": "上書史達林"
        },
        "body": {
          "en": "In December 1948 Altshuller writes a letter addressed personally to Stalin, criticising the chaotic and unscientific way the USSR handled invention and arguing that a teachable theory of inventing could transform Soviet technology. The letter later becomes the pretext for his arrest.",
          "zh": "1948 年 12 月,阿奇舒勒寫了一封直接呈給史達林的信,批評蘇聯處理發明的方式混亂而不科學,並主張一套可傳授的發明理論能徹底改造蘇聯技術。這封信後來成為他被捕的藉口。"
        }
      },
      {
        "date": "1950",
        "title": {
          "en": "Arrest and the Vorkuta Gulag",
          "zh": "被捕入沃爾庫塔勞改營"
        },
        "body": {
          "en": "In 1950 Altshuller and his colleague Rafael Shapiro are arrested and charged with \"inventor's sabotage.\" He is sentenced to 25 years of hard labour and sent to the Vorkuta Gulag in the Arctic. Even in the camp he keeps interviewing fellow prisoners who are scientists and refining his ideas.",
          "zh": "1950 年,阿奇舒勒與同事沙皮羅(Rafael Shapiro)被捕,罪名是「發明破壞」。他被判處 25 年苦役,送往北極圈的沃爾庫塔勞改營。即使身陷囹圄,他仍持續向同為囚犯的科學家請益,不斷打磨自己的理論。"
        }
      },
      {
        "date": "1954",
        "title": {
          "en": "Release after Stalin's death",
          "zh": "史達林死後獲釋"
        },
        "body": {
          "en": "Following Stalin's death in 1953, Altshuller is released in 1954 and returns to Baku. He resumes his research into the patterns of invention with renewed intensity, now convinced that the method can be turned into a formal theory.",
          "zh": "史達林於 1953 年去世後,阿奇舒勒在 1954 年獲釋,回到巴庫。他更加投入地重拾對發明規律的研究,此時已深信這套方法能發展成一門正式的理論。"
        }
      },
      {
        "date": "1956",
        "title": {
          "en": "First TRIZ paper published",
          "zh": "首篇 TRIZ 論文發表"
        },
        "body": {
          "en": "Altshuller and Shapiro publish \"On the Psychology of Inventive Creativity\" in the journal Voprosy Psikhologii (Issues of Psychology), No. 6, 1956. Challenging the belief that inventions come from random flashes of insight, it is regarded as the official birth of TRIZ.",
          "zh": "阿奇舒勒與沙皮羅在《心理學問題》(Voprosy Psikhologii)期刊 1956 年第 6 期發表〈論發明創造的心理學〉。這篇論文推翻了「發明來自隨機靈光一閃」的觀念,被視為 TRIZ 正式誕生的標誌。"
        }
      },
      {
        "date": "1961",
        "title": {
          "en": "First book: How to Learn to Invent",
          "zh": "首部著作《如何學會發明》"
        },
        "body": {
          "en": "Altshuller publishes his first book, How to Learn to Invent, popularising the idea that inventing follows learnable rules. It presents an early set of inventive principles distilled from his patent analysis.",
          "zh": "阿奇舒勒出版第一本書《如何學會發明》,推廣「發明有規律可循、可以學會」的理念,並提出從專利分析中歸納出的早期發明原則雛形。"
        }
      },
      {
        "date": "1969",
        "title": {
          "en": "The Innovation Algorithm and the 40 Principles",
          "zh": "《發明演算法》與 40 項原則"
        },
        "body": {
          "en": "By around 1969 Altshuller has analysed roughly 40,000 patent abstracts and publishes Algorithm of Invention. From this work come the core tools of classical TRIZ: the 40 Inventive Principles, the 39 engineering parameters, and the Contradiction Matrix.",
          "zh": "到 1969 年前後,阿奇舒勒已分析約四萬件專利摘要,並出版《發明演算法》。古典 TRIZ 的核心工具——40 項發明原則、39 個工程參數與矛盾矩陣——皆源自這批研究。"
        }
      },
      {
        "date": "1971",
        "title": {
          "en": "First school for teaching TRIZ",
          "zh": "第一所 TRIZ 教學機構"
        },
        "body": {
          "en": "In 1971 Altshuller founds the Azerbaijan Public Institute for Inventive Creativity in Baku, the first institution dedicated to teaching TRIZ. A network of volunteer TRIZ schools spreads across the Soviet Union over the following decade.",
          "zh": "1971 年,阿奇舒勒在巴庫創辦「亞塞拜然發明創造公共學院」,這是第一所專門教授 TRIZ 的機構。往後十年間,由志願者經營的 TRIZ 學校在蘇聯各地遍地開花。"
        }
      },
      {
        "date": "1979–1984",
        "title": {
          "en": "Major books mature the theory",
          "zh": "重要著作讓理論成熟"
        },
        "body": {
          "en": "Altshuller publishes Creativity as an Exact Science (1979), which lays out TRIZ as a systematic discipline, and And Suddenly the Inventor Appeared (1984), which teaches the theory to schoolchildren through stories. Together they cement TRIZ as both a rigorous method and a teachable craft.",
          "zh": "阿奇舒勒出版《作為精確科學的創造力》(1979),將 TRIZ 闡述為一套系統化的學科;又出版《於是發明家出現了》(1984),透過故事把理論教給中小學生。兩書共同奠定了 TRIZ 既是嚴謹方法、也是可傳授技藝的地位。"
        }
      },
      {
        "date": "1989",
        "title": {
          "en": "Russian TRIZ Association founded",
          "zh": "俄羅斯 TRIZ 協會成立"
        },
        "body": {
          "en": "In 1989 the TRIZ community formalises itself as the Russian (later International) TRIZ Association, with Altshuller as its first president. The movement now has a formal organisation, conferences, and a growing body of practitioners.",
          "zh": "1989 年,TRIZ 社群正式組成俄羅斯(後為國際)TRIZ 協會,阿奇舒勒出任首任會長。這個運動至此有了正式組織、學術會議,以及日益壯大的實務工作者群體。"
        }
      },
      {
        "date": "1991",
        "title": {
          "en": "TRIZ spreads to the West",
          "zh": "TRIZ 傳向西方"
        },
        "body": {
          "en": "The collapse of the Soviet Union in 1991 lets many TRIZ experts emigrate, carrying the method to the United States, Europe, and East Asia. New organisations such as the Altshuller Institute for TRIZ Studies (Boston, 1995) and companies like Ideation International bring TRIZ to a global audience.",
          "zh": "1991 年蘇聯解體,大批 TRIZ 專家得以移居國外,把這套方法帶往美國、歐洲與東亞。阿奇舒勒 TRIZ 研究學院(1995 年於波士頓成立)等新組織,以及 Ideation International 等公司,把 TRIZ 推向全球。"
        }
      },
      {
        "date": "1998",
        "title": {
          "en": "Death in Petrozavodsk",
          "zh": "於彼得羅扎沃茨克逝世"
        },
        "body": {
          "en": "Having moved to Petrozavodsk in northwestern Russia around 1990, Altshuller dies there on 24 September 1998 from complications of Parkinson's disease. He leaves behind a body of work that has reshaped how engineers think about problem solving.",
          "zh": "阿奇舒勒約於 1990 年遷居俄羅斯西北部的彼得羅扎沃茨克,並於 1998 年 9 月 24 日在當地因帕金森氏症併發症去世。他留下的研究成果,徹底改變了工程師看待問題解決的方式。"
        }
      },
      {
        "date": "2000s–present",
        "title": {
          "en": "Corporate adoption and TRIZ meets AI",
          "zh": "企業採用與 TRIZ 遇上 AI"
        },
        "body": {
          "en": "From the late 1990s onward, corporations adopt TRIZ at scale: Samsung introduces it in 1997–1998 and by 2003 credits it with dozens of new patents. Today TRIZ is combined with software: patent-mining, machine learning over patent databases, and large language models are used to suggest inventive principles and automate contradiction analysis.",
          "zh": "從 1990 年代末起,企業開始大規模採用 TRIZ:三星於 1997–1998 年導入,到 2003 年已將數十項新專利歸功於此。如今 TRIZ 更與軟體結合:專利探勘、對專利資料庫做機器學習,以及用大型語言模型來建議發明原則、自動化矛盾分析,都是新的發展方向。"
        }
      }
    ]
  },
  {
    "slug": "glossary",
    "layout": "glossary",
    "icon": "menu_book",
    "title": {
      "en": "Glossary",
      "zh": "詞彙表"
    },
    "subtitle": {
      "en": "The TRIZ vocabulary beyond the 40 principles: contradictions, ideality, ARIZ, Su-Field analysis and more.",
      "zh": "四十項原則之外的 TRIZ 詞彙:矛盾、理想性、ARIZ、物質-場分析等。"
    },
    "terms": [
      {
        "term": {
          "en": "39 Engineering Parameters",
          "zh": "39 個工程參數"
        },
        "def": {
          "en": "A standardised list of 39 generalised characteristics—weight, speed, strength, ease of manufacture, and so on—used to describe the two sides of a technical contradiction so it can be looked up in the Contradiction Matrix.",
          "zh": "一份標準化的 39 個通用特性清單(重量、速度、強度、製造難易度等),用來描述技術矛盾的兩端,以便在矛盾矩陣中查找對應解法。"
        }
      },
      {
        "term": {
          "en": "40 Inventive Principles",
          "zh": "40 項發明原則"
        },
        "def": {
          "en": "A set of 40 generic strategies—such as Segmentation, Merging, and Prior Action—that describe recurring ways engineers have resolved contradictions in successful inventions. They are the best-known tool of classical TRIZ.",
          "zh": "40 條通用策略(如分割、合併、預先作用等),描述工程師在成功發明中反覆用來化解矛盾的做法,是古典 TRIZ 最廣為人知的工具。"
        }
      },
      {
        "term": {
          "en": "76 Standard Solutions",
          "zh": "76 個標準解"
        },
        "def": {
          "en": "A structured catalogue of 76 typical fixes for Su-Field models—ways to complete an incomplete model, remove a harmful interaction, or improve an existing one. They provide off-the-shelf moves once a problem has been modelled.",
          "zh": "針對物質-場模型的 76 種典型解法所組成的結構化清單——包含補全不完整模型、消除有害交互作用、或改良既有作用等做法。問題一旦完成建模,便能從中直接取用現成的解題手法。"
        }
      },
      {
        "term": {
          "en": "Administrative Contradiction",
          "zh": "管理矛盾"
        },
        "def": {
          "en": "The vague, surface-level statement of a problem—\"we need better results but don't know how\"—that has a goal but no identified technical conflict. TRIZ reframes it into a technical or physical contradiction that can actually be solved.",
          "zh": "指問題最表層、模糊的陳述——「我們需要更好的成果,卻不知如何達成」——只有目標,卻尚未指出具體的技術衝突。TRIZ 會把它重新表述為可真正著手解決的技術矛盾或物理矛盾。"
        }
      },
      {
        "term": {
          "en": "ARIZ",
          "zh": "ARIZ(發明問題解決演算法)"
        },
        "def": {
          "en": "The Algorithm for Inventive Problem Solving, a step-by-step procedure for tackling difficult problems where the right tool is not obvious. It guides the user from a fuzzy problem through contradiction analysis to a solution, and was refined across many versions from 1956 to the 1980s.",
          "zh": "「發明問題解決演算法」,一套針對難題、在解法工具尚不明朗時使用的逐步流程。它引導使用者從模糊的問題,經由矛盾分析,一路推導出解法;自 1956 年至 1980 年代歷經多次改版精進。"
        }
      },
      {
        "term": {
          "en": "Contradiction Matrix",
          "zh": "矛盾矩陣"
        },
        "def": {
          "en": "A 39×39 lookup table whose rows are the parameter to improve and columns the parameter that worsens. Each cell recommends the inventive principles most often used to resolve that particular contradiction.",
          "zh": "一張 39×39 的查詢表,列為「欲改善的參數」、欄為「隨之惡化的參數」。每個格子會列出化解該項矛盾時最常用到的發明原則。"
        }
      },
      {
        "term": {
          "en": "Field",
          "zh": "場"
        },
        "def": {
          "en": "In Su-Field analysis, the form of energy or interaction—mechanical, acoustic, thermal, chemical, electric, magnetic—through which one substance acts on another. Choosing a different field is often the key to an inventive solution.",
          "zh": "在物質-場分析中,指一個物質作用於另一個物質時所憑藉的能量或交互形式——機械、聲、熱、化學、電、磁等。改用不同的場,往往正是找到發明解法的關鍵。"
        }
      },
      {
        "term": {
          "en": "Function Analysis",
          "zh": "功能分析"
        },
        "def": {
          "en": "A method that maps a system as components and the functions they perform on one another, classifying each as useful, harmful, insufficient, or excessive. The resulting model exposes where to trim, improve, or resolve a conflict.",
          "zh": "一種把系統拆解為「元件」及其「彼此執行的功能」的方法,並將每項功能歸類為有用、有害、不足或過度。所得的模型能清楚呈現該在何處裁剪、改良或化解衝突。"
        }
      },
      {
        "term": {
          "en": "Ideal Final Result (IFR)",
          "zh": "理想最終結果(IFR)"
        },
        "def": {
          "en": "An imagined end state in which the required function is delivered by itself, with no machinery, cost, or harm. Describing the IFR first frees the designer from current constraints and points toward the most elegant solution.",
          "zh": "一種設想的終極狀態:所需功能彷彿自行實現,不需任何裝置、成本或有害作用。先描繪出理想最終結果,能讓設計者擺脫現有限制,指向最精巧的解法。"
        }
      },
      {
        "term": {
          "en": "Ideality",
          "zh": "理想性"
        },
        "def": {
          "en": "A measure of a system's value defined as the sum of its useful functions divided by the sum of its costs and harms. TRIZ pushes designs toward ever-higher ideality—more benefit for less cost and fewer side effects.",
          "zh": "衡量系統價值的指標,定義為「有用功能的總和」除以「成本與有害作用的總和」。TRIZ 追求讓設計朝更高的理想性演進——以更低成本、更少副作用換取更多效益。"
        }
      },
      {
        "term": {
          "en": "Levels of Invention",
          "zh": "發明等級(專利五級)"
        },
        "def": {
          "en": "Altshuller's classification of solutions into five levels, from routine tweaks within one specialty (Level 1) up to rare discoveries that open a whole new field of science (Level 5). His analysis found that most patents sit at the lower, more routine levels.",
          "zh": "阿奇舒勒把解法分為五個等級,從單一專業內的例行微調(第 1 級)到罕見、能開創全新科學領域的重大發現(第 5 級)。他的分析發現,絕大多數專利都落在偏低、較例行的等級。"
        }
      },
      {
        "term": {
          "en": "Modelling by Little People (Smart Little People)",
          "zh": "聰明小人法"
        },
        "def": {
          "en": "A creative technique in which the problem zone is imagined as a crowd of tiny people who can be told to behave however the solution needs. Picturing them helps overcome psychological inertia and reveals new arrangements a rigid model would hide.",
          "zh": "一種創意技巧:把問題發生的區域想像成一群可以任意指揮的微小人偶,讓他們照著解法所需的方式行動。透過這樣的具象化,能克服心理慣性,揭示僵固模型會遮蔽掉的新排列方式。"
        }
      },
      {
        "term": {
          "en": "Nine Windows (System Operator)",
          "zh": "九宮格(系統算子)"
        },
        "def": {
          "en": "A 3×3 thinking grid that views a problem across system levels (sub-system, system, super-system) and across time (past, present, future). It counters tunnel vision by prompting the solver to look beyond the object in front of them.",
          "zh": "一個 3×3 的思考格子,從系統層級(子系統、系統、超系統)與時間軸(過去、現在、未來)兩個維度來檢視問題。它促使解題者把眼光放到眼前物件之外,藉此對抗思考的隧道視野。"
        }
      },
      {
        "term": {
          "en": "Physical Contradiction",
          "zh": "物理矛盾"
        },
        "def": {
          "en": "A situation where a single parameter must take two opposite values at once—for example, an aircraft's landing gear must be present (for landing) and absent (for low drag in flight). It is usually resolved with the separation principles.",
          "zh": "指同一個參數必須同時取兩個相反的值——例如飛機的起落架必須存在(降落時)又必須不存在(飛行時以降低阻力)。這類矛盾通常以分離原理來化解。"
        }
      },
      {
        "term": {
          "en": "Psychological Inertia",
          "zh": "心理慣性"
        },
        "def": {
          "en": "The mental habit of framing a problem in familiar, specialist terms and reaching for the usual solution, which blocks people from seeing radically different options. Many TRIZ tools exist specifically to break this inertia.",
          "zh": "指人們習慣用熟悉、專業的框架來看待問題,並直接伸手去拿慣用解法的思維定勢,這會妨礙人看見截然不同的可能性。許多 TRIZ 工具正是為了打破這種慣性而設計。"
        }
      },
      {
        "term": {
          "en": "Resources",
          "zh": "資源"
        },
        "def": {
          "en": "Any substance, field, space, time, or property already present in or around the system that can be put to use at little or no cost. TRIZ prizes solutions that exploit existing resources rather than adding new components.",
          "zh": "指系統內部或周遭已經存在、幾乎不需成本即可加以利用的任何物質、場、空間、時間或特性。TRIZ 特別推崇「善用既有資源」而非「新增元件」的解法。"
        }
      },
      {
        "term": {
          "en": "S-Curve (Technology Evolution)",
          "zh": "S 曲線(技術演化)"
        },
        "def": {
          "en": "The observation that a technical system's performance over time follows an S-shape: slow infancy, rapid growth, then maturity and stagnation. Recognising where a system sits on its S-curve helps predict when to innovate or switch to a new technology.",
          "zh": "一項觀察:技術系統的效能隨時間演變呈 S 形——起步緩慢、快速成長,接著邁向成熟與停滯。辨識系統目前位於 S 曲線的哪個階段,有助於判斷何時該創新、或改採新技術。"
        }
      },
      {
        "term": {
          "en": "Scientific Effects Database",
          "zh": "科學效應知識庫"
        },
        "def": {
          "en": "An organised knowledge base linking functions you want to achieve (to move, to heat, to detect) with the physical, chemical, and geometric effects that can deliver them. It lets a designer borrow effects from outside their own field.",
          "zh": "一個經過整理的知識庫,把「你想達成的功能」(移動、加熱、偵測等)對應到能實現這些功能的物理、化學與幾何效應。它讓設計者得以借用自身專業領域以外的各種效應。"
        }
      },
      {
        "term": {
          "en": "Separation Principles",
          "zh": "分離原理"
        },
        "def": {
          "en": "The main way TRIZ resolves physical contradictions, by separating the conflicting requirements in space, in time, between the parts and the whole, or upon condition. For example, a bicycle chain is rigid across each link yet flexible along its length.",
          "zh": "TRIZ 化解物理矛盾的主要手段,做法是把相互衝突的需求在「空間上、時間上、部分與整體之間、或依條件」加以分離。例如自行車鏈條在每一節上是剛性的,整條卻又是柔性的。"
        }
      },
      {
        "term": {
          "en": "Substance-Field (Su-Field) Analysis",
          "zh": "物質-場分析"
        },
        "def": {
          "en": "A modelling method that represents any function as two substances interacting through a field (mechanical, thermal, electromagnetic, and so on). Incomplete or harmful models reveal exactly what must be added or changed to make the function work well.",
          "zh": "一種建模方法,把任何功能表示為「兩個物質透過某種場(機械、熱、電磁等)產生交互作用」。當模型不完整或含有害作用時,便能精確揭示需要新增或改變什麼,才能讓功能順利運作。"
        }
      },
      {
        "term": {
          "en": "Technical Contradiction",
          "zh": "技術矛盾"
        },
        "def": {
          "en": "A situation where improving one parameter of a system makes another parameter worse—for example, making a part stronger also makes it heavier. TRIZ treats resolving such trade-offs, rather than compromising, as the heart of inventive design.",
          "zh": "當改善系統的某個參數時,另一個參數卻隨之惡化的情況——例如把零件做得更強,重量也跟著增加。TRIZ 認為發明設計的核心,在於「化解」這類取捨,而非折衷妥協。"
        }
      },
      {
        "term": {
          "en": "Trends of Engineering System Evolution",
          "zh": "技術系統演化趨勢"
        },
        "def": {
          "en": "A set of empirical patterns describing how technical systems tend to develop over time—toward increased dynamism, greater use of fields, transition to the micro level, and increased ideality. They are used to forecast a technology's next generation.",
          "zh": "一組經驗性的規律,描述技術系統隨時間演化的傾向——趨於更動態、更多利用場、轉向微觀層次,以及提高理想性等。這些趨勢常用來預測一項技術的下一世代樣貌。"
        }
      },
      {
        "term": {
          "en": "Trimming",
          "zh": "裁剪"
        },
        "def": {
          "en": "Deliberately removing a component and reassigning its useful function to another part, a resource, or the object being acted upon. Trimming lowers cost and complexity while pushing the design toward higher ideality.",
          "zh": "刻意移除某個元件,並把它原本的有用功能改交給其他零件、某項資源、或被作用的物件承擔。裁剪能降低成本與複雜度,同時推動設計朝更高理想性邁進。"
        }
      },
      {
        "term": {
          "en": "TRIZ",
          "zh": "TRIZ(萃思)"
        },
        "def": {
          "en": "A Russian acronym for the Theory of Inventive Problem Solving, developed by Genrikh Altshuller from the study of tens of thousands of patents. It holds that inventive problems and their solutions follow repeating patterns that can be learned and applied deliberately.",
          "zh": "俄文「發明問題解決理論」的縮寫,由阿奇舒勒研究數萬件專利後發展而成。其核心主張是:發明問題與其解法存在可反覆歸納的模式,能夠被學習並刻意運用。"
        }
      }
    ]
  },
  {
    "slug": "flashcards",
    "layout": "flashcards",
    "icon": "style",
    "title": {
      "en": "Flashcards",
      "zh": "翻卡"
    },
    "subtitle": {
      "en": "Name on the front, definition on the back. Shuffle and drill all forty.",
      "zh": "正面是原則名,背面是定義。可洗牌,四十張練到熟。"
    }
  },
  {
    "slug": "quiz",
    "layout": "quiz",
    "icon": "quiz",
    "title": {
      "en": "Quiz",
      "zh": "測驗"
    },
    "subtitle": {
      "en": "Which principle does each real case use? Instant feedback, with explanations.",
      "zh": "每個真實案例用了哪項原則?即時對答並附解說。"
    },
    "questions": [
      {
        "q": {
          "en": "A supermarket sells salad in small single-serving bags instead of one large head of lettuce. Which principle is at work?",
          "zh": "超市把沙拉分裝成一份份的小袋出售,而不是賣一整顆生菜。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Merging",
            "zh": "合併"
          },
          {
            "en": "Segmentation",
            "zh": "分割"
          },
          {
            "en": "Local Quality",
            "zh": "局部品質"
          },
          {
            "en": "Taking Out",
            "zh": "抽取"
          }
        ],
        "answerIndex": 1,
        "explain": {
          "en": "Dividing one bulky item into independent, portion-sized parts is Segmentation. It lets shoppers buy and use exactly the amount they need.",
          "zh": "把一個大件物品分成獨立的、以份為單位的小部分,正是分割原則。消費者因此能只買、只用剛好需要的份量。"
        }
      },
      {
        "q": {
          "en": "A split air conditioner puts the noisy, hot compressor outdoors and keeps only the quiet cooling unit inside the room. Which principle is at work?",
          "zh": "分離式冷氣把吵雜又發熱的壓縮機放到室外,室內只留下安靜的冷卻單元。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Taking Out",
            "zh": "抽取"
          },
          {
            "en": "Segmentation",
            "zh": "分割"
          },
          {
            "en": "Nested Doll",
            "zh": "套疊"
          },
          {
            "en": "Merging",
            "zh": "合併"
          }
        ],
        "answerIndex": 0,
        "explain": {
          "en": "Removing just the disturbing part—the noisy, heat-generating compressor—and placing it elsewhere is Taking Out. The useful cooling stays where it is wanted.",
          "zh": "只把會造成干擾的部分(吵雜又發熱的壓縮機)抽離,移到別處,就是抽取原則。有用的冷卻作用則留在需要它的地方。"
        }
      },
      {
        "q": {
          "en": "A refrigerator has a very cold freezer, a normal fridge section, and a milder crisper drawer for vegetables, all in one appliance. Which principle is at work?",
          "zh": "一台冰箱裡有極冷的冷凍室、一般的冷藏室,以及溫度較和緩、放蔬菜的保鮮抽屜,全在同一台家電中。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Homogeneity",
            "zh": "同質性"
          },
          {
            "en": "Universality",
            "zh": "萬用"
          },
          {
            "en": "Local Quality",
            "zh": "局部品質"
          },
          {
            "en": "Segmentation",
            "zh": "分割"
          }
        ],
        "answerIndex": 2,
        "explain": {
          "en": "Giving different regions of one object different, locally optimal conditions is Local Quality. Each zone is tuned to what the food stored there needs.",
          "zh": "讓同一物件的不同區域各自具備最適合當地的條件,就是局部品質原則。每個區域都針對存放於此的食物需求加以調校。"
        }
      },
      {
        "q": {
          "en": "An ergonomic keyboard is split and angled into an irregular, non-mirror shape so it matches the natural position of the hands. Which principle is at work?",
          "zh": "人體工學鍵盤被切開並傾斜成不規則、非左右對稱的形狀,以貼合雙手的自然擺位。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Asymmetry",
            "zh": "非對稱"
          },
          {
            "en": "Dynamics",
            "zh": "動態化"
          },
          {
            "en": "Spheroidality / Curvature",
            "zh": "曲面化"
          },
          {
            "en": "Local Quality",
            "zh": "局部品質"
          }
        ],
        "answerIndex": 0,
        "explain": {
          "en": "Replacing a symmetrical form with an asymmetrical one that better fits its purpose is Asymmetry. Human hands are not symmetric to the keyboard's centreline, so the shape follows them.",
          "zh": "把對稱的外形改為更貼合用途的非對稱外形,就是非對稱原則。人的雙手相對於鍵盤中線並不對稱,因此外形順著雙手而變。"
        }
      },
      {
        "q": {
          "en": "A combine harvester reaps the crop, threshes the grain, and winnows away the chaff, all in a single pass through the field. Which principle is at work?",
          "zh": "聯合收割機在田裡跑一趟,就同時完成割取作物、脫粒、以及揚去穀殼的工作。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Universality",
            "zh": "萬用"
          },
          {
            "en": "Nested Doll",
            "zh": "套疊"
          },
          {
            "en": "Merging",
            "zh": "合併"
          },
          {
            "en": "Segmentation",
            "zh": "分割"
          }
        ],
        "answerIndex": 2,
        "explain": {
          "en": "Bringing several operations that used to be separate machines together into one continuous process is Merging. Combining them in parallel removes the handling between steps.",
          "zh": "把原本分屬不同機器的多道作業合在一起、串成一個連續流程,就是合併原則。將它們並排整合,省去了各步驟之間的搬運。"
        }
      },
      {
        "q": {
          "en": "A sofa bed serves as a couch during the day and unfolds into a bed at night. Which principle is at work?",
          "zh": "沙發床白天當沙發用,晚上攤開來變成一張床。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Merging",
            "zh": "合併"
          },
          {
            "en": "Universality",
            "zh": "萬用"
          },
          {
            "en": "Nested Doll",
            "zh": "套疊"
          },
          {
            "en": "Local Quality",
            "zh": "局部品質"
          }
        ],
        "answerIndex": 1,
        "explain": {
          "en": "Making one object perform multiple functions so another object becomes unnecessary is Universality. A single piece of furniture does the job of both a couch and a bed.",
          "zh": "讓一個物件身兼多種功能,使另一個物件變得多餘,就是萬用原則。一件家具同時做了沙發與床兩者的工作。"
        }
      },
      {
        "q": {
          "en": "Russian matryoshka dolls each open to reveal a smaller doll nested inside the last. Which principle is at work?",
          "zh": "俄羅斯套娃一個打開後,裡面藏著一個更小的娃娃,層層相套。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Nested Doll",
            "zh": "套疊"
          },
          {
            "en": "Segmentation",
            "zh": "分割"
          },
          {
            "en": "Merging",
            "zh": "合併"
          },
          {
            "en": "Another Dimension",
            "zh": "移至新維度"
          }
        ],
        "answerIndex": 0,
        "explain": {
          "en": "Placing one object inside another, which in turn sits inside a third, is the Nested Doll principle—Altshuller's own namesake example. It saves space when objects are not all in use at once.",
          "zh": "把一個物件放進另一個之中、後者又放進第三個之中,正是套疊原則——這也是阿奇舒勒為此原則命名時所用的原型例子。當物件不必同時使用時,這樣能節省空間。"
        }
      },
      {
        "q": {
          "en": "Reinforced concrete beams are cast with their steel rods pulled into tension in advance, so the finished beam resists sagging under load. Which principle is at work?",
          "zh": "預力混凝土梁在澆置時,先把內部的鋼筋預先拉伸受張,使成品梁在承載時更能抵抗下垂。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Preliminary Action",
            "zh": "預先作用"
          },
          {
            "en": "Beforehand Cushioning",
            "zh": "事先緩衝"
          },
          {
            "en": "Preliminary Anti-action",
            "zh": "預先反作用"
          },
          {
            "en": "Mechanical Vibration",
            "zh": "機械振動"
          }
        ],
        "answerIndex": 2,
        "explain": {
          "en": "Introducing a stress opposite to the harmful one before the load is applied is Preliminary Anti-action. The pre-tension cancels out the tension the load would later create.",
          "zh": "在承載之前,先施加一個與有害應力相反的作用,就是預先反作用原則。預先拉伸產生的張力,正好抵消日後荷重所帶來的張力。"
        }
      },
      {
        "q": {
          "en": "A baker preheats the oven to the target temperature before putting the bread in. Which principle is at work?",
          "zh": "烘焙師在把麵包放進去之前,先把烤箱預熱到目標溫度。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Preliminary Action",
            "zh": "預先作用"
          },
          {
            "en": "Preliminary Anti-action",
            "zh": "預先反作用"
          },
          {
            "en": "Continuity of Useful Action",
            "zh": "連續有效作用"
          },
          {
            "en": "Periodic Action",
            "zh": "週期性作用"
          }
        ],
        "answerIndex": 0,
        "explain": {
          "en": "Carrying out a required action in advance, so it is ready the moment it is needed, is Preliminary Action. The oven is already hot when the bread goes in, so baking starts correctly at once.",
          "zh": "把必要的動作預先做好,讓它在需要的當下已就緒,就是預先作用原則。麵包放入時烤箱已達溫,烘烤便能立刻正確地開始。"
        }
      },
      {
        "q": {
          "en": "Fragile goods are wrapped in bubble wrap before shipping to absorb knocks in transit. Which principle is at work?",
          "zh": "易碎品在寄送前先用氣泡布包起來,以吸收運送途中的碰撞。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Flexible Shells and Thin Films",
            "zh": "撓性殼與薄膜"
          },
          {
            "en": "Beforehand Cushioning",
            "zh": "事先緩衝"
          },
          {
            "en": "Porous Materials",
            "zh": "多孔材料"
          },
          {
            "en": "Pneumatics and Hydraulics",
            "zh": "氣壓與液壓"
          }
        ],
        "answerIndex": 1,
        "explain": {
          "en": "Adding protection in advance to compensate for the relatively low reliability of a fragile object is Beforehand Cushioning. The wrap is placed there before any impact can occur.",
          "zh": "事先加上防護,以彌補易碎物件相對偏低的可靠度,就是事先緩衝原則。氣泡布在任何撞擊發生之前就已包覆到位。"
        }
      },
      {
        "q": {
          "en": "A traffic roundabout replaces a stop-and-go intersection, letting cars flow through without ever fully stopping. Which principle is at work?",
          "zh": "圓環取代了走走停停的十字路口,讓車輛不必完全停下就能通過。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "The Other Way Round",
            "zh": "反向操作"
          },
          {
            "en": "Skipping",
            "zh": "快速作業"
          },
          {
            "en": "Continuity of Useful Action",
            "zh": "連續有效作用"
          },
          {
            "en": "Periodic Action",
            "zh": "週期性作用"
          }
        ],
        "answerIndex": 2,
        "explain": {
          "en": "Keeping the useful action—traffic movement—running without idle interruptions is Continuity of Useful Action. Eliminating the full stops removes the wasted, non-moving intervals.",
          "zh": "讓有用的作用(車流移動)持續進行、不出現閒置中斷,就是連續有效作用原則。去除完全停車的環節,消除了那些浪費掉、車輛不動的空檔。"
        }
      },
      {
        "q": {
          "en": "A factory pipes its waste heat to warm nearby homes instead of venting it to the air. Which principle is at work?",
          "zh": "工廠把原本要排放到空氣中的廢熱,用管線輸送去為附近的住宅供暖。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Blessing in Disguise",
            "zh": "轉害為利"
          },
          {
            "en": "Self-service",
            "zh": "自我服務"
          },
          {
            "en": "Taking Out",
            "zh": "抽取"
          },
          {
            "en": "Discarding and Recovering",
            "zh": "拋棄與再生"
          }
        ],
        "answerIndex": 0,
        "explain": {
          "en": "Turning a harmful or wasted factor into a source of benefit is Blessing in Disguise. Heat that was a disposal problem becomes a useful energy supply.",
          "zh": "把有害或被浪費的因素轉化為效益的來源,就是轉害為利原則。原本是處理難題的廢熱,搖身變成有用的能源供應。"
        }
      },
      {
        "q": {
          "en": "A thermostat measures room temperature and switches the heater on or off to hold the room at a set point. Which principle is at work?",
          "zh": "恆溫器量測室溫,並開關暖氣以把房間維持在設定溫度。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Periodic Action",
            "zh": "週期性作用"
          },
          {
            "en": "Feedback",
            "zh": "回饋"
          },
          {
            "en": "Dynamics",
            "zh": "動態化"
          },
          {
            "en": "Intermediary",
            "zh": "中介物"
          }
        ],
        "answerIndex": 1,
        "explain": {
          "en": "Measuring an output and using it to adjust the process is Feedback. The same idea drives software autoscaling, where measured load decides how many servers run.",
          "zh": "量測輸出結果,並用它來調整過程,就是回饋原則。同樣的概念也驅動了軟體的自動擴縮——由量測到的負載決定要運行多少台伺服器。"
        }
      },
      {
        "q": {
          "en": "A drinking straw has a ribbed section near the top so the rigid tube can bend to any angle you like. Which principle is at work?",
          "zh": "吸管靠近頂端有一段波紋設計,讓原本硬挺的管子可以彎折成你想要的任何角度。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Spheroidality / Curvature",
            "zh": "曲面化"
          },
          {
            "en": "Segmentation",
            "zh": "分割"
          },
          {
            "en": "Dynamics",
            "zh": "動態化"
          },
          {
            "en": "Local Quality",
            "zh": "局部品質"
          }
        ],
        "answerIndex": 2,
        "explain": {
          "en": "Making a rigid object able to move or change shape to suit conditions is Dynamics. The bendable neck lets a single fixed part adapt to many drinking angles.",
          "zh": "讓原本剛性的物件變得能夠移動或改變形狀以適應情境,就是動態化原則。可彎折的頸部使一個固定零件得以適應各種喝飲料的角度。"
        }
      },
      {
        "q": {
          "en": "Ball bearings use rolling spheres between two rings to let a shaft spin with very little friction. Which principle is at work?",
          "zh": "滾珠軸承在兩圈之間放入滾動的圓珠,讓軸能以極小的摩擦轉動。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Spheroidality / Curvature",
            "zh": "曲面化"
          },
          {
            "en": "Mechanical Vibration",
            "zh": "機械振動"
          },
          {
            "en": "Dynamics",
            "zh": "動態化"
          },
          {
            "en": "Homogeneity",
            "zh": "同質性"
          }
        ],
        "answerIndex": 0,
        "explain": {
          "en": "Replacing flat, sliding surfaces with rounded, rolling ones is Spheroidality (Curvature). Rolling spheres turn high sliding friction into much lower rolling friction.",
          "zh": "把平面、滑動的接觸面換成圓形、滾動的接觸面,就是曲面化原則。滾動的圓珠把高的滑動摩擦轉為低得多的滾動摩擦。"
        }
      },
      {
        "q": {
          "en": "An ultrasonic cleaner removes grime from jewellery by shaking it with high-frequency sound waves in a liquid bath. Which principle is at work?",
          "zh": "超音波清洗機把首飾泡在液體中,以高頻聲波使其震動,藉此洗去汙垢。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Periodic Action",
            "zh": "週期性作用"
          },
          {
            "en": "Porous Materials",
            "zh": "多孔材料"
          },
          {
            "en": "Mechanical Vibration",
            "zh": "機械振動"
          },
          {
            "en": "Pneumatics and Hydraulics",
            "zh": "氣壓與液壓"
          }
        ],
        "answerIndex": 2,
        "explain": {
          "en": "Using oscillation—here high-frequency ultrasonic vibration—to accomplish a task is Mechanical Vibration. The rapid shaking dislodges dirt from surfaces a brush could never reach.",
          "zh": "利用振盪(此處為高頻超音波振動)來完成工作,就是機械振動原則。快速震動能鬆脫刷子永遠碰不到的表面上的髒汙。"
        }
      },
      {
        "q": {
          "en": "In a factory, pipes and floor lanes are painted in standard colours—yellow for walkways, red for fire lines—so their purpose is read at a glance. Which principle is at work?",
          "zh": "工廠裡的管線與地面通道漆上標準顏色——黃色代表走道、紅色代表消防線——讓人一眼就能看懂用途。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Copying",
            "zh": "複製"
          },
          {
            "en": "Color Changes",
            "zh": "改變顏色"
          },
          {
            "en": "Local Quality",
            "zh": "局部品質"
          },
          {
            "en": "Homogeneity",
            "zh": "同質性"
          }
        ],
        "answerIndex": 1,
        "explain": {
          "en": "Changing the colour of an object to make information about it easy to see is Color Changes. The coding lets people identify each element's function instantly.",
          "zh": "改變物件的顏色,好讓與它相關的資訊變得一目了然,就是改變顏色原則。這套色彩編碼讓人能立即辨識每個元素的功能。"
        }
      },
      {
        "q": {
          "en": "Trainee pilots practise emergencies in a flight simulator instead of risking a real aircraft. Which principle is at work?",
          "zh": "受訓飛行員在飛行模擬器中演練緊急狀況,而不必拿真飛機冒險。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Copying",
            "zh": "複製"
          },
          {
            "en": "Cheap Short-living Objects",
            "zh": "廉價短壽物品"
          },
          {
            "en": "Intermediary",
            "zh": "中介物"
          },
          {
            "en": "Preliminary Action",
            "zh": "預先作用"
          }
        ],
        "answerIndex": 0,
        "explain": {
          "en": "Using a simulated or virtual copy in place of the real, expensive, or dangerous object is Copying. The simulator reproduces the aircraft's behaviour without the risk or cost of real flight.",
          "zh": "用模擬或虛擬的複製品來取代真實、昂貴或危險的物件,就是複製原則。模擬器重現了飛機的行為,卻沒有真實飛行的風險與成本。"
        }
      },
      {
        "q": {
          "en": "A café serves drinks in disposable paper cups that are used once and thrown away. Which principle is at work?",
          "zh": "咖啡店用一次性的紙杯裝飲料,用完即丟。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Discarding and Recovering",
            "zh": "拋棄與再生"
          },
          {
            "en": "Segmentation",
            "zh": "分割"
          },
          {
            "en": "Cheap Short-living Objects",
            "zh": "廉價短壽物品"
          },
          {
            "en": "Universality",
            "zh": "萬用"
          }
        ],
        "answerIndex": 2,
        "explain": {
          "en": "Replacing one expensive, durable object with many cheap, disposable ones is the Cheap Short-living Objects principle. A low-cost cup that lasts one use avoids the cost of washing and storing ceramic mugs.",
          "zh": "用許多廉價、可丟棄的物品,取代單一昂貴、耐用的物件,就是廉價短壽物品原則。只用一次的低成本紙杯,省去了清洗與存放陶瓷杯的成本。"
        }
      },
      {
        "q": {
          "en": "Surgeons close a wound with dissolvable stitches that the body gradually absorbs, so no removal visit is needed. Which principle is at work?",
          "zh": "外科醫師用可吸收縫線縫合傷口,讓身體慢慢將其分解吸收,不必再回診拆線。這運用了哪項原則?"
        },
        "options": [
          {
            "en": "Phase Transitions",
            "zh": "相變化"
          },
          {
            "en": "Cheap Short-living Objects",
            "zh": "廉價短壽物品"
          },
          {
            "en": "Self-service",
            "zh": "自我服務"
          },
          {
            "en": "Discarding and Recovering",
            "zh": "拋棄與再生"
          }
        ],
        "answerIndex": 3,
        "explain": {
          "en": "Letting a part disappear on its own once it has done its job—here by dissolving into the body—is Discarding and Recovering. The stitch is eliminated exactly when it is no longer needed, without a second procedure.",
          "zh": "讓一個部件在完成任務後自行消失(此處是溶解並被身體吸收),就是拋棄與再生原則。縫線恰好在不再需要時被消除,而且不必再做第二次處置。"
        }
      }
    ]
  },
  {
    "slug": "about",
    "layout": "article",
    "icon": "info",
    "title": {
      "en": "About & Sources",
      "zh": "關於本站"
    },
    "subtitle": {
      "en": "Why this exists, how it was compiled, and what to trust.",
      "zh": "這個站為什麼存在、怎麼整理、哪些內容該怎麼看。"
    },
    "sections": [
      {
        "id": "origin",
        "heading": {
          "en": "Why this site exists",
          "zh": "緣起"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "At the SV–Asia Youth Innovation Leaders Summit (July 19, 2026, National Taiwan University), Chih-Yao Wu — executive director of the Chinese Innovation and Invention Society and a long-time promoter of invention education in Taiwan — gave a talk that mentioned TRIZ and its forty inventive principles. That one mention turned into this rabbit hole: a full bilingual field guide to all forty principles, with cases stretching from ancient crafts to modern AI systems.",
              "zh": "在矽谷亞洲青年創新領袖峰會(2026 年 7 月 19 日,台灣大學)上,長期推動發明教育的中華創新發明學會執行長吳智堯,在演講中提到了 TRIZ 萃思與它的四十項發明原則。那一句話成了這個坑的起點:把四十項原則完整整理成一份雙語圖鑑,案例從古代工藝一路鋪到現代 AI 系統。"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "TRIZ deserves the treatment. Most creativity advice tells you to think outside the box; TRIZ hands you a map of the box, drawn from the patterns of several hundred thousand actual inventions.",
              "zh": "TRIZ 值得這樣被整理。多數創意方法論叫你「跳出框架思考」;TRIZ 則直接給你一張框架的地圖——而且是從數十萬件真實發明的模式中畫出來的。"
            }
          }
        ]
      },
      {
        "id": "what-is-triz",
        "heading": {
          "en": "What is TRIZ?",
          "zh": "什麼是 TRIZ?"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "TRIZ (Russian: Теория решения изобретательских задач, \"Theory of Inventive Problem Solving\") was developed from 1946 onwards by Genrich Altshuller and his colleagues in the Soviet Union. Its core observations: inventive problems contain contradictions (improving one parameter worsens another); the same contradictions recur across industries; and the inventive moves that resolve them recur too. Altshuller distilled forty such moves — the 40 Inventive Principles — and mapped them against 39 engineering parameters in his famous contradiction matrix.",
              "zh": "TRIZ(俄文 Теория решения изобретательских задач,「發明性問題解決理論」)由阿舒勒與同事自 1946 年起在蘇聯發展。核心觀察有三:發明性問題都藏著矛盾(改善一個參數會惡化另一個);相同的矛盾在不同產業反覆出現;化解矛盾的手法也反覆出現。阿舒勒把這些手法提煉成四十項發明原則,並以 39 個工程參數交叉編成著名的矛盾矩陣。"
            }
          },
          {
            "type": "quote",
            "text": {
              "en": "You can wait a hundred years for enlightenment, or you can solve the problem in 15 minutes with these principles. — attributed to Genrich Altshuller",
              "zh": "「你可以等一百年等靈光乍現,也可以用這些原則在十五分鐘內解決問題。」——相傳出自阿舒勒"
            }
          },
          {
            "type": "p",
            "text": {
              "en": "The principles were formulated for mechanical engineering, but they describe something more general: the finite geometry of good solutions. That is why this site deliberately pairs each principle with software, business and AI cases — the domains changed, the moves did not.",
              "zh": "這些原則雖然誕生於機械工程,描述的卻是更普遍的東西:好解法的有限幾何。這也是本站刻意為每項原則配上軟體、商業與 AI 案例的原因——領域變了,手法沒變。"
            }
          }
        ]
      },
      {
        "id": "method",
        "heading": {
          "en": "How this was compiled",
          "zh": "整理方法與資料來源"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "Definitions and sub-principles follow the standard TRIZ literature. Examples come in two kinds: classic textbook cases from the TRIZ tradition, and modern cases (especially software and AI) researched and verified against public sources for this site. Every principle's detail view lists its sources; the raw research notes live in the repository's /research folder.",
              "zh": "各原則的定義與子原則依循標準 TRIZ 文獻。案例分兩類:一類是 TRIZ 傳統中的經典教材案例,另一類是為本站蒐集、並比對公開來源查證過的現代案例(尤其是軟體與 AI 領域)。每項原則的詳情頁都列有來源;原始查證筆記放在 repo 的 /research 資料夾。"
            }
          },
          {
            "type": "ul",
            "items": {
              "en": [
                "Principle names follow common English usage; Chinese names follow translations common in Taiwan's TRIZ community, with alternates listed as aliases.",
                "The four thematic groups (Structure, Process, Matter, System) are this site's own editorial grouping — not an official TRIZ taxonomy.",
                "Software and AI cases marked as structural analogies are interpretations, not claims that the inventors consciously applied TRIZ."
              ],
              "zh": [
                "原則英文名採常見用法;中文名以台灣萃思社群常見譯名為主,其他譯名列為別名。",
                "四個主題分組(結構、程序、物質、系統)是本站自行編排的閱讀分類,並非 TRIZ 官方分類。",
                "標註為結構類比的軟體與 AI 案例屬於詮釋,不代表其發明者有意識地套用了 TRIZ。"
              ]
            }
          }
        ]
      },
      {
        "id": "disclaimer",
        "heading": {
          "en": "Disclaimer",
          "zh": "聲明"
        },
        "blocks": [
          {
            "type": "p",
            "text": {
              "en": "This is an independent educational project. It is not affiliated with any TRIZ association, the summit, or any speaker mentioned. Corrections and better examples are welcome — open an issue on GitHub.",
              "zh": "本站為獨立的教育性專案,與任何 TRIZ 學會、前述峰會或講者皆無隸屬關係。歡迎指正錯誤或提供更好的案例——請到 GitHub 開 issue。"
            }
          }
        ]
      }
    ]
  }
];
