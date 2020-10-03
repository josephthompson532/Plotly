/*

console.log(cityGrowths);

let sorteddata = cityGrowths.sort((a,b)=>b-a).slice(0,5);
let cityNames = sorteddata.map(element=> element.City);
let cityPop = sorteddata.map(element=> element.Increase_from_2016);

let trace = [{
    x: cityNames,
    y: cityPop,
    type: "bar"
}];

let layout = {
    xaxis: {title: "City Names"},
    yaxis: {title: "Pop. Growth"},
    title: "Bar-Chart for Population Growth by City"
};

Plotly.newPlot("bar-plot",trace,layout);
*/

/*

d3.json("samples.json").then(function(data) {
    wfreq = data.metadata.map(person=> person.wfreq).sort((a,b)=>b-a).filter(element=> element!=null);
    console.log(wfreq);
});
*/

/*
d3.json("samples.json").then(function(data) {
    console.log(data);
});


researcher1 = {
    name: "Roza",
    age: 34,
    hobby: "Hiking"
};

let objectArray = Object.entries(researcher1);

console.log(objectArray);

objectArray.forEach(([first, second]) => console.log(first + ": " + second));
*/

d3.json("samples.json").then(function(data) {
    let myvar = data.metadata[0];
    let newVar = Object.entries(myvar);
    newVar.forEach(([first,second]) => console.log(first + ": " + second))
});
