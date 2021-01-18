export default (menu) => {
  const items = Object.values(menu);
  items.sort((a, b) => a.order - b.order);

  const mobileItems = items
    .map(
      ({ title }) => `
    <li class="burger__menu-item">
        <a class="burger__menu-link" href="#">${title}</a>
    </li>
  `
    )
    .join(" ");

  const desktopItems = items
    .map(({ title, submenu }) => {
      const submenuItems = submenu
        ? submenu
            .map(
              ({ title, url }) => `
        <li class="menu__drop-down">
            <a class="menu__link menu__link_sub link__drop-down" href="${url}">${title}</a>
        </li>
        `
            )
            .join(" ")
        : "";

      return `
        <li class="menu__item ${submenu ? "menu__img" : ""}">
          <a class="menu__link menu__link-first" href="#">${title}</a>
          <ul class="menu__sub">
              ${submenuItems}
          </ul>
        </li>
        `;
    })
    .join(" ");

  return `
    <div class="navigation">
            <div class="burger">
                <input type="checkbox" id="check-menu">
                <label class="burger__label-item" for="check-menu">
                    <div class="burger__line"></div><span>Меню</span>
                </label>
                <nav class="burger__menu">
                    <ul class="burger__body">
                        ${mobileItems}
                    </ul>
                </nav>
            </div>
            <div class="container">
                <div class="menu">
                    <nav class="menu__main">
                        <ul class="menu__body">
                            ${desktopItems}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    `;
};
