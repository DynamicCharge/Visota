$(document).ready(function(){

    $('.--initiate__title').each(function() {
        $dots = $(this).parent().find('.tours-title__dots');
        $(this).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            appendDots: $dots,
    
            fade: true,
            cssEase: 'linear'
        });
    });
    
    $('.tours-reviews__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,

        prevArrow: '.tours-reviews-prev',
        nextArrow: '.tours-reviews-next',
    });

    $('[data-tab]').on('click', function(){
        let $this = $(this),
        $parent = $this.parents('[data-tab-wrapper]'),
        data = $this.attr('data-tab'),
        $content = $parent.find('[data-content="' + data + '"]');
        console.log($content);

        let $sublist = $this.children('.main-services__item__sublist'),
        html = $content.html();

        if($(window).innerWidth() <= 820) {
            if($this.hasClass('_active')) {
                $this.removeClass('_active');
                $sublist.html(html).slideUp(300).removeClass('_active');
            } else {
                $('[data-tab]').removeClass('_active');
                $('.main-services__item__sublist').slideUp(300).removeClass('_active');
                $sublist.html(html).slideDown(300).addClass('_active');
                $this.addClass('_active');
            }

        } else {
            $('[data-tab]').removeClass('_active');
            $.when(
                $('[data-content]').removeClass('_active').fadeOut(300)
            ).done(function() {
                $content.addClass('_active').fadeIn(300);
            });
            $this.addClass('_active');
        }
    });
});