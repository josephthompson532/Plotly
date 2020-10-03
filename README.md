# Plotly With Javascript

## Purpose
The purpose of this repository was to make a series of dynamic charts to display data on belly button bacteria in a web browser. 

## Overview
Our samples.json file holds a wealth of data on a large study which recorded values for a variety of metrics on the types and number of bacteria in a given participants navel and some of these participants traits such a washing frequency, or, "wfreq". I set out to create a dashboard that will display these metrics in charts for a any given participant. To achieve this, I parsed data from the samples.json file using D3, Javascript. I then wrote an styled an HTML file using bootstrap. After writing several functions in javascript to parse the samples.json data, I set up a series of event listeners to call these functios when the page was changed. Lastly, I used plotly to create visualizations of the parsed data and display them on the page.

## Results
The resulting webpage takes input via an HTML "select" tag and dynamically generates a list of all participant id's. Once a particular id is selected, an function within the select tag, "optionChanged", is called and catches the value attribute of the select tag, passing down to the "buildMetadata" and "buildCharts" functions. This argument is then used by these functions to parse through the samples.json and gather the relevant data for our charts.

<img width="256" alt="Screen Shot 2020-10-03 at 4 23 09 PM" src="https://user-images.githubusercontent.com/66881241/95003513-d1515880-0594-11eb-9575-877b7cce0a19.png">


Beyond merely visualizing the data I also applied some css and bootstrap styling. In Particular I applied a background image to the bootstrap jumbotron, changed the background color of the body of the page and all chart backgrounds to aqua, imported a custom font from Google fonts for the chart titles, and modified the page layout to be pleasing to the eye. 

<img width="1362" alt="Screen Shot 2020-10-03 at 4 26 23 PM" src="https://user-images.githubusercontent.com/66881241/95003555-4b81dd00-0595-11eb-9d77-09b45dc47484.png">


In addition to this I applied a myriad of customizations in the javascript code for the Plotly graphs themselves.



