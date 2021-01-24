
var colors = ['#007bff','#28a745','#e0b53f','#dc3545','#c3e6cb','#6c757d'];

var chDonutData1 = 
{
    labels: ['Low Risk', 'Medium Risk', 'High Risk'],
    datasets: [
      {
        backgroundColor: colors.slice(1,4),
        borderWidth: 0,
        data: [201, 5, 1]
      }
    ]
};

var donutOptions = 
{
  cutoutPercentage: 85, 
  legend: {position:'bottom', padding:5, labels: {pointStyle:'circle', usePointStyle:true}}
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) 
{
  new Chart(chDonut1, {
      type: 'pie',
      data: chDonutData1,
      options: donutOptions
  });
}

var chartData = {
  labels: ["S", "S", "M", "T", "W", "T", "F"],
  datasets: [{
    data: [5058, 7437, 7248, 8280, 27189, 6391, 8971],
	backgroundColor: 'transparent',
	borderColor : colors[0],
	borderWidth: 4,
	pointBackgroundColor: colors[0]
}

]
};

var chLine = document.getElementById("chLine");
if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {	
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
	title: "Active Users",
    legend: {
      display: true
    }
  }
  });
}
