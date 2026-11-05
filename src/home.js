import krabbyPatty from "./images/krabby-patty.jpg";
import kelpRings from "./images/kelp-rings.jpg";
import seafoamShake from "./images/seafoam-shake.jpg";

const featuredItems = [
  {
    name: "The Krabby Patty",
    description: "Our legendary seafloor classic, stacked just right.",
    price: "$6.99",
    label: "The original",
    image: krabbyPatty,
  },
  {
    name: "Kelp Rings",
    description: "Crispy, golden, and made for sharing (or not).",
    price: "$3.49",
    label: "Fan favorite",
    image: kelpRings,
  },
  {
    name: "Seafoam Shake",
    description: "A cool, creamy swirl with a splash of ocean breeze.",
    price: "$2.99",
    label: "Cool & creamy",
    image: seafoamShake,
  },
];

function featuredCard(item, index) {
  return `<article class="feature-card">
    <div class="feature-card__art"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
    <div class="feature-card__body">
      <div class="feature-card__meta"><span>${item.label}</span><span class="feature-card__number">0${index + 1}</span></div>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="feature-card__footer"><span>${item.price}</span><span aria-hidden="true">↗</span></div>
    </div>
  </article>`;
}

export function homePage() {
  return `<section class="hero">
    <div class="hero__copy">
      <p class="eyebrow"><span class="eyebrow__dot"></span> Bikini Bottom's favorite since forever</p>
      <h1>Good times.<br><span>Great patties.</span></h1>
      <p class="hero__intro">Pull up a stool, soak in the sea breeze, and taste the burger that made the whole ocean stop swimming.</p>
      <div class="hero__actions">
        <button class="button button--primary" data-page="menu">Explore the menu <span aria-hidden="true">↗</span></button>
        <button class="text-link" data-page="about">Come on in <span aria-hidden="true">→</span></button>
      </div>
      <div class="hero__note"><span class="hero__note-icon" aria-hidden="true">✦</span><span>Fresh off the grill<br><strong>Every single day</strong></span></div>
    </div>
    <div class="hero__visual" aria-label="Illustration of the Krusty Krab burger by the sea">
      <div class="hero__sun"></div><div class="hero__bubble hero__bubble--one"></div><div class="hero__bubble hero__bubble--two"></div><div class="hero__bubble hero__bubble--three"></div>
      <div class="hero__sign"><span>THE</span><strong>KRUSTY<br>KRAB</strong><small>EST. UNDER THE SEA</small></div>
      <div class="hero__burger" aria-hidden="true"><i></i><b></b><em></em><strong></strong><small></small><span></span></div>
      <div class="hero__seaweed hero__seaweed--one"></div><div class="hero__seaweed hero__seaweed--two"></div>
      <div class="hero__ground"></div>
      <span class="hero__visual-caption">A little taste of the deep blue</span>
    </div>
    <div class="hero__scroll" aria-hidden="true"><span></span> SCROLL TO EXPLORE</div>
  </section>

  <section class="welcome section-wrap">
    <div class="section-kicker"><span>01</span><span class="section-kicker__line"></span><span>A neighborhood original</span></div>
    <div class="welcome__grid">
      <h2>It’s not just<br>a burger. <span>It’s a<br>way of life.</span></h2>
      <div class="welcome__copy">
        <p>Down here, the best things are simple: good company, a hot grill, and a patty worth telling your friends about. We’ve been serving Bikini Bottom one smile at a time.</p>
        <button class="text-link" data-page="about">A little about us <span aria-hidden="true">→</span></button>
      </div>
    </div>
  </section>

  <section class="favorites section-wrap">
    <div class="section-heading">
      <div><div class="section-kicker"><span>02</span><span class="section-kicker__line"></span><span>Made with a splash</span></div><h2>House <span>favorites</span></h2></div>
      <button class="text-link" data-page="menu">See the whole menu <span aria-hidden="true">→</span></button>
    </div>
    <div class="feature-grid">${featuredItems.map(featuredCard).join("")}</div>
  </section>

  <section class="visit-banner">
    <div class="visit-banner__bubble visit-banner__bubble--one"></div><div class="visit-banner__bubble visit-banner__bubble--two"></div>
    <div class="visit-banner__content"><p class="eyebrow eyebrow--light">Your table is waiting</p><h2>Meet us at<br>the bottom.</h2><button class="button button--light" data-page="about">Find your way here <span aria-hidden="true">↗</span></button></div>
    <div class="visit-banner__stamp" aria-hidden="true"><span>GOOD FOOD</span><strong>✳</strong><span>GOOD MOOD</span></div>
  </section>`;
}
