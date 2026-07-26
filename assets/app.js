/* =========================================================================
   multipage · app.js   (vanilla, no build, no chart lib)

   The PAGE-LEVEL LAYOUT ENGINE. shell.js has already injected the shared
   chrome and published window.LDW. This script:

     1. reads the current page from <body data-page="..."> (via LDW),
     2. picks a renderer from RENDERERS by that page's `layout`,
     3. paints it into <main id="page"> and wires its interactions,
     4. registers an onLang() callback so a language switch repaints the body.

   RENDERERS is the LAYOUT REGISTRY — one entry per supported page layout:
     hub | gallery | article | dashboard | timeline | table |
     bento | kanban | faq | comparison | leaderboard | scrolly | map
   To add a layout, add one renderer (returns the inner HTML for #page) and,
   if it needs interaction, one matching WIRE entry. Nothing else changes.
   ========================================================================= */
(function () {
  "use strict";

  function boot() {
    // Wait until shell.js has injected the chrome (app bar, nav, footer, #dialog)
    // and published LDW. End-of-body scripts run while readyState === "loading",
    // so the shell defers its injection to DOMContentLoaded — we must wait for it.
    if (!window.LDW || !window.LDW.ready) {
      document.addEventListener("ldw:shell-ready", boot, { once: true });
      return;
    }
    var L = window.LDW;

    var t = L.t, esc = L.escapeHtml, r = L.r;
    var pageEl = document.getElementById("page");
    var teardowns = [];   // observers / listeners to disconnect before each repaint

    /* ---------- shared bits ---------- */
    function head(p) {
      var sub = t(p.subtitle)
        ? '<p class="page-head__sub">' + esc(t(p.subtitle)) + "</p>" : "";
      return '<header class="page-head"><h1>' + esc(t(p.title)) + "</h1>" + sub + "</header>";
    }

    /* ---------- TRIZ shared helpers ---------- */
    var DOMAIN_ORDER = ["ancient", "mechanical", "daily", "business", "software", "ai"];
    function domainMap(p) {
      var m = {};
      (p.domains || []).forEach(function (d) { m[d.key] = d; });
      return m;
    }
    function findPage(slug) {
      for (var i = 0; i < L.pages.length; i++) if (L.pages[i].slug === slug) return L.pages[i];
      return null;
    }
    function numLabel(n) { return (n < 10 ? "0" : "") + n; }
    function clip(s, n) {
      s = String(s == null ? "" : s);
      return s.length > n ? s.slice(0, n - 1).replace(/[,;、,;\s]+\S*$/, "") + "…" : s;
    }
    function domainHead(d, count, tag) {
      var h = tag || "h3";
      return "<" + h + ' class="dlg-domain"><span class="material-symbols-rounded" aria-hidden="true">' +
        esc(d.icon || "label") + "</span>" + esc(d[L.state.lang] || d.en) +
        ' <span class="dlg-count">' + count + "</span></" + h + ">";
    }

    function barChart(series, accent) {
      var W = 520, H = 240, padL = 16, padR = 16, padT = 16, padB = 44;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var max = Math.max.apply(null, series.map(function (d) { return d.value; }).concat([1]));
      var n = series.length || 1, gap = 14, bw = (plotW - gap * (n - 1)) / n, baseY = padT + plotH;
      var bars = series.map(function (d, i) {
        var x = padL + i * (bw + gap), h = (d.value / max) * plotH, y = baseY - h;
        var label = esc(t(d.label)), val = esc(String(d.value));
        return '<rect class="bar-rect" x="' + r(x) + '" y="' + r(y) + '" width="' + r(bw) +
          '" height="' + r(h) + '" rx="5"' + (accent ? ' style="fill:' + esc(accent) + '"' : "") +
          '><title>' + label + ": " + val + "</title></rect>" +
          '<text class="bar-value" x="' + r(x + bw / 2) + '" y="' + r(y - 6) + '" text-anchor="middle">' + val + "</text>" +
          '<text class="bar-label" x="' + r(x + bw / 2) + '" y="' + r(baseY + 18) + '" text-anchor="middle">' + label + "</text>";
      }).join("");
      return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" preserveAspectRatio="xMidYMid meet" aria-label="bar chart">' +
        '<line class="axis-line" x1="' + padL + '" y1="' + r(baseY) + '" x2="' + r(W - padR) + '" y2="' + r(baseY) + '" />' +
        bars + "</svg>";
    }

    function lineChart(points) {
      var W = 520, H = 240, padL = 28, padR = 16, padT = 16, padB = 32;
      var plotW = W - padL - padR, plotH = H - padT - padB;
      var ys = points.map(function (d) { return d.y; });
      var max = Math.max.apply(null, ys.concat([1])), min = Math.min.apply(null, ys.concat([0]));
      var span = (max - min) || 1, n = points.length || 1;
      var xy = points.map(function (d, i) {
        var x = padL + (n === 1 ? plotW / 2 : (i / (n - 1)) * plotW);
        var y = padT + plotH - ((d.y - min) / span) * plotH;
        return { x: x, y: y, d: d };
      });
      var path = xy.map(function (pt, i) { return (i ? "L" : "M") + r(pt.x) + " " + r(pt.y); }).join(" ");
      var area = path + " L" + r(xy[xy.length - 1].x) + " " + r(padT + plotH) + " L" + r(xy[0].x) + " " + r(padT + plotH) + " Z";
      var dots = xy.map(function (pt) {
        return '<circle class="line-dot" cx="' + r(pt.x) + '" cy="' + r(pt.y) + '" r="3"><title>' +
          esc(String(pt.d.x)) + ": " + esc(String(pt.d.y)) + "</title></circle>";
      }).join("");
      var labels = xy.map(function (pt) {
        return '<text class="bar-label" x="' + r(pt.x) + '" y="' + r(padT + plotH + 20) + '" text-anchor="middle">' + esc(String(pt.d.x)) + "</text>";
      }).join("");
      return '<svg viewBox="0 0 ' + W + " " + H + '" role="img" preserveAspectRatio="xMidYMid meet" aria-label="line chart">' +
        '<path class="line-area" d="' + area + '" />' +
        '<path class="line-path" d="' + path + '" fill="none" />' + dots + labels + "</svg>";
    }

    /* =====================================================================
       LAYOUT REGISTRY
       ===================================================================== */
    var RENDERERS = {

      /* ---- hub: hero stats + a card linking to every other page ---- */
      hub: function (p) {
        var stats = (p.stats || []).map(function (s) {
          return '<div class="hero__stat" data-item>' +
            '<b class="hero__stat-value" data-count="' + esc(String(s.value)) + '">0</b>' +
            '<span class="hero__stat-label">' + esc(t(s.label)) + "</span></div>";
        }).join("");
        var cards = L.pages.filter(function (q) { return q.slug !== "home"; }).map(function (q) {
          return '<a class="card card--nav" data-item href="' + esc(L.pageHref(q)) + '" ' +
              'aria-label="' + esc(t(q.title)) + '">' +
            '<span class="material-symbols-rounded card__icon" aria-hidden="true">' + esc(q.icon || "label") + "</span>" +
            '<h3 class="card__title">' + esc(t(q.title)) + "</h3>" +
            '<p class="card__summary">' + esc(t(q.subtitle)) + "</p></a>";
        }).join("");
        var intro = (p.intro || []).map(function (par) {
          return "<p>" + esc(t(par)) + "</p>";
        }).join("");
        return head(p) +
          (intro ? '<div class="prose hub-intro">' + intro + "</div>" : "") +
          (stats ? '<div class="hero__stats">' + stats + "</div>" : "") +
          '<div class="grid">' + cards + "</div>";
      },

      /* ---- gallery: search + chips + card grid + dialog ---- */
      gallery: function (p) {
        var cats = (p.categories || []).map(function (c) {
          return '<button class="chip" type="button" data-cat="' + esc(c.key) + '">' +
            esc(c[L.state.lang] || c.en) + "</button>";
        }).join("");
        var allLabel = L.state.lang === "en" ? "All" : "全部";
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            (cats ? '<div class="chips"><button class="chip chip--active" type="button" data-cat="">' + esc(allLabel) + "</button>" + cats + "</div>" : "") +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<div class="grid" id="grid"></div>';
      },

      /* ---- article: sticky TOC + prose + reading progress ---- */
      article: function (p) {
        var toc = (p.sections || []).map(function (s) {
          return '<a class="toc-link" href="#' + esc(s.id) + '" data-toc="' + esc(s.id) + '">' + esc(t(s.heading)) + "</a>";
        }).join("");
        var body = (p.sections || []).map(function (s) {
          var blocks = (s.blocks || []).map(function (b) {
            if (b.type === "h3") return "<h3>" + esc(t(b.text)) + "</h3>";
            if (b.type === "quote") return "<blockquote>" + esc(t(b.text)) + "</blockquote>";
            if (b.type === "code") return "<pre><code>" + esc(t(b.text)) + "</code></pre>";
            if (b.type === "ul") {
              var arr = (b.items && (b.items[L.state.lang] || b.items.en || b.items.zh)) || [];
              return "<ul>" + arr.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") + "</ul>";
            }
            return "<p>" + esc(t(b.text)) + "</p>";
          }).join("");
          return '<section class="article-section" id="' + esc(s.id) + '" data-item ' +
            'aria-labelledby="' + esc(s.id) + '-h"><h2 id="' + esc(s.id) + '-h">' + esc(t(s.heading)) + "</h2>" + blocks + "</section>";
        }).join("");
        return '<div class="reading-progress" id="readingProgress" aria-hidden="true"></div>' +
          head(p) +
          '<div class="article-layout">' +
            '<nav class="toc" aria-label="Contents"><div class="toc__inner">' + toc + "</div></nav>" +
            '<div class="article-body prose">' + body + "</div>" +
          "</div>";
      },

      /* ---- dashboard: stat cards + bar + line + table ---- */
      dashboard: function (p) {
        var stats = (p.stats || []).map(function (s) {
          var d = s.delta;
          var deltaHtml = (d === 0 || d) ?
            '<span class="stat-delta stat-delta--' + (d >= 0 ? "up" : "down") + '">' +
              (d >= 0 ? "▲ " : "▼ ") + esc(String(Math.abs(d))) + "%</span>" : "";
          return '<div class="stat-card" data-item>' +
            '<span class="stat-label">' + esc(t(s.label)) + "</span>" +
            '<b class="stat-value">' + esc(String(s.value)) +
              (t(s.unit) ? ' <span class="stat-unit">' + esc(t(s.unit)) + "</span>" : "") + "</b>" +
            deltaHtml + "</div>";
        }).join("");
        var bars = p.bars ? '<figure class="panel" data-item><figcaption>' + esc(t(p.bars.title)) + "</figcaption>" +
          '<div class="chart-wrap">' + barChart(p.bars.series || []) + "</div></figure>" : "";
        var line = p.line ? '<figure class="panel" data-item><figcaption>' + esc(t(p.line.title)) + "</figcaption>" +
          '<div class="chart-wrap">' + lineChart(p.line.points || []) + "</div></figure>" : "";
        var table = "";
        if (p.table) {
          var thead = (p.table.columns || []).map(function (c) { return "<th>" + esc(t(c.label)) + "</th>"; }).join("");
          var tbody = (p.table.rows || []).map(function (row) {
            return "<tr data-item>" + (p.table.columns || []).map(function (c) {
              var v = row[c.key];
              return "<td>" + esc(typeof v === "object" ? t(v) : String(v == null ? "" : v)) + "</td>";
            }).join("") + "</tr>";
          }).join("");
          table = '<div class="panel panel--wide" data-item><div class="table-wrap"><table class="data-table">' +
            "<thead><tr>" + thead + "</tr></thead><tbody>" + tbody + "</tbody></table></div></div>";
        }
        return head(p) +
          '<div class="stat-grid">' + stats + "</div>" +
          '<div class="panel-grid">' + bars + line + "</div>" + table;
      },

      /* ---- timeline: dated event cards down a rail ---- */
      timeline: function (p) {
        var items = (p.events || []).map(function (ev) {
          return '<li class="tl-item" data-item><div class="tl-dot" aria-hidden="true"></div>' +
            '<div class="tl-card"><span class="tl-date">' + esc(t(ev.date)) + "</span>" +
            '<h3 class="tl-title">' + esc(t(ev.title)) + "</h3>" +
            '<p class="tl-body">' + esc(t(ev.body)) + "</p></div></li>";
        }).join("");
        return head(p) + '<ol class="timeline">' + items + "</ol>";
      },

      /* ---- table: searchable + sortable ---- */
      table: function (p) {
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            '<div class="chips" id="tableChips"></div>' +
          "</div>" +
          '<div class="table-wrap"><table class="data-table" id="dataTable"><thead></thead><tbody></tbody></table></div>';
      },

      /* ---- bento: asymmetric tile grid ---- */
      bento: function (p) {
        var tiles = (p.tiles || []).map(function (tile) {
          return '<article class="tile tile--' + esc(tile.size || "sm") + (tile.accent ? " tile--accent" : "") + '" data-item>' +
            (tile.icon ? '<span class="material-symbols-rounded tile__icon" aria-hidden="true">' + esc(tile.icon) + "</span>" : "") +
            (tile.value ? '<b class="tile__value">' + esc(tile.value) + "</b>" : "") +
            '<h3 class="tile__title">' + esc(t(tile.title)) + "</h3>" +
            (t(tile.body) ? '<p class="tile__body">' + esc(t(tile.body)) + "</p>" : "") + "</article>";
        }).join("");
        return head(p) + '<div class="bento">' + tiles + "</div>";
      },

      /* ---- kanban: cards grouped by status column ---- */
      kanban: function (p) {
        var cols = (p.columns || []).map(function (col) {
          var cards = (p.cards || []).filter(function (c) { return c.column === col.key; }).map(function (c) {
            var tags = (c.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
            return '<article class="kb-card" data-item><h3 class="kb-card__title">' + esc(t(c.title)) + "</h3>" +
              (t(c.body) ? '<p class="kb-card__body">' + esc(t(c.body)) + "</p>" : "") +
              (tags ? '<div class="card__tags">' + tags + "</div>" : "") + "</article>";
          }).join("");
          var count = (p.cards || []).filter(function (c) { return c.column === col.key; }).length;
          return '<div class="kb-col"><div class="kb-col__head">' + esc(t(col.label)) +
            ' <span class="kb-col__count">' + count + "</span></div>" +
            '<div class="kb-col__body">' + cards + "</div></div>";
        }).join("");
        return head(p) + '<div class="kanban">' + cols + "</div>";
      },

      /* ---- faq: searchable accordion ---- */
      faq: function (p) {
        var items = (p.qa || []).map(function (row) {
          return '<details class="acc-item" data-item data-q="' + esc((t(row.q) + " " + t(row.a)).toLowerCase()) + '">' +
            '<summary class="acc-q"><span>' + esc(t(row.q)) + "</span>" +
            '<span class="material-symbols-rounded acc-chevron" aria-hidden="true">expand_more</span></summary>' +
            '<div class="acc-a">' + esc(t(row.a)) + "</div></details>";
        }).join("");
        return head(p) +
          '<div class="toolbar"><input id="search" class="search" type="search" autocomplete="off" ' +
            'placeholder="' + (L.state.lang === "en" ? "Search…" : "搜尋…") + '" ' +
            'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" /></div>' +
          '<div class="accordion" id="accordion">' + items + "</div>";
      },

      /* ---- comparison: plans (cols) x features (rows) ---- */
      comparison: function (p) {
        var plans = p.plans || [], feats = p.features || [];
        var thead = '<th scope="col"></th>' + plans.map(function (pl) {
          return '<th scope="col" class="' + (pl.highlight ? "cmp-col--hl" : "") + '">' +
            '<div class="cmp-plan">' + esc(t(pl.name)) + "</div>" +
            '<div class="cmp-price">' + esc(t(pl.price)) + "</div>" +
            (t(pl.note) ? '<div class="cmp-note">' + esc(t(pl.note)) + "</div>" : "") + "</th>";
        }).join("");
        var rows = feats.map(function (f) {
          var cells = plans.map(function (pl) {
            var v = f.values ? f.values[pl.key] : undefined;
            var cell;
            if (v === true) cell = '<span class="cmp-yes material-symbols-rounded" aria-label="yes">check</span>';
            else if (v === false || v == null) cell = '<span class="cmp-no" aria-label="no">—</span>';
            else cell = esc(t(v));
            return '<td class="' + (pl.highlight ? "cmp-col--hl" : "") + '">' + cell + "</td>";
          }).join("");
          return '<tr data-item><th scope="row" class="cmp-feat">' + esc(t(f.label)) + "</th>" + cells + "</tr>";
        }).join("");
        return head(p) + '<div class="table-wrap"><table class="cmp-table">' +
          "<thead><tr>" + thead + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
      },

      /* ---- leaderboard: ranked list + tier grouping toggle ---- */
      leaderboard: function (p) {
        var listLabel = L.state.lang === "en" ? "List" : "排名";
        var tierLabel = L.state.lang === "en" ? "Tiers" : "階級";
        return head(p) +
          '<div class="seg" role="tablist">' +
            '<button class="seg__btn seg__btn--active" type="button" data-view="list">' + esc(listLabel) + "</button>" +
            '<button class="seg__btn" type="button" data-view="tier">' + esc(tierLabel) + "</button>" +
          "</div>" +
          '<div id="lbView"></div>';
      },

      /* ---- scrolly: sticky visual + stepped narrative ---- */
      scrolly: function (p) {
        var steps = (p.steps || []).map(function (s, i) {
          return '<div class="scrolly-step" data-item data-step="' + i + '"><p>' + esc(t(s.text)) + "</p></div>";
        }).join("");
        return head(p) +
          '<div class="scrolly">' +
            '<div class="scrolly-sticky"><div class="scrolly-visual" id="scrollyVisual"></div></div>' +
            '<div class="scrolly-steps">' + steps + "</div>" +
          "</div>";
      },

      /* ---- map: Leaflet map + list (needs Leaflet on the page) ---- */
      map: function (p) {
        return head(p) +
          '<div class="map-layout">' +
            '<div class="map-box" id="map" role="application" aria-label="Map"></div>' +
            '<ul class="map-list" id="mapList"></ul>' +
          "</div>";
      },

      /* ---- principles: editorial index of the 40 principles + rich dialog ---- */
      principles: function (p) {
        var groups = (p.groups || []).map(function (g) {
          return '<button class="chip" type="button" data-cat="' + esc(g.key) + '">' +
            esc(g[L.state.lang] || g.en) + "</button>";
        }).join("");
        var allLabel = L.state.lang === "en" ? "All" : "全部";
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search principles, examples…" : "搜尋原則、案例…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            '<div class="chips"><button class="chip chip--active" type="button" data-cat="">' + esc(allLabel) + "</button>" + groups + "</div>" +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<ol class="plist" id="plist"></ol>';
      },

      /* ---- cases: every example across all principles, filterable by domain ---- */
      cases: function (p) {
        var chips = (p.domains || []).map(function (d) {
          return '<button class="chip" type="button" data-cat="' + esc(d.key) + '">' +
            '<span class="material-symbols-rounded chip__ic" aria-hidden="true">' + esc(d.icon || "label") + "</span>" +
            esc(d[L.state.lang] || d.en) + "</button>";
        }).join("");
        var allLabel = L.state.lang === "en" ? "All" : "全部";
        return head(p) +
          '<div class="toolbar">' +
            '<input id="search" class="search" type="search" autocomplete="off" ' +
              'placeholder="' + (L.state.lang === "en" ? "Search cases…" : "搜尋案例…") + '" ' +
              'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" />' +
            '<div class="chips"><button class="chip chip--active" type="button" data-cat="">' + esc(allLabel) + "</button>" + chips + "</div>" +
          "</div>" +
          '<p class="result-count" id="resultCount" aria-live="polite"></p>' +
          '<div id="caseList"></div>';
      },

      /* ---- glossary: searchable accordion of TRIZ terms ---- */
      glossary: function (p) {
        var items = (p.terms || []).map(function (row) {
          var hay = ((row.term.en || "") + " " + (row.term.zh || "") + " " + t(row.def)).toLowerCase();
          var other = L.state.lang === "en" ? (row.term.zh || "") : (row.term.en || "");
          return '<details class="acc-item" data-item data-q="' + esc(hay) + '">' +
            '<summary class="acc-q"><span>' + esc(t(row.term)) +
              (other ? ' <span class="acc-alt">' + esc(other) + "</span>" : "") + "</span>" +
            '<span class="material-symbols-rounded acc-chevron" aria-hidden="true">expand_more</span></summary>' +
            '<div class="acc-a">' + esc(t(row.def)) + "</div></details>";
        }).join("");
        return head(p) +
          '<div class="toolbar"><input id="search" class="search" type="search" autocomplete="off" ' +
            'placeholder="' + (L.state.lang === "en" ? "Search terms…" : "搜尋術語…") + '" ' +
            'aria-label="' + (L.state.lang === "en" ? "Search" : "搜尋") + '" /></div>' +
          '<div class="accordion" id="accordion">' + items + "</div>";
      },

      /* ---- flashcards: flip-card practice over the 40 principles ---- */
      flashcards: function (p) {
        var en = L.state.lang === "en";
        return head(p) +
          '<div class="fc-wrap">' +
            '<p class="fc-progress" id="fcProgress" aria-live="polite"></p>' +
            '<div class="fc-stage">' +
              '<button class="icon-btn fc-nav" id="fcPrev" type="button" aria-label="' + (en ? "Previous card" : "上一張") + '">' +
                '<span class="material-symbols-rounded">chevron_left</span></button>' +
              '<div class="fc-card" id="fcCard" tabindex="0" role="button" data-item aria-label="' + (en ? "Flip card" : "翻面") + '">' +
                '<div class="fc-face fc-face--front" id="fcFront"></div>' +
                '<div class="fc-face fc-face--back" id="fcBack"></div>' +
              "</div>" +
              '<button class="icon-btn fc-nav" id="fcNext" type="button" aria-label="' + (en ? "Next card" : "下一張") + '">' +
                '<span class="material-symbols-rounded">chevron_right</span></button>' +
            "</div>" +
            '<div class="fc-actions">' +
              '<button class="btn" id="fcFlip" type="button">' + (en ? "Flip" : "翻面") + "</button>" +
              '<button class="btn btn--ghost" id="fcShuffle" type="button">' + (en ? "Shuffle" : "洗牌") + "</button>" +
            "</div>" +
            '<p class="fc-hint">' + (en ? "Click the card or press Space to flip; use ← → to move." : "點卡片或按空白鍵翻面;← → 切換卡片。") + "</p>" +
          "</div>";
      },

      /* ---- quiz: which principle does this case use? ---- */
      quiz: function (p) {
        return head(p) + '<div class="quiz" id="quizBox"></div>';
      }
    };

    /* =====================================================================
       WIRING (interactions) — keyed by layout, run after innerHTML is set
       ===================================================================== */
    var WIRE = {
      hub: function () { animateCounters(); },

      gallery: function (p) {
        var grid = document.getElementById("grid");
        var search = document.getElementById("search");
        var count = document.getElementById("resultCount");
        var chips = [].slice.call(pageEl.querySelectorAll(".chip"));
        var st = { q: "", cat: "" };

        function matches(item) {
          if (st.cat && item.category !== st.cat) return false;
          if (!st.q) return true;
          var hay = (t(item.title) + " " + t(item.summary) + " " + (item.tags || []).join(" ")).toLowerCase();
          return hay.indexOf(st.q) !== -1;
        }
        function paint() {
          var rows = (p.items || []).filter(matches);
          grid.innerHTML = rows.map(function (item) {
            var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
            return '<article class="card" tabindex="0" role="button" data-item data-slug="' + esc(item.slug) + '" ' +
              'aria-label="' + esc(t(item.title)) + '">' +
              '<h3 class="card__title">' + esc(t(item.title)) + "</h3>" +
              '<p class="card__summary">' + esc(t(item.summary)) + "</p>" +
              (tags ? '<div class="card__tags">' + tags + "</div>" : "") + "</article>";
          }).join("");
          if (count) count.textContent = rows.length + (L.state.lang === "en" ? " result(s)" : " 筆結果");
          wireCards();
        }
        function wireCards() {
          [].forEach.call(grid.querySelectorAll(".card[data-slug]"), function (card) {
            var slug = card.dataset.slug;
            card.addEventListener("click", function () { openItem(slug); });
            card.addEventListener("keydown", function (e) {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openItem(slug); }
            });
          });
        }
        function findItem(slug) {
          return (p.items || []).filter(function (it) { return it.slug === slug; })[0] || null;
        }
        function openItem(slug) {
          var item = findItem(slug); if (!item) return;
          var dlg = L.dialog(), body = document.getElementById("dialogBody");
          var tags = (item.tags || []).map(function (g) { return '<span class="tag">' + esc(g) + "</span>"; }).join("");
          body.innerHTML = '<h2 id="dialogTitle">' + esc(t(item.title)) + "</h2>" +
            (tags ? '<div class="card__tags">' + tags + "</div>" : "") +
            "<p>" + esc(t(item.overview) || t(item.summary)) + "</p>";
          if (!dlg.open) dlg.showModal();
          if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
        }
        function syncHash() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) openItem(slug);
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); });
            chip.classList.add("chip--active");
            st.cat = chip.dataset.cat || "";
            paint();
          });
        });
        /* closing the dialog clears the #slug so the URL returns to clean state
           and a later deep link to the SAME slug fires hashchange again */
        var dlg = L.dialog();
        function onClose() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) history.replaceState(null, "", location.pathname + location.search);
        }
        dlg.addEventListener("close", onClose);
        var onHash = function () { syncHash(); };
        window.addEventListener("hashchange", onHash);
        teardowns.push(function () {
          window.removeEventListener("hashchange", onHash);
          dlg.removeEventListener("close", onClose);
        });
        paint();
        syncHash();
      },

      article: function () {
        var prog = document.getElementById("readingProgress");
        var links = [].slice.call(pageEl.querySelectorAll(".toc-link"));
        var secs = [].slice.call(pageEl.querySelectorAll(".article-section"));
        function onScroll() {
          var h = document.documentElement;
          var max = h.scrollHeight - h.clientHeight;
          if (prog) prog.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        teardowns.push(function () { window.removeEventListener("scroll", onScroll); });
        if ("IntersectionObserver" in window) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (!en.isIntersecting) return;
              links.forEach(function (a) {
                var on = a.dataset.toc === en.target.id;
                a.classList.toggle("toc-link--active", on);
              });
            });
          }, { rootMargin: "-30% 0px -60% 0px" });
          secs.forEach(function (s) { io.observe(s); });
          teardowns.push(function () { io.disconnect(); });
        }
      },

      dashboard: function () { /* static charts; nothing to wire */ },

      table: function (p) {
        var table = document.getElementById("dataTable");
        var thead = table.querySelector("thead"), tbody = table.querySelector("tbody");
        var search = document.getElementById("search");
        var chipsBox = document.getElementById("tableChips");
        var cols = p.columns || [];
        var st = { q: "", filter: "", sortKey: null, dir: 1 };
        var filterCol = cols.filter(function (c) { return c.filter; })[0];

        function cellText(row, c) { var v = row[c.key]; return typeof v === "object" ? t(v) : String(v == null ? "" : v); }
        function rowMatches(row) {
          if (filterCol && st.filter && cellText(row, filterCol) !== st.filter) return false;
          if (!st.q) return true;
          return cols.some(function (c) { return cellText(row, c).toLowerCase().indexOf(st.q) !== -1; });
        }
        function paintHead() {
          thead.innerHTML = "<tr>" + cols.map(function (c) {
            var arrow = st.sortKey === c.key ? (st.dir > 0 ? " ▲" : " ▼") : "";
            return '<th class="th-sort" data-key="' + esc(c.key) + '" role="button" tabindex="0" aria-label="Sort by ' +
              esc(t(c.label)) + '">' + esc(t(c.label)) + esc(arrow) + "</th>";
          }).join("") + "</tr>";
          [].forEach.call(thead.querySelectorAll(".th-sort"), function (th) {
            th.addEventListener("click", function () { sortBy(th.dataset.key); });
            th.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sortBy(th.dataset.key); } });
          });
        }
        function sortBy(key) {
          if (st.sortKey === key) st.dir = -st.dir; else { st.sortKey = key; st.dir = 1; }
          paint();
        }
        function paint() {
          paintHead();
          var col = cols.filter(function (c) { return c.key === st.sortKey; })[0];
          var rows = (p.rows || []).filter(rowMatches).slice();
          if (col) {
            rows.sort(function (a, b) {
              var va = a[col.key], vb = b[col.key];
              if (col.type === "num") return (Number(va) - Number(vb)) * st.dir;
              return String(typeof va === "object" ? t(va) : va).localeCompare(String(typeof vb === "object" ? t(vb) : vb)) * st.dir;
            });
          }
          tbody.innerHTML = rows.map(function (row) {
            return "<tr data-item>" + cols.map(function (c) {
              if (c.type === "link") {
                var u = row[c.key];
                return '<td><a class="row-link" href="' + esc(u) + '" target="_blank" rel="noopener">' + esc(u) + "</a></td>";
              }
              return "<td>" + esc(cellText(row, c)) + "</td>";
            }).join("") + "</tr>";
          }).join("");
        }
        if (filterCol) {
          var vals = [];
          (p.rows || []).forEach(function (row) { var v = cellText(row, filterCol); if (vals.indexOf(v) === -1) vals.push(v); });
          var allLabel = L.state.lang === "en" ? "All" : "全部";
          chipsBox.innerHTML = '<button class="chip chip--active" type="button" data-v="">' + esc(allLabel) + "</button>" +
            vals.map(function (v) { return '<button class="chip" type="button" data-v="' + esc(v) + '">' + esc(v) + "</button>"; }).join("");
          [].forEach.call(chipsBox.querySelectorAll(".chip"), function (chip) {
            chip.addEventListener("click", function () {
              [].forEach.call(chipsBox.querySelectorAll(".chip"), function (c) { c.classList.remove("chip--active"); });
              chip.classList.add("chip--active");
              st.filter = chip.dataset.v || "";
              paint();
            });
          });
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        paint();
      },

      bento: function () { /* static */ },
      kanban: function () { /* static */ },

      faq: function () {
        var search = document.getElementById("search");
        var items = [].slice.call(pageEl.querySelectorAll(".acc-item"));
        if (search) search.addEventListener("input", function () {
          var q = this.value.trim().toLowerCase();
          items.forEach(function (it) {
            var hit = !q || (it.dataset.q || "").indexOf(q) !== -1;
            it.style.display = hit ? "" : "none";
          });
        });
      },

      comparison: function () { /* static */ },

      leaderboard: function (p) {
        var view = document.getElementById("lbView");
        var btns = [].slice.call(pageEl.querySelectorAll(".seg__btn"));
        var entries = (p.entries || []).slice().sort(function (a, b) { return b.score - a.score; });
        function row(e, rank) {
          return '<li class="lb-row" data-item>' +
            (rank ? '<span class="lb-rank">' + rank + "</span>" : "") +
            '<span class="lb-tier lb-tier--' + esc(e.tier || "") + '">' + esc(e.tier || "") + "</span>" +
            '<span class="lb-name">' + esc(t(e.name)) + "</span>" +
            '<span class="lb-meta">' + esc(t(e.meta)) + "</span>" +
            '<span class="lb-score">' + esc(String(e.score)) + "</span></li>";
        }
        function listView() {
          view.innerHTML = '<ol class="lb-list">' + entries.map(function (e, i) { return row(e, i + 1); }).join("") + "</ol>";
        }
        function tierView() {
          var tiers = [];
          entries.forEach(function (e) { if (tiers.indexOf(e.tier) === -1) tiers.push(e.tier); });
          view.innerHTML = tiers.map(function (tier) {
            var rows = entries.filter(function (e) { return e.tier === tier; }).map(function (e) { return row(e); }).join("");
            return '<div class="lb-tier-group"><div class="lb-tier-head lb-tier--' + esc(tier) + '">' + esc(tier) + "</div>" +
              '<ol class="lb-list">' + rows + "</ol></div>";
          }).join("");
        }
        btns.forEach(function (b) {
          b.addEventListener("click", function () {
            btns.forEach(function (x) { x.classList.remove("seg__btn--active"); });
            b.classList.add("seg__btn--active");
            if (b.dataset.view === "tier") tierView(); else listView();
          });
        });
        listView();
      },

      scrolly: function (p) {
        var visual = document.getElementById("scrollyVisual");
        var steps = [].slice.call(pageEl.querySelectorAll(".scrolly-step"));
        function paintVisual(i) {
          var s = (p.steps || [])[i]; if (!s) return;
          var v = s.visual || {};
          if (v.type === "bars") {
            visual.innerHTML = '<div class="chart-wrap">' + barChart(v.bars || [], v.color) + "</div>";
          } else {
            visual.innerHTML = '<div class="scrolly-stat" style="color:' + esc(v.color || "var(--primary)") + '">' +
              esc(t(v.value)) + "</div>";
          }
        }
        paintVisual(0);
        if ("IntersectionObserver" in window) {
          var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
              if (en.isIntersecting) {
                steps.forEach(function (s) { s.classList.remove("scrolly-step--active"); });
                en.target.classList.add("scrolly-step--active");
                paintVisual(parseInt(en.target.dataset.step, 10) || 0);
              }
            });
          }, { rootMargin: "-45% 0px -45% 0px" });
          steps.forEach(function (s) { io.observe(s); });
          teardowns.push(function () { io.disconnect(); });
        }
      },

      map: function (p) {
        var listEl = document.getElementById("mapList");
        var places = p.places || [];
        listEl.innerHTML = places.map(function (pl) {
          return '<li class="place" data-item data-slug="' + esc(pl.slug) + '" tabindex="0" role="button" ' +
            'aria-label="' + esc(t(pl.name)) + '"><b>' + esc(t(pl.name)) + "</b>" +
            '<span>' + esc(t(pl.body)) + "</span></li>";
        }).join("");

        if (typeof window.L === "undefined" || !window.L.map) {
          // Leaflet not loaded (offline / blocked): list-only graceful fallback.
          document.getElementById("map").innerHTML =
            '<div class="map-fallback">' + esc(L.state.lang === "en" ? "Map unavailable offline — see the list." : "離線時地圖無法載入 — 請看清單。") + "</div>";
          return;
        }
        var map = window.L.map("map", { scrollWheelZoom: false });
        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap", maxZoom: 19
        }).addTo(map);
        var markers = {}, group = [];
        places.forEach(function (pl) {
          /* alt + title give Leaflet's marker <img role="button"> an accessible name */
          var m = window.L.marker([pl.lat, pl.lng], { alt: t(pl.name), title: t(pl.name), keyboard: true })
            .addTo(map).bindPopup("<b>" + esc(t(pl.name)) + "</b><br>" + esc(t(pl.body)));
          markers[pl.slug] = m; group.push([pl.lat, pl.lng]);
        });
        if (group.length) map.fitBounds(group, { padding: [30, 30] });
        [].forEach.call(listEl.querySelectorAll(".place"), function (li) {
          function go() { var m = markers[li.dataset.slug]; if (m) { map.panTo(m.getLatLng()); m.openPopup(); } }
          li.addEventListener("click", go);
          li.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
        });
        teardowns.push(function () { try { map.remove(); } catch (e) {} });
      },

      /* ---- principles ---- */
      principles: function (p) {
        var listEl = document.getElementById("plist");
        var search = document.getElementById("search");
        var count = document.getElementById("resultCount");
        var chips = [].slice.call(pageEl.querySelectorAll(".chip"));
        var dm = domainMap(p);
        var st = { q: "", cat: "" };
        var visible = [];

        function hay(item) {
          var parts = [
            String(item.id), item.name.en || "", item.name.zh || "",
            ((item.aliases || {}).en || []).join(" "), ((item.aliases || {}).zh || []).join(" "),
            t(item.definition)
          ];
          (item.examples || []).forEach(function (ex) {
            parts.push(ex.title.en || "", ex.title.zh || "", t(ex.body));
          });
          return parts.join(" ").toLowerCase();
        }
        function matches(item) {
          if (st.cat && item.group !== st.cat) return false;
          if (!st.q) return true;
          return hay(item).indexOf(st.q) !== -1;
        }
        function domainIcons(item) {
          var seen = [];
          (item.examples || []).forEach(function (ex) {
            if (seen.indexOf(ex.domain) === -1) seen.push(ex.domain);
          });
          return DOMAIN_ORDER.filter(function (k) { return seen.indexOf(k) !== -1; }).map(function (k) {
            var d = dm[k] || {};
            return '<span class="material-symbols-rounded prow__ic" title="' + esc(d[L.state.lang] || d.en || k) + '" aria-hidden="true">' +
              esc(d.icon || "label") + "</span>";
          }).join("");
        }
        function paint() {
          visible = (p.items || []).filter(matches);
          listEl.innerHTML = visible.map(function (item) {
            return '<li class="prow" tabindex="0" role="button" data-item data-slug="' + esc(item.slug) + '" ' +
              'aria-label="' + esc(t(item.name)) + '">' +
              '<span class="prow__num" aria-hidden="true">' + numLabel(item.id) + "</span>" +
              '<span class="prow__main">' +
                '<span class="prow__name">' + esc(t(item.name)) + "</span>" +
                '<span class="prow__def">' + esc(clip(t(item.definition), 110)) + "</span>" +
              "</span>" +
              '<span class="prow__meta">' + domainIcons(item) + "</span></li>";
          }).join("");
          if (count) count.textContent = visible.length + (L.state.lang === "en" ? " principle(s)" : " 項原則");
          wireRows();
        }
        function wireRows() {
          [].forEach.call(listEl.querySelectorAll(".prow[data-slug]"), function (row) {
            var slug = row.dataset.slug;
            row.addEventListener("click", function () { openItem(slug); });
            row.addEventListener("keydown", function (e) {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openItem(slug); }
            });
          });
        }
        function findItem(slug) {
          return (p.items || []).filter(function (it) { return it.slug === slug; })[0] || null;
        }
        function groupLabel(key) {
          var g = (p.groups || []).filter(function (x) { return x.key === key; })[0];
          return g ? (g[L.state.lang] || g.en) : "";
        }
        function openItem(slug) {
          var item = findItem(slug); if (!item) return;
          var en = L.state.lang === "en";
          var dlg = L.dialog(), body = document.getElementById("dialogBody");
          var aliases = ((item.aliases || {})[L.state.lang] || []);
          var html =
            '<p class="dlg-kicker">' + (en ? "Principle " : "原則 ") + numLabel(item.id) +
              (item.group ? ' · <span class="tag">' + esc(groupLabel(item.group)) + "</span>" : "") + "</p>" +
            '<h2 id="dialogTitle" class="dlg-title">' + esc(t(item.name)) +
              ' <span class="dlg-title-alt">' + esc(en ? (item.name.zh || "") : (item.name.en || "")) + "</span></h2>" +
            (aliases.length ? '<p class="dlg-aliases">' + (en ? "Also known as: " : "又稱:") + esc(aliases.join(en ? ", " : "、")) + "</p>" : "") +
            '<p class="dlg-def">' + esc(t(item.definition)) + "</p>";
          if ((item.subPrinciples || []).length) {
            html += "<h3>" + (en ? "Sub-principles" : "子原則") + "</h3><ol class=\"dlg-subs\">" +
              item.subPrinciples.map(function (s) { return "<li>" + esc(t(s)) + "</li>"; }).join("") + "</ol>";
          }
          DOMAIN_ORDER.forEach(function (k) {
            var exs = (item.examples || []).filter(function (ex) { return ex.domain === k; });
            if (!exs.length) return;
            html += domainHead(dm[k] || { key: k }, exs.length);
            html += exs.map(function (ex) {
              return '<div class="ex"><b class="ex__title">' + esc(t(ex.title)) + "</b>" +
                '<p class="ex__body">' + esc(t(ex.body)) +
                (ex.sourceUrl ? ' <a class="ex__src" href="' + esc(ex.sourceUrl) + '" target="_blank" rel="noopener" aria-label="' +
                  (en ? "Source" : "來源") + '"><span class="material-symbols-rounded">open_in_new</span></a>' : "") +
                "</p></div>";
            }).join("");
          });
          if ((item.sources || []).length) {
            html += "<h3>" + (en ? "Sources" : "來源") + '</h3><ul class="dlg-sources">' +
              item.sources.map(function (s) {
                return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + "</a></li>";
              }).join("") + "</ul>";
          }
          var idx = visible.indexOf(item);
          html += '<div class="dlg-nav">' +
            '<button class="btn btn--ghost" id="dlgPrev" type="button">← ' + (en ? "Prev" : "上一項") + "</button>" +
            '<span class="dlg-nav__pos">' + (idx + 1) + " / " + visible.length + "</span>" +
            '<button class="btn btn--ghost" id="dlgNext" type="button">' + (en ? "Next" : "下一項") + " →</button></div>";
          body.innerHTML = html;
          body.scrollTop = 0;
          function navBy(d) {
            if (!visible.length) return;
            var i = visible.indexOf(item);
            openItem(visible[(i + d + visible.length) % visible.length].slug);
          }
          var pv = document.getElementById("dlgPrev"), nx = document.getElementById("dlgNext");
          if (pv) pv.addEventListener("click", function () { navBy(-1); });
          if (nx) nx.addEventListener("click", function () { navBy(1); });
          if (!dlg.open) dlg.showModal();
          if (location.hash.slice(1) !== slug) history.replaceState(null, "", "#" + slug);
        }
        function syncHash() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) openItem(slug);
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); });
            chip.classList.add("chip--active");
            st.cat = chip.dataset.cat || "";
            paint();
          });
        });
        var dlg = L.dialog();
        function onClose() {
          var slug = location.hash.slice(1);
          if (slug && findItem(slug)) history.replaceState(null, "", location.pathname + location.search);
        }
        function onKey(e) {
          if (!dlg.open) return;
          var slug = location.hash.slice(1);
          var item = findItem(slug);
          if (!item) return;
          var i = visible.indexOf(item);
          if (i === -1) return;
          if (e.key === "ArrowLeft") { e.preventDefault(); openItem(visible[(i - 1 + visible.length) % visible.length].slug); }
          if (e.key === "ArrowRight") { e.preventDefault(); openItem(visible[(i + 1) % visible.length].slug); }
        }
        dlg.addEventListener("close", onClose);
        document.addEventListener("keydown", onKey);
        var onHash = function () { syncHash(); };
        window.addEventListener("hashchange", onHash);
        teardowns.push(function () {
          window.removeEventListener("hashchange", onHash);
          document.removeEventListener("keydown", onKey);
          dlg.removeEventListener("close", onClose);
        });
        paint();
        syncHash();
      },

      /* ---- cases ---- */
      cases: function (p) {
        var listEl = document.getElementById("caseList");
        var search = document.getElementById("search");
        var count = document.getElementById("resultCount");
        var chips = [].slice.call(pageEl.querySelectorAll(".chip"));
        var dm = domainMap(p);
        var pp = findPage("principles");
        var flat = [];
        ((pp && pp.items) || []).forEach(function (it) {
          (it.examples || []).forEach(function (ex) { flat.push({ pr: it, ex: ex }); });
        });
        var st = { q: "", cat: "" };

        function matches(row) {
          if (st.cat && row.ex.domain !== st.cat) return false;
          if (!st.q) return true;
          var hay = ((row.ex.title.en || "") + " " + (row.ex.title.zh || "") + " " + t(row.ex.body) + " " +
            (row.pr.name.en || "") + " " + (row.pr.name.zh || "")).toLowerCase();
          return hay.indexOf(st.q) !== -1;
        }
        function caseHtml(row) {
          var en = L.state.lang === "en";
          return '<article class="case" data-item>' +
            '<div class="case__head"><b class="case__title">' + esc(t(row.ex.title)) + "</b>" +
            '<a class="case__pr" href="principles.html#' + esc(row.pr.slug) + '" ' +
              'aria-label="' + (en ? "Principle " : "原則 ") + row.pr.id + " · " + esc(t(row.pr.name)) + '">' +
              "№" + row.pr.id + " · " + esc(t(row.pr.name)) + "</a></div>" +
            '<p class="case__body">' + esc(t(row.ex.body)) +
            (row.ex.sourceUrl ? ' <a class="ex__src" href="' + esc(row.ex.sourceUrl) + '" target="_blank" rel="noopener" aria-label="' +
              (en ? "Source" : "來源") + '"><span class="material-symbols-rounded">open_in_new</span></a>' : "") +
            "</p></article>";
        }
        function paint() {
          var rows = flat.filter(matches);
          var html = "";
          if (!st.cat) {
            DOMAIN_ORDER.forEach(function (k) {
              var sub = rows.filter(function (r) { return r.ex.domain === k; });
              if (!sub.length) return;
              html += domainHead(dm[k] || { key: k }, sub.length, "h2") +
                '<div class="case-group">' + sub.map(caseHtml).join("") + "</div>";
            });
          } else {
            html = '<div class="case-group">' + rows.map(caseHtml).join("") + "</div>";
          }
          listEl.innerHTML = html || '<p class="empty">' + (L.state.lang === "en" ? "No matching cases." : "沒有符合的案例。") + "</p>";
          if (count) count.textContent = rows.length + (L.state.lang === "en" ? " case(s)" : " 個案例");
        }
        if (search) search.addEventListener("input", function () { st.q = this.value.trim().toLowerCase(); paint(); });
        chips.forEach(function (chip) {
          chip.addEventListener("click", function () {
            chips.forEach(function (c) { c.classList.remove("chip--active"); });
            chip.classList.add("chip--active");
            st.cat = chip.dataset.cat || "";
            paint();
          });
        });
        paint();
      },

      /* ---- glossary (same behaviour as faq search) ---- */
      glossary: function (p) { WIRE.faq(p); },

      /* ---- flashcards ---- */
      flashcards: function (p) {
        var pp = findPage("principles");
        var deck = (pp && pp.items) || [];
        if (!p.__fc || p.__fc.order.length !== deck.length) {
          p.__fc = { order: deck.map(function (_, i) { return i; }), i: 0, flipped: false };
        }
        var stFc = p.__fc;
        var card = document.getElementById("fcCard");
        var front = document.getElementById("fcFront");
        var back = document.getElementById("fcBack");
        var prog = document.getElementById("fcProgress");

        function groupLabel(key) {
          var g = ((pp && pp.groups) || []).filter(function (x) { return x.key === key; })[0];
          return g ? (g[L.state.lang] || g.en) : "";
        }
        function paintCard() {
          var item = deck[stFc.order[stFc.i]];
          if (!item) return;
          var en = L.state.lang === "en";
          front.innerHTML = '<span class="fc-num">' + numLabel(item.id) + "</span>" +
            '<b class="fc-name">' + esc(t(item.name)) + "</b>" +
            '<span class="fc-name-alt">' + esc(en ? (item.name.zh || "") : (item.name.en || "")) + "</span>";
          back.innerHTML = '<span class="fc-num">' + numLabel(item.id) + "</span>" +
            '<p class="fc-def">' + esc(t(item.definition)) + "</p>" +
            (item.group ? '<span class="tag">' + esc(groupLabel(item.group)) + "</span>" : "");
          card.classList.toggle("is-flipped", stFc.flipped);
          prog.textContent = (stFc.i + 1) + " / " + deck.length;
        }
        function flip() { stFc.flipped = !stFc.flipped; card.classList.toggle("is-flipped", stFc.flipped); }
        function move(d) {
          stFc.i = (stFc.i + d + deck.length) % deck.length;
          stFc.flipped = false;
          paintCard();
        }
        function shuffle() {
          for (var i = stFc.order.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = stFc.order[i]; stFc.order[i] = stFc.order[j]; stFc.order[j] = tmp;
          }
          stFc.i = 0; stFc.flipped = false;
          paintCard();
        }
        card.addEventListener("click", flip);
        card.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
        });
        document.getElementById("fcFlip").addEventListener("click", flip);
        document.getElementById("fcPrev").addEventListener("click", function () { move(-1); });
        document.getElementById("fcNext").addEventListener("click", function () { move(1); });
        document.getElementById("fcShuffle").addEventListener("click", shuffle);
        function onKey(e) {
          if (e.target && /^(input|textarea)$/i.test(e.target.tagName)) return;
          if (e.key === "ArrowLeft") { e.preventDefault(); move(-1); }
          if (e.key === "ArrowRight") { e.preventDefault(); move(1); }
        }
        document.addEventListener("keydown", onKey);
        teardowns.push(function () { document.removeEventListener("keydown", onKey); });
        paintCard();
      },

      /* ---- quiz ---- */
      quiz: function (p) {
        var box = document.getElementById("quizBox");
        var qs = p.questions || [];
        if (!p.__quiz) p.__quiz = { i: 0, score: 0, picked: null, done: false };
        var stQ = p.__quiz;

        function paint() {
          var en = L.state.lang === "en";
          if (stQ.done || !qs.length) {
            var total = qs.length;
            var pct = total ? Math.round((stQ.score / total) * 100) : 0;
            var verdict = pct >= 80 ? (en ? "TRIZ master in the making." : "萃思高手在望。")
              : pct >= 50 ? (en ? "Solid — review the misses and go again." : "不錯——複習錯題再來一次。")
              : (en ? "A good start — the flashcards may help." : "好的開始——可以先去翻卡練習。");
            box.innerHTML = '<div class="quiz-result" data-item>' +
              '<p class="fc-progress">' + (en ? "Your score" : "你的得分") + "</p>" +
              '<p class="quiz-score">' + stQ.score + " / " + total + "</p>" +
              "<p>" + esc(verdict) + "</p>" +
              '<button class="btn" id="qzRestart" type="button">' + (en ? "Try again" : "再玩一次") + "</button></div>";
            var rb = document.getElementById("qzRestart");
            if (rb) rb.addEventListener("click", function () {
              p.__quiz = { i: 0, score: 0, picked: null, done: false };
              stQ = p.__quiz;
              paint();
            });
            return;
          }
          var q = qs[stQ.i];
          var picked = stQ.picked;
          var opts = q.options.map(function (o, oi) {
            var cls = "quiz-opt";
            if (picked !== null) {
              if (oi === q.answerIndex) cls += " quiz-opt--correct";
              else if (oi === picked) cls += " quiz-opt--wrong";
              cls += " quiz-opt--locked";
            }
            return '<button class="' + cls + '" type="button" data-oi="' + oi + '"' +
              (picked !== null ? " disabled" : "") + ">" + esc(t(o)) + "</button>";
          }).join("");
          var explain = picked !== null
            ? '<div class="quiz-explain" data-item><b>' + (picked === q.answerIndex ? (en ? "Correct!" : "答對了!") : (en ? "Not quite." : "可惜。")) + "</b> " +
              esc(t(q.explain)) + "</div>" +
              '<button class="btn" id="qzNext" type="button">' +
              (stQ.i + 1 >= qs.length ? (en ? "See results" : "看結果") : (en ? "Next question" : "下一題")) + "</button>"
            : "";
          box.innerHTML =
            '<p class="fc-progress">' + (en ? "Question " : "第 ") + (stQ.i + 1) + " / " + qs.length +
              (en ? " · Score " : " 題 · 得分 ") + stQ.score + "</p>" +
            '<h2 class="quiz-q" data-item>' + esc(t(q.q)) + "</h2>" +
            '<div class="quiz-opts">' + opts + "</div>" + explain;
          if (picked === null) {
            [].forEach.call(box.querySelectorAll(".quiz-opt"), function (b) {
              b.addEventListener("click", function () {
                stQ.picked = parseInt(b.dataset.oi, 10);
                if (stQ.picked === q.answerIndex) stQ.score++;
                paint();
              });
            });
          } else {
            var nb = document.getElementById("qzNext");
            if (nb) nb.addEventListener("click", function () {
              stQ.i++;
              stQ.picked = null;
              if (stQ.i >= qs.length) stQ.done = true;
              paint();
            });
          }
        }
        paint();
      }
    };

    /* ---- hero count-up (shared by hub) ---- */
    function animateCounters() {
      var els = [].slice.call(pageEl.querySelectorAll(".hero__stat-value[data-count]"));
      if (!els.length) return;
      function run(el) {
        var target = parseFloat(el.dataset.count) || 0, dur = 1000, start = null;
        function step(ts) {
          if (start === null) start = ts;
          var pr = Math.min(1, (ts - start) / dur), eased = 1 - Math.pow(1 - pr, 3);
          el.textContent = String(Math.round(target * eased));
          if (pr < 1) requestAnimationFrame(step); else el.textContent = String(target);
        }
        requestAnimationFrame(step);
      }
      if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
      }, { threshold: 0.4 });
      els.forEach(function (el) { io.observe(el); });
      teardowns.push(function () { io.disconnect(); });
    }

    /* =====================================================================
       RENDER the current page; re-runnable on language switch
       ===================================================================== */
    function render() {
      teardowns.forEach(function (fn) { try { fn(); } catch (e) {} });
      teardowns = [];
      var p = L.currentPage();
      if (!p) { pageEl.innerHTML = '<p class="empty">No page data.</p>'; return; }
      var fn = RENDERERS[p.layout] || RENDERERS.gallery;
      pageEl.className = "page page--" + p.layout;
      pageEl.innerHTML = fn(p);
      var w = WIRE[p.layout];
      if (w) w(p);
    }

    L.onLang(render);
    render();
  }

  boot();
})();
