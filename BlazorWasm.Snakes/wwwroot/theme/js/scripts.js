function initPhotogam() {
    "use strict";
    //   loader ------------------
    function firstLoad() {
        $(".ml_bg-item").addClass("mgl_vis");
        TweenMax.to(".ml-mask", 1.7, {
            xPercent: 100,
            repeat: 0,
            yoyo: false,
            repeatDelay: 0.5,
            ease: Linear.easeNone,
            onComplete: function () {
                $(".ml_bg-item , .ml-wrap img").addClass("mgl_clos");
                $(".main-loader").delay(500).fadeOut(1300);
            }
        });
    }
    firstLoad();
    //   Background image ------------------
    var a = $(".bg");
    a.each(function (a) {
        if ($(this).attr("data-bg")) $(this).css("background-image", "url(" + $(this).data("bg") + ")");
    });
    //   Isotope------------------
    function n() {
        if ($(".gallery-items").length) {
            var $grid = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three",
                transformsEnabled: true,
                transitionDuration: "700ms",
            });
            $grid.imagesLoaded(function () {
                $grid.isotope("layout");
            });
            $(".gallery-filters").on("click", "a", function (a) {
                a.preventDefault();
                $("html, body").animate({
                    scrollTop: 0
                }, 1200, function () {
                    $grid.isotope({
                        filter: b
                    });
                    $(".filter-container").removeClass("vis-filter");
                });
                var b = $(this).attr("data-filter");
                $(".gallery-filters a").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
            });
            $(".gallery-items").isotope("on", "layoutComplete", function (a, b) {
                var b = a.length;
                $(".num-album").html("0" + b);
            });
            var b = $(".gallery-item").length;
            $(".all-album , .num-album").html("0" + b);
        }
        $(".gallery-item").each(function (i) {
            $(this).find(".pr_num").text("0" + ++i);
        });
    }
    n();
    function inithorizontalPortfolio() {
        if ($("#portfolio_horizontal_container").length) {
            var d = $("#portfolio_horizontal_container");
            d.imagesLoaded(function (a, b, e) {
                var f = {
                    itemSelector: ".gallery-item",
                    layoutMode: "packery",
                    packery: {
                        isHorizontal: true,
                        gutter: 0
                    },
                    resizable: true,
                    transformsEnabled: true,
                    transitionDuration: "1000ms"
                };
                var g = {
                    itemSelector: ".gallery-item",
                    layoutMode: "packery",
                    packery: {
                        isHorizontal: false,
                        gutter: 0
                    },
                    resizable: true,
                    transformsEnabled: true,
                    transitionDuration: "1000ms"
                };
                if ($(window).width() < 1068) {
                    d.isotope(g);
                    d.isotope("layout");
                    d.removeAttr('style');
                    $(".horizontal-grid-wrap").getNiceScroll().remove();
                } else {
                    d.isotope(f);
                    d.isotope("layout");
                    $(".horizontal-grid-wrap").niceScroll({
                        cursorwidth: "0",
                        cursorborder: "none",
                        cursorborderradius: "0px",
                        touchbehavior: true,
                        autohidemode: false,
                        cursorcolor: "#666",
                        bouncescroll: false,
                        scrollspeed: 210,
                        mousescrollstep: 90,
                        hwacceleration: true,
                        grabcursorenabled: true,
                        horizrailenabled: true,
                        preservenativescrolling: true,
                        cursordragontouch: false,
                        railpadding: {
                            top: -20,
                            right: "0",
                            left: '0',
                            bottom: 0
                        }
                    });
                }
                $(".gallery-filters").on("click", "a", function (a) {
                    a.preventDefault();
                    var b = $(this).attr("data-filter");
                    if ($(window).width() > 1068) {
                        $('.horizontal-grid-wrap').stop(true, true).animate({
                            scrollLeft: 1
                        }, 1200, function () {
                            d.isotope({
                                filter: b
                            });
                            $(".filter-container").removeClass("vis-filter");
                        });
                    } else {
                        $('.horizontal-grid-wrap').stop(true, true).animate({
                            scrollTop: 0
                        }, 1200, function () {
                            d.isotope({
                                filter: b
                            });
                            $(".filter-container").removeClass("vis-filter");
                        });
                    }
                    $(".gallery-filters a").removeClass("gallery-filter-active");
                    $(this).addClass("gallery-filter-active");
                });
                d.isotope("on", "layoutComplete", function (a, b) {
                    var b = a.length,
                        numalb = $(".num-album");
                    numalb.html("0" + b);
                });
                var j = $(".gallery-item").length;
                $(".all-album , .num-album").html("0" + j);
            });
        }
        $(".gallery-item").each(function (i) {
            $(this).find(".pr_num").text("0" + ++i);
        });
    }
    inithorizontalPortfolio();
    var sgite = $(".sg_items .gallery-item").length;
    $(".single-grid_counter span").text("0" + sgite);

    function postGrid() {
        if ($(".post-items").length) {
            var $grid2 = $(".post-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".post-item",
            });
            $grid2.imagesLoaded(function () {
                $grid2.isotope("layout");
            });
        }
    }
    postGrid();

    function csselem() {
        $(".anim-fw").css({
            height: $(".fw-carousel_hight").outerHeight(true)
        });
        $(".fslider-fw-item").css({
            height: $(".slider-fw").outerHeight(true)
        });
        $(".first-slide_wrap").css({
            height: $(".fw-carousel_hight").outerHeight(true)
        });
        $(".height-emulator").css({
            height: $(".main-footer").outerHeight(true)
        });
    }
    csselem();
    //   sliders ------------------
    if ($(".slider-fw").length > 0) {
        $(".slider-fw.thumb-contr .swiper-slide .bg").each(function () {
            var ccasdc3 = $(this).attr("data-bg");
            $("<div class='thumb-img'><img src='" + ccasdc3 + "'></div>").appendTo(".thumbnail-wrap");
        });
        $(".thumb-img").on('click', function () {
            if ($(window).width() > 768) {
                j32.slideTo($(this).index(), 500);
                hideThumbnails();
            }
        });
        var j32 = new Swiper(".slider-fw .swiper-container", {
            preloadImages: false,
            loop: true,
            grabCursor: true,
            slidesPerView: "auto",
            centeredSlides: true,
            speed: 1400,
            spaceBetween: 0,
            effect: "slide",
            mousewheel: true,
            parallax: true,
            pagination: {
                el: '.hero-slider-wrap_pagination',
                clickable: true,

            },
            autoplay: {
                delay:  3500,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.ccsw-next',
                prevEl: '.ccsw-prev',
            }
        });
        var totalSlides = $(".slider-fw  .swiper-slide:not(.swiper-slide-duplicate) .bg").length;
        $('.total').html('0' + totalSlides);
        j32.on('slideChange', function () {
            var csli = j32.realIndex + 1,
                curnum = $('.current');
            curnum.html('0' + csli);
        });

        j32.on("slideChangeTransitionStart", function () {
            $(".slide-progress").css({
                height: 0,
                transition: "height 0s"
            });
        });
        j32.on("slideChangeTransitionEnd", function () {

            $(".slide-progress").css({
                height: "100%",
                transition: "height 2000ms"
            });
        });
    }
    if ($(".testimonilas-carousel").length > 0) {
        var ms1 = new Swiper(".testimonilas-carousel .swiper-container", {
            loop: true,
            grabCursor: true,
            autoHeight: false,
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 1400,
            navigation: {
                nextEl: '.hsc-next',
                prevEl: '.hsc-prev',
            },
            pagination: {
                el: '.hero-slider-pag',
                clickable: true,
            },
            breakpoints: {
                1064: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            }
        });
        var totalSlides2 = $(".testimonilas-carousel  .swiper-slide:not(.swiper-slide-duplicate)").length;
        $('.ts_total').html('0' + totalSlides2);
        ms1.on('slideChange', function () {
            var csli2 = ms1.realIndex + 1,
                curnum2 = $('.ts_current');
            curnum2.html('0' + csli2);
        });
    }
    if ($(".init-mr-top").length > 0) {
        var ms5 = new Swiper(".init-mr-top .swiper-container", {
            grabCursor: true,
            autoHeight: false,
            centeredSlides: false,
            slidesPerView: "auto",
            spaceBetween: 10,
            speed: 26000,
            mousewheel: false,
            freeMode: true,
            allowTouchMove: false,
            disableOnInteraction: true,
            autoplay: {
                delay: 1,
            },
            loop: true,
        });
    }
    if ($(".init-mr-bottom").length > 0) {
        var ms6 = new Swiper(".init-mr-bottom .swiper-container", {
            grabCursor: true,
            autoHeight: false,
            centeredSlides: false,
            slidesPerView: "auto",
            spaceBetween: 10,
            speed: 26000,
            mousewheel: false,
            freeMode: true,
            autoplay: {
                delay: 1,
                reverseDirection: true
            },
            allowTouchMove: false,
            disableOnInteraction: true,
            loop: true,
        });
    }
    function setUpCarouselSlider() {
        if ($(".main-carousel").length > 0) {
            var totalSlides2 = $(".main-carousel  .swiper-slide:not(.swiper-slide-duplicate) ").length;
            $('.total').html('0' + totalSlides2);
            var j2 = new Swiper(".main-carousel .swiper-container", {
                preloadImages: false,
                loop: true,
                centeredSlides: true,
                freeMode: false,
                slidesPerView: 3,
                spaceBetween: 20,
                grabCursor: true,
                mousewheel: true,
                parallax: true,
                speed: 1400,
                effect: "slide",
                navigation: {
                    nextEl: '.ccsw-next',
                    prevEl: '.ccsw-prev',
                },
                pagination: {
                    el: '.hero-slider-pag',
                    clickable: true,
                },
                autoplay: {
                    delay:  3500,
                    disableOnInteraction: false
                },
                breakpoints: {
                    1064: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }
            });
            j2.on('slideChange', function () {
                var csli3 = j2.realIndex + 1,
                    curnum = $('.current');
                curnum.html('0' + csli3);
            });
            j2.on("slideChangeTransitionStart", function () {
                $(".slide-progress").css({
                    height: 0,
                    transition: "height 0s"
                });
            });
            j2.on("slideChangeTransitionEnd", function () {

                $(".slide-progress").css({
                    height: "100%",
                    transition: "height 2000ms"
                });
            });
        }
    }
    setUpCarouselSlider();
    if ($(".single-slider").length > 0) {
        var j2 = new Swiper(".single-slider .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoHeight: true,
            grabCursor: true,
            mousewheel: false,
            pagination: {
                el: '.ss-slider-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.hsc-next',
                prevEl: '.hsc-prev',
            },
        });
    }
    if ($(".fw-carousel2").length > 0) {
        var j6 = new Swiper(".fw-carousel2 .swiper-container", {
            preloadImages: true,
            slidesPerView: 'auto',
            freeMode: false,
            spaceBetween: 30,
            direction: 'horizontal',
            loop: true,
            grabCursor: true,
            mousewheel: true,
            centeredSlides: false,
            autoHeight: false,
            speed: 1400,
            navigation: {
                nextEl: '.ccsw-next',
                prevEl: '.ccsw-prev',
            },
            pagination: {
                el: '.hero-slider-wrap_pagination',
                clickable: true,
            },
            breakpoints: {
                1068: {
                    direction: 'vertical',
                    freeMode: true,
                    loop: false,
					spaceBetween: 10,
                },
            },
            on: {
                init: function () {
                    var totalSlides2 = $(".fw-carousel2 .swiper-slide:not(.swiper-slide-duplicate) img").length;
                    $('.total').html('0' + totalSlides2);
                }
            }
        });

        j6.on('slideChange', function () {
            var csli2 = j6.realIndex + 1,
                curnum2 = $('.current');
            curnum2.html('0' + csli2);
        });
    }
    if ($(".clients-carousel").length > 0) {
        var ms2 = new Swiper(".clients-carousel .swiper-container", {
            loop: true,
            grabCursor: true,
            autoHeight: false,
            centeredSlides: false,
            slidesPerView: 4,
            spaceBetween: 0,
            speed: 1400,
            mousewheel: false,
            navigation: {
                nextEl: '.serv-carousel-next',
                prevEl: '.serv-carousel-prev',
            },
            breakpoints: {
                1064: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
            }
        });
    }
    function setUpMainCarousel() {
        if ($(".fw-carousel").length > 0) {
            $('.main-carousel .swiper-wrapper').addClass('no-horizontal-slider');
            if ($(window).width() >= 1068 && j5 == undefined) {
                var j5 = new Swiper(".fw-carousel .swiper-container", {
                    preloadImages: true,
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    loop: true,
                    grabCursor: true,
                    mousewheel: true,
                    centeredSlides: false,
                    autoHeight: false,
                    speed: 1400,
                    navigation: {
                        nextEl: '.ccsw-next',
                        prevEl: '.ccsw-prev',
                    },
                    pagination: {
                        el: '.hero-slider-wrap_pagination',
                        clickable: true,
                    },
                    on: {
                        init: function () {
                            var totalSlides = $(".fw-carousel .swiper-slide:not(.swiper-slide-duplicate) img").length;
                            $('.total').html('0' + totalSlides);

                        },
                        resize: function () {
                            if ($(window).width() < 1068) {
                                j2.update();
                            }
                        },
                    }
                });
                var totalSlides = $(".fw-carousel  .swiper-slide:not(.swiper-slide-duplicate) img").length;
                $('.total').html('0' + totalSlides);
                j5.on('slideChange', function () {
                    var csli = j5.realIndex + 1,
                        curnum = $('.current');
                    curnum.html('0' + csli);
                });
                $(".fw-carousel.thumb-contr .swiper-slide:not(.swiper-slide-duplicate) img").each(function () {
                    var ccasdc = $(this).attr("src");
                    $("<div class='thumb-img'><img src='" + ccasdc + "'></div>").appendTo(".thumbnail-wrap");
                });
                $(".thumb-img").on('click', function () {
                    if ($(window).width() > 768) {
                        j5.slideTo($(this).index(), 500);
                        hideThumbnails();
                    }
                });
            }
            if ($(window).width() < 1068 && j5 !== undefined) {
                j5.destroy();
                j2 = undefined;
                $('.fw-carousel .swiper-wrapper').removeAttr('style').addClass('no-horizontal-slider');
                $('.swiper-slide').removeAttr('style');
            }
        }
    }
    setUpMainCarousel();
    $(".photo-info-btn").on("click", function () {
        $(".show-info_act").toggleClass("vis-phot_det");
    });
    //   thumnails------------------
    var thumbcont = $(".thumbnail-container"),
        thumbItrm = $(".thumb-img"),
        stbtn = $(".show-thumbanils");
    function showThumbnails() {
        thumbcont.fadeIn(500);
        stbtn.removeClass("unvisthum");
        hidedetails();
        setTimeout(function () {
            $(".thumb-img").addClass("visthumbnails");
        }, 600);
    }
    function hideThumbnails() {
        $(".thumb-img").removeClass("visthumbnails");
        setTimeout(function () {
            thumbcont.fadeOut(500);
        }, 300);
        stbtn.addClass("unvisthum");
    }
    stbtn.on("click", function () {
        if ($(this).hasClass("unvisthum")) showThumbnails();
        else hideThumbnails();
    });
    //   details------------------
    var dwc = $(".details-wrap_center"),
        deto = $(".details_overlay"),
        dwcc = $(".details-wrap_center_container"),
        sdb = $(".show-details_btn"),
        anv = $(".animdet");
    function showdetails() {
        dwc.fadeIn(1);
        deto.fadeIn(500);
        sdb.removeClass("unvidet");
        dwcc.addClass("vis_dec-container");
        hideThumbnails();
    }
    function hidedetails() {
        dwcc.removeClass("vis_dec-container");
        setTimeout(function () {
            deto.fadeOut(400);
            dwc.delay(400).fadeOut(1);
        }, 300);
        sdb.addClass("unvidet");
    }
    sdb.on("click", function () {
        if ($(this).hasClass("unvidet")) showdetails();
        else hidedetails();
    });
    $(".cl_det").on("click", function () {
        hidedetails();
    });
    $.fn.duplicate = function (a, b) {
        var c = [];
        for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
        return this.pushStack(c);
    };
    $("<div class='filt-line'></div>").duplicate(4).appendTo(".filter-btn_container");
    var sevcount = $(".scr_sec").length;
    $(".sn_num_total").html('0' + sevcount);
    //   appear------------------
    $(".stats").appear(function () {
        $(".num").countTo();
    });
    $(".skillbar-box").appear(function () {
        $(this).find("div.skillbar-bg").each(function () {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
    if ($(".fixed-bottom-container").length < 1) {
        $(".main-content").addClass("no_fixpan");
    } else {
        $(".main-content").removeClass("no_fixpan");
    }
    //   lightGallery------------------
    $(".image-popup , .single-popup-image").lightGallery({
        selector: "this",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        counter: false
    });
    var o = $(".lightgallery"),
        p = o.data("looped");
    o.lightGallery({
        selector: ".lightgallery a.popup-image , .lightgallery  a.popgal",
        cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)",
        download: false,
        loop: p,
        counter: false
    });
    $('#html5-videos').lightGallery({
        selector: 'this',
        counter: false,
        download: false,
        zoom: false
    });

    $(".dynamic-gal").on('click', function () {
        var dynamicgal = eval($(this).attr("data-dynamicPath"));
        $(this).lightGallery({
            dynamic: true,
            dynamicEl: dynamicgal,
            download: false,
            loop: true,
            counter: false
        });

    });
    var vid_src = $(".popup_video").data("videolink");
    $(".lg-video-object").find("source").attr("src", vid_src);
    //   filters------------------	
    $(".blog-btn").on("click", function () {
        $(this).parent(".blog-btn-filter").find(".blog-filter-wrap").slideToggle(500);
        return false;
    });
    // filters / details------------------
    var gfw = $(".gallery-filters-wrap"),
        gfo = $(".gallery-filters-overlay"),
        filbtn = $(".filter-btn"),
        gfa = $(".gallery-filters a"),
        gfwcf = $(".gallery-filters-wrap .count-folio");
    function showFilters() {
        gfw.fadeIn(1);
        filbtn.removeClass("hid-filter");
        gfo.addClass("vis_overlay");
        setTimeout(function () {
            gfa.each(function (a) {
                var boi = $(this);
                setTimeout(function () {
                    TweenMax.to(boi, 0.5, {
                        force3D: true,
                        ease: Power2.easeOut,
                        opacity: "1",
                        top: "0",
                        onComplete: function () {
                            TweenMax.to(gfwcf, 1.0, {
                                force3D: false,
                                opacity: "1",

                            });
                        }
                    });
                }, 130 * a);
            });
        }, 400);
    }
    function hideFilters() {
        filbtn.addClass("hid-filter");
        gfo.removeClass("vis_overlay");
        TweenMax.to(gfa, 0.5, {
            force3D: true,
            ease: Power2.easeOut,
            opacity: "0",
            top: "10px"
        });
        TweenMax.to(gfwcf, 0.5, {
            force3D: false,
            opacity: "0",

        });
        setTimeout(function () {
            gfw.fadeOut(1);
        }, 200);
    }
    filbtn.on("click", function () {
        if ($(this).hasClass("hid-filter")) showFilters();
        else hideFilters();
    });
    gfo.on("click", function () {
        hideFilters();
    });
    $(".gallery-filters a").on("click", function () {
        if ($(window).width() < 768) {
            $(".hid-filter").delay(1000).slideUp(300);
        }
    });
    var textTitle = $(".hero-title h2").text();
    $(".dec-title span").text(textTitle);
    // Share   ------------------
    $(".share-container").share({
        networks: ['facebook', 'pinterest', 'twitter', 'linkedin']
    });
    function hideShare() {
        $(".show-share").addClass("isShare");

        setTimeout(function () {
            $(".share-wrapper").removeClass("visshare");
        }, 400);
        $(".share-container a").each(function (a) {
            var b = $(this);
            setTimeout(function () {
                b.animate({
                    opacity: 0
                }, 500);
            }, 120 * a);
        });
    }
    function showShare() {
        $(".show-share").removeClass("isShare");
        $(".share-wrapper").addClass("visshare");
        setTimeout(function () {
            $(".share-container a").each(function (a) {
                var b = $(this);
                setTimeout(function () {
                    b.animate({
                        opacity: 1
                    }, 500);
                }, 120 * a);
            });
        }, 400);
    }
    $(".show-share").on("click", function (a) {
        a.preventDefault();
        if ($(".show-share").hasClass("isShare")) showShare();
        else hideShare();
    });
    //   Video------------------	
    if ($(".video-holder-wrap").length > 0) {
        function videoint() {
            var w = $(".background-vimeo").data("vim"),
                bvc = $(".background-vimeo"),
                bvmc = $(".media-container"),
                bvfc = $(".background-vimeo iframe "),
                vch = $(".video-container");
            bvc.append('<iframe src="//player.vimeo.com/video/' + w + '?background=1"  frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>');
            $(".video-holder").height(bvmc.height());
            if ($(window).width() > 1024) {
                if ($(".video-holder").length > 0)
                    if (bvmc.height() / 9 * 16 > bvmc.width()) {
                        bvfc.height(bvmc.height()).width(bvmc.height() / 9 * 16);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            top: "-75px",
                            "margin-top": "0px"
                        });
                    } else {
                        bvfc.width($(window).width()).height($(window).width() / 16 * 9);
                        bvfc.css({
                            "margin-left": -1 * $("iframe").width() / 2 + "px",
                            "margin-top": -1 * $("iframe").height() / 2 + "px",
                            top: "50%"
                        });
                    }
            } else if ($(window).width() < 760) {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            } else {
                $(".video-holder").height(bvmc.height());
                bvfc.height(bvmc.height());
            }
            vch.css("width", $(window).width() + "px");
            vch.css("height", Number(720 / 1280 * $(window).width()) + "px");
            if (vch.height() < $(window).height()) {
                vch.css("height", $(window).height() + "px");
                vch.css("width", Number(1280 / 720 * $(window).height()) + "px");
            }
        }
        videoint();
    }
    //   scroll------------------
    $(".scroll-init ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 90,
        threshold: 120,
        speed: 1200,
        currentClass: "act-sec"
    });
    var $window = $(window);
    $window.on("scroll", function (a) {
        var a = $(document).height();
        var b = $(window).height();
        var c = $(window).scrollTop();
        var d = c / (a - b) * 100;
        $(".progress-bar").css({
            height: d + "%"
        });
        if ($(this).scrollTop() > 300) $(".to-top").addClass("vistotop");
        else $(".to-top").removeClass("vistotop");
    });
    if ($(".vertical-portfolio_wrap ").length > 0) {
        if ($(window).width() < 1068) {
            $(".to-top-btn").fadeOut(1)
        }
    }
    $(".custom-scroll-link").on("click", function () {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
    $(".to-top").on("click", function (a) {
        a.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(".acc-item-header").on("click", function () {
        $(this).parents(".acc-item").find(".acc-item-content").slideToggle(500);
        $(this).toggleClass("actdetlink");
    });
    //   Contact form------------------
    $("#contactform").submit(function () {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function () {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function (a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function () {
        $("#message").slideUp(1500);
    });
    $(".mob_filter-btn").on("click", function () {
        $(".inline-filters-wrap .gallery-filters").fadeToggle(400);

    });
    //   header js------------------
    $(".nav-button-wrap").on("click", function () {
        $(".main-menu").toggleClass("vismobmenu");
        $(".sb-overlay").fadeToggle(400);

    });
    function mobMenuInit() {
        var ww = $(window).width();
        if (ww < 1064) {
            $(".menusb").remove();
            $(".main-menu").removeClass("nav-holder");
            $(".main-menu nav").clone().addClass("menusb").appendTo(".main-menu");
            $(".menusb").menu();
        } else {
            $(".menusb").remove();
            $(".main-menu").addClass("nav-holder");
        }
    }
    mobMenuInit()
    $("#menu").menu();
    $window.on("resize", function () {
        csselem();
        setUpCarouselSlider();
        mobMenuInit();
    });
   $("<div class='close_sb'><i class='far fa-times'></i></div>").appendTo(".sidebar-wrap");	
    var sbo = $(".sb-overlay"),
		sbci = $(".sb-overlay , .close_sb"),
        sb = $(".sidebar-wrap"),
        sbb = $(".sb-button"),
        sbw = $(".sb-widget-wrap");
    function showSb() {
        $(".main-menu").removeClass("vismobmenu");
        sbo.fadeIn(500);
        sb.addClass("vis-sb");
        sbb.removeClass("c_sb").addClass("r_sbb");
        setTimeout(function () {
            sbw.each(function (ab) {
                var bp3 = $(this);
                setTimeout(function () {
                    TweenMax.to(bp3, 0.9, {
                        force3D: true,
                        y: "0",
                        opacity: "1",
                        ease: Power2.easeOut
                    });
                }, 110 * ab);
            });
        }, 500);
    }
    function hideSb() {
        sb.removeClass("vis-sb");
        sbb.addClass("c_sb").removeClass("r_sbb");
        setTimeout(function () {
            TweenMax.to(sbw, 0.9, {
                force3D: true,
                y: "50px",
                opacity: "0",
                ease: Power2.easeOut
            });
        }, 300);
        sbo.fadeOut(500);
    }
    sbb.on("click", function () {
        if ($(this).hasClass("c_sb")) showSb();
        else hideSb();
    });
    sbci.on("click", function () {
        hideSb();
        $(".main-menu").removeClass("vismobmenu");
    });
}
     //   mailchimp------------------
 $("#subscribe").ajaxChimp({
    language: "eng",
    url: "https://gmail.us1.list-manage.com/subscribe/post?u=1fe818378d5c129b210719d80&amp;id=a2792f681b"
});
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
//$(window).on("load", function () {
//    initPhotogam();
//});

initPhotogam();