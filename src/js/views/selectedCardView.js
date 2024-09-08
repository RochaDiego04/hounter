class SelectedCardView {
  #parentElement = document.querySelector(".findMore__grid--right");
  #data;

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
    return `
      <div class="findMore__selectedCard">
        <img class="findMore__selectedCard__image" src="${
          this.#data.image
        }" alt="" />
        <div class="findMore__info">
          <div class="profile">
            <img class="profileImage" src="${
              this.#data.profile.profileImage
            }" alt="" />
            <p class="profile__label">${this.#data.profile.name}</p>
          </div>
          <p class="profile__content--selected subtitle">${this.#data.title}</p>
          <p class="profile__description">${this.#data.description}</p>
          <div class="profile__date">
            <svg width="24" height="24">
              <use href="/images/svg/clock.svg#clock"></use>
            </svg>
            <p>${this.#data.date.timeAgo} | ${this.#data.date.date}</p>
          </div>
        </div>
      </div>
    `;
  }
}

export default new SelectedCardView();
