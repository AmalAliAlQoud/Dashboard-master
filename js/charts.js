
// Line Chart for Orders
//var ordersChart = document.getElementById("myAreaChart");
var ordersChart = document.getElementById("myareaChart");

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChart = new Chart(ordersChart, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  }
});

// Bar Chart for Visitor
//var visitorChart = document.getElementById("myBarChart");
    var visitorChart = document.getElementById("myBarChart");
                                var myChart = new Chart(visitorChart, {
                                    type: 'bar',
                                    data: {
                                        labels: ["June", "July", "August", "September", "October", "November", "December"],
                                        datasets: [
                                            {
                                                label: 'Men',
                                                data: [3000, 4100, 13000, 5000, 8000, 9000, 13000],
                                                backgroundColor: ['rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)'
                                                ],

                                                borderColor: [
                                                    'rgba(255,99,132,1)',
                                                    'rgba(255,99,132,1)',
                                                    'rgba(255,99,132,1)',
                                                    'rgba(255,99,132,1)',
                                                    'rgba(255,99,132,1)',
                                                    'rgba(255,99,132,1)',
                                                    'rgba(255,99,132,1)',
                                                    'rgba(255,99,132,1)'
                                                ],
                                                borderWidth: 1
                                            },
                                            {
                                                label: 'Women',
                                                data: [5100, 5140, 15000, 6200, 6000, 8000, 10000],
                                                backgroundColor: ['rgba(75, 192, 192, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)'
                                                ],

                                                borderColor: [
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(54, 162, 235, 1)'
                                                ],
                                                borderWidth: 1
                                            }
                                        ]
                                    },
                                    options: {
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }]
                                        }
                                    }
                                });


// Liner Chart for Cities
//var citiesChart = document.getElementById("myPieChart");
var citiesChart = document.getElementById("myPieChart");

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChart = new Chart(citiesChart, {
  type: "pie",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1
      }
    ]
  }
});

// Liner Chart for Rat
//var ratChart = document.getElementById("myLinearChart");
var ratChart = document.getElementById("myLinerChart");

var stars = [135850, 52122, 148825, 16939, 9763];
var frameworks = ["React", "Angular", "Vue", "Hyperapp", "Omi"];

var myChart = new Chart(ratChart, {
  type: "line",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Github Stars",
        data: stars,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        fill: false,
        lineTension: 0 
      }
    ]
  }
});
