
const NavToggle= document.getElementById("HeaderToggle");
const HeaderBody= document.getElementById("HeaderBody");
const Toggle= document.getElementById("Toggle");

Toggle?.addEventListener("click",e=>{
    HeaderBody?.classList.toggle("ToggleBody");
    NavToggle?.classList.toggle("ToggleMenu");
});


// Get viewport width
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// Get viewport height
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

// Print the viewport size
console.log("Viewport width: " + viewportWidth);
console.log("Viewport height: " + viewportHeight);
