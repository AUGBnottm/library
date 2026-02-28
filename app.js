(function () {
  const lang = document.body?.dataset?.lang || "en";

  const UI = {
    en: {
      booksLabel: "Books",
      emptyEmbed: "Paste flipbook link in app.js → iframeSrc",
      badge: "Flipbook",
      placeholderTitle: "Book title",
      placeholderDesc: "Short description. Add tags for easier search.",
      catalogue: [
        "Ukrainian Classics",
        "World Classics",
        "History",
        "Philosophy",
        "Religion & Spirituality",
        "Poetry",
        "Drama & Theatre",
        "Cinema & Media",
        "Art & Design",
        "Culture & Ethnography",
        "Languages & Dictionaries",
        "Education & Methods",
        "Science & Popular Knowledge",
        "Children’s Literature",
        "Archive & Special Projects",
      ],
    },
    uk: {
      booksLabel: "Книг",
      emptyEmbed: "Встав посилання на flipbook в app.js → iframeSrc",
      badge: "Фліпбук",
      placeholderTitle: "Назва книги",
      placeholderDesc: "Короткий опис. Додай теги для пошуку.",
      catalogue: [
        "Українська класика",
        "Світова класика",
        "Історія",
        "Філософія",
        "Релігія та духовність",
        "Поезія",
        "Драма та театр",
        "Кіно та медіа",
        "Мистецтво та дизайн",
        "Культура та етнографія",
        "Мови та словники",
        "Освіта та методики",
        "Наука та популяризація",
        "Дитяча література",
        "Архів та спецпроєкти",
      ],
    }
  };

  const T = UI[lang] || UI.en;

  // ========= Helpers for bilingual fields =========
  // Allows values like:
  // title: { en: "Kobzar", uk: "Кобзар" }
  // desc:  { en: "...",    uk: "..."    }
  // tags:  { en: ["poetry"], uk: ["поезія"] }
  function pickLangText(v) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      return v[lang] || v.en || v.uk || "";
    }
    return v || "";
  }

  function pickLangTags(v) {
    if (Array.isArray(v)) return v;
    if (v && typeof v === "object") {
      const t = v[lang] || v.en || v.uk || [];
      return Array.isArray(t) ? t : [];
    }
    return [];
  }

  // For search: put both languages into data-attributes so you can search either EN or UA
  function flattenAnyText(v) {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      const parts = [v.en, v.uk].filter(Boolean);
      return parts.join(" | ");
    }
    return v || "";
  }

  function flattenTags(v) {
    if (Array.isArray(v)) return v.join(",");
    if (v && typeof v === "object") {
      const en = Array.isArray(v.en) ? v.en : [];
      const uk = Array.isArray(v.uk) ? v.uk : [];
      return [...en, ...uk].join(",");
    }
    return "";
  }

  // ============ DATA: 15 sections x 10 books ============
  // IMPORTANT:
  // - Books are bilingual: title/desc/access can be {en, uk}
  // - tags can be {en:[...], uk:[...]} or just one array [...]
  //
  // Example iframeSrc:
  // "https://heyzine.com/flip-book/f3692525e4.html"
  //
  const placeholders = {
    title: { en: UI.en.placeholderTitle, uk: UI.uk.placeholderTitle },
    desc: { en: UI.en.placeholderDesc, uk: UI.uk.placeholderDesc },
  };

  const library = T.catalogue.map((sectionTitle, sIdx) => ({
  id: `sec-${sIdx + 1}`,
  title: sectionTitle,
  books: [] // ✅ теперь в полке нет заглушек, только реальные книги
}));
  
// ============ EXAMPLES: add books into different shelves ============
// Principle:
// library[НомерПолки].books[НомерКарточки] = { ...книга... };
// Полки начинаются с 0, карточки тоже с 0.

// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.1", uk: "Літопис Української Повстанської Армії том 1" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1975",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/f3692525e4.html"
};
  // 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.2", uk: "Літопис Української Повстанської Армії том 2" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1985",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/3057e1b0bb.html"
};
    // 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.3", uk: "Літопис Української Повстанської Армії том 3" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1987",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/cd2c5ce204.html"
};
   // 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.4", uk: "Літопис Української Повстанської Армії том 4" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1989",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/11e853a480.html"
};
   // 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.5", uk: "Літопис Української Повстанської Армії том 5" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1984",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/e1eb6f5adb.html"
};
  // OPTIONAL: demo example (remove if you want)
  // library[0].books[0] = {
  //   title: { en: "Chronicle of UPA, Vol. 1", uk: "Літопис Української Повстанської Армії, Том 1" },
  //   author: "—",
  //   year: "",
  //   access: { en: "Restricted / On request", uk: "Обмежено / За запитом" },
  //   tags: { en: ["history", "UPA"], uk: ["історія", "УПА"] },
  //   desc: { en: "Flipbook preview.", uk: "Перегляд у форматі фліпбуку." },
  //   iframeSrc: "https://heyzine.com/flip-book/f3692525e4.html"
  // };

  // ============ DOM refs ============
  const sectionsEl = document.getElementById("sections");
  const searchInput = document.getElementById("searchInput");
  const jumpSelect = document.getElementById("jumpSelect");
  const resultCount = document.getElementById("resultCount");
  const expandAllBtn = document.getElementById("expandAllBtn");
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  const yearNow = document.getElementById("yearNow");

  if (yearNow) yearNow.textContent = new Date().getFullYear();
  if (!sectionsEl) return;

  // ============ Render ============
  function bookToCard(book) {
    const tags = pickLangTags(book.tags);

    const metaParts = [];
    if (book.author) metaParts.push(book.author);
    if (book.year) metaParts.push(book.year);

    const accessText = pickLangText(book.access);
    if (accessText) metaParts.push(accessText);

    const meta = metaParts.join(" • ");

    const titleText = pickLangText(book.title);
    const descText = pickLangText(book.desc);

    const safeTitle = escapeHtml(titleText || "");
    const safeDesc = escapeHtml(descText || "");
    const safeMeta = escapeHtml(meta);

    // searchable fields: include BOTH languages where possible
    const dataTitle = attrSafe(flattenAnyText(book.title));
    const dataDesc = attrSafe(flattenAnyText(book.desc));
    const dataAuthor = attrSafe(book.author || "");
    const dataYear = attrSafe(book.year || "");
    const dataTags = attrSafe(flattenTags(book.tags));

    const iframe = book.iframeSrc
      ? `<iframe src="${attrSafe(book.iframeSrc)}" loading="lazy" allow="fullscreen; clipboard-write" allowfullscreen></iframe>`
      : `<div class="embed__empty">${escapeHtml(T.emptyEmbed)}</div>`;

    const tagsHtml = tags.length
      ? tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")
      : "";

    return `
      <article class="card book"
        data-title="${dataTitle}"
        data-desc="${dataDesc}"
        data-author="${dataAuthor}"
        data-year="${dataYear}"
        data-tags="${dataTags}">
        <div class="card__top">
          <div>
            <h3 class="card__title">${safeTitle}</h3>
            <p class="card__meta">${safeMeta}</p>
          </div>
          <span class="badge">${escapeHtml(T.badge)}</span>
        </div>

        <p class="card__desc">${safeDesc}</p>

        <div class="embed">
          ${iframe}
        </div>

        <div class="card__tags">${tagsHtml}</div>
      </article>
    `;
  }

  function render() {
    sectionsEl.innerHTML = library.map((sec, idx) => {
      const booksHtml = sec.books.map(bookToCard).join("");
      return `
        <details class="cat" data-category="${escapeHtml(sec.title)}" ${idx === 0 ? "open" : ""}>
          <summary class="cat__summary">
            <span class="cat__title">${idx + 1}) ${escapeHtml(sec.title)}</span>
            <span class="cat__count" data-count>0</span>
          </summary>
          <div class="cat__body grid">
            ${booksHtml}
          </div>
        </details>
      `;
    }).join("");

    hydrateJump();
    updateCounts();
  }

  function hydrateJump() {
    if (!jumpSelect) return;
    jumpSelect.innerHTML = `<option value="">${lang === "uk" ? "— Обрати розділ —" : "— Choose a section —"}</option>`;
    const cats = Array.from(document.querySelectorAll(".cat"));
    cats.forEach((cat, idx) => {
      const title = cat.querySelector(".cat__title")?.textContent?.trim() || `Section ${idx + 1}`;
      const opt = document.createElement("option");
      opt.value = String(idx);
      opt.textContent = title;
      jumpSelect.appendChild(opt);
    });

    jumpSelect.onchange = () => {
      const i = parseInt(jumpSelect.value, 10);
      if (Number.isNaN(i)) return;
      const cats2 = Array.from(document.querySelectorAll(".cat"));
      const el = cats2[i];
      if (!el) return;
      el.open = true;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
  }

  function updateCounts() {
    const cats = Array.from(document.querySelectorAll(".cat"));
    const books = Array.from(document.querySelectorAll(".book"));

    let totalVisible = 0;

    cats.forEach((cat) => {
      const inCat = Array.from(cat.querySelectorAll(".book"));
      const visible = inCat.filter(b => b.style.display !== "none").length;
      const countEl = cat.querySelector("[data-count]");
      if (countEl) countEl.textContent = String(visible);
      totalVisible += visible;
    });

    if (resultCount) {
      resultCount.textContent = `${T.booksLabel}: ${totalVisible}`;
    }
  }

  function normalise(s) {
    return (s || "")
      .toString()
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function applySearch(qRaw) {
    const q = normalise(qRaw);
    const books = Array.from(document.querySelectorAll(".book"));

    books.forEach((b) => {
      const hay = normalise([
        b.dataset.title,
        b.dataset.desc,
        b.dataset.author,
        b.dataset.year,
        b.dataset.tags,
        b.querySelector(".card__desc")?.textContent
      ].join(" | "));

      const show = q.length === 0 || hay.includes(q);
      b.style.display = show ? "" : "none";
    });

    updateCounts();
  }

  // expand/collapse
  if (expandAllBtn) expandAllBtn.onclick = () => Array.from(document.querySelectorAll(".cat")).forEach(c => c.open = true);
  if (collapseAllBtn) collapseAllBtn.onclick = () => Array.from(document.querySelectorAll(".cat")).forEach(c => c.open = false);

  if (searchInput) {
    searchInput.addEventListener("input", (e) => applySearch(e.target.value));
  }

  // utils
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[m]));
  }
  function attrSafe(str) {
    return escapeHtml(str).replace(/\s+/g, " ").trim();
  }

  // go
  render();
})();
