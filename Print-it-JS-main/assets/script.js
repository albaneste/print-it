const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let count = 0;

document.addEventListener("DOMContentLoaded", (event) => {


	let dots = document.querySelector(".dots");


	slides.forEach(slide => {
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dots.appendChild(dot)
	})



	const image = document.querySelector(".banner-img")
	const texte = document.querySelector("#banner p")

	const right = document.querySelector(".arrow_right");
	right.addEventListener("click", next);

	const left = document.querySelector(".arrow_left");
	left.addEventListener("click", previous);

	function showSlides(count) {
		image.src = "./assets/images/slideshow/" + slides[count].image
		texte.innerHTML = slides[count].tagLine
		actif(count)
	}

	function next() {
		count++
		if (count == slides.length)
			count = 0
		showSlides(count);

	}

	function previous() {
		count--
		console.log(count)
		if (count == -1)
			count = parseInt(slides.length) - 1
		showSlides(count);
	}

	function actif(count) {

		const dots = document.querySelectorAll(".dot")

		dots.forEach(dot => dot.classList.remove("dot_selected"))

		dots[count].classList.add("dot_selected")

	}

});
