import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

export const state = {
  headerCards: [],
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
