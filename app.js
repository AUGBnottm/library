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
  tags: { en: ["UPA", "biography", "Soviet repression"], uk: ["УПА", "біографія", "радянські репресії"] },
  desc: {
    en: "A biographical study recounting the life of Liudmyla Foia, highlighting her experiences of resistance and survival under Soviet repression.",
    uk: "Біографічне дослідження, що висвітлює життєвий шлях Людмили Фої, її досвід спротиву та виживання в умовах радянських репресій."
  },
  iframeSrc: "https://heyzine.com/flip-book/3eba3cee01.html"
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
