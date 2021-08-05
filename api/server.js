// import * as json from "/Users/DELL/Desktop/Konexio/konexio-projet-fullstack/api/countries.json";
const countries = require("./countriesData.json");
const express = require("express");
const app = express();
const port = 8000;
app.listen(port, () => {
  console.log("Countries API");
});

app.get("/all", (req, res) => {
  let countriesNames = [];
  for (let i = 0; i < countries.length; i++) {
    countriesNames.push(countries[i].name);
  }
  res.send(countriesNames.join(", "));
});
// console.log(countries[0].name);
