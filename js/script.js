(function($) {
    feather.replace();
    $(".btn-mobile-nav").on("click", function () {
        $(".header").toggleClass("nav-open");
    });
    
    [...$('.small-product-images img')].forEach(element => {
        element.addEventListener("click", function () {
            $('.large-img')[0].src = element.src;
        });
    });
    
    $('#decrease')[0].addEventListener("click", function(){
        if ($('#number').val() > 1) {
            $('#number').val(parseInt($('#number').val()) - 1);
        }
    });
    
    $('#increase')[0].addEventListener("click", function(){
        $('#number').val(parseInt($('#number').val()) + 1);
    });
})(jQuery);