
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");

// Bar Chart for Visitor
//var visitorChart = document.getElementById("myBarChart");
    var ctx = document.getElementById("myBarChart");
                                var myChart = new Chart(ctx, {
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
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
