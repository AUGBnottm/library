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
