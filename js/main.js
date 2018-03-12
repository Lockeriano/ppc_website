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
};

var indicator = document.getElementsByClassName('indicator'),
    carouselQuote = document.getElementsByClassName('carousel-item');


function indicatorSelection () {
  if (this.className === 'indicator') {
    for (var i = 0; i < indicator.length; i++) {
      indicator[i].className = 'indicator'
      carouselQuote[i].className = 'carousel-item'
    }
    this.className = 'indicator active'
    for (var i = 0; i < carouselQuote.length; i++) {
      if (indicator[0] && indicator[0].className === ('indicator active')) {
        carouselQuote[i].className = 'carousel-item'
        carouselQuote[0].className = 'carousel-item active'
      } else if (indicator[1] && indicator[1].className === ('indicator active')) {
        carouselQuote[i].className = 'carousel-item'
        carouselQuote[1].className = 'carousel-item active'
      } else {
        carouselQuote[i].className = 'carousel-item'
        carouselQuote[2].className = 'carousel-item active'
      }
    }
  }
}

for (var i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener('click', indicatorSelection)
}
