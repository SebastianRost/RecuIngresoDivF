
function mostrar() {

	let nombre;
	let edad;
	let sexo;
	let puesto;
	let sueldo;
	let acumProgramador = 0;
	let acumQa = 0;
	let acumAnalista = 0;
	let contaProgramador = 0;
	let contaQa = 0;
	let contaAnalista = 0;
	let promedioProgramador = 0;
	let promedioAnalista = 0;
	let promedioQa = 0;
	let mayorSueldo;
	let flagSueldo = 1;
	let sexoMayorsueldo;
	let flagFem = 1;
	let mayorSueldoFem;
	let nombreMayorSueldoFem;
	let contadorNoBinarios = 0;
	let seguir;

	do {
		nombre = prompt("nombre del empleado: ");
		edad = parseInt(prompt("Ingrese edad del empleado: "));
		while (edad <= 0 || isNaN(edad)) {
			edad = parseInt(prompt("Error. Ingrese edad del empleado: "));
		}
		sexo = prompt("Ingrese sexo: (masculino/femenino/no binario").toLowerCase();
		while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
			sexo = prompt("Error. Ingrese sexo: (masculino/femenino/no binario").toLowerCase();
		}
		puesto = prompt("Ingrese puesto: (programador/analista/qa)").toLowerCase();
		while (puesto != "programador" && puesto != "analista" && puesto != "qa") {
			puesto = prompt("Error. Ingrese puesto: (programador/analista/qa)").toLowerCase();
		}
		sueldo = parseFloat(prompt("Ingrese sueldo del empleado: (entre 15000 y 70000)"));
		while (!(sueldo > 15000 && sueldo < 70000)) {
			sueldo = parseFloat(prompt("Error. Ingrese sueldo del empleado: (entre 15000 y 70000)"));
		}
		// a) promedio de sueldos para cada puesto

		if (puesto == "programador") {
			acumProgramador += sueldo;
			contaProgramador++;
		} else if (puesto == "qa") {
			acumQa += sueldo;
			contaQa++;
		} else {
			acumAnalista += sueldo;
			contaAnalista++;
		}
		// b) el sexo del que percibe el mayor sueldo

		if (sueldo > mayorSueldo || flagSueldo) {
			mayorSueldo = sueldo;
			sexoMayorsueldo = sexo;
			flagSueldo = 0;
		}
		// c) el nombre del empleado femenino con mas sueldo
		if (sexo == "femenino" && (flagFem || sueldo > mayorSueldoFem)) {
			mayorSueldoFem = sueldo;
			nombreMayorSueldoFem = "El nombre de la mujer con mayor sueldo es: " + nombre;
			flagFem = 0;
		}
		// d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000

		if (sexo == "no binario" && puesto == "programador" && (sueldo >= 20000 && sueldo <= 55000)) {
			contadorNoBinarios++;
		}


		seguir = prompt("Desea seguir agregando personal? s/n").toLowerCase();
	} while (seguir == "s");//fin de iteración



	if (contaProgramador == 0) {
		promedioProgramador = "No se ingresó ningun programador."
	} else {
		promedioProgramador = acumProgramador / contaProgramador;
	}
	if (contaAnalista == 0) {
		promedioAnalista = "No se ingresó ningun analista"
	} else {
		promedioAnalista = acumAnalista / contaAnalista;
	}
	if (contaQa == 0) {
		promedioQa = "No se ingresó ningun Qa"
	} else {
		promedioQa = acumQa / contaQa;
	}

	if (flagFem == 1) {
		nombreMayorSueldoFem = "No se se ingresó empleado de sexo femenino"
	}

	if (contadorNoBinarios == 0) {
		contadorNoBinarios = "No se ingresaron no binarios con ese rango de sueldo"
	}

	console.log("a) El promedio de sueldos de cada puesto es: Programador: " + promedioProgramador + " analista: " + promedioAnalista + " Qa: " + promedioQa);
	console.log("b) El sexo del empleado con mayor sueldo es: " + sexoMayorsueldo);
	console.log("c) " + nombreMayorSueldoFem)
	console.log("d) La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es: " + contadorNoBinarios)


}
