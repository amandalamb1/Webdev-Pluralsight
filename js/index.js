//Index.js//

$(document).ready(function(){


"use strict";



/* var msg = "hello Javascript";
console.log(msg);

var resultsdiv = document.getElementById("results");
resultsdiv.innerHTML = "<p>This is from Javascript</p>";*/
 
var resultList = $("#resultList");
resultList.text("This is from JQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
    resultList.toggle(500);

    if (toggleButton.text()== "Hide") toggleButton.text("Show");
    else toggleButton.text ("Hide");

});

var listItems = $("header nav li");
listItems.css("font-weight", "bold");
listItems.css("font-size", "18px");






/*
var result = {
    name: "jQuery",
    language: "Javascript",
    score: 4.5,
    showlog: function (){

    },
    owner: {
        login: "amandalamb",
        id: 123456
    }
};

result.phoneNumber = "123-456-7890";

console.log(result.phoneNumber);

var results = [{
    name: "jQuery",
    language: "Javascript",
    score: 4.5,
    showlog: function (){

    },
    owner: {
        login: "amandalamb",
        id: 123456
    }
},{
    name: "jQuery UI",
    language: "Javascript",
    score: 3.5,
    showlog: function (){

    },
    owner: {
    login: "amandalamb",
    id: 123456
    }
}];

results.push(result);
results.push({
    name: "dummy project"
});

for (var x = 0; x < results.length; x++) {
    var result = results[x];
    if (result.score > 4) continue;
    console.log(result.name);
}
 */
/* console.log("msg is " +typeof(msg));
console.log("resultsDiv is " +typeof(resultsDiv));

var none;

console.log("none is " +typeof(none));

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

if (!none ){
    console.log("none is undefined")
}

if (aNumber === "10"){
    console.log ("10 is 10")
}

//function showMsg (msg){
//    console.log("showMsg: " +msg);
//}
function showMsg(msg, more) {
    if (more) {
        console.log("showMsg: " +msg + more);
    } else {
        console.log("showMsg: " + msg);
    }
}
showMsg("some Information");
showMsg("more information", " and even more");

var showIt = function (msg) {
    console.log(msg);
}

showIt("some message");

function showItThen(msg, callback) {
    showIt(msg);
    callback();
}

showItThen("showItThen called", function () {
    console.log("callback called");
});

var inGlobal = true;

function testMe() {
    console.log("test me(): " + inGlobal);

    var someMsg = "some Message";
    console.log("testme(): " + someMsg); 

    showItThen("with Closure", function () {
        showIt("testMe with closure(): " + someMsg);
    });
    
}

testMe(); */

});