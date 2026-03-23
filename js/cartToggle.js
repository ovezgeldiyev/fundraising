// cart start
var cart = document.getElementById("cart");
var cartBtns = document.querySelectorAll(".--mhcartBtn");
var cartClose = document.getElementById("cartClose");
var main = document.getElementById("main");

var body = document.body;

cartBtns.forEach((cartBtn) => {
  cartBtn.onclick = function () {
    cart.classList.add("active");
    body.classList.add("active");
    main.classList.add("active");
  };
});

cartClose.onclick = function () {
  cart.classList.remove("active");
  body.classList.remove("active");
  main.classList.remove("active");
};
window.addEventListener("click", function (event) {
  if (event.target == cart) {
    cart.classList.remove("active");
    body.classList.remove("active");
    main.classList.remove("active");
  }
});
// cart end
