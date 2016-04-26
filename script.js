
function makePurple(element) {
  if(element.classList.contains("purple")){
    removeClass(element, "purple");
  }
  else {
    addClass(element, "purple");
  };
}

function makeOrange() {
  var items = document.getElementsByClassName("list-item");
  for(var i = 0; i < items.length; i++) {
    addClass(items[i], "orange");
  };
}

function addClass(element, className) {
  element.classList.add(className);
}

function removeClass(element, className) {
  element.classList.remove(className);
}

function defaultColor() {
 var items = document.getElementsByClassName("list-item");
 for(var i = 0; i< items.length; i++) {
   if(items[i].classList.contains("purple")){
     removeClass(items[i], "purple");
   }
   if(items[i].classList.contains("orange")){
     removeClass(items[i], "orange");
   };
 };
}

function hideFirstP() {
  var element = document.getElementById("firstP");
  if(element.classList.contains("hide-element")){
    removeClass(element, "hide-element");
  } else {
    addClass(element, "hide-element");
  };
}

function updateBackground() {
  var element = document.getElementById("secondP");
  if(element.classList.contains("blue-background")){
    removeClass(element, "blue-background");
    addClass(element, "orange-background");
  } else if(element.classList.contains("orange-background")){
    removeClass(element, "orange-background");
  } else {
    addClass(element, "blue-background");
  };
}

function weekToEon() {
  var elements = document.getElementsByTagName("title");
  elements[0].innerHTML = "Eon 7, Day 2 Practice";

  var element = document.getElementById("header");
  element.innerHTML = "Eon 7, Day 2 Practice";
}

function eonToWeek() {
  var elements = document.getElementsByTagName("title");
  elements[0].innerHTML = "Week 7, Day 2 Practice";

  var element = document.getElementById("header");
  element.innerHTML = "Week 7, Day 2 Practice";
}

function textJustify() {
  var element = document.getElementById("forthP");
  if(element.classList.contains("right-justify")){
    removeClass(element, "right-justify");
  } else {
    addClass(element, "right-justify");
  };
}

function imageToggle(element) {
  element.innerHTML = "THIS LINK!!";
  image = document.getElementById("cute-cat");
  removeClass(image, "hidden");
}

function hideImage(element) {
  addClass(element, "hidden");
  var item = document.getElementById("link-loud");
  item.innerHTML = "this link";
}

function textPrompt(element) {
  var text = prompt("Please provide a word or phrase.");
  element.innerHTML = text;
}
