import krabbyPatty from "./images/krabby-patty.jpg";
import doubleKrabbyPatty from "./images/double-krabby-patty.jpg";
import seaweedSaladBurger from "./images/seaweed-salad-burger.jpg";
import kelpRings from "./images/kelp-rings.jpg";
import barnacleChips from "./images/barnacle-chips.jpg";
import seafoamShake from "./images/seafoam-shake.jpg";
import coralCola from "./images/coral-cola.jpg";

const menuItems = [
  {
    name: "The Krabby Patty",
    description: "The one and only. A juicy grilled patty, crisp lettuce, tomato, onion, pickles, and our secret sauce on a toasted bun.",
    price: "$6.99",
    category: "burgers",
    label: "The legend",
    image: krabbyPatty,
  },
  {
    name: "Double Krabby Patty",
    description: "Two golden-grilled patties, double the cheese, and all the fixings. For the extra-hungry sea creature.",
    price: "$9.49",
    category: "burgers",
    label: "Big appetite",
    image: doubleKrabbyPatty,
  },
  {
    name: "Seaweed Salad Burger",
    description: "A garden-fresh spin with crunchy sea greens, ripe tomato, and a tangy kelp dressing.",
    price: "$7.49",
    category: "burgers",
    label: "Green & good",
    image: seaweedSaladBurger,
  },
  {
    name: "Kelp Rings",
    description: "Crispy kelp rings, lightly seasoned and served hot from the fryer.",
    price: "$3.49",
    category: "sides",
    label: "Fan favorite",
    image: kelpRings,
  },
  {
    name: "Barnacle Chips",
    description: "A generous pile of golden, salty chips. The perfect sidekick.",
    price: "$2.99",
    category: "sides",
    label: "Extra crispy",
    image: barnacleChips,
  },
  {
    name: "Seafoam Shake",
    description: "A cool and creamy vanilla shake with a swirl of seafoam sweetness.",
    price: "$2.99",
    category: "drinks",
    label: "Cool & creamy",
    image: seafoamShake,
  },
  {
    name: "Coral Cola",
    description: "Bubbly, bright, and best served ice-cold in a kelp-green cup.",
    price: "$1.99",
    category: "drinks",
    label: "Ice cold",
    image: coralCola,
  },
];

function menuCard(item, index) {
  return `<article class="menu-card" data-category="${item.category}">
    <div class="menu-card__art"><img src="${item.image}" alt="${item.name}" loading="lazy"><span class="menu-card__index">0${index + 1}</span></div>
    <div class="menu-card__body"><div class="menu-card__tag">${item.label}</div><div class="menu-card__title-row"><h3>${item.name}</h3><span class="menu-card__price">${item.price}</span></div><p>${item.description}</p></div>
  </article>`;
}

export function menuPage() {
  const filters = [
    ["all", "Everything"],
    ["burgers", "Burgers"],
    ["sides", "Sides"],
    ["drinks", "Drinks"],
  ];

  return `<section class="page-hero page-hero--menu">
    <div class="page-hero__copy"><p class="eyebrow"><span class="eyebrow__dot"></span> Fresh from our underwater kitchen</p><h1>A menu with<br><span>a little magic.</span></h1><p>Big flavor, no funny business. Just the good stuff, made fresh and served with a smile.</p></div>
    <div class="page-hero__decoration" aria-hidden="true"><span class="page-hero__star">✳</span><span class="page-hero__bubble"></span><span class="page-hero__bubble"></span><span class="page-hero__bubble"></span></div>
  </section>
  <section class="menu-section section-wrap">
    <div class="menu-section__top"><div><div class="section-kicker"><span>01</span><span class="section-kicker__line"></span><span>Take your pick</span></div><h2>Good things, <span>right this way.</span></h2></div><p>Every order comes with a little sunshine.<br>Prices are in clams. (Just kidding — dollars.)</p></div>
    <div class="menu-filters" role="group" aria-label="Filter menu by category">${filters.map(([category, label], index) => `<button class="filter-chip${index === 0 ? " is-selected" : ""}" type="button" data-filter="${category}" aria-pressed="${index === 0}">${label}</button>`).join("")}</div>
    <div class="menu-grid">${menuItems.map(menuCard).join("")}</div>
    <p class="menu-note"><span aria-hidden="true">✳</span> Have an allergy or a question? Just ask our crew — we're happy to help.</p>
    <p class="photo-credits">Photos via Wikimedia Commons: <a href="https://commons.wikimedia.org/wiki/File:Hamburger_gn14.jpg" target="_blank" rel="noreferrer">Gnangcomapp</a>, <a href="https://commons.wikimedia.org/wiki/File:DFC_2394_Double_cheeseburger_stacked_with_two_juicy_patties_melted_cheddar_crisp_lettuce_and_tomato_on_a_soft_sesame_bun.jpg" target="_blank" rel="noreferrer">PattayaPatrol</a>, <a href="https://commons.wikimedia.org/wiki/File:Veggie_burger_(1).jpg" target="_blank" rel="noreferrer">Dan McKay</a>, <a href="https://commons.wikimedia.org/wiki/File:Hand-Made_Crispy_Onion_Rings.jpg" target="_blank" rel="noreferrer">City Foodsters</a>, <a href="https://commons.wikimedia.org/wiki/File:Basket_of_French_Fries.JPG" target="_blank" rel="noreferrer">Ceeseven</a>, <a href="https://commons.wikimedia.org/wiki/File:Strawberry_Milkshake_Whipped_Cream.jpg" target="_blank" rel="noreferrer">Alex Gorzen</a> and <a href="https://commons.wikimedia.org/wiki/File:Cola_(soft_drink).jpg" target="_blank" rel="noreferrer">국립국어원</a>, used under CC BY / CC BY-SA licenses.</p>
  </section>
  <section class="menu-cta"><p class="eyebrow eyebrow--light">Nothing beats the real thing</p><h2>Smells like<br>lunch is ready.</h2><button class="button button--light" data-page="about">Stop by today <span aria-hidden="true">↗</span></button></section>`;
}
