import { formatPrice } from "../helpers.js";

class FeatureCardsView {
  #data;
  #parentElement = document.querySelector(".featured__cards");

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
    window.addEventListener("load", function () {
      handler("Houses"); // default initial render
    });
  }

  #generateMarkup() {
    const [...featuredCards] = this.#data;

    const markup = featuredCards.map(
      function (card) {
        const formattedPrice = formatPrice(card.price);
        const [labelStyle, icon, color] = this.#getLabelStyle(card.label);

        return `            
          <div class="card__container">
            <img
              class="card__image"
              src="${card.image}"
              alt=""
            />
            <div class="card__cardLabel cardLabel--${labelStyle}">
              <svg class="cardLabel--icon" width="22" height="22"                 fill="${color}">
                <use href="/images/svg/${icon}.svg#${icon}"></use>
              </svg>
              <p>${card.label}</p>
            </div>
            <div>
              <h3>${card.title}</h3>
              <h4 class="card__price">${formattedPrice}</h4>
            </div>
            <div class="card__profile">
              <div class="card__profile--left">
                <img
                  class="profileImage"
                  src="${card.profile.profileImage}"
                  alt=""
                />
              </div>
              <div class="card__profile--right">
                <p class="card__profile__subtitle subtitle">${card.profile.name}</p>
                <p class="card__profile__label">${card.profile.city}, ${card.profile.state}</p>
              </div>
            </div>
          </div>`;
      }.bind(this)
    ); // binding "this" keyword to the class instance and not the function inside map
    return markup.join("");
  }

  #getLabelStyle(txtLabel) {
    switch (txtLabel) {
      case "Popular":
        return ["popular", "fire", "#EF4444"];
      case "New house":
        return ["new", "house", "#1D4ED8"];
      case "Best deals":
        return ["deals", "wallet", "#0B9567"];
    }
  }
}

export default new FeatureCardsView();
