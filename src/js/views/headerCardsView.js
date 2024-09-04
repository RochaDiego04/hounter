class HeaderCardsView {
  #data;
  #parentElement = document.querySelector(
    ".header__background-container__cards"
  );

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    const [...headerCards] = this.#data;
    const markup = headerCards.map(function (card) {
      return `            
            <div class="headerCard">
              <div class="headerCard__images">
              ${card.images
                .map(function (image) {
                  return `<img class="headerCard__images--image profileImage" src="${image}" alt="" />`;
                })
                .join("")}
              </div>
              <div class="headerCard__information">
                <p class="headerCard__information--title">${card.title}</p>
                <p class="headerCard__information--caption label--small">
                  ${card.description}
                </p>
              </div>
            </div>`;
    });
    return markup.join("");
  }
}

export default new HeaderCardsView();
