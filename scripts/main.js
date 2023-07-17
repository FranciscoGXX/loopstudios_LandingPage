var NavToggle = document.getElementById("HeaderToggle");
var HeaderBody = document.getElementById("HeaderBody");
var Toggle = document.getElementById("Toggle");
Toggle === null || Toggle === void 0 ? void 0 : Toggle.addEventListener("click", function (e) {
    HeaderBody === null || HeaderBody === void 0 ? void 0 : HeaderBody.classList.toggle("ToggleBody");
    NavToggle === null || NavToggle === void 0 ? void 0 : NavToggle.classList.toggle("ToggleMenu");
});
