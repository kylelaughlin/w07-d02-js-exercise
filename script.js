
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
  var colors = ["blue", "orange", "white"];
  
}
