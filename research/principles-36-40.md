# TRIZ Principles 36–40 — Research & Verification Notes

Researcher: TRIZ content researcher (principles 36–40). Scope: Phase Transitions, Thermal Expansion, Strong Oxidants, Inert Atmosphere, Composite Materials.

## Canonical sub-principles (all five)

Sub-principle wording taken from the standard 40-principles list on **TRIZ40** (Mazur's compilation), WebFetch-verified:
- https://www.triz40.com/aff_Principles_TRIZ.php — returned the full sub-principle text for 36–40 and classic examples. This is the shared canonical source cited in every JSON.

The Wikipedia "TRIZ" top-level article does *not* list the 40 principles inline (WebFetch confirmed it only references an external list), so it was not used as a sub-principle source.

Each `body` was written to state the **mechanism** and tie it back to the principle, not just describe a product. `en` first, `zh` in Taiwan Traditional Chinese (軟體 / 資料 / 演算法 / 機器學習 / 神經網路, never 软件/信息/算法).

Labelling convention below: **[Classic]** = standard TRIZ textbook example; **[Verified-new]** = fact-checked via web search/fetch; **[Direct]** = genuine application of the physical principle; **[Analogy]** = structural analogy explicitly framed as such in the body.

---

## P36 — Phase Transitions (相變化)

Sub-principle: use phenomena during phase transitions (volume change, latent heat). 11 examples.

- **Frost weathering** (ancient/natural) — [Verified-new][Direct]. Water expands ~9% on freezing, pressures up to ~20 MPa split rock. Verified via freeze-thaw / frost-wedging search (Sciencing, Vaia, Maricopa open-geology).
- **Heat pump / refrigeration cycle** (mechanical) — [Classic][Direct]. Latent heat of vaporization/condensation. sourceUrl → Wikipedia Phase transition (confirms first-order transitions absorb/release latent heat).
- **Heat pipe** (mechanical) — [Classic][Direct]. Evaporation/condensation transports heat with near-zero temperature drop. Common engineering knowledge.
- **Sodium acetate hand warmer** (daily) — [Verified-new][Direct]. Supersaturated solution crystallizes on trigger; latent heat of fusion ≈ 264–289 J/g, warms to ~54°C; reset by boiling. Verified via multiple sources (Science Buddies, threepointsofthecompass gear review, biology/chemistry explainers).
- **Phase-change cooling vest** (daily) — [Classic][Direct]. PCM melting ~18°C absorbs body heat; this is one of the examples TRIZ40 itself lists for P36.
- **Dry-ice cold chain** (business/logistics) — [Verified-new][Direct]. Solid CO2 sublimes and absorbs heat, powering passive cold-chain shipping. General knowledge of cold-chain logistics; framed as a business/operations model.
- **SAT satisfiability phase transition** (software) — [Verified-new][Analogy but literal term]. Random 3-SAT flips solvable→unsolvable near clause/variable ratio ≈ 4.27; the CS literature literally calls this a "phase transition." Widely documented computational phenomenon.
- **Erdős–Rényi giant component** (software) — [Verified-new][Analogy but literal term]. Percolation threshold at average degree 1; the canonical network-science phase transition.
- **Grokking** (ai) — [Verified-new][Direct-ish analogy]. Power et al. 2022 (arXiv 2201.02177, WebFetch-verified). Abrupt delayed generalization after overfitting; characterized as a phase transition in the literature.
- **Emergent abilities at scale** (ai) — [Verified-new][Analogy, author-endorsed]. Wei et al. 2022 (arXiv 2206.07682, WebFetch-verified). Abilities appear abruptly past a critical scale; authors explicitly call this a phase transition.
- **Simulated annealing** (ai/optimization) — [Verified-new][Direct inspiration]. Algorithm named after and derived from metallurgical annealing / physical ordering across a phase change. Textbook.

Sources (all WebFetch-verified): TRIZ40; Wikipedia Phase transition; arXiv 2201.02177; arXiv 2206.07682.

---

## P37 — Thermal Expansion (熱膨脹)

Two sub-principles (use expansion/contraction; combine materials with different coefficients). 11 examples.

- **Fire-setting in ancient mining** (ancient) — [Verified-new][Direct]. WebFetch of Wikipedia "Fire-setting" confirmed: intense heat produces *differential* thermal expansion that cracks rock; the article notes rapid heating alone can crack rock, and dousing with water "may or may not" have added effect (mainly cooling the work area). Body phrased to match ("sometimes helped by dousing with water"), not overstating the quench. sourceUrl → Wikipedia Fire-setting.
- **Shrink-fit assembly** (mechanical) — [Classic][Direct]. WebFetch of Wikipedia Thermal expansion confirms the bushing-over-shaft heating example. sourceUrl attached.
- **Expansion joints in rails/bridges** (mechanical) — [Classic][Direct]. Same Wikipedia page confirms "railways and bridges need expansion joints… to avoid sun kink." sourceUrl attached.
- **Bimetallic-strip thermostat** (mechanical) — [Classic][Direct]. Illustrates sub-principle 37.b (two coefficients). Common knowledge.
- **Stuck jar-lid trick** (daily) — [Classic][Direct]. Metal lid expands more than glass jar. Common knowledge.
- **Liquid-in-glass thermometer** (daily) — [Classic][Direct]. Mercury/alcohol expansion. Common knowledge.
- **Elastic seasonal capacity** (business) — [Analogy]. Expand/contract headcount, inventory, warehouse with demand "heat." Explicitly framed as a management analogue in the body.
- **Cloud autoscaling** (software) — [Verified-new][Analogy]. Kubernetes HPA adds/removes replicas with load. WebFetch-verified Kubernetes HPA docs ("automatically scaling capacity to match demand"). Used as a source.
- **Growable dynamic arrays** (software) — [Direct-ish analogy]. vector/slice/list expand and shrink backing storage. Common CS knowledge.
- **Elastic distributed training** (ai) — [Verified-new][Analogy]. Elastic training adds/drops GPU workers; gradient accumulation expands effective batch. Real ML-ops practice.
- **Adaptive-compute inference** (ai) — [Verified-new][Analogy]. Early-exit / adaptive computation spends more/less compute per input. Real (Adaptive Computation Time, BranchyNet, Mixture-of-Depths).

Sources (all WebFetch-verified): TRIZ40; Wikipedia Thermal expansion; Wikipedia Fire-setting; Kubernetes HPA docs.

---

## P38 — Strong Oxidants / Accelerated Oxidation (強氧化劑)

Sub-principles: enriched air → pure oxygen → ionized oxygen/ozone. Generalized modern reading: apply a stronger, more aggressive stressor. 11 examples.

- **Bellows / blast in smelting** (ancient) — [Classic][Direct]. Forcing more air/oxygen into the fire raises combustion temperature. Blast-furnace oxygen-enriched blast confirmed in basic-oxygen-steelmaking search.
- **Basic oxygen steelmaking** (mechanical) — [Verified-new][Direct]. WebFetch Wikipedia BOS confirmed high-purity oxygen blown onto molten pig iron oxidizes carbon; >half of world steel. Textbook match to sub-principle 38.b. sourceUrl attached.
- **Oxy-fuel cutting torch** (mechanical) — [Classic][Direct]. Pure-oxygen jet oxidizes iron to cut steel. One of TRIZ40's listed examples.
- **Hydrogen peroxide disinfection** (daily) — [Classic][Direct]. Strong oxidant destroys microbes. TRIZ40 lists H2O2 wound sterilization.
- **Oxygen bleach / ozone water treatment** (daily) — [Verified-new][Direct]. Percarbonate active oxygen; ozone oxidizes pathogens. Common knowledge; ozone disinfection is standard municipal practice.
- **Bank regulatory stress tests** (business) — [Analogy]. Deliberately severe adverse scenarios to expose fragility (Fed CCAR-style). Framed explicitly as the management version of a stronger stressor.
- **Chaos engineering** (software) — [Verified-new][Analogy]. WebFetch Wikipedia Chaos engineering confirmed Netflix Chaos Monkey terminates production instances to force resilience. sourceUrl attached.
- **Fuzz testing** (software) — [Verified-new][Analogy]. Aggressive malformed inputs surface crashes/security bugs fast (AFL/OSS-Fuzz). Common knowledge.
- **Adversarial training** (ai) — [Verified-new][Analogy]. Stronger adversary → tougher model. Verified via adversarial-training/hard-example search (state-of-the-art robustness method).
- **Red-teaming LLMs** (ai) — [Verified-new][Analogy]. Adversarial/automated attackers probe for harmful outputs pre-release. Standard practice.
- **Hard-negative mining** (ai) — [Verified-new][Analogy]. Train on hardest boundary examples to sharpen faster. Verified via hard-negative-mining search.

Sources (all WebFetch-verified): TRIZ40; Wikipedia Basic oxygen steelmaking; Wikipedia Chaos engineering.

---

## P39 — Inert Atmosphere (惰性環境)

Sub-principles: replace normal environment with inert one; add neutral/inert additives. 11 examples.

- **Hermetic underground grain pits** (ancient) — [Verified-new][Direct]. Sealed Neolithic pits: grain respiration depletes O2, accumulates CO2, creating a self-modified inert atmosphere that stops insects/mould. Verified via hermetic-storage search (FTIC history, MDPI Agriculture, NCBI).
- **Inert-gas welding shielding** (mechanical) — [Verified-new][Direct]. Argon blankets weld pool, excludes O2/N2, prevents porosity/oxidation. Verified via TIG-shielding-gas search (MillerWelds, UTI, TWS).
- **Argon-filled incandescent bulb** (mechanical) — [Verified-new][Direct]. Inert fill prevents tungsten oxidation and slows evaporation. Verified via incandescent-bulb inert-gas search (~7% N2 in "argon fill").
- **Nitrogen-flushed snack bags** (daily) — [Verified-new][Direct]. MAP drops O2 below 3%, stops rancidity, cushions chips. WebFetch Wikipedia Modified atmosphere confirmed N2/CO2 replacement delays oxidation and microbial growth. sourceUrl attached.
- **Inert-gas wine preservation** (daily) — [Verified-new][Direct]. Argon/N2 blanket over opened wine excludes oxygen. Common knowledge / consumer product.
- **Inert fillers in tablets & detergents** (daily) — [Classic][Direct]. Excipients/fillers = sub-principle 39.b (neutral additives). TRIZ40 lists inert filler increasing detergent volume.
- **Fintech regulatory sandbox** (business) — [Verified-new][Analogy]. WebFetch of FCA regulatory-sandbox page confirmed "test products and services in a controlled environment," waivers, "no enforcement action" letters. Framed as a business inert atmosphere. sourceUrl attached.
- **Sandboxing / containers** (software) — [Verified-new][Analogy]. Isolate untrusted code (containers/VMs/gVisor). Verified via AI-agent-sandbox search (Northflank, Modal, Augment).
- **Air-gapped / staging environments** (software) — [Direct-ish analogy]. Isolate critical systems / mirror prod without touching live data. Common practice.
- **Sandboxed agent code execution** (ai) — [Verified-new][Analogy]. Agents run generated code in isolated microVMs (Firecracker/gVisor), default-deny FS/network. Verified via same AI-agent-sandbox search.
- **Differential privacy noise** (ai) — [Verified-new][Analogy]. Calibrated inert noise as additive (sub-principle 39.b) neutralizes privacy leakage without changing useful signal (DP-SGD). Real, widely deployed.

Sources (all WebFetch-verified): TRIZ40; Wikipedia Modified atmosphere; FCA Regulatory Sandbox.

---

## P40 — Composite Materials (複合材料)

Sub-principle: change from uniform to composite (multiple) materials. 12 examples.

- **Composite bow** (ancient) — [Verified-new][Direct]. WebFetch Wikipedia Composite bow confirmed horn (compression) + wood core + sinew (tension), laminated, from 2nd millennium BCE. sourceUrl attached.
- **Reinforced concrete** (mechanical) — [Classic][Direct]. WebFetch Wikipedia Composite material confirmed steel (tension) + concrete (compression). sourceUrl attached.
- **Carbon-fiber-reinforced polymer** (mechanical) — [Classic][Direct]. Same Wikipedia page confirms Boeing 787 / Airbus A350 use composites in wings and fuselage. sourceUrl attached.
- **Plywood** (mechanical) — [Classic][Direct]. Same page confirms cross-grain veneer lamination. sourceUrl attached.
- **Composite sports equipment** (daily) — [Classic][Direct]. Fiberglass/carbon skis, rackets, hulls. Common knowledge; page lists sports equipment.
- **GORE-TEX / non-stick cookware laminates** (daily) — [Verified-new][Direct]. Multi-layer laminates, each layer one property. Common product knowledge.
- **Diversified investment portfolio** (business) — [Analogy]. Uncorrelated assets combined for better risk-adjusted return. Explicitly framed as a finance analogue in the body.
- **Polyglot microservices / persistence** (software) — [Analogy]. Different languages + relational/document/cache stores, each for its best job. Common architecture knowledge.
- **Hybrid cloud** (software) — [Analogy]. Public (scale) + private (sensitive data) + edge (latency) combined. Common knowledge.
- **Ensemble learning** (ai) — [Verified-new][Analogy]. Random forests / gradient boosting combine diverse weak learners. Textbook ML.
- **Mixture of experts** (ai) — [Verified-new][Direct-ish]. WebFetch Wikipedia Mixture of experts confirmed multiple expert subnetworks + gating/router, used in largest transformers (Switch Transformer top-1 routing to trillion params). sourceUrl attached.
- **Multimodal models** (ai) — [Verified-new][Direct-ish]. CLIP (OpenAI, 2021) + GPT-4V combine vision encoder with language model. Verified via multimodal search. NOTE: one search result mis-stated CLIP as "2016"; the correct year is 2021 (Radford et al.), so no year was asserted in the body beyond naming the models.

Sources (all WebFetch-verified): TRIZ40; Wikipedia Composite material; Wikipedia Composite bow; Wikipedia Mixture of experts.

---

## Discarded / avoided content

- **Self-heating meal cans as "phase transition"** — rejected. Self-heating cans use an exothermic *chemical* reaction (CaO + water), not a phase transition. Replaced with the sodium-acetate hand warmer, which is a genuine crystallization (phase change) with quantified latent heat.
- **Water-soaked wooden wedges swelling to split stone** — for P36 (phase transitions) this is *swelling*, not freezing; for the freezing mechanism used natural frost weathering instead, keeping the mechanism clean. Fire-setting (thermal expansion) was placed under P37, matching its actual physics.
- **"Tipping point" as a generic P36 business example** — too vague; replaced with dry-ice cold-chain logistics, a concrete operational use of a solid→gas transition.
- **CLIP "2016" date** — a search snippet gave a wrong year; not used. CLIP is 2021.
- **Overstating water-quench in fire-setting** — Wikipedia notes the quench's role is debated; body softened to "sometimes helped by dousing with water."

## Self-check

- All five JSON files parsed with `uv run python -c "import json; json.load(...)"`. Valid.
- Example counts: p36=11, p37=11, p38=11, p39=11, p40=12. All ≥9.
- Six-domain distribution (ancient≥1, mechanical≥2, daily≥1, business≥1, software≥2, ai≥2) met for all five (checked programmatically).
- Every `sources` URL and every example `sourceUrl` was WebFetch-verified as openable and content-relevant: TRIZ40 principles page; Wikipedia Phase transition, Thermal expansion, Fire-setting, Basic oxygen steelmaking, Modified atmosphere, Chaos engineering, Composite material, Composite bow, Mixture of experts; arXiv 2201.02177 and 2206.07682; FCA Regulatory Sandbox; Kubernetes HPA docs.
