const promoBar = document.querySelector(".promo-bar");
const promoToggle = document.querySelector(".promo-toggle");
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
const categoryToggle = document.querySelector(".category-toggle");
const categoryPanel = document.querySelector(".category-panel");
const featuredCategoryRow = document.querySelector(".featured-grid");
const wishlistButton = document.querySelector(".wishlist-button");
const accountButton = document.querySelector(".account-button");
const heroSlides = document.querySelectorAll(".hero-slide");
const previousSlideButton = document.querySelector(".slider-prev");
const nextSlideButton = document.querySelector(".slider-next");
const dealProducts = document.querySelector("#deal-products");
const dealScrollPrevious = document.querySelector(".deal-scroll-prev");
const dealScrollNext = document.querySelector(".deal-scroll-next");
const showcasePrevious = document.querySelector(".showcase-prev");
const showcaseNext = document.querySelector(".showcase-next");
const featuredProducts = document.querySelector("#featured-products");
const featuredPrevious = document.querySelector(".featured-prev");
const featuredNext = document.querySelector(".featured-next");
const smartProducts = document.querySelector("#smart-products");
const smartPrevious = document.querySelector(".smart-prev");
const smartNext = document.querySelector(".smart-next");
const mixerProducts = document.querySelector("#mixer-products");
const mixerPrevious = document.querySelector(".mixer-prev");
const mixerNext = document.querySelector(".mixer-next");
const bestSaleProducts = document.querySelector("#best-sale-products");
const bestSalePrevious = document.querySelector(".best-sale-prev");
const bestSaleNext = document.querySelector(".best-sale-next");
const manufacturerGrid = document.querySelector("#manufacturer-grid");
const manufacturersPrevious = document.querySelector(".manufacturers-prev");
const manufacturersNext = document.querySelector(".manufacturers-next");
const newsletterForm = document.querySelector(".newsletter-form");

function createProductCard(product, extraClass = "") {
  const card = document.createElement("article");
  card.className = `product-card ${extraClass}`.trim();
  card.innerHTML = `
    <img src="${product.image}" alt="${product.alt}">
    <h3>${product.name}</h3>
    <div class="rating muted-stars" aria-label="0 out of 5 stars">&star;&star;&star;&star;&star;</div>
    <div class="swatches" aria-label="Available colors">
      <span style="background:${product.color || "#c9cbd1"}"></span>
    </div>
    <p class="price">${product.price}</p>
    <div class="buy-panel">
      <div class="qty-box" aria-label="Quantity">
        <span>1</span>
        <button type="button" aria-label="Increase quantity">+</button>
        <button type="button" aria-label="Decrease quantity">-</button>
      </div>
      <button class="buy-button" type="button">Buy Now</button>
    </div>
  `;
  return card;
}

function createCompactProduct(product, className = "compact-product") {
  const card = document.createElement("article");
  card.className = className;
  card.innerHTML = `
    <img src="${product.image}" alt="${product.alt}">
    <div>
      <h3>${product.name}</h3>
      <div class="tiny-rating">&star;&star;&star;&star;&star;</div>
      <p>${product.price}</p>
    </div>
  `;
  return card;
}

function createWideProduct(product, className = "wide-product") {
  const card = document.createElement("article");
  card.className = className;
  card.innerHTML = `
    <img src="${product.image}" alt="${product.alt}">
    <div>
      <h3>${product.name}</h3>
      <div class="tiny-rating">&star;&star;&star;&star;&star;</div>
      ${product.price ? `<p>${product.price}</p>` : ""}
    </div>
  `;
  return card;
}

function renderDealProductsFromDatabase(products) {
  if (!dealProducts) return;

  dealProducts.innerHTML = "";

  products.forEach((product) => {
    dealProducts.appendChild(createProductCard(product));
  });
}

function appendProducts(row, products, createCard) {
  if (!row) {
    return;
  }

  products.forEach((product) => {
    row.appendChild(createCard(product));
  });
}

const productDatabase = typeof pictureDatabase !== "undefined" ? pictureDatabase : window.pictureDatabase || [];

function duplicateScrollableContent(row) {
  if (!row || row.children.length === 0 || row.dataset.loopReady === "true") {
    return;
  }

  const originalItems = Array.from(row.children);

  originalItems.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.classList.add("is-loop-clone");
    row.appendChild(clone);
  });

  row.dataset.loopReady = "true";
}

function renderProducts(row, products, createCard) {
  if (!row) return;

  row.innerHTML = "";
  products.forEach((product) => {
    row.appendChild(createCard(product));
  });
}

renderProducts(dealProducts, productDatabase.slice(0, 12), createProductCard);
renderProducts(document.querySelector("#new-arrivals"), productDatabase.slice(12, 20), createCompactProduct);
renderProducts(document.querySelector("#custom-products"), productDatabase.slice(20, 24), createCompactProduct);
renderProducts(featuredProducts, productDatabase.slice(24, 30), (product) => createProductCard(product, "featured-product-card"));
renderProducts(smartProducts, productDatabase.slice(30, 34), createWideProduct);
renderProducts(mixerProducts, productDatabase.slice(34, 38), createWideProduct);
renderProducts(bestSaleProducts, productDatabase.slice(38, 44), (product) => createProductCard(product, "best-sale-card"));

function applyProductImageFallbacks() {
  document.querySelectorAll(".product-card img, .compact-product img, .wide-product img, .category-photo").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = "assets/product-fallback.svg";
    }, { once: true });

    if (image.complete && image.naturalWidth === 0) {
      image.src = "assets/product-fallback.svg";
    }
  });
}

applyProductImageFallbacks();

[
  dealProducts,
  document.querySelector("#new-arrivals"),
  document.querySelector("#custom-products"),
  featuredProducts,
  featuredCategoryRow,
  smartProducts,
  mixerProducts,
  bestSaleProducts,
  manufacturerGrid
].forEach(duplicateScrollableContent);

const tabButtons = document.querySelectorAll(".tab-button[data-tab]");
const quantityBoxes = document.querySelectorAll(".qty-box");
const buyButtons = document.querySelectorAll(".buy-button");

let activeSlide = 0;
let heroSlideTimer;
const heroSlideDelay = 3000;

promoToggle.addEventListener("click", () => {
  promoBar.classList.add("is-hidden");
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchText = searchInput.value.trim();

  if (searchText === "") {
    alert("Please type a product name before searching.");
    searchInput.focus();
    return;
  }

  alert(`Searching for: ${searchText}`);
});

categoryToggle.addEventListener("click", () => {
  categoryPanel.classList.toggle("is-hidden");

  const isOpen = !categoryPanel.classList.contains("is-hidden");
  categoryToggle.setAttribute("aria-expanded", isOpen);
});

wishlistButton.addEventListener("click", () => {
  alert("Your wishlist is empty right now.");
});

accountButton.addEventListener("click", () => {
  alert("Account page will be added in the next step.");
});

function showHeroSlide(slideIndex) {
  heroSlides[activeSlide].classList.remove("is-active");
  activeSlide = (slideIndex + heroSlides.length) % heroSlides.length;
  heroSlides[activeSlide].classList.add("is-active");
}

function startHeroSlider() {
  heroSlideTimer = setInterval(() => {
    showHeroSlide(activeSlide + 1);
  }, heroSlideDelay);
}

function restartHeroSlider() {
  clearInterval(heroSlideTimer);
  startHeroSlider();
}

previousSlideButton.addEventListener("click", () => {
  showHeroSlide(activeSlide - 1);
  restartHeroSlider();
});

nextSlideButton.addEventListener("click", () => {
  showHeroSlide(activeSlide + 1);
  restartHeroSlider();
});

startHeroSlider();

function scrollProductRow(row, direction) {
  if (!row) {
    return;
  }

  const scrollAmount = Math.max(220, Math.round(row.clientWidth * 0.82));

  row.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

function bindScrollControls(previousButton, nextButton, getRow) {
  previousButton?.addEventListener("click", () => {
    scrollProductRow(getRow(), -1);
  });

  nextButton?.addEventListener("click", () => {
    scrollProductRow(getRow(), 1);
  });
}

function makeRowDraggable(row) {
  if (!row) {
    return;
  }

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  row.classList.add("is-draggable");

  row.addEventListener("pointerdown", (event) => {
    if (event.target.closest("button, a, input, select")) {
      return;
    }

    isDragging = true;
    startX = event.clientX;
    startScrollLeft = row.scrollLeft;
    row.classList.add("is-dragging");
    row.setPointerCapture(event.pointerId);
  });

  row.addEventListener("pointermove", (event) => {
    if (!isDragging) {
      return;
    }

    row.scrollLeft = startScrollLeft - (event.clientX - startX);
  });

  function stopDragging(event) {
    if (!isDragging) {
      return;
    }

    isDragging = false;
    row.classList.remove("is-dragging");

    if (row.hasPointerCapture(event.pointerId)) {
      row.releasePointerCapture(event.pointerId);
    }
  }

  row.addEventListener("pointerup", stopDragging);
  row.addEventListener("pointercancel", stopDragging);
  row.addEventListener("pointerleave", stopDragging);
}

function startLeftMovement(row, speed = 0.45) {
  if (!row) {
    return;
  }

  let isPaused = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function moveLeft() {
    if (!reducedMotion && !isPaused && row.scrollWidth > row.clientWidth) {
      row.scrollLeft += speed;

      const loopPoint = row.dataset.loopReady === "true" ? row.scrollWidth / 2 : row.scrollWidth - row.clientWidth;

      if (row.scrollLeft >= loopPoint - 1) {
        row.scrollLeft = 0;
      }
    }

    requestAnimationFrame(moveLeft);
  }

  row.addEventListener("pointerenter", () => {
    isPaused = true;
  });

  row.addEventListener("pointerleave", () => {
    isPaused = false;
  });

  row.addEventListener("focusin", () => {
    isPaused = true;
  });

  row.addEventListener("focusout", () => {
    isPaused = false;
  });

  moveLeft();
}

bindScrollControls(dealScrollPrevious, dealScrollNext, () => dealProducts);
bindScrollControls(showcasePrevious, showcaseNext, () => document.querySelector(".compact-grid.is-active"));
bindScrollControls(featuredPrevious, featuredNext, () => featuredProducts);
bindScrollControls(smartPrevious, smartNext, () => smartProducts);
bindScrollControls(mixerPrevious, mixerNext, () => mixerProducts);
bindScrollControls(bestSalePrevious, bestSaleNext, () => bestSaleProducts);
bindScrollControls(manufacturersPrevious, manufacturersNext, () => manufacturerGrid);

[
  dealProducts,
  document.querySelector("#new-arrivals"),
  document.querySelector("#custom-products"),
  featuredProducts,
  featuredCategoryRow,
  smartProducts,
  mixerProducts,
  bestSaleProducts,
  manufacturerGrid
].forEach(makeRowDraggable);

[
  dealProducts,
  document.querySelector("#new-arrivals"),
  document.querySelector("#custom-products"),
  featuredProducts,
  smartProducts,
  mixerProducts,
  bestSaleProducts,
  manufacturerGrid
].forEach((row) => startLeftMovement(row));

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Thank you for subscribing to the Kingdom newsletter.");
  newsletterForm.reset();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((tab) => {
      tab.classList.remove("is-active");
      tab.setAttribute("aria-selected", "false");
    });

    document.querySelectorAll(".compact-grid").forEach((panel) => {
      panel.classList.remove("is-active");
      panel.hidden = true;
    });

    const selectedPanel = document.querySelector(`#${button.dataset.tab}`);
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");

    if (selectedPanel) {
      selectedPanel.hidden = false;
      selectedPanel.classList.add("is-active");
    }
  });
});

quantityBoxes.forEach((box) => {
  const quantityText = box.querySelector("span");
  const [increaseButton, decreaseButton] = box.querySelectorAll("button");

  increaseButton.addEventListener("click", () => {
    quantityText.textContent = Number(quantityText.textContent) + 1;
  });

  decreaseButton.addEventListener("click", () => {
    const currentQuantity = Number(quantityText.textContent);
    quantityText.textContent = Math.max(1, currentQuantity - 1);
  });
});

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.disabled) {
      return;
    }

    const productName = button.closest(".product-card").querySelector("h3").textContent;
    alert(`${productName} added to your cart.`);
  });
});
