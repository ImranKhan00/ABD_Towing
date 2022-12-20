function initMap() {
var loc = {lat: -26.334, lng: 132.034};
var m1 = new google.maps.Map(
document.getElementById('m'), {zoom: 3, center: loc});
var mar = new google.maps.Marker({position: loc, map: m1});
}