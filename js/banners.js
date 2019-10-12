var background = document.querySelector(".wrap-background-show-1");
var control1 = document.querySelector(".control-1");
var control2 = document.querySelector(".control-2");
var control3 = document.querySelector(".control-3");
var creambrulle = document.querySelector(".сream-brulee-show");
var chocolat = document.querySelector(".chocolat");
var plombir = document.querySelector(".plombir");
var current = document.querySelector(".banners-control-current");

control1.addEventListener("click", function (evt) {
    evt.preventDefault();
    background.classList.remove("wrap-background-show-2");
    background.classList.remove("wrap-background-show-3");
    background.classList.add("wrap-background-show-1");
    chocolat.classList.remove("chocolat-show");
    plombir.classList.remove("plombir-show");
    creambrulle.classList.add("сream-brulee-show");
    console.log(creambrulle.classList);
});

control2.addEventListener("click", function (evt) {
    evt.preventDefault();
    background.classList.remove("wrap-background-show-1");
    background.classList.remove("wrap-background-show-3");
    background.classList.add("wrap-background-show-2");
    creambrulle.classList.remove("сream-brulee-show");
    plombir.classList.remove("plombir-show");
    current.classList.remove("banners-control-current");
    creambrulle.classList.add("сream-brulee");
    chocolat.classList.add("chocolat-show");
    console.log(chocolat.classList);
});

control3.addEventListener("click", function (evt) {
    evt.preventDefault();
    background.classList.remove("wrap-background-show-1");
    background.classList.remove("wrap-background-show-2");
    background.classList.add("wrap-background-show-3");
    chocolat.classList.remove("chocolat-show");
    creambrulle.classList.remove("сream-brulee-show");
    current.classList.remove("banners-control-current");
    creambrulle.classList.add("сream-brulee");
    plombir.classList.add("plombir-show");
    console.log(plombir.classList);
});
