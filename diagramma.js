const optionsPie = {
    animation: {
        duration: 2000,
    },
}
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2019','2020','2021', '2022'],
        datasets: [{
            label: 'Общее количество работ',
            data: [10, 25, 13, 20],
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)','rgb(255, 205, 86)', 'rgb(155, 205, 86)'],
        }]
    },
    options: optionsPie
});