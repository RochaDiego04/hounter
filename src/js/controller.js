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

// const slides = document.querySelectorAll(".review__card");
// const dotContainer = document.querySelector(".dots");

// const activateDot = async function (slide) {
//   document
//     .querySelectorAll(".dots--dot")
//     .forEach((dot) => dot.classList.remove("dots--dot--active"));
//   document
//     .querySelector(`.dots--dot[data-slide="${slide}"]`)
//     .classList.add("dots--dot--active");
// };

// const goToSlide = function (slide) {
//   slides.forEach(
//     (slide, i) =>
//       (slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`) // 0%, 100%, 200%...
//   );
//   activateDot(slide);
// };

// goToSlide(0);

// const nextSlide = function () {
//   if (currentSlide === maxSlide - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }

//   goToSlide(currentSlide);
// };

// const prevSlide = function () {
//   if (currentSlide === 0) {
//     currentSlide = maxSlide - 1;
//   } else {
//     currentSlide--;
//   }

//   goToSlide(currentSlide);
// };

// document.addEventListener("keydown", function (e) {
//   console.log(e);
//   if (e.key === "ArrowLeft") prevSlide();
//   if (e.key === "ArrowRight") nextSlide();
// });

// dotContainer.addEventListener("click", function (e) {
//   if (e.target.classList.contains("dots--dot")) {
//     currentSlide = +e.target.dataset.slide; //extracted from dot button property
//     goToSlide(currentSlide);
//   }
// });
