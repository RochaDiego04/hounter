export const state = {
  headerCards: [],
};

export const loadHeaderCards = async function () {
  // Loading header card
  try {
    const res = await fetch("http://localhost:5000/headerCards");
    const data = await res.json();
    console.log(res, data);

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
