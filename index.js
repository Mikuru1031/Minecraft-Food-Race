const outputName = document.getElementById("outputName");
const outputImg = document.getElementById("outputImg");
const retryBtn = document.getElementById("retryBtn");

function load() {
  fetch("./../foods.json").then(async (res) => {
    const data = await res.json();
    const randomNum = Math.floor(Math.random() * data.length);
    outputName.innerText = data[randomNum].name;
    outputImg.setAttribute("src", data[randomNum].img);
  })
}

retryBtn.addEventListener("click", () => {
  load();
});
load();
