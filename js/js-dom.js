function init() {
	var container = document.querySelector("#container");
	container.style = "background-color: #2196F3;height: 10rem;";

	var boton = document.createElement('button');
	boton.textContent = "Soy un botón agregado con JS";

	container.appendChild(boton);
}

window.addEventListener('load', init);