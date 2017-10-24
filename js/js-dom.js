function init() {
	var container = document.querySelector("#container");
	container.classList.add("fancy-container");

	var boton = document.createElement('button');
	boton.textContent = "Soy un botón agregado con JS";
	boton.classList.add("fancy-button");

	var clickBoton = function (event) {
		alert("Le diste click al botón");
		console.log("Le diste click al botón", event.target);
		event.stopPropagation();	
	};

	var clickContainer = function (event) {
		alert("Le diste click al container");
		console.log("Le diste click al container", event.target);
		event.stopPropagation();	
	};

	boton.addEventListener('click', clickBoton);
	container.addEventListener('click', clickContainer);

	container.appendChild(boton);
}

window.addEventListener('load', init);