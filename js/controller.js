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
      switch (id) {
        case "js-tab-1":
          if(!tabData[id]) {
            tabData[id] = {};
            getTabData("/pepper/data-model/tabone-data.json", function(data) {
              console.log(data);
              tabData[id]['status'] = true;
              tabData[id]['lodedData'] = data;
              config.fn.loadTab(tabData[id]['lodedData'], 'js-tab-1');
            });
          }else {
            config.fn.loadTab(tabData[id]['lodedData'], 'js-tab-1');
          }
          break;
          case "js-tab-2":
            if(!tabData[id]) {
              tabData[id] = {};
              getTabData("/pepper/data-model/tabtwo-data.json", function(data) {
                console.log(data);
                tabData[id]['status'] = true;
                tabData[id]['lodedData'] = data;
                config.fn.loadTab(tabData[id]['lodedData'], 'js-tab-2');
              });
            }else {
              config.fn.loadTab(tabData[id]['lodedData'], 'js-tab-2');
            }
            break;
          case "js-tab-3":
            if(!tabData[id]) {
              tabData[id] = {};
              getTabData("/pepper/data-model/tabthree-data.json", function(data) {
                console.log(data);
                tabData[id]['status'] = true;
                tabData[id]['lodedData'] = data;
                config.fn.loadTab(tabData[id]['lodedData'], 'js-tab-3');
              });
            }else {
              config.fn.loadTab(tabData[id]['lodedData'], 'js-tab-3');
            }
            break;
        default:

      }
  }

  function getTabData(url, callback) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              console.log('responseText:' + xmlhttp.responseText);
              try {
                  var data = JSON.parse(xmlhttp.responseText);
              } catch(err) {
                  console.log(err.message + " in " + xmlhttp.responseText);
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
