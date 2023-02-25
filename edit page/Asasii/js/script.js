(function($) {
    feather.replace();
    const ids = [...$('.product-information-header').children()].map(({id}) => id);
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
        $(this).toggleClass("fa-regular").toggleClass("fa-solid");
    });
    
    $('.product-information-header').children().on("click", function(){
        $('.product-information-header').children().css('color', '#9f9f9f');
        ids.forEach(element => {
            $(`.${element}`).css('display', 'none');
        });
        $(this).css('color', '#000000');
        $(`.${$(this).attr('id')}`).css('display', 'block');
    });
})(jQuery);