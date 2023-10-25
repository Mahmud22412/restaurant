let menu =document.querySelector('#menu-bars');
let navbar =document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
let section =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header .navbar a');

window.onscroll =() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
      let top =window.scrollY;
      let height =sec.offsetHeight;
      let offset =sec.offsetTop - 150;
      let id =sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        });
      }

    });

}
document.querySelector('#search-icon').onclick =() => {
    document.querySelector('#search-form').classList.toggle('active');  
}
document.querySelector('#close').onclick =() => {
    document.querySelector('#search-form').classList.remove('active');  
}



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    
   loop:true,
   breakpoints:{
   0:{
    slidesPerView:1,
   },
   640:{
    slidesPerView:2,
   },
   768:{
    slidesPerView:2,
   },
   1024:{
    slidesPerView:3,
   }

}
  });

  // window.onload=function(){
  //   document.querySelector('.pl').style.display="none";
  // }

  // document.addEventListener("DOMContentLoaded", function() {
  //   // Simulate delay
  //   setTimeout(function() {
  //     document.querySelector(".loader-container").style.display = "none";
  //     document.body.classList.add("loaded");
  //   }, 3000);
  // });


  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  function fadeOut(){
    setInterval(loader, 1000);
  }

  window.onload = fadeOut ;

  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: true,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();