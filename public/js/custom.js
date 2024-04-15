// to get current year
import $ from "jquery";

function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  // eslint-disable-next-line no-undef
  addAnimation();
}

//  owl carousel script
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});

//    end owl carousel script

/** google_map js **/
function myMap() {
  var mapProp = {
    // eslint-disable-next-line no-undef
    center: new google.maps.LatLng(40.712775, -74.005973),
    zoom: 18,
  };
  // eslint-disable-next-line no-undef
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
