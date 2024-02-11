function changeColor() {
    var button = document.getElementById("clickButton");
    
    // Change the button color to green
    button.style.backgroundColor = "green";

    // Play a sound (you need to have a sound file named ding.mp3 in the same directory as your HTML file)
    var audio = new Audio('ding.mp3');
    audio.play();

    // Reset the button color after 1 second
    setTimeout(function() {
        button.style.backgroundColor = "";
    }, 1000);
}
