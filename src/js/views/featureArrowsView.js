class FeatureArrowsView {
  #parentElement = document.querySelector(".featured__moveArrows");
  #cardsContainer = document.querySelector(".featured__cards");
  #cardWidth;
  #visibleCards;
  #currentPosition = 0;
  #maxPosition;
  #clickHandler;

  setCardWidthAndPositions() {
    // this method is called everytime we change the tabs
    this.#restartContainerPosition();
    console.log(this.#currentPosition);

    const firstCard = this.#cardsContainer.querySelector(".card__container");
    if (!firstCard) return;

    const gap = parseFloat(getComputedStyle(this.#cardsContainer).gap);

    this.#cardWidth = firstCard.offsetWidth + gap;

    this.#visibleCards = Math.floor(
      (this.#cardsContainer.offsetWidth + gap) / this.#cardWidth
    );
    const totalCards = this.#cardsContainer.children.length;
    this.#maxPosition = totalCards - this.#visibleCards;
  }

  #restartContainerPosition() {
    this.#currentPosition = 0;
    this.#cardsContainer.style.transform = `translateX(0)`;
  }

  addHandlerClick() {
    // Remove existing click handler if it exists
    if (this.#clickHandler) {
      this.#parentElement.removeEventListener("click", this.#clickHandler);
    }

    // Define the new click handler
    this.#clickHandler = (e) => {
      e.preventDefault();
      const btnArrowSelected = e.target.closest(".arrow-btn");
      if (!btnArrowSelected) return;

      // change arrow button styles
      this.#parentElement
        .querySelectorAll(".arrow-btn")
        .forEach(function (button) {
          button.classList.add("button--green-rounded");
          button.classList.remove("button--bordered-rounded");
        });
      btnArrowSelected.classList.add("button--bordered-rounded");
      btnArrowSelected.classList.remove("button--green-rounded");

      const direction = btnArrowSelected.dataset.direction;

      if (direction === "right" && this.#currentPosition < this.#maxPosition) {
        this.#currentPosition++;
      } else if (direction === "left" && this.#currentPosition > 0) {
        this.#currentPosition--;
      }
      console.log(this.#currentPosition);

      // Move the cards container
      this.#cardsContainer.style.transform = `translateX(-${
        this.#currentPosition * this.#cardWidth
      }px)`;
    };

    // Add the new click handler
    this.#parentElement.addEventListener("click", this.#clickHandler);
  }
}

export default new FeatureArrowsView();
