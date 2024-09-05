import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  headerCards: [],
  features: {
    query: "",
    featureCards: [],
  },
  reviewCards: [],
};

export const loadHeaderCards = async function () {
  // Loading header card
  try {
    const data = await getJSON(`${API_URL}/headerCards`);

    data.forEach((headerCard) => {
      const card = {
        id: headerCard.id,
        title: headerCard.title,
        description: headerCard.description,
        images: headerCard.images,
      };
      state.headerCards.push(card);
    });
  } catch (err) {
    alert(err);
  }
};

export const loadFeatureCards = async function (query) {
  try {
    state.features.query = query;
    state.features.featureCards = [];

    const data = await getJSON(`${API_URL}/featured${query}`);

    data.forEach((featureCard) => {
      const card = {
        id: featureCard.id,
        label: featureCard.label,
        image: featureCard.image,
        title: featureCard.title,
        price: featureCard.price,
        profile: {
          profileImage: featureCard.profile.profileImage,
          name: featureCard.profile.name,
          state: featureCard.profile.state,
          city: featureCard.profile.city,
        },
      };
      state.features.featureCards.push(card);
    });
  } catch (err) {
    console.log(err);
  }
};

export const loadReviewCards = async function () {
  try {
    const data = await getJSON(`${API_URL}/reviewCards`);

    console.log(data);
    data.forEach((reviewCard) => {
      const card = {
        id: reviewCard.id,
        title: reviewCard.title,
        description: reviewCard.description,
        image: reviewCard.image,
        profile: {
          profileImage: reviewCard.profile.profileImage,
          name: reviewCard.profile.name,
          profession: reviewCard.profile.profession,
          stars: reviewCard.profile.stars,
        },
      };
      state.reviewCards.push(card);
    });
  } catch (err) {
    console.log(err);
  }
};
