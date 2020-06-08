
import {getCountryData} from './staticforCountry.js';

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
  
    $('#search').autocomplete({
      source : countriesName,
      autoFocus : true, 
      select: function(e, ui) {
        getCountryData(ui.item.value);
      }
   });
}

