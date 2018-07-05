// ==UserScript==
// @name         Auto autofocus
// @version      1.1
// @description  Auto focuses the cursor in websites to the first input box
// @author       Abraham Gross
// @include      http*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    var inputs = document.getElementsByTagName('input');
    var gotFocused = false;
    for(var i=inputs.length-1; i>=0; --i) {
        if(inputs[i].type === "text") {
            inputs[i].focus();
            gotFocused = true;
        }
    }
    if (!gotFocused) inputs[0].focus();
})();
