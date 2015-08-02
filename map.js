// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
var map;
var markers = [];

function initialize() {
  var currLoc = new google.maps.LatLng(37.761413, -122.388485);
  var loc1 = new google.maps.LatLng(37.762462, -122.390240);
  var loc2 = new google.maps.LatLng(37.761570, -122.394916);
  var loc3 = new google.maps.LatLng(37.756234, -122.393799);
  var loc4 = new google.maps.LatLng(37.767067, -122.389985);
  var loc5 = new google.maps.LatLng(37.770820, -122.417066);
  var loc6 = new google.maps.LatLng(37.7638046, -122.387245);
  var loc7 = new google.maps.LatLng(37.760639, -122.385124);
  var loc8 = new google.maps.LatLng(37.764674, -122.399642);
  var mapOptions = {
    zoom: 16,
    center: currLoc ,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControl: false
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


  // Adds a marker at the center of the map.
  addMarker(currLoc,'img/wine.png');
  addMarker(loc1,'img/candle.png');
  addMarker(loc2,'img/business14.png');
  addMarker(loc3,'img/tea.png');
  addMarker(loc4,'img/business1.png');
  addMarker(loc5,'img/business2.png');
  addMarker(loc6,'img/business3.png');
  addMarker(loc7,'img/business4.png');
  addMarker(loc8,'img/business13.png');


  var defMarker = new google.maps.Marker({
    position: candleLoc,
    map: map,
    icon: 'img/candle.png'
  });

  google.maps.event.addListener(defMarker, 'click', function(){
  map.setZoom(18);
  map.setCenter(defMarker.getPosition());
});
}

// Add a marker to the map and push to the array.
function addMarker(location, img) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: img
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
  markers[0].setMap(map);
  markers[1].setMap(map);
  markers[6].setMap(map);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
