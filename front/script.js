const countryContainer = document.querySelector(".country-list");
const showDataButton = document.querySelector("#btnShowData");
const btnReset = document.querySelector("#reset");
const input = document.querySelector("#name");
const showAll = document.querySelector("#all");
console.log;
let countriesData, html;

// By Using Front End

// showDataButton.addEventListener("click", function getAllCountries() {
//   const name = input.value;
//   let found = false;
//   console.log(name);
//   fetch("http://localhost:7000")
//     .then((res) => res.json())
//     .then((res) => {
//       countriesData = res;
//       for (let i = 0; i < countriesData.length; i++) {
//         if (
//           countriesData[i].name.toLowerCase() === name.toLowerCase() ||
//           countriesData[i].capital.toLowerCase() === name.toLowerCase() ||
//           countriesData[i].region.toLowerCase() === name.toLowerCase()
//         ) {
//           html = ` <li>Country Name: ${countriesData[i].name}, Capital: ${countriesData[i].capital}, Continent: ${countriesData[i].region}; , Continent: ${countriesData[i].region}, Population: ${countriesData[i].population} </li>`;
//           countryContainer.insertAdjacentHTML("beforeend", html);
//           found = true;
//         }
//       }
//       if (found === false) {
//         html = ` <li>This name do not exist</li>`;
//         countryContainer.insertAdjacentHTML("beforeend", html);
//       }
//     });
// });

// By Using Back End
showDataButton.addEventListener("click", function () {
  const name = input.value;
  fetch(`http://localhost:7000/${name}`)
    .then((res) => res.json())
    .then((country, error) => {
      html = ` <li>Country Name: ${country.name}, Capital: ${country.capital}, Continent: ${country.region}, Population: ${country.population} </li>`;
      countryContainer.insertAdjacentHTML("beforeend", html);
    })
    .catch((err) => {
      html = ` <li>Country do not exist </li>`;
      countryContainer.insertAdjacentHTML("beforeend", html);
    });
});
btnReset.addEventListener("click", function () {
  countryContainer.innerHTML = "";
  input.value = "";
});

showAll.addEventListener("click", function () {
  fetch("http://localhost:7000/")
    .then((res) => res.json())
    .then((res) => {
      countriesData = res;
      countryContainer.innerHTML = "";
      for (let i = 0; i < countriesData.length; i++) {
        html = ` <li>Country Name: ${countriesData[i].name}, Capital: ${countriesData[i].capital}, Continent: ${countriesData[i].region}, Population: ${countriesData[i].population} </li>`;
        countryContainer.insertAdjacentHTML("beforeend", html);
        found = true;
      }
    });
});
