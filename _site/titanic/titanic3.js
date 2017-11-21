function draw(passengerClass) {

  var survived = 0;
  var died = 0;
  console.log(passengerClass);

  titanicData.forEach(function(person, i) {
    // console.log(person.Pclass);
    if (person.PClass === passengerClass || passengerClass === "all") {
      console.log("YES");

      if (person.Survived == "1") {
        survived = survived + 1;
      } else if (person.Survived == "0") {
        died = died + 1;
      }

    }
  });

  var bars = svg.selectAll("rect")
    .data([{
        category: "survived",
        value: survived
      },
      {
        category: "died",
        value: died
      }
    ]);

  function styleBars(rect) {
    rect
      .attr("height", function(d) {
        return yScale(d.value);
      })
      .attr("width", w / 2 - barPadding)
      .attr("x", function(d, i) {
        return i * (w / 2);
      })
      .attr("y", function(d) {
        return h - yScale(d.value);
      });
  }

  bars.enter()
    .append("rect")
    .attr("id", function(d) {
      return d.category;
    })
    .attr("fill", function(d) {
      if (d.category === "survived") {
        return "blue";
      } else if (d.category === "died") {
        return "red";
      }
    })
    .call(styleBars);

  bars.transition().duration(1000)
      .call(styleBars);

  var labels = svg.selectAll("text")
    .data([{
        category: "survived",
        value: survived
      },
      {
        category: "died",
        value: died
      }
    ]);

  labels.enter().append("text")
    .attr("y", 20)
    .text(function(d) {
      return d.value;
    })
    .attr("x", function(d, i) {
      return i * (w / 2);
    });

  labels
    .text(function(d) {
      return d.value;
    });

}

var titanicData;
var h, w, barPadding, yScale, svg;

d3.csv("titanic.csv", function(error, data) {
  w = 200;
  h = 300;
  barPadding = 10;

  yScale = d3.scaleLinear()
    .domain([0, 1313])
    .range([0, 300]);


  svg = d3.select(".svg-container-1")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

  console.log(data);
  titanicData = data;

  d3.select("#first-class").on("click", function() {
    draw("1st");
  });

  d3.select("#second-class").on("click", function() {
    draw("2nd");
  });

  d3.select("#third-class").on("click", function() {
    draw("3rd");
  });

  draw("all");


});
