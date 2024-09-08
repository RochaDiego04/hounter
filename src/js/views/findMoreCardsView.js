class FindMoreCardsView {
  #parentElement = document.querySelector(".findMore__grid--left");
  #data;

  render(data) {
    // Add a check for the data
    if (!data || data.length === 0) return;

    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerClick(handler) {
    this.#parentElement.addEventListener("click", function (e) {
      const card = e.target.closest(".findMore__leftCard");
      if (!card) return;
      const id = +card.dataset.id;
      handler(id);
    });
  }

  #generateMarkup() {
    return this.#data.map(this.#generateCardMarkup).join("");
  }

  #generateCardMarkup(card) {
    console.log(card);
    return `
      <div class="findMore__leftCard" data-id="${card.id}">
        <img class="findMore__leftCard__image" src="${card.image}" alt="" />
        <div class="findMore__info">
          <div class="profile">
            <img class="profileImage" src="${card.profile.profileImage}" alt="" />
            <p class="profile__label">${card.profile.name}</p>
          </div>
          <p class="profile__content subtitle">${card.title}</p>
          <div class="profile__date">
            <svg width="24" height="24">
              <use href="/images/svg/clock.svg#clock"></use>
            </svg>
            <p>${card.date.timeAgo} | ${card.date.date}</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default new FindMoreCardsView();
