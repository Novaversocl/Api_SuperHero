const createSuperHeroChart = (superhero) => {
  var chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      title: {
          text: "Superhero Skills",
      },
      data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "{y} - #percent %",
          yValueFormatString: "#,##0,,.## Million",
          legendText: "{indexLabel}",

          // ya que es un objeto se utiliza Object.entries() en cambio digimon era un Array

          dataPoints: Object.entries(superhero.powerstats).map(([key, value]) => {
              return { y: parseInt(value), indexLabel: key }
          })
      }],
  });

  chart.render();
}
