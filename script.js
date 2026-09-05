console.log("Hello");
const startbutton = document.getElementById("startbutton");
const message = document.getElementById("message")
startbutton.addEventListener("click", function () {message.textContent = "Let's Find This Day of Yours";
	console.log("Yup button clicked!");
});