import axios from "axios";

const username = "olavomtveit";
let html = "";
const container = document.querySelector(".archive-item-container");

axios
  .get(`https://api.github.com/users/${username}/repos?sort=created`)
  .then((response) => {
    const { data } = response;
    html += ``;

    let desc = "";
    for (let i = 0; i < data.length; i++) {
      if (data[i].description === null) {
        desc = "No description used";
      } else {
        desc = data[i].description;
      }

      html += `<div class="archive-item">
                <h3 class="text-bold">${data[i].name}</h3>
                <p>${desc}</p>
                <a href=${data[i].html_url} class="viewCode" target="_blank"><p class="text-orange">View code</p></a>
              </div>`;
    }
    container.innerHTML = html;
    return data;
  })
  .catch((error) => console.log(error));
