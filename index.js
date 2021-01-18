"use strict";
import {
  TOP_MENU,
  MENU,
  NEWS,
  BASKET,
  ITEMS,
  PROMOTIONS,
  BUYING_RIGHT_NOW,
  BANNER,
} from "./config.js";
import { badges } from "./constants.js";
import topMenuTemplate from "./topMenu.js";
import menuProductTemplate from "./menuProduct.js";
import basketTemplate from "./basket.js";
import sliderTemplate from "./slider.js";
import newsTemplate from "./news.js";
import bannerTemplate from "./banner.js";
// import slider from './slider.js';

import itemsTemplate from "./itemsTemplate.js";
import stockItemTemplate from "./stockItem.js";
import buyingRightNowTemplate from "./buyingRightNow.js";

const userBasket = BASKET;

const refs = {
  topMenu: document.querySelector("#top-menu"),
  menuProduct: document.querySelector("#menuProduct"),
  basket: document.querySelector("#basket"),
  news: document.querySelector("#news"),
  slider1: document.querySelector("#slider-1"),
  slider2: document.querySelector("#slider-2"),
  slider3: document.querySelector("#slider-3"),
  slider4: document.querySelector("#slider-4"),
  buyingRightNow: document.querySelector("#buyingRightNow"),
  bannerSlider: document.querySelector("#banner_slider"),
};

refs.topMenu.insertAdjacentHTML("beforeend", topMenuTemplate(TOP_MENU));

refs.menuProduct.insertAdjacentHTML("beforeend", menuProductTemplate(MENU));

refs.news.insertAdjacentHTML("beforeend", newsTemplate(NEWS));

const renderBasket = () => {
  refs.basket.innerHTML = "";
  refs.basket.insertAdjacentHTML("beforeend", basketTemplate(userBasket));
};

const handleItemClick = (e) => {
  const priceElement = e.target
    .closest(".item")
    .querySelector(".item__price_true");
  const price = parseInt(priceElement.textContent.trim());

  userBasket.elements += 1;
  userBasket.price += price;

  renderBasket();
};

const sortByDate = (a, b) => {
  if (a.date < b.date) return -1;
  if (a.date > b.date) return 1;

  return 0;
};

const sortByPrice = (a, b) => {
  if (a.price < b.price) return -1;
  if (a.price > b.price) return 1;

  return 0;
};

const sortByPriceDiff = (a, b) => {
  if (a.oldPrice - a.price > b.oldPrice - b.price) return -1;
  if (a.oldPrice - a.price < b.oldPrice - b.price) return 1;

  return 0;
};

const newItems = ITEMS.filter(({ type }) => type === badges.NEW).sort(
  sortByDate
);

const recommendedItems = ITEMS.filter(
  ({ type }) => type === badges.RECOMENDED
).sort(sortByPrice);

const saleItems = ITEMS.filter(({ type }) => type === badges.SALE).sort(
  sortByPriceDiff
);

refs.slider1.insertAdjacentHTML(
  "beforeend",
  sliderTemplate(newItems, "Новинки", itemsTemplate)
);

refs.slider2.insertAdjacentHTML(
  "beforeend",
  sliderTemplate(recommendedItems, "Рекомендации", itemsTemplate)
);

refs.slider3.insertAdjacentHTML(
  "beforeend",
  sliderTemplate(saleItems, "Распродажа", itemsTemplate)
);

refs.slider1.addEventListener("click", handleItemClick);
refs.slider2.addEventListener("click", handleItemClick);
refs.slider3.addEventListener("click", handleItemClick);

refs.slider4.insertAdjacentHTML(
  "beforeend",
  sliderTemplate(PROMOTIONS, "АКЦИИ", stockItemTemplate)
);

refs.buyingRightNow.insertAdjacentHTML(
  "beforeend",
  buyingRightNowTemplate(BUYING_RIGHT_NOW)
);

refs.bannerSlider.insertAdjacentHTML("beforeend", bannerTemplate(BANNER));

renderBasket();
