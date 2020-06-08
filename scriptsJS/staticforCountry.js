import { createCountryChart, chart} from './chart.js';

var total_deaths = document.querySelector(".stats--deaths");
var total_infected = document.querySelector(".stats--infected");
var total_recovered = document.querySelector(".stats--recovered");


export async function getCountryData(country) {
    try {
      const response = await fetch(`https://api.covid19api.com/total/dayone/country/${country}`);
      const json = await response.json();
      await showStaticsForCountry(json);
    } catch (err) {
      total_deaths.innerText = " No data in ours base";
      total_infected.innerText = " No data in ours base";
      total_recovered.innerText = " No data in ours base";
      chart[0].destroy();
    }
  }

const showStaticsForCountry  = (data) => {
    const lengthData = data.length-1;
    let last = data[lengthData];
    let oneDayBefore = data[lengthData-1];
    let header = document.querySelector(".section__header").innerText = `Data for ${data[0].Country}`;
    total_deaths.innerText = `${last.Deaths} (+ ${last.Deaths - oneDayBefore.Deaths})`;
    total_infected.innerText = `${last.Confirmed} (+ ${last.Confirmed - oneDayBefore.Confirmed})`;
    total_recovered.innerText = `${last.Recovered} (+ ${last.Recovered - oneDayBefore.Recovered})`;

    createCountryChart(data);
  }
