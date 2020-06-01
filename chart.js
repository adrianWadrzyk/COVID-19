
var dane = [1,2,3,4,5,6,7,8]

const convertData = (data) => { 
  
 const confirmed = [], active = [], days=[];

  data.forEach(element => {
    active.push(element.Active);
    confirmed.push(element.Confirmed); 
 });

  for (let i=0; i < data.length; i++)
        days[i] = i;


    const config = { 
      type: 'line', 
      data: { 
        labels: days, 
        datasets: [{
          label: 'Confirmed',
          data: confirmed,
          borderColor: 'red'
        }, {
          label: 'Active',
          data: active,
          borderColor: "blue",
        }]
      }, 
      options: { 
        responsive: true, 
        title: { 
          display: true, 
          text: ' chart multiple'
        }, 
        scales:  {
          yAxes: [{
            ticks: { 
              stepSize: 2500
            }
          }]
        }
      }
    };

    createChart(config);
};


const createChart = (config) => { 
  var ctx = document.getElementById('chart').getContext('2d');
  let chart = new Chart (ctx, config);
}

export default convertData;




