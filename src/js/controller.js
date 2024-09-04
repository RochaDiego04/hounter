import * as model from "./model.js";
import headerCardsView from "./views/headerCardsView.js";

const headerCardsContainer = document.querySelector(
  ".header__background-container__cards"
);

const controlHeaderCards = async function () {
  // Loading header cards
  await model.loadHeaderCards();
  // rendering card
  headerCardsView.render(model.state.headerCards);
};

window.addEventListener("load", controlHeaderCards);
