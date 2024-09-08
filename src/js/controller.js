import * as model from "./model.js";
import headerCardsView from "./views/headerCardsView.js";
import featureCardsView from "./views/featureCardsView.js";
import featureOptionsView from "./views/featureOptionsView.js";
import featureArrowsView from "./views/featureArrowsView.js";
import reviewCardsView from "./views/reviewCardsView.js";
import findMoreCardsView from "./views/findMoreCardsView.js";
import selectedCardView from "./views/selectedCardView.js";

const controlHeaderCards = async function () {
  try {
    // Loading header cards
    await model.loadHeaderCards();
    // rendering card
    headerCardsView.render(model.state.headerCards);
  } catch (err) {
    console.log(err.message);
    //headerCardsView.renderError(err.message);
  }
};

const controlFeatureCards = async function (query = "Houses") {
  try {
    await model.loadFeatureCards(query);
    featureCardsView.render(model.state.features.featureCards);

    featureArrowsView.setCardWidthAndPositions();
    featureArrowsView.addHandlerClick();
  } catch (err) {
    console.log(err.message);
  }
};

const controlReviewCards = async function () {
  try {
    await model.loadReviewCards();
    reviewCardsView.render(model.state.reviewCards);
  } catch (err) {
    console.log(err.message);
  }
};

const controlFindMoreCards = async function () {
  try {
    await model.loadFindMoreCards();

    if (!model.state.findMore.selectedCard) {
      model.updateSelectedCard(1);
    }

    findMoreCardsView.render(model.state.findMore.findMoreCards);
    selectedCardView.render(model.state.findMore.selectedCard);
  } catch (err) {
    console.log(err.message);
  }
};

const controlSelectCard = function (id) {
  model.updateSelectedCard(id);
  findMoreCardsView.render(model.state.findMore.findMoreCards); // Update the left side
  selectedCardView.render(model.state.findMore.selectedCard); // Update the right side
};

const init = function () {
  headerCardsView.addHandlerRender(controlHeaderCards);

  featureCardsView.addHandlerRender(controlFeatureCards);
  featureOptionsView.addHandlerClick(controlFeatureCards);

  reviewCardsView.addHandlerRender(controlReviewCards);

  findMoreCardsView.addHandlerRender(controlFindMoreCards);
  findMoreCardsView.addHandlerClick(controlSelectCard);
};
init();
