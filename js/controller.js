//Developer: Sabbir Ahmed Siddiquee,
//Software Engineer, Selise rockin' software
//Git profile: https://github.com/prince3339

//safe code mode
// here ; is used to make sure that other codes loaded from different library/framework/file finished

//Main Controller of the Application
//Major logics is here
;(function(window){
 'use strict';
  var vm = window;
  var tabData = {};
  config.fn = {
    loadTabMethod: loadTabMethod
  }

  //console.log(config);
  function loadTabMethod(id) {
    if(!tabData[id]) {
      tabData[id] = {};
      if(id === "js-tab-1") {
        var tabDatSource = "/front-end-task/data-model/tabone-data.json";
      }
      else if(id === "js-tab-2") {
        var tabDatSource = "/front-end-task/data-model/tabtwo-data.json";
      }
      else if(id === "js-tab-3") {
        var tabDatSource = "/front-end-task/data-model/tabthree-data.json";
      }
      getTabData(tabDatSource, function(data) {
        //console.log(data);
        tabData[id]['status'] = true;
        tabData[id]['lodedData'] = data;
        config.fn.loadTab(tabData[id]['lodedData'], id);
      });
    }else {
      config.fn.loadTab(tabData[id]['lodedData'], id);
    }
  }

  function getTabData(url, callback) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              //console.log('responseText:' + xmlhttp.responseText);
              try {
                  var data = JSON.parse(xmlhttp.responseText);
              } catch(err) {
                  //console.log(err.message + " in " + xmlhttp.responseText);
                  return;
              }
              callback(data);
          }
      };

      xmlhttp.open("GET", url, true);
      xmlhttp.send();
  }


  vm.onload = function() {
    loadTabMethod("js-tab-1");
  }

})(window)
