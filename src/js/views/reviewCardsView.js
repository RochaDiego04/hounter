class ReviewCardsView {
  #data;
  #parentElement = document.querySelector(".dot-slider");
  #dotsContainer = document.querySelector(".dots");

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    // call function from the controller
    window.addEventListener("load", handler);
  }

  #generateMarkup() {
    const [...reviewCards] = this.#data;
    const markup = reviewCards.map(function (card) {
      return `            
          <div class="review__card">
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
                  <p class="card__profile__subtitle subtitle">${card.profile.name}</p>
                  <p class="card__profile__label">${card.profile.profession}</p>
                </div>
                <div class="card__profile--left">
                  <svg class="" width="24" height="24">
                    <use class="" href="/images/svg/star.svg#star"></use>
                  </svg>
                  <h4 class="card__profile__calificationText">${card.profile.stars}</h4>
                </div>
              </div>
            </div>
          </div>
          `;
    });

    // adding dots after the cards
    const dots = this.#createDots(reviewCards.length);
    markup.push(dots);

    return markup.join("");
  }

  #createDots(cardsLength) {
    const dotsMarkup = [];
    dotsMarkup.push('<div class="dots">');
    for (let i = 1; i <= cardsLength; i++) {
      dotsMarkup.push(`<button class="dots--dot"  data-slide="${i}"></button>`);
    }
    dotsMarkup.push("</div>");
    return dotsMarkup.join("");
  }
}

export default new ReviewCardsView();
