function camelliaRdMap() {
    var myLatLng = {lat: 32.8322576, lng: -117.1478123};

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.SATTELITE
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        url: 'https://www.google.com/maps/place/Camellia+Rd+Tea+Bar/@32.8322576,-117.1478123,18z/data=!4m5!3m4!1s0x80dbffbd27f98beb:0xcb20159c15170e9d!8m2!3d32.832207!4d-117.1468614'
    });

    marker.addListener('click', function() {
        window.location.href = this.url;
    });

    var infoWindow = new google.maps.InfoWindow();
    infoWindow.setContent('<p>' + '8199 Clairemont Mesa Blvd.' + '<br>' + 'Ste H' + '<br>' + 'San Diego, CA 92111' + '</p>');
    infoWindow.open(map, marker);
}