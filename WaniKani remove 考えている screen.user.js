// ==UserScript==
// @name         WaniKani remove 考えている screen
// @version      1.0
// @description  This script will remove the 考えている loading screen in the lesson and review sections in WaniKani.
// @match        *://www.wanikani.com/lesson/session*
// @match        *://www.wanikani.com/review/session*
// @author       Abraham Gross
// @License      MIT License
// ==/UserScript==

(function() {
    $( document ).ready(function() {
        $('#loading').remove();
        console.log("Removal of waiting screen successful!");
    });
})();