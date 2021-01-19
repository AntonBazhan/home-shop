export default (menu) => {
  const items = Object.values(menu);
  items.sort((a, b) => a.order - b.order);

  const menuProductItems = items
    .map(
      ({
        title,
        url,
      }) => `<li class="menu__product_item menu__product_item-start">
  <a class="menu__product_link" href="${url}">${title}</a>
</li>`
    )
    .join(" ");

  return `<section class="menu__product">
  <div class="container">
      <ul class="menu__product_body">
         ${menuProductItems}
      </ul>
  </div>
</section>`;
};
