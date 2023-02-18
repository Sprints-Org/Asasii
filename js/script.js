(function($) {
    feather.replace();

    $(".btn-mobile-nav").on("click", function () {
        $(".header").toggleClass("nav-open");
    });
    
    $('.product-images').children().children().on("click", function () {
        $(".main-img").attr('src', this.src);
    });

    $('#decrease').on("click", function(){
        if ($('#number').val() > 1) {
            $('#number').val(parseInt($('#number').val()) - 1);
        }
    });
    
    $('#increase').on("click", function(){
        $('#number').val(parseInt($('#number').val()) + 1);
    });

    $('.like').children().on("click", function(){
        $('.like').children().toggleClass("fa-regular").toggleClass("fa-solid");
    });
})(jQuery);