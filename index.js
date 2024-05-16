function toggleLoginForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.classList.toggle("hidden");
}

document.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
})


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
 window.onclick = function (event) {
   if (!event.target.matches(".dropbtn")) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains("show")) {
         openDropdown.classList.remove("show");
       }
     }
   }
 };
 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "90px";
  }
}

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navbar").style.fontSize = "30px";
//   } else {
//     document.getElementById("navbar").style.fontSize = "90px";
//   }
// }

window.onscroll = function () {
  growShrinkLogo();
};

function growShrinkLogo() {
  var Logo = document.getElementById("navbar");
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height = "200px";
  } else {
    Logo.style.height = "600px";
  }
}

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };