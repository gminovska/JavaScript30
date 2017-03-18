window.addEventListener("keydown", function(e) {
    playSound(e);
    addAnimation(e);
});

//select all the keys
var keys = document.querySelectorAll(".key");

//listen for the end of the transition event and then remove the class added by the addAnimation()
// (we have to loop, can't just use keys.addEventListener())
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

/******function declarations*******/

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio) {
        //rewind from the beginning so repeated clicks play the sound over and over
        audio.currentTime = 0;
        audio.play();
    }
}  

function addAnimation(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(key) {
        //adding a class
        key.classList.add("playing");
        //removing a class after 
        //setting a timer approach (can get out of sync with the css transition property)
        // setTimeout(function() {
        //     key.classList.remove("playing");
        // }, 100);
    }
}
function removeTransition(e) {

    //removing the class
    //this is the key, because of implicit binding: key.AddEventListener(...)
    this.classList.remove("playing");
}    
    


