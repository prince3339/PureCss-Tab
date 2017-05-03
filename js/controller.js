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

  config.fn = {
    loadSecondTabMethod: loadSecondTabMethod,
    loadThirdTabMethod: loadThirdTabMethod,
  }

  //console.log(config);
  function loadSecondTabMethod(id) {
    debugger;
    if(localStorage.tabData) {
      var localData = JSON.parse(localStorage.getItem('tabData'));
      localData.forEach(function(item, index) {
        if(item.tab_id == 'js-tab-2') {
          config.fn.loadTab(item, 'js-tab-2');
        }
      });
    }else {
      getTabData("/data-model/tab-data.json", function(data) {
        console.log(data);
        data.forEach(function(item, index) {
          if(item.tab_id == 'js-tab-2') {
            config.fn.loadTab(item, 'js-tab-2');
          }
        });
        localStorage.setItem('tabData', JSON.stringify(data));
      });
    }
  }


  function loadThirdTabMethod(id) {
    debugger;
    if(localStorage.tabData) {
      var localData = JSON.parse(localStorage.getItem('tabData'));
      localData.forEach(function(item, index) {
        if(item.tab_id == 'js-tab-3') {
          config.fn.loadTab(item, 'js-tab-3');
        }
      });
    }else {
      getTabData("/data-model/tab-data.json", function(data) {
        console.log(data);
        data.forEach(function(item, index) {
          if(item.tab_id == 'js-tab-3') {
            config.fn.loadTab(item, 'js-tab-3');
          }
        });
        localStorage.setItem('tabData', JSON.stringify(data));
      });
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
    getTabData("/data-model/tab-data.json", function(data) {
      console.log(data);
      data.forEach(function(item, index) {
        if(item.tab_id == 'js-tab-1') {
          config.fn.loadTab(item, 'js-tab-1');
        }
      })
    });
  }

})(window)
