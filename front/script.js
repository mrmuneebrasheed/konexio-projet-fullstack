const countryContainer = document.querySelector(".country-list");
const showDataButton = document.querySelector("#btnShowData");
console.log;
let countriesData, html;
showDataButton.addEventListener("click", function getAllCountries() {
  const name = document.querySelector("#name").value;
  console.log(name);
  fetch("http://localhost:7000")
    .then((res) => res.json())
    .then((res) => {
      countriesData = res;
      for (let i = 0; i < countriesData.length; i++) {
        if (countriesData[i].name.toLowerCase() === name.toLowerCase()) {
          html = ` <li>Country Name: ${countriesData[i].name}, Capital: ${countriesData[i].capital}</li>`;
          countryContainer.insertAdjacentHTML("beforeend", html);
        }
      }
    });
});
