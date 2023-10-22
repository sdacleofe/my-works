// splide script
document.addEventListener("DOMContentLoaded", function () {
    new Splide("#thumbnail-carousel", {
        contain: true,
        heightRatio: 0.08,
        type: "loop",
        perPage: 4,
        gap: 30,
        pagination: false,
        arrows: false,
        autoScroll: {
            speed: -0.8,
        },
    }).mount(window.splide.Extensions);
});

// change theme script
document.addEventListener("DOMContentLoaded", () => {
    const htmlTag = document.documentElement;
    const toggleButton = document.getElementById("toggleButton");
    const currentTheme = localStorage.getItem("theme");
  
    // Function to toggle the theme and icon
    const toggleThemeAndIcon = () => {
      if (htmlTag.getAttribute("data-bs-theme") === "dark") {
        htmlTag.setAttribute("data-bs-theme", "light");
        toggleButton.className = "bi bi-sunrise"; // Reset the class to sunrise icon
        localStorage.setItem("theme", "light");
      } else {
        htmlTag.setAttribute("data-bs-theme", "dark");
        toggleButton.className = "bi bi-sunset"; // Change the class to sunset icon
        localStorage.setItem("theme", "dark");
      }
    };
  
    // Set the initial theme and icon based on local storage
    if (currentTheme === "dark") {
      htmlTag.setAttribute("data-bs-theme", "dark");
      toggleButton.className = "bi bi-sunset"; // Set the class to sunset icon
    } else {
      htmlTag.setAttribute("data-bs-theme", "light");
      toggleButton.className = "bi bi-sunrise"; // Set the class to sunrise icon
    }
  
    // Add event listener to the toggle button
    toggleButton.addEventListener("click", toggleThemeAndIcon);
  });
  

// scroll to top script
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById("scrollToTop");
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

