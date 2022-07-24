//
// Interacción con HTML
//

let form_motores = document.getElementById("motores_formulario");
form_motores.addEventListener("submit", (e) => {
    e.preventDefault();     // Evita que se recargue la página al envíar el formulario
    motorCalcular();
})


function motorCalcular() {
    let input = document.getElementById("potencia-motor");
    let potencia = Number(input.value);

    input = document.getElementById("voltaje-motor");
    let voltaje = Number(input.value);

    input = document.getElementById("grado-proteccion-motor");
    let k = Number(input.value);

    input = document.getElementById("fp-motor");
    let fp = Number(input.value);

    input = document.getElementById("eficiencia-motor");
    let eficiencia = Number(input.value);

    // 1. Corriente nominal del motor
    let i_nom = (746 * potencia) / (1.73 * voltaje * eficiencia * fp);

    document.getElementById("corriente-motor").value = (i_nom.toFixed(2)).toString();

    // 2. Corriente mínima que debe soportar el conductor
    let i_condMin = 1.25 * i_nom;

    // 3. Busca el conductor que soporte dicha corriente (se añade un 5% de tolerancia a la
    //    corriente del conductor para evitar que por unas décimas de Amper se elija un calibre
    //    muy sobrado.)
    let conductor_linea = medidas_conductores.find(cable => (cable.corriente * 1.05) >= i_condMin);
    if (conductor_linea.calibre == "14") {
        conductor_linea = medidas_conductores[1];   // Mínimo permitido: 12 AWG
    }
    
    document.getElementById("conductor-motor").value = conductor_linea.calibre;

    // 4. Corriente de protección para el ITM
    let i_p = k * i_nom;
    
    // 5. Tamaño comercial del ITM
    let ITM = itm_comerciales.find(i_itm => (i_itm * 1.05) >= i_p);

    document.getElementById("tamaño-ITM").value = ITM.toString();

    // 6. Calibre adecuado para la puesta a tierra
    let puesta_tierra = conductor_tierra_equipos.find(e => e.amperes >= ITM);
    puesta_tierra = medidas_conductores.find(e => e.calibre == puesta_tierra.calibre);

    if (puesta_tierra.area > conductor_linea.area ) {
        puesta_tierra = conductor_linea;
    }
    document.getElementById("tierra-motor").value = puesta_tierra.calibre;

    // 7. Área transversal de conductores [mm^2]
    let area_linea = conductor_linea.area * 654.16;
    let area_tierra = puesta_tierra.area * 654.16;

    // 8. Área total conductores [mm^2]
    let area_total = (area_linea * 3) + area_tierra;

    // 9. Área necesaria del tubo conduit (factor de relleno = 40%)
    let area_necesaria_tubo = area_total / 0.4;

    // 10. Medida comercial del tubo conduit:
    let tubo_conduit = area_interior_conduit.find(tubo => tubo.area >= area_necesaria_tubo);

    document.getElementById("tuberia-motor").value = tubo_conduit.tubo;
    // let res_tubo_conduit = document.getElementById("tuberia-motor");
    // res_tubo_conduit.innerText = `Tubo conduit recomendado: ${tubo_conduit.tubo}`;
}

