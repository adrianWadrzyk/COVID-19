import {createGlobalChart} from './chart.js';

async function getGlobalData() {
  try {
    const response = await fetch("https://api.covid19api.com/summary");
    const json = await response.json();
    writeGlobalData(json);
  } catch (err) {
   // getGlobalData();
  }
}

function writeGlobalData(data) {
  const global = data["Global"];
  const total_deaths = document.querySelector(".stats--deaths");
  const total_infected = document.querySelector(".stats--infected");
  const total_recovered = document.querySelector(".stats--recovered");

  total_deaths.innerText = `${global.TotalDeaths} (+ ${global.NewDeaths})`;
  total_infected.innerText = `${global.TotalConfirmed} (+ ${global.NewConfirmed})`;
  total_recovered.innerText = `${global.TotalRecovered} (+ ${global.NewRecovered})`;

  createGlobalChart(global.TotalDeaths, global.TotalConfirmed, global.TotalRecovered);
}

window.addEventListener("load", getGlobalData());
