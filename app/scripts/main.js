/*global require*/
'use strict';

require.config({
  baseUrl: '/'
  ,shim: {
    bootstrap: {
      deps: ['jquery']
      ,exports: 'jquery'
    }
  }
  ,paths: {
    text: 'bower_components/requirejs-text/text'
    ,jquery: 'bower_components/jquery/dist/jquery'
    ,'jquery-dragon': 'bower_components/jquery-dragon/src/jquery.dragon'
    ,backbone: 'bower_components/backbone/backbone'
    ,underscore: 'bower_components/lodash/dist/lodash'
    ,mustache: 'bower_components/mustache/mustache'
    ,shifty: 'bower_components/shifty/dist/shifty'
    ,rekapi: 'bower_components/rekapi/dist/rekapi'
  }
  ,packages: [{
    name: 'lateralus'
    ,location: 'bower_components/lateralus/scripts'
    ,main: 'lateralus'
  }, {
    name: 'rekapi-timeline'
    ,location: 'scripts'
    ,main: 'rekapi-timeline'
  }, {
    name: 'rekapi-timeline.component.container'
    ,location: 'scripts/components/container'
  }, {
    name: 'rekapi-timeline.component.timeline'
    ,location: 'scripts/components/timeline'
  }, {
    name: 'rekapi-timeline.component.control-bar'
    ,location: 'scripts/components/control-bar'
  }, {
    name: 'rekapi-timeline.component.details'
    ,location: 'scripts/components/details'
  }, {
    name: 'rekapi-timeline.component.scrubber'
    ,location: 'scripts/components/scrubber'
  }, {
    name: 'rekapi-timeline.component.scrubber-detail'
    ,location: 'scripts/components/scrubber-detail'
  }, {
    name: 'rekapi-timeline.component.animation-tracks'
    ,location: 'scripts/components/animation-tracks'
  }, {
    name: 'rekapi-timeline.component.actor-tracks'
    ,location: 'scripts/components/actor-tracks'
  }, {
    name: 'rekapi-timeline.component.keyframe-property-tracks'
    ,location: 'scripts/components/keyframe-property-tracks'
  }, {
    name: 'rekapi-timeline.component.keyframe-property-detail'
    ,location: 'scripts/components/keyframe-property-detail'
  }]
});

require([

  'rekapi'
  ,'rekapi-timeline'

], function (

  Rekapi
  ,RekapiTimeline

) {
  var rekapi = new Rekapi(document.body);
  window.rekapiTimeline =
    new RekapiTimeline(document.getElementById('rekapi-timeline'), rekapi);
});
