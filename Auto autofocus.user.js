// ==UserScript==
// @name         Auto autofocus
// @version      1.0
// @description  Auto focuses the cursor in websites to the first input box
// @author       Abraham Gross
// @match        *
// @grant        none
// @License      MIT License Copyright (c) 2017 Abraham Gross
// ==/UserScript==

(function() {
    var inputs = document.getElementsByTagName('input');
    for(var i=inputs.length-1; i>=0; --i) if(inputs[i].type === "text") inputs[i].focus();
})();
