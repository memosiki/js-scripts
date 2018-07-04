// ==UserScript==
// @name         Better Learner's Dictionary audio
// @namespace    http://tampermonkey.net/
// @version      7.2.2018
// @description  Play the word's audio onclick right away without the popup
// @author       Abraham Gross
// @match        *.learnersdictionary.com/*
// @grant        none
// ==/UserScript==

(function() {
    var soundButton = document.querySelector('[data-file]');
    soundButton.classList.remove("play_pron");
    soundButton.onclick = function() {
        var dir = soundButton.getAttribute('data-dir');
        var file = soundButton.getAttribute('data-file');
        new Audio("https://media.merriam-webster.com/audio/prons/en/us/mp3/" + dir + "/" + file + ".mp3").play();
    }
})();