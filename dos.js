function mostrar() {

    let nombre;
    let carrera;
    let sexo;
    let materias;
    let nota;
    let edad;
    let nombreMejorPromedio;
    let mejorPromedio;
    let flagPromedio = 1;
    let nombreMujerJoven;
    let edadJoven;
    let flagJoven = 1;
    let contaQuimica = 0;
    let contaFisica = 0;
    let contaSistemas = 0;
    let contaTotal = 0;
    let promedioSistemas;
    let promedioQuimica;
    let promedioFisica;
    let edadMasMaterias;
    let nombreMasMaterias;
    let flagMaterias = 1;
    let masMaterias;


    for (let i = 0; i < 500; i++) {


        nombre = prompt("nombre del alumno: ");
        carrera = prompt("Ingrese carrera: (quimica/fisica/sistemas)").toLowerCase();
        while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") {
            carrera = prompt("Error. Ingrese carrera: (quimica/fisica/sistemas)").toLowerCase();
        }
        sexo = prompt("Ingrese sexo: (masculino/femenino/no binario)").toLowerCase();
        while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
            sexo = prompt("Error. Ingrese sexo: (masculino/femenino/no binario)").toLowerCase();
        }
        materias = parseInt(prompt("Ingrese cantidad de materias (ente 1 y 5)"));
        while (!(materias >= 1 && materias <= 5)) {
            materias = parseInt(prompt("Error. Ingrese cantidad de materias(ente 1 y 5)"));
        }
        nota = parseInt(prompt("Ingrese cantidad de nota promedio (0 a 10"));
        while (!(nota >= 0 && nota <= 10)) {
            nota = parseInt(prompt("Error. Ingrese cantidad de nota promedio (0 a 10)"));
        }
        edad = parseInt(prompt("Ingrese edad : "));
        while (edad <= 0 || isNaN(edad)) {
            edad = parseInt(prompt("Error. Ingrese edad : "));
        }

        // 			b) El nombre de la alumna mas joven.
        if (sexo == "femenino" && (flagJoven || edadJoven > edad)) {
            edadJoven = edad;
            nombreMujerJoven = nombre;
            flagJoven = 0;
        }
        // 			a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
        if (carrera == "fisica") {
            contaFisica++;
            if (flagPromedio || mejorPromedio < nota) {
                mejorPromedio = nota;
                nombreMejorPromedio = nombre;
                flagPromedio = 0;
            }
        } else if (carrera == "quimica") {
            contaQuimica++;
        } else {
            contaSistemas++;
        }
        // 			d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de
        // 			Quimica
        if (carrera != "quimica" && (flagMaterias || masMaterias < materias)) {
            masMaterias = materias;
            nombreMasMaterias = nombre;
            edadMasMaterias = edad;
            flagMaterias = 0;
        }


        contaTotal++;


    }//fin del for

    // 			c) Porcentaje de estudiantes que estudia cada carrera.
    promedioSistemas = contaSistemas * 100 / contaTotal;
    promedioQuimica = contaQuimica * 100 / contaTotal;
    promedioFisica = contaFisica * 100 / contaTotal;



    if (contaFisica > 0) {
        console.log("a) El nombre del mejor promedio de los alumnos que estudian Fisica es: " + nombreMejorPromedio);
    } else {
        console.log("a)Nadie estudia fisica")
    }

    if (flagJoven) {
        console.log("b) No se ingresaron mujeres");
    } else {
        console.log("b) El nombre de la alumna mas joven es: " + nombreMujerJoven);
    }

    if (promedioSistemas == 0) {
        promedioSistemas = "0 pues nadie estudia sistemas"
    }
    if (promedioQuimica == 0) {
        promedioQuimica = "0 pues nadie estudia quimica"
    }
    if (promedioFisica == 0) {
        promedioFisica = "0 pues nadie estudia fisica"
    }
    console.log("c) El Porcentaje de estudiantes que estudia cada carrera es: Sistemas: " + promedioSistemas + " Quimica: " + promedioQuimica + " Fisica: " + promedioFisica);

    if (contaQuimica == 0) {
        console.log("d) Nadie estudia quimica")
    } else {
        console.log("d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de quimica es: " + nombreMasMaterias + " con " + edadMasMaterias + " años")
    }


}
