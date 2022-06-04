let universities = [
  "University of Lagos",
  "University of Ibadan",
  "	Obafemi Awolowo University",
  "Afe Babalola University",
];

const searchFor = document.querySelector("#searchFor");
const inputData = document.querySelector(".inputData");
const uniResults = document.querySelector(".uni_results");

searchFor.addEventListener("keyup", () => {
  let results = [];
  let input = searchFor.value;
  if (input.length) {
    results = universities.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }

  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return inputData.classList.remove("show");
  }
  let content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  inputData.classList.add("show");
  uniResults.innerHTML = `<ul>${content}</ul>`;
}
