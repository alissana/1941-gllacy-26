if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

var background = document.querySelector(".js-background");
var controlsSlide = document.querySelectorAll(".js-controlSlide");

controlsSlide.forEach(function(item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        var type = this.dataset.type;

        document.querySelector(".banners-control-current").classList.remove("banners-control-current");
        this.classList.add('banners-control-current');

        background.classList.remove("background-сream-brulee", "background-chocolat", "background-plombir");
        background.classList.add("background-" + type);

        document.querySelector(".js-bannerItem.isActiveBanner").classList.remove("isActiveBanner");
        document.querySelector("#" + type).classList.add("isActiveBanner");
    });
});

/*
control1.addEventListener("click", function (evt) {
    evt.preventDefault();
    background.classList.remove("");
    background.classList.remove("");
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
*/