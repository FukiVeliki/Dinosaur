const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump(){
    if(dino.classList != "jump"){
    dino.classList.add("jump");

   setTimeout( function() {
    dino.classList.remove("jump");
   }, 300);
 }
}

let isAlive = setInterval(function (){

    // get Y position of dino
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    // get X position of cactus
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

     

}, 10);

document.addEventListener("keydown", function(event){
  jump();
});