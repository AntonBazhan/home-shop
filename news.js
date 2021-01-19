const months = {
  1: "января",
  2: "февраля",
  3: "марта",
  4: "апреля",
  5: "мая",
  6: "июня",
  7: "июля",
  8: "августа",
  9: "сентября",
  10: "октября",
  11: "ноября",
  12: "декабря",
};

export default (news) => {
  const newsCopy = [...news].sort(() => ~~(Math.random() * 3) - 1);
  const newsItem = newsCopy
    .slice(0, 3)
    .map(({ date, title, description, img, url }) => {
      const currentDate = new Date(date);
      const day = currentDate.getDate();
      const month = months[currentDate.getMonth() + 1];
      if (date && title && description && img && url) {
        return `
        <div class="news__item">
        <div class="news__item_left">
            <img class="news__img" src="${img}">
            <div class="news__date">
                <p class="news__number">${day}</p>
                <p class="news__month">${month}</p>
            </div>
        </div>
        <div class="news__item_right">
            <div class="news__item_title">
                <a class="item_title" href="${url}">${title}</a>
            </div>
            <div class="news__item_title">
                <p class="news__item_text">${description}</p>
            </div>
        </div>
        </div>`;
      }
    })
    .join(" ");

  return ` <div class="news">
  <div class="news__body">
      <div class="news__left">
          <h2 class="news__title">Новости компании</h2>
          <div class="news__column">
              ${newsItem}
          </div>
          <a href="#" class="news__all">Все новости</a>
      </div>
  </div>
</div>`;
};
