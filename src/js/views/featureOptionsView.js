// for the navigation through buttons

class FeatureOptionsView {
  #parentElement = document.querySelector(".featured__sections");
  #query;

  addHandlerClick(handler) {
    this.#parentElement.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        const btn = e.target.closest(".button");
        if (!btn) return;

        this.#query = btn.dataset.type; // featuredHouses, featuredVillas, featuredApartments
        handler(this.#query);
      }.bind(this) // this binded to the class, not event listener
    );
  }
}

export default new FeatureOptionsView();
