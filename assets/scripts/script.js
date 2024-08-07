const ctx = document.querySelector('.activity-chart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Time',
            data: [40, 50, 60, 100, 90, 80, 70],
            backgroundColor: '#d8bfd8',
            borderWidth: 3,
            borderRadius: 6,
            hoverBackgroundColor: '#8a2be2'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x:{
                border: {
                    display: true
                },
                grid: {
                    display: true,
                    color: '#663399'
                }
            },
            y:{
                ticks: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        }
    }
});