'use strict';

angular.module('idlecars')
.service('mapService', function (){

  var self = this;

  self.currentLoc = {};
  self.markers = [];

  self.map = {
    center: {
      latitude: 0,
      longitude: 0
    },
    zoom: 11,
    control: {},
    events: {
      click: function() {
        var url = 'https://www.google.com/maps/search/' + self.address;
        var win = window.open(url, '_blank');
        win.focus();
      }
    },
    options: {
      draggable: false,
      scrollwheel: false,
      mapTypeControl: false,
      streetViewControl: false,
      panControl: false,
      rotateControl: false,
      overviewMapControl: false,
      zoomControl: false,
    }
  };

  self.marker = {
    id: 0,
    coords: {
      latitude: 0,
      longitude: 0
    },
    options:{
      icon: {
        url: '/assets/images/location.png',
        anchor: new google.maps.Point(7.5, 7.5)
      }
    }
  };

  self.circle = {
    center: {
      latitude: 0,
      longitude: 0
    },
    radius: 1500,
    stroke: {
      color: '#08B21F',
      weight: 2,
      opacity: 1
    },
    fill: {
      color: '#08B21F',
      opacity: 0.5
    }
  };

  self.car = {
    coords: {
      latitude: 0,
      longitude: 0
    }
  };
});
