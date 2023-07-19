var NavToggle = document.getElementById("HeaderToggle");
var HeaderBody = document.getElementById("HeaderBody");
var Toggle = document.getElementById("Toggle");
Toggle === null || Toggle === void 0 ? void 0 : Toggle.addEventListener("click", function (e) {
    HeaderBody === null || HeaderBody === void 0 ? void 0 : HeaderBody.classList.toggle("ToggleBody");
    NavToggle === null || NavToggle === void 0 ? void 0 : NavToggle.classList.toggle("ToggleMenu");
});
// Get viewport width
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
// Get viewport height
var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
// Print the viewport size
console.log("Viewport width: " + viewportWidth);
console.log("Viewport height: " + viewportHeight);
