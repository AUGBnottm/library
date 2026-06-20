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
        "UIA & OUN Сhronicles and Diaries",
        "UIA & OUN Сhronicles, POW Diaries",
        "Diaspora Literature and Ukrainian Classics",
        "English-language Historical Literature & Photo Books",
        "English-language Historical Literature & Diaspora Literature",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
        "Coming soon...",
      ],
    },
    uk: {
      booksLabel: "Книг",
      emptyEmbed: "Встав посилання на flipbook в app.js → iframeSrc",
      badge: "Фліпбук",
      placeholderTitle: "Назва книги",
      placeholderDesc: "Короткий опис. Додай теги для пошуку.",
      catalogue: [
        "Хроніки та щоденники ОУН/УПА",
        "Хроніки та щоденники ОУН/УПА та полонених",
        "Діаспорянська та класична література",
        "Англомовні історичні книжки та фото-книги",
        "Англомовні історичні книжки та діаспорянська література",
        "В розробці...",
        "В розробці...",
        "В розробці...",
        "В розробці...",
        "В розробці...",
        "В розробці...",
        "В розробці...",
        "В розробці...",
        "В розробці...",
        "В розробці...",
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
  books: [] // ✅ real books only
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
});
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
});
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
});
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
});
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
});
   // 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.6", uk: "Літопис Української Повстанської Армії том 6" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1983",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/a8bdb90e8a.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.7", uk: "Літопис Української Повстанської Армії том 7" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1983",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/d70e0154f2.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.8", uk: "Літопис Української Повстанської Армії том 8" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1980",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/69f973227f.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.9", uk: "Літопис Української Повстанської Армії том 9" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1982",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/0749d7a7e8.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.10", uk: "Літопис Української Повстанської Армії том 10" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1994",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/908c4bc389.html"
});
  // 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.11", uk: "Літопис Української Повстанської Армії том 11" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1985",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/78283d65c5.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.12", uk: "Літопис Української Повстанської Армії том 12" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1989",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/5d4bd94ffb.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.13", uk: "Літопис Української Повстанської Армії том 13" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1986",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/e4361af4e3.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.14", uk: "Літопис Української Повстанської Армії том 14" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1987",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/249b9d35ff.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.15", uk: "Літопис Української Повстанської Армії том 15" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1987",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/7d86b46dad.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.16", uk: "Літопис Української Повстанської Армії том 16" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1987",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/ea49cdb096.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.17", uk: "Літопис Української Повстанської Армії том 17" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1988",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/5cb68f3c9f.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.18", uk: "Літопис Української Повстанської Армії том 18" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1990",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/32b5c5796f.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.19", uk: "Літопис Української Повстанської Армії том 19" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1992",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/c8283a0d42.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.20", uk: "Літопис Української Повстанської Армії том 20" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1994",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/3630bfd1fb.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.21", uk: "Літопис Української Повстанської Армії том 21" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1991",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/7db43610e0.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.22", uk: "Літопис Української Повстанської Армії том 22" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1992",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/e6f456e9c6.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.23", uk: "Літопис Української Повстанської Армії том 23" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1992",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/5b70e7c8ab.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.24", uk: "Літопис Української Повстанської Армії том 24" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1995",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/83432f78a4.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.25", uk: "Літопис Української Повстанської Армії том 25" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1995",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/edad57c916.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.26", uk: "Літопис Української Повстанської Армії том 26" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2001",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/db997889a2.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.27", uk: "Літопис Української Повстанської Армії том 27" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1997",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/ce12d08fa7.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.28", uk: "Літопис Української Повстанської Армії том 28" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1995",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/bd02a6fc9e.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.29", uk: "Літопис Української Повстанської Армії том 29" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "1999",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/24bcfaed56.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.30", uk: "Літопис Української Повстанської Армії том 30" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2000",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/b51d1d9ac6.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.31", uk: "Літопис Української Повстанської Армії том 31" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2001",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/766bcfb46e.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.32", uk: "Літопис Української Повстанської Армії том 32" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2001",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/0cf579128d.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.33", uk: "Літопис Української Повстанської Армії том 33" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2001",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/237081e1b9.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.34", uk: "Літопис Української Повстанської Армії том 34" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2002",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/675658fe09.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.35", uk: "Літопис Української Повстанської Армії том 35" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2002",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/c55244fec2.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.37", uk: "Літопис Української Повстанської Армії том 37" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2002",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/18903511c2.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.38", uk: "Літопис Української Повстанської Армії том 38" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2002",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/6d323cb2f5.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.39", uk: "Літопис Української Повстанської Армії том 39" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2003",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/2c02547af8.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.41", uk: "Літопис Української Повстанської Армії том 41" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2004",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/618948f5ae.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.42", uk: "Літопис Української Повстанської Армії том 42" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2005",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/1a5e6d4187.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.44", uk: "Літопис Української Повстанської Армії том 44" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2006",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/fc594f3313.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.45", uk: "Літопис Української Повстанської Армії том 45" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2007",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/0cf9e704c9.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.46", uk: "Літопис Української Повстанської Армії том 46" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2007",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/826e543af9.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.47", uk: "Літопис Української Повстанської Армії том 47" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2009",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/555a56fc1d.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Chronicles of the Ukrainian Insurgent Army vol.48", uk: "Літопис Української Повстанської Армії том 48" },
  author: "OUN Chronicle Committee / Комітет Літопису ОУН",
  year: "2010",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літопис Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/332ec24720.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Outline of the history of the OUN vol.1", uk: "Нарис Історії ОУН том 1" },
  author: "Petro Mirchuk / Петро Мірчук",
  year: "1968",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "History of the OUN.",
    uk: "Історія ОУН."
  },
  iframeSrc: "https://heyzine.com/flip-book/aedf819526.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Political Prisoners' Album", uk: "Альбум Політв'язнів" },
  author: "Paladii Osynka / Паладій Осинка",
  year: "?",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "A unique testimony to the horrors of the Nazi concentration camp Auschwitz through the prism of caricatures.",
    uk: "Унікальне свідоцтво про жахи нацистського концтабору Аушвіц через призму шаржів."
  },
  iframeSrc: "https://heyzine.com/flip-book/53dd0fb042.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "The 30th of June 1941", uk: "30 Червня 1941" },
  author: "Yaroslav Stetsko / Ярослав Стецько",
  year: "1967",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Historical and political context and issues of restoring Ukrainian independence against the backdrop of World War II.",
    uk: "Історико-політичний контекст та проблематика відновлення української незалежності на тлі другої світової війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/0d50a569a4.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "The Struggle for Ukrainian Statehood under the Soviet Rule", uk: "Боротьба за Українську Державу під Совєцькою Владою" },
  author: "Vasyl Plushch / Василь Плющ",
  year: "1973",
  tags: { en: ["history", "Ukraine", "OUN"], uk: ["історія", "ОУН","Україна"] },
  desc: {
    en: "Historical and political study examining national resistance, repression, and the efforts of Ukrainians to preserve statehood and identity under the Soviet regime.",
    uk: "Історико-публіцистичне дослідження, присвячене аналізу національного спротиву, політичних репресій і змагання українців за збереження державницької ідентичності в умовах радянського режиму."
  },
  iframeSrc: "https://heyzine.com/flip-book/e4e02d6406.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Roman Shukhevych gen. Taras Chuprynka  Commander of the Army of Immortals", uk: "Роман Шухевич ген. Тарас Чупринка, командир Армії Безсмертних" },
  author: "Petro Mirchuk / Петро Мірчук",
  year: "1970",
  tags: { en: ["history", "Ukraine", "OUN"], uk: ["історія", "ОУН","Україна"] },
  desc: {
    en: "Biographical study devoted to Roman Shukhevych as a leader of the liberation struggle and a symbol of the resilience of the Ukrainian underground movement.",
    uk: "Біографічне дослідження, присвячене постаті Романа Шухевича як провідника визвольної боротьби та символу незламності українського підпілля."
  },
  iframeSrc: "https://heyzine.com/flip-book/1daf2b2ee4.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.2", uk: "Літопис УПА нова серія том 2" },
  author: "O.Vovk / О.Вовк",
  year: "1999",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/6f2d7d3fd7.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.3", uk: "Літопис УПА нова серія том 3" },
  author: "Litopys UPA / Літопис УПА",
  year: "2001",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/552d501591.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.4", uk: "Літопис УПА нова серія том 4" },
  author: "Litopys UPA / Літопис УПА",
  year: "2002",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/5f894c800b.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.5", uk: "Літопис УПА нова серія том 5" },
  author: "Litopys UPA / Літопис УПА",
  year: "2002",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/5524e25e2c.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.6", uk: "Літопис УПА нова серія том 6" },
  author: "Litopys UPA / Літопис УПА",
  year: "2003",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/51003098d9.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.9", uk: "Літопис УПА нова серія том 9" },
  author: "Litopys UPA / Літопис УПА",
  year: "2007",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/1f93c23d3b.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.11", uk: "Літопис УПА нова серія том 11" },
  author: "Litopys UPA / Літопис УПА",
  year: "2007",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/09396ffa20.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.12", uk: "Літопис УПА нова серія том 12" },
  author: "Litopys UPA / Літопис УПА",
  year: "2009",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/853676b8ec.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.13", uk: "Літопис УПА нова серія том 13" },
  author: "Litopys UPA / Літопис УПА",
  year: "2009",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/d1f137b8c5.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "UIA Chronicles new serias vol.14", uk: "Літопис УПА нова серія том 14" },
  author: "Litopys UPA / Літопис УПА",
  year: "2010",
  tags: { en: ["history", "Ukraine", "UIA"], uk: ["історія", "УПА","Україна"] },
  desc: {
    en: "Chronicles of the Ukrainian Insurgent Army.",
    uk: "Літописи Української Повстанської Армії."
  },
  iframeSrc: "https://heyzine.com/flip-book/57de5c22b6.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Prospects of the Ukrainian Revolution", uk: "Перспективи Української Революції" },
  author: "Stepan Bandera / Степан Бандера",
  year: "1978",
  tags: { en: ["politics", "Ukraine", "ideology"], uk: ["політика", "Україна","ідеологія"] },
  desc: {
    en: "A political and ideological work in which the author examines the conditions, goals, and possible development of the Ukrainian liberation movement in its struggle for an independent state.",
    uk: "Політично-ідеологічна праця, у якій автор аналізує умови, цілі та можливі шляхи розвитку українського визвольного руху у боротьбі за незалежну державу."
  },
  iframeSrc: "https://heyzine.com/flip-book/27143f0d82.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Yevhen Konovalets and His Era", uk: "Євген Коновалець та Його Доба" },
  author: "Yevhen Konovalets Foundation / Фундація Євгена Коновальця",
  year: "1974",
  tags: { en: ["Yevhen Konovalets", "OUN", "history"], uk: ["Євген Коновалець", "ОУН","історія"] },
  desc: {
    en: "A a historical and biographical study exploring the life of Yevhen Konovalets and his role in the Ukrainian national liberation movement of the early twentieth century.",
    uk: "Історико-біографічне дослідження, присвячене постаті Євгена Коновальця та ролі його діяльності в українському національно-визвольному русі першої половини ХХ століття."
  },
  iframeSrc: "https://heyzine.com/flip-book/95fac41737.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "The Concept of Ukrainian Liberation part 1", uk: "Українська Визвольна Концепція ч.1" },
  author: "Yevhen Konovalets Foundation / Ярослав Стецько",
  year: "1987",
  tags: { en: ["ideology", "statehood", "politics","Ukraine"], uk: ["ідеологія", "державність","політика","Україна"] },
  desc: {
    en: "A political and ideological work outlining the author’s vision of the strategy of the Ukrainian liberation movement and the principles for building an independent Ukrainian state.",
    uk: "Політично-ідеологічна праця, у якій автор викладає бачення стратегії українського визвольного руху та принципів побудови незалежної української держави."
  },
  iframeSrc: "https://heyzine.com/flip-book/86897ed36c.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Moscow’s Murderers of Bandera Before the Court", uk: "Московські Вбивці Бандери Перед Судом" },
  author: "Ukrainian Publisher in Munich / Українське Видавництво у Мюнхені",
  year: "1965",
  tags: { en: ["Stepan Bandera", "KGB"], uk: ["Степан Бандера", "КДБ"] },
  desc: {
    en: "A political and ideological work outlining the author’s vision of the strategy of the Ukrainian liberation movement and the principles for building an independent Ukrainian state.",
    uk: "Документально-публіцистичне видання, присвячене судовому процесу над агентом радянських спецслужб, причетним до вбивства Степана Бандери, та обставинам цього політичного злочину."
  },
  iframeSrc: "https://heyzine.com/flip-book/dc6966fef1.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Friends in Combat: A Collection of Memoires from OUN Activities, Vol. 2", uk: "Бойові друзі: Збірка спогадів з дій ОУН, Том 2" },
  author: "Volodymyr Makar / Володимир Макар",
  year: "1993",
  tags: { en: ["OUN", "memoires", "Ukrainian underground"], uk: ["ОУН", "спогади", "підпілля"] },
  desc: {
    en: "A collection of memoirs recounting the experiences, struggles, and everyday realities of OUN members, offering a personal perspective on the underground liberation movement.",
    uk: "Збірка спогадів учасників ОУН, що висвітлює їхній досвід, боротьбу та повсякденне життя в умовах підпільного визвольного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/3dab761261.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "The March Toward Freedom: Memoires, Vol. 1", uk: "В поході до волі: Спомини, Том 1" },
  author: "Mykola Klymyshyn / Микола Климишин",
  year: "1975",
  tags: { en: ["OUN", "memoires", "liberation struggle"], uk: ["ОУН", "спогади", "визвольна боротьба"] },
  desc: {
    en: "A memoir recounting the author’s participation in the Ukrainian liberation movement, reflecting on the path, challenges, and ideals that shaped the struggle for freedom.",
    uk: "Мемуарний твір, у якому автор описує свою участь в українському визвольному русі, осмислюючи шлях, випробування та ідеї, що формували боротьбу за свободу."
  },
  iframeSrc: "https://heyzine.com/flip-book/c96681e30b.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "The March Toward Freedom: Memoires, Vol. 2", uk: "В поході до волі: Спомини, Том 2" },
  author: "Mykola Klymyshyn / Микола Климишин",
  year: "?",
  tags: { en: ["OUN", "memoires", "Ukrainian underground"], uk: ["ОУН", "спогади", "підпілля"] },
  desc: {
    en: "The continuation of the author’s memoirs, detailing further episodes of the Ukrainian underground struggle and offering deeper insight into the realities of resistance.",
    uk: "Продовження мемуарів автора, що висвітлює наступні етапи підпільної боротьби та дає глибше розуміння реалій спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/3c1d0dfec3.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "The Ukrainian State Restored by the Act of June 30, 1941", uk: "Українська Держава Відновлена актом 30-го червня 1941-го року" },
  author: "Anatol Berdii / Анатоль Бердій",
  year: "1981",
  tags: { en: ["June 30 Act", "Ukrainian statehood", "OUN"], uk: ["Акт 30 червня", "державність", "ОУН"] },
  desc: {
    en: "A historical and political study examining the proclamation of the Ukrainian state on June 30, 1941, its context, significance, and consequences within the liberation movement.",
    uk: "Історико-політичне дослідження, присвячене проголошенню Української держави 30 червня 1941 року, його передумовам, значенню та наслідкам у визвольному русі."
  },
  iframeSrc: "https://heyzine.com/flip-book/53479dd405.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Under the Banner of Bandera", uk: "Під прапором Бандери" },
  author: "Artur Furman / Артур Фурман",
  year: "1964",
  tags: { en: ["Stepan Bandera", "OUN", "liberation struggle"], uk: ["Степан Бандера", "ОУН", "визвольна боротьба"] },
  desc: {
    en: "A historical and memoir-based account depicting the activities, ideals, and experiences of the Ukrainian nationalist movement under the leadership of Stepan Bandera.",
    uk: "Історико-мемуарний твір, що відображає діяльність, ідеї та досвід українського націоналістичного руху під проводом Степана Бандери."
  },
  iframeSrc: "https://heyzine.com/flip-book/f09aa180b6.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: {
    en: `"Nachtigal" a Battalion of The Ukrainian Nationalists Facts and Documents`,
    uk: `"Нахтігаль" Курінь ДУН У світлі фактів і документів`},
  author: "Myroslav Kalba / Мирослав Кальба",
  year: "1984",
  tags: { en: ["Nachtigal", "OUN", "World War II"], uk: ["Нахтігаль", "ДУН", "Друга світова війна"] },
  desc: {
    en: "A documentary-based study examining the formation, activities, and historical context of the Nachtigall Battalion and DUN unit through facts and archival evidence.",
    uk: "Документальне дослідження, що розглядає формування, діяльність та історичний контекст батальйону «Нахтігаль» і куреня ДУН на основі фактів та архівних матеріалів."
  },
  iframeSrc: "https://heyzine.com/flip-book/02c71bd3b8.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Rimini 1945–1947, Collection 1", uk: "Ріміні 1945–1947, Збірник 1" },
  author: "Brotherhood of Former Soldiers of the First Ukrainian Division of the Ukrainian National Army / Братство колишніх вояків Першої Української Дивізії Української Національної Армії",
  year: "1979",
  tags: { en: ["Ukrainian National Army", "Rimini", "memoires"], uk: ["Українська національна армія", "Ріміні", "спогади"] },
  desc: {
    en: "A collection of memoirs and documents by former soldiers of the First Ukrainian Division, reflecting on their experiences in Rimini during 1945–1947 and the post-war fate of the unit.",
    uk: "Збірник спогадів і документів колишніх вояків Першої Української Дивізії, що висвітлює їхній досвід у Ріміні в 1945–1947 роках та повоєнну долю підрозділу."
  },
  iframeSrc: "https://heyzine.com/flip-book/ce1b9df026.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Muscovy", uk: "Московщина" },
  author: "Yurii A.Vudka / Юрій А.Вудка",
  year: "1978",
  tags: { en: ["Russia", "political analysis", "history"], uk: ["Росія", "політичний аналіз", "історія"] },
  desc: {
    en: "A political and historical analysis examining the nature of the Russian state, its imperial traditions, and their impact on neighbouring nations.",
    uk: "Політико-історичне дослідження, що аналізує природу російської державності, її імперські традиції та їхній вплив на сусідні народи."
  },
  iframeSrc: "https://heyzine.com/flip-book/a552ecc663.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "The Idea and Deeds", uk: "Ідея і Чин" },
  author: "Osyp Diakiw-Hornovyj / Осип Дяків-Горновий",
  year: "1968",
  tags: { en: ["OUN", "ideology", "nationalism"], uk: ["ОУН", "ідеологія", "націоналізм"] },
  desc: {
    en: "A political and ideological work exploring the relationship between national ideas and practical action within the Ukrainian liberation movement.",
    uk: "Політично-ідеологічна праця, що досліджує взаємозв’язок між національною ідеєю та практичним чином у межах українського визвольного руху."
  },
   iframeSrc: "https://heyzine.com/flip-book/c98a1dd909.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "Ataman Volia", uk: "Отаман Воля" },
  author: "Lesia Khraplyva / Леся Храплива",
  year: "1965",
  tags: { en: ["fiction", "YA"], uk: ["художня література", "підліткова література"] },
  desc: {
    en: "A literary work portraying the image of a Ukrainian leader and the spirit of resistance, reflecting the ideals of freedom and struggle rooted in national tradition.",
    uk: "Художній твір, що змальовує образ українського провідника та дух спротиву, відображаючи ідеали свободи й боротьби, закорінені в національній традиції."
  },
   iframeSrc: "https://heyzine.com/flip-book/9e9c19ee56.html"
});
// 1) Shelf 1 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[0].books.push({
  title: { en: "From the Book of My Life, Vol. 1", uk: "З книги мого життя, Том 1" },
  author: "Roman Malaschuk / Роман Малащук",
  year: "1987",
  tags: { en: ["memoires", "Ukrainian underground", "OUN"], uk: ["спогади", "підпілля", "ОУН"] },
  desc: {
    en: "A memoire in which the author reflects on his life, experiences, and involvement in the Ukrainian liberation movement, offering a personal perspective on historical events.",
    uk: "Мемуарний твір, у якому автор осмислює своє життя, досвід і участь в українському визвольному русі, подаючи особистий погляд на історичні події."
  },
   iframeSrc: "https://heyzine.com/flip-book/ace5cdead4.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[1]
library[1].books.push({
  title: { en: "OUN–UPA During the War Years", uk: "ОУН-УПА в роки війни" },
  author: "Volodymyr Serhiichuk / Володимир Сергійчук",
  year: "1996",
  tags: { en: ["OUN-UPA", "World War II", "Ukrainian history"], uk: ["ОУН-УПА", "Друга світова війна", "історія України"] },
  desc: {
    en: "A historical study analysing the activities and role of the OUN and UPA during the war years, focusing on their strategies, challenges, and impact on the liberation struggle.",
    uk: "Історичне дослідження, присвячене діяльності ОУН і УПА в роки війни, з аналізом їхніх стратегій, викликів та ролі у визвольній боротьбі."
  },
 iframeSrc: "https://heyzine.com/flip-book/6ebbcf552c.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "In the Whirpool of Combat", uk: "У вирі боротьби" },
  author: "Yurii Borets / Юрій Борець",
  year: "1971",
  tags: { en: ["memoires", "OUN-UIA", "liberation struggle"], uk: ["спогади", "ОУН-УПА", "визвольна боротьба"] },
  desc: {
    en: "A memoir depicting the intense experiences of the Ukrainian liberation struggle, revealing the realities of underground resistance and personal endurance.",
    uk: "Мемуарний твір, що передає напружений досвід української визвольної боротьби, розкриваючи реалії підпільного спротиву та особистої витривалості."
  },
  iframeSrc: "https://heyzine.com/flip-book/3f34383995.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Forever Forged in Chains", uk: "Навічно кайдани кували" },
  author: "Vasyl Lyzanchuk / Василь Лизанчук",
  year: "1995",
  tags: { en: ["repression", "Ukrainian history", "Soviet regime"], uk: ["репресії", "історія України", "радянський режим"] },
  desc: {
    en: "A historical and publicistic work examining the enduring oppression of Ukrainians under the Soviet regime and the struggle to preserve national identity and freedom.",
    uk: "Історико-публіцистична праця, що висвітлює тривале поневолення українців у радянський період та боротьбу за збереження національної ідентичності й свободи."
  },
  iframeSrc: "https://heyzine.com/flip-book/6171148669.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Nationalism", uk: "Націоналізм" },
  author: "D. Dontsov / Д. Донцов",
  year: "1966",
  tags: { en: ["nationalism", "political ideology", "Ukrainian thought"], uk: ["націоналізм", "політична ідеологія", "українська думка"] },
  desc: {
    en: "A foundational political work outlining the principles of Ukrainian nationalism and examining its philosophical and ideological basis.",
    uk: "Ключова політично-ідеологічна праця, що викладає засади українського націоналізму та аналізує його філософське й ідеологічне підґрунтя."
  },
  iframeSrc: "https://heyzine.com/flip-book/8b028b544a.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Unconquered Commander", uk: "Нескорений командир" },
  author: "Mykola Posivnych / Микола Посівнич",
  year: "2008",
  tags: { en: ["Roman Shukhevych", "OUN-UIA", "biography"], uk: ["Роман Шухевич", "ОУН-УПА", "біографія"] },
  desc: {
    en: "A biographical study dedicated to Roman Shukhevych, exploring his leadership, character, and role in the Ukrainian liberation movement.",
    uk: "Біографічне дослідження, присвячене Роману Шухевичу, що розкриває його провідницькі якості, характер і роль у визвольному русі."
  },
  iframeSrc: "https://heyzine.com/flip-book/237d7ebe31.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "With Ukraine in My Heart", uk: "З Україною у серці" },
  author: "Halyna Kokhanska / Галина Коханська",
  year: "2008",
  tags: { en: ["memoires", "Ukrainian identity", "patriotism"], uk: ["спогади", "українська ідентичність", "патріотизм"] },
  desc: {
    en: "A memoir reflecting personal experiences and devotion to Ukraine, highlighting the emotional and cultural dimensions of national identity.",
    uk: "Мемуарний твір, що передає особистий досвід і відданість Україні, висвітлюючи емоційний і культурний вимір національної ідентичності."
  },
  iframeSrc: "https://heyzine.com/flip-book/09ed421010.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "And the Wounds Did Not Heal", uk: "А рани не гоїлися" },
  author: "Yaroslav Hrytsai (“Chornota”), Paraskeviia Hrytsai / Ярослав Грицай («Чорнота»), Параскевія Грицай",
  year: "2001",
  tags: { en: ["memoires", "OUN-UIA", "war experiences"], uk: ["спогади", "ОУН-УПА", "досвід війни"] },
  desc: {
    en: "A memoir recounting the hardships and lasting consequences of the liberation struggle, reflecting on personal experiences and the enduring impact of war.",
    uk: "Мемуарний твір, що відображає труднощі та тривалі наслідки визвольної боротьби, осмислюючи особистий досвід і незагойні рани війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/0c2b2f08a5.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "\"Hrim\": UIA Colonel Tverdokhlib", uk: "«Грім»: полковник УПА Твердохліб" },
  author: "Roman Hrytskiv / Роман Грицьків",
  year: "2008",
  tags: { en: ["UIA", "biography", "Roman Tverdokhlib"], uk: ["УПА", "біографія", "Твердохліб"] },
  desc: {
    en: "A biographical work dedicated to UPA Colonel Tverdokhlib (“Hrim”), highlighting his leadership and role in the Ukrainian liberation struggle.",
    uk: "Біографічна праця, присвячена полковнику УПА Твердохлібу («Грім»), що висвітлює його провідницьку діяльність і роль у визвольній боротьбі."
  },
  iframeSrc: "https://heyzine.com/flip-book/88d1978115.html"
});
  // 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Life of Halyna Holoiad – Marta Hai", uk: "Життєвий шлях Галини Голояд – «Марти Гай»" },
  author: "Oleksandr Ishchuk, Volodymyr Ivanchenko / Олександр Іщук, Володимир Іванченко",
  year: "2010",
  tags: { en: ["UIA", "biography", "women in resistance"], uk: ["УПА", "біографія", "жінки в боротьбі"] },
  desc: {
    en: "A biographical study tracing the life and activities of Halyna Holoiad (“Marta Hai”), highlighting her role and contribution to the Ukrainian liberation movement.",
    uk: "Біографічне дослідження, що простежує життєвий шлях Галини Голояд («Марти Гай») та висвітлює її роль і внесок у визвольний рух."
  },
  iframeSrc: "https://heyzine.com/flip-book/e9e4a2e6c5.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Life and Fate of Mykhailo Diachenko – Marko Boieslav", uk: "Життя та доля Михайла Дяченка – «Марка Боєслава»" },
  author: "Oleksandr Ishchuk / Олександр Іщук",
  year: "2010",
  tags: { en: ["UIA", "biography", "Marko Boieslav"], uk: ["УПА", "біографія", "Марко Боєслав"] },
  desc: {
    en: "A biographical study exploring the life, творчість, and role of Mykhailo Diachenko (“Marko Boieslav”) in the Ukrainian liberation movement.",
    uk: "Біографічне дослідження, що розкриває життєвий шлях, творчість і роль Михайла Дяченка («Марка Боєслава») у визвольному русі."
  },
  iframeSrc: "https://heyzine.com/flip-book/26be33b1ae.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "A Flower in the Red Hell: The Life Path of Liudmyla Foia", uk: "Квітка у червоному пеклі: Життєвий шлях Людмили Фої" },
  author: "Volodymyr Ivanchenko / Володимир Іванченко",
  year: "2009",
  tags: { en: ["UIA", "biography", "Soviet repression"], uk: ["УПА", "біографія", "радянські репресії"] },
  desc: {
    en: "A biographical study recounting the life of Liudmyla Foia, highlighting her experiences of resistance and survival under Soviet repression.",
    uk: "Біографічне дослідження, що висвітлює життєвий шлях Людмили Фої, її досвід спротиву та виживання в умовах радянських репресій."
  },
  iframeSrc: "https://heyzine.com/flip-book/3eba3cee01.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Petro Fedun – \"Poltava\": Leading Ideologist of the OUN and UIA", uk: "Петро Федун – «Полтава»: провідний ідеолог ОУН та УПА" },
  author: "Mykhailo Romaniuk / Михайло Романюк",
  year: "2009",
  tags: { en: ["OUN-UIA", "biography", "ideology"], uk: ["ОУН-УПА", "біографія", "ідеологія"] },
  desc: {
    en: "A biographical study examining the life and intellectual legacy of Petro Fedun (“Poltava”), a leading ideologist of the Ukrainian liberation movement.",
    uk: "Біографічне дослідження, присвячене життю та ідейній спадщині Петра Федуна («Полтави») як провідного ідеолога визвольного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/5f3123898e.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Ukrainian Supreme Liberation Council", uk: "Українська Головна Визвольна Рада" },
  author: "P. Y. Potichnyi / П. Й. Потічний",
  year: "2009",
  tags: { en: ["UHVR", "OUN-UIA", "liberation movement"], uk: ["УГВР", "ОУН-УПА", "визвольний рух"] },
  desc: {
    en: "A historical study exploring the creation, structure, and role of the Ukrainian Supreme Liberation Council as a coordinating body of the liberation movement.",
    uk: "Історичне дослідження, що розкриває створення, структуру та роль Української Головної Визвольної Ради як координаційного органу визвольного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/6a5fc881e8.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Kyrylo Osmak – The Unbowed President of the UHVR", uk: "Кирило Осьмак – нескорений Президент УГВР" },
  author: "Natalka Osmak / Наталка Осьмак",
  year: "2008",
  tags: { en: ["Kyrylo Osmak", "UHVR", "biography"], uk: ["Кирило Осьмак", "УГВР", "біографія"] },
  desc: {
    en: "A biographical work dedicated to Kyrylo Osmak, highlighting his leadership as President of the UHVR and his steadfast role in the Ukrainian liberation movement.",
    uk: "Біографічна праця, присвячена Кирилу Осьмаку, що висвітлює його діяльність як Президента УГВР та його незламну роль у визвольному русі."
  },
  iframeSrc: "https://heyzine.com/flip-book/3a23066377.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Stepan Bandera – Life Dedicated to Freedom", uk: "Степан Бандера – життя, присвячене свободі" },
  author: "Mykola Posivnych / Микола Посівнич",
  year: "2008",
  tags: { en: ["Stepan Bandera", "biography", "OUN"], uk: ["Степан Бандера", "біографія", "ОУН"] },
  desc: {
    en: "A biographical study exploring the life, діяльність, and legacy of Stepan Bandera as a central figure of the Ukrainian liberation movement.",
    uk: "Біографічне дослідження, що розкриває життя, діяльність і спадщину Степана Бандери як ключової постаті визвольного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/0d4bcf7120.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Activities of the OUN (b) and the UPA Underground in Volhynia and Southern Polissia", uk: "Діяльність ОУН (б) і запілля УПА на Волині й Південному Поліссі" },
  author: "Volodymyr Kovalchuk / Володимир Ковальчук",
  year: "2006",
  tags: { en: ["OUN-UIA", "Volhynia", "underground"], uk: ["ОУН-УПА", "Волинь", "підпілля"] },
  desc: {
    en: "A historical study examining the activities of the OUN (b) and the UIA underground network in Volhynia and Southern Polissia during the liberation struggle.",
    uk: "Історичне дослідження, присвячене діяльності ОУН (б) та запілля УПА на Волині й Південному Поліссі в період визвольної боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/71fad96e0f.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Insurgent Graves", uk: "Повстанські могили" },
  author: "Yevhen Misilo / Євген Місило",
  year: "1995",
  tags: { en: ["UIA", "memory", "history"], uk: ["УПА", "пам’ять", "історія"] },
  desc: {
    en: "A historical and memorial work documenting the burial sites of Ukrainian insurgents and reflecting on the preservation of historical memory.",
    uk: "Історико-меморіальне видання, що документує місця поховань українських повстанців і осмислює збереження історичної пам’яті."
  },
  iframeSrc: "https://heyzine.com/flip-book/ff34f8c6a6.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Zakerzonnia: Memoirs of UPA Soldiers, Vol. 2", uk: "Закерзоння: спомини вояків УПА, Том 2" },
  author: "Bohdan Huk / Богдан Гук",
  year: "1996",
  tags: { en: ["UIA", "memoires", "Zakerzonnia"], uk: ["УПА", "спогади", "Закерзоння"] },
  desc: {
    en: "A collection of memoirs by UPA soldiers recounting their experiences in Zakerzonnia, highlighting the hardships and realities of the post-war struggle.",
    uk: "Збірка спогадів вояків УПА про їхній досвід у Закерзонні, що висвітлює труднощі та реалії післявоєнної боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/96b57881bb.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Training Course No. 1: Materials on the History of Socio-Political Thought in Ukraine (19th–20th Centuries)", uk: "Вишкільний курс ч. 1: Матеріали до історії розвитку суспільно-політичної думки в Україні ХІХ–ХХ ст." },
  author: "Institute of Socio-Political Education / Інститут суспільно-політичної освіти",
  year: "1975",
  tags: { en: ["political thought", "Ukraine", "education"], uk: ["політична думка", "Україна", "освіта"] },
  desc: {
    en: "An educational compilation of materials tracing the development of socio-political thought in Ukraine across the 19th and 20th centuries.",
    uk: "Навчальний збірник матеріалів, що висвітлює розвиток суспільно-політичної думки в Україні у ХІХ–ХХ століттях."
  },
  iframeSrc: "https://heyzine.com/flip-book/aaa2127f80.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Reference Guide: Register of Persons Associated with the Liberation Struggle in the Drohobych Region 1939–1950 (Based on Archival Documents), Vol. 6", uk: "Довідник-пошуківець: Реєстр осіб, пов'язаних з визвольною боротьбою на теренах Дрогобиччини 1939–1950 (за архівними документами), Том 6" },
  author: "Myroslav Horbal / Мирослав Горбаль",
  year: "2005",
  tags: { en: ["archive", "UШA", "Drohobych region"], uk: ["архів", "УПА", "Дрогобиччина"] },
  desc: {
    en: "An archival reference guide compiling records of individuals connected to the Ukrainian liberation movement in the Drohobych region between 1939 and 1950.",
    uk: "Архівний довідник, що містить реєстр осіб, пов’язаних із українським визвольним рухом на теренах Дрогобиччини у 1939–1950 роках."
  },
  iframeSrc: "https://heyzine.com/flip-book/812edc317c.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "\"The Sun Smiled at Us Through Rusty Bars\": Kateryna Zarytska in the Ukrainian National Liberation Movement", uk: "«Нам сонце всміхалось крізь ржавії ґрати»: Катерина Зарицька в українському національно-визвольному русі" },
  author: "Lesia Onyshko / Леся Онишко",
  year: "2007",
  tags: { en: ["Kateryna Zarytska", "UPA", "biography"], uk: ["Катерина Зарицька", "УПА", "біографія"] },
  desc: {
    en: "A biographical study exploring the life and role of Kateryna Zarytska in the Ukrainian national liberation movement, highlighting her resilience and dedication.",
    uk: "Біографічне дослідження, що висвітлює життєвий шлях і роль Катерини Зарицької в українському національно-визвольному русі, підкреслюючи її стійкість і відданість."
  },
  iframeSrc: "https://heyzine.com/flip-book/cc107c1025.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Ukrainian Insurgent Army 1942–1952", uk: "Українська Повстанська Армія 1942–1952" },
  author: "Petro Mirchuk / Петро Мірчук",
  year: "1953",
  tags: { en: ["UIA", "history", "liberation struggle"], uk: ["УПА", "історія", "визвольна боротьба"] },
  desc: {
    en: "A comprehensive historical study of the Ukrainian Insurgent Army, covering its formation, activities, and role in the liberation struggle between 1942 and 1952.",
    uk: "Комплексне історичне дослідження Української Повстанської Армії, що охоплює її формування, діяльність та роль у визвольній боротьбі в 1942–1952 роках."
  },
  iframeSrc: "https://heyzine.com/flip-book/e37e42cd19.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Soldiers to Soldiers", uk: "Вояки воякам" },
  author: "Association of Former Ukrainian Soldiers in Great Britain / Об'єднання бувших вояків українців у Великій Британії",
  year: "1992",
  tags: { en: ["veterans", "memoirs", "Ukrainian diaspora"], uk: ["ветерани", "спогади", "українська діаспора"] },
  desc: {
    en: "A collection reflecting the experiences, solidarity, and shared memory of Ukrainian veterans, highlighting their bonds and post-war community life.",
    uk: "Збірник, що відображає досвід, солідарність і спільну пам’ять українських ветеранів, висвітлюючи їхні зв’язки та повоєнне життя в діаспорі."
  },
  iframeSrc: "https://heyzine.com/flip-book/e3e979b726.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Word and Weapon", uk: "Слово і зброя" },
  author: "Leonid Poltava / Леонід Полтава",
  year: "1968",
  tags: { en: ["literature", "UIA", "national struggle"], uk: ["література", "УПА", "визвольна боротьба"] },
  desc: {
    en: "A literary and publicistic work combining artistic expression and national thought, reflecting the spirit of struggle and resistance.",
    uk: "Літературно-публіцистичний твір, що поєднує художнє слово й національну думку, відображаючи дух боротьби та спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/194abcdfe9.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Positions of the Ukrainian Liberation Movement", uk: "Позиції Українського визвольного руху" },
  author: "Materials from Native Lands on the Struggle for the Ukrainian State / Матеріяли з рідних земель до питань боротьби за Українську державу",
  year: "1948",
  tags: { en: ["OUN-UPA", "political documents", "statehood"], uk: ["ОУН-УПА", "політичні документи", "державність"] },
  desc: {
    en: "A collection of documents outlining the positions and strategic views of the Ukrainian liberation movement in its struggle for an independent state.",
    uk: "Збірник документів, що відображає позиції та стратегічні погляди Українського визвольного руху в боротьбі за незалежну державу."
  },
  iframeSrc: "https://heyzine.com/flip-book/36ee28f698.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Bereza Kartuzka: Memoirs", uk: "Береза Картузька: Спомини" },
  author: "V. Makar / В. Макар",
  year: "1956",
  tags: { en: ["memoires", "repression", "history"], uk: ["спогади", "репресії", "історія"] },
  desc: {
    en: "A memoire recounting the experiences of imprisonment in the Bereza Kartuzka detention camp, shedding light on political repression and personal endurance.",
    uk: "Мемуарний твір про досвід ув’язнення в таборі Береза Картузька, що висвітлює політичні репресії та особисту витривалість."
  },
  iframeSrc: "https://heyzine.com/flip-book/c20ca7fee7.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Camp Triptych", uk: "Лаґерний триптих" },
  author: "Oleh Pushkar / Олег Пушкар",
  year: "1994",
  tags: { en: ["memoires", "repression", "Soviet camps"], uk: ["спогади", "репресії", "радянські табори"] },
  desc: {
    en: "A literary and memoir-based work reflecting on life in Soviet labour camps, portraying suffering, resilience, and the struggle for dignity.",
    uk: "Літературно-мемуарний твір про життя в радянських таборах, що передає страждання, стійкість і боротьбу за людську гідність."
  },
  iframeSrc: "https://heyzine.com/flip-book/f488a46ebc.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "In the German Mills of Death", uk: "В німецьких млинах смерти" },
  author: "Dr. P. Mirchuk / Др. П. Мірчук",
  year: "1957",
  tags: { en: ["memoires", "World War II", "Nazi camps"], uk: ["спогади", "Друга світова війна", "нацистські табори"] },
  desc: {
    en: "A memoir depicting the author’s experiences in Nazi concentration camps, revealing the brutality of the regime and the struggle for survival.",
    uk: "Мемуарний твір про перебування автора в нацистських концтаборах, що розкриває жорстокість режиму та боротьбу за виживання."
  },
  iframeSrc: "https://heyzine.com/flip-book/d9b6903a7a.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "On the Blood-Stained Land", uk: "На скривавленій землі" },
  author: "Petro Kisko / Петро Кіско",
  year: "1952",
  tags: { en: ["memoires", "UIA", "war"], uk: ["спогади", "УПА", "війна"] },
  desc: {
    en: "A memoir reflecting on the трагічні події війни та визвольної боротьби, передаючи досвід втрат, боротьби та виживання.",
    uk: "Мемуарний твір, що відображає трагічні події війни та визвольної боротьби, передаючи досвід втрат, боротьби й виживання."
  },
  iframeSrc: "https://heyzine.com/flip-book/df9dfd4792.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "From the Times of Yezhovshchyna", uk: "З часів Єжовщини" },
  author: "Olha Mak / Ольга Мак",
  year: "1954",
  tags: { en: ["repression", "Soviet terror", "memoirs"], uk: ["репресії", "радянський терор", "спогади"] },
  desc: {
    en: "A memoir-based work depicting the period of Stalinist terror known as Yezhovshchyna, revealing the realities of repression and human suffering.",
    uk: "Мемуарний твір про період сталінського терору — Єжовщину, що розкриває реалії репресій і людських страждань."
  },
  iframeSrc: "https://heyzine.com/flip-book/fc4fa3cc42.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Enemy of the People, Vol. 1: Against the Current", uk: "Ворог народу, Том 1: Проти течії" },
  author: "Olena Zvychaina, Mykhailo Mlakovyi / Олена Звичайна, Михайло Млаковий",
  year: "1966",
  tags: { en: ["repression", "Soviet regime", "memoirs"], uk: ["репресії", "радянський режим", "спогади"] },
  desc: {
    en: "A literary and memoir-based work portraying the fate of individuals persecuted as “enemies of the people,” highlighting resistance and moral strength against the system.",
    uk: "Літературно-мемуарний твір про долю людей, переслідуваних як «вороги народу», що висвітлює спротив і моральну стійкість перед системою."
  },
  iframeSrc: "https://heyzine.com/flip-book/344cc4ef9a.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Enemy of the People, Vol. 2: Planet of Slaves", uk: "Ворог народу, Том 2: Плянета рабів" },
  author: "Olena Zvychaina, Mykhailo Mlakovyi / Олена Звичайна, Михайло Млаковий",
  year: "1967",
  tags: { en: ["repression", "Soviet regime", "memoirs"], uk: ["репресії", "радянський режим", "спогади"] },
  desc: {
    en: "A continuation of the memoir narrative depicting life under totalitarian rule, exposing systemic oppression and the dehumanising realities of the Soviet regime.",
    uk: "Продовження мемуарної оповіді про життя в умовах тоталітарного режиму, що викриває системне пригнічення та дегуманізуючі реалії радянської влади."
  },
  iframeSrc: "https://heyzine.com/flip-book/6ad3138c9c.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Fourth Dimension", uk: "Четвертий вимір" },
  author: "Avraam Shifrin / Авраам Шифрін",
  year: "1973",
  tags: { en: ["Gulag", "memoirs", "Soviet camps"], uk: ["ГУЛАГ", "спогади", "радянські табори"] },
  desc: {
    en: "A memoir exposing the hidden realities of the Soviet Gulag system, revealing the mechanisms of repression and the psychological endurance of prisoners.",
    uk: "Мемуарний твір, що викриває приховану реальність радянської системи ГУЛАГу, розкриваючи механізми репресій і психологічну витривалість в’язнів."
  },
  iframeSrc: "https://heyzine.com/flip-book/b9ff0f0ad0.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Cold Ravine", uk: "Холодний Яр" },
  author: "Yurii Horlis-Horskyi / Юрій Горліс-Горський",
  year: "",
  tags: { en: ["Cold Ravine", "Ukrainian insurgents", "memoirs"], uk: ["Холодний Яр", "повстанці", "спогади"] },
  desc: {
    en: "A memoir-based narrative depicting the struggle of Ukrainian insurgents in the Cold Ravine region, highlighting resistance against occupying forces.",
    uk: "Мемуарно-художній твір про боротьбу українських повстанців у Холодному Яру, що відображає спротив окупаційним силам."
  },
  iframeSrc: "https://heyzine.com/flip-book/14741dbd48.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Everyday Life of Our Era, Vol. I", uk: "Будні нашої епохи, Том I" },
  author: "Lev T. Orlyhora / Лев Т. Орлигора",
  year: "1953",
  tags: { en: ["memoires", "history", "Ukrainian experience"], uk: ["спогади", "історія", "український досвід"] },
  desc: {
    en: "A memoir reflecting on the realities of the era, capturing personal experiences and the broader historical context of turbulent times.",
    uk: "Мемуарний твір, що відображає реалії епохи, передаючи особистий досвід і ширший історичний контекст буремного часу."
  },
  iframeSrc: "https://heyzine.com/flip-book/f076baa16c.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Everyday Life of Our Era, Vol. II", uk: "Будні нашої епохи, Том II" },
  author: "Lev T. Orlyhora / Лев Т. Орлигора",
  year: "1953",
  tags: { en: ["memoirs", "history", "Ukrainian experience"], uk: ["спогади", "історія", "український досвід"] },
  desc: {
    en: "A continuation of the memoir reflecting on the realities of the era, offering further insight into personal experiences and historical circumstances.",
    uk: "Продовження мемуарного твору про реалії епохи, що дає глибше розуміння особистого досвіду та історичних обставин."
  },
  iframeSrc: "https://heyzine.com/flip-book/6517acbdc1.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Mosaic of My Memories", uk: "Мозаїка моїх споминів" },
  author: "Col. Yevhen Pobihushchyi-Ren / Полк. Євген Побігушний-Рен",
  year: "1972",
  tags: { en: ["memoirs", "UPA", "military history"], uk: ["спогади", "УПА", "військова історія"] },
  desc: {
    en: "A memoir offering a multifaceted account of the author’s life and military experiences, reflecting on key moments of the Ukrainian liberation struggle.",
    uk: "Мемуарний твір, що подає багатогранний опис життя та військового досвіду автора, осмислюючи ключові моменти визвольної боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/d9fbb5ebc3.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "On the Centenary of the Birth of Symon Petliura, President of the UNR", uk: "У століття народження сл. п. Симона Петлюри, Президента УНР" },
  author: "Mykola Stepanenko / Микола Степаненко",
  year: "1967",
  tags: { en: ["Symon Petliura", "UNR", "history"], uk: ["Симон Петлюра", "УНР", "історія"] },
  desc: {
    en: "A commemorative and historical work dedicated to Symon Petliura, reflecting on his life, leadership, and role in the struggle for Ukrainian statehood.",
    uk: "Пам’ятне історичне видання, присвячене Симону Петлюрі, що висвітлює його життя, провідницьку діяльність і роль у боротьбі за українську державність."
  },
  iframeSrc: "https://heyzine.com/flip-book/7eec56a87b.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Fearless Viter and Dym", uk: "Безстрашні Вітер і Дим" },
  author: "Stepan Liubomyrskyi / Степан Любомирський",
  year: "1990",
  tags: { en: ["memoirs", "UIA", "resistance"], uk: ["спогади", "УПА", "спротив"] },
  desc: {
    en: "A literary and memoir-based work reflecting the courage and endurance of participants in the Ukrainian liberation struggle.",
    uk: "Літературно-мемуарний твір, що відображає мужність і витривалість учасників української визвольної боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/4ca340dd7d.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[1]
library[1].books.push({
  title: { en: "The Fifth Great Assembly of the OUN", uk: "П'ятий Великий Збір ОУН" },
  author: "Library of the Ukrainian Underground Fighter Part 11 / Бібліотека Українського Підпільника ч. 11",
  year: "1975",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Underground literature of the OUN.",
    uk: "Підпільна Література ОУН."
  },
  iframeSrc: "https://heyzine.com/flip-book/8ce87a22de.html"
});
  // 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Sixth Great Assembly of the OUN", uk: "Шостий Великий Збір ОУН" },
  author: "Library of the Ukrainian Underground Fighter Part 15 / Бібліотека Українського Підпільника ч. 15",
  year: "1984",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Underground literature of the OUN.",
    uk: "Підпільна Література ОУН."
  },
  iframeSrc: "https://heyzine.com/flip-book/d2419dc478.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Cruel Time", uk: "Жорстокий Час" },
  author: "Petro Tsisarsky / Петро Цісарський",
  year: "2004",
  tags: { en: ["history", "Ukraine", "WW2"], uk: ["історія", "Україна","Друга Світова Війна"] },
  desc: {
    en: "Literary work that portrays an individual confronting the brutality of a turbulent historical era. Through psychological depth and moral tension, the author explores resilience, fear, and the human cost of freedom amid harsh social realities.",
    uk: "Художній твір про людину в епосі історичних потрясінь, коли випробування часу оголюють моральний вибір і справжню ціну свободи. Автор досліджує внутрішню стійкість, страх і надію на тлі жорстоких суспільних реалій, створюючи напружений і психологічно глибокий наратив."
  },
  iframeSrc: "https://heyzine.com/flip-book/d14a5aaaba.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Yevhen Konovalets", uk: "Євген Коновалець" },
  author: "Premiere Imprimerie Ukrainienne En France",
  year: "?",
  tags: { en: ["history", "OUN", "Biography"], uk: ["історія", "ОУН","Біографія"] },
  desc: {
    en: "Biographical work about the founder of the OUN, Yevhen Konovalets.",
    uk: "Біографічний твір про засновника ОУН Євгена Коновальця."
  },
  iframeSrc: "https://heyzine.com/flip-book/6cce654cf5.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "From the Oprichnina to the KGB", uk: "Від Оприччини до КГБ" },
  author: "S.Mechnyk / С.Мечник",
  year: "1981",
  tags: { en: ["history", "USSR", "KGB"], uk: ["історія", "СРСР","КГБ"] },
  desc: {
    en: "Historical and political study tracing the continuity of repressive power structures from the Tsarist era to the Soviet security services, examining the evolution of state terror as a tool of control.",
    uk: "Публіцистично-історичне дослідження, що простежує тяглість репресивних механізмів влади від царської доби до радянських спецслужб, аналізуючи еволюцію державного терору як інструменту контролю."
  },
  iframeSrc: "https://heyzine.com/flip-book/d9f2b2131a.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Turbulent Times", uk: "Буремні Дні" },
  author: "Bohdan Bora / Богдан Бора",
  year: "1982",
  tags: { en: ["poetry", "Ukraine", "WW2"], uk: ["Поезія", "Україна","Друга Світова Війна"] },
  desc: {
    en: "A poetic collection that, through images of struggle, loss, and hope, reflects on the drama of the historical era and the inner resilience of a person in times of upheaval.",
    uk: "Поетична збірка, що через образи боротьби, втрат і надії осмислює драматизм історичної доби та внутрішню стійкість людини в часи потрясінь."
  },
  iframeSrc: "https://heyzine.com/flip-book/1ce54aa974.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Notebook of Short Stories, Vol. 1", uk: "Нотатник новелі, Том 1" },
  author: "Yurii Lypa / Юрій Липа",
  year: "1955",
  tags: { en: ["novellas", "Ukrainian literature", "prose"], uk: ["новели", "українська література", "проза"] },
  desc: {
    en: "A collection of short literary works by Yurii Lypa exploring human character, historical experience, and national consciousness.",
    uk: "Збірка новел Юрія Липи, що осмислює людський характер, історичний досвід і національну свідомість."
  },
  iframeSrc: "https://heyzine.com/flip-book/d4b4f5bb4a.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Mykhailyk", uk: "Михайлик" },
  author: "Mariia Dmytrenko / Марія Дмитренко",
  year: "1960",
  tags: { en: ["UIA", "children in resistance", "liberation struggle"], uk: ["УПА", "діти в боротьбі", "визвольна боротьба"] },
  desc: {
    en: "A story about the Ukrainian Insurgent Army told through the fate of thirteen-year-old village boy Mykhailyk, who becomes a brave scout and helps the underground resistance together with his loyal dog Brovko.",
    uk: "Оповідання про визвольну боротьбу УПА, розказане через долю тринадцятирічного сільського хлопця Михайлика, який стає відважним розвідником і разом зі своїм вірним псом Бровком допомагає повстанцям."
  },
  iframeSrc: "https://heyzine.com/flip-book/cee8c96797.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Ukrainian Division \"Galicia\"", uk: "Українська Дивізія «Галичина»" },
  author: "Mykhailo Slaboshpytskyi / Михайло Слабошпицький",
  year: "2008",
  tags: { en: ["Division Galicia", "World War II", "military history"], uk: ["Дивізія Галичина", "Друга світова війна", "військова історія"] },
  desc: {
    en: "A historical work examining the formation, wartime path, and later fate of the Ukrainian Division “Galicia” within the broader context of World War II and Ukrainian political history.",
    uk: "Історична праця, що розглядає створення, воєнний шлях і подальшу долю Української Дивізії «Галичина» в ширшому контексті Другої світової війни та української політичної історії."
  },
  iframeSrc: "https://heyzine.com/flip-book/56b9d61b97.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Bellaria – Rimini – England", uk: "Белярія – Ріміні – Англія" },
  author: "Yevstakhii Zahachevskyi / Євстахій Загачевський",
  year: "1968",
  tags: { en: ["Division Galicia", "Rimini", "Ukrainian veterans"], uk: ["Дивізія Галичина", "Ріміні", "українські ветерани"] },
  desc: {
    en: "A reportage-memoir tracing the post-war fate of Ukrainian Division soldiers from Italy to England, depicting camp life, uncertainty, and resistance to forced repatriation.",
    uk: "Репортаж-спогад про повоєнну долю вояків Української Дивізії від Італії до Англії, що висвітлює таборове життя, невизначеність і спротив примусовій репатріації."
  },
  iframeSrc: "https://heyzine.com/flip-book/b941929c3b.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Notes of a Prisoner", uk: "Записки полоненого" },
  author: "Oleksa Kobets / Олекса Кобець",
  year: "1959",
  tags: { en: ["World War I", "memoirs", "war captivity"], uk: ["Перша світова війна", "спогади", "полон"] },
  desc: {
    en: "A memoir and historical testimony based on the author’s experiences during the First World War, depicting military life, captivity, and the human cost of war.",
    uk: "Мемуарно-історичне свідчення, засноване на досвіді автора під час Першої світової війни, що змальовує військове життя, полон і людську ціну війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/48705c00ca.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "For Freedom and the State", uk: "За волю і державу" },
  author: "Semen Levchenko / Семен Левченко",
  year: "1966",
  tags: { en: ["Ukrainian Army", "First Winter Campaign", "liberation struggle"], uk: ["Українська Армія", "Перший Зимовий похід", "визвольні змагання"] },
  desc: {
    en: "A historical memoir-narrative about the Ukrainian liberation struggle of 1918–1920, depicting the experience of the Ukrainian Army and the dramatic events of the First Winter Campaign.",
    uk: "Історико-мемуарна повість про визвольні змагання українського народу 1918–1920 років, що висвітлює досвід Української Армії та драматичні події Першого Зимового походу."
  },
  iframeSrc: "https://heyzine.com/flip-book/60b3c6db6c.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "My Memoirs of the Recent Past", uk: "Мої спомини про недавнє минуле" },
  author: "Dmytro Doroshenko / Дмитро Дорошенко",
  year: "1969",
  tags: { en: ["Ukrainian Revolution", "memoirs", "statehood"], uk: ["Українська революція", "спогади", "державність"] },
  desc: {
    en: "A major memoir by historian and statesman Dmytro Doroshenko covering the dramatic years 1914–1920, offering a first-hand view of war, revolution, and the struggle for Ukrainian statehood.",
    uk: "Важливі спогади історика й державного діяча Дмитра Дорошенка про драматичні 1914–1920 роки, що подають безпосередній погляд на війну, революцію та боротьбу за українську державність."
  },
  iframeSrc: "https://heyzine.com/flip-book/7f981bf6b1.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "East–West Relations and the Problems of Nations Subjugated by Moscow", uk: "Відносини Захід-Схід і проблеми поневолених Москвою націй" },
  author: "Mykola Livytskyi / Микола Лівицький",
  year: "1975",
  tags: { en: ["Cold War", "captive nations", "political analysis"], uk: ["холодна війна", "поневолені нації", "політичний аналіз"] },
  desc: {
    en: "A political study analysing East–West relations during the Cold War and arguing for the international significance of nations subjugated by Moscow in the struggle against Soviet imperial domination.",
    uk: "Політичне дослідження, що аналізує відносини Заходу і Сходу в добу холодної війни та підкреслює міжнародне значення поневолених Москвою націй у боротьбі проти радянського імперського панування."
  },
  iframeSrc: "https://heyzine.com/flip-book/8aee2877dd.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "At the Crossroads: To the History of One Generation", uk: "На розпуттях: до історії одного покоління" },
  author: "Vasyl Harba / Василь Гарба",
  year: "1976",
  tags: { en: ["memoirs", "Ukrainian generation", "diaspora"], uk: ["спогади", "українське покоління", "діаспора"] },
  desc: {
    en: "A memoir-trilogy tracing the fate of one Ukrainian generation through education, social upheaval, historical change, and the search for a national path in the twentieth century.",
    uk: "Мемуарна трилогія про долю одного українського покоління, що проходить через освіту, суспільні злами, історичні зміни та пошук національного шляху у ХХ столітті."
  },
  iframeSrc: "https://heyzine.com/flip-book/55c8043786.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "In the Claws of the Double-Headed Eagle", uk: "В кігтях двоголового орла" },
  author: "Oleksandr Luhovyi / Олександр Луговий",
  year: "1955",
  tags: { en: ["World War I", "historical fiction", "Ukraine"], uk: ["Перша світова війна", "історична проза", "Україна"] },
  desc: {
    en: "A historical chronicle-novel set during the First World War, portraying Ukraine in 1914–1917 through the turmoil of empire, military conflict, and the human experience of war.",
    uk: "Історична повість-хроніка з часів Першої світової війни, що змальовує Україну 1914–1917 років крізь призму імперської влади, воєнних потрясінь і людського досвіду війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/a0fce30a20.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Campaign of the Ukrainian Armies toward Kyiv and Odesa in 1919", uk: "Похід Українських Армій на Київ–Одесу в 1919 році" },
  author: "Mykola Kapustianskyi / Микола Капустянський",
  year: "1946",
  tags: { en: ["Ukrainian Army", "UNR", "military history"], uk: ["Українська Армія", "УНР", "військова історія"] },
  desc: {
    en: "A concise military-historical study of the 1919 campaign of the Ukrainian armies toward Kyiv and Odesa, analysing operations, strategic decisions, and the struggle for Ukrainian statehood.",
    uk: "Короткий воєнно-історичний огляд походу Українських Армій на Київ–Одесу в 1919 році, що аналізує бойові операції, стратегічні рішення та боротьбу за українську державність."
  },
  iframeSrc: "https://heyzine.com/flip-book/899d2fb498.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "In the Kherson Steppes", uk: "В Херсонських степах" },
  author: "Yurko Stepovyi / Юрко Степовий",
  year: "1947",
  tags: { en: ["Kost Blakytnyi", "insurgents", "historical fiction"], uk: ["Кость Блакитний", "повстанці", "історична проза"] },
  desc: {
    en: "A documentary-style historical novella about the insurgent struggle in the Kherson steppes under Kost Blakytnyi, portraying anti-Bolshevik resistance, underground life, and the dramatic atmosphere of the post-revolutionary years.",
    uk: "Документально-історична повість про повстанську боротьбу в херсонських степах під проводом Костя Блакитного, що змальовує антибільшовицький спротив, підпільне життя та драматичну атмосферу післяреволюційних років."
  },
  iframeSrc: "https://heyzine.com/flip-book/37350ee9bb.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Vira the Liaison", uk: "Зв’язкова Віра" },
  author: "Yurko Stepovyi / Юрко Степовий",
  year: "1948",
  tags: { en: ["Vira Babenko", "insurgent movement", "historical novella"], uk: ["Віра Бабенко", "повстанський рух", "історична повість"] },
  desc: {
    en: "A documentary-style historical novella about Vira Babenko, a liaison for Ukrainian insurgents in 1917–1918, portraying courage, underground commitment, and the turbulent atmosphere of the national struggle.",
    uk: "Документально-історична повість про Віру Бабенко, зв’язкову українських повстанців у 1917–1918 роках, що змальовує мужність, підпільну відданість і буремну атмосферу національної боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/1a7021f458.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Victory, Part 1: A Novella of the Liberation War", uk: "Перемога, ч. 1: Повість з визвольної війни" },
  author: "Volodymyr Lopushanskyi / Володимир Лопушанський",
  year: "1954",
  tags: { en: ["liberation war", "historical fiction", "Ukrainian struggle"], uk: ["визвольна війна", "історична проза", "українська боротьба"] },
  desc: {
    en: "A historical novella about the Ukrainian liberation war, portraying the dramatic struggle for freedom through the experiences, choices, and endurance of people caught in a time of national upheaval.",
    uk: "Історична повість про українську визвольну війну, що передає драматизм боротьби за свободу через досвід, вибір і витривалість людей у час національних потрясінь."
  },
  iframeSrc: "https://heyzine.com/flip-book/ca980d2174.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Victory, Part 2: A Novella of the Liberation War", uk: "Перемога, ч. 2: Повість з визвольної війни" },
  author: "Volodymyr Lopushanskyi / Володимир Лопушанський",
  year: "1954",
  tags: { en: ["liberation war", "historical fiction", "Ukrainian struggle"], uk: ["визвольна війна", "історична проза", "українська боротьба"] },
  desc: {
    en: "The second part of a historical novella about the Ukrainian liberation war, continuing the portrayal of armed struggle, personal sacrifice, and the pursuit of national freedom.",
    uk: "Друга частина історичної повісті про українську визвольну війну, що продовжує оповідь про збройну боротьбу, особисту жертовність і прагнення національної свободи."
  },
  iframeSrc: "https://heyzine.com/flip-book/fed4f70313.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "In the Claws of Tyrants", uk: "У кігтях тиранів" },
  author: "Mykola Serhiienko / Микола Сергієнко",
  year: "1953",
  tags: { en: ["memoirs", "Red Army", "totalitarianism"], uk: ["спогади", "Червона армія", "тоталітаризм"] },
  desc: {
    en: "A memoir by a Ukrainian Red Army soldier depicting personal experience under the pressures of war and totalitarian power, revealing the human cost of life caught between violent regimes.",
    uk: "Спогади українця-червоноармійця, що передають особистий досвід людини під тиском війни й тоталітарної влади, розкриваючи людську ціну життя між жорстокими режимами."
  },
  iframeSrc: "https://heyzine.com/flip-book/12d1024af5.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "By the Riflemen’s Code", uk: "За стрілецький звичай" },
  author: "Oleh Lysiak / Олег Лисяк",
  year: "1953",
  tags: { en: ["Division Galicia", "historical novel", "comradeship"], uk: ["Дивізія Галичина", "історичний роман", "побратимство"] },
  desc: {
    en: "A historical novel about the soldiers of the Ukrainian Division “Galicia”, portraying comradeship, military duty, and the personal choices of Ukrainians caught in the upheavals of the Second World War.",
    uk: "Історичний роман про вояків Української Дивізії «Галичина», що змальовує побратимство, військовий обов’язок і особистий вибір українців у вирі Другої світової війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/750096d627.html"
});
// 2) Shelf 2 -> library[1] 
library[1].books.push({ 
  title: { en: "Vinnytsia: A Crime Without Punishment", uk: "Вінниця: Злочин без кари" }, 
  author: "Documents and Testimonies; ed. Yevhen Sverstiuk, O. Skop / Документи і свідчення; ред. Євген Сверстюк, О. Скоп",
  year: "1994",
  tags: { en: ["Soviet terror", "Vinnytsia massacre", "documentary evidence"], uk: ["радянський терор", "Вінницька трагедія", "документальні свідчення"] },
  desc: {
    en: "A documentary collection of evidence, testimonies, and materials on the Bolshevik executions in Vinnytsia in 1937–1938, preserving the record of a Soviet crime long concealed from public memory.",
    uk: "Документальна збірка свідчень, матеріалів і доказів про більшовицькі розстріли у Вінниці 1937–1938 років, що зберігає пам’ять про радянський злочин, довго прихований від суспільства."
  },
  iframeSrc: "https://heyzine.com/flip-book/2fddc64e62.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Crime", uk: "Злочин" },
  author: "Petro Kardash / Петро Кардаш",
  year: "2003",
  tags: { en: ["Soviet crimes", "genocide", "historical memory"], uk: ["радянські злочини", "геноцид", "історична пам’ять"] },
  desc: {
    en: "A documentary and memorial collection exposing the mass crimes of the communist Bolshevik regime against Ukrainians in the twentieth century, preserving testimonies of repression, famine, and national suffering.",
    uk: "Документально-меморіальне видання про масові злочини комуністично-більшовицької влади проти українців у ХХ столітті, що зберігає свідчення репресій, голодоморів і національних страждань."
  },
  iframeSrc: "https://heyzine.com/flip-book/7d641465a8.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Yarema in the Yoke of Communism: On the Centenary of Taras Shevchenko’s Death", uk: "Ярема в ярмі комунізму: до сотих роковин з дня смерти Тараса Шевченка" },
  author: "P. Speka (Pamfil Ses) / П. Спека (Памфіл Сесь)",
  year: "1961",
  tags: { en: ["Taras Shevchenko", "literary criticism", "anti-communism"], uk: ["Тарас Шевченко", "літературознавство", "антикомунізм"] },
  desc: {
    en: "A literary and political reflection on Shevchenko’s image of Yarema, written for the centenary of the poet’s death and aimed at opposing communist interpretations of Ukrainian national literature.",
    uk: "Літературно-політична розвідка про образ Яреми у Шевченковій спадщині, написана до сотих роковин смерті поета та спрямована проти комуністичного трактування української національної літератури."
  },
  iframeSrc: "https://heyzine.com/flip-book/8bf2508da8.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Corps of Sich Riflemen: A Military-Historical Essay", uk: "Корпус Січових Стрільців: воєнно-історичний нарис" },
  author: "Vasyl Kuchabskyi / Василь Кучабський",
  year: "1969",
  tags: { en: ["Sich Riflemen", "Ukrainian Army", "military history"], uk: ["Січові Стрільці", "Українська Армія", "військова історія"] },
  desc: {
    en: "A substantial military-historical study of the Corps of Sich Riflemen, combining memoirs, documents, and analytical material to trace the formation’s origins, campaigns, and role in the struggle for Ukrainian statehood.",
    uk: "Ґрунтовний воєнно-історичний нарис про Корпус Січових Стрільців, що поєднує спогади, документи й аналітичні матеріали для висвітлення витоків, бойового шляху та ролі формації в боротьбі за українську державність."
  },
  iframeSrc: "https://heyzine.com/flip-book/147d382510.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Path Travelled: Memoirs, Vol. 1 — From the Bystrytsia to the Buh (1911–1929)", uk: "Пройдений шлях: Спомини, Том 1 — Від Бистриці до Бугу (1911–1929)" },
  author: "Volodymyr Makar / Володимир Макар",
  year: "1983",
  tags: { en: ["memoirs", "Galicia", "Ukrainian history"], uk: ["спогади", "Галичина", "історія України"] },
  desc: {
    en: "The first volume of Volodymyr Makar’s memoirs, tracing his early life from Galicia to the Buh region between 1911 and 1929 against the backdrop of Ukrainian social, cultural, and national awakening.",
    uk: "Перший том спогадів Володимира Макара, що простежує його ранній життєвий шлях від Галичини до Надбужжя у 1911–1929 роках на тлі українського суспільного, культурного й національного пробудження."
  },
  iframeSrc: "https://heyzine.com/flip-book/8f57d22507.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Ukrainian Army in the Struggle for Statehood", uk: "Українська армія в боротьбі за державність" },
  author: "Lev Shankovskyi / Лев Шанковський",
  year: "1958",
  tags: { en: ["Ukrainian Army", "statehood", "military history"], uk: ["Українська Армія", "державність", "військова історія"] },
  desc: {
    en: "A military-historical study of the Ukrainian Army’s role in the struggle for statehood, tracing the development of Ukrainian armed formations, strategic challenges, and the connection between military organisation and national independence.",
    uk: "Воєнно-історичне дослідження ролі Української Армії в боротьбі за державність, що простежує розвиток українських військових формацій, стратегічні виклики та зв’язок між військовою організацією і національною незалежністю."
  },
  iframeSrc: "https://heyzine.com/flip-book/8d0e92f10e.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "With the Best", uk: "З найкращими" },
  author: "Yurii Borets / Юрій Борець",
  year: "1986",
  tags: { en: ["UIA", "memoirs", "Ukrainian diaspora"], uk: ["УПА", "спогади", "українська діаспора"] },
  desc: {
    en: "A memoir by UIA veteran Yurii Borets-Chumak, recounting the struggle of Ukrainian insurgents and the post-war fate of former fighters within the wider Ukrainian diaspora.",
    uk: "Спогади ветерана УПА Юрія Борця-Чумака про боротьбу українських повстанців і повоєнну долю колишніх вояків у ширшому середовищі української діаспори."
  },
  iframeSrc: "https://heyzine.com/flip-book/f5015bfb3e.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Insurgent Sketches", uk: "Повстанські нариси" },
  author: "Yevhen Dmytryk (Zinovii Matla) / Євген Дмитрик (Зіновій Матла)",
  year: "1951",
  tags: { en: ["UPA", "literary sketches", "insurgent prose"], uk: ["УПА", "літературні нариси", "повстанська проза"] },
  desc: {
    en: "A collection of literary sketches about the Ukrainian insurgent struggle, portraying the lives, courage, and moral world of fighters in the underground resistance.",
    uk: "Збірка літературних нарисів про українську повстанську боротьбу, що змальовує життя, мужність і моральний світ учасників підпільного спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/4269c066a4.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Homeland, Emigration, and International Behind-the-Scenes Politics", uk: "Край, еміграція і міжнародні закуліси" },
  author: "Anatol Kaminskyi / Анатоль Камінський",
  year: "1982",
  tags: { en: ["Ukrainian diaspora", "political analysis", "OUN"], uk: ["українська діаспора", "політичний аналіз", "ОУН"] },
  desc: {
    en: "A political and analytical work examining the relationship between Ukraine, the émigré community, and international power politics in the context of the Ukrainian liberation movement.",
    uk: "Політико-аналітична праця, що розглядає взаємозв’язок між Україною, еміграційним середовищем і міжнародними політичними закулісами в контексті українського визвольного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/04f2fc32d7.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Fearless: Wind and Smoke", uk: "Безстрашні. Вітер і дим" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1990",
  tags: { en: ["historical essay", "UIA", "resistance"], uk: ["історичний нарис", "УПА", "спротив"] },
  desc: {
    en: "A historical essay portraying the courage and endurance of Ukrainians involved in the armed and underground resistance, preserving the atmosphere of struggle through vivid documentary-literary sketches.",
    uk: "Історичний нарис про мужність і витривалість українців у збройному та підпільному спротиві, що передає атмосферу боротьби через виразні документально-літературні замальовки."
  },
  iframeSrc: "https://heyzine.com/flip-book/4ca340dd7d.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "Fearless: Wind and Smoke", uk: "Безстрашні. Вітер і дим" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1990",
  tags: { en: ["historical essay", "UIA", "resistance"], uk: ["історичний нарис", "УПА", "спротив"] },
  desc: {
    en: "A historical essay portraying the courage and endurance of Ukrainians involved in the armed and underground resistance, preserving the atmosphere of struggle through vivid documentary-literary sketches.",
    uk: "Історичний нарис про мужність і витривалість українців у збройному та підпільному спротиві, що передає атмосферу боротьби через виразні документально-літературні замальовки."
  },
  iframeSrc: "https://heyzine.com/flip-book/4ca340dd7d.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "I Shall Never Forget", uk: "Ніколи не забуду" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1984",
  tags: { en: ["UIA", "World War II", "historical novel"], uk: ["УПА", "Друга світова війна", "історичний роман"] },
  desc: {
    en: "A historical novel about a Canadian airman of Ukrainian origin whose wartime mission in Ukraine, encounters with the UIA, and witness to NKVD crimes transform his understanding of loyalty, freedom, and national struggle.",
    uk: "Історичний роман про канадського льотчика українського походження, чия воєнна місія в Україні, зустріч з УПА та зіткнення зі злочинами НКВД змінюють його розуміння вірності, свободи й національної боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/2b68a08e73.html"
});
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Last Days of the Sturmführer: In His Name", uk: "Останні дні штурмфюрера: Його ім’ям" },
  author: "M. Yanishevskyi, K. Yavorskyi / М. Янішевський, К. Яворський",
  year: "1948",
  tags: { en: ["World War II", "cinema-novel", "Ukrainian diaspora literature"], uk: ["Друга світова війна", "кіно-роман", "діаспорна література"] },
  desc: {
    en: "A Ukrainian diaspora cinema-novel set against the backdrop of the Second World War, combining dramatic and adventure elements to portray the collapse of the Nazi world and the human choices made in its shadow.",
    uk: "Український діаспорний кіно-роман на тлі Другої світової війни, що поєднує драматичні й пригодницькі елементи та змальовує крах нацистського світу й людський вибір у його тіні."
  },
  iframeSrc: "https://heyzine.com/flip-book/3c220ed7c8.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Following the Testament, Part 1: Bury and Rise!", uk: "Слідами заповіту, ч. 1: Поховайте та вставайте!" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1985",
  tags: { en: ["political novel", "Shevchenko", "national struggle"], uk: ["політичний роман", "Шевченко", "національна боротьба"] },
  desc: {
    en: "The first part of Stepan Liubomyrskyi’s political vision-novel trilogy, inspired by Shevchenko’s testament and reflecting on national awakening, historical memory, and the call to renewed struggle.",
    uk: "Перша частина політичного роману-візії Степана Любомирського, натхнена Шевченковим заповітом і присвячена національному пробудженню, історичній пам’яті та заклику до оновленої боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/02018f807b.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Following the Testament, Part 2: Break the Chains!", uk: "Слідами заповіту, ч. 2: Кайдани порвіте!" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1985",
  tags: { en: ["political novel", "Shevchenko", "national awakening"], uk: ["політичний роман", "Шевченко", "національне пробудження"] },
  desc: {
    en: "The second part of the political vision-novel trilogy inspired by Shevchenko’s testament, continuing its reflection on national bondage, resistance, and the moral call to break imperial chains.",
    uk: "Друга частина політичного роману-візії, натхненного Шевченковим заповітом, що продовжує осмислення національної неволі, спротиву та морального заклику розірвати імперські кайдани."
  },
  iframeSrc: "https://heyzine.com/flip-book/6f2bda0288.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Following the Testament, Part 3: And with Evil Enemy Blood Sprinkle Freedom!", uk: "Слідами заповіту, ч. 3: І вражою злою кров’ю волю окропіте!" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1986",
  tags: { en: ["political novel", "Shevchenko", "liberation struggle"], uk: ["політичний роман", "Шевченко", "визвольна боротьба"] },
  desc: {
    en: "The third part of the political vision-novel trilogy inspired by Shevchenko’s testament, bringing its themes of national awakening, sacrifice, and resistance to an uncompromising conclusion.",
    uk: "Третя частина політичного роману-візії, натхненного Шевченковим заповітом, що доводить теми національного пробудження, жертовності та спротиву до безкомпромісного завершення."
  },
  iframeSrc: "https://heyzine.com/flip-book/423c943a76.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Encyclopedia of Ukrainian Studies, Vol. 1", uk: "Енциклопедія українознавства, Том 1" },
  author: "Shevchenko Scientific Society; ed. Volodymyr Kubiiovych / Наукове товариство ім. Шевченка; ред. Володимир Кубійович",
  year: "1955",
  tags: { en: ["Ukrainian studies", "encyclopedia", "reference work"], uk: ["українознавство", "енциклопедія", "довідник"] },
  desc: {
    en: "The first volume of the dictionary section of the Encyclopedia of Ukrainian Studies, a major scholarly reference work produced by the Shevchenko Scientific Society to document Ukrainian history, culture, geography, society, and prominent figures.",
    uk: "Перший том словникової частини «Енциклопедії українознавства» — фундаментального наукового довідника, створеного Науковим товариством ім. Шевченка для висвітлення історії, культури, географії, суспільства та визначних постатей України."
  },
  iframeSrc: "https://heyzine.com/flip-book/b78fc3a699.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Encyclopedia of Ukrainian Studies, Vol. 2", uk: "Енциклопедія українознавства, Том 2" },
  author: "Shevchenko Scientific Society; ed. Volodymyr Kubiiovych / Наукове товариство ім. Шевченка; ред. Володимир Кубійович",
  year: "1957",
  tags: { en: ["Ukrainian studies", "encyclopedia", "reference work"], uk: ["українознавство", "енциклопедія", "довідник"] },
  desc: {
    en: "The second volume of the dictionary section of the Encyclopedia of Ukrainian Studies, continuing the major scholarly reference project with entries on Ukrainian history, culture, geography, society, and public figures.",
    uk: "Другий том словникової частини «Енциклопедії українознавства», що продовжує фундаментальний науковий довідковий проєкт зі статтями про історію, культуру, географію, суспільство та визначних діячів України."
  },
  iframeSrc: "https://heyzine.com/flip-book/359f24216d.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Encyclopedia of Ukrainian Studies, Vol. 3", uk: "Енциклопедія українознавства, Том 3" },
  author: "Shevchenko Scientific Society; ed. Volodymyr Kubiiovych / Наукове товариство ім. Шевченка; ред. Володимир Кубійович",
  year: "1959",
  tags: { en: ["Ukrainian studies", "encyclopedia", "reference work"], uk: ["українознавство", "енциклопедія", "довідник"] },
  desc: {
    en: "The third volume of the dictionary section of the Encyclopedia of Ukrainian Studies, continuing the scholarly reference series with entries on Ukrainian history, culture, geography, society, and notable figures.",
    uk: "Третій том словникової частини «Енциклопедії українознавства», що продовжує фундаментальну довідкову серію зі статтями про історію, культуру, географію, суспільство та визначних діячів України."
  },
  iframeSrc: "https://heyzine.com/flip-book/3eb5175a3b.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Encyclopedia of Ukrainian Studies, Vol. 4", uk: "Енциклопедія українознавства, Том 4" },
  author: "Shevchenko Scientific Society; ed. Volodymyr Kubiiovych / Наукове товариство ім. Шевченка; ред. Володимир Кубійович",
  year: "1962",
  tags: { en: ["Ukrainian studies", "encyclopedia", "reference work"], uk: ["українознавство", "енциклопедія", "довідник"] },
  desc: {
    en: "The fourth volume of the dictionary section of the Encyclopedia of Ukrainian Studies, continuing the major scholarly reference series with entries covering Ukrainian history, culture, geography, society, and public figures.",
    uk: "Четвертий том словникової частини «Енциклопедії українознавства», що продовжує фундаментальну довідкову серію зі статтями про історію, культуру, географію, суспільство та визначних діячів України."
  },
  iframeSrc: "https://heyzine.com/flip-book/418069603f.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Repressive-Punitive System in Ukraine 1917–1953, Vol. 1", uk: "Репресивно-каральна система в Україні 1917–1953, Том 1" },
  author: "Ivan Bilas / Іван Білас",
  year: "1994",
  tags: { en: ["Soviet repression", "NKVD", "historical-legal analysis"], uk: ["радянські репресії", "НКВД", "історико-правовий аналіз"] },
  desc: {
    en: "The first volume of Ivan Bilas’s historical and legal study analysing the structure, mechanisms, and role of the Soviet repressive-punitive system in Ukraine as an instrument of Bolshevik rule and the suppression of the national liberation movement.",
    uk: "Перший том історико-правового дослідження Івана Біласа, що аналізує структуру, механізми та роль радянської репресивно-каральної системи в Україні як знаряддя більшовицького режиму й придушення національно-визвольного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/0e83e0ec8a.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Repressive-Punitive System in Ukraine 1917–1953, Vol. 2", uk: "Репресивно-каральна система в Україні 1917–1953, Том 2" },
  author: "Ivan Bilas / Іван Білас",
  year: "1994",
  tags: { en: ["Soviet repression", "archival documents", "punitive organs"], uk: ["радянські репресії", "архівні документи", "каральні органи"] },
  desc: {
    en: "The second volume of Ivan Bilas’s study serves as a documentary supplement, presenting archival materials on the activity of Soviet repressive-punitive organs in Ukraine.",
    uk: "Другий том праці Івана Біласа є документальним додатком, що подає архівні матеріали про діяльність радянських репресивно-каральних органів в Україні."
  },
  iframeSrc: "https://heyzine.com/flip-book/de4d31fdf9.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "God Will Judge Us", uk: "Нас розсудить Бог" },
  author: "Sviatomyr M. Fostun / Святомир М. Фостун",
  year: "1985",
  tags: { en: ["Pavlo Polubotok", "historical novella", "Cossack Ukraine"], uk: ["Павло Полуботок", "історична повість", "козацька Україна"] },
  desc: {
    en: "A historical novella set in the time of Hetman Pavlo Polubotok, portraying the defence of Cossack rights and Ukrainian autonomy against imperial pressure.",
    uk: "Історична повість із часів гетьмана Павла Полуботка, що змальовує оборону козацьких прав і української автономії перед імперським тиском."
  },
  iframeSrc: "https://heyzine.com/flip-book/204506321c.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Echoes of Time", uk: "Відгуки часу" },
  author: "Irena Knysh / Ірена Книш",
  year: "1972",
  tags: { en: ["essays", "memoirs", "Ukrainian diaspora"], uk: ["нариси", "спогади", "українська діаспора"] },
  desc: {
    en: "A collection of selected essays, articles, memoirs, and materials by Irena Knysh, reflecting Ukrainian cultural, public, and émigré life through the concerns and debates of the mid-twentieth century.",
    uk: "Збірка вибраних нарисів, статей, спогадів і матеріалів Ірени Книш, що відображає українське культурне, громадське й еміграційне життя крізь проблеми та дискусії середини ХХ століття."
  },
  iframeSrc: "https://heyzine.com/flip-book/39b30757bc.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Under the Hammer of War, Part 1: The Serpent Withdraws", uk: "Під молотом війни, ч. 1: Гад відходить" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1955",
  tags: { en: ["World War II", "Western Ukraine", "historical novel"], uk: ["Друга світова війна", "Західна Україна", "історичний роман"] },
  desc: {
    en: "The first volume of a wartime novel cycle set in Western Ukraine during the Second World War, portraying the upheaval of occupation, the collapse of one regime, and the difficult choices faced by Ukrainians in a time of violence and uncertainty.",
    uk: "Перший том воєнного романного циклу про Західну Україну часів Другої світової війни, що змальовує потрясіння окупації, відступ одного режиму та складний вибір українців у добу насильства й невизначеності."
  },
  iframeSrc: "https://heyzine.com/flip-book/073a394989.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Under the Hammer of War, Part 2: Another Night", uk: "Під молотом війни, ч. 2: Ще одна ніч" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1956",
  tags: { en: ["World War II", "Western Ukraine", "historical novel"], uk: ["Друга світова війна", "Західна Україна", "історичний роман"] },
  desc: {
    en: "The second volume of the wartime novel cycle set in Western Ukraine, continuing the story of life under occupation, moral endurance, and the struggle to survive amid political violence and historical upheaval.",
    uk: "Другий том воєнного романного циклу про Західну Україну, що продовжує оповідь про життя в умовах окупації, моральну витривалість і боротьбу за виживання серед політичного насильства та історичних потрясінь."
  },
  iframeSrc: "https://heyzine.com/flip-book/9fe73d72e1.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Under the Hammer of War, Part 3: Fiery Souls", uk: "Під молотом війни, ч. 3: Полум’яні душі" },
  author: "Stepan Liubomyrskyi (Liubomyr Rykhtytskyi) / Степан Любомирський (Любомир Рихтицький)",
  year: "1956",
  tags: { en: ["World War II", "Western Ukraine", "historical novel"], uk: ["Друга світова війна", "Західна Україна", "історичний роман"] },
  desc: {
    en: "The third volume of the wartime novel cycle set in Western Ukraine, continuing the portrayal of lives shaped by occupation, ideological conflict, and the moral trials of Ukrainians under the pressure of war.",
    uk: "Третій том воєнного романного циклу про Західну Україну, що продовжує змалювання людських доль в умовах окупації, ідейного протистояння та моральних випробувань українців під тиском війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/bc224e40e9.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Turmoil", uk: "Крутіж" },
  author: "Bohdan Lepkyi / Богдан Лепкий",
  year: "1947",
  tags: { en: ["Hetmanate", "Ivan Vyhovskyi", "historical fiction"], uk: ["Гетьманщина", "Іван Виговський", "історична проза"] },
  desc: {
    en: "A historical novella set during the turbulent struggle for the Hetmanate after Bohdan Khmelnytskyi’s death, portraying political intrigue, Cossack divisions, and Valentii Bosakovskyi’s attempt to defend his homeland.",
    uk: "Історична повість з часів боротьби за гетьманство після смерті Богдана Хмельницького, що змальовує політичні інтриги, розбрат серед козацької старшини та спробу Валентія Босаковського стати на захист рідної землі."
  },
  iframeSrc: "https://heyzine.com/flip-book/401d5223a4.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Day of Wrath, Part 1: A Tale of 1648", uk: "День гніву, ч. 1: Повість про 1648 рік" },
  author: "Yurii Kosach / Юрій Косач",
  year: "1947",
  tags: { en: ["Khmelnytsky Uprising", "historical novel", "Cossack Ukraine"], uk: ["Хмельниччина", "історичний роман", "козацька Україна"] },
  desc: {
    en: "The first part of Yurii Kosach’s historical novel about the uprising of 1648 under Bohdan Khmelnytskyi, portraying the explosive beginning of the Cossack revolt and the wider social forces that shaped a turning point in Ukrainian history.",
    uk: "Перша частина історичного роману Юрія Косача про повстання 1648 року під проводом Богдана Хмельницького, що змальовує вибуховий початок козацького руху та ширші суспільні сили переломної доби української історії."
  },
  iframeSrc: "https://heyzine.com/flip-book/7de2316430.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Cossacks in Muscovy", uk: "Козаки в Московії" },
  author: "Yurii Lypa / Юрій Липа",
  year: "1957",
  tags: { en: ["Cossacks", "historical adventure novel", "17th century"], uk: ["козацтво", "історико-пригодницький роман", "XVII століття"] },
  desc: {
    en: "A historical adventure novel set in the seventeenth century, following Cossack characters in Muscovy while exploring political intrigue, cultural confrontation, and the wider Ukrainian view of imperial power.",
    uk: "Історико-пригодницький роман XVII століття, що веде козацьких героїв у простір Московії та розкриває політичні інтриги, культурне зіткнення й український погляд на імперську владу."
  },
  iframeSrc: "https://heyzine.com/flip-book/aa8b5f4147.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Hetman Pylyp Orlyk (1672–1742): His Life and Fate", uk: "Гетьман Пилип Орлик (1672–1742): його життя і доля" },
  author: "Borys Krupnytskyi / Борис Крупницький",
  year: "1956",
  tags: { en: ["Pylyp Orlyk", "Hetmanate", "Ukrainian statehood"], uk: ["Пилип Орлик", "Гетьманщина", "українська державність"] },
  desc: {
    en: "A historical-biographical study of Hetman Pylyp Orlyk, tracing his political life, exile, diplomatic efforts, and enduring role in the struggle for Ukrainian statehood after Mazepa.",
    uk: "Історико-біографічне дослідження про гетьмана Пилипа Орлика, що висвітлює його політичний шлях, еміграцію, дипломатичні зусилля та тривалу роль у боротьбі за українську державність після Мазепи."
  },
  iframeSrc: "https://heyzine.com/flip-book/d1b3835309.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Saint Volodymyr the Great: Ruler and Baptiser of Rus-Ukraine (960–1015)", uk: "Святий Володимир Великий: володар і христитель Руси-України (960–1015)" },
  author: "Irynei Ivan Nazarko, OSBM / Іриней Іван Назарко, ЧСВВ",
  year: "1954",
  tags: { en: ["Volodymyr the Great", "Christianisation of Rus", "church history"], uk: ["Володимир Великий", "хрещення Руси", "історія Церкви"] },
  desc: {
    en: "A church-historical study of Saint Volodymyr the Great, presenting his rule, the Christianisation of Rus-Ukraine, and his lasting place in the religious and political history of the Ukrainian lands.",
    uk: "Церковно-історичне дослідження про святого Володимира Великого, що висвітлює його правління, хрещення Руси-України та тривале місце князя в релігійній і політичній історії українських земель."
  },
  iframeSrc: "https://heyzine.com/flip-book/a466655b99.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Historical Walks Through Lviv", uk: "Історичні проходи по Львові" },
  author: "Ivan Krypiakevych / Іван Крип’якевич",
  year: "1991",
  tags: { en: ["Lviv", "local history", "guidebook"], uk: ["Львів", "краєзнавство", "путівник"] },
  desc: {
    en: "A historical and local-studies guide to Lviv, first published in 1932, introducing readers to the city’s past, landmarks, and key events from the medieval period to the early twentieth century.",
    uk: "Історико-краєзнавчий путівник Львовом, уперше виданий 1932 року, що знайомить читача з минулим міста, його пам’ятками та важливими подіями від середньовіччя до початку ХХ століття."
  },
  iframeSrc: "https://heyzine.com/flip-book/e93413f32b.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Hetman Ivan Mazepa and His Era", uk: "Гетьман Іван Мазепа та його доба" },
  author: "Oleksandr Ohloblyn / Олександр Оглоблин",
  year: "1960",
  tags: { en: ["Ivan Mazepa", "Hetmanate", "Ukrainian statehood"], uk: ["Іван Мазепа", "Гетьманщина", "українська державність"] },
  desc: {
    en: "A major historical monograph on Hetman Ivan Mazepa, examining his political leadership, diplomacy, and the wider Hetmanate era as a crucial stage in the development of Ukrainian statehood.",
    uk: "Фундаментальна історична монографія про гетьмана Івана Мазепу, що аналізує його політичне лідерство, дипломатію та ширшу добу Гетьманщини як важливий етап розвитку української державності."
  },
  iframeSrc: "https://heyzine.com/flip-book/96909546d0.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Baturyn", uk: "Батурин" },
  author: "Bohdan Lepkyi / Богдан Лепкий",
  year: "1959",
  tags: { en: ["Ivan Mazepa", "Baturyn", "historical fiction"], uk: ["Іван Мазепа", "Батурин", "історична проза"] },
  desc: {
    en: "A historical novella from Bohdan Lepkyi’s Mazepa cycle, portraying Mazepa’s final decision to ally with Sweden against Peter I and the tragic destruction of the Hetmanate capital, Baturyn.",
    uk: "Історична повість із мазепинського циклу Богдана Лепкого, що змальовує остаточний вибір Мазепи виступити зі шведами проти Петра І та трагічне зруйнування гетьманської столиці Батурина."
  },
  iframeSrc: "https://heyzine.com/flip-book/30a8bb5338.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Black Council: A Chronicle of 1663", uk: "Чорна рада: Хроніка 1663 року" },
  author: "Panteleimon Kulish / Пантелеймон Куліш",
  year: "1955",
  tags: { en: ["Cossack Ukraine", "historical novel", "The Ruin"], uk: ["козацька Україна", "історичний роман", "Руїна"] },
  desc: {
    en: "The first Ukrainian historical novel, centred on the Black Council of 1663 in Nizhyn and portraying the political conflict, social divisions, and moral choices of Cossack Ukraine during the Ruin.",
    uk: "Перший український історичний роман, зосереджений на Чорній раді 1663 року в Ніжині та змалюванні політичної боротьби, суспільних розколів і морального вибору козацької України доби Руїни."
  },
  iframeSrc: "https://heyzine.com/flip-book/8b2a0f9e58.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Hetman Petro Sahaidachny", uk: "Гетьман Петро Сагайдачний" },
  author: "Danylo Mordovets; adapted by Mariia Zahirnia / Данило Мордовець; перероб. Марія Загірня",
  year: "1957",
  tags: { en: ["Petro Sahaidachny", "Cossack Ukraine", "historical fiction"], uk: ["Петро Сагайдачний", "козацька Україна", "історична проза"] },
  desc: {
    en: "A historical story based on Danylo Mordovets’s prose and adapted by Mariia Zahirnia, portraying Hetman Petro Sahaidachny as a Cossack military and political leader in the wider struggle for Ukrainian dignity and power.",
    uk: "Історичне оповідання на основі повісті Данила Мордовця в переробці Марії Загірньої, що змальовує гетьмана Петра Сагайдачного як козацького військового й політичного провідника в боротьбі за українську гідність і силу."
  },
  iframeSrc: "https://heyzine.com/flip-book/88359c734b.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Princely Glory", uk: "Княжа слава" },
  author: "Antin Lototskyi / Антін Лотоцький",
  year: "1946",
  tags: { en: ["Kyivan Rus", "historical stories", "children’s literature"], uk: ["Київська Русь", "історичні оповідання", "дитяча література"] },
  desc: {
    en: "A collection of historical stories for young readers, introducing the princely era of Kyivan Rus and the Galicia-Volhynia lands through vivid episodes of courage, leadership, faith, and national memory.",
    uk: "Збірка історичних оповідань для юного читача, що знайомить із княжою добою Київської Русі та Галицько-Волинських земель через яскраві епізоди мужності, провідництва, віри й національної пам’яті."
  },
  iframeSrc: "https://heyzine.com/flip-book/def800f75b.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "History of Ukraine, Vol. 1: To the Middle of the 17th Century", uk: "Історія України, Том 1: До половини XVII сторіччя" },
  author: "Nataliia Polonska-Vasylenko / Наталія Полонська-Василенко",
  year: "1972",
  tags: { en: ["Ukrainian history", "Kyivan Rus", "Cossack era"], uk: ["історія України", "Київська Русь", "козацька доба"] },
  desc: {
    en: "The first volume of Nataliia Polonska-Vasylenko’s major synthesis of Ukrainian history, tracing the development of Ukrainian lands and society from the earliest periods through Kyivan Rus, Lithuanian-Polish rule, and the rise of the Cossack era.",
    uk: "Перший том фундаментального синтезу історії України Наталії Полонської-Василенко, що простежує розвиток українських земель і суспільства від найдавніших часів через Київську Русь, литовсько-польську добу та становлення козацької епохи."
  },
  iframeSrc: "https://heyzine.com/flip-book/96e4337962.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "History of Ukraine, Vol. 2: From the Middle of the 17th Century to 1923", uk: "Історія України, Том 2: Від половини XVII сторіччя до 1923 року" },
  author: "Nataliia Polonska-Vasylenko / Наталія Полонська-Василенко",
  year: "1976",
  tags: { en: ["Ukrainian history", "Hetmanate", "modern Ukraine"], uk: ["історія України", "Гетьманщина", "модерна Україна"] },
  desc: {
    en: "The second volume of Nataliia Polonska-Vasylenko’s synthesis of Ukrainian history, covering the period from the mid-seventeenth century to 1923 through the Hetmanate, imperial rule, national revival, revolution, and the struggle for statehood.",
    uk: "Другий том синтетичної історії України Наталії Полонської-Василенко, що охоплює період від середини XVII століття до 1923 року — від Гетьманщини й імперської доби до національного відродження, революції та боротьби за державність."
  },
  iframeSrc: "https://heyzine.com/flip-book/a4dd682ea2.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "History of Ukraine", uk: "Історія України" },
  author: "Ivan Kholmskyi (Ivan Krypiakevych) / Іван Холмський (Іван Крип’якевич)",
  year: "1949",
  tags: { en: ["Ukrainian history", "statehood", "reference work"], uk: ["історія України", "державність", "довідкова праця"] },
  desc: {
    en: "A concise scholarly survey of Ukrainian history from prehistoric times to 1914, covering political development, statehood, culture, social life, and Ukraine’s relations with neighbouring countries.",
    uk: "Стислий науковий огляд історії України від доісторичних часів до 1914 року, що охоплює політичний розвиток, державність, культуру, суспільне життя та взаємини з сусідніми країнами."
  },
  iframeSrc: "https://heyzine.com/flip-book/9afcb66e48.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Outline of the History of Ukraine", uk: "Нарис історії України" },
  author: "Dmytro I. Doroshenko / Дмитро І. Дорошенко",
  year: "1991",
  tags: { en: ["Ukrainian history", "statehood", "historiography"], uk: ["історія України", "державність", "історіографія"] },
  desc: {
    en: "A landmark synthesis of Ukrainian history by Dmytro Doroshenko, presenting the development of Ukrainian lands and society as a long historical process of state formation, political struggle, and national continuity.",
    uk: "Фундаментальний синтез історії України Дмитра Дорошенка, що подає розвиток українських земель і суспільства як тривалий історичний процес державотворення, політичної боротьби та національної тяглості."
  },
  iframeSrc: "https://heyzine.com/flip-book/7c61abced2.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Almanac of the Ukrainian National Association for 1973", uk: "Альманах Українського Народного Союзу на 1973 рік" },
  author: "Ukrainian National Association / Український Народний Союз",
  year: "1973",
  tags: { en: ["Ukrainian diaspora", "almanac", "community history"], uk: ["українська діаспора", "альманах", "громадська історія"] },
  desc: {
    en: "An annual Ukrainian diaspora almanac published by Svoboda in Jersey City, bringing together historical articles, literary works, essays, commemorative materials, and community records of Ukrainian life abroad.",
    uk: "Щорічний альманах української діаспори, виданий «Свободою» в Джерзі-Ситі, що поєднує історичні статті, літературні твори, есеї, ювілейні матеріали та хроніку громадського життя українців за кордоном."
  },
  iframeSrc: "https://heyzine.com/flip-book/c6187a8c2f.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "In the Forests near Vyazma", uk: "В лісах під Вязьмою" },
  author: "Dmytro Chub / Дмитро Чуб",
  year: "1958",
  tags: { en: ["World War II", "reportage memoir", "war experience"], uk: ["Друга світова війна", "репортаж-спогад", "воєнний досвід"] },
  desc: {
    en: "A reportage-memoir about the author’s experience during the Second World War, depicting the chaos of retreat, survival near Vyazma, and the psychological reality of Ukrainians caught in the machinery of war.",
    uk: "Репортаж-спогад про досвід автора під час Другої світової війни, що змальовує хаос відступу, виживання під Вязьмою та психологічну реальність українців, втягнутих у воєнну машину."
  },
  iframeSrc: "https://heyzine.com/flip-book/69a02f6e98.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Fervent Lightnings: A Selection of Works", uk: "Палкі блискавиці: вибір із творів" },
  author: "Lesia Ukrainka; selected and introduced by Volodymyr Shaian / Леся Українка; вступне слово і вибір Володимира Шаяна",
  year: "1971",
  tags: { en: ["Lesia Ukrainka", "poetry", "selected works"], uk: ["Леся Українка", "поезія", "вибрані твори"] },
  desc: {
    en: "A centenary selection of Lesia Ukrainka’s works, prepared by Volodymyr Shaian, presenting her poetry and dramatic voice through themes of freedom, spiritual resistance, national dignity, and creative defiance.",
    uk: "Ювілейний вибір із творів Лесі Українки, упорядкований Володимиром Шаяном, що представляє її поетичний і драматичний голос через теми свободи, духовного спротиву, національної гідності та творчої непокори."
  },
  iframeSrc: "https://heyzine.com/flip-book/a69f35c914.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Poetry from Ukraine", uk: "Поезії з України" },
  author: "Ihor Kalynets / Ігор Калинець",
  year: "1970",
  tags: { en: ["poetry", "Sixtiers", "Ukrainian dissident literature"], uk: ["поезія", "шістдесятники", "дисидентська література"] },
  desc: {
    en: "A Brussels edition of Ihor Kalynets’s second poetry collection, published abroad as a cultural act of preservation and resistance, presenting the symbolic, spiritually charged voice of a Ukrainian Sixtier poet under Soviet censorship.",
    uk: "Брюссельське видання другої поетичної збірки Ігоря Калинця, опубліковане за кордоном як акт культурного збереження й спротиву, що представляє символічний, духовно наснажений голос українського поета-шістдесятника в умовах радянської цензури."
  },
  iframeSrc: "https://heyzine.com/flip-book/4a76dea4da.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Humorous Samizdat", uk: "Гумористичний самвидав" },
  author: "Sviatoslav Karavanskyi / Святослав Караванський",
  year: "1982",
  tags: { en: ["satire", "samizdat", "Soviet regime"], uk: ["сатира", "самвидав", "радянський режим"] },
  desc: {
    en: "A collection of humorous and satirical samizdat verse, based on uncensored folk humour and anecdotes about Soviet power, reworked by Sviatoslav Karavanskyi into a sharp literary form of anti-totalitarian wit.",
    uk: "Збірка гумористично-сатиричних самвидавних віршів, заснована на нецензурованому народному гуморі й анекдотах про радянську владу, які Святослав Караванський літературно опрацював як дотепну форму антитоталітарної сатири."
  },
  iframeSrc: "https://heyzine.com/flip-book/d398ce7f70.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Winter Trees", uk: "Зимові дерева" },
  author: "Vasyl Stus / Василь Стус",
  year: "1970",
  tags: { en: ["poetry", "Ukrainian dissident literature", "Sixtiers"], uk: ["поезія", "дисидентська література", "шістдесятники"] },
  desc: {
    en: "Vasyl Stus’s first poetry collection, published abroad in Brussels and London, presenting a morally uncompromising poetic voice shaped by existential reflection, spiritual resistance, and the pressure of Soviet censorship.",
    uk: "Перша поетична збірка Василя Стуса, видана за кордоном у Брюсселі й Лондоні, що представляє морально безкомпромісний голос поета, сформований екзистенційними роздумами, духовним спротивом і тиском радянської цензури."
  },
  iframeSrc: "https://heyzine.com/flip-book/4b88d019c5.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Ukraine of My Blue Days", uk: "Україна моїх блакитних днів" },
  author: "Oleksa Hryshchenko / Олекса Грищенко",
  year: "1958",
  tags: { en: ["memoirs", "Ukrainian art", "cultural memory"], uk: ["спогади", "українське мистецтво", "культурна пам’ять"] },
  desc: {
    en: "A lyrical memoir by modernist painter and art scholar Oleksa Hryshchenko, returning to the Ukraine of his youth through personal memory, artistic vision, landscape, childhood impressions, and the cultural atmosphere of a lost homeland.",
    uk: "Ліричні спогади художника-модерніста й мистецтвознавця Олекси Грищенка, у яких Україна юності постає через особисту пам’ять, мистецьке бачення, краєвиди, дитячі враження та культурну атмосферу втраченої батьківщини."
  },
  iframeSrc: "https://heyzine.com/flip-book/28dcc4fe24.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Ukraine of My Blue Days", uk: "Україна моїх блакитних днів" },
  author: "Oleksa Hryshchenko / Олекса Грищенко",
  year: "1958",
  tags: { en: ["memoirs", "Ukrainian art", "cultural memory"], uk: ["спогади", "українське мистецтво", "культурна пам’ять"] },
  desc: {
    en: "A lyrical memoir by modernist painter and art scholar Oleksa Hryshchenko, returning to the Ukraine of his youth through personal memory, artistic vision, landscape, childhood impressions, and the cultural atmosphere of a lost homeland.",
    uk: "Ліричні спогади художника-модерніста й мистецтвознавця Олекси Грищенка, у яких Україна юності постає через особисту пам’ять, мистецьке бачення, краєвиди, дитячі враження та культурну атмосферу втраченої батьківщини."
  },
  iframeSrc: "https://heyzine.com/flip-book/28dcc4fe24.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Roseate Fire", uk: "Вогонь трояндний" },
  author: "Oleksander De (Oleksandr Barchuk) / Олександер Де (Олександр Барчук)",
  year: "1970",
  tags: { en: ["poetry", "Ukrainian diaspora", "lyrical romanticism"], uk: ["поезія", "українська діаспора", "ліричний романтизм"] },
  desc: {
    en: "A poetry collection by Ukrainian émigré writer Oleksander De, published in London, combining lyrical-romantic imagery with national, civic, and anti-imperial themes characteristic of his literary voice.",
    uk: "Поетична збірка українського еміграційного письменника Олександера Де, видана в Лондоні, що поєднує лірично-романтичну образність із національними, громадянськими та антиімперськими мотивами його творчості."
  },
  iframeSrc: "https://heyzine.com/flip-book/8b82551cd1.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Adventures of the Zaporozhians", uk: "Пригоди запорожців" },
  author: "Viacheslav Budzynovskyi / В’ячеслав Будзиновський",
  year: "1957",
  tags: { en: ["Zaporozhian Cossacks", "historical story", "adventure fiction"], uk: ["запорожці", "історичне оповідання", "пригодницька проза"] },
  desc: {
    en: "A historical adventure story about Zaporozhian Cossacks after the destruction of the Sich, portraying exile, resistance to Muscovite domination, and the search for freedom beyond the Dnipro lands.",
    uk: "Історико-пригодницьке оповідання про запорожців після зруйнування Січі, що змальовує вигнання, спротив московському пануванню та пошук волі поза наддніпрянськими землями."
  },
  iframeSrc: "https://heyzine.com/flip-book/676cd74232.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Zakhar Berkut", uk: "Захар Беркут" },
  author: "Ivan Franko / Іван Франко",
  year: "",
  tags: { en: ["Ivan Franko", "historical fiction", "Carpathian Rus"], uk: ["Іван Франко", "історична проза", "Карпатська Русь"] },
  desc: {
    en: "A historical novella set in thirteenth-century Carpathian Rus, portraying the community of Tukhla, its struggle against Mongol invasion, and Franko’s ideal of freedom, solidarity, and collective responsibility.",
    uk: "Історична повість про Карпатську Русь XIII століття, що змальовує громаду Тухлі, її боротьбу проти монгольської навали та Франковий ідеал свободи, солідарності й громадської відповідальності."
  },
  iframeSrc: "https://heyzine.com/flip-book/e2b3bf2c36.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Collected Works, 1938–1978", uk: "Зібрані твори 1938–1978" },
  author: "Yar Slavutych / Яр Славутич",
  year: "1978",
  tags: { en: ["poetry", "collected works", "Ukrainian diaspora literature"], uk: ["поезія", "зібрані твори", "українська діаспорна література"] },
  desc: {
    en: "A collected edition covering forty years of Yar Slavutych’s literary work, bringing together poetry, a long poem, and translations that reflect his émigré experience, historical memory, and lyrical-intellectual vision of Ukraine.",
    uk: "Зібране видання, що охоплює сорок років творчості Яра Славутича та поєднує поезії, поему й переклади, відображаючи його еміграційний досвід, історичну пам’ять і лірико-інтелектуальне бачення України."
  },
  iframeSrc: "https://heyzine.com/flip-book/00633adc3f.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Forest Song", uk: "Лісова пісня" },
  author: "Lesia Ukrainka / Леся Українка",
  year: "1964",
  tags: { en: ["dramatic fairy play", "Ukrainian classic", "mythology"], uk: ["драма-феєрія", "українська класика", "міфологія"] },
  desc: {
    en: "Lesia Ukrainka’s celebrated dramatic fairy play, written in 1911, intertwines human drama with the mythic world of Polissia to explore love, freedom, betrayal, and the conflict between spiritual beauty and everyday compromise.",
    uk: "Знаменита драма-феєрія Лесі Українки, написана 1911 року, поєднує людську драму з міфологічним світом Полісся та осмислює любов, свободу, зраду і конфлікт між духовною красою та буденною поступкою."
  },
  iframeSrc: "https://heyzine.com/flip-book/0fc64833c4.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The White World", uk: "Білий світ" },
  author: "Vasyl Barka / Василь Барка",
  year: "1947",
  tags: { en: ["poetry", "Ukrainian diaspora literature", "spiritual lyricism"], uk: ["поезія", "українська діаспорна література", "духовна лірика"] },
  desc: {
    en: "An early poetry collection by Vasyl Barka, published in post-war Munich, where biblical imagery, spiritual searching, memory of catastrophe, and modernist poetic language shape a deeply introspective Ukrainian émigré voice.",
    uk: "Рання поетична збірка Василя Барки, видана в повоєнному Мюнхені, у якій біблійна образність, духовні пошуки, пам’ять про катастрофи й модерністична мова формують глибоко внутрішній голос української еміграційної поезії."
  },
  iframeSrc: "https://heyzine.com/flip-book/4f7aefefc5.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Cathedral", uk: "Собор" },
  author: "Oles Honchar / Олесь Гончар",
  year: "1968",
  tags: { en: ["Ukrainian classic", "spiritual memory", "Soviet censorship"], uk: ["українська класика", "духовна пам’ять", "радянська цензура"] },
  desc: {
    en: "A landmark Ukrainian novel about the defence of spiritual memory, human dignity, and cultural heritage, centred on an old Cossack cathedral whose fate becomes a moral test for a Soviet industrial community.",
    uk: "Знаковий український роман про захист духовної пам’яті, людської гідності та культурної спадщини, у центрі якого старовинний козацький собор стає моральним випробуванням для радянського індустріального середовища."
  },
  iframeSrc: "https://heyzine.com/flip-book/a3c69e6664.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "On the Slopes of the Carpathian and Pyrenean Mountains", uk: "На схилах гір Карпат і Піренеїв" },
  author: "Mykola Halychko (Fr. Vasyl Pryima) / Микола Галичко (о. Василь Прийма)",
  year: "1975",
  tags: { en: ["poetry", "Ukrainian diaspora", "religious lyricism"], uk: ["поезія", "українська діаспора", "релігійна лірика"] },
  desc: {
    en: "A poetry collection by priest and émigré author Mykola Halychko, written between the memory of the Carpathians and life near the Pyrenees, combining patriotic feeling, religious reflection, exile, and longing for Ukraine.",
    uk: "Поетична збірка священника й еміграційного автора Миколи Галичка, написана між пам’яттю про Карпати та життям біля Піренеїв, що поєднує патріотичне почуття, релігійні роздуми, еміграційний досвід і тугу за Україною."
  },
  iframeSrc: "https://heyzine.com/flip-book/cda2290935.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Ruddy Veles", uk: "Рум’яний Влес" },
  author: "Yurii Buriakivets / Юрій Буряківець",
  year: "1982",
  tags: { en: ["poetry", "mythology", "Ukrainian diaspora literature"], uk: ["поезія", "міфологія", "українська діаспорна література"] },
  desc: {
    en: "A large-scale poetic epic by Ukrainian émigré writer Yurii Buriakivets, blending historical imagination, mythological motifs, folklore, and reflections on Ukraine’s ancient cultural memory.",
    uk: "Масштабна поетична епопея українського еміграційного письменника Юрія Буряківця, що поєднує історичну уяву, міфологічні мотиви, фольклор і роздуми про давню культурну пам’ять України."
  },
  iframeSrc: "https://heyzine.com/flip-book/8ab635305c.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "From the Stream of Life: Novellas", uk: "З потоку життя: новелі" },
  author: "Ivanna Chornobryvets (Oleksandra Sulyma-Blokhyn) / Іванна Чорнобривець (Олександра Сулима-Блохина)",
  year: "1963",
  tags: { en: ["novellas", "Ukrainian diaspora literature", "women’s prose"], uk: ["новели", "українська діаспорна література", "жіноча проза"] },
  desc: {
    en: "A collection of novellas by Ivanna Chornobryvets, bringing together psychologically attentive stories from the stream of everyday life, with a focus on human character, moral choices, women’s experience, and the emotional world of Ukrainian émigré prose.",
    uk: "Збірка новел Іванни Чорнобривець, що через психологічно уважні сюжети з потоку повсякденного життя розкриває людські характери, моральний вибір, жіночий досвід і внутрішній світ української еміграційної прози."
  },
  iframeSrc: "https://heyzine.com/flip-book/29d513235a.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Anthology of Ukrainian Poetry", uk: "Антологія української поезії" },
  author: "Volodymyr Derzhavyn / Володимир Державин",
  year: "1957",
  tags: { en: ["Ukrainian poetry", "anthology", "literary heritage"], uk: ["українська поезія", "антологія", "літературна спадщина"] },
  desc: {
    en: "A substantial London-published anthology of Ukrainian poetry compiled by Volodymyr Derzhavyn, presenting Ukrainian poetic tradition as a continuous literary and cultural heritage for readers in the diaspora.",
    uk: "Ґрунтовна лондонська антологія української поезії, укладена Володимиром Державиним, що представляє українську поетичну традицію як тяглу літературну й культурну спадщину для читачів у діаспорі."
  },
  iframeSrc: "https://heyzine.com/flip-book/e61f150af1.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Homin: Literary Anthology", uk: "Гомін: Літературна антологія" },
  author: "ed. Kost Kuzyk / ред. Кость Кузик",
  year: "1964",
  tags: { en: ["literary anthology", "Ukrainians in Poland", "diaspora literature"], uk: ["літературна антологія", "українці в Польщі", "діаспорна література"] },
  desc: {
    en: "A Warsaw-published literary anthology edited by Kost Kuzyk, bringing together poetry and prose by Ukrainian writers in Poland and reflecting the cultural life of the Ukrainian community around the Ukrainian Social and Cultural Society.",
    uk: "Варшавська літературна антологія за редакцією Костя Кузика, що об’єднує поетичні й прозові твори українських письменників у Польщі та відображає культурне життя громади навколо Українського суспільно-культурного товариства."
  },
  iframeSrc: "https://heyzine.com/flip-book/f7dc63b494.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Easter Bells: An Anthology of Modern Ukrainian Easter Poetry", uk: "Великодні дзвони: Антологія новішої української Великодньої поезії" },
  author: "compiled by H. H. Kinakh, OSBM / склав Г. Г. Кінах, ЧСВВ",
  year: "1968",
  tags: { en: ["Easter poetry", "religious poetry", "Ukrainian anthology"], uk: ["великодня поезія", "духовна поезія", "українська антологія"] },
  desc: {
    en: "A Rome-published anthology of modern Ukrainian Easter poetry compiled by H. H. Kinakh, bringing together religious, lyrical, and national poetic reflections on Resurrection, sacrifice, renewal, and spiritual hope.",
    uk: "Римська антологія новішої української великодньої поезії, укладена Г. Г. Кінахом, що поєднує релігійні, ліричні й національні поетичні роздуми про Воскресіння, жертву, оновлення та духовну надію."
  },
  iframeSrc: "https://heyzine.com/flip-book/f5802227d0.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "My Insurgent Marches", uk: "Мої повстанські марші" },
  author: "Petro Hetmanets (Petro Vasylenko) / Петро Гетьманець (Петро Василенко)",
  year: "1946",
  tags: { en: ["insurgent poetry", "UIA", "liberation struggle"], uk: ["повстанська поезія", "УПА", "визвольна боротьба"] },
  desc: {
    en: "A wartime poetry collection by UIA fighter Petro Hetmanets, combining march-like rhythm, patriotic lyricism, and the emotional voice of the Ukrainian underground struggle.",
    uk: "Воєнна поетична збірка вояка УПА Петра Гетьманця, що поєднує маршову ритміку, патріотичну лірику та емоційний голос українського підпільного спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/92c4c6f27f.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Mazepa: Baturyn and Poltava", uk: "Мазепа: Батурин і Полтава" },
  author: "Ivan Desnianskyi / Іван Деснянський",
  year: "1957",
  tags: { en: ["Ivan Mazepa", "Baturyn", "historical poem"], uk: ["Іван Мазепа", "Батурин", "історична поема"] },
  desc: {
    en: "A historical poem-tragedy about Ivan Mazepa, Baturyn, and Poltava, portraying the events of 1708–1709 through the drama of the Hetman’s anti-Muscovite choice, national sacrifice, and the struggle for Ukrainian statehood.",
    uk: "Історична поема-трагедія про Івана Мазепу, Батурин і Полтаву, що осмислює події 1708–1709 років через драму антимосковського вибору гетьмана, національної жертви та боротьби за українську державність."
  },
  iframeSrc: "https://heyzine.com/flip-book/d687bf46c3.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Modern Aeneid", uk: "Енеїда модерна" },
  author: "Leonid Poltava / Леонід Полтава",
  year: "1955",
  tags: { en: ["satirical poem", "Ukrainian diaspora literature", "modern Aeneid"], uk: ["сатирична поема", "українська діаспорна література", "модерна Енеїда"] },
  desc: {
    en: "A satirical poem-epic that reimagines the Aeneid tradition in a modern Ukrainian émigré context, using humour, adventure, and cultural parody to comment on politics, society, and national identity.",
    uk: "Сатирична поема-епопея, що переосмислює традицію «Енеїди» в модерному українському еміграційному контексті, поєднуючи гумор, пригоди й культурну пародію для осмислення політики, суспільства та національної ідентичності."
  },
  iframeSrc: "https://heyzine.com/flip-book/fe41d1eb56.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Volhynian Year", uk: "Волинський рік" },
  author: "Leonid Mosendz / Леонід Мосендз",
  year: "1948",
  tags: { en: ["poem", "Volhynia", "cultural memory"], uk: ["поема", "Волинь", "культурна пам’ять"] },
  desc: {
    en: "A neoclassical poem by Leonid Mosendz that returns to the Volhynian landscape and the memory of childhood, transforming the rhythm of the year into a lyrical meditation on homeland, nature, and inner belonging.",
    uk: "Неокласична поема Леоніда Мосендза, що повертається до волинського краєвиду й пам’яті дитинства, перетворюючи ритм року на ліричне осмислення батьківщини, природи та внутрішньої належності."
  },
  iframeSrc: "https://heyzine.com/flip-book/61588f763d.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Reflections", uk: "Роздуми" },
  author: "Oleksander De (Oleksandr Barchuk) / Олександер Де (Олександр Барчук)",
  year: "1967",
  tags: { en: ["poetry", "Ukrainian diaspora literature", "philosophical lyricism"], uk: ["поезія", "українська діаспорна література", "філософська лірика"] },
  desc: {
    en: "A poetry collection by Ukrainian émigré writer Oleksander De, bringing together reflective, civic, and lyrical meditations on the human condition, memory, moral choice, and the Ukrainian experience abroad.",
    uk: "Поетична збірка українського еміграційного письменника Олександера Де, що поєднує рефлексивні, громадянські й ліричні роздуми про людину, пам’ять, моральний вибір та український досвід на чужині."
  },
  iframeSrc: "https://heyzine.com/flip-book/3232909bf0.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Ivan Franko and Women’s Equality", uk: "Іван Франко та рівноправність жінки" },
  author: "Irena Knysh / Ірена Книш",
  year: "1956",
  tags: { en: ["Ivan Franko", "women’s rights", "literary criticism"], uk: ["Іван Франко", "права жінок", "літературознавство"] },
  desc: {
    en: "A literary and social study by Irena Knysh, published for the centenary of Ivan Franko’s birth, examining Franko’s views on women’s equality and his engagement with the Ukrainian women’s movement and social emancipation.",
    uk: "Літературно-суспільна праця Ірени Книш, видана до сторіччя з дня народження Івана Франка, що досліджує його погляди на рівноправність жінки та зв’язок із українським жіночим рухом і суспільною емансипацією."
  },
  iframeSrc: "https://heyzine.com/flip-book/a982a48f94.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Dzvony: Scientific and Literary Journal, No. 3–4", uk: "Дзвони: науково-літературний журнал, ч. 3–4" },
  author: "ed. Bohdan Lonchyna / ред. Богдан Лончина",
  year: "1978",
  tags: { en: ["literary journal", "Ukrainian diaspora", "cultural criticism"], uk: ["літературний журнал", "українська діаспора", "культурна критика"] },
  desc: {
    en: "An issue of the Ukrainian scientific and literary journal Dzvony, bringing together literary texts, scholarly essays, cultural commentary, and reflections on Ukrainian intellectual life in the diaspora.",
    uk: "Випуск українського науково-літературного журналу «Дзвони», що поєднує художні тексти, наукові статті, культурну публіцистику та роздуми про українське інтелектуальне життя в діаспорі."
  },
  iframeSrc: "https://heyzine.com/flip-book/00c74c6f93.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Dzvony: Scientific and Literary Journal, No. 1–2", uk: "Дзвони: науково-літературний журнал, ч. 1–2" },
  author: "ed. Bohdan Lonchyna / ред. Богдан Лончина",
  year: "1980",
  tags: { en: ["literary journal", "Christian literature", "Ukrainian diaspora"], uk: ["літературний журнал", "християнська література", "українська діаспора"] },
  desc: {
    en: "An issue of the renewed Ukrainian scientific and literary journal Dzvony, reflecting the Christian-humanist and cultural concerns of Ukrainian émigré intellectual life through literary works, essays, and scholarly materials.",
    uk: "Випуск відновленого українського науково-літературного журналу «Дзвони», що через художні твори, есеї та наукові матеріали відображає християнсько-гуманістичні й культурні зацікавлення українського інтелектуального життя в діаспорі."
  },
  iframeSrc: "https://heyzine.com/flip-book/ece3f6e2ed.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "My Craft", uk: "Моє ремесло" },
  author: "Sviatoslav Karavanskyi / Святослав Караванський",
  year: "1981",
  tags: { en: ["poetry", "dissident literature", "translations"], uk: ["поезія", "дисидентська література", "переклади"] },
  desc: {
    en: "A poetry collection by Ukrainian dissident, linguist, and long-term Soviet political prisoner Sviatoslav Karavanskyi, combining civic lyricism, moral resistance, linguistic precision, and authorial translations of Shakespeare.",
    uk: "Поетична збірка українського дисидента, мовознавця й багатолітнього політичного в’язня Святослава Караванського, що поєднує громадянську лірику, моральний спротив, мовну точність і авторські переклади Шекспіра."
  },
  iframeSrc: "https://heyzine.com/flip-book/e8c246295a.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "In the Footsteps of Mykhailo Kotsiubynskyi", uk: "Слідами Михайла Коцюбинського" },
  author: "Petro Pavlovych (Apollon Trembovetskyi) / Петро Павлович (Аполлон Трембовецький)",
  year: "1946",
  tags: { en: ["Mykhailo Kotsiubynskyi", "illustrated collection", "literary heritage"], uk: ["Михайло Коцюбинський", "ілюстрований збірник", "літературна спадщина"] },
  desc: {
    en: "An illustrated collection dedicated to the memory of Mykhailo Kotsiubynskyi, combining biographical material, photographs, and excerpts from his works to introduce the life and literary legacy of the Ukrainian writer.",
    uk: "Ілюстрований збірник, присвячений пам’яті Михайла Коцюбинського, що поєднує біографічні відомості, фотоматеріали та уривки з творів для ознайомлення з життям і літературною спадщиною письменника."
  },
  iframeSrc: "https://heyzine.com/flip-book/e66b52baf6.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Longing for Ukraine: From the Poetry of the Young", uk: "Туга за Україною: із поезій молодих" },
  author: "Liubomyr Hoseiko / Любомир Госейко",
  year: "1971",
  tags: { en: ["poetry", "Ukrainian diaspora", "young poets"], uk: ["поезія", "українська діаспора", "молоді поети"] },
  desc: {
    en: "An early poetry collection by Liubomyr Hoseiko, published in London by the Association of Ukrainians in Great Britain, giving voice to a young émigré generation’s longing for Ukraine, cultural memory, and search for belonging.",
    uk: "Рання поетична збірка Любомира Госейка, видана в Лондоні Союзом Українців у Великій Британії, що передає тугу молодого еміграційного покоління за Україною, культурну пам’ять і пошук належності."
  },
  iframeSrc: "https://heyzine.com/flip-book/c05d4bc783.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Ballad of the Forest Murmur", uk: "Баляда лісового шуму" },
  author: "Volodymyr Shaian / Володимир Шаян",
  year: "1965",
  tags: { en: ["poetry", "Ukrainian diaspora literature", "nature lyricism"], uk: ["поезія", "українська діаспорна література", "природна лірика"] },
  desc: {
    en: "A short poetry collection by Volodymyr Shaian, published in London, where the image of the forest becomes a lyrical space of memory, exile, nostalgia, and spiritual connection with Ukraine.",
    uk: "Коротка поетична збірка Володимира Шаяна, видана в Лондоні, у якій образ лісу постає ліричним простором пам’яті, еміграційної туги, ностальгії та духовного зв’язку з Україною."
  },
  iframeSrc: "https://heyzine.com/flip-book/8c71acfa2e.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Arise, Perun!", uk: "Повстань, Перуне!" },
  author: "Volodymyr Shaian / Володимир Шаян",
  year: "1967",
  tags: { en: ["oratorio poem", "Ukrainian mythology", "spiritual poetry"], uk: ["ораторійна поема", "українська міфологія", "духовна поезія"] },
  desc: {
    en: "An oratorio poem in nine parts by Volodymyr Shaian, invoking the figure of Perun as a symbol of ancient Ukrainian spiritual power, heroic awakening, and national-cultural renewal.",
    uk: "Ораторійна поема у дев’яти частинах Володимира Шаяна, що звертається до образу Перуна як символу давньої української духовної сили, героїчного пробудження та національно-культурного оновлення."
  },
  iframeSrc: "https://heyzine.com/flip-book/e08ba643c7.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Word of the Golden Diadem", uk: "Слово золотої діадеми" },
  author: "Volodymyr Shaian / Володимир Шаян",
  year: "1963",
  tags: { en: ["poetry", "Ukrainian mythology", "spiritual nationalism"], uk: ["поезія", "українська міфологія", "духовний націоналізм"] },
  desc: {
    en: "A short poetry collection by Volodymyr Shaian, published in London by Orden, where symbolic and mythological imagery becomes a poetic language of spiritual renewal, national memory, and Ukrainian cultural self-assertion.",
    uk: "Коротка поетична збірка Володимира Шаяна, видана в Лондоні видавництвом «Орден», у якій символічна й міфологічна образність стає поетичною мовою духовного оновлення, національної пам’яті та українського культурного самоутвердження."
  },
  iframeSrc: "https://heyzine.com/flip-book/9294709dca.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Tryzna", uk: "Тризна" },
  author: "Taras Shevchenko; trans. Volodymyr Shaian / Тарас Шевченко; пер. Володимир Шаян",
  year: "1963",
  tags: { en: ["Taras Shevchenko", "poetry", "translation"], uk: ["Тарас Шевченко", "поезія", "переклад"] },
  desc: {
    en: "A Ukrainian translation by Volodymyr Shaian of Taras Shevchenko’s Russian-language poem Tryzna, preserving a lesser-known part of Shevchenko’s poetic legacy through an émigré London edition.",
    uk: "Український переклад Володимира Шаяна російськомовної поеми Тараса Шевченка «Тризна», що зберігає маловідомішу частину Шевченкової поетичної спадщини в лондонському еміграційному виданні."
  },
  iframeSrc: "https://heyzine.com/flip-book/33d8bc4583.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Without Sword and Homeland", uk: "Без шаблі і вітчизни" },
  author: "Stepan Sapeliak / Степан Сапеляк",
  year: "1989",
  tags: { en: ["poetry", "dissident literature", "Soviet imprisonment"], uk: ["поезія", "дисидентська література", "радянське ув’язнення"] },
  desc: {
    en: "A poetry collection by Ukrainian dissident and political prisoner Stepan Sapeliak, written largely during imprisonment in the late 1970s and 1980s, where biblical imagery, national longing, and inner resistance shape a powerful poetic testimony.",
    uk: "Поетична збірка українського дисидента й політичного в’язня Степана Сапеляка, значна частина якої написана в ув’язненні наприкінці 1970-х — у 1980-х роках і поєднує біблійні образи, національну тугу та внутрішній спротив."
  },
  iframeSrc: "https://heyzine.com/flip-book/7d949eee9a.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Last Spring", uk: "Остання весна" },
  author: "Yevhen Malaniuk / Євген Маланюк",
  year: "1959",
  tags: { en: ["poetry", "Ukrainian diaspora literature", "national memory"], uk: ["поезія", "українська діаспорна література", "національна пам’ять"] },
  desc: {
    en: "A New York poetry collection by Yevhen Malaniuk, where the poet’s severe classical voice combines exile, historical memory, spiritual tension, and reflections on Ukraine’s fate in the twentieth century.",
    uk: "Нью-йоркська поетична збірка Євгена Маланюка, у якій суворий класичний голос поета поєднує еміграційний досвід, історичну пам’ять, духовну напругу та роздуми про долю України у ХХ столітті."
  },
  iframeSrc: "https://heyzine.com/flip-book/d3689fc41b.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Poet", uk: "Поет" },
  author: "Todos Osmachka / Тодось Осьмачка",
  year: "",
  tags: { en: ["poem", "Ukrainian modernism", "spiritual resistance"], uk: ["поема", "український модернізм", "духовний спротив"] },
  desc: {
    en: "A large poetic work by Todos Osmachka, structured as a poem in twenty-four songs and three parts, where the figure of the poet becomes a symbol of truth-seeking, moral suffering, and spiritual resistance in a violent historical age.",
    uk: "Велика поетична праця Тодося Осьмачки, побудована як поема у двадцяти чотирьох піснях і трьох частинах, де постать поета стає символом правдошукання, морального страждання та духовного спротиву в жорстоку історичну добу."
  },
  iframeSrc: "https://heyzine.com/flip-book/97147ec8c8.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Scouts of the Steppe Cohorts", uk: "Звідуни степових когорт" },
  author: "Sviatomyr M. Fostun / Святомир М. Фостун",
  year: "1972",
  tags: { en: ["historical novella", "Ukrainian historical memory", "adventure prose"], uk: ["історична повість", "українська історична пам’ять", "пригодницька проза"] },
  desc: {
    en: "A historical novella by Sviatomyr Fostun that uses the motif of scouts and steppe warriors to recreate Ukrainian historical memory, courage, loyalty, and the spirit of national struggle.",
    uk: "Історична повість Святомира Фостуна, що через образ звідунів і степових когорт відтворює українську історичну пам’ять, мужність, вірність і дух національної боротьби."
  },
  iframeSrc: "https://heyzine.com/flip-book/6d1bbb21ca.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "May Wreath: A Collection of Poems and Stories for Mother’s Day", uk: "Травневий вінок: збірка віршів і оповідань з нагоди Дня матері" },
  author: "compiled and published by Olena Kostiv / зібрала й видала Олена Костів",
  year: "1963",
  tags: { en: ["Mother’s Day", "poetry and stories", "Ukrainian diaspora"], uk: ["День матері", "вірші й оповідання", "українська діаспора"] },
  desc: {
    en: "A Toronto-published Ukrainian diaspora collection of poems and stories for Mother’s Day, bringing together literary pieces that honour motherhood, family memory, gratitude, and the emotional bond with Ukrainian cultural tradition.",
    uk: "Торонська збірка української діаспори з віршами й оповіданнями до Дня матері, що об’єднує твори про материнство, родинну пам’ять, вдячність і духовний зв’язок з українською культурною традицією."
  },
  iframeSrc: "https://heyzine.com/flip-book/e76568fadf.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Estafeta: ADUK Journal, No. 1", uk: "Естафета: журнал АДУК, число перше" },
  author: "Association of Ukrainian Cultural Figures / Асоціація діячів української культури",
  year: "1970",
  tags: { en: ["literary journal", "Ukrainian culture", "diaspora"], uk: ["літературний журнал", "українська культура", "діаспора"] },
  desc: {
    en: "The first issue of Estafeta, a journal of the Association of Ukrainian Cultural Figures, bringing together literature, art, scholarship, and criticism as part of Ukrainian cultural life in New York and Toronto.",
    uk: "Перше число журналу «Естафета» Асоціації діячів української культури, що поєднує літературу, мистецтво, науку й критику як частину українського культурного життя Нью-Йорка і Торонто."
  },
  iframeSrc: "https://heyzine.com/flip-book/c0fc71ff76.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Kremlin’s Greatest Crime: The Planned Artificial Famine in Ukraine, 1932–1933", uk: "Найбільший злочин Кремля: Запланований штучний голод в Україні 1932–1933 років" },
  author: "M. Verbytskyi / М. Вербицький",
  year: "1952",
  tags: { en: ["Holodomor", "eyewitness testimonies", "Soviet crimes"], uk: ["Голодомор", "свідчення очевидців", "радянські злочини"] },
  desc: {
    en: "One of the earliest émigré documentary collections on the Holodomor, published in London for the twentieth anniversary of the famine and based on testimonies of survivors gathered among former Soviet-repressed Ukrainians in Great Britain.",
    uk: "Одна з найперших еміграційних документальних збірок про Голодомор, видана в Лондоні до двадцятих роковин трагедії та заснована на свідченнях очевидців, зібраних серед колишніх репресованих українців у Великій Британії."
  },
  iframeSrc: "https://heyzine.com/flip-book/1768387ad5.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Memorial Book of the Millennium of Christianity in Ukraine, 988–1988", uk: "Пам’ятна книга відзначення Тисячоліття Хрещення України, 988–1988" },
  author: "National Millennium Committee in Great Britain; ed. Sviatomyr M. Fostun, Vasyl Oleskiv et al. / Крайовий комітет Тисячоліття у Великій Британії; ред. Святомир М. Фостун, Василь Олеськів та ін.",
  year: "2001",
  tags: { en: ["Christianisation of Ukraine", "Ukrainian diaspora", "commemorative book"], uk: ["Хрещення України", "українська діаспора", "пам’ятне видання"] },
  desc: {
    en: "A commemorative book documenting how Ukrainians in Great Britain marked the Millennium of Christianity in Ukraine, bringing together historical reflection, community records, photographs, and materials on religious and cultural remembrance.",
    uk: "Пам’ятне видання про відзначення українцями у Великій Британії Тисячоліття Хрещення України, що поєднує історичні роздуми, громадську хроніку, фотографії та матеріали релігійної й культурної пам’яті."
  },
  iframeSrc: "https://heyzine.com/flip-book/fde863e5f7.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Fear, Vol. 1", uk: "Страх, Том 1" },
  author: "Olena Zvychaina / Олена Звичайна",
  year: "1957",
  tags: { en: ["Yezhovshchyna", "Soviet terror", "Ukrainian diaspora prose"], uk: ["Єжовщина", "радянський терор", "українська діаспорна проза"] },
  desc: {
    en: "The first volume of Olena Zvychaina’s novel about Soviet Ukraine during the Yezhovshchyna, portraying fear as a daily condition of life under Stalinist terror and revealing the moral pressure placed on both victims and collaborators of the regime.",
    uk: "Перший том роману Олени Звичайної про підрадянську Україну доби Єжовщини, що показує страх як щоденний стан життя під сталінським терором і розкриває моральний тиск як на жертв, так і на виконавців режиму."
  },
  iframeSrc: "https://heyzine.com/flip-book/8a5a80746f.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Fear, Vol. 2", uk: "Страх, Том 2" },
  author: "Olena Zvychaina / Олена Звичайна",
  year: "1958",
  tags: { en: ["Yezhovshchyna", "Soviet terror", "Ukrainian diaspora prose"], uk: ["Єжовщина", "радянський терор", "українська діаспорна проза"] },
  desc: {
    en: "The second volume of Olena Zvychaina’s novel about Soviet Ukraine during the Yezhovshchyna, continuing the psychological portrayal of life under Stalinist terror, where fear, moral compromise, love, and resistance shape the fate of individuals under totalitarian rule.",
    uk: "Другий том роману Олени Звичайної про підрадянську Україну доби Єжовщини, що продовжує психологічне змалювання життя під сталінським терором, де страх, моральний компроміс, любов і спротив визначають долі людей у тоталітарній системі."
  },
  iframeSrc: "https://heyzine.com/flip-book/d5bef2047b.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Tsarivna", uk: "Царівна" },
  author: "Olha Kobylianska / Ольга Кобилянська",
  year: "1954",
  tags: { en: ["Ukrainian classic", "women’s emancipation", "psychological prose"], uk: ["українська класика", "емансипація жінки", "психологічна проза"] },
  desc: {
    en: "A landmark psychological novella by Olha Kobylianska centred on Nataliia Verkovychivna, a thoughtful and self-aware young woman whose struggle for education, dignity, love, and inner freedom embodies the author’s early feminist vision.",
    uk: "Знакова психологічна повість Ольги Кобилянської про Наталію Верковичівну — мислячу й самосвідому молоду жінку, чия боротьба за освіту, гідність, любов і внутрішню свободу втілює раннє феміністичне бачення авторки."
  },
  iframeSrc: "https://heyzine.com/flip-book/dee706e906.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Literary Life in Soviet Ukraine, Part 1: Prose of the 1920s–1930s", uk: "Літературне життя на підсовєтській Україні, ч. 1: Проза 1920–30 років" },
  author: "M. Halchuk / М. Гальчук",
  year: "1952",
  tags: { en: ["literary criticism", "Soviet Ukraine", "Ukrainian prose"], uk: ["літературознавство", "підсовєтська Україна", "українська проза"] },
  desc: {
    en: "A concise émigré literary-critical survey of Ukrainian prose in Soviet Ukraine during the 1920s and 1930s, examining literary development under ideological pressure, censorship, and the Soviet transformation of cultural life.",
    uk: "Стислий еміграційний літературознавчий огляд української прози на підсовєтській Україні 1920–1930-х років, що розглядає розвиток літератури під ідеологічним тиском, цензурою та радянською трансформацією культурного життя."
  },
  iframeSrc: "https://heyzine.com/flip-book/2d64a191ab.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Materials for the History of Ukrainian Medicine, Vol. 1", uk: "Матеріяли до історії української медицини, Том 1" },
  author: "chief ed. Vasyl Pliushch; ed. Roman Osinchuk et al. / гол. ред. Василь Плющ; ред. Роман Осінчук та ін.",
  year: "1975",
  tags: { en: ["history of medicine", "Ukrainian scholarship", "medical heritage"], uk: ["історія медицини", "українська наука", "медична спадщина"] },
  desc: {
    en: "The first volume of a scholarly émigré collection on the history of Ukrainian medicine, created to document Ukrainian medical science, education, institutions, and physicians beyond Soviet ideological interpretations.",
    uk: "Перший том наукової еміграційної збірки з історії української медицини, створеної для висвітлення української медичної науки, освіти, інституцій і лікарів поза радянськими ідеологічними трактуваннями."
  },
  iframeSrc: "https://heyzine.com/flip-book/8362f43c0f.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Steppe Flower", uk: "Степова квітка" },
  author: "Mykola Lazorskyi / Микола Лазорський",
  year: "1965",
  tags: { en: ["Roksolana", "historical novel", "Ottoman Empire"], uk: ["Роксолана", "історичний роман", "Османська імперія"] },
  desc: {
    en: "A historical novel about Roksolana, reimagined by Mykola Lazorskyi as Nastia Vysovska from the Ukrainian steppe, whose intelligence, courage, and political influence shape her role at the Ottoman court while preserving a living bond with her homeland.",
    uk: "Історичний роман про Роксолану, переосмислену Миколою Лазорським як Настя Висовська з українського степу, чий розум, мужність і політичний вплив визначають її роль при османському дворі та зберігають живий зв’язок із рідним краєм."
  },
  iframeSrc: "https://heyzine.com/flip-book/f164b9653e.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Granite: A Drama in Four Acts", uk: "Ґраніт: Драма на чотири дії" },
  author: "Oleksa Zaporizkyi (Oleksii Senyk) / Олекса Запорізький (Олексій Сеник)",
  year: "1947",
  tags: { en: ["drama", "German occupation", "Ukrainian diaspora literature"], uk: ["драма", "німецька окупація", "українська діаспорна література"] },
  desc: {
    en: "A four-act drama by Oleksa Zaporizkyi, written in the émigré milieu after the Second World War and set in Ukraine under German occupation, where personal choices unfold under the pressure of war, fear, and moral conflict.",
    uk: "Драма на чотири дії Олекси Запорізького, написана в повоєнному еміграційному середовищі та дія якої відбувається в Україні під німецькою окупацією, де людський вибір розкривається під тиском війни, страху й морального конфлікту."
  },
  iframeSrc: "https://heyzine.com/flip-book/e9caaa0251.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "From Hutsulshchyna: Essays", uk: "З Гуцульщини: Нариси" },
  author: "Mykhailo Lomatskyi / Михайло Ломацький",
  year: "1956",
  tags: { en: ["Hutsulshchyna", "ethnographic essays", "Carpathian culture"], uk: ["Гуцульщина", "етнографічні нариси", "карпатська культура"] },
  desc: {
    en: "A collection of essays on Hutsulshchyna by Mykhailo Lomatskyi, a long-time teacher and devoted observer of the region, portraying the landscape, people, customs, and cultural spirit of the Hutsul world.",
    uk: "Збірка нарисів про Гуцульщину Михайла Ломацького — довголітнього вчителя й уважного знавця краю, що змальовує природу, людей, звичаї та культурний дух гуцульського світу."
  },
  iframeSrc: "https://heyzine.com/flip-book/7c54242b24.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Ukrainian Music: A Historical and Critical Review", uk: "Українська музика: історично-критичний огляд" },
  author: "Antin Rudnytskyi / Антін Рудницький",
  year: "1963",
  tags: { en: ["Ukrainian music", "musicology", "cultural history"], uk: ["українська музика", "музикознавство", "культурна історія"] },
  desc: {
    en: "A major musicological survey by composer and conductor Antin Rudnytskyi, tracing the development of Ukrainian music through historical, critical, and cultural perspectives, from folk and church traditions to professional composition.",
    uk: "Важливий музикознавчий огляд композитора й диригента Антіна Рудницького, що простежує розвиток української музики в історичному, критичному й культурному вимірах — від народної та церковної традиції до професійної композиції."
  },
  iframeSrc: "https://heyzine.com/flip-book/5bee9f9134.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "Storks, Part 1", uk: "Лелеки, ч. 1" },
  author: "Pamfil Ses / Памфіл Сесь",
  year: "1960",
  tags: { en: ["poetry", "Ukrainians in Britain", "diaspora literature"], uk: ["поезія", "українці у Британії", "діаспорна література"] },
  desc: {
    en: "The first part of Pamfil Ses’s verse work, created in the Ukrainian émigré milieu in Britain and shaped by longing for the homeland, historical memory, and the emotional symbolism of the stork as a sign of return and belonging.",
    uk: "Перша частина віршованого твору Памфіла Сеся, створеного в українському еміграційному середовищі Великої Британії та позначеного тугою за батьківщиною, історичною пам’яттю й символікою лелеки як знаку повернення та належності."
  },
  iframeSrc: "https://heyzine.com/flip-book/8e5ec00df5.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The God of Fire, Vol. 1: In Santo Antônio", uk: "Бог вогню, Том 1: В Санто Антоніо" },
  author: "Olha Mak / Ольга Мак",
  year: "1955",
  tags: { en: ["adventure fiction", "Brazilian life", "Ukrainian diaspora literature"], uk: ["пригодницька проза", "бразилійське життя", "українська діаспорна література"] },
  desc: {
    en: "The first volume of Olha Mak’s adventure story set in Brazil, following its characters into the unfamiliar world of Santo Antônio and opening a vivid Ukrainian émigré literary vision of South American life, danger, and discovery.",
    uk: "Перший том пригодницької повісті Ольги Мак із бразилійського життя, що вводить героїв у незнайомий світ Санто Антоніо та відкриває яскраве українське еміграційне бачення Південної Америки, небезпеки й відкриття."
  },
  iframeSrc: "https://heyzine.com/flip-book/89a71e34f1.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The God of Fire, Vol. 2: Drama on Guaíra", uk: "Бог вогню, Том 2: Драма на Ґваїрі" },
  author: "Olha Mak / Ольга Мак",
  year: "1955",
  tags: { en: ["adventure fiction", "Brazilian life", "Ukrainian diaspora literature"], uk: ["пригодницька проза", "бразилійське життя", "українська діаспорна література"] },
  desc: {
    en: "The second volume of Olha Mak’s adventure story set in Brazil, continuing the journey of Ukrainian characters through South American landscapes, local customs, danger, and discovery around Guaíra.",
    uk: "Другий том пригодницької повісті Ольги Мак із бразилійського життя, що продовжує подорож українських героїв крізь південноамериканські краєвиди, місцеві звичаї, небезпеки й відкриття довкола Ґваїри."
  },
  iframeSrc: "https://heyzine.com/flip-book/8a39be56e1.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Generations Will Meet", uk: "Покоління зійдуться" },
  author: "Ivan Bodnarchuk / Іван Боднарчук",
  year: "1974",
  tags: { en: ["Ukrainian diaspora", "generational memory", "novella"], uk: ["українська діаспора", "пам’ять поколінь", "повість"] },
  desc: {
    en: "A novella by Ukrainian Canadian writer Ivan Bodnarchuk about the hope that younger émigré generations will reconnect with the spiritual and cultural heritage of their parents, preserving a living Ukrainian identity abroad.",
    uk: "Повість українсько-канадського письменника Івана Боднарчука про надію на те, що молодші еміграційні покоління повернуться до духовної й культурної спадщини батьків, зберігаючи живу українську ідентичність за кордоном."
  },
  iframeSrc: "https://heyzine.com/flip-book/1044cfd8ac.html"
});
// 2) Shelf 3 -> library[2]
library[2].books.push({
  title: { en: "The Generations Will Meet", uk: "Покоління зійдуться" },
  author: "Ivan Bodnarchuk / Іван Боднарчук",
  year: "1974",
  tags: { en: ["Ukrainian diaspora", "generational memory", "novella"], uk: ["українська діаспора", "пам’ять поколінь", "повість"] },
  desc: {
    en: "A novella by Ukrainian Canadian writer Ivan Bodnarchuk about the hope that younger émigré generations will reconnect with the spiritual and cultural heritage of their parents, preserving a living Ukrainian identity abroad.",
    uk: "Повість українсько-канадського письменника Івана Боднарчука про надію на те, що молодші еміграційні покоління повернуться до духовної й культурної спадщини батьків, зберігаючи живу українську ідентичність за кордоном."
  },
  iframeSrc: "https://heyzine.com/flip-book/1044cfd8ac.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "An Introduction to Ukrainian History, Vol. 2: The Lithuanian-Rus’ Commonwealth, the Polish Domination and the Cossack-Hetman State", uk: "Вступ до історії України, Том 2: Литовсько-руська держава, польське панування та козацько-гетьманська держава" },
  author: "Nicholas L. Fr.-Chirovsky / Ніколас Л. Фр.-Чировський",
  year: "1984",
  tags: { en: ["Ukrainian history", "Cossack Hetmanate", "Lithuanian-Rus Commonwealth", "in English"], uk: ["історія України", "Гетьманщина", "Литовсько-руська держава"] },
  desc: {
    en: "The second volume of Nicholas L. Chirovsky’s English-language survey of Ukrainian history, covering the Lithuanian-Rus’ Commonwealth, Polish domination, and the rise of the Cossack-Hetman state as key stages in Ukraine’s political and cultural development.",
    uk: "Другий том англомовного огляду історії України Ніколаса Л. Чировського, що висвітлює литовсько-руську добу, польське панування та становлення козацько-гетьманської держави як ключові етапи політичного й культурного розвитку України."
  },
  iframeSrc: "https://heyzine.com/flip-book/f550750bdb.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Anglo-American Perspectives on the Ukrainian Question, 1938–1951: A Documentary Collection", uk: "Англо-американські погляди на українське питання, 1938–1951: документальна збірка" },
  author: "compiled by Lubomyr Y. Luciuk, Bohdan S. Kordan / упоряд. Любомир Я. Луцюк, Богдан С. Кордан",
  year: "1987",
  tags: { en: ["Ukrainian question", "diplomatic documents", "Anglo-American policy", "in English"], uk: ["українське питання", "дипломатичні документи", "англо-американська політика"] },
  desc: {
    en: "A documentary collection presenting British, American, and Canadian perspectives on the Ukrainian question from 1938 to 1951, tracing how Ukraine, nationalism, borders, refugees, and Soviet power were viewed in wartime and early Cold War diplomacy.",
    uk: "Документальна збірка британських, американських і канадських поглядів на українське питання 1938–1951 років, що показує, як Україну, націоналізм, кордони, біженців і радянську владу сприймали у воєнній та ранньохолодновоєнній дипломатії."
  },
  iframeSrc: "https://heyzine.com/flip-book/b8fe646315.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Against the Invaders: Taras Chuprynka — Roman Shukhevych, Commander-in-Chief of the UPA", uk: "Проти загарбників: Тарас Чупринка — Роман Шухевич, головний командир УПА" },
  author: "Petro Mirchuk; trans. Ihor Mirchuk / Петро Мірчук; пер. Ігор Мірчук",
  year: "1997",
  tags: { en: ["Roman Shukhevych", "UIA", "biography", "in English"], uk: ["Роман Шухевич", "УПА", "біографія"] },
  desc: {
    en: "An English-language biographical study of Roman Shukhevych, known as Taras Chuprynka, presenting his role as Commander-in-Chief of the Ukrainian Insurgent Army and placing his leadership within the wider armed struggle against occupying powers.",
    uk: "Англомовне біографічне дослідження про Романа Шухевича, відомого як Тарас Чупринка, що висвітлює його роль головного командира Української Повстанської Армії та розглядає його провідництво в ширшому контексті збройної боротьби проти окупаційних сил."
  },
  iframeSrc: "https://heyzine.com/flip-book/0223d1a7e2.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Concentration Camps in the USSR", uk: "Концентраційні табори в СРСР" },
  author: "Volodymyr Kosyk / Володимир Косик",
  year: "1962",
  tags: { en: ["Gulag", "Soviet repression", "in English"], uk: ["ГУЛАГ", "радянські репресії", "примусова праця"] },
  desc: {
    en: "An English-language émigré study on the Soviet concentration camp system, documenting forced labour, political imprisonment, and first-hand accounts of repression in the USSR for a Western readership.",
    uk: "Англомовне еміграційне дослідження радянської системи концтаборів, що документує примусову працю, політичне ув’язнення та свідчення очевидців про репресії в СРСР для західного читача."
  },
  iframeSrc: "https://heyzine.com/flip-book/e0d1cd3c3d.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "In Defense of Humanism: The Case against Myth-Creation in the U.N.", uk: "На захист гуманізму: проти творення міфів в ООН" },
  author: "Iwan Wowchuk / Іван Вовчук",
  year: "1970",
  tags: { en: ["human rights", "United Nations", "political essay", "in English"], uk: ["права людини", "ООН", "політичний нарис"] },
  desc: {
    en: "A short political essay challenging myth-making around the United Nations and defending humanistic principles in the context of international politics, captive nations, and Soviet imperial domination.",
    uk: "Короткий політичний нарис, що полемізує з міфотворенням довкола Організації Об’єднаних Націй і захищає гуманістичні принципи в контексті міжнародної політики, поневолених націй та радянського імперського панування."
  },
  iframeSrc: "https://heyzine.com/flip-book/bf6489e706.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Arms of Valor", uk: "Зброя звитяги" },
  author: "Pavlo Shandruk / Павло Шандрук",
  year: "1959",
  tags: { en: ["in English", "military memoirs", "Ukrainian Revolution"], uk: ["Армія УНР", "військові спогади", "Українська революція"] },
  desc: {
    en: "An English-language military memoir by Pavlo Shandruk, a senior officer of the UNR Army, recounting the revolutionary and military struggle of 1917–1921 and presenting the Ukrainian fight for statehood to a Western readership.",
    uk: "Англомовні військові спогади Павла Шандрука, старшини Армії УНР, що висвітлюють революційну й воєнну боротьбу 1917–1921 років та представляють українське змагання за державність західному читачеві."
  },
  iframeSrc: "https://heyzine.com/flip-book/5a997d8759.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Heroes of Their Day: The Reminiscences of Bohdan Panchuk", uk: "Герої свого дня: спогади Богдана Панчука" },
  author: "ed. Lubomyr Y. Luciuk; Bohdan Panchuk / ред. Любомир Я. Луцюк; Богдан Панчук",
  year: "1983",
  tags: { en: ["Ukrainian Canadians", "in English", "World War II"], uk: ["українці Канади", "переміщені особи", "Друга світова війна"] },
  desc: {
    en: "An edited memoir of Bohdan Panchuk, a Ukrainian Canadian serviceman and community activist, documenting his wartime service, humanitarian work for Ukrainian displaced persons, and the role of Ukrainian Canadians in post-war relief efforts.",
    uk: "Редаговані спогади Богдана Панчука — українсько-канадського військовослужбовця й громадського діяча, що документують його воєнну службу, допомогу українським переміщеним особам та участь українців Канади в повоєнній гуманітарній праці."
  },
  iframeSrc: "https://heyzine.com/flip-book/41da5167d8.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Harvest of Sorrow: Soviet Collectivization and the Terror-Famine", uk: "Жнива скорботи: радянська колективізація і терор-голод" },
  author: "Robert Conquest / Роберт Конквест",
  year: "1986",
  tags: { en: ["Holodomor", "Soviet collectivization", "in English"], uk: ["Голодомор", "радянська колективізація", "терор-голод"] },
  desc: {
    en: "A landmark English-language study of Soviet collectivization, dekulakization, and the 1932–1933 terror-famine, bringing the Holodomor and the mass suffering of Ukraine’s peasantry to wider Western historical consciousness.",
    uk: "Знакова англомовна праця про радянську колективізацію, розкуркулення та терор-голод 1932–1933 років, що ввела тему Голодомору й масових страждань українського селянства у ширшу західну історичну свідомість."
  },
  iframeSrc: "https://heyzine.com/flip-book/85e29c6329.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "In the German Mills of Death, 1941–1945", uk: "У німецьких млинах смерті, 1941–1945" },
  author: "Petro Mirchuk / Петро Мірчук",
  year: "1985",
  tags: { en: ["Nazi concentration camps", "Ukrainian prisoners", "World War II", "in English"], uk: ["нацистські концтабори", "українські в’язні", "Друга світова війна"] },
  desc: {
    en: "An English-language memoir and documentary testimony by Petro Mirchuk, a former prisoner of Auschwitz and other Nazi concentration camps, recounting the experiences of Ukrainian political prisoners under the German camp system during the Second World War.",
    uk: "Англомовне мемуарно-документальне свідчення Петра Мірчука, колишнього в’язня Аушвіца та інших нацистських концтаборів, про досвід українських політичних в’язнів у німецькій табірній системі часів Другої світової війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/39430dc0c5.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Early Ukrainian Settlements in Canada, 1895–1900: Dr. Josef Oleskow’s Role in the Settlement of the Canadian Northwest", uk: "Ранні українські поселення в Канаді, 1895–1900: роль д-ра Йосифа Олеськова в заселенні канадського Північного Заходу" },
  author: "Vladimir J. Kaye / Володимир Дж. Кей",
  year: "1964",
  tags: { en: ["Ukrainian Canadians", "immigration history", "in English"], uk: ["українці Канади", "історія імміграції", "Йосиф Олеськів"] },
  desc: {
    en: "A documentary history of the first mass Ukrainian settlements in Canada, examining Dr. Josef Oleskow’s role in promoting organised emigration and tracing the formation of Ukrainian communities in the Canadian Northwest between 1895 and 1900.",
    uk: "Документальна історія перших масових українських поселень у Канаді, що досліджує роль д-ра Йосифа Олеськова в організованій еміграції та простежує формування українських громад на канадському Північному Заході у 1895–1900 роках."
  },
  iframeSrc: "https://heyzine.com/flip-book/234b911e96.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Khrushchov’s Crimes in Ukraine: Mass-Murders of Ukrainian Political Prisoners", uk: "Злочини Хрущова в Україні: масові вбивства українських політичних в’язнів" },
  author: "Yaroslaw Stezko / Ярослав Стецько",
  year: "1962",
  tags: { en: ["Soviet crimes", "political prisoners", "Khrushchev", "in English"], uk: ["радянські злочини", "політичні в’язні", "Хрущов"] },
  desc: {
    en: "An English-language political and documentary publication accusing Khrushchev and the Soviet regime of responsibility for mass murders of Ukrainian political prisoners, presenting the issue for an international anti-communist readership.",
    uk: "Англомовне політико-документальне видання, що звинувачує Хрущова та радянський режим у відповідальності за масові вбивства українських політичних в’язнів і представляє цю тему міжнародному антикомуністичному читачеві."
  },
  iframeSrc: "https://heyzine.com/flip-book/96b48f7a5d.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "In the Whirlpool of Combat", uk: "У вирі боротьби" },
  author: "Yuriy Boretz / Юрій Борець",
  year: "1974",
  tags: { en: ["in English", "UPA", "memoirs", "combat experience"], uk: ["УПА", "спогади", "бойовий досвід"] },
  desc: {
    en: "An English-language memoir-novel by UPA veteran Yuriy Boretz, recounting the harsh realities of underground warfare, comradeship, survival, and personal endurance in the Ukrainian insurgent struggle.",
    uk: "Англомовний мемуарний роман ветерана УПА Юрія Борця, що передає суворі реалії підпільної війни, побратимство, виживання та особисту витривалість в українській повстанській боротьбі."
  },
  iframeSrc: "https://heyzine.com/flip-book/04b2764a92.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Murdered by Moscow: Petlura, Konovalets, Bandera", uk: "Убиті Москвою: Петлюра, Коновалець, Бандера" },
  author: "Ukrainian Publishers Ltd. / Українське видавництво",
  year: "1962",
  tags: { en: ["in English", "political assassination", "Ukrainian leaders", "Soviet crimes"], uk: ["політичне вбивство", "українські провідники", "радянські злочини"] },
  desc: {
    en: "A documentary-political publication presenting the assassinations of Symon Petlura, Yevhen Konovalets, and Stepan Bandera as part of Moscow’s campaign against leaders of the Ukrainian national liberation movement.",
    uk: "Документально-політичне видання, що розглядає вбивства Симона Петлюри, Євгена Коновальця та Степана Бандери як частину московської боротьби проти провідників українського національно-визвольного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/f806f9f3bf.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "One of the Fifteen Million", uk: "Один із п’ятнадцяти мільйонів" },
  author: "Nicholas Prychodko / Ніколас Приходько",
  year: "1952",
  tags: { en: ["in English", "Soviet repression", "memoirs", "survivor testimony"], uk: ["радянські репресії", "спогади", "свідчення очевидця"] },
  desc: {
    en: "A personal testimony of survival under Stalin’s regime, presenting one Ukrainian’s experience of Soviet repression as part of the wider suffering of millions under communist terror.",
    uk: "Особисте свідчення про виживання під сталінським режимом, що подає досвід одного українця як частину ширшої трагедії мільйонів жертв комуністичного терору."
  },
  iframeSrc: "https://heyzine.com/flip-book/598c064b93.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Politics of a Church Union", uk: "Політика церковної унії" },
  author: "Russel P. Moroziuk / Рассел П. Морозюк",
  year: "1983",
  tags: { en: ["in English", "Ukrainian Catholic Church", "Church history", "religious politics"], uk: ["Українська Католицька Церква", "історія Церкви", "релігійна політика"] },
  desc: {
    en: "A historical and theological study of relations between the Ukrainian Catholic Church and the Church of Rome, examining church union through the lens of ecclesiastical politics, identity, and Eastern Christian tradition.",
    uk: "Історико-богословське дослідження відносин між Українською Католицькою Церквою та Римською Церквою, що розглядає церковну унію крізь призму церковної політики, ідентичності та східнохристиянської традиції."
  },
  iframeSrc: "https://heyzine.com/flip-book/9c35af7e0b.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Prince Mazepa, Hetman of Ukraine: In Contemporary English Publications, 1687–1709", uk: "Князь Мазепа, гетьман України: у сучасних англійських публікаціях 1687–1709 років" },
  author: "Theodore Mackiw / Теодор Маків",
  year: "1967",
  tags: { en: ["in English", "Ivan Mazepa", "English sources", "Hetmanate"], uk: ["Іван Мазепа", "англійські джерела", "Гетьманщина"] },
  desc: {
    en: "A source-based historical study presenting how Hetman Ivan Mazepa was described in contemporary English publications between 1687 and 1709, offering Western perspectives on his rule, diplomacy, and role in European politics.",
    uk: "Джерелознавче історичне дослідження про те, як гетьмана Івана Мазепу описували в сучасних йому англійських публікаціях 1687–1709 років, подаючи західний погляд на його правління, дипломатію та роль у європейській політиці."
  },
  iframeSrc: "https://heyzine.com/flip-book/8ba2070a3e.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Revolutionary Voices: Ukrainian Political Prisoners Condemn Russian Colonialism", uk: "Революційні голоси: українські політичні в’язні засуджують російський колоніалізм" },
  author: "Ivan Dzyuba and other Ukrainian political prisoners / Іван Дзюба та інші українські політичні в’язні",
  year: "1969",
  tags: { en: ["in English", "political prisoners", "Russian colonialism", "dissident thought"], uk: ["політичні в’язні", "російський колоніалізм", "дисидентська думка"] },
  desc: {
    en: "An English-language collection of texts by Ukrainian political prisoners and dissident voices, exposing Russian colonial domination and defending the cultural, political, and national rights of Ukraine.",
    uk: "Англомовна збірка текстів українських політичних в’язнів і дисидентських голосів, що викриває російське колоніальне панування та захищає культурні, політичні й національні права України."
  },
  iframeSrc: "https://heyzine.com/flip-book/f88c6dd174.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Russian Unlawfulness in Ukraine: The Life of a Martyr", uk: "Російське беззаконня в Україні: життя мученика" },
  author: "Ivan Kandyba / Іван Кандиба",
  year: "1980",
  tags: { en: ["in English", "Ukrainian Helsinki Group", "political prisoner", "human rights"], uk: ["Українська Гельсінська група", "політичний в’язень", "права людини"] },
  desc: {
    en: "An English-language dissident testimony by Ivan Kandyba, a Ukrainian lawyer and political prisoner, documenting Soviet legal persecution, prison experience, and the struggle for human and national rights in Ukraine.",
    uk: "Англомовне дисидентське свідчення Івана Кандиби — українського юриста й політичного в’язня, що документує радянське правове переслідування, табірний досвід і боротьбу за людські та національні права в Україні."
  },
  iframeSrc: "https://heyzine.com/flip-book/06b009336b.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Russian World Ambitions and World Peace: Hitler’s Fatal Blunder; Britain’s Opportunity", uk: "Світові амбіції Росії та світовий мир: фатальна помилка Гітлера; можливість Британії" },
  author: "R. Ilnytzky / Р. Ільницький",
  year: "1953",
  tags: { en: ["in English", "Russian imperialism", "world peace", "anti-Soviet analysis"], uk: ["російський імперіалізм", "світовий мир", "антирадянський аналіз"] },
  desc: {
    en: "A Cold War political pamphlet analysing Russian imperial ambitions, the strategic mistakes of the Second World War, and the need for a Western policy that recognises the liberation of captive nations as essential to lasting peace.",
    uk: "Політична брошура доби холодної війни, що аналізує російські імперські амбіції, стратегічні помилки Другої світової війни та потребу західної політики, яка визнає визволення поневолених націй умовою тривалого миру."
  },
  iframeSrc: "https://heyzine.com/flip-book/c6d049c1c6.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Song Out of Darkness: Selected Poems", uk: "Пісня з темряви: вибрані поезії" },
  author: "Taras Shevchenko; trans. Vera Rich / Тарас Шевченко; пер. Віра Річ",
  year: "1961",
  tags: { en: ["in English", "Taras Shevchenko", "selected poems", "Ukrainian classic"], uk: ["Тарас Шевченко", "вибрані поезії", "українська класика"] },
  desc: {
    en: "An English-language selection of Taras Shevchenko’s poetry translated by Vera Rich, introducing his voice of national dignity, exile, social injustice, and spiritual resistance to a wider Western readership.",
    uk: "Англомовна добірка поезій Тараса Шевченка в перекладі Віри Річ, що відкриває західному читачеві його голос національної гідності, вигнання, соціальної несправедливості та духовного спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/d0272a5d6e.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Chornovil Papers", uk: "Документи Чорновола" },
  author: "compiled by Viacheslav Chornovil / упоряд. В’ячеслав Чорновіл",
  year: "1968",
  tags: { en: ["in English", "Ukrainian dissidents", "samizdat", "human rights"], uk: ["українські дисиденти", "самвидав", "права людини"] },
  desc: {
    en: "An English-language edition of Viacheslav Chornovil’s documentary collection on the persecution of Ukrainian intellectuals in the 1960s, exposing Soviet repression and giving international visibility to Ukrainian dissident resistance.",
    uk: "Англомовне видання документальної збірки В’ячеслава Чорновола про переслідування української інтелігенції у 1960-х роках, що викриває радянські репресії та надає міжнародного звучання українському дисидентському спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/7668146b52.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The First Guidebook to the USSR", uk: "Перший путівник по СРСР" },
  author: "Avraham Shifrin / Авраам Шифрін",
  year: "1980",
  tags: { en: ["in English", "Gulag", "Soviet prisons", "human rights"], uk: ["ГУЛАГ", "радянські тюрми", "права людини"] },
  desc: {
    en: "A dissident guide to the hidden geography of Soviet prisons, labour camps, psychiatric institutions, and sites of repression, written to expose the USSR not as a tourist destination but as a vast system of coercion.",
    uk: "Дисидентський путівник прихованою географією радянських тюрем, таборів, психіатричних установ і місць репресій, що показує СРСР не як туристичну країну, а як розгалужену систему примусу."
  },
  iframeSrc: "https://heyzine.com/flip-book/db05b6a977.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Gulag Archipelago", uk: "Архіпелаг ГУЛАГ" },
  author: "Alexander Solzhenitsyn / Олександр Солженіцин",
  year: "1974",
  tags: { en: ["in English", "Gulag", "Soviet repression", "testimony"], uk: ["ГУЛАГ", "радянські репресії", "свідчення"] },
  desc: {
    en: "A landmark documentary-literary work exposing the Soviet forced-labour camp system through testimony, investigation, and moral reflection, becoming one of the most influential texts on totalitarian repression in the twentieth century.",
    uk: "Знакова документально-літературна праця про радянську систему примусово-трудових таборів, що поєднує свідчення, розслідування й моральне осмислення та стала одним із найвпливовіших текстів про тоталітарні репресії ХХ століття."
  },
  iframeSrc: "https://heyzine.com/flip-book/cc23a8a8e2.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Hunters and the Hunted", uk: "Мисливці і переслідувані" },
  author: "Ivan Bahriany / Іван Багряний",
  year: "1954",
  tags: { en: ["in English", "Tiger Trappers", "adventure novel", "Soviet persecution"], uk: ["Тигролови", "пригодницький роман", "радянське переслідування"] },
  desc: {
    en: "The English translation of Ivan Bahriany’s adventure novel Tiger Trappers, following a Ukrainian political fugitive through the taiga and turning a survival story into a powerful literary statement against Soviet persecution.",
    uk: "Англомовний переклад пригодницького роману Івана Багряного «Тигролови», у якому втеча українського політичного переслідуваного крізь тайгу перетворюється на сильне літературне свідчення проти радянського насильства."
  },
  iframeSrc: "https://heyzine.com/flip-book/e2b7aaf484.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Radiant Cross: A Novel of the Ukrainian Struggle for Peace and Freedom", uk: "Сяючий хрест: роман про українську боротьбу за мир і свободу" },
  author: "Herbert Hirschfeld / Герберт Гіршфельд",
  year: "1963",
  tags: { en: ["in English", "Ukrainian struggle", "historical novel", "freedom"], uk: ["українська боротьба", "історичний роман", "свобода"] },
  desc: {
    en: "An English-language novel presenting Ukraine’s struggle for peace and freedom through a dramatic narrative of occupation, political violence, faith, and human endurance in the shadow of twentieth-century conflict.",
    uk: "Англомовний роман про українську боротьбу за мир і свободу, що через драматичний сюжет окупації, політичного насильства, віри та людської витривалості відтворює досвід України в тіні конфліктів ХХ століття."
  },
  iframeSrc: "https://heyzine.com/flip-book/ef9954807b.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Shame of the Twentieth Century: Bolshevist Methods of Combatting the Ukrainian National Liberation Movement", uk: "Ганьба двадцятого століття: більшовицькі методи боротьби з українським національно-визвольним рухом" },
  author: "Ukrainian Information Service / Українська інформаційна служба",
  year: "1962",
  tags: { en: ["in English", "documentary report", "Soviet repression", "liberation movement"], uk: ["документальний звіт", "радянські репресії", "визвольний рух"] },
  desc: {
    en: "A documentary report exposing Bolshevik methods used against the Ukrainian national liberation movement, presenting evidence of repression, violence, and political persecution for an international readership.",
    uk: "Документальний звіт про більшовицькі методи боротьби проти українського національно-визвольного руху, що подає міжнародному читачеві свідчення репресій, насильства та політичного переслідування."
  },
  iframeSrc: "https://heyzine.com/flip-book/6f7d3a357d.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Ukrainian Holocaust of 1933", uk: "Український Голокост 1933 року" },
  author: "Wasyl Hryshko; ed. and trans. Marco Carynnyk / Василь Гришко; ред. і пер. Марко Царинник",
  year: "1983",
  tags: { en: ["in English", "Holodomor", "survivor testimony", "Soviet crimes"], uk: ["Голодомор", "свідчення очевидців", "радянські злочини"] },
  desc: {
    en: "An English-language account of the 1932–1933 famine in Ukraine, combining survivor testimony and historical analysis to present the Holodomor as a deliberate Soviet crime against the Ukrainian people.",
    uk: "Англомовна праця про голод 1932–1933 років в Україні, що поєднує свідчення очевидців та історичний аналіз і подає Голодомор як свідомий радянський злочин проти українського народу."
  },
  iframeSrc: "https://heyzine.com/flip-book/27382b79f8.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The Ukrainian Nationalist Movement in the U.S.S.R. since 1956", uk: "Український націоналістичний рух в СРСР після 1956 року" },
  author: "J. Birch / Дж. Бірч",
  year: "1971",
  tags: { en: ["in English", "Ukrainian nationalism", "Soviet Ukraine", "dissident movement"], uk: ["український націоналізм", "радянська Україна", "дисидентський рух"] },
  desc: {
    en: "A concise English-language study of Ukrainian nationalist and dissident activity in the USSR after 1956, examining how national opposition continued under post-Stalin Soviet rule.",
    uk: "Стислий англомовний огляд української націоналістичної та дисидентської активності в СРСР після 1956 року, що показує тяглість національного спротиву в післясталінську добу."
  },
  iframeSrc: "https://heyzine.com/flip-book/39d0a9ba1a.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Ukrainian Nationalism", uk: "Український націоналізм" },
  author: "John A. Armstrong / Джон А. Армстронґ",
  year: "1980",
  tags: { en: ["in English", "Ukrainian nationalism", "OUN", "World War II"], uk: ["український націоналізм", "ОУН", "Друга світова війна"] },
  desc: {
    en: "A major English-language scholarly study of Ukrainian nationalism, especially during the Second World War, analysing the ideology, organisation, political strategy, and historical role of the nationalist movement.",
    uk: "Важливе англомовне наукове дослідження українського націоналізму, особливо доби Другої світової війни, що аналізує ідеологію, організацію, політичну стратегію та історичну роль націоналістичного руху."
  },
  iframeSrc: "https://heyzine.com/flip-book/ac869df624.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Ukrainian Political Prisoners in the Soviet Union: A Biographical List", uk: "Українські політичні в’язні в Радянському Союзі: біографічний список" },
  author: "Ukrainian Central Information Service; Valentyn Moroz / Українська центральна інформаційна служба; Валентин Мороз",
  year: "1979",
  tags: { en: ["in English", "political prisoners", "Soviet repression", "human rights"], uk: ["політичні в’язні", "радянські репресії", "права людини"] },
  desc: {
    en: "An English-language biographical list documenting Ukrainian political prisoners in the Soviet Union, created to inform the West about Soviet repression, dissident persecution, and the human rights struggle in Ukraine.",
    uk: "Англомовний біографічний список українських політичних в’язнів у Радянському Союзі, створений для інформування Заходу про радянські репресії, переслідування дисидентів і боротьбу за права людини в Україні."
  },
  iframeSrc: "https://heyzine.com/flip-book/0703d98f9b.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Ukrainian Woman in the Modern Age", uk: "Українська жінка в модерну добу" },
  author: "Association of Ukrainian Women in Great Britain; ed. L. Povroznyk / Об’єднання українських жінок у Великій Британії; ред. Л. Поврозник",
  year: "1963",
  tags: { en: ["in English", "Ukrainian women", "diaspora", "women’s movement"], uk: ["українські жінки", "діаспора", "жіночий рух"] },
  desc: {
    en: "An English-language publication by the Association of Ukrainian Women in Great Britain, presenting the role, identity, public work, and cultural mission of Ukrainian women in the modern world and diaspora life.",
    uk: "Англомовне видання Об’єднання українських жінок у Великій Британії, що висвітлює роль, ідентичність, громадську працю та культурну місію української жінки в модерному світі й діаспорному житті."
  },
  iframeSrc: "https://heyzine.com/flip-book/9af513d1be.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "The USSR Unmasked: A Collection of Articles and Essays on Soviet Russian Repression in Ukraine", uk: "СРСР без маски: збірка статей і есеїв про совєтсько-російські репресії в Україні" },
  author: "Osyp Diakiv-Hornovy / Осип Дяків-Горновий",
  year: "1975",
  tags: { en: ["in English", "Soviet repression", "OUN", "anti-Soviet essays"], uk: ["радянські репресії", "ОУН", "антирадянська публіцистика"] },
  desc: {
    en: "An English-language collection of articles and essays by Osyp Diakiv-Hornovy exposing Soviet Russian repression in Ukraine and presenting the ideological, political, and moral case against the USSR.",
    uk: "Англомовна збірка статей та есеїв Осипа Дяківа-Горнового, що викриває совєтсько-російські репресії в Україні й подає ідеологічний, політичний та моральний аргумент проти СРСР."
  },
  iframeSrc: "https://heyzine.com/flip-book/98c7d27f24.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Treasures of Our Memory", uk: "Скарби нашої пам’яті" },
  author: "compiled by Mykhailo Sikorskyi, Larysa Tynna; photos by Stanislav Kriachko / упоряд. Михайло Сікорський, Лариса Тинна; фото Станіслав Крячко",
  year: "1993",
  tags: { en: ["photo album", "cultural heritage", "historical memory"], uk: ["фотоальбом", "культурна спадщина", "історична пам’ять"] },
  desc: {
    en: "A bilingual Ukrainian-English photo album presenting monuments, artefacts, landscapes, and cultural treasures of Ukraine as a visual journey through national memory and historical heritage.",
    uk: "Двомовний українсько-англійський фотоальбом, що представляє пам’ятки, артефакти, краєвиди та культурні скарби України як візуальну мандрівку національною пам’яттю й історичною спадщиною."
  },
  iframeSrc: "https://heyzine.com/flip-book/cd94bdb921.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Ukraine and Ukrainians", uk: "Україна та українці" },
  author: "ed. Peter Kardash; ed. Brett Lockwood; foreword by Jaroslav Rudnyckyj / ред. Петро Кардаш; ред. Бретт Локвуд; передмова Ярослава Рудницького",
  year: "1988",
  tags: { en: ["in English", "Ukraine", "illustrated history", "cultural heritage"], uk: ["Україна", "ілюстрована історія", "культурна спадщина"] },
  desc: {
    en: "A richly illustrated English-language overview of Ukraine and Ukrainians, combining accessible historical, cultural, biographical, and visual material to introduce Ukrainian heritage to an international readership.",
    uk: "Багато ілюстрований англомовний огляд України та українців, що поєднує доступні історичні, культурні, біографічні й візуальні матеріали для представлення української спадщини міжнародному читачеві."
  },
  iframeSrc: "https://heyzine.com/flip-book/8da51a3980.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "A Journey Through the Lands of Pidhaitsi: Photo Album", uk: "Мандрівка землями Підгаєччини: фотоальбом" },
  author: "materials collected and edited by Vasyl Papizh; editorial board incl. Taras Hunchak, Ivan Kernytskyi et al. / матеріали зібрав і опрацював Василь Папіж; редкол. Тарас Гунчак, Іван Керницький та ін.",
  year: "1980",
  tags: { en: ["Pidhaitsi region", "photo album", "local history"], uk: ["Підгаєччина", "фотоальбом", "краєзнавство"] },
  desc: {
    en: "A diaspora photo album preserving the historical, cultural, and communal memory of the Pidhaitsi region through photographs, local testimony, and materials gathered from Ukrainian communities across the world.",
    uk: "Діаспорний фотоальбом, що зберігає історичну, культурну й громадську пам’ять Підгаєччини через світлини, локальні свідчення та матеріали, зібрані серед українських громад у різних країнах."
  },
  iframeSrc: "https://heyzine.com/flip-book/a433493b73.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Kobzar", uk: "Кобзар" },
  author: "Taras Shevchenko / Тарас Шевченко",
  year: "1943",
  tags: { en: ["Taras Shevchenko", "selected poems", "Ukrainian classic"], uk: ["Тарас Шевченко", "вибрані поезії", "українська класика"] },
  desc: {
    en: "A wartime edition of selected poems from Taras Shevchenko’s Kobzar, presenting his poetry as a voice of national dignity, freedom, social justice, and Ukrainian spiritual resistance.",
    uk: "Воєнне видання вибраних поезій із «Кобзаря» Тараса Шевченка, що представляє його творчість як голос національної гідності, свободи, соціальної справедливості та українського духовного спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/51dd605364.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Their Land: An Anthology of Ukrainian Short Stories", uk: "Їхня земля: антологія українських оповідань" },
  author: "ed. Michael Luchkovich / ред. Майкл Лучкович",
  year: "1964",
  tags: { en: ["in English", "Ukrainian short stories", "anthology", "literary translation"], uk: ["українські оповідання", "антологія", "літературний переклад"] },
  desc: {
    en: "An English-language anthology of Ukrainian short stories edited by Michael Luchkovich, introducing Ukrainian prose, rural life, social experience, and national literary tradition to readers outside Ukraine.",
    uk: "Англомовна антологія українських оповідань за редакцією Майкла Лучковича, що знайомить іноземного читача з українською прозою, сільським життям, суспільним досвідом і національною літературною традицією."
  },
  iframeSrc: "https://heyzine.com/flip-book/dc8d02712c.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "Religion in Communist Lands", uk: "Релігія в комуністичних країнах" },
  author: "ed. Paul Booth / ред. Пол Бут",
  year: "1986",
  tags: { en: ["in English", "religion", "communist regimes", "human rights"], uk: ["релігія", "комуністичні режими", "права людини"] },
  desc: {
    en: "An English-language periodical issue devoted to religious life under communist rule, documenting persecution, church-state relations, and the struggle for freedom of conscience in Eastern Europe and the Soviet sphere.",
    uk: "Англомовний випуск періодичного видання про релігійне життя під комуністичною владою, що документує переслідування, церковно-державні відносини та боротьбу за свободу совісті у Східній Європі й радянській сфері."
  },
  iframeSrc: "https://heyzine.com/flip-book/1cdf6ed90f.html"
});
// 3) Shelf 4 -> library[3]
library[3].books.push({
  title: { en: "A Ukrainian Canadian in Parliament: Memoirs of Michael Luchkovich", uk: "Український канадець у парламенті: спогади Майкла Лучковича" },
  author: "Michael Luchkovich / Майкл Лучкович",
  year: "1965",
  tags: { en: ["in English", "Ukrainian Canadians", "parliament", "memoirs"], uk: ["українці Канади", "парламент", "спогади"] },
  desc: {
    en: "The memoirs of Michael Luchkovich, the first Ukrainian Canadian elected to the Parliament of Canada, reflecting on public service, multiculturalism, minority rights, and Ukrainian community life in Canada.",
    uk: "Спогади Майкла Лучковича — першого українця канадського походження, обраного до парламенту Канади, що висвітлюють громадську службу, мультикультуралізм, права меншин і життя української громади в Канаді."
  },
  iframeSrc: "https://heyzine.com/flip-book/78bef0dedb.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "History’s Carnival: A Dissident’s Autobiography", uk: "Карнавал історії: автобіографія дисидента" },
  author: "Leonid Plyushch / Леонід Плющ",
  year: "1979",
  tags: { en: ["in English", "Soviet dissidents", "psychiatric repression", "autobiography"], uk: ["радянські дисиденти", "психіатричні репресії", "автобіографія"] },
  desc: {
    en: "An English-language autobiography by Ukrainian mathematician and Soviet dissident Leonid Plyushch, recounting his political awakening, arrest, imprisonment in a psychiatric hospital, and resistance to Soviet ideological control.",
    uk: "Англомовна автобіографія українського математика й радянського дисидента Леоніда Плюща, що описує його політичне пробудження, арешт, ув’язнення в психіатричній лікарні та спротив радянському ідеологічному контролю."
  },
  iframeSrc: "https://heyzine.com/flip-book/3649a6eb77.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Russian Oppression in Ukraine: Reports and Documents", uk: "Російське гноблення в Україні: звіти і документи" },
  author: "compiled by the Ukrainian Information Service in London / упоряд. Українська інформаційна служба в Лондоні",
  year: "1962",
  tags: { en: ["in English", "Soviet repression", "reports and documents", "Russian imperialism"], uk: ["радянські репресії", "звіти і документи", "російський імперіалізм"] },
  desc: {
    en: "A large English-language documentary collection compiled in London, presenting reports and documents on Russian and Soviet oppression in Ukraine for an international anti-communist and human rights readership.",
    uk: "Велика англомовна документальна збірка, укладена в Лондоні, що подає звіти й документи про російське та радянське гноблення в Україні для міжнародної антикомуністичної та правозахисної аудиторії."
  },
  iframeSrc: "https://heyzine.com/flip-book/13c97b2997.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Why Is One Holocaust Worth More Than Others?", uk: "Чому один Голокост вартий більше, ніж інші?" },
  author: "Yurij Chumatskyj / Юрій Чумацький",
  year: "1986",
  tags: { en: ["in English", "Holodomor", "genocide memory", "historical polemic"], uk: ["Голодомор", "пам’ять про геноцид", "історична полеміка"] },
  desc: {
    en: "An English-language polemical study arguing for wider recognition of the Ukrainian famine-genocide and challenging the unequal treatment of different mass atrocities in public memory and international politics.",
    uk: "Англомовна полемічна праця, що обстоює ширше визнання українського голоду-геноциду й критикує нерівне ставлення до різних масових злочинів у публічній пам’яті та міжнародній політиці."
  },
  iframeSrc: "https://heyzine.com/flip-book/060deac2cf.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Holodomor: Ukrainian Genocide in the Early 1930s", uk: "Голодомор: український геноцид на початку 1930-х років" },
  author: "prepared by Anna Alekseyenko et al. / підгот. Анна Алексєєнко та ін.",
  year: "2005",
  tags: { en: ["in English", "Holodomor", "Ukrainian genocide", "educational publication"], uk: ["Голодомор", "український геноцид", "освітнє видання"] },
  desc: {
    en: "An English-language educational publication on the Holodomor, presenting the famine of the early 1930s as genocide against Ukrainians through historical explanation, documentation, and memory-focused material.",
    uk: "Англомовне освітнє видання про Голодомор, що подає голод початку 1930-х років як геноцид проти українців через історичне пояснення, документи та матеріали, зосереджені на пам’яті."
  },
  iframeSrc: "https://heyzine.com/flip-book/e20a43b284.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Ukrainian Liberation Movement in Modern Times", uk: "Український визвольний рух у новітню добу" },
  author: "Oleh Martovych / Олег Мартович",
  year: "1962",
  tags: { en: ["in English", "liberation movement", "OUN", "modern Ukrainian history"], uk: ["визвольний рух", "ОУН", "новітня історія України"] },
  desc: {
    en: "An English-language historical and political overview of the Ukrainian liberation movement in the modern era, explaining its ideological foundations, struggle against foreign domination, and role in the fight for Ukrainian independence.",
    uk: "Англомовний історико-політичний огляд українського визвольного руху новітньої доби, що пояснює його ідейні засади, боротьбу проти чужого панування та роль у змаганні за незалежність України."
  },
  iframeSrc: "https://heyzine.com/flip-book/bc826cc481.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "The Stalin Famine: Ukraine in the Year 1933", uk: "Сталінський голод: Україна в 1933 році" },
  author: "Fedir Pigido-Pravoberezhny / Федір Пігідо-Правобережний",
  year: "1953",
  tags: { en: ["in English", "Holodomor", "eyewitness testimony", "Stalinism"], uk: ["Голодомор", "свідчення очевидця", "сталінізм"] },
  desc: {
    en: "An early English-language account of the 1933 famine in Ukraine by Fedir Pigido-Pravoberezhny, presenting eyewitness testimony and analysis of Stalinist policy, terror, and mass starvation.",
    uk: "Одна з ранніх англомовних праць про голод 1933 року в Україні, у якій Федір Пігідо-Правобережний подає свідчення очевидця та аналіз сталінської політики, терору й масового голоду."
  },
  iframeSrc: "https://heyzine.com/flip-book/b739af88c2.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Russia: The Suburb of Hell: From Ivan Kalita to Khrushchev Nikita", uk: "Росія: передмістя пекла — від Івана Калити до Микити Хрущова" },
  author: "Wiktor Ostrowski / Віктор Островський",
  year: "1961",
  tags: { en: ["in English", "Russian imperialism", "anti-Soviet pamphlet", "Belarusian diaspora"], uk: ["російський імперіалізм", "антирадянська брошура", "білоруська діаспора"] },
  desc: {
    en: "An English-language anti-Soviet pamphlet by Belarusian émigré Wiktor Ostrowski, presenting a polemical history of Russian imperial domination from Muscovy to Khrushchev’s Soviet Union.",
    uk: "Англомовна антирадянська брошура білоруського еміграційного діяча Віктора Островського, що подає полемічну історію російського імперського панування від Московії до СРСР часів Хрущова."
  },
  iframeSrc: "https://heyzine.com/flip-book/3386201ef5.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Truth on the March", uk: "Правда в поході" },
  author: "Canadian League for Ukraine’s Liberation / Ліга визволення України в Канаді",
  year: "1953",
  tags: { en: ["in English", "Ukrainian diaspora", "anti-Bolshevik movement", "political pamphlet"], uk: ["українська діаспора", "антибільшовицький рух", "політична брошура"] },
  desc: {
    en: "An English-language political pamphlet associated with the Canadian League for Ukraine’s Liberation, promoting the cause of Ukrainian independence, anti-Bolshevik resistance, and the international struggle of captive nations.",
    uk: "Англомовна політична брошура, пов’язана з Лігою визволення України в Канаді, що популяризує справу української незалежності, антибільшовицький спротив і міжнародну боротьбу поневолених націй."
  },
  iframeSrc: "https://heyzine.com/flip-book/161fab27f5.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Without Tears", uk: "Без сліз" },
  author: "Oleksander De / Олександер Де",
  year: "1966",
  tags: { en: ["in English", "diaspora literature", "poetry", "émigré writing"], uk: ["діаспорна література", "поезія", "еміграційне письмо"] },
  desc: {
    en: "A poetry collection by Ukrainian émigré writer Oleksander De, reflecting the lyrical, romantic, and exile-shaped sensibility of post-war Ukrainian literary life in Great Britain.",
    uk: "Поетична збірка українського еміграційного письменника Олександера Де, що відображає ліричну, романтичну й вигнанську чутливість повоєнного українського літературного життя у Великій Британії."
  },
  iframeSrc: "https://heyzine.com/flip-book/fb7f942dc9.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "The Faces of Culture", uk: "Обличчя культури" },
  author: "Stepan Hoverla / Степан Говерля",
  year: "1984",
  tags: { en: ["in English", "Ukrainian culture", "dissident essays", "political lectures"], uk: ["українська культура", "дисидентська публіцистика", "політичні лекції"] },
  desc: {
    en: "An English-language dissident work on Ukrainian culture, written under the pseudonym Stepan Hoverla, exploring culture as a field of national survival, moral resistance, and political self-definition under Soviet domination.",
    uk: "Англомовна дисидентська праця про українську культуру, написана під псевдонімом Степан Говерля, що розглядає культуру як простір національного виживання, морального спротиву й політичного самовизначення під радянським пануванням."
  },
  iframeSrc: "https://heyzine.com/flip-book/e4117f0309.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Ukraine and the Ukrainians: A Collection of Selected Articles", uk: "Україна та українці: збірка вибраних статей" },
  author: "ed. I. Dmytriw and J. Wasyluk; technical arrangement by I. S. Hawryliw / ред. І. Дмитрів і Дж. Василюк; техн. оформлення І. С. Гаврилів",
  year: "1982",
  tags: { en: ["in English", "Ukraine", "selected articles", "diaspora publication"], uk: ["Україна", "вибрані статті", "діаспорне видання"] },
  desc: {
    en: "An English-language collection of selected articles published by the Association of Ukrainians in Great Britain, introducing Ukraine’s history, culture, political situation, and diaspora perspective to a wider readership.",
    uk: "Англомовна збірка вибраних статей, видана Союзом українців у Великій Британії, що знайомить ширшого читача з історією, культурою, політичним становищем України та поглядом діаспори."
  },
  iframeSrc: "https://heyzine.com/flip-book/139757087a.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Ukrainian Herald: Issue IV", uk: "Український вісник: випуск IV" },
  author: "Ukrainskyi Visnyk; footnotes by Nicholas G. Bohatiuk / Український вісник; примітки Ніколаса Ґ. Богатюка",
  year: "1972",
  tags: { en: ["in English", "samizdat", "Ukrainian dissidents", "human rights"], uk: ["самвидав", "українські дисиденти", "права людини"] },
  desc: {
    en: "An English translation of the fourth issue of the underground Ukrainian Herald, documenting Soviet repression, Russification, political prisoners, and the human rights struggle in Ukraine during the early 1970s.",
    uk: "Англомовний переклад четвертого випуску підпільного «Українського вісника», що документує радянські репресії, русифікацію, політичних в’язнів і боротьбу за права людини в Україні початку 1970-х років."
  },
  iframeSrc: "https://heyzine.com/flip-book/f3a6f6de9d.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Spirit of Ukraine: Ukrainian Contributions to World’s Culture", uk: "Дух України: український внесок у світову культуру" },
  author: "D. Snowyd [Dmytro Dontsov]; final revision and translation by Vladimir Semenyna / Д. Сновід [Дмитро Донцов]; остаточна редакція і переклад Володимира Семенини",
  year: "1935",
  tags: { en: ["in English", "Ukrainian culture", "world culture", "national identity"], uk: ["українська культура", "світова культура", "національна ідентичність"] },
  desc: {
    en: "An early English-language cultural survey presenting Ukraine’s contribution to world civilisation through history, literature, art, music, political thought, and the broader spiritual identity of the Ukrainian people.",
    uk: "Ранній англомовний культурологічний огляд, що представляє внесок України у світову цивілізацію через історію, літературу, мистецтво, музику, політичну думку та ширшу духовну ідентичність українського народу."
  },
  iframeSrc: "https://heyzine.com/flip-book/cf05ea79ea.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "The Ukrainian Division “Galicia,” 1943–45: A Memoir", uk: "Українська дивізія «Галичина», 1943–45: спогади" },
  author: "Wolf-Dietrich Heike; ed. Yury Boshyk; intro. John A. Armstrong / Вольф-Дітріх Гайке; ред. Юрій Бошик; вступ Джона А. Армстронґа",
  year: "1988",
  tags: { en: ["in English", "Division Galicia", "World War II", "military memoirs"], uk: ["дивізія Галичина", "Друга світова війна", "військові спогади"] },
  desc: {
    en: "A memoir by Wolf-Dietrich Heike, former chief of staff of the Ukrainian Division “Galicia,” describing the division’s formation, wartime operations, internal structure, and controversial place in Second World War history.",
    uk: "Спогади Вольфа-Дітріха Гайке, колишнього начальника штабу Української дивізії «Галичина», про її формування, бойовий шлях, внутрішню структуру та суперечливе місце в історії Другої світової війни."
  },
  iframeSrc: "https://heyzine.com/flip-book/8de8f308d0.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Grains of Truth: A Collection of UK Materials on the Holodomor in Ukraine, 1932–33", uk: "Зерна правди: збірка британських матеріалів про Голодомор в Україні 1932–33 років" },
  author: "ed. Fedir Kurlak and Iryna Terlecky / ред. Федір Курляк та Ірина Терлецька",
  year: "2018",
  tags: { en: ["in English", "Holodomor", "UK materials", "historical documents"], uk: ["Голодомор", "британські матеріали", "історичні документи"] },
  desc: {
    en: "A collection of UK-based materials on the Holodomor, bringing together documents, testimonies, public records, and commemorative resources related to the famine-genocide in Ukraine in 1932–1933.",
    uk: "Збірка британських матеріалів про Голодомор, що поєднує документи, свідчення, публічні записи та меморіальні ресурси, пов’язані з голодом-геноцидом в Україні 1932–1933 років."
  },
  iframeSrc: "https://heyzine.com/flip-book/3a6bbb6688.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "The Real Face of Russia: Essays and Articles", uk: "Справжнє обличчя Росії: есеї та статті" },
  author: "Dmytro Donzow and others; ed. V. Bohdaniuk / Дмитро Донцов та ін.; ред. В. Богданюк",
  year: "1967",
  tags: { en: ["in English", "Russia", "imperialism", "political essays"], uk: ["Росія", "імперіалізм", "політичні есеї"] },
  desc: {
    en: "An English-language collection of essays and articles exposing Russian imperial ideology, Soviet power, and Moscow’s domination over captive nations, with Dmytro Donzow among the central contributors.",
    uk: "Англомовна збірка есеїв і статей, що викриває російську імперську ідеологію, радянську владу та московське панування над поневоленими націями, з Дмитром Донцовим серед ключових авторів."
  },
  iframeSrc: "https://heyzine.com/flip-book/d1a62e8bf2.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "The Muse in Prison: Eleven Sketches of Ukrainian Poets Killed by Communists and Twenty-Two Translations of Their Poems", uk: "Муза у в’язниці: одинадцять нарисів про українських поетів, убитих комуністами, і двадцять два переклади їхніх віршів" },
  author: "Yar Slavutych; foreword by Clarence A. Manning / Яр Славутич; передмова Кларенса А. Меннінґа",
  year: "1956",
  tags: { en: ["in English", "Executed Renaissance", "Ukrainian poets", "literary repression"], uk: ["Розстріляне відродження", "українські поети", "літературні репресії"] },
  desc: {
    en: "An English-language literary memorial to Ukrainian poets killed by the communist regime, combining biographical sketches with translations of their poems to preserve the voices of the repressed generation.",
    uk: "Англомовний літературний меморіал українським поетам, убитим комуністичним режимом, що поєднує біографічні нариси з перекладами їхніх віршів і зберігає голоси репресованого покоління."
  },
  iframeSrc: "https://heyzine.com/flip-book/804cf8a649.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Oasis: Selected Poems", uk: "Оаза: вибрані поезії" },
  author: "Yar Slavutych; trans. Morse Manly in cooperation with the author / Яр Славутич; пер. Морса Менлі у співпраці з автором",
  year: "1959",
  tags: { en: ["in English", "selected poems", "Ukrainian diaspora poetry", "literary translation"], uk: ["вибрані поезії", "українська діаспорна поезія", "літературний переклад"] },
  desc: {
    en: "An English-language selection of poems by Yar Slavutych, translated with the author’s cooperation, presenting his lyrical, historical, and exile-shaped voice to readers beyond the Ukrainian-language literary world.",
    uk: "Англомовна добірка поезій Яра Славутича, перекладена у співпраці з автором, що представляє його ліричний, історичний і вигнанський голос читачам поза українськомовним літературним світом."
  },
  iframeSrc: "https://heyzine.com/flip-book/b82792768d.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Promise & Reality: 50 Years of Soviet-Russian “Achievements”", uk: "Обіцянка і реальність: 50 років совєтсько-російських «досягнень»" },
  author: "Suzanne Labin; ed. John Graham / Сюзанна Лабен; ред. Джон Ґрем",
  year: "1967",
  tags: { en: ["in English", "Soviet propaganda", "anti-communism", "Cold War"], uk: ["совєтська пропаганда", "антикомунізм", "холодна війна"] },
  desc: {
    en: "A concise English-language anti-communist pamphlet contrasting Soviet promises with the political, economic, and human reality of fifty years of Soviet Russian rule.",
    uk: "Стисла англомовна антикомуністична брошура, що протиставляє радянські обіцянки політичній, економічній і людській реальності п’ятдесяти років совєтсько-російського панування."
  },
  iframeSrc: "https://heyzine.com/flip-book/834e2b8da6.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Solzhenitsyn", uk: "Солженіцин" },
  author: "David Burg / Девід Берґ",
  year: "1970",
  tags: { en: ["in English", "Solzhenitsyn", "Soviet literature", "dissident writer"], uk: ["Солженіцин", "радянська література", "письменник-дисидент"] },
  desc: {
    en: "An English-language study of Aleksandr Solzhenitsyn’s literary and dissident significance, presenting his work as a moral challenge to Soviet censorship, repression, and ideological control.",
    uk: "Англомовна праця про літературне й дисидентське значення Олександра Солженіцина, що подає його творчість як моральний виклик радянській цензурі, репресіям та ідеологічному контролю."
  },
  iframeSrc: "https://heyzine.com/flip-book/d7aff61828.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Kholodnyi Yar", uk: "Холодний Яр" },
  author: "Yurii Horlis-Horskyi / Юрій Горліс-Горський",
  year: "1961",
  tags: { en: ["Kholodnyi Yar", "Ukrainian Revolution", "historical documentary novel"], uk: ["Холодний Яр", "Українська революція", "історико-документальний роман"] },
  desc: {
    en: "A historical-documentary novel about the Kholodnyi Yar Republic and the Ukrainian insurgent struggle of 1918–1922, written by a participant and later turned into one of the key literary symbols of anti-imperial resistance.",
    uk: "Історико-документальний роман про Холодноярську Республіку та українську повстанську боротьбу 1918–1922 років, написаний учасником подій і згодом перетворений на один із ключових літературних символів антиімперського спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/7abb85b8b9.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "The Thorny Crown of Ukraine: An Open Letter to Russia Past, Present, and Future", uk: "Терновий вінець України: Росії минулій, сучасній, грядущій — відкрите послання" },
  author: "Oles Berdnyk / Олесь Бердник",
  year: "1985",
  tags: { en: ["Ukrainian dissidents", "open letter", "Russia and Ukraine"], uk: ["українські дисиденти", "відкритий лист", "Росія й Україна"] },
  desc: {
    en: "A dissident open letter by Oles Berdnyk addressed to Russia across past, present, and future, reflecting on Ukraine’s historical suffering, spiritual mission, and moral demand for freedom.",
    uk: "Дисидентське відкрите послання Олеся Бердника до Росії минулої, сучасної й майбутньої, у якому осмислено історичні страждання України, її духовну місію та моральну вимогу свободи."
  },
  iframeSrc: "https://heyzine.com/flip-book/eb0b4dae3b.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Winter in the Bunker: A Memoir-Chronicle, 1947–1948", uk: "Зимою в бункрі: спогади-хроніка 1947–1948" },
  author: "Stepan Khrin [Stepan Stebelskyi] / Степан Хрін [Степан Стебельський]",
  year: "1950",
  tags: { en: ["UPA", "memoir-chronicle", "underground life"], uk: ["УПА", "спогади-хроніка", "підпільне життя"] },
  desc: {
    en: "A memoir-chronicle by UPA commander Stepan Khrin, written from the underground world of bunkers and raids, documenting the daily life, discipline, hardship, and communications of the Ukrainian insurgency in 1947–1948.",
    uk: "Спогади-хроніка командира УПА Степана Хріна, написані з підпільного світу бункерів і рейдів, що документують побут, дисципліну, труднощі та зв’язок українського повстанського руху 1947–1948 років."
  },
  iframeSrc: "https://heyzine.com/flip-book/198f601600.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Memoirs of a Front-Line Soldier: The Odyssey of a Grey “Collaborator”", uk: "Спогади фронтовика: одісея сірого «коляборанта»" },
  author: "Yevstakhii Zahachevskyi / Євстахій Загачевський",
  year: "1952",
  tags: { en: ["military memoirs", "World War II", "Ukrainian Division"], uk: ["військові спогади", "Друга світова війна", "Українська дивізія"] },
  desc: {
    en: "A wartime memoir by Yevstakhii Zahachevskyi, reflecting on the morally complex experience of a Ukrainian front-line soldier during the Second World War and the difficult post-war fate of former servicemen.",
    uk: "Воєнні спогади Євстахія Загачевського про морально складний досвід українського фронтовика часів Другої світової війни та непросту повоєнну долю колишніх вояків."
  },
  iframeSrc: "https://heyzine.com/flip-book/866e772781.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Insurgent Sketches", uk: "Повстанські нариси" },
  author: "Yevhen Dmytryk [pseud.] / Євген Дмитрик [псевд.]",
  year: "1951",
  tags: { en: ["UPA", "insurgent prose", "underground struggle"], uk: ["УПА", "повстанська проза", "підпільна боротьба"] },
  desc: {
    en: "A collection of insurgent prose sketches from the Ukrainian underground, portraying the lives, choices, danger, and moral atmosphere of people involved in the anti-Soviet resistance.",
    uk: "Збірка повстанських прозових нарисів з українського підпілля, що змальовує життя, вибір, небезпеку й моральну атмосферу людей, залучених до антирадянського спротиву."
  },
  iframeSrc: "https://heyzine.com/flip-book/b9d95de38c.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Native Right", uk: "Родиме право" },
  author: "Yulian Tarnovych / Юліан Тарнович",
  year: "1951",
  tags: { en: ["Lemko literature", "diaspora prose", "national identity"], uk: ["лемківська література", "діаспорна проза", "національна ідентичність"] },
  desc: {
    en: "A diaspora literary work by Lemko writer and public figure Yulian Tarnovych, centred on native rights, belonging, historical memory, and the defence of Ukrainian identity in exile.",
    uk: "Діаспорний літературний твір лемківського письменника й громадського діяча Юліана Тарновича про родиме право, належність, історичну пам’ять і захист української ідентичності на чужині."
  },
  iframeSrc: "https://heyzine.com/flip-book/fc13610c4c.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "From the Volhynian and Polissian Raids of the UPA: From the Actions of UPA-North, 1943–1944", uk: "З волинських і поліських рейдів УПА: із дій УПА-Північ 1943–1944" },
  author: "Mykola Hordiienko / Микола Гордієнко",
  year: "1959",
  tags: { en: ["UPA-North", "Volhynia and Polissia", "military memoirs"], uk: ["УПА-Північ", "Волинь і Полісся", "військові спогади"] },
  desc: {
    en: "A memoir-based account of UPA-North operations in Volhynia and Polissia during 1943–1944, preserving first-hand material on raids, local conditions, and insurgent warfare.",
    uk: "Мемуарний опис дій УПА-Північ на Волині й Поліссі у 1943–1944 роках, що зберігає безпосередній матеріал про рейди, місцеві умови та повстанську війну."
  },
  iframeSrc: "https://heyzine.com/flip-book/d9872cb9e0.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "I Want to Live: Scenes from German Concentration Camps", uk: "Хочу жити: образки з німецьких концентраційних таборів" },
  author: "Oleksa Danskyi [Danylo Chaikovskyi] / Олекса Данський [Данило Чайковський]",
  year: "1946",
  tags: { en: ["Nazi concentration camps", "survivor testimony", "memoirs"], uk: ["нацистські концтабори", "свідчення очевидця", "спогади"] },
  desc: {
    en: "An autobiographical testimony written soon after liberation, depicting German prisons and concentration camps through vivid scenes of camp life, human endurance, cruelty, and the will to survive.",
    uk: "Автобіографічне свідчення, написане невдовзі після визволення, що через живі образки німецьких в’язниць і концтаборів показує табірний побут, людську витривалість, жорстокість і волю до життя."
  },
  iframeSrc: "https://heyzine.com/flip-book/f927ff22d9.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "Poetry from Behind Barbed Wire: The Word of Ukrainian Poets Repressed by Moscow", uk: "Поезія з-за колючих дротів: слово репресованих Москвою українських поетів" },
  author: "repressed Ukrainian poets / репресовані Москвою українські поети",
  year: "1978",
  tags: { en: ["repressed poets", "prison poetry", "Ukrainian literature"], uk: ["репресовані поети", "табірна поезія", "українська література"] },
  desc: {
    en: "An anthology of poetry by Ukrainian poets repressed by Moscow, preserving literary voices written under or marked by imprisonment, persecution, exile, and Soviet colonial violence.",
    uk: "Антологія поезії українських поетів, репресованих Москвою, що зберігає літературні голоси, написані в умовах або під знаком ув’язнення, переслідування, вигнання та радянського колоніального насильства."
  },
  iframeSrc: "https://heyzine.com/flip-book/0b597ce2dd.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "For an Independent and United Ukraine. Vol. 1: Borys Honych", uk: "За самостійну і соборну Україну. Том 1: Борис Гонич" },
  author: "Mykhailo Kolosivskyi / Михайло Колосівський",
  year: "1937",
  tags: { en: ["Ukrainian prose", "independence struggle", "diaspora edition"], uk: ["українська проза", "боротьба за незалежність", "діаспорне видання"] },
  desc: {
    en: "The first volume of Mykhailo Kolosivskyi’s prose cycle For an Independent and United Ukraine, centred on the figure of Borys Honych and the national struggle for Ukrainian statehood.",
    uk: "Перший том прозового циклу Михайла Колосівського «За самостійну і соборну Україну», зосереджений на постаті Бориса Гонича та національній боротьбі за українську державність."
  },
  iframeSrc: "https://heyzine.com/flip-book/a390c57ec8.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "In the Ninth Circle", uk: "В Дев’ятім Крузі" },
  author: "Oleksa Voropai / Олекса Воропай",
  year: "1953",
  tags: { en: ["Holodomor", "eyewitness testimony", "memoirs"], uk: ["Голодомор", "свідчення очевидця", "спогади"] },
  desc: {
    en: "One of the early Ukrainian émigré testimonies about the Holodomor, based on Oleksa Voropai’s experience as an agronomist in Soviet Ukraine and written as a stark record of famine, terror, and human suffering.",
    uk: "Одне з ранніх українських еміграційних свідчень про Голодомор, засноване на досвіді Олекси Воропая як агронома в радянській Україні й написане як гострий документ голоду, терору та людських страждань."
  },
  iframeSrc: "https://heyzine.com/flip-book/b1a58bb147.html"
});
// 3) Shelf 5 -> library[4]
library[4].books.push({
  title: { en: "A Mosaic of Prison Scenes", uk: "Мозаїка квадрів в’язничних" },
  author: "Mykhailo Bazhanskyi / Михайло Бажанський",
  year: "1946",
  tags: { en: ["prison memoirs", "political persecution", "émigré literature"], uk: ["в’язничні спогади", "політичне переслідування", "еміграційна література"] },
  desc: {
    en: "A post-war émigré memoir of prison scenes by Mykhailo Bazhanskyi, preserving fragments of incarceration, political violence, personal endurance, and the psychological atmosphere of captivity.",
    uk: "Повоєнні еміграційні спогади Михайла Бажанського з в’язничних сцен, що зберігають фрагменти ув’язнення, політичного насильства, особистої витривалості та психологічної атмосфери неволі."
  },
  iframeSrc: "https://heyzine.com/flip-book/53005891f6.html"
});
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

    const embed = book.iframeSrc
  ? `
    <button class="embed__cover" type="button" data-embed-src="${attrSafe(book.iframeSrc)}">
      <span class="embed__coverText">${lang === "uk" ? "Відкрити книгу" : "Open book"}</span>
      <span class="embed__coverSub">${lang === "uk" ? "Натисни, щоб завантажити переглядач" : "Tap to load the viewer"}</span>
    </button>
  `
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
          ${embed}
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
sectionsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".embed__cover");
  if (!btn) return;

  const src = btn.dataset.embedSrc;
  if (!src) return;

  const embedBox = btn.closest(".embed");
  if (!embedBox) return;

  embedBox.innerHTML =
    `<iframe src="${src}" loading="lazy" allow="fullscreen; clipboard-write" allowfullscreen></iframe>`;
});
})();
