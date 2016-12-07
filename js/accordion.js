$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        smartSpeed: 300,
        fluidSpeed: 300,
        autoplaySpeed: 300,
        nav: true,
        lazyLoad: true
    });

    let acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function () {
            if (!this.classList.contains("active")) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 50
                }, 500);
            }
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
});