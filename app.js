(function () {
  const grid = document.getElementById("grid");
  const emptyState = document.getElementById("empty-state");
  const buttons = document.querySelectorAll(".filter-btn");
  let activeFilter = "all";

  const vegLeafSVG = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 38C10 20 24 10 40 10C40 26 30 38 12 38C11 38 10 38 10 38Z" fill="#3E7D44" fill-opacity="0.35"/><path d="M10 38C24 22 32 16 40 10" stroke="#3E7D44" stroke-width="2" stroke-linecap="round"/></svg>`;
  const nonvegSVG = `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 10C17 10 13 15 13 21C13 27 17 31 20 33C18 35 16 37 16 38L20 38C22 36 23 35 24 35C25 35 26 36 28 38L32 38C32 37 30 35 28 33C31 31 35 27 35 21C35 15 31 10 24 10Z" fill="#A73B3B" fill-opacity="0.35"/><path d="M24 10C17 10 13 15 13 21C13 27 17 31 20 33" stroke="#A73B3B" stroke-width="2" stroke-linecap="round"/></svg>`;

  function markHTML(category) {
    const cls = category === "veg" ? "mark--veg" : "mark--nonveg";
    return `<span class="mark ${cls}" aria-hidden="true"><span class="mark-dot"></span></span>`;
  }

  function spiceHTML(spice) {
    if (!spice) return "";
    const filled = "🌶".repeat(Math.min(spice, 3));
    return `<span class="spice" title="Spice level">${filled}</span>`;
  }

  function placeholderHTML(category) {
    return `<div class="thumb-fallback">${category === "veg" ? vegLeafSVG : nonvegSVG}</div>`;
  }

  function cardHTML(item) {
    return `
      <article class="card" data-category="${item.category}">
        <div class="thumb">
          <img
            src="${item.image}"
            alt="${item.name}"
            loading="lazy"
            onerror="this.closest('.thumb').innerHTML = window.__placeholder('${item.category}')"
          >
        </div>
        <div class="card-body">
          <div class="card-top">
            ${markHTML(item.category)}
            <h3 class="card-name">${item.name}</h3>
          </div>
          <p class="card-desc">${item.description || ""}</p>
          <div class="card-bottom">
            <span class="price">${item.price || ""}</span>
            ${spiceHTML(item.spice)}
          </div>
        </div>
      </article>`;
  }

  window.__placeholder = placeholderHTML;

  function render() {
    const items = (window.menuItems || []).filter(
      (i) => activeFilter === "all" || i.category === activeFilter
    );

    if (!items.length) {
      grid.innerHTML = "";
      emptyState.hidden = false;
      return;
    }

    emptyState.hidden = true;
    grid.innerHTML = items.map(cardHTML).join("");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      activeFilter = btn.dataset.filter;
      render();
    });
  });

  render();
})();
