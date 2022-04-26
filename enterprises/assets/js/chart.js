var yLabels = ["Poor", "Average", "Good", "Thursday", "Friday"];
// var yLabelCounter = 0;

var chart = new CanvasJS.Chart("chartContainer", {
  title: {},
  axisY: {
    interval: 30,
    labelFormatter: function (e) {
      var yCats = yLabels[e.value / 50];
      return yCats;
    },
  },
  data: [
    {
      type: "line",
      dataPoints: [
        { label: "January", y: 71 },
        { label: "Febuary", y: 55 },
        { label: "March", y: 50 },
        { label: "April", y: 65 },
        { label: "May", y: 95 },
        { label: "June", y: 68 },
        { label: "July", y: 28 },
        { label: "AUgust", y: 34 },
        { label: "September", y: 14 },
      ],
    },
  ],
});

chart.render();
