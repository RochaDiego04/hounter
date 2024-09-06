class FeatureArrowsView {
  #parentElement = document.querySelector(".featured__moveArrows");
  #cardsContainer = document.querySelector(".featured__cards");
  #cardWidth;
  #visibleCards;
  #currentPosition = 0;
  #maxPosition;

  // Dynamically calculate card width and container positions after rendering
  setCardWidthAndPositions() {
    const firstCard = this.#cardsContainer.querySelector(".card__container");
    if (!firstCard) return;

    this.#cardWidth = firstCard.offsetWidth; // Get the width of a single card
    this.#visibleCards = Math.floor(
      this.#cardsContainer.offsetWidth / this.#cardWidth
    ); // Calculate how many cards are visible
    const totalCards = this.#cardsContainer.children.length;
    this.#maxPosition = totalCards - this.#visibleCards; // Max scrollable position
  }

  addHandlerClick() {
    this.#parentElement.addEventListener("click", (e) => {
      e.preventDefault();
      const btnArrowSelected = e.target.closest(".arrow-btn");
      if (!btnArrowSelected) return;

      const direction = btnArrowSelected.dataset.direction;

      // Update current position based on the arrow click direction
      if (direction === "right" && this.#currentPosition < this.#maxPosition) {
        this.#currentPosition++;
      } else if (direction === "left" && this.#currentPosition > 0) {
        this.#currentPosition--;
      }

      // Move the cards container
      this.#cardsContainer.style.transform = `translateX(-${
        this.#currentPosition * this.#cardWidth
      }px)`;
    });
  }
}

export default new FeatureArrowsView();
