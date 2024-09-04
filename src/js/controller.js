const headerCardsContainer = document.querySelector(
  ".header__background-container__cards"
);

const showHeaderCards = async function () {
  try {
    // Loading header card
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
      console.log(card);

      // rendering card
      const markup = `            
            <div class="headerCard">
              <div class="headerCard__images">
              ${card.images
                .map(function (image) {
                  return `<img class="headerCard__images--image profileImage" src="${image}" alt="" />`;
                })
                .join("")}
              </div>
              <div class="headerCard__information">
                <p class="headerCard__information--title">${card.title}</p>
                <p class="headerCard__information--caption label--small">
                  ${card.description}
                </p>
              </div>
            </div>`;
      console.log(markup);
      headerCardsContainer.insertAdjacentHTML("afterbegin", markup);
    });
  } catch (err) {
    alert(err);
  }
};

showHeaderCards();
