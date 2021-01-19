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
    <div class="row-bottom">
        ${
          showArrows
            ? `
       <img class="arrow-right" src="images/other/vector left.png" alt="left">
       
        `
            : ""
        }

        ${itemList}

        ${
          showArrows
            ? `
             
              <img class="arrow-right" src="images/other/vector right.png" alt="Vector right">
          
            `
            : ""
        }
    </div>
    </div>
</section>
`;
};
