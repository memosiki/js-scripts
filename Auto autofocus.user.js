// ==UserScript==
// @name         Auto autofocus
// @version      1.2.1
// @description  Auto focuses the cursor in websites to the main search field
// @author       Abraham Gross
// @include      http*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    //get all of the inputs in the document
    var allInputs = document.getElementsByTagName('input');
    //will be used as a flag if no inputs are found
    var gotFocused = false;
    //will be used to reiterate over the possible matches to find a more accurate result
    var betterInputs = [];
    
    //basic algorithm to just isolate text input fields
    for(var i=allInputs.length-1; i>=0; --i) {
        if(allInputs[i].type === "text") {
            allInputs[i].focus();
			betterInputs.push(allInputs[i]);
            gotFocused = true;
        }
    }
    
    //reiterate over all the text inputs to isolate the best match
    for(var j = betterInputs.length - 1; j >= 0; --j) {
	    var input = betterInputs[j];
	    if(input.classList.toString().toLowerCase().includes("search") || input.placeholder.toLowerCase().includes("search")) {
            input.focus();
        }
    }
    
    //if no text input was found, default to the first input field.
    if (!gotFocused) allInputs[0].focus();
})();
