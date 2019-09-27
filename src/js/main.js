$(".carrousel").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  prevArrow:
    '<button class="slick-prev" aria-label="Previous" type="button" style=""><img src="../images/ic_chevron_left.png"/></button>',
  nextArrow:
    '<button class="slick-next" aria-label="Previous" type="button" style=""><img src="../images/ic_chevron_right.png"/></button>',
  autoplaySpeed: 2000
});

function dropMenu() {
  var dropDown = document.querySelector(".sub-menu__items");
  if (dropDown.style.display === "block") {
    dropDown.style.display = "none";
  } else {
    dropDown.style.display = "block";
  }
}

const apiUrl =
  "https://corebiz.myvtex.com/api/catalog_system/pub/products/search/tablete";

document.addEventListener("DOMContentLoaded", function(event) {
  getItem();
});

function getItem() {
  fetch(apiUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let putArticles = document.getElementsByClassName("buy-items");
      // let auxdata = data.slice(0,4)
      for (let item = 0; item < 4; item++) {
        let randomitem = parseInt(Math.random() * (data.length - 0) + 0);
        let htmlitem = `
        <article class="buy__product">
          <div class="buy__product__img">
            <div class="aspect-ratio-largest">
                <img src="${data[randomitem].imageUrl}" alt="">
            </div>
          </div>
          <div class="buy__product__info">
            <h3>${data[randomitem].productTitle}</h3>
            <span>${data[randomitem].productReference}</span>
            <div class="btn-buy">
              <a href="${data[randomitem].link}" alt="${data[randomitem].link}">Comprar</a>
            </div>
          </div>
        </article>
        `;
        putArticles[0].insertAdjacentHTML("beforeend", htmlitem);
      }
    });
}
