function getAllCountries() {
  fetch("http://localhost:7000")
    .then((res) => res.json())
    .then((res) => console.log(res));
}
getAllCountries();
