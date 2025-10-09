const ctxPie = document.getElementById('myPieChart').getContext('2d');

const dataPie = {
    labels: ['رایتل', 'ایرانسل', 'همراه اول'],
    datasets: [{
        data: [60, 80, 100],
        backgroundColor: ['#a3a9d4', '#3a5270', '#122e4d'],
        hoverOffset: 4
    }]
};

const configPie = {
    type: 'pie',
    data: dataPie,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                    }
                }
            }
        }
    }
};

new Chart(ctxPie, configPie);