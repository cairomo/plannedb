var api_key = AIzaSyCjY4AS48Y9WLBZb0ZP6-_1PY2X4xYu0AI;
var allCoords = 
var geocoder;
  var map;
  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng
    }
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }

  function codeAddress() {
    var zipcode = document.getElementById('zipcode').value;
    geocoder.geocode( { 'address': zipcode}, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        var latlong = results[0].geometry.location;
          
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

<body onload="initialize()">
 <div id="map" style="width: 320px; height: 480px;"></div>
  <div>
    <input id="address" type="textbox" value="Sydney, NSW">
    <input type="button" value="Encode" onclick="codeAddress()">
  </div>
</body>