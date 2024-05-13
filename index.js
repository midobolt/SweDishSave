function toggleLoginForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.classList.toggle("hidden");
}

// function showNavbar() {
//    element = document.getElementById("navbar");
//    element.innerHTML = "New Heading";
// }

document.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
})