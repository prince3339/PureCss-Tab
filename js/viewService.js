//Developer: Sabbir Ahmed Siddiquee,
//Software Engineer, Selise rockin' software
//Git profile: https://github.com/prince3339

//safe code mode
// here ; is used to make sure that other codes loaded from different library/framework/file finished

//This service provides data based on requirements to viewRenderer engine
;(function (window) {
  'use strict';
  var vm = window;

  config.fn.loadTab = loadTab;

  function loadTab (data, id){
    config.fn.renderTab(data, id);
  }

})(window)
