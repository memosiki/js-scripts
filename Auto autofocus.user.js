// ==UserScript==
// @name         Auto autofocus
// @version      1.3.1
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


	//first check if the website defined any search fields themselves
	for(var i=allInputs.length-1; i>=0; --i) {
		if(allInputs[i].type.toLowerCase().startsWith("search")) {
			allInputs[i].focus();
			gotFocused = true;
		}
	}

	//if the website didn't do that, then we have to figure out ourself which field is the search field
	if(!gotFocused) {
		//basic algorithm to just isolate text input fields
		for(var j=allInputs.length-1; j>=0; --j) {
			if(allInputs[j].type === "text") {
				allInputs[j].focus();
				betterInputs.push(allInputs[j]);
				gotFocused = true;
			}
		}

		//reiterate over all the text inputs to isolate the best match
		for(var k = betterInputs.length - 1; k >= 0; --k) {
			var input = betterInputs[k];
			if(betterInputs[k].classList.toString().toLowerCase().includes("search") || betterInputs[k].placeholder.toLowerCase().includes("search")) {
				betterInputs[k].focus();
			}
		}

		//if no text input was found, default to the first input field.
		if (!gotFocused) allInputs[0].focus();
	}
})();
