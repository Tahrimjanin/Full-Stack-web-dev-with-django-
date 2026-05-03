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

const relatedProducts = {
  deals: [
    {
      name: "Premium Steel Blender With Two Jars",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=500&q=80",
      alt: "Premium blender with two jars",
      price: "$420.00",
      color: "#f3b34d"
    },
    {
      name: "Digital Compact Microwave Oven 25L",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=500&q=80",
      alt: "Compact microwave oven",
      price: "$650.00",
      color: "#2f3745"
    },
    {
      name: "Classic Ceramic Saucepan Set",
      image: "assets/ceramic-pan-set.svg",
      alt: "Ceramic saucepan set",
      price: "$380.00",
      color: "#e7b8c2"
    }
  ],
  newArrivals: [
    {
      name: "Nonstick Kitchen Fry Pan Set",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=260&q=80",
      alt: "Nonstick kitchen fry pan",
      price: "$299.00"
    },
    {
      name: "Modern Kitchen Storage Bundle",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=260&q=80",
      alt: "Modern kitchen storage",
      price: "$820.00"
    },
    {
      name: "Smart Laundry Appliance",
      image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=260&q=80",
      alt: "Smart laundry appliance",
      price: "$940.00"
    }
  ],
  customProducts: [
    {
      name: "Custom Ceramic Cookware Pack",
      image: "assets/ceramic-pan-set.svg",
      alt: "Custom ceramic cookware pack",
      price: "$540.00"
    },
    {
      name: "Home Chef Appliance Combo",
      image: "assets/smart-home-appliances.svg",
      alt: "Home chef appliance combo",
      price: "$1,200.00"
    },
    {
      name: "Custom TV Entertainment Set",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=260&q=80",
      alt: "Custom TV entertainment set",
      price: "$1,450.00"
    }
  ],
  featured: [
    {
      name: "Samsung Smart 4K Display TV",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=520&q=80",
      alt: "Samsung smart 4K display TV",
      price: "$1,250.00",
      color: "#2c3644"
    },
    {
      name: "Smart Air Fryer Kitchen Appliance",
      image: "assets/smart-home-appliances.svg",
      alt: "Smart air fryer kitchen appliance",
      price: "$780.00",
      color: "#d89b31"
    },
    {
      name: "Front Load Washing Machine",
      image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?auto=format&fit=crop&w=520&q=80",
      alt: "Front load washing machine",
      price: "$1,100.00",
      color: "#e6e8ee"
    }
  ],
  smart: [
    {
      name: "LG OLED Smart TV 55-Inch",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=260&q=80",
      alt: "LG OLED smart TV",
      price: "$1,299.00"
    },
    {
      name: "Sony Google TV 65-Inch",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=260&q=80",
      alt: "Sony Google TV",
      price: "$1,180.00"
    },
    {
      name: "Ultra HD Streaming TV",
      image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=260&q=80",
      alt: "Ultra HD streaming TV",
      price: "$950.00"
    }
  ],
  mixer: [
    {
      name: "High Speed Mixer Grinder",
      image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=260&q=80",
      alt: "High speed mixer grinder",
      price: "$360.00"
    },
    {
      name: "Kitchen Blender Combo Pack",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=260&q=80",
      alt: "Kitchen blender combo pack",
      price: "$490.00"
    },
    {
      name: "Professional Countertop Blender",
      image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=260&q=80",
      alt: "Professional countertop blender",
      price: "$260.00"
    }
  ],
  bestSale: [
    {
      name: "Panasonic Smart Android TV",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=520&q=80",
      alt: "Panasonic smart Android TV",
      price: "$899.00",
      color: "#4b5563"
    },
    {
      name: "Black Nonstick Cookware Bundle",
      image: "assets/mint-cookware-set.svg",
      alt: "Black nonstick cookware bundle",
      price: "$620.00",
      color: "#111827"
    },
    {
      name: "Smart Kitchen Appliance Deal",
      image: "assets/smart-home-appliances.svg",
      alt: "Smart kitchen appliance deal",
      price: "$740.00",
      color: "#f0b429"
    }
  ]
};

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

function appendProducts(row, products, createCard) {
  if (!row) {
    return;
  }

  products.forEach((product) => {
    row.appendChild(createCard(product));
  });
}

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

appendProducts(dealProducts, relatedProducts.deals, (product) => createProductCard(product));
appendProducts(document.querySelector("#new-arrivals"), relatedProducts.newArrivals, createCompactProduct);
appendProducts(document.querySelector("#custom-products"), relatedProducts.customProducts, createCompactProduct);
appendProducts(featuredProducts, relatedProducts.featured, (product) => createProductCard(product, "featured-product-card"));
appendProducts(smartProducts, relatedProducts.smart, (product) => createCompactProduct(product, "wide-product"));
appendProducts(mixerProducts, relatedProducts.mixer, (product) => createCompactProduct(product, "wide-product"));
appendProducts(bestSaleProducts, relatedProducts.bestSale, (product) => createProductCard(product, "best-sale-card"));

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
