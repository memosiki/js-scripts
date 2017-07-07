// ==UserScript==
// @name         WaniKani remove 考えている screen
// @version      1.1
// @description  This script will remove the 考えている loading screen in the lesson and review sections in WaniKani.
// @match        *://www.wanikani.com/lesson/session*
// @match        *://www.wanikani.com/review/session*
// @author       Abraham Gross
// @License      MIT License
// ==/UserScript==

/*
INSTRUCTIONS: To make this script more foolproof, change "remove" on lines 20 & 22 to "forceRemove", and change "1000" on line 24 to "2000".
     WARNING: Doing this might make this script incompatible with other scripts, so unless you HAVE to, leave it the way it is.
*/

(function() {
    $(document).ready(function() {
        setTimeout(function() { //Code to run After timeout elapses
            if (/\/review\/./.test(document.URL)) {
                remove('loading');
            } else if (/\/lesson/.test(document.URL)) {
                remove('loading-screen');
            }
        }, 1000); //1 second will elapse and Code will execute. THIS IS VERY IMPORTANT! DO NOT REMOVE!
    });
})();


//DO NOT TOUCH BELOW (UNLESS KNOW WHAT YOU'RE DOING)
function remove (id) {
    document.getElementById(id).setAttribute('style', 'display: none;');
    if (document.getElementById(id).getAttribute('style') === 'display: none;') console.log('Removal of 考えている screen successful!');
}

function forceRemove(id) {
    $(id).remove();
    if (!document.getElementById(id)) console.log('Removal of waiting screen successful!');
}