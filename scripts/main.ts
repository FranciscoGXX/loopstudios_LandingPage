
const NavToggle= document.getElementById("HeaderToggle");
const HeaderBody= document.getElementById("HeaderBody");
const Toggle= document.getElementById("Toggle");

Toggle?.addEventListener("click",e=>{
    HeaderBody?.classList.toggle("ToggleBody");
    NavToggle?.classList.toggle("ToggleMenu");
});