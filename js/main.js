function initMap() {
  var pos = {lat: 52.410140, lng: 16.923473};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: pos
  });
  var marker = new google.maps.Marker({
    position: pos,
    map: map
  });
}
