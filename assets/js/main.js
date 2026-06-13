/* =================================================================
   ZAYAN AL-JAZEERA — Interaction & animation engine
   Hand-built, zero dependencies. Progressive enhancement:
   every feature degrades gracefully and respects reduced-motion.
   ================================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var coarse = window.matchMedia("(pointer: coarse)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Page loader (full intro once per session) --------- */
  function initLoader() {
    var loader = $(".loader");
    if (!loader) return;
    var seen = false;
    try { seen = sessionStorage.getItem("za_seen") === "1"; } catch (e) {}
    if (seen || reduced) {
      // skip the intro on subsequent navigations
      loader.style.transition = "none";
      loader.classList.add("done");
      setTimeout(function () { loader.remove(); }, 50);
      return;
    }
    try { sessionStorage.setItem("za_seen", "1"); } catch (e) {}
    window.addEventListener("load", function () {
      setTimeout(function () {
        loader.classList.add("done");
        document.body.classList.add("loaded");
        setTimeout(function () { loader.remove(); }, 1200);
      }, 700);
    });
    setTimeout(function () { if (loader.parentNode) { loader.classList.add("done"); } }, 4500);
  }

  /* ---------- Lenis-style smooth scroll (desktop only) ----------- */
  function initSmoothScroll() {
    if (reduced || coarse) return;
    var current = window.scrollY, target = current, ease = 0.1, running = false;
    function maxScroll() { return document.documentElement.scrollHeight - window.innerHeight; }
    function clamp(v) { return Math.max(0, Math.min(v, maxScroll())); }
    function loop() {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.5) {
        current = target; window.scrollTo(0, Math.round(current)); running = false; return;
      }
      window.scrollTo(0, current);
      requestAnimationFrame(loop);
    }
    function onWheel(e) {
      if (e.ctrlKey || document.body.classList.contains("menu-open")) return;
      var dy = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaMode === 2 ? e.deltaY * window.innerHeight : e.deltaY;
      target = clamp(target + dy);
      e.preventDefault();
      if (!running) { running = true; current = window.scrollY; requestAnimationFrame(loop); }
    }
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", function () { if (!running) { target = current = window.scrollY; } });
    window.addEventListener("resize", function () { target = clamp(target); });
    root.classList.add("has-smooth");
  }

  /* ---------- Header behaviour ----------------------------------- */
  function initHeader() {
    var header = $(".site-header");
    if (!header) return;
    var lastY = window.scrollY, threshold = 40;
    function update() {
      var y = window.scrollY;
      header.classList.toggle("at-top", y < threshold);
      header.classList.toggle("scrolled", y >= threshold);
      // hide on scroll-down, show on scroll-up (past hero)
      if (!document.body.classList.contains("menu-open")) {
        if (y > 460 && y > lastY) header.classList.add("hidden");
        else header.classList.remove("hidden");
      }
      lastY = y;
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ---------- Mobile menu --------------------------------------- */
  function initMenu() {
    var toggle = $(".nav-toggle");
    var overlay = $(".menu-overlay");
    if (!toggle || !overlay) return;
    function close() { document.body.classList.remove("menu-open"); toggle.setAttribute("aria-expanded", "false"); }
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$(".menu-overlay a").forEach(function (a) { a.addEventListener("click", close); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }

  /* ---------- Reveal on scroll ---------------------------------- */
  function initReveal() {
    var els = $$("[data-reveal],[data-clip]");
    if (!("IntersectionObserver" in window) || reduced) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    // auto-stagger siblings inside [data-stagger]
    $$("[data-stagger]").forEach(function (group) {
      $$("[data-reveal]", group).forEach(function (el, i) {
        if (!el.style.getPropertyValue("--i")) el.style.setProperty("--i", i);
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Split text (word reveal) -------------------------- */
  function initSplit() {
    var nodes = $$("[data-split]");
    if (!nodes.length) return;
    nodes.forEach(function (node) {
      if (reduced) return;
      var words = node.textContent.trim().split(/\s+/);
      node.textContent = "";
      words.forEach(function (w, i) {
        var outer = document.createElement("span");
        outer.className = "split-word";
        var inner = document.createElement("span");
        inner.style.setProperty("--wi", i);
        inner.textContent = w;
        outer.appendChild(inner);
        node.appendChild(outer);
        node.appendChild(document.createTextNode(" "));
      });
    });
    if (!("IntersectionObserver" in window) || reduced) { nodes.forEach(function (n) { n.classList.add("split-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("split-in"); io.unobserve(en.target); } });
    }, { threshold: 0.3 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Parallax ------------------------------------------ */
  function initParallax() {
    if (reduced) return;
    var items = $$("[data-parallax]");
    if (!items.length) return;
    var ticking = false;
    function apply() {
      var vh = window.innerHeight;
      items.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
        var r = el.getBoundingClientRect();
        var center = r.top + r.height / 2;
        var off = (center - vh / 2) * speed * -1;
        el.style.transform = "translate3d(0," + off.toFixed(1) + "px,0)";
      });
      ticking = false;
    }
    function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(apply); } }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();
  }

  /* ---------- Counters ------------------------------------------ */
  function initCounters() {
    var nums = $$("[data-count]");
    if (!nums.length) return;
    function run(el) {
      var to = parseFloat(el.getAttribute("data-count"));
      var dec = (el.getAttribute("data-count").split(".")[1] || "").length;
      var dur = 1600, start = null;
      if (reduced) { el.textContent = to.toLocaleString(); return; }
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var val = to * eased;
        el.textContent = (dec ? val.toFixed(dec) : Math.round(val)).toLocaleString();
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Footer giant-text "blinds" reveal ----------------- */
  function initBlinds() {
    var words = $$(".footer-bigtext .word");
    if (!words.length) return;
    if (reduced || !("IntersectionObserver" in window)) { words.forEach(function (w) { w.classList.add("revealed"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var w = en.target;
          setTimeout(function () { w.classList.add("revealed"); }, (parseInt(w.getAttribute("data-delay")) || 0));
          io.unobserve(w);
        }
      });
    }, { threshold: 0.4 });
    words.forEach(function (w) { io.observe(w); });
  }

  /* ---------- FAQ accordion ------------------------------------- */
  function initFaq() {
    $$(".faq-item").forEach(function (item) {
      var q = $(".faq-q", item), a = $(".faq-a", item);
      if (!q || !a) return;
      q.setAttribute("aria-expanded", "false");
      q.addEventListener("click", function () {
        var open = item.classList.contains("open");
        // optional: close siblings
        var parent = item.parentNode;
        $$(".faq-item.open", parent).forEach(function (sib) {
          if (sib !== item) { sib.classList.remove("open"); var sa = $(".faq-a", sib); if (sa) sa.style.height = "0px"; var sq = $(".faq-q", sib); if (sq) sq.setAttribute("aria-expanded", "false"); }
        });
        if (open) { item.classList.remove("open"); a.style.height = "0px"; q.setAttribute("aria-expanded", "false"); }
        else { item.classList.add("open"); a.style.height = a.scrollHeight + "px"; q.setAttribute("aria-expanded", "true"); }
      });
    });
    window.addEventListener("resize", function () {
      $$(".faq-item.open .faq-a").forEach(function (a) { a.style.height = a.scrollHeight + "px"; });
    });
  }

  /* ---------- Custom cursor ------------------------------------- */
  function initCursor() {
    if (coarse || reduced || window.matchMedia("(hover: none)").matches) return;
    var ring = document.createElement("div"); ring.className = "cursor";
    var dot = document.createElement("div"); dot.className = "cursor-dot";
    document.body.appendChild(ring); document.body.appendChild(dot);
    document.body.classList.add("cursor-on");
    var rx = 0, ry = 0, dx = 0, dy = 0, tx = 0, ty = 0;
    document.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      ring.style.opacity = "1"; dot.style.opacity = "1";
    });
    document.addEventListener("mouseleave", function () { ring.style.opacity = "0"; dot.style.opacity = "0"; });
    (function render() {
      rx += (tx - rx) * 0.16; ry += (ty - ry) * 0.16;
      dx += (tx - dx) * 0.55; dy += (ty - dy) * 0.55;
      ring.style.transform = "translate3d(" + rx + "px," + ry + "px,0)";
      dot.style.transform = "translate3d(" + dx + "px," + dy + "px,0)";
      requestAnimationFrame(render);
    })();
    $$("a, button, .project, [data-cursor]").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        ring.classList.add("hover");
        if (el.classList.contains("project") || el.getAttribute("data-cursor") === "view") ring.classList.add("view");
      });
      el.addEventListener("mouseleave", function () { ring.classList.remove("hover"); ring.classList.remove("view"); });
    });
  }

  /* ---------- Magnetic buttons ---------------------------------- */
  function initMagnetic() {
    if (coarse || reduced) return;
    $$("[data-magnetic]").forEach(function (el) {
      var strength = parseFloat(el.getAttribute("data-magnetic")) || 0.3;
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        el.style.transform = "translate(" + x * strength + "px," + y * strength + "px)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = ""; });
    });
  }

  /* ---------- Subtle tilt -------------------------------------- */
  function initTilt() {
    if (coarse || reduced) return;
    $$("[data-tilt]").forEach(function (el) {
      var max = parseFloat(el.getAttribute("data-tilt")) || 6;
      el.style.transformStyle = "preserve-3d";
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "perspective(900px) rotateY(" + (px * max) + "deg) rotateX(" + (-py * max) + "deg)";
      });
      el.addEventListener("mouseleave", function () { el.style.transform = "perspective(900px) rotateX(0) rotateY(0)"; });
    });
  }

  /* ---------- Back to top --------------------------------------- */
  function initTop() {
    var btn = $(".fab .top");
    if (!btn) return;
    window.addEventListener("scroll", function () { btn.classList.toggle("show", window.scrollY > 700); }, { passive: true });
    btn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); });
  }

  /* ---------- Active nav link ----------------------------------- */
  function initActiveNav() {
    var path = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "");
    $$(".nav-links a, .menu-overlay a").forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#") return;
      var hp = href.replace(/index\.html$/, "").replace(/\/$/, "").replace(/^\.\//, "");
      var norm = path.split("/").pop();
      if ((norm === "" && (hp === "" || hp === "index.html")) || (hp !== "" && norm === hp)) {
        a.classList.add("active");
      }
    });
  }

  /* ---------- ERP / CRM-ready lead form ------------------------- *
   * Forms POST JSON to the endpoint set on [data-endpoint].
   * Until that endpoint is wired to the ERP/CRM, the form captures
   * the full lead payload (incl. UTM + page attribution) and shows
   * a success state. Replace data-endpoint with the live ERP intake
   * URL (or webhook) to go live — no other change required.
   * ---------------------------------------------------------------*/
  function captureAttribution() {
    var p = new URLSearchParams(location.search);
    return {
      source_page: location.pathname,
      page_url: location.href,
      referrer: document.referrer || "direct",
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_term: p.get("utm_term") || "",
      utm_content: p.get("utm_content") || "",
      submitted_at: new Date().toISOString()
    };
  }
  function initForms() {
    $$("form[data-lead-form]").forEach(function (form) {
      // inject attribution + page into hidden fields if present
      var attr = captureAttribution();
      Object.keys(attr).forEach(function (k) {
        var f = form.querySelector('[name="' + k + '"]');
        if (f) f.value = attr[k];
      });
      var statusBox = $(".form-success", form);
      var submitBtn = form.querySelector('[type="submit"]');
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        // honeypot
        var hp = form.querySelector('[name="company_website"]');
        if (hp && hp.value) return;
        if (!form.checkValidity()) { form.reportValidity(); return; }

        var data = {};
        new FormData(form).forEach(function (v, k) { data[k] = v; });
        delete data.company_website;

        var endpoint = form.getAttribute("data-endpoint");
        var originalLabel = submitBtn ? submitBtn.innerHTML : "";
        if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = "Sending…"; }

        function done(ok) {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalLabel; }
          if (ok) {
            if (statusBox) {
              statusBox.textContent = "Thank you — your request has been received. A member of our team will be in touch within one business day.";
              statusBox.classList.add("show");
            }
            form.reset();
            // re-inject hidden attribution after reset
            Object.keys(attr).forEach(function (k) { var f = form.querySelector('[name="' + k + '"]'); if (f) f.value = attr[k]; });
            if (statusBox) statusBox.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
          } else {
            if (statusBox) {
              statusBox.textContent = "We couldn't submit your request just now. Please email us at info@zayanaljazeera.com or try again.";
              statusBox.classList.add("show");
              statusBox.style.background = "rgba(214,69,69,.1)";
              statusBox.style.borderColor = "rgba(214,69,69,.4)";
              statusBox.style.color = "#b23b3b";
            }
          }
        }

        if (endpoint) {
          fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
          }).then(function (r) { done(r.ok); }).catch(function () { done(false); });
        } else {
          // No endpoint wired yet: log payload for integration + succeed.
          console.info("[Zayan lead capture] payload ready for ERP/CRM intake:", data);
          setTimeout(function () { done(true); }, 600);
        }
      });
    });
  }

  /* ---------- Internal page-transition (fade) ------------------ */
  function initPageTransitions() {
    if (reduced) return;
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a") : null;
      if (!a) return;
      var href = a.getAttribute("href");
      if (!href || a.target === "_blank" || a.hasAttribute("download")) return;
      if (href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return;
      // external links: let them open normally
      if (/^https?:\/\//i.test(href) && href.indexOf(location.host) === -1) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      document.body.classList.add("is-leaving");
      setTimeout(function () { window.location.href = href; }, 300);
    });
    window.addEventListener("pageshow", function (e) {
      if (e.persisted) document.body.classList.remove("is-leaving");
    });
  }

  /* ---------- Footer year -------------------------------------- */
  function initYear() { $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); }); }

  /* ---------- Boot --------------------------------------------- */
  function boot() {
    initLoader();
    initHeader();
    initMenu();
    initReveal();
    initSplit();
    initParallax();
    initCounters();
    initBlinds();
    initFaq();
    initCursor();
    initMagnetic();
    initTilt();
    initTop();
    initActiveNav();
    initForms();
    initPageTransitions();
    initYear();
    initSmoothScroll();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
