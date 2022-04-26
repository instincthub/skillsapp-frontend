const ctx = document.getElementById("chartContainer").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Total people that learned",
        data: [16, 10, 5, 13, 24, 30],
        backgroundColor: ["#fff"],
        fill: false,
        lineTension: 0.3,
        borderColor: [" #00838F"],
        pointHoverRadius: 0,
        borderWidth: 4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
