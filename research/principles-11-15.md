# Research notes — TRIZ principles 11–15

Researcher scope: principles 11 (Beforehand Cushioning / 事先緩衝), 12 (Equipotentiality / 等位性),
13 (The Other Way Round / 反向操作), 14 (Spheroidality–Curvature / 曲面化), 15 (Dynamics / 動態化).

## Sources actually opened (WebFetch/WebSearch verified this session)

General TRIZ references (confirmed accessible and content-relevant):
- **TRIZ40 — 40 Principles list** — https://www.triz40.com/aff_Principles_TRIZ.php — WebFetch OK. Returned the
  canonical sub-principles + classic examples for 11–15 (sprinklers, magnetic film strip, backup parachute,
  UPS; mechanic's pit, canal locks, cafeteria plate dispenser, loading docks; cool-inner-vs-heat-outer, MRI
  rotating around still patient, rotate workpiece not tool, invert container; curved monitors, arches,
  spiral gears, ball-point pens, mouse, spherical casters; flexible hose, flexible boroscope/sigmoidoscope).
- **Six Sigma Study Guide — TRIZ** — https://sixsigmastudyguide.com/theory-of-inventive-problem-solving-triz/ —
  WebFetch OK. Examples: sprinkler/emergency shut-off (11); laundry chute using gravity (12); drive-thru vs
  sit-in (13); archways for room + acoustics, drill vs hammer motion (14); pressure valves (15).
- **Wikipedia — TRIZ** — https://en.wikipedia.org/wiki/TRIZ — WebFetch OK (accessible; confirms the 40-principle
  framework but does not enumerate individual principle names — used only as a general reference).
- **Oxford Creativity — triz.co.uk/learning-centre/40-inventive-principles** — WebFetch returned **HTTP 404**.
  Dropped; not cited in any JSON.

Per-example primary sources (each WebFetch-verified this session, cited as `sourceUrl`):
- P11 checkpointing → https://www.giskard.ai/glossary/machine-learning-checkpointing (via WebSearch snippet
  + corroborated by apxml LLM course). Confirms periodic saving of model + optimizer state to resume from the
  last checkpoint after a failure ("fault-tolerant LLM training").
- P12 canal lock → https://en.wikipedia.org/wiki/Lock_(water_navigation) — "a chamber in a permanently fixed
  position in which the water level can be varied"; boat floats, is not lifted.
- P12 federated learning → https://en.wikipedia.org/wiki/Federated_learning — "clients collaboratively train a
  model while keeping their data decentralized, rather than centrally stored."
- P13 Kanban pull → https://en.wikipedia.org/wiki/Kanban_(development) — "Work is pulled as capacity permits,
  rather than work being pushed into the process when requested."
- P13 inversion of control → https://en.wikipedia.org/wiki/Inversion_of_control — "the external code or
  framework is in control and calls the custom code"; Hollywood Principle "don't call us, we'll call you."
- P13 diffusion model → https://en.wikipedia.org/wiki/Diffusion_model — generation reverses the forward
  noising process; denoises step by step from pure noise back to data.
- P14 circular buffer → https://en.wikipedia.org/wiki/Circular_buffer — fixed-size buffer used "as if it were
  connected end-to-end" (ring/wraparound).
- P14 consistent hashing → https://en.wikipedia.org/wiki/Consistent_hashing — servers + keys mapped "to a unit
  circle"; adding the nth server relocates only ~1/n of keys.
- P14 RoPE → https://nn.labml.ai/transformers/rope/index.html — "Rotary encoding transforms pairs of features
  by rotating in the 2D plane" (angle proportional to token position). Cross-checked with a WebSearch summary
  confirming rotation of query/key vectors so the dot product depends on relative position.
- P15 dynamic pricing → https://en.wikipedia.org/wiki/Dynamic_pricing — flexible prices raised at peak demand,
  lowered when slack; article documents Uber surge pricing explicitly.
- P15 autoscaling → https://en.wikipedia.org/wiki/Autoscaling — "dynamically adjusts the amount of
  computational resources ... automatically based on the load."
- P15 adaptive bitrate streaming → https://en.wikipedia.org/wiki/Adaptive_bitrate_streaming — detects
  bandwidth/CPU/device "in real time, adjusting the quality of the media stream accordingly."
- P15 mixture of experts → https://en.wikipedia.org/wiki/Mixture_of_experts — gating network
  `softmax(topk(Wx+noise))` activates only a small subset of experts per query (sparse activation).

## Principle 11 — Beforehand Cushioning (事先緩衝)

- Classic textbook cases (from TRIZ40 / six sigma, used directly): airbag, pressure/relief valve, spare tire,
  home smoke alarm + extinguisher (cf. ceiling sprinklers), insurance/reserves, autosave + backups. Marked as
  standard TRIZ examples.
- Ancient case (grain reserves against famine): standard "prepare a reserve because harvests are unreliable"
  reasoning; kept without a per-example URL (general knowledge, no specific figures claimed).
- New/searched cases: **model checkpointing** (verified, giskard + apxml), **redundant sensor fusion** in
  self-driving cars (well-established engineering; framed by mechanism, no specific numbers claimed),
  **LLM guardrails/fallbacks** (mechanism-based, no company/date claims).
- Distribution: 12 examples — ancient 1, mechanical 2, daily 2, business 2, software 2, ai 3.

## Principle 12 — Equipotentiality (等位性)

- Classic textbook cases: canal lock (verified), mechanic's pit, truck-height loading dock, spring-loaded
  cafeteria plate dispenser (all in TRIZ40), laundry chute (six sigma). Marked as standard TRIZ examples.
- Interpretation used for software/AI: the modern analogue of "don't lift the object against gravity" is
  "don't move the data against network/latency cost." Cases: move-computation-to-data (MapReduce), CDN edge
  caching, **federated learning** (verified), on-device/edge inference. This is a deliberate analogical
  mapping, noted here so reviewers know it is interpretive rather than a literal gravity example.
- Distribution: 10 examples — ancient 1, mechanical 2, daily 2, business 1, software 2, ai 2.

## Principle 13 — The Other Way Round (反向操作)

- Classic textbook cases: potter's wheel / lathe (rotate workpiece, fix tool), MRI rotating around a still
  patient, treadmill, moving walkway. From TRIZ40; standard examples.
- New/searched cases: **Kanban pull** vs push (verified), **reverse auction** (well-known procurement pattern),
  **inversion of control** (verified), **webhooks vs polling** (mechanism-based), **diffusion models**
  (verified — reverse of the forward noising process), **backpropagation** (reverse of the forward pass;
  standard ML fact).
- Distribution: 11 examples — ancient 1, mechanical 2, daily 2, business 2, software 2, ai 2.

## Principle 14 — Spheroidality / Curvature (曲面化)

- Classic textbook cases: arch/dome (six sigma mentions archways), ball/roller bearings, helical/spiral gears,
  ball-point pen, computer mouse (all in TRIZ40). Standard examples.
- New/searched cases: **circular economy** (linear→loop, business analogue of curvature), **ring buffer**
  (verified), **consistent hashing ring** (verified), **RoPE** (verified — position as rotation), embeddings on
  the **unit hypersphere** (cosine similarity / slerp — standard ML geometry), **cyclical (sin/cos) feature
  encoding** (standard feature-engineering technique for periodic variables).
- Distribution: 11 examples — ancient 1, mechanical 2, daily 2, business 1, software 2, ai 3.

## Principle 15 — Dynamics (動態化)

- Classic textbook cases: bendy drinking straw and adjustable/flexible products (cf. flexible hose in TRIZ40),
  variable-geometry swing wing, articulated bus (divide rigid object into relatively-moving parts). Standard.
- Ancient case: **articulated plate armor** — segmented plates jointed for movement; concrete pre-1850 example
  of "divide a rigid object into parts capable of moving relative to each other." General knowledge; no
  specific dates/figures claimed.
- New/searched cases: **dynamic pricing / surge** (verified, incl. Uber), **responsive web design**
  (mechanism-based), **autoscaling** (verified), **adaptive bitrate streaming** (verified), **adaptive
  learning-rate optimizers** (Adam; standard ML), **Mixture-of-Experts routing** (verified), **attention as
  dynamic weighting** (standard transformer mechanism).
- Distribution: 12 examples — ancient 1, mechanical 2, daily 2, business 1, software 3, ai 3.

## Discarded / not used

- Oxford Creativity triz.co.uk 40-principles page — 404 at the URL tried; not cited anywhere.
- Did not cite the UW `TRIZ40.pdf`: WebFetch could not parse the PDF binary, so it is not listed as a source
  even though it is a well-known canonical file (content was obtained instead from triz40.com + six sigma).
- Avoided vague "AI can also do this" fillers; every AI example is a specific mechanism (checkpointing, MoE,
  RoPE, diffusion, backprop, federated learning, adaptive LR, attention, sensor fusion, guardrails).
- No specific hard numbers (dates, revenue, benchmark scores) were asserted in any `body`, so no numeric
  claims required source backing beyond the mechanism descriptions verified above.

## Self-check

- `uv run python` json.load passed for p11–p15 (all valid JSON, UTF-8, no trailing commas/comments).
- Every principle: ≥9 examples (10–12), six-domain minimums met, en+zh present for name/definition/
  subPrinciples/every example title+body.
- All `sources[].url` and all example `sourceUrl` values were WebFetch/WebSearch-verified this session.
- zh is Taiwan Traditional Chinese (軟體 / 資訊 / 演算法 / 機器學習; not 软件/信息/算法).
