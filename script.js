let allChallenges = [];

const categories = [
  { key: "Web & Networking" },
  { key: "Systems & Infrastructure" },
  { key: "Data & Storage" },
  { key: "AI & Machine Learning" },
  { key: "Languages & Compilers" },
  { key: "Graphics & Rendering" },
  { key: "Game Development" },
  { key: "Security & Cryptography" },
  { key: "Algorithms & Mathematics" },
  { key: "Practical Tools & Apps" },
  { key: "Mobile & Desktop Development" },
  { key: "Blockchain & Web3" },
  { key: "DevOps & Cloud Infrastructure" },
  { key: "Data Science & Visualization" },
  { key: "Audio & Music Technology" },
  { key: "Embedded Systems & IoT" },
];

const randomResult = document.getElementById("random-result");
const randomBtn = document.getElementById("random-btn");
const randomDiff = document.getElementById("random-difficulty");
const randomCat = document.getElementById("random-category");

const challengesTable = document.getElementById("challenges-table");
const searchInput = document.getElementById("search-input");
const filterCat = document.getElementById("filter-category");
const filterDiff = document.getElementById("filter-difficulty");
const filterSrc = document.getElementById("filter-source");
const visibleCount = document.getElementById("visible-count");
const totalCount = document.getElementById("total-count");

const catSelects = [randomCat, filterCat];
catSelects.forEach((sel) => {
  categories.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c.key;
    opt.textContent = c.key;
    sel.appendChild(opt);
  });
});

fetch("challenges.json")
  .then((r) => r.json())
  .then((data) => {
    allChallenges = data;
    totalCount.textContent = allChallenges.length;
    renderTable();
  })
  .catch(() => {
    challengesTable.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-dim)">Failed to load challenges data.</div>`;
  });

randomBtn.addEventListener("click", pickRandom);

function pickRandom() {
  if (allChallenges.length === 0) return;

  const catFilter = randomCat.value;
  const diffFilter = randomDiff.value;

  let pool = allChallenges;
  if (catFilter !== "any") pool = pool.filter((c) => c.cat === catFilter);
  if (diffFilter !== "any") pool = pool.filter((c) => c.diff === diffFilter);

  if (pool.length === 0) {
    randomResult.innerHTML = `<span class="random-placeholder">No challenges match your filters!</span>`;
    randomResult.classList.remove("active", "spinning");
    return;
  }

  randomResult.classList.add("spinning");
  randomResult.classList.remove("active");
  let spins = 0;
  const maxSpins = 8 + Math.floor(Math.random() * 6);
  const interval = setInterval(() => {
    const preview = pool[Math.floor(Math.random() * pool.length)];
    randomResult.innerHTML = renderChallengeDisplay(preview, true);
    spins++;
    if (spins >= maxSpins) {
      clearInterval(interval);
      const pick = pool[Math.floor(Math.random() * pool.length)];
      randomResult.innerHTML = renderChallengeDisplay(pick, false);
      randomResult.classList.remove("spinning");
      randomResult.classList.add("active");
    }
  }, 70 + spins * 8);
}

function renderChallengeDisplay(c, preview) {
  const opacity = preview ? "0.4" : "1";
  return `<div class="random-display" style="opacity:${opacity}">
    <div class="rd-id">#${c.id}</div>
    <div class="rd-title">${c.title}</div>
    ${preview ? "" : `<div class="rd-desc">${c.desc}</div>`}
    <div class="rd-meta">
      <span class="rd-cat">${c.cat}</span>
      <span class="rd-diff diff-${c.diff}">${c.diff}</span>
      <span class="rd-cat">${c.src}</span>
    </div>
  </div>`;
}

function renderTable() {
  const cat = filterCat.value;
  const diff = filterDiff.value;
  const src = filterSrc.value;
  const query = searchInput.value.toLowerCase().trim();

  const filtered = allChallenges.filter((c) => {
    if (cat !== "all" && c.cat !== cat) return false;
    if (diff !== "all" && c.diff !== diff) return false;
    if (src !== "all" && c.src !== src) return false;
    if (query && !c.title.toLowerCase().includes(query) && !c.cat.toLowerCase().includes(query) && !c.desc.toLowerCase().includes(query)) return false;
    return true;
  });

  visibleCount.textContent = filtered.length;

  challengesTable.innerHTML = "";
  filtered.forEach((c) => {
    const row = document.createElement("div");
    row.className = "challenge-row";
    row.innerHTML = `
      <span class="cr-id">#${c.id}</span>
      <span class="cr-title">${c.title}</span>
      <span class="cr-cat">${c.cat}</span>
      <span class="rd-diff diff-${c.diff}">${c.diff}</span>
      <span class="cr-source source-${c.src}">${c.src}</span>
    `;
    challengesTable.appendChild(row);
    const descRow = document.createElement("div");
    descRow.className = "challenge-desc";
    descRow.textContent = c.desc;
    challengesTable.appendChild(descRow);
    row.addEventListener("click", () => {
      descRow.classList.toggle("open");
    });
  });
}

searchInput.addEventListener("input", renderTable);
filterCat.addEventListener("change", renderTable);
filterDiff.addEventListener("change", renderTable);
filterSrc.addEventListener("change", renderTable);
