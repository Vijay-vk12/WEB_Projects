// Sample financial data (you can replace this with real data)
const revenue = 50000;
const expenses = 35000;

// Calculate profit
const profit = revenue - expenses;

// Sample data for charts (you can replace this with real data)
const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
        label: 'Revenue',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        data: [5000, 7000, 9000, 11000, 13000, 15000],
    }]
};

const lineChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [{
        label: 'Profit',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        data: [1000, 2000, 2500, 3500, 4500, 5500],
    }]
};

const waveChartData = {
    labels: ['Wave 1', 'Wave 2', 'Wave 3', 'Wave 4'],
    datasets: [{
        label: 'Expenses',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        data: [8000, 9500, 7000, 8500],
    }]
};

// Calculate days required (you can replace this with real calculation)
const daysRequired = 45;

// Display the values on the dashboard
document.getElementById("revenue").textContent = `$${revenue}`;
document.getElementById("expenses").textContent = `$${expenses}`;
document.getElementById("profit").textContent = `$${profit}`;

// Update days required
document.getElementById("daysRequired").textContent = `${daysRequired} days`;

// Create and update the charts
const barChartCtx = document.getElementById('barChart').getContext('2d');
const lineChartCtx = document.getElementById('lineChart').getContext('2d');
const waveChartCtx = document.getElementById('waveChart').getContext('2d');

new Chart(barChartCtx, {
    type: 'bar',
    data: barChartData,
});

new Chart(lineChartCtx, {
    type: 'line',
    data: lineChartData,
});

new Chart(waveChartCtx, {
    type: 'line',
    data: waveChartData,
});
