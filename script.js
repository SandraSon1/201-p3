
// Firebse setup
  var config = {
      apiKey: "AIzaSyD1FWLNeV1Z_eX-0DzCbpPcIg7jTUgbnHE",
      authDomain: "nameme-bab93.firebaseapp.com",
      databaseURL: "https://nameme-bab93.firebaseio.com",
      projectId: "nameme-bab93",
      storageBucket: "",
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
      console.log(users[k].name);
      console.log(users[k].pos.lat);
      console.log(users[k].pos.lng);
      // var name = users[k].name;
      // var pos= users[k].score;
      // console.log(name, pos.lat);
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
       
      zoom: 12
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
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map, marker);
  }


    



     



