var userPos;



// Firebse setup
      var config = {
      apiKey: "AIzaSyD1FWLNeV1Z_eX-0DzCbpPcIg7jTUgbnHE",
      authDomain: "nameme-bab93.firebaseapp.com",
      databaseURL: "https://nameme-bab93.firebaseio.com",
      projectId: "nameme-bab93",
      storageBucket: "nameme-bab93.appspot.com",
      messagingSenderId: "388977165924"
    };
    
    firebase.initializeApp(config);
    console.log(firebase);

    var database = firebase.database();
     var ref = database.ref('users');


     ref.on('value', gotData, errData);
   

         function gotData(data){
          console.log('data object', data.val());
          var users = data.val();
          var keys = Object.keys(users)
          console.log(keys);
          for (var i = 0; i < keys.length; i ++){
            var k = keys[i];

          var name = users[k].name;
          var pos= users[k].pos;

          userPos= {lat: pos.lat, lng: pos.lng};


            console.log(users[k].name);
            console.log(users[k].pos.lat);
            console.log(users[k].pos.lng);
            console.log(userPos);
            // var name = users[k].name;
            // console.log(name, pos.lat);


        // var infowindow = new google.maps.InfoWindow;

          
        var image = {
        url: 'img/marker.png', 
        scaledSize: new google.maps.Size(30, 50), 
    
        };

        var userMarker = new google.maps.Marker({
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: image,
        position: userPos
      });

      // userMarker.addListener('click', function() {
      // infowindow.open(map, this);
      // });

var boxText = document.createElement("div");
boxText.style.cssText = "border: 4px solid white; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888; text-align: center; font-size: 17px;";
boxText.innerHTML = "Rick Paul";

var myOptions = {
content: boxText
,disableAutoPan: false
,maxWidth: 10
,pixelOffset: new google.maps.Size(-200, 0)
,zIndex: null
,boxStyle: { 
background: ""
,opacity: 1
,width: "400px"
}
,closeBoxMargin: "10px 2px 2px 1px"
,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
,infoBoxClearance: new google.maps.Size(1, 1)
,isHidden: false
,pane: "floatPane"
,enableEventPropagation: false
};
var ib = new InfoBox(myOptions);

    
        google.maps.event.addListener(userMarker, 'click', function() {
        map.panTo(this.getPosition());
        ib.open(map, this);
        // infowindow.open(map, this);
        map.setZoom(12);
        });

  


          }
         }

         function errData(err){
          console.log('Error!');
          console.log(err);
         }


// Google maps setup
    var map, infoWindow;
    
    function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
       
      zoom: 6,
      center: userPos,
      styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ff8000"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ffcc66"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
    });


    infoWindow = new google.maps.InfoWindow;

   
    // Try HTML5 geolocation.
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // console.log('pos', pos);

        var data =  {
            name:"Someone's name",
            pos : pos
         }
        ref.push(data);

       


        infoWindow.setPosition(pos);
        infoWindow.setContent('location found');
        infoWindow.open(map);
        // userMarker;
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
      
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
   alert(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }