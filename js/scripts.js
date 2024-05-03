/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

$(document).ready(function() {
    var dayNum = new Date().getDay() - 1;
    if (dayNum < 0) {
        dayNum = 6;
    }
    $('.opening-hours li').eq(dayNum).addClass('today');
});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(window).scroll(function(){;
    w = Math.floor( $(window).scrollTop() );
   $('.timeline-image').css( 'border', '7px solid #e9ecef' );
    if(w<=$('#timeline-1').offset().top){
         $('#timeline-1').css( 'border', '7px solid #ffc800' );
    }else if(w<=$('#timeline-2').offset().top){
         $('#timeline-2').css( 'border', '7px solid #ffc800' );   
    }else if(w<=$('#timeline-3').offset().top){
         $('#timeline-3').css( 'border', '7px solid #ffc800' );   
    }else if(w<=$('#timeline-4').offset().top){
         $('#timeline-4').css( 'border', '7px solid #ffc800' );
    }else if(w<=$('#timeline-5').offset().top){
         $('#timeline-5').css( 'border', '7px solid #ffc800' );   
    }else{
         $('#timeline-6').css( 'border', '7px solid #ffc800' );   
    }
}); 