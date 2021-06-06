import axios from "axios";

const username = "olavomtveit";
let html = "";
const container = document.querySelector(".archive-item-container");

axios
  .get(`https://api.github.com/users/${username}/repos?sort=created`)
  .then((response) => {
    const { data } = response;
    console.log(data);
    html += ``;
    for (let i = 0; i < data.length; i++) {
      html += `<div class="archive-item">
                <h3 class="text-bold">${data[i].name} - <span class="text-orange">INSERT YEAR
              </div>`;
    }
    return data;
  })
  .catch((error) => console.log(error));

/* <div class="archive-item">
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
  </div> */
