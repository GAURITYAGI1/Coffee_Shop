document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling for Navbar Links
  const navbarLinks = document.querySelectorAll("nav ul li a");
  
  navbarLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); 
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  
    // Handle Form Submission
    const form = document.querySelector("footer form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.querySelector("input[name='name']").value;
      const email = form.querySelector("input[name='mail']").value;
      
      if (name && email) {
        // Simulate form submission
        alert(`Thank you, ${name}! We have received your subscription request.`);
        

  
        // Reset the form
        form.reset();
      } else {
        alert("Please fill out both fields.");
      }
    });

    // nav bar-toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-item ul"); // Updated selector
    
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  
    // Close the nav menu when clicking outside of it
    document.addEventListener("click", function (event) {
      if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("show");
      }
    });

        
  });
  