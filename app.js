(function () {
  const searchInput = document.getElementById("searchInput");
  const jumpSelect = document.getElementById("jumpSelect");
  const resultCount = document.getElementById("resultCount");
  const expandAllBtn = document.getElementById("expandAllBtn");
  const collapseAllBtn = document.getElementById("collapseAllBtn");
  const yearNow = document.getElementById("yearNow");

  if (yearNow) yearNow.textContent = new Date().getFullYear();

  const cats = Array.from(document.querySelectorAll(".cat"));
  const books = Array.from(document.querySelectorAll(".book"));

  // If page doesn't have catalogue controls (future pages), stop gracefully
  if (!cats.length) return;

  // Fill jump select
  if (jumpSelect) {
    cats.forEach((cat, idx) => {
      const title = cat.querySelector(".cat__title")?.textContent?.trim() || `Section ${idx + 1}`;
      const opt = document.createElement("option");
      opt.value = idx.toString();
      opt.textContent = title;
      jumpSelect.appendChild(opt);
    });

    jumpSelect.addEventListener("change", () => {
      const i = parseInt(jumpSelect.value, 10);
      if (Number.isNaN(i)) return;
      const el = cats[i];
      el.open = true;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (expandAllBtn) expandAllBtn.addEventListener("click", () => cats.forEach(c => (c.open = true)));
  if (collapseAllBtn) collapseAllBtn.addEventListener("click", () => cats.forEach(c => (c.open = false)));

  function updateCounts() {
    let totalVisible = 0;
    cats.forEach((cat) => {
      const inCat = Array.from(cat.querySelectorAll(".book"));
      const visible = inCat.filter(b => b.style.display !== "none").length;
      const countEl = cat.querySelector("[data-count]");
      if (countEl) countEl.textContent = visible.toString();
      totalVisible += visible;
    });
    if (resultCount) resultCount.textContent = `Books: ${totalVisible}`.replace("Books", resultCount.textContent.startsWith("Книг") ? "Книг" : "Books");
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
    books.forEach((b) => {
      const hay = normalise([
        b.dataset.title,
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

  if (searchInput) searchInput.addEventListener("input", (e) => applySearch(e.target.value));

  updateCounts();
})();
