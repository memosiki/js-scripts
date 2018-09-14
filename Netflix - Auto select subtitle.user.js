// ==UserScript==
// @name        Netflix - Auto select subtitle
// @description When hovering over the audio/subtitle option, the preselected will automatically be toggled.
// @license     MIT
// @version     1.0
// @include     https://www.netflix.com/*
// @grant       none
// @updateURL https://openuserjs.org/meta/grenzionky/Netflix_-_Auto_select_subtitle.meta.js

// ==/UserScript==

//To get the name of your specific subtitle language open the console and select it. It will show up as "Selected Subtitle: Language"
var SUBTITLE = "Japanese";

(function(){
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if(node.nodeName.toUpperCase() == 'DIV') {
                    let subsMenu = (node).querySelector("ul.track-list.structural.track-list-subtitles");
                    if(subsMenu) {
                        toggle(subsMenu);
                    }
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();

function toggle(subsMenu) {
        var subsoff = false;
        document.querySelector("div > ul.track-list.structural.track-list-subtitles").childNodes.forEach(function(lang) {
            if(lang.getAttribute('class')==='list-header') return;
            var currentSub = lang.getAttribute('data-uia').match(/\w+$/)[0];
            var isSelected = lang.getAttribute('class').includes("selected");
            if(isSelected) console.log("Selected Subtitle: "+currentSub);
            if(currentSub === "Off") {
                //if subtitles are turned off
                if(isSelected) subsoff = true;
                else lang.click();
            }
            if(currentSub === SUBTITLE && subsoff) {
                lang.click();
                subsoff = false;
            }
        });
}
