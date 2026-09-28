(function () {
  const grid = document.getElementById("project-grid");
  const filtersEl = document.getElementById("filters");
  const emptyEl = document.getElementById("empty-state");
  const projects = (typeof PROJECTS !== "undefined" ? PROJECTS : []).filter((p) => p && p.title);
  let activeTag = "All";

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") node.className = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v);
    }
    children.forEach((c) => c && node.appendChild(c));
    return node;
  }

  function formatDate(d) {
    if (!d) return "";
    const [y, m] = String(d).split("-");
    if (!m) return y;
    const month = new Date(Number(y), Number(m) - 1).toLocaleString("en", { month: "short" });
    return `${month} ${y}`;
  }

  function card(p) {
    const links = el("div", { class: "card-links" }, [
      p.demo ? el("a", { href: p.demo, target: "_blank", rel: "noopener", text: "Live ↗" }) : null,
      p.repo ? el("a", { href: p.repo, target: "_blank", rel: "noopener", text: "Code ↗" }) : null,
    ]);

    const media = p.image
      ? el("div", { class: "card-media" }, [el("img", { src: p.image, alt: `Screenshot of ${p.title}`, loading: "lazy" })])
      : el("div", { class: "card-media card-media--placeholder", "aria-hidden": "true", text: p.title.charAt(0) });

    return el("article", { class: "card" + (p.featured ? " card--featured" : "") }, [
      media,
      el("div", { class: "card-body" }, [
        el("div", { class: "card-meta" }, [
          p.featured ? el("span", { class: "badge", text: "Featured" }) : null,
          p.date ? el("span", { class: "date", text: formatDate(p.date) }) : null,
        ]),
        el("h3", { text: p.title }),
        el("p", { text: p.description || "" }),
        el("ul", { class: "tags" }, (p.tags || []).map((t) => el("li", { text: t }))),
        links,
      ]),
    ]);
  }

  function render() {
    grid.innerHTML = "";
    const visible = activeTag === "All" ? projects : projects.filter((p) => (p.tags || []).includes(activeTag));
    visible.forEach((p) => grid.appendChild(card(p)));
    emptyEl.hidden = visible.length > 0;
  }

  function renderFilters() {
    const tags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];
    if (tags.length <= 2) return; // no point filtering with one tag
    tags.forEach((t) => {
      const b = el("button", { class: "chip", type: "button", text: t, "aria-pressed": String(t === activeTag) });
      b.addEventListener("click", () => {
        activeTag = t;
        filtersEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", String(c.textContent === t)));
        render();
      });
      filtersEl.appendChild(b);
    });
  }

  // Theme toggle (remembers choice)
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem("theme");
    if (saved) root.dataset.theme = saved;
  } catch (e) {}
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  renderFilters();
  render();
})();
