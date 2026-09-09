console.log("Hello");
let answers ={};
const startbutton = document.getElementById("startbutton");
const message = document.getElementById("message")
const questionBank = document.getElementById("question-bank");
if (questionBank) {
	questionBank.style.display = "none";
}

if (startbutton) {
	startbutton.addEventListener("click", function () {message.textContent = "Let's Find This Day of Yours"; questionBank.style.display = "block";
		console.log("Yup button clicked!");
		setTimeout(function () {window.location.href = "questions.html";}, 5000);
	});
}
const questionForm = document.getElementById("question-form");
const musicForm = document.getElementById("music-form");
const music = document.getElementById("music");
const musicResult = document.getElementById("music-result");
const foodForm = document.getElementById("food-form");
const food = document.getElementById("food");
const foodResult = document.getElementById("food-result");
const activityForm = document.getElementById("activity-form");
const activity = document.getElementById("activity");
const activityResult = document.getElementById("sports-result");
const movieForm = document.getElementById("movie-form");
const movie = document.getElementById("movie");
const movieResult = document.getElementById("movie-result");
const socialForm = document.getElementById("social-form");
const social = document.getElementById("social");
const socialResult = document.getElementById("social-result");
const petForm = document.getElementById("pet-form");
const pet = document.getElementById("pet");
const petResult = document.getElementById("pet-result");
const vaccationForm = document.getElementById("vaccation-form");
const vaccation = document.getElementById("vaccation");
const vaccationResult = document.getElementById("vaccation-result");
if (vaccationForm) {
	vaccationForm.addEventListener("submit", function (event) { let playerVaccation = vaccation.value;
		event.preventDefault();
		const answer8 = vaccation.value;
		console.log("User's answer:", playerVaccation);
		answers.vaccation = answer8;
		if (answer8 === "beach") {
			vaccationResult.textContent = "You are relaxed and enjoy the warmth of the sun!";
		} else if (answer8 === "mountains") {
		vaccationResult.textContent = "You are adventurous and enjoy the beauty of nature!";
	} else if (answer8 === "city") {
		vaccationResult.textContent = "You are curious and enjoy exploring new cultures.";
	} 
		else if (answer8 === "countryside") {
		vaccationResult.textContent = "You are peaceful and enjoy the simplicity of life!";
	} else {
		vaccationResult.textContent = "Hmm, I'm not sure about that vacation preference. Please try again!";
	}
	});
}	
if (petForm) {
	petForm.addEventListener("submit", function (event) { let playerPet = pet.value;
		event.preventDefault();
		const answer7 = pet.value;
		answers.pet = answer7;
		console.log("User's answer:", playerPet);
		if (answer7 === "dog") {
			petResult.textContent = "You are loyal and enjoy companionship!";
		} else if (answer7 === "cat") {
		petResult.textContent = "You are independent and enjoy your own space!";
	} else if (answer7 === "bird") {
		petResult.textContent = "You are free-spirited and enjoy exploring new horizons.";
	} 
		else if (answer7 === "fish") {
		petResult.textContent = "You are calm and enjoy a peaceful environment!";
	} else {
		petResult.textContent = "Hmm, I'm not sure about that pet preference. Please try again!";
	}
	});
}	
if (socialForm) {
	socialForm.addEventListener("submit", function (event) { let playerSocial = social.value;
		event.preventDefault();
		const answer6 = social.value;
		answers.social = answer6;
		console.log("User's answer:", playerSocial);
		if (answer6 === "introvert") {
			socialResult.textContent = "You are reflective and enjoy spending time alone!";
		} else if (answer6 === "extrovert") {
		socialResult.textContent = "You are outgoing and enjoy being around others!";
	} else if (answer6 === "ambivert") {
		socialResult.textContent = "You have a balanced personality and enjoy both socializing and alone time.";
	} 
		else if (answer6 === "social butterfly") {
		socialResult.textContent = "You are charismatic and love being the center of attention!";
	} else {
		socialResult.textContent = "Hmm, I'm not sure about that social preference. Please try again!";
	}
	});
}	
if (movieForm) {
	movieForm.addEventListener("submit", function (event) { let playerMovie = movie.value;
		event.preventDefault();
		const answer5 = movie.value;
		answers.movie = answer5;
		console.log("User's answer:", playerMovie);
		if (answer5 === "action") {
			movieResult.textContent = "You are adventurous and love excitement!";
		} else if (answer5 === "comedy") {
		movieResult.textContent = "You have a great sense of humor and enjoy making others laugh!";
	} else if (answer5 === "drama") {
		movieResult.textContent = "You are empathetic and appreciate the complexities of life.";
	} 
		else if (answer5 === "horror") {
		movieResult.textContent = "You are brave and enjoy facing your fears!";
	} else {
		movieResult.textContent = "Hmm, I'm not sure about that movie genre. Please try again!";
	}
	});
}	
if (activityForm) {
	activityForm.addEventListener("submit", function (event) { let playerActivity = activity.value;
		event.preventDefault();
		const answer4 = activity.value;
		answers.activity = answer4;
		console.log("User's answer:", playerActivity);
		if (answer4 === "reading") {
			activityResult.textContent = "You are introspective and enjoy quiet moments of reflection.";
		} else if (answer4 === "sports") {
		activityResult.textContent = "You are energetic and enjoy staying active!";
	} else if (answer4 === "gaming") {
		activityResult.textContent = "You are imaginative and enjoy exploring new worlds!";
	} 
		else if (answer4 === "cooking") {
		activityResult.textContent = "You are creative and enjoy experimenting with new ideas!";
	} else {
		activityResult.textContent = "Hmm, I'm not sure about that activity. Please try again!";
	}
	});
}	
if (foodForm) {
	foodForm.addEventListener("submit", function (event) { let playerFood = food.value;
		event.preventDefault();
		const answer3 = food.value;
		answers.food = answer3;
		console.log("User's answer:", playerFood);
		if (answer3 === "pizza") {
			foodResult.textContent = "You are fun-loving and enjoy the simple pleasures in life!";
		} else if (answer3 === "sushi") {
		foodResult.textContent = "You are sophisticated and appreciate the finer things in life!";
	} else if (answer3 === "burger") {
		foodResult.textContent = "You are laid-back and enjoy comfort and familiarity.";
	} 
		else if (answer3 === "salad") {
		foodResult.textContent = "You are health-conscious and value balance in your life!";
	} else {
		foodResult.textContent = "Hmm, I'm not sure about that food choice. Please try again!";
	}
	});
}	
if (musicForm) {
	musicForm.addEventListener("submit", function (event) { let playerMusic = music.value;
		event.preventDefault();
		const answer2 = music.value;
		answers.music = answer2;
		console.log("User's answer:", playerMusic);
		if (answer2 === "pop") {
			musicResult.textContent = "You have a lively and energetic personality!";
		} else if (answer2 === "rock") {
		musicResult.textContent = "You are bold and adventurous!";
	} else if (answer2 === "classical") {
		musicResult.textContent = "You are calm and thoughtful.";
	} 
		else if (answer2 === "jazz") {
		musicResult.textContent = "You are creative and expressive!";
	} else {
		musicResult.textContent = "Hmm, I'm not sure about that music genre. Please try again!";
	}
	});
}	
const weather = document.getElementById("weather");
const result = document.getElementById("result");
if (questionForm) {
	questionForm.addEventListener("submit", function (event) { let playerWeather = weather.value;
		event.preventDefault();
		const answer1 = weather.value;
		answers.weather = answer1;
		console.log("User's answer:", playerWeather);
		if (answer1 === "sunny") {
			result.textContent = "Great! You will have a bright and cheerful day!";
		} else if (answer1 === "rainy") {
		result.textContent = "Looks like you might need an umbrella today!";
	} else if (answer1 === "cloudy") {
		result.textContent = "A calm and peaceful day awaits you.";
	} 
		else if (answer1 === "snowy") {
		result.textContent = "Bundle up! A snowy day is ahead!";
	} else {
		result.textContent = "Hmm, I'm not sure about that weather. Please try again!";
	}
	});
}
const finalResult = document.getElementById("final-result");
const perfectDayPlan = document.getElementById("perfect-day-plan");
function displayPerfectDayPlan() {
	finalResult.style.display = "block";let recommendation="";
	if(answers.weather ==="sunny") {
		recommendation += "Enjoy the sunshine and have a picnic in the park! ";
	} else if(answers.weather ==="rainy") {
		recommendation += "Stay cozy indoors with a good book or movie! ";
	} else if(answers.weather ==="cloudy") {
		recommendation += "Take a leisurely walk and enjoy the calm atmosphere! ";
	} else if(answers.weather ==="snowy") {
		recommendation += "Build a snowman or have a snowball fight! ";
	}
	if(answers.music) {
		recommendation += `Listen to some ${answers.music} music to set the mood! `;
	}
	if(answers.food) {
		recommendation += `Treat yourself to some delicious ${answers.food}! `;
	}
	if(answers.activity) {
		recommendation += `Engage in your favorite activity: ${answers.activity}. `;
	}
	if(answers.movie) {
		recommendation += `Watch a ${answers.movie} movie to relax and unwind. `;
	}
	if(answers.social) {
		recommendation += `Spend time with your ${answers.social} friends or family. `;
	}
	if(answers.pet) {
		recommendation += `Enjoy some quality time with your ${answers.pet}. `;
	}
	if(answers.vaccation) {
		recommendation += `Plan a trip to the ${answers.vaccation} for a perfect getaway! `;
	}
	perfectDayPlan.textContent = recommendation;	
}
		const showAnswersButton = document.getElementById("show-answers-button");
		if (showAnswersButton) {
			showAnswersButton.addEventListener("click", function () {
				const answersContainer = document.getElementById("answers-container");
				const answersList = document.getElementById("answers-list");
				answersContainer.style.display = "block";displayPerfectDayPlan();
				answersList.innerHTML = `
					<p>Weather: ${answers.weather || "N/A"}</p>
					<p>Music: ${answers.music || "N/A"}</p>
					<p>Food: ${answers.food || "N/A"}</p>
					<p>Activity: ${answers.activity || "N/A"}</p>
					<p>Movie: ${answers.movie || "N/A"}</p>
					<p>Social: ${answers.social || "N/A"}</p>
					<p>Pet: ${answers.pet || "N/A"}</p>
					<p>Vaccation: ${answers.vaccation || "N/A"}</p>
				`;
			});
		}			