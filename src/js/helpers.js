const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const formatPrice = function (priceNumber) {
  return formatter.format(priceNumber);
};
