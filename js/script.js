(() => {
    feather.replace()
})();

const btnNavEl = $(".btn-mobile-nav");
const headerEl = $(".header");

$(".btn-mobile-nav").on("click", function () {
    $(".header").toggleClass("nav-open");
});