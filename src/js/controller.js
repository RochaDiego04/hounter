import * as model from "./model.js";
import headerCardsView from "./views/headerCardsView.js";
import featureCardsView from "./views/featureCardsView.js";
import featureOptionsView from "./views/featureOptionsView.js";
import reviewCardsView from "./views/reviewCardsView.js";

const controlHeaderCards = async function () {
  // Loading header cards
  await model.loadHeaderCards();
  // rendering card
  headerCardsView.render(model.state.headerCards);
};

const controlFeatureCards = async function (query = "Houses") {
  await model.loadFeatureCards(query);
  featureCardsView.render(model.state.features.featureCards);
};

const controlReviewCards = async function () {
  await model.loadReviewCards();
  reviewCardsView.render(model.state.reviewCards);
};

const init = function () {
  headerCardsView.addHandlerRender(controlHeaderCards);
  featureCardsView.addHandlerRender(controlFeatureCards);
  featureOptionsView.addHandlerClick(controlFeatureCards);
  reviewCardsView.addHandlerRender(controlReviewCards);
};
init();
