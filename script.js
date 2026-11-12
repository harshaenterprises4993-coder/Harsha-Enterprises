
// Harsha Enterprises Website

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Harsha Enterprises!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener("click", function(event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

});
