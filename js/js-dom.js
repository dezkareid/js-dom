function init() {
	var container = document.querySelector("#container");
	container.classList.add("fancy-container");

	var boton = document.createElement('button');
	boton.textContent = "Soy un botón agregado con JS";
	boton.classList.add("fancy-button");

	container.appendChild(boton);
}

window.addEventListener('load', init);