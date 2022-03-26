// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([36.1733, -120.1794],7);

//let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//       onEachFeature: function(feature, layer) {
//          console.log(layer);
//          layer.bindPopup();
//        }
//   }).addTo(map);

// We create the tile layer that will be the background of our map.

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

  let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Omerdica/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

L.geoJSON(airportData, {
           onEachFeature: function(_FeatureCollection, layer) {
              console.log(layer);
              layer.bindPopup("<h2>" + airportData.faa +"</h2> <hr> <h3>faa " + airportData.name.toLocaleString() + "</h3>");
            }
       }).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// An array containing each city's location, state, and population.

// Get data from cities.js
// let cityData = cities;


// Loop through the cities array and create one marker for each city.
// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/200000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
// .addTo(map);
// });
// Add a marker to the map for Los Angeles, California
// L.circle([34.0522, -118.2437], {
//   radius: 300,
//   color: "yellow",
//   fillColor: "#ffffa1,"
// }).addTo(map);

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];
// Coordinates for each point to be used in the polyline.
//  let line = [
//      [33.9416, -118.4085],
//      [37.6213, -122.3790],
//      [40.7899, -111.9791],
//      [47.4502, -122.3088]
//    ];
//  JFK -  [[40.641766, -73.780968]],
// Austin - [[30.1974292, --97.6663058]]
// toranto - [[43.678524, -79.629129]]

// let line =  [ 
//     [33.9416, -118.4085],
//     [30.1974292, -97.6663058],
//     [43.678524, -79.629129],
//     [40.641766, -73.780968],



  // Create a polyline using the line coordinates and make the line red.
//  L.polyline(line, {
//     color: "yellow"
//    }).addTo(map);

// L.polyline(line, {
//     path: 'M 0,-1 0,1',
//   strokeOpacity: 1,
//   scale: 4
// }).addTo(map);
        

