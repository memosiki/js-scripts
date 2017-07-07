// ==UserScript==
// @name         WaniKani remove 考えている screen
// @version      1.0
// @description  try to take over the world!
// @author       Abraham Gross
// @match        *://www.wanikani.com/lesson/session*
// @match        *://www.wanikani.com/review/session*
// ==/UserScript==

(function() {
    $( document ).ready(function() {
        $('#loading').remove();
        console.log('Removal of waiting screen successful!');
    });
})();