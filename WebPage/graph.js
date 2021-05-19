var colors = ['#007bff','#28a745','#e0b53f','#dc3545','#c3e6cb','#6c757d'];

var chDonutData1 = 
{
    labels: ['Low Risk', 'Medium Risk', 'High Risk'],
    datasets: [
      {
        backgroundColor: colors.slice(1,4),
        borderWidth: 0,
        data: [98,2,0]
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
  labels: ["11", "11:10", "11:20", "11:30", "11:40", "11:50", "12"],
  datasets: [{
    data: [126, 203, 230, 297, 358,389,438],
	backgroundColor: 'transparent',
	borderColor : colors[0],
	borderWidth: 2,
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
    legend: { position:'bottom', padding:5,
      display: false
    }
  }
  });
}
