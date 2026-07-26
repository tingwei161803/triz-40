# Auxiliary content research notes — history, glossary, quiz

Scope: `tmp/aux/history.json`, `tmp/aux/glossary.json`, `tmp/aux/quiz.json`.
All content bilingual (en first, zh Taiwan Traditional). JSON validated with
`uv run python -c "import json; json.load(...)"` (see final check at bottom).

## 1. history.json — 15 events (dates verified individually)

Primary sources consulted (opened during research):

- Wikipedia (en), *Genrikh Altshuller* — https://en.wikipedia.org/wiki/Genrikh_Altshuller (fetched, readable)
- Altshuller Institute for TRIZ Studies bio — https://www.aitriz.org/116-altshuller/775-genrich-altshuller
- Salon, "The science of invention" (2000) — https://www.salon.com/2000/06/29/altshuller/
- Toolshero biography — https://www.toolshero.com/toolsheroes/genrich-altshuller/
- Wikipedia (en), *40 principles of invention* — https://en.wikipedia.org/wiki/40_principles_of_invention

Date-by-date verification:

| Year | Event | Verification note |
|------|-------|-------------------|
| 1926 | Born 15 Oct 1926, Tashkent | Wikipedia + multiple bios agree on date and place; grew up in Baku. |
| 1943 | First author's certificate (~age 17), underwater diving apparatus | aitriz / Salon: first author's certificate as a secondary-school student, ~17, for a diving apparatus. Sources vary between 9th/10th grade, so I wrote "about age 17" rather than an exact year. Kept general. |
| 1946 | Joins Caspian Navy patent department (~age 20) | Wikipedia: joined Navy ~age 20, assigned to the flotilla's innovation/patent commission; this is where systematic patent study began. |
| 1948 | Dec 1948 letter to Stalin | Salon + Grokipedia: letter "Personally to Comrade Stalin," December 1948. Wikipedia phrases it as "after sending a letter to Stalin." Used 1948 for the letter. |
| 1950 | Arrest, 25-year sentence, Vorkuta Gulag | Consistent across sources: arrested 1950 (with R. Shapiro) in Tbilisi, charged "inventor's sabotage," 25 years, Vorkuta. |
| 1954 | Released after Stalin's death (1953), returns to Baku | Wikipedia + bios agree: amnesty/release 1954. |
| 1956 | First paper "On the Psychology of Inventive Creativity" | wumm-project PDF + multiple sources: *Voprosy Psikhologii* (Issues of Psychology), No. 6, 1956, pp. 37–49, with R. Shapiro. Widely called the "official birth of TRIZ." |
| 1961 | Book *How to Learn to Invent* | Toolshero + others: 1961. |
| 1969 | *Algorithm of Invention*; ~40,000 patents; 40 Principles + matrix | "By 1969 reviewed ~40,000 patent abstracts"; *Algorithm of Invention* published 1969 (Moscowskiy Rabochy). 40 Principles / 39 parameters / Contradiction Matrix emerged from this body of work. |
| 1971 | Azerbaijan Public Institute for Inventive Creativity, Baku | First TRIZ teaching institution, Baku, 1971. |
| 1979–1984 | *Creativity as an Exact Science* (1979, Russian); *And Suddenly the Inventor Appeared* (1984) | 1979 Russian ed. (Eng. trans. 1984 by Gordon & Breach); *And Suddenly the Inventor Appeared* 1984, aimed at schoolchildren. Merged into one range-dated event to keep total at 15. |
| 1989 | Russian TRIZ Association founded, Altshuller first president | Confirmed 1989; founding assembly linked to the Petrozavodsk conference that year (139 delegates, 50 cities). |
| 1991 | Soviet collapse → TRIZ spreads West; Altshuller Institute (Boston) 1995 | Dissolution 1991 enabled émigré experts; Altshuller Institute for TRIZ Studies, Boston, 1995; Ideation International founded by émigrés. |
| 1998 | Died 24 Sep 1998, Petrozavodsk, Parkinson's complications | Wikipedia + bios agree. Moved to Petrozavodsk ~1990 (one source says 1990; Wikipedia "early 1990s"). Wrote "around 1990." |
| 2000s–present | Corporate adoption (Samsung 1997–1998) + TRIZ meets AI | Samsung: internal committee 1997, first induction/TechOptimizer 1998; by 2003 credited with ~50 new patents; 2004 DVD pick-up project saved ~$100M. Modern "TRIZ + AI/patent-mining/LLM" framed as an ongoing direction (general, not tied to a single dated claim). |

Discarded / softened:
- Exact year of the first teenage patent (9th vs 10th grade disagreement) → wrote "about age 17."
- "Flamethrower in 1943" claim from a search snippet → not corroborated; Altshuller & Shapiro's award was for a flame/heat-resistant suit, a later achievement. Omitted.
- Exact Petrozavodsk move year (1990 vs early-1990s) → wrote "around 1990."

## 2. glossary.json — 24 terms

These are standard, well-established classical-TRIZ concepts; definitions written from
established TRIZ literature rather than a single citable page. Numeric facts cross-checked
against Wikipedia *TRIZ* / *40 principles of invention* and standard TRIZ references:
40 Inventive Principles, 39 engineering parameters, 39×39 Contradiction Matrix,
76 Standard Solutions, 5 Levels of Invention. Terms cover the spec checklist:
TRIZ, 40 principles, technical / physical / administrative contradiction, 39 parameters,
contradiction matrix, ideality, IFR, ARIZ, Su-Field analysis, field, 76 standard solutions,
S-curve, nine windows / system operator, resources, trimming, function analysis,
trends of evolution, psychological inertia, separation principles, smart little people,
levels of invention, scientific effects database.

## 3. quiz.json — 20 questions

Format: each case describes a real product/practice; four options are principle names; one correct.
Answer key spans 20 **distinct** principles (no repeated answer), difficulty mixed.
Cases were chosen to be unambiguous single-principle mappings and to lean on everyday/engineering
examples rather than duplicating the per-principle example sets other agents are writing.

- A few are classic TRIZ teaching examples used deliberately because they are unambiguous
  (matryoshka → Nested Doll, ball bearings → Spheroidality, split AC → Taking Out,
  pre-stressed concrete → Preliminary Anti-action, bubble wrap → Beforehand Cushioning).
  Flagged here in case a principle agent uses the same example — recommend the site not place
  an identical example card directly beside its quiz question.
- Distractors are always plausible neighbours (e.g. Beforehand Cushioning vs Preliminary
  Anti-action; Cheap Short-living vs Discarding and Recovering; Color Changes vs Local Quality)
  so the quiz tests real discrimination, not name recall.
- Two explanations bridge to software/AI (thermostat → Feedback → autoscaling; flight simulator
  → Copying) to reinforce the cross-domain framing of the site.

## Final validation

```
uv run python -c "import json; json.load(open('tmp/aux/history.json')); \
  json.load(open('tmp/aux/glossary.json')); json.load(open('tmp/aux/quiz.json'))"
```

Result: all three parse as valid JSON. Counts: history 15 events, glossary 24 terms,
quiz 20 questions. Schema/bilingual completeness checked programmatically (every en/zh
pair present; every quiz item has 4 options and an in-range answerIndex).
