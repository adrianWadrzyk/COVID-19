
import convertData from "./chart.js";

async function getCountryData(country) {
    try {
      const response = await fetch(`https://api.covid19api.com/total/dayone/country/${country}`);
      const json = await response.json();
      await showStaticsForCountry(json);
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  }

const showStaticsForCountry  = (data) => {
    const lengthData = data.length-1;
    let last = data[lengthData];
    let oneDayBefore = data[lengthData-1];
 
    const total_deaths = document.querySelector(".stats--deaths");
    const total_infected = document.querySelector(".stats--infected");
    const total_recovered = document.querySelector(".stats--recovered");

    total_deaths.innerText = `${last.Deaths} (+ ${last.Deaths - oneDayBefore.Deaths})`;
    total_infected.innerText = `${last.Confirmed} (+ ${last.Confirmed - oneDayBefore.Confirmed})`;
    total_recovered.innerText = `${last.Recovered} (+ ${last.Recovered - oneDayBefore.Recovered})`;
  
    convertData(data);
  }

  export default getCountryData;