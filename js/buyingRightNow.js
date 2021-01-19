export default (buyingNow) => {
  let buyingNowCopy = [...buyingNow];
  if (buyingNowCopy.length > 4) {
    buyingNowCopy = buyingNowCopy.slice(-4);
  }
  const buyingRightNow = buyingNowCopy
    .map(
      ({ title, img, url }) => ` <div class="right-now_item">
      <img  src="${img || "./images/other/noimage.png"}" alt="Photo" />
      <a href="${url}" class="right-now_item__link">${title}</a>
  </div>`
    )
    .join(" ");

  return `<section class="container">
  <div class="right-now__block">
      <div class="block__header">
          Что покупают прямо сейчас
          <div class="line"></div>
      </div>
      <div class="right-now__wrapper">
            ${buyingRightNow}
  </div>
</section>`;
};
