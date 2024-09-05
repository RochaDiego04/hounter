import * as model from "./model.js";
import headerCardsView from "./views/headerCardsView.js";
import featureCardsView from "./views/featureCardsView.js";
import featureOptionsView from "./views/featureOptionsView.js";

const controlHeaderCards = async function () {
  // Loading header cards
  await model.loadHeaderCards();
  // rendering card
  headerCardsView.render(model.state.headerCards);
};

const controlFeatureCards = async function () {
  await model.loadFeatureCards("Houses");
  featureCardsView.render(model.state.features.featureCards);
};

const init = function () {
  headerCardsView.addHandlerRender(controlHeaderCards);
  featureCardsView.addHandlerRender(controlFeatureCards);
  featureOptionsView.addHandlerClick(controlFeatureCards);
};
init();
