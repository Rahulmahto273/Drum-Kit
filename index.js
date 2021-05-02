// getting user's name...
var data ;
do {
	data = prompt("Please enter your name*: ");
} while(data =="")
var data_0 = data.slice(0,1).toUpperCase();
var data_1 = data.slice(1,data.length).toLowerCase();
var user = data_0 + data_1 ;

document.querySelector("#user").textContent = "Hi " + user + " ..." ;


// button pressed....
var length = document.querySelectorAll(".drum").length ;
for(var i=0; i<length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function createSound() {
			var letter = this.textContent;
			sounds (letter);
			buttonAnimation(letter);
	}); 
//on above we are not using paranthesis[()] because we want the function to happen after the button is clicked...
}

// keyboard pressed....
document.addEventListener("keypress", (letter) => {
	sounds(letter.key);
	buttonAnimation(letter.key);
})

function sounds (letter) {
	switch(letter) {
				case "w":
					var sound = new Audio("sounds/tom-1.mp3");
					sound.play(); //here, play() is a method...
					break;
				case "a":
					var sound = new Audio("sounds/tom-2.mp3");
					sound.play(); //here, play() is a method...
					break;
				case "s":
					var sound = new Audio("sounds/tom-3.mp3");
					sound.play(); //here, play() is a method...
					break;
				case "d":
					var sound = new Audio("sounds/tom-4.mp3");
					sound.play(); //here, play() is a method...
					break;
				case "j":
					var sound = new Audio("sounds/snare.mp3");
					sound.play(); //here, play() is a method...
					break;
				case "k":
					var sound = new Audio("sounds/kick-bass.mp3");
					sound.play(); //here, play() is a method...
					break;
				case "l":
					var sound = new Audio("sounds/crash.mp3");
					sound.play(); //here, play() is a method...
					break;
				default: console.log(letter);
			}

}

// adding animation to pressed buttons....
function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");

	setTimeout(() => {
		activeButton.classList.remove("pressed");
	}, 100)
}
