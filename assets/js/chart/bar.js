const ctx = document.getElementById('myBarChart').getContext('2d');


const labels = [
    "1404-01-01", "1404-01-02", "1404-01-03", "1404-01-04", "1404-01-05",
    "1404-01-06", "1404-01-07", "1404-01-08", "1404-01-09", "1404-01-10",
    "1404-01-11", "1404-01-12", "1404-01-13", "1404-01-14", "1404-01-15",
    "1404-01-16", "1404-01-17", "1404-01-18", "1404-01-19", "1404-01-20",
    "1404-01-21", "1404-01-22", "1404-01-23", "1404-01-24", "1404-01-25",
    "1404-01-26", "1404-01-27", "1404-01-28", "1404-01-29", "1404-01-30"
]
const dataValues = [89, 57, 92, 65, 73, 11, 42, 88, 35, 70, 50, 19, 25, 61, 84, 33, 98, 16, 41, 59, 64, 27, 76, 29, 30, 80, 38, 49, 66, 68]
;

const data = {
    labels: labels,
    datasets: [{
        label: 'تعداد فروش',
        data: dataValues,
        backgroundColor: '#a3a9d4',
        borderColor: '#a3a9d4',
        borderWidth: 1
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true
                },
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: '٣٠ روز اخیر'
            }
        }
    }

};

const myBarChart = new Chart(ctx, config);