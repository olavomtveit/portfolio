const socialContainer = document.getElementById("socialIcon");
const socialBtn = socialContainer.addEventListener("click", openSocial);
const closeContainer = document.getElementById("closeIcon");
const closeBtn = closeContainer.addEventListener("click", closeSocial);
const toTopContainer = document.getElementById("toTop");

function openSocial() {
  socialContainer.style.display = "none";
  closeContainer.style.display = "flex";
  toTopContainer.style.display = "none";
}

function closeSocial() {
  socialContainer.style.display = "flex";
  closeContainer.style.display = "none";
  toTopContainer.style.display = "block";
}

const spaceXTarget = document.getElementById("spaceX-details");
const shadowballTarget = document.getElementById("shadowball-details");
const framxTarget = document.getElementById("framX-details");

function showSpaceX() {
  if (
    spaceXTarget.style.display === "" ||
    spaceXTarget.style.display === "none"
  ) {
    spaceXTarget.style.display = "block";
  } else {
    spaceXTarget.style.display = "none";
  }
}

function showShadowball() {
  if (
    shadowballTarget.style.display === "" ||
    shadowballTarget.style.display === "none"
  ) {
    shadowballTarget.style.display = "block";
  } else {
    shadowballTarget.style.display = "none";
  }
}

function showFramX() {
  if (
    framxTarget.style.display === "" ||
    framxTarget.style.display === "none"
  ) {
    framxTarget.style.display = "block";
  } else {
    framxTarget.style.display = "none";
  }
}
