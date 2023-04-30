import data from "../data.json" assert { type: "json" };
const imgs = document.querySelectorAll(".score img");
const categories = document.querySelectorAll(".score span:first-of-type");
const scores = document.querySelectorAll(".score span:last-of-type");
const totalScore = document.querySelector(".total-score span:first-of-type");
let total = (
  data.map((obj) => obj.score).reduce((a, b) => a + b) / data.length
).toFixed(0);
totalScore.textContent = total;
data.forEach((obj, index) => {
  categories[index].textContent = obj.category;
  scores[index].textContent = obj.score + " / 100";
  imgs[index].src = obj.icon;
});
