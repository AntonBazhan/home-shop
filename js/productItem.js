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

    case badges.DISCOUNT:
      return '<div class="item__icon item__icon_sale">%</div>';

    default:
      return "";
  }
};

export default ({ img, name, discount, price }, badge) => `
  <div class="item">
      ${getBadge(badge)}
      <div class="item__img">
          <img src="${img}" alt="phone">
      </div>
      <div class="item__title">
        <a class="item__title_link" href="#">
          ${name}
        </a>
      </div>
      <div class="item__price">Цена:
        <span class="item__price_true">
          ${discount}
        </span>
        <span class="item__price_false">
          ${price}
        </span>
      </div>
      <div class="item__button">
          <div class="item__buy">
              <a class="item__buy_link" href="#">купить</a>
          </div>
          <a class="item__details" href="#">Подробнее</a>
      </div>
  </div>
`;
