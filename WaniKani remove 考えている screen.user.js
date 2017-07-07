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
    $(document).ready(function() {
        if (/\/review\/./.test(document.URL)) {
            $('#loading').remove();
            if (!document.getElementById('loading')) console.log('Removal of waiting screen successful!');
        } else if (/\/lesson/.test(document.URL)) {
            $('#loading-screen').remove();
            if (!document.getElementById('loading-screen')) console.log('Removal of waiting screen successful!');
        }
    });
})();