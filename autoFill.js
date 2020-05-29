import getCountryData from "./staticforCountry.js";

async function getCountriesList() {
  try {
    const response = await fetch("https://api.covid19api.com/countries");
    const json = await response.json();
    await createTableCountries(json);
  } catch (err) {
    console.log(err);
  }
}

getCountriesList();

function createTableCountries(data) {
  const countriesName = [];
  data.forEach((element) => {
    countriesName.push(element.Country);
  });
  countriesName.sort();
  let search = document.getElementById("search");
  search.addEventListener("keyup", function () {
    autoComplete(countriesName);
  });
}

const autoComplete = (countries) => {

  let search = document.getElementById("search");
  const regforSearchValue = /^\w+$/i;
  let tmp = search.value;
  const datalist = document.getElementById("datalist");
  datalist.innerHTML = "";

  if (regforSearchValue.test(tmp)) {
    const regForCountry = new RegExp(`^${tmp}`, "i");
    for (const country of countries) {
      if (regForCountry.test(country)) fillDatalist(country, datalist);
    }
    if (tmp == datalist.firstChild.value) {
        datalist.innerHTML = "";
        getCountryData(tmp);
    }
  } else {
    console.log("dupa");
  }
};

const fillDatalist = (country, list) => {
  let option = document.createElement("option");
  option.value = country;
  list.appendChild(option);
};



