function mostrar() {

	let nombre;
	let cantidad;
	let marca;
	let precio;
	let acumFelipe = 0;
	let acumArgentina = 0;
	let acumIllumina = 0;
	let acumCantidadFelipe = 0;
	let acumCantidadArgentina = 0;
	let acumCantidadIllumina = 0;
	let contaFelipe = 0;
	let contaArgentina = 0;
	let contaIllumina = 0;
	let acumDescuentoFelipe = 0;
	let acumDescuentoArgentina = 0;
	let totalVendido;
	let perdida;
	let acumTotal = 0;
	let masVendida;
	let promedioFelipe;
	let promedioArgentina;
	let promedioIllumina;


	do {
		nombre = prompt("nombre del cliente: ");
		cantidad = parseInt(prompt("Ingrese cantidad de lamparas: "));
		while (cantidad <= 0 || isNaN(cantidad)) {
			cantidad = parseInt(prompt("Error. Ingrese cantidad de lamparas: "));
		}
		marca = prompt("Ingrese marca: (felipelamparas/argentinaluz/illuminatis").toLowerCase();
		while (marca != "felipelamparas" && marca != "argentinaluz" && marca != "illuminatis") {
			marca = prompt("Error. Ingrese marca: (felipelamparas/argentinaluz/illuminatis").toLowerCase();
		}
		precio = parseInt(prompt("Ingrese precio de lamparas: "));
		while (precio <= 0 || isNaN(precio)) {
			precio = parseInt(prompt("Error. Ingrese precio de lamparas: "));
		}
		switch (marca) {
			case "felipelamparas":

				acumCantidadFelipe += cantidad;
				contaFelipe++;
				if (cantidad > 5) {
					descuento = precio * cantidad * 0.10;
					acumDescuentoFelipe += descuento;
					acumFelipe += (precio * cantidad) - descuento;
				} else {
					acumFelipe += precio * cantidad;
				}

				break;
			case "argentinaluz":
				acumCantidadArgentina += cantidad;
				contaArgentina++;
				if (cantidad > 3) {
					descuento = precio * cantidad * 0.05;
					acumDescuentoArgentina += descuento;
					acumArgentina += (precio * cantidad) - descuento;
				} else {
					acumArgentina += precio * cantidad;
				}

				break;
			case "illuminatis":
				acumIllumina += precio * cantidad;
				acumCantidadIllumina += cantidad;
				contaIllumina++;

				break;

		}

		acumTotal += cantidad;

		sigue = prompt("desea seguir agregando? s/n").toLowerCase();
	} while (sigue == "s")

	// 	a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
	totalVendido = acumFelipe + acumIllumina + acumArgentina;
	// b) Cuanto "perdio" la empresa en concepto de descuentos.
	perdida = acumDescuentoFelipe + acumDescuentoArgentina;
	// c) El promedio de la cantidad de lamparas vendidas de cada marca.

	promedioFelipe = acumCantidadFelipe * 100 / acumTotal + "%";
	if (acumCantidadFelipe == 0) {
		promedioFelipe = "No se vendio ninguna de esta marca, por eso el promedio es de 0";
	}
	promedioArgentina = acumCantidadArgentina * 100 / acumTotal + "%";
	if (acumCantidadArgentina == 0) {
		promedioArgentina = "No se vendio ninguna de esta marca, por eso el promedio es de 0";
	}
	promedioIllumina = acumCantidadIllumina * 100 / acumTotal + "%";
	if (acumCantidadIllumina == 0) {
		promedioIllumina = "No se vendio ninguna de esta marca, por eso el promedio es de 0";
	}

	// d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
	if (contaArgentina > contaIllumina && contaArgentina > contaFelipe) {
		masVendida = "Argentinaluz";
	} else if (contaIllumina >= contaArgentina && contaIllumina > contaFelipe) {
		masVendida = "Illuminatis";
	} else {
		masVendida = "FelipeLamparas";
	}

	//a
	console.log("a)La empresa recauda: " + totalVendido);
	//b
	if (perdida > 0) {
		console.log("b)Perdió por descuentos: " + perdida);
	} else {
		console.log("b)No hay perdida por descuentos")
	}
	console.log("c) El promedio de la cantidad de lamparas vendidas de cada marca es: FelipeLamparas: " + promedioFelipe
		+ " Argentinaluz: " + promedioArgentina + " Illuminatis: " + promedioIllumina)
	//d
	console.log("d)La marca con mas ventas fue: " + masVendida);








}
