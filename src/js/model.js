import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  headerCards: [],
  features: {
    query: "",
    featureCards: [],
  },
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
    alert(err);
  }
};
