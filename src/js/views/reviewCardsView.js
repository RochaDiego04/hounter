class ReviewCardsView {
  #data;
  #parentElement = document.querySelector(".dot-slider");
  #dotsContainer = document.querySelector(".dots");
  #currentSlide = 1;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
    this.#addHandlers();
    this.#goToSlide(1);
    this.#activateDot(1);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    const [...reviewCards] = this.#data;

    // Generate cards markup
    const cardsMarkup = reviewCards
      .map(function (card, i) {
        return `            
          <div class="review__card" style="transform: translateX(${
            140 * i
          }%)" data-slide="${i}">
            <img
              class="review__card__image"
              src="${card.image}"
              alt=""
            />
            <div class="review__card__information">
              <h4 class="card__title">
                ${card.title}
              </h4>
              <p class="card__description label">
               ${card.description}
              </p>
              <div class="card__profile">
                <img
                  class="profileImage"
                  src="${card.profile.profileImage}"
                  alt=""
                />
                <div class="card__profile--right">
                  <p class="card__profile__subtitle subtitle">${
                    card.profile.name
                  }</p>
                  <p class="card__profile__label">${card.profile.profession}</p>
                </div>
                <div class="card__profile--left">
                  <svg class="" width="24" height="24">
                    <use class="" href="/images/svg/star.svg#star"></use>
                  </svg>
                  <h4 class="card__profile__calificationText">${
                    card.profile.stars
                  }</h4>
                </div>
              </div>
            </div>
          </div>`;
      })
      .join("");

    // Adding dots after the cards
    const dots = this.#createDots(reviewCards.length);
    return cardsMarkup + dots;
  }

  #createDots(cardsLength) {
    let dotsMarkup = '<div class="dots">';
    for (let i = 0; i < cardsLength; i++) {
      dotsMarkup += `<button class="dots--dot" data-slide="${i}"></button>`;
    }
    dotsMarkup += "</div>";
    return dotsMarkup;
  }

  #addHandlers() {
    // dot event listener
    const dots = document.querySelectorAll(".dots--dot");
    dots.forEach((dot) =>
      dot.addEventListener("click", (e) => {
        const slide = +e.target.dataset.slide;
        this.#goToSlide(slide);
        this.#activateDot(slide);
      })
    );
    // card event listener
    this.#parentElement.addEventListener("click", (e) => {
      const cardSelected = e.target.closest(".review__card");
      if (!cardSelected) return;

      const slide = cardSelected.dataset.slide;
      this.#goToSlide(slide);
      this.#activateDot(slide);
    });
  }

  #goToSlide(slide) {
    const slides = document.querySelectorAll(".review__card");
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${140 * (i - slide)}%)`)
    );
  }

  #activateDot(slide) {
    document
      .querySelectorAll(".dots--dot")
      .forEach((dot) => dot.classList.remove("dot--active"));
    document
      .querySelector(`.dots--dot[data-slide="${slide}"]`)
      .classList.add("dot--active");
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new ReviewCardsView();
