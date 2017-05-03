//Developer: Sabbir Ahmed Siddiquee,
//Software Engineer, Selise rockin' software
//Git profile: https://github.com/prince3339

//safe code mode
// here ; is used to make sure that other codes loaded from different library/framework/file finished

//Configuration of the Application
//It's the container of all actionalable elements
;(function (window) {
  'use strict';
  var vm = window;

  vm.config = {
    elems: {
      tab_one_content: document.getElementById('tab_one_content'),
      tab_two_content: document.getElementById('tab_two_content'),
      tab_three_content: document.getElementById('tab_three_content'),
    }
  }
  //console.log(config);
})(window)
