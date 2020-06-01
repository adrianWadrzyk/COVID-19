
const ctx = document.getElementById("chart").getContext("2d");


const createCountryChart = (data) => {
  const confirmed = [],
    active = [],
    days = [];

  data.forEach((element) => {
    active.push(element.Active);
    confirmed.push(element.Confirmed);
  });

  for (let i = 0; i < data.length; i++) days[i] = i;

  const config = {
    type: "line",
    data: {
      labels: days,
      datasets: [
        {
          label: "Confirmed",
          data: confirmed,
          borderColor: "red",
        },
        {
          label: "Active",
          data: active,
          borderColor: "blue",
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: `Data for ${data[0].Country}`
      },
    },
  };

   countryChart = new Chart(ctx, config);
};

const createGlobalChart = (death, infected, recovered)  => {  

  const config = { 
    type: "pie", 
    data: { 
      datasets: [{
        data: [death, infected, recovered],
        backgroundColor: ["Red", "Yellow", "Green"],
        hoverBackgroundColor: "none"
      }],
      labels: ["Death", "Infected", "Recovered"], 
 
    }, 
    options : { 
      responsive : true
    }
  }

  new Chart(ctx, config);
}

export default (createCountryChart, createGlobalChart);
