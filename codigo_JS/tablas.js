
//
// Capacidad de corriente de conductores de cobre a una temperatura de 30°C
// y área de la sección transversal con forro tipo THHW
//
//     AWG/kcmil  |   Amperes    | Área [in^2]    
const medidas_conductores = [
    {calibre: "14", corriente: 15, area: 0.0206},
    {calibre: "12", corriente: 20, area: 0.0251},
    {calibre: "10", corriente: 30, area: 0.0311},
    {calibre: "8", corriente: 40, area: 0.0598},
    {calibre: "6", corriente: 55, area: 0.0819},
    {calibre: "4", corriente: 70, area: 0.1087},
    {calibre: "2", corriente: 95, area: 0.1473},
    {calibre: "1/0", corriente: 125, area: 0.2367},
    {calibre: "2/0", corriente: 145, area: 0.2781},
    {calibre: "3/0", corriente: 165, area: 0.3288},
    {calibre: "4/0", corriente: 195, area: 0.3904},
    {calibre: "250", corriente: 215, area: 0.4877},
    {calibre: "300", corriente: 240, area: 0.5581},
    {calibre: "350", corriente: 260, area: 0.6291},
    {calibre: "400", corriente: 280, area: 0.6969},
    {calibre: "500", corriente: 320, area: 0.8316},
    {calibre: "600", corriente: 355, area: 1.0261},
    {calibre: "750", corriente: 400, area: 1.2252},
    {calibre: "1000", corriente: 455, area: 1.5482}
];

//
// Valores comerciales de Interruptores Termomagnéticos
//
const itm_comerciales = [
    5, 6, 8, 10, 15, 16, 20, 25, 30, 32, 35, 40,
    45, 50, 60, 63, 75, 80, 100, 125, 150, 175,
    200, 225, 250, 300, 350, 400, 500, 600, 800, 1000,
    1200, 1600, 2000, 2500 ];

//
// Tamaño mínimo de los conductores de puesta a tierra para canalizaciones y equipos
//
const conductor_tierra_equipos = [
    {amperes: 15, calibre: "14"},
    {amperes: 20, calibre: "12"},
    {amperes: 60, calibre: "10"},
    {amperes: 100, calibre: "8"},
    {amperes: 200, calibre: "6"},
    {amperes: 300, calibre: "4"},
    {amperes: 400, calibre: "2"},
    {amperes: 500, calibre: "2"},
    {amperes: 600, calibre: "1/0"},
    {amperes: 800, calibre: "1/0"},
    {amperes: 1000, calibre: "2/0"},
    {amperes: 1200, calibre: "3/0"},
    {amperes: 1600, calibre: "4/0"},
    {amperes: 2000, calibre: "250"},
    {amperes: 2500, calibre: "350"},
    {amperes: 3000, calibre: "400"},
];

//
// Dimensiones de tubo conduit
//
//   Diámetro nom | Área [mm^2]
const area_interior_conduit = [
    {tubo: "1/2",   area: 196},
    {tubo: "3/4",   area: 356},
    {tubo: "1",     area: 552},
    {tubo: "1 1/4", area: 979},
    {tubo: "1 1/2", area: 1331},
    {tubo: "2",     area: 2186},
    {tubo: "2 1/2", area: 3088},
    {tubo: "3",     area: 4769},
    {tubo: "3 1/2", area: 6378},
    {tubo: "4",     area: 8213}
];