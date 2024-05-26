document.querySelector("video").playbackRate = 0.4;

function toggleLoginForm() {
  var loginForm = document.getElementById("loginForm");
  loginForm.classList.toggle("hidden");
}

document.addEventListener("scroll", () => {
  const navbar = document.querySelector("nav");

  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

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



function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const hashedPassword = CryptoJS.SHA256(password).toString();
  const correctHashedPassword =
    "a3501fd3bfea3af6db397d1ea19ffd4382a21e21fc5df31812a7903caeb0bda5"; // Replace with the SHA-256 hash of your password

  if (hashedPassword === correctHashedPassword) {
    document.getElementById('passwordContainer').style.display = 'none';
    document.getElementById('protectedContent').style.display = 'block';
  } else {
    // document.getElementById('errorMessage').style.display = 'block';
     window.location = "https://www.google.com";
  }
}

// Utility to generate SHA-256 hash of a given password
// function generateHash(password) {
//   return CryptoJS.SHA256(password).toString();
// }

// Uncomment the line below and check the console to get the hash of your password
// console.log(generateHash('')); // Replace 'your_password' with your actual password

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
