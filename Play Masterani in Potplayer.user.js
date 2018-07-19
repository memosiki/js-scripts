// ==UserScript==
// @name         Play Masterani in Potplayer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Will automatically play videos in potplayer
// @author       Abraham Gross
// @include      *mp4upload.com*
// @include      *streamango.com*
// @include      *rapidvideo.com*
// @include      *openload.co*
// @include      *stream.moe*
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @license      MIT
// ==/UserScript==

/*
!!!IMPORTANT!!!
You must first set up potplayer for this to work:

add this to regedit (source: https://stackoverflow.com/a/31206594/5287133):

[HKEY_CLASSES_ROOT\potplayer\shell\open\command]
@="cmd /k ( set \"var=%1\" & call set var=%%var:potplayer://=%% & call C:\\PotPlayer\\PotPlayer.exe %%var%%)"

*/

(function() {
    window.addEventListener("load", function(event) {
        console.log(window.location.href);

        if(window.location.href.includes("stream.moe")) {
            var text = document.querySelector('#moe-framer').innerText;
            var enc = text.substring(text.indexOf("atob('"));
            openVideo(new DOMParser().parseFromString(atob(enc.substring(6, enc.indexOf("');"))), "text/html"));
        } else {
            openVideo(document);
        }
    });
})();

function openVideo(document) {
    var video = document.getElementsByTagName('video')[0];
    //     console.log(video);

    try {
        video = video.firstElementChild.src;
    } catch(error) {
        video = video.src;
    }

    console.log(video);
    GM_openInTab("potplayer://" + video, {loadInBackground: true}).close();
}
