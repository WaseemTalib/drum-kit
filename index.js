var drumLength = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumLength; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var html = this.innerHTML;
        makeSound(html);
        clickAnimation(html);
    })

}
document.addEventListener("keypress", function(keyPressed) {
    var key = keyPressed.key;
    makeSound(key);
    clickAnimation(key);

})

clickAnimation = (html) => {
    let clickedButton = document.querySelector("." + html);
    clickedButton.classList.add("pressed");
    setTimeout(() => {
        clickedButton.classList.remove("pressed");
    }, 100)


}

makeSound = (html) => {
    if (html === "w") {
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
    } else if (html === "a") {
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
    } else if (html === "s") {
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
    } else if (html === "d") {
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
    } else if (html === "j") {
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
    } else if (html === "k") {
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
    } else {
        alert("this is not the right key! Press given ones.")
        location.reload()
    }
}