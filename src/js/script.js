import axios from "axios";

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

const username = "olavomtveit";
let html = "";

axios
  .get(`https://api.github.com/users/${username}/repos?sort=created`)
  .then((response) => {
    const { data } = response;
    console.log(data);
    html += `<div class="archive-item">
    <h3 class="text-bold">Example title - <span class="text-orange">2020</span></h3>
    <p>Here I will fetch my github repositories through an api call. Will come soon.</p>
    <div class="archive-item-container__visit">
      <p class="text-orange">Visit website</p>
      <div class="archive-item-container__visit--github">
        <img src="./img/icons/github-frame.png" alt="Link to github repository">
      </div>
    </div>
    <div class="tools-flex">
      <div class="tool">JS</div>
      <div class="tool">
        <p>CSS</p>
      </div>
      <div class="tool">
        <p>Bootstrap</p>
      </div>
    </div>
  </div>`;
    return githubData;
  })
  .catch((error) => console.log(error));
