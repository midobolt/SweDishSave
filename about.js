window.onscroll = function () {
  growShrinkLogo();
  shrinkGrowContent();
};

function growShrinkLogo() {
  var Logo = document.getElementById("navbar");
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height = "150px";
    Logo.style.padding = "0 0 20px";
  } else {
    Logo.style.height = "100%";
  }

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("logo-img").style.height = "130px";
    document.getElementById("logo-img").style.width = "130px";
  } else {
    document.getElementById("logo-img").style.height = "100%";
    document.getElementById("logo-img").style.width = "100%";
  }
}

// function   shrinkGrowContent(){
//   var Content = document.getElementById("container");
//   if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
//     document.getElementById("container").style.height = cal(100% - 130px);
//   }
// }


// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector(".navbar");
//   var container = document.querySelector(".conntainer");
//   var scrollY = window.scrollY;
//   if (scrollY > 50) {
//     navbar.style.height = "50px"; // Shrink navbar height
//     container.style.marginTop = "50px"; // Adjust section margin-top
//     section.style.height = "calc(100vh - 50px)"; // Adjust section height
//   } else {
//     navbar.style.height = "100vh"; // Full viewport height
//     container.style.marginTop = "100vh"; // Initial margin-top
//     container.style.height = "calc(100vh - 50px)"; // Adjust section height
//   }
// });