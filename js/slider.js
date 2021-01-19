export default (data, title, templator) => {
  if (!data) return "";

  const itemList = data.map((item) => templator(item)).join(" ");
  const showArrows = data.length > 4;

  return `
  <section class="container">
    <div class="new">
        <div class="row-top">
            <div class="block__header block__header__mobile">
                <div class="title">${title}</div>
                <div class="line"></div>
                <div class="row__button">
                    <div class="button__left button"><a href="#"><img src="images/other/Vector Smart left.png"
                                alt="left"></a>
                    </div>
                    <div class="button__right button"><a href="#"><img src="images/other/Vector Smart right.png"
                                alt="right">
                        </a> </div>
                </div> <a class="row__details" href="#">Все новинки</a>
            </div>
        </div>
    </div>
  
        ${
          showArrows
            ? `<div class="row-container-flex">
            <div class="arrow-right">
       <img class="arrow-right" src="images/other/vector left.png" alt="left">
       </div>
        `
            : ""
        }
        <div class="row-bottom">
        ${itemList}
        </div>
        ${
          showArrows
            ? `
             <div class="arrow-right">
              <img  src="images/other/vector right.png" alt="Vector right">
              </div>
              </div>
            `
            : ""
        }
        
    </div>
</section>
`;
};

// // ==========================================

// let i = 1;
// for (let li of carousel.querySelectorAll("li")) {
//   li.style.position = "relative";
//   li.insertAdjacentHTML(
//     "beforeend",
//     `<span style="position:absolute;left:0;top:0">${i}</span>`
//   );
//   i++;
// }

// /* конфигурация */
// let width = 130; // ширина картинки
// let count = 3; // видимое количество изображений

// let list = carousel.querySelector("ul");
// let listElems = carousel.querySelectorAll("li");

// let position = 0; // положение ленты прокрутки

// carousel.querySelector(".prev").onclick = function () {
//   // сдвиг влево
//   position += width * count;
//   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//   position = Math.min(position, 0);
//   list.style.marginLeft = position + "px";
// };

// carousel.querySelector(".next").onclick = function () {
//   // сдвиг вправо
//   position -= width * count;
//   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = position + "px";
// };
