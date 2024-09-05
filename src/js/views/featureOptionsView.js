// for the navigation through buttons

class FeatureOptionsView {
  #parentElement = document.querySelector(".featured__sections");
  #query;

  addHandlerClick(handler) {
    this.#parentElement.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        const btnSelected = e.target.closest(".button");
        if (!btnSelected) return;

        this.#parentElement
          .querySelectorAll(".button")
          .forEach(function (button) {
            button.classList.remove("button--light-green");
            button.classList.add("button--bordered");
          });
        btnSelected.classList.add("button--light-green");
        btnSelected.classList.remove("button--bordered");

        this.#query = btnSelected.dataset.type; // featuredHouses, featuredVillas, featuredApartments
        handler(this.#query);
      }.bind(this) // this binded to the class, not event listener
    );
  }
}

export default new FeatureOptionsView();
