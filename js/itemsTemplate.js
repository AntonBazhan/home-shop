import { CURRENCY, CURRENCY_EXCHANGE } from "./config.js";
import { badges } from "./constants.js";

const getBadge = (badge) => {
  switch (badge) {
    case badges.NEW:
      return '<div class="item__icon">new</div>';

    case badges.RECOMENDED:
      return `
      <div class="item__icon item__icon_recommend">
        <img src="images/other/svg/like.svg" alt="like">
      </div>`;

    case badges.SALE:
      return '<div class="item__icon item__icon_sale">%</div>';

    default:
      return "";
  }
};

export default ({
  id,
  img,
  description,
  price,
  oldPrice,
  currency,
  url,
  type,
}) => {
  const exchange = CURRENCY_EXCHANGE[currency];
  const currencyPrice = currency === CURRENCY ? price : ~~(exchange * price);
  const currencyOldPrice =
    currency === CURRENCY ? oldPrice : ~~(exchange * oldPrice);

  return `
  <div class="item" data-id=${id}>
      ${getBadge(type)}

          <img class="item__img" src='${
            img || "./images/other/noimage.png"
          }' alt="phone">

      <div class="item__title">
        <a class="item__title_link" href="#">
          ${description}
        </a>
      </div>
      <div class="item__price">
        ${
          price
            ? `
          <span>Цена:</span>
          <span class="item__price_true">
            ${currencyPrice} ${CURRENCY}
          </span>
          <span class="item__price_false">
            ${currencyOldPrice} ${CURRENCY}
          </span>
        `
            : '<span class="item__price_true">Товар временно недоступный</span>'
        }
      </div>

      <div class="item__button" >
      ${
        price
          ? `
            <div class="item__buy">
            <button class="item__buy_link">
              купить
            </button>
          </div>
          `
          : ""
      }
        <a class="item__details" href="${url}">Подробнее</a>
      </div>
  </div>
`;
};
