/*$(document).ready(function() {
    // Set the default timezone to Australia/Melbourne
    Intl.DateTimeFormat().resolvedOptions().timeZone = 'Australia/Melbourne';
    
    // Define the days of the week
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    
    // Get the current day of the week (0-6, where 0 is Sunday)
    let currentDayNum = new Date().getDay() - 1;
    if (currentDayNum < 0) {
      currentDayNum = 6;
    }
    
    // Loop through the days of the week and output the date for each day
    for (let x = 0; x <= 6; x++) {
      let difference;
      if (x < currentDayNum) {
        difference = (7 - currentDayNum) + x;
      } else {
        difference = x - currentDayNum;
      }
      $("#daysToDisplay").append(`\n<li> ${days[x]} ${new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate()}${new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate() === 1 || new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate() === 21 || new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate() === 31 ? 'st' : new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate() === 2 || new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate() === 22 ? 'nd' : new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate() === 3 || new Date(new Date().getTime() + (difference * 24 * 60 * 60 * 1000)).getDate() === 23 ? 'rd' : 'th'}<span class="pull-right">Bookings only</span></li>`);
    }
    
    $("#daysToDisplay").append(`\n<span style="color: white;font-size: small;font-weight: normal;">Last updated ${new Date().getDate()}${new Date().getDate() === 1 || new Date().getDate() === 21 || new Date().getDate() === 31 ? 'st' : new Date().getDate() === 2 || new Date().getDate() === 22 ? 'nd' : new Date().getDate() === 3 || new Date().getDate() === 23 ? 'rd' : 'th'} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][new Date().getMonth()]} ${new Date().getFullYear()}</span>`);

    var dayNum = new Date().getDay() - 1;
    if (dayNum < 0) {
        dayNum = 6;
    }
    $('.opening-hours li').eq(dayNum).addClass('today');
});*/

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
