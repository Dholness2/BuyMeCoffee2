import Ember from 'ember';

export default Ember.Controller.extend({
  ready: function(){
      var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

  }

});
