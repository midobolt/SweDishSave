window.onscroll = function () {
  growShrinkLogo();
};

function growShrinkLogo() {
  var Logo = document.getElementById("navbar");
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.height = "180px";
  } else {
    Logo.style.height = "600px";
  }

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("logo-img").style.height = "160px";
    document.getElementById("logo-img").style.width = "160px";
  } else {
    document.getElementById("logo-img").style.height = "300px";
    document.getElementById("logo-img").style.width = "300px";
  }
}

