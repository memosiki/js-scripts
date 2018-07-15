// ==UserScript==
// @name         Kitsu Human Score
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Puts words next to the score for a more accurate way to select how you thought an anime was.
// @author       Abraham Gross
// @match        https://kitsu.io/users/*
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @license      MIT

// ==/UserScript==

(function() {
    document.body.onclick = function(){
        console.log( "Handler for .onclick() called." );
        if(document.querySelector(".noUi-tooltip")){
            console.log("can read");
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    var score = document.querySelector('div.noUi-tooltip');
                    console.log(score);
                    console.log(score.textContent);
                    switch(score.textContent) {
                        case "10":score.textContent = "10 (Masterpiece)"; break;
                        case "9": score.textContent = "9 (Amazing)";      break;
                        case "8": score.textContent = "8 (Very Good)";    break;
                        case "7": score.textContent = "7 (Good)";         break;
                        case "6": score.textContent = "6 (Fine)";         break;
                        case "5": score.textContent = "5 (Average)";      break;
                        case "4": score.textContent = "4 (Bad)";          break;
                        case "3": score.textContent = "3 (Very Bad)";     break;
                        case "2": score.textContent = "2 (Horrible)";     break;
                        case "1": score.textContent = "1 (Appaling)";     break;
                    }
                    console.log(score.textContent);
                });
            });
            observer.observe(document.querySelector('div.noUi-tooltip'), { childList: true });
        }
    };
})();