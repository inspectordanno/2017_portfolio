function draw(barData) {

  var w = 200;
  var h = 300;
  var barPadding = 10;

  var yScale = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 300]);


  var svg = d3.select(".svg-container-1")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  var bars = svg.selectAll("rect")
    .data(barData);

  var barsEnter = bars.enter()
    .append("rect");

  bars.merge(barsEnter)
    .attr("height", function(d) {
      return yScale(d);
    })
    .attr("width", w / barData.length - barPadding)
    .attr("x", function(d,i){
      return  i * ( w / barData.length);
    })
    .attr("y", function(d) {
      return h - yScale(d);
    })
    .attr("fill", "red");

}

var titanicData;

d3.csv("titanic.csv", function(error, data){
  console.log(data);
  titanicData = data;

  var men = 0;
  var women = 0;

  titanicData.forEach(function(person,i) {

    if (person.Sex == "male") {
      men = men + 1;
    }
    else if (person.Sex == "female") {
      women = women + 1;
    }

  });

  console.log(men, women);

  draw([men, women]);

});
