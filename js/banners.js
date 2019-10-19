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