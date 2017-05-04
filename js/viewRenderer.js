//Developer: Sabbir Ahmed Siddiquee,
//Software Engineer, Selise rockin' software
//Git profile: https://github.com/prince3339

//safe code mode
// here ; is used to make sure that other codes loaded from different library/framework/file finished

//Main html view renderer engine where we'll pass an array of objects and it'll generate a list view
;
(function(window) {
    'use strict';
    var vm = window;
    config.fn.renderTab = renderTab;

    function renderTab(data, id) {
      switch (id) {
        case "js-tab-1":
          config.elems.tab_one_content.innerHTML = '';
          var first_heading = document.createElement('h3');
          first_heading.className ="font-size-fixed-18 margin-bottom-0";
          first_heading.innerText = data.tab_heading;

          var first_content = document.createElement('p');
          first_content.className = "font-size-fixed-14 margin-top-0";
          first_content.innerText = data.tab_content;

          config.elems.tab_one_content.appendChild(first_heading);
          config.elems.tab_one_content.appendChild(first_content);
          break;
        case "js-tab-2":
          config.elems.tab_two_content.innerHTML = '';
          var second_heading = document.createElement('h3');
          second_heading.className ="font-size-fixed-18 margin-bottom-0";
          second_heading.innerText = data.tab_heading;

          var second_content = document.createElement('p');
          second_content.className = "font-size-fixed-14 margin-top-0";
          second_content.innerText = data.tab_content;

          config.elems.tab_two_content.appendChild(second_heading);
          config.elems.tab_two_content.appendChild(second_content);
          break;
        case "js-tab-3":
          config.elems.tab_three_content.innerHTML = '';
          var third_heading = document.createElement('h3');
          third_heading.className ="font-size-fixed-18 margin-bottom-0";
          third_heading.innerText = data.tab_heading;

          var third_content = document.createElement('p');
          third_content.className = "font-size-fixed-14 margin-top-0";
          third_content.innerText = data.tab_content;

          config.elems.tab_three_content.appendChild(third_heading);
          config.elems.tab_three_content.appendChild(third_content);
          break;
        default:
      }
    }
})(window)
