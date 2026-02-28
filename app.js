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
    en: "A unique testimony to the horrors of the Nazi concentration camp Auschwitz through the prism of humorous cartoons.",
    uk: "Унікальне свідоцтво про жахи нацистського концтабору Аушвіц через призму жартівливих шаржів."
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
// 2) Shelf 2 (OUN and UIA History / Історія ОУН та УПА) -> library[0]
library[1].books.push({
  title: { en: "The Fifth Great Assembly of the OUN", uk: "П'ятий Великий Збір ОУН" },
  author: "Library of the Ukrainian Underground Fighter Part 11" / "Бібліотека Українського Підпільника ч. 11",
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
  author: "Library of the Ukrainian Underground Fighter Part 15" / "Бібліотека Українського Підпільника ч. 15",
  year: "1984",
  tags: { en: ["history", "OUN", "UIA"], uk: ["історія", "ОУН","УПА"] },
  desc: {
    en: "Underground literature of the OUN.",
    uk: "Підпільна Література ОУН."
  },
  iframeSrc: "https://heyzine.com/flip-book/d2419dc478.html"
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
