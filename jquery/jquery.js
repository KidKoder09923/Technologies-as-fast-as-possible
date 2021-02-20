//jQuery is referenced via the $ function, given a selector, it returns a JQueryObject

const element = $("#id");
$(".class");
$("tag");
$(document);

//You can call simplfied functions to the element
//jQuery elements functions can be chained, the line below returns "SUBSCRIBES" 
//The text function clean the params
const subscribe = element.text("SUBSCRIBE").text();

//You can pass jQuery elements as function params
function initElement(initer) {
    //You should return the passed jQuery element
    return initer;
}

//jQuery Element -> DOM Element
const dom = element.get(0);
//DOM -> jQuery
const $jquery = $(dom);

//BONUS: One-liner of jQuery <1MB
const $ = document.querySelector;