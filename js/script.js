$(function(){
    /////////    NavBar
    $(`.header .nav-bar ul li a`).click(function(e){
        ///// Scroll To Element
        e.preventDefault();
        $(`html , body`).animate({
            scrollTop: $(`#` + $(this).data(`scroll`)).offset().top +1
        })
        /////// Add Active Class To Element and Remove from Others
        $(`.header .nav-bar ul li a`).removeClass(`active`)
        $(this).addClass(`active`)
    });
    /////////////// NavBar
    var menu = document.querySelector("#burger-menu");
    var ulMenu = document.getElementById("ul-menu");
    menu.addEventListener("click", () => {
        ulMenu.classList.toggle("drop");
    });

    /////// Landing
    $(".text .img").fadeIn(2000);
    
    $(window).scroll(function(){   
        ///////////// Navbar
        if($(window).scrollTop() > 20){
            $(`.header .nav-bar`).css({"backgroundColor":"#00000080"})
        }else{
            $(`.header .nav-bar`).css("backgroundColor","transparent")
        }
        /////////////Sync Navbar With Section
        $(`.block`).each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockID = $(this).attr(`id`);
                $(`.header li a`).removeClass(`active`)
                $(`.header li a[data-scroll = "`+ blockID +`"]`).addClass(`active`);
            }
        });

        /////// Landing
        $(".info ").fadeIn(3000);

        ///////////// About
        if($(window).scrollTop() > ($(`.about`).offset().top + $(`.about`).outerHeight() - $(window).innerHeight())){
            $(`.left-info`).show(2000);
            $(`.right-info`).fadeIn(2000);
        }

        //////////// projects
        if($(window).scrollTop() > ($(`.projects`).offset().top + $(`.projects`).outerHeight() - $(window).innerHeight())){
        $(`.projects .boxs :nth-child(1)`).fadeIn(1000)
        $(`.projects .boxs :nth-child(2)`).fadeIn(1000)
        $(`.projects .boxs :nth-child(3)`).fadeIn(1000)
        $(`.projects .boxs :nth-child(4)`).delay(1000).slideDown(1000)
        $(`.projects .boxs :nth-child(5)`).delay(1000).slideDown(1000)
        $(`.projects .boxs :nth-child(6)`).delay(1000).slideDown(1000)
        }

        if($(window).scrollTop() > ($(`.contact`).offset().top + $(`.contact`).outerHeight() - $(window).innerHeight())){
            $("form :nth-child(1)").show(1000);
            $("form :nth-child(2)").delay(1000).show(1000);
            $("form :nth-child(3)").delay(2000).show(1000);
            $("form :nth-child(4)").delay(3000).fadeIn(1000);
        }

    });

    //////////// OwlCarousel 
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dotsEach: true,
        autoplay:true,
        autoplaySpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            770:{
                items:2,
            },
        }
    })

    //////////// Form
    var attr =''
    $(`[placeholder]`).focus(function(){
        attr = $(this).attr('placeholder');
        $(this).attr('placeholder', '');    
        }).blur(function(){
            $(this).attr('placeholder', attr);
    });
});
