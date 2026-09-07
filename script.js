console.log("Hello");
const startbutton = document.getElementById("startbutton");
const message = document.getElementById("message")
const questionBank = document.getElementById("question-bank");
questionBank.style.display = "none";
startbutton.addEventListener("click", function () {message.textContent = "Let's Find This Day of Yours"; questionBank.style.display = "block";
	console.log("Yup button clicked!");
setTimeout(function () {window.location.href = "questions.html";}, 5000);
});