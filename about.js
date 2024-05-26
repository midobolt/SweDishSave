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


window.addEventListener("load", () => {
  const logoImg = document.getElementById("logo-img");
  const navbar = document.getElementById("navbar");
    const logoImg = document.getElementById("logo-img");
  logoImg.classList.add("spin");

  document.getElementById("logo-img").style.height = "130px";
  document.getElementById("logo-img").style.width = "130px";

  setTimeout(() => {
    logoImg.classList.remove("spin");
  }, 2000); // Spin animation duration
});

$(window).on("scroll", function () {
  var yPos = $(navbar).scrollTop(),
    yPer = yPos / 120;

  if (yPer > 1) {
    yPer = 1;
  }
});

var navbar = $("navbar"),
  navbarHeight = navbar.height(),
  logo = $(".logo"),
  logoHeight = logo.height();

  var logoPos = -1 * (yPer * 50) + 50,
    logoSize = headerHeight * yPer - logoHeight * yPer + logoHeight,
    headerPos = yPer * headerHeight - headerHeight;
$(window).on("scroll", function () {
  // Rest of our code
});


// window.onscroll = function () {
//   const navbar = document.getElementById("navbar");
//   const logoImg = document.getElementById("logo-img");

//   if (window.pageYOffset > 0) {
//     navbar.classList.add("scrolled");
//     logoImg.classList.add("shrink");
//   } else {
//     navbar.classList.remove("scrolled");
//     logoImg.classList.remove("shrink");
//   }
// };

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