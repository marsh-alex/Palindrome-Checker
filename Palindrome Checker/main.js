


function palindrome(str) {
    let testStr = str
        .toLowerCase()
        .replace(/\s/g, "", /\W/g, "", /_/g, "")
        .split("")
        .reverse()
        .join("");
    
    let newStr = str
        .toLowerCase()
        .replace(/\s/g, "", /\W/g, "", /_/g, "");
    
    if (testStr === newStr) {
        return true;
    } else {
        return false;
    }
};


console.log(palindrome("Race Car")) // true
console.log(palindrome("alex")) //false

//START WEB API//
// Web API ---- JS to HTML//

let sumbitButtonEvent = document.getElementById('submitButton');

sumbitButtonEvent.addEventListener("click", function() {
    'use strict';

    let value = document.getElementById("inputString").value;

    let notification = document.getElementById("notification");

    let displayWord = document.getElementById("displayWord");

    if (palindrome(value)) {
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is a Palindrome!`;
        displayWord.innerHTML = `Forwards: ` + value.toLowerCase().replace(/\s/g, "", /\W/g, "", /_/g, "") + "<br>" + `Backwards: ` + value.toLowerCase().replace(/\s/g, "", /\W/g, "", /_/g, "").split("").reverse().join("");

    } else {
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `is NOT a Palindrome!`;
        displayWord.innerHTML = `Forwards: ` + value.toLowerCase().replace(/\s/g, "", /\W/g, "", /_/g, "") + "<br>" + `Backwards: ` + value.toLowerCase().replace(/\s/g, "", /\W/g, "", /_/g, "").split("").reverse().join("");
    }
});

// END WEB API //
