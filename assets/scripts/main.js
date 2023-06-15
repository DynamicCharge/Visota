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
            cssEase: 'linear',

            responsive: [
                {
                    breakpoint: 913,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        fade:false,
                        variableWidth: true
                    }
                },
            ]
        });
    });

        $('.tours-celebration__grid').each(function() {
            let $this = $(this);
            $this.slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                prevArrow: $this.parents('.tours-celebration__wrapper').find('.tours-reviews-prev'),
                nextArrow: $this.parents('.tours-celebration__wrapper').find('.tours-reviews-next'),

                responsive: [
                    {
                        breakpoint: 913,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: true,
                            arrows: false,
                        }
                    }
                ]
            });
        })

    $('.tours-list__filter-trigger').on('click', function(){
        if($(this).hasClass('_active')) {
            $(this).removeClass('_active');
            $('.tours-list__filters').removeClass('_active').slideUp(300);
        } else {
            $(this).addClass('_active');
            $('.tours-list__filters').addClass('_active').slideDown(300);
        }
    });

    $('[data-acc-trigger]').on('click', function(){
        let $this = $(this),
        $parent = $this.parent('[data-acc-parent]'),
        $list = $parent.children('[data-acc-list]');

        if($this.hasClass('_active')) {
            $this.removeClass('_active');
            $parent.removeClass('_active');
            $list.removeClass('_active').slideUp(300);
        } else {
            $this.addClass('_active');
            $parent.addClass('_active');
            $list.addClass('_active').slideDown(300);
        }
    });
    
    $('.tours-reviews__slider').each(function(){
        $(this).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
    
            prevArrow: $(this).parents('.tours-reviews').find('.tours-reviews-prev'),
            nextArrow: $(this).parents('.tours-reviews').find('.tours-reviews-next'),
    
            responsive: [
                {
                    breakpoint: 913,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        })
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