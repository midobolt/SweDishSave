window.onscroll = function () {
  growShrinkLogo();
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

