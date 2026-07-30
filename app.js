(function () {
  const grid = document.getElementById("grid");
  const emptyState = document.getElementById("empty-state");
  const buttons = document.querySelectorAll(".filter-btn");

  if (!grid) {
    console.error("Grid container not found. Make sure index.html contains <div id='grid' class='grid'></div>");
    return;
  }

  let activeFilter = "all";

  function markHTML(category) {
    const cls = category === "veg" ? "mark--veg" : "mark--nonveg";
    return `<span class="mark ${cls}" aria-hidden="true"><span class="mark-dot"></span></span>`;
  }

  function spiceHTML(spice) {
    if (!spice) return "";
    const filled = "🌶".repeat(Math.min(spice, 3));
    return `<span class="spice">${filled}</span>`;
  }

  function cardHTML(item) {
    return `
      <article class="card">
        <div class="thumb">
          ${item.image}
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
      </article>
    `;
  }

  function render() {
    const items = (window.menuItems || []).filter(
      (i) => activeFilter === "all" || i.category === activeFilter
    );

    if (!items.length) {
      grid.innerHTML = "";
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;
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
