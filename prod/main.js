/* Variables */

const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", togleDesktopMenu);
menuHamIcon.addEventListener("click", togleMobileMenu);
menuCarritoIcon.addEventListener("click", togleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

/* Funciones de los menús */

function togleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function togleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");

  closeProductDetailAside();
}

function togleCarritoAside() {
  const isMobileClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

  if (!isMobileClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailCLosed =
    productDetailContainer.classList.contains("inactive");

  if (!isProductDetailCLosed) {
    productDetailContainer.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {

  desktopMenu.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

function displayInfoInProductDetail(event) {
  const newImgProductDetail = event.path[0].src;

  const productInfo = event.path[1].childNodes[1];

  const price = productInfo.querySelector("div p:first-child");
  const name = productInfo.querySelector("div p:nth-child(2)");
  
  const info = productInfo.querySelector('div p:nth-child(3)');

  const productDetailImg =
    productDetailContainer.querySelector("img:nth-child(2)");
  productDetailImg.setAttribute("src", newImgProductDetail);
  productDetailImg.setAttribute("alt", name.textContent);

  const productDetailPrice = productDetailContainer.querySelector(
    ".product-info p:nth-child(1)"
  );
  productDetailPrice.innerText = price.textContent;

  const productDetailName = productDetailContainer.querySelector(
    ".product-info p:nth-child(2)"
  );
  productDetailName.innerText = name.textContent;

  
}
 
/* Añadimos los productos */

const productList = [];

productList.push({
  name: "Sudadera Nike",
  price: 15,
  info: "Hola Mundo",
  image: "./Assets/cam.png",
});

productList.push({
  name: "Conjunto deportivo Nike",
  price: 40,
  image: "./Assets/cam1.avif",
});

productList.push({
  name: "Chamarra reflectante",
  price: 32,
  image: "./Assets/cam2.jpg",
});

productList.push({
  name: "Playeras Adidas",
  price: 10,
  image: "./Assets/cam3.webp",
});

productList.push({
  name: "Playeras Nike",
  price: 10,
  image: "./Assets/cam4.jpg",
});

productList.push({
  name: "Chamarra Adidas",
  price: 25,
  image: "./Assets/cam5.png",
});

productList.push({
  name: "Conjunto deportivo Adidas",
  price: 30,
  image: "./Assets/cam6.jpg",
});

productList.push({
  name: "Gorra Nike",
  price: 8,
  image: "./Assets/go3.jpg",
});

productList.push({
  name: "Gorra Adidas",
  price: 8,
  image: "./Assets/go1.webp",
});



function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = product.price + "$";

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./Assets/icons/bt_add_to_cart.svg");

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);
  }
}

renderProducts(productList);
