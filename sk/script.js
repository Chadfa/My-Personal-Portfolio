function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleTheme() {
    console.log("Toggle Theme button clicked"); // Idhu Debugging line uh
    console.log("Current body classes:", document.body.classList); // Idhu Log current classes uh
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hamburger-icon").addEventListener("click", toggleMenu);
    document.querySelector(".theme").addEventListener("click", toggleTheme);
    console.log("Event listeners set up"); // Idhu Debugging line uh
});
