// ==UserScript==
// @name        Netflix - Subtitle Select Keyboard Shortcut
// @description When pressing 'a', the preselected subtitle will automatically be toggled.
// @license     MIT
// @version     2.0
// @include     https://www.netflix.com/*
// @grant       none
// ==/UserScript==

//To get the name of your specific subtitle language open the console and select it. It will show up as "Selected Subtitle: Language"
var SUBTITLE = "Japanese";

(function(){
    document.addEventListener('keydown', function(event){
        if(event.code==='KeyA') {
            console.log(event.code);
            setTimeout(function(){
                let subsMenu = document.querySelector("#appMountPoint > div > div > div > div > div > div.nfp.AkiraPlayer.classic-ui > div > div.controls.legacy-controls-styles.PlayerControls--with-dim-background.active > div > div.PlayerControls--main-controls > div.PlayerControls--bottom-controls.nfp-control-row.bottom-controls > div.PlayerControls--button-control-row > div:nth-child(7) > button");
                console.log(subsMenu);
                if(subsMenu) {
                    subsMenu.click();
                    toggle(subsMenu);
                    setTimeout(function(){
                        document.querySelector('#appMountPoint > div > div > div > div > div > div.nfp.AkiraPlayer.classic-ui > div > div.controls.legacy-controls-styles.PlayerControls--with-dim-background.active > div > div.controls-full-hit-zone > div > div').click();
                    }, 1000);
                }
            }, 300);

        }
    });

    //     var observer = new MutationObserver(function(mutations) {
    //         mutations.forEach(function(mutation) {
    //             mutation.addedNodes.forEach(function(node) {
    //                 if(node.nodeName.toUpperCase() == 'DIV') {
    //                     let subsMenu = (node).querySelector("ul.track-list.structural.track-list-subtitles");
    //                     if(subsMenu) {
    //                         toggle(subsMenu);
    //                     }
    //                 }
    //             });
    //         });
    //     });
    //     observer.observe(document.body, { childList: true, subtree: true });
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