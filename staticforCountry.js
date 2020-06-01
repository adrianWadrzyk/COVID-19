
import convertData from './chart.js';

var total_deaths = document.querySelector(".stats--deaths");
var total_infected = document.querySelector(".stats--infected");
var total_recovered = document.querySelector(".stats--recovered");


async function getCountryData(country) {
    try {
      const response = await fetch(`https://api.covid19api.com/total/dayone/country/${country}`);
      const json = await response.json();
      await showStaticsForCountry(json);
    } catch (err) {
      total_deaths.innerText = " No data in ours base";
      total_infected.innerText = " No data in ours base";
     total_recovered.innerText = " No data in ours base";
    }
  }

const showStaticsForCountry  = (data) => {
    const lengthData = data.length-1;
    let last = data[lengthData];
    let oneDayBefore = data[lengthData-1];
 
    total_deaths.innerText = `${last.Deaths} (+ ${last.Deaths - oneDayBefore.Deaths})`;
    total_infected.innerText = `${last.Confirmed} (+ ${last.Confirmed - oneDayBefore.Confirmed})`;
    total_recovered.innerText = `${last.Recovered} (+ ${last.Recovered - oneDayBefore.Recovered})`;

    convertData(data);
  }

  export default getCountryData;