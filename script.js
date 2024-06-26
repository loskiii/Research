$(document).ready(function() {

    //sticky header
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
          $(".header-area").addClass("sticky");
        } else {
          $(".header-area").removeClass("sticky");
        }
    
        // Update the active section in the header
        updateActiveSection();
      });
    
      $(".header ul li a").click(function(e) {
        e.preventDefault(); 
    
        var target = $(this).attr("href");
    
        if ($(target).hasClass("active-section")) {
          return; 
        }
    
        if (target === "#home") {
          $("html, body").animate(
            {
              scrollTop: 0 
            },
            500
          );
        } else {
          var offset = $(target).offset().top - 40; 
    
          $("html, body").animate(
            {
              scrollTop: offset
            },
            500
          );
        }
    
        $(".header ul li a").removeClass("active");
        $(this).addClass("active");
      });
    
  
      //Initial content revealing js
      ScrollReveal({
        distance: "100px",
        duration: 2000,
        delay: 200
      });
    
      ScrollReveal().reveal(".header a, .profile-photo, .about-content, .education", {
        origin: "left"
      });
      ScrollReveal().reveal(".header ul, .profile-text, .about-skills, .internship", {
        origin: "right"
      });
      ScrollReveal().reveal(".project-title, .contact-title", {
        origin: "top"
      });
      ScrollReveal().reveal(".projects, .contact", {
        origin: "bottom"
      });
  
    //contact form to excel sheet
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec';
    const form = document.forms['submitToGoogleSheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })
      
    });
    
    function updateActiveSection() {
      var scrollPosition = $(window).scrollTop();
    
      // Checking if scroll position is at the top of the page
      if (scrollPosition === 0) {
        $(".header ul li a").removeClass("active");
        $(".header ul li a[href='#home']").addClass("active");
        return;
      }
    
      // Iterate through each section and update the active class in the header
      $("section").each(function() {
        var target = $(this).attr("id");
        var offset = $(this).offset().top;
        var height = $(this).outerHeight();
    
        if (
          scrollPosition >= offset - 40 &&
          scrollPosition < offset + height - 40
        ) {
          $(".header ul li a").removeClass("active");
          $(".header ul li a[href='#" + target + "']").addClass("active");
        }
      });
    }
    
// script.js
dragElement(document.getElementById("navbar"));

function dragElement(element) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(element.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(element.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    element.onmousedown = dragMouseDown;
  }


}


// Get all the product cards
const productCards = document.querySelectorAll('.product-card');

// Create an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the 'animate' class to the card when it enters the viewport
      entry.target.classList.add('animate');
    } else {
      // Remove the 'animate' class when the card exits the viewport
      entry.target.classList.remove('animate');
    }
  });
}, {
  rootMargin: '0px',
  threshold: 0.5, // Trigger the animation when the card is 50% visible
});

// Observe each product card
productCards.forEach((card) => {
  observer.observe(card);
});


// Scrolling effects
// Get the supervision section element
// const supervisionSection = document.querySelector('.supervision-section');

// Get all the supervision card elements
// const supervisionCards = document.querySelectorAll('.supervision-card');

// Get the vertical text element
// const verticalText = document.querySelector('.vertical-text');

// Add an event listener to the window's scroll event
// window.addEventListener('scroll', () => {
  // Get the current scroll position
  // const scrollPosition = window.pageYOffset;

  // Calculate the distance from the top of the section
  // const sectionTop = supervisionSection.offsetTop;
  // const sectionHeight = supervisionSection.offsetHeight;

  // Check if the section is in view
  // if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
    // Apply the scrolling effect
//     supervisionCards.forEach((card, index) => {
//       card.style.transform = `translateY(${(scrollPosition - sectionTop) * 0.2 * (index + 1)}px)`;
//     });

//     verticalText.style.transform = `translateY(${(scrollPosition - sectionTop) * 0.1}px)`;
//   }
// });


