
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
      source : function( request, response ) {
        var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
        response( $.grep( countriesName, function( item ){
            return matcher.test( item );
        }) );
    },
      autoFocus : true, 
      minLength: 3,
      select: function(e, ui) {
        getCountryData(ui.item.value);
      }, 
    classes: { 
      "ui-autocomplete" : "ui_class"
    }
   });
}

