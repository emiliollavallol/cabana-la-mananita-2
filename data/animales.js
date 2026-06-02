/**
 * ============================================================================
 * CATÁLOGO DE ANIMALES - CABAÑA LA MAÑANITA
 * ============================================================================
 * 
 * Este archivo contiene todos los animales del catálogo.
 * Está diseñado para ser editado manualmente de forma sencilla.
 * 
 * INSTRUCCIONES DE USO:
 * 1. Para agregar un animal, copiá un bloque existente y modificá los datos
 * 2. Asegurate de que el "id" sea único (usá el formato: raza-sexo-numero)
 * 3. Las imágenes deben estar en /assets/img/animales/
 * 4. Los campos opcionales pueden dejarse como null o string vacío ""
 * 
 * VALORES VÁLIDOS:
 * - raza: "angus" | "senepol" | "senangus"
 * - sexo: "macho" | "hembra"
 * - categoria: "toro" | "torito" | "vaca" | "vaquillona" | "ternero" | "ternera"
 * - estado: "disponible" | "reservado" | "vendido" | "propio"
 * - destacado: true | false
 * - breedplan / era: objetos opcionales de evaluación genética
 *   Cada métrica usa: { valor: "...", precision: "...", top: "..." }
 * 
 * ============================================================================
 */

const CATALOGO_ANIMALES = [

  // ==========================================================================
  // ANGUS - MACHOS
  // ==========================================================================

  {
    // Identificación básica
    id: "angus-m-001",
    raza: "angus",
    sexo: "macho",
    nombre: "Fortunato",
    rp: "2847",                          // Número de RP (Registro Particular)
    
    // Fechas
    fecha_nacimiento: "2021-08-15",      // Formato: YYYY-MM-DD
    
    // Genealogía
    padre: "SAV Bismarck 5682",
    madre: "La Mañanita Lucia 1823",
    
    // Clasificación
    categoria: "toro",                   // toro, torito, vaca, vaquillona, ternero, ternera
    estado: "disponible",                // disponible, reservado, vendido, propio
    destacado: true,                     // true = aparece en home y destacados
    
    // Imágenes
    imagen_principal: "/assets/img/animales/fortunato-principal.jpg",
    imagenes_secundarias: [
      "/assets/img/animales/fortunato-lateral.jpg",
      "/assets/img/animales/fortunato-posterior.jpg"
    ],
    
    // Descripción
    descripcion: "Toro destacado de nuestra cabaña con excelente conformación y temperamento dócil. Línea genética probada con progenie sobresaliente en la zona. Ideal para programas de mejoramiento que buscan facilidad de parto sin resignar peso al destete.",
    
    // Datos técnicos y productivos
    datos_tecnicos: {
      facilidad_parto: "Excelente",      // Excelente, Muy Buena, Buena, Regular
      peso_nacer: "34 kg",
      peso_destete: "285 kg",
      peso_actual: "820 kg",
      frame: "6.0",
      circunferencia_escrotal: "38 cm",
      adn: "Sí",                         // Sí, No, En proceso
      evaluacion_reproductiva: "Apto"    // Apto, No apto, Pendiente
    },
    
    // DEPs / EPDs (Diferencias Esperadas en la Progenie)
    // Dejá null los que no tengas medidos
    deps: {
      peso_nacer: -1.8,
      peso_destete: 28.5,
      peso_final: 52.3,
      leche: 12.0,
      circunferencia_escrotal: 0.8,
      docilidad: 18,
      aoc: 0.42,                         // Área de ojo de bife
      grasa_dorsal: -0.02,
      marmoleado: 0.35
    },

    // Evaluaciones genéticas (opcionales)
    // Breedplan / International Beef Recording Scheme
    breedplan: {
      fac_parto_directa: { valor: "+2.1", precision: "72%", top: "10%" },
      fac_parto_hijas: { valor: "+1.4", precision: "68%", top: "15%" },
      gestacion: { valor: "-2.3", precision: "76%", top: "8%" },
      peso_nacer: { valor: "-1.2", precision: "78%", top: "12%" },
      peso_200_dias: { valor: "+28.0", precision: "74%", top: "10%" },
      peso_400_dias: { valor: "+47.5", precision: "70%", top: "12%" },
      peso_600_dias: { valor: "+69.1", precision: "66%", top: "15%" },
      peso_vaca_adulta: { valor: "+95", precision: "58%", top: "20%" },
      leche: { valor: "+13.6", precision: "62%", top: "18%" },
      circunferencia_escrotal: { valor: "+0.9", precision: "69%", top: "12%" },
      dias_al_parto: { valor: "+1.1", precision: "55%", top: "35%" },
      peso_carcasa: { valor: "+34.8", precision: "63%", top: "10%" },
      area_ojo_bife: { valor: "+3.1", precision: "60%", top: "8%" },
      espesor_grasa_dorsal: { valor: "-0.3", precision: "58%", top: "20%" },
      espesor_grasa_cadera: { valor: "-0.2", precision: "57%", top: "22%" },
      rendimiento_carcasa: { valor: "+1.0", precision: "59%", top: "12%" },
      marmoleo: { valor: "+1.5", precision: "56%", top: "10%" },
      docilidad: { valor: "+18", precision: "64%", top: "15%" },
      indice_pampa: { valor: "+145", precision: "70%", top: "5%" }
    }
  },

  {
    id: "angus-m-002",
    raza: "angus",
    sexo: "macho",
    nombre: "Centinela",
    rp: "3012",
    fecha_nacimiento: "2022-07-22",
    padre: "Connealy Confident 0100",
    madre: "La Mañanita Paloma 2156",
    categoria: "torito",
    estado: "disponible",
    destacado: false,
    imagen_principal: "/assets/img/animales/centinela-principal.jpg",
    imagenes_secundarias: [],
    descripcion: "Torito joven con muy buena estructura y desarrollo. Presenta excelente profundidad corporal y aplomos correctos. Genética orientada a eficiencia de conversión.",
    datos_tecnicos: {
      facilidad_parto: "Muy Buena",
      peso_nacer: "36 kg",
      peso_destete: "290 kg",
      peso_actual: "580 kg",
      frame: "6.5",
      circunferencia_escrotal: "36 cm",
      adn: "Sí",
      evaluacion_reproductiva: "Apto"
    },
    deps: {
      peso_nacer: 0.5,
      peso_destete: 32.1,
      peso_final: 58.7,
      leche: 8.5,
      circunferencia_escrotal: 0.5,
      docilidad: 15,
      aoc: 0.38,
      grasa_dorsal: 0.01,
      marmoleado: 0.28
    },

    // Evaluaciones genéticas (opcionales)
    // ERA - Evaluación de Reproductores Angus
    era: {
      gestacion: { valor: "-1.0", precision: "68%", top: "20%" },
      peso_nacer: { valor: "+0.4", precision: "72%", top: "45%" },
      peso_destete: { valor: "+31.0", precision: "70%", top: "12%" },
      peso_final: { valor: "+56.2", precision: "66%", top: "10%" },
      leche: { valor: "+9.0", precision: "60%", top: "35%" },
      circunferencia_escrotal: { valor: "+0.5", precision: "64%", top: "20%" },
      area_ojo_bife: { valor: "+2.5", precision: "58%", top: "15%" },
      espesor_grasa_dorsal: { valor: "-0.1", precision: "55%", top: "30%" },
      espesor_grasa_cadera: { valor: "-0.1", precision: "54%", top: "30%" },
      rendimiento_carcasa: { valor: "+0.8", precision: "57%", top: "18%" },
      marmoleo: { valor: "+0.9", precision: "52%", top: "20%" }
    }
  },

  // ==========================================================================
  // ANGUS - HEMBRAS
  // ==========================================================================

  {
    id: "angus-h-001",
    raza: "angus",
    sexo: "hembra",
    nombre: "Madrugada",
    rp: "2934",
    fecha_nacimiento: "2020-09-10",
    padre: "Gardiner Retail Product 5019",
    madre: "La Mañanita Serena 1567",
    categoria: "vaca",
    estado: "propio",
    destacado: true,
    imagen_principal: "/assets/img/animales/madrugada-principal.jpg",
    imagenes_secundarias: [
      "/assets/img/animales/madrugada-cria.jpg"
    ],
    descripcion: "Vaca donante de nuestra cabaña. Excelente productora con 5 crías destacadas. Combina feminidad con capacidad maternal sobresaliente. Línea materna de alta fertilidad.",
    datos_tecnicos: {
      facilidad_parto: "Excelente",
      peso_nacer: "32 kg",
      peso_destete: "265 kg",
      peso_actual: "580 kg",
      frame: "5.5",
      circunferencia_escrotal: null,     // No aplica para hembras
      adn: "Sí",
      evaluacion_reproductiva: "Apto"
    },
    deps: {
      peso_nacer: -2.1,
      peso_destete: 24.8,
      peso_final: 45.2,
      leche: 18.5,
      circunferencia_escrotal: null,
      docilidad: 22,
      aoc: 0.35,
      grasa_dorsal: 0.00,
      marmoleado: 0.30
    },

    // Evaluaciones genéticas (opcionales)
    // Breedplan / International Beef Recording Scheme
    breedplan: {
      fac_parto_directa: { valor: "+3.0", precision: "75%", top: "5%" },
      fac_parto_hijas: { valor: "+2.2", precision: "70%", top: "8%" },
      gestacion: { valor: "-3.1", precision: "78%", top: "4%" },
      peso_nacer: { valor: "-1.9", precision: "80%", top: "6%" },
      peso_200_dias: { valor: "+24.2", precision: "71%", top: "18%" },
      peso_400_dias: { valor: "+41.0", precision: "68%", top: "22%" },
      peso_600_dias: { valor: "+58.4", precision: "63%", top: "25%" },
      peso_vaca_adulta: { valor: "+82", precision: "54%", top: "30%" },
      leche: { valor: "+17.9", precision: "66%", top: "6%" },
      circunferencia_escrotal: { valor: null, precision: null, top: null },
      dias_al_parto: { valor: "+1.8", precision: "52%", top: "40%" },
      peso_carcasa: { valor: "+28.3", precision: "61%", top: "22%" },
      area_ojo_bife: { valor: "+2.8", precision: "59%", top: "12%" },
      espesor_grasa_dorsal: { valor: "-0.1", precision: "56%", top: "35%" },
      espesor_grasa_cadera: { valor: "-0.1", precision: "55%", top: "35%" },
      rendimiento_carcasa: { valor: "+0.6", precision: "58%", top: "25%" },
      marmoleo: { valor: "+1.2", precision: "54%", top: "15%" },
      docilidad: { valor: "+21", precision: "67%", top: "8%" },
      indice_pampa: { valor: "+138", precision: "68%", top: "8%" }
    },

    // ERA - Evaluación de Reproductores Angus
    era: {
      gestacion: { valor: "-1.8", precision: "74%", top: "10%" },
      peso_nacer: { valor: "-1.4", precision: "78%", top: "8%" },
      peso_destete: { valor: "+25.5", precision: "72%", top: "20%" },
      peso_final: { valor: "+44.9", precision: "68%", top: "24%" },
      leche: { valor: "+18.2", precision: "66%", top: "5%" },
      circunferencia_escrotal: { valor: null, precision: null, top: null },
      area_ojo_bife: { valor: "+2.1", precision: "59%", top: "18%" },
      espesor_grasa_dorsal: { valor: "-0.1", precision: "55%", top: "30%" },
      espesor_grasa_cadera: { valor: "-0.1", precision: "54%", top: "30%" },
      rendimiento_carcasa: { valor: "+0.5", precision: "57%", top: "28%" },
      marmoleo: { valor: "+1.1", precision: "53%", top: "15%" }
    }
  },

  // ==========================================================================
  // SENEPOL - MACHOS
  // ==========================================================================

  {
    id: "senepol-m-001",
    raza: "senepol",
    sexo: "macho",
    nombre: "Bravo",
    rp: "SP-418",
    fecha_nacimiento: "2021-10-05",
    padre: "Dorado de San Miguel",
    madre: "La Mañanita Candela SP-201",
    categoria: "toro",
    estado: "disponible",
    destacado: true,
    imagen_principal: "/assets/img/animales/bravo-principal.jpg",
    imagenes_secundarias: [
      "/assets/img/animales/bravo-lateral.jpg"
    ],
    descripcion: "Toro Senepol puro con excelente adaptación al clima subtropical. Pelaje colorado característico, mocho natural. Ideal para cruzamientos que buscan rusticidad y tolerancia al calor.",
    datos_tecnicos: {
      facilidad_parto: "Excelente",
      peso_nacer: "32 kg",
      peso_destete: "270 kg",
      peso_actual: "750 kg",
      frame: "5.5",
      circunferencia_escrotal: "37 cm",
      adn: "Sí",
      evaluacion_reproductiva: "Apto"
    },
    deps: {
      peso_nacer: -0.8,
      peso_destete: 22.4,
      peso_final: 41.5,
      leche: 10.2,
      circunferencia_escrotal: 0.6,
      docilidad: 20,
      aoc: null,
      grasa_dorsal: null,
      marmoleado: null
    }
  },

  {
    id: "senepol-m-002",
    raza: "senepol",
    sexo: "macho",
    nombre: "Fuego",
    rp: "SP-512",
    fecha_nacimiento: "2022-08-18",
    padre: "Bravo SP-418",
    madre: "La Mañanita Aurora SP-287",
    categoria: "torito",
    estado: "reservado",
    destacado: false,
    imagen_principal: "/assets/img/animales/fuego-principal.jpg",
    imagenes_secundarias: [],
    descripcion: "Torito hijo de nuestro reproductor Bravo. Hereda la rusticidad y docilidad característica. Excelente desarrollo para su edad.",
    datos_tecnicos: {
      facilidad_parto: "Muy Buena",
      peso_nacer: "30 kg",
      peso_destete: "260 kg",
      peso_actual: "520 kg",
      frame: "5.0",
      circunferencia_escrotal: "34 cm",
      adn: "En proceso",
      evaluacion_reproductiva: "Apto"
    },
    deps: null  // Aún no evaluado
  },

  // ==========================================================================
  // SENEPOL - HEMBRAS
  // ==========================================================================

  {
    id: "senepol-h-001",
    raza: "senepol",
    sexo: "hembra",
    nombre: "Aurora",
    rp: "SP-287",
    fecha_nacimiento: "2019-11-20",
    padre: "Dorado de San Miguel",
    madre: "La Mañanita Sol SP-102",
    categoria: "vaca",
    estado: "propio",
    destacado: false,
    imagen_principal: "/assets/img/animales/aurora-principal.jpg",
    imagenes_secundarias: [],
    descripcion: "Vaca Senepol fundacional de nuestro plantel. Excelente fertilidad y habilidad materna. Ha producido crías destacadas tanto en pureza como en cruzamiento.",
    datos_tecnicos: {
      facilidad_parto: "Excelente",
      peso_nacer: "28 kg",
      peso_destete: "245 kg",
      peso_actual: "520 kg",
      frame: "5.0",
      circunferencia_escrotal: null,
      adn: "Sí",
      evaluacion_reproductiva: "Apto"
    },
    deps: {
      peso_nacer: -1.2,
      peso_destete: 18.5,
      peso_final: 35.8,
      leche: 14.2,
      circunferencia_escrotal: null,
      docilidad: 24,
      aoc: null,
      grasa_dorsal: null,
      marmoleado: null
    }
  },

  // ==========================================================================
  // SENANGUS - MACHOS
  // ==========================================================================

  {
    id: "senangus-m-001",
    raza: "senangus",
    sexo: "macho",
    nombre: "Titán",
    rp: "SNA-089",
    fecha_nacimiento: "2021-09-12",
    padre: "Fortunato 2847",              // Angus
    madre: "La Mañanita Candela SP-201",  // Senepol
    categoria: "toro",
    estado: "disponible",
    destacado: true,
    imagen_principal: "/assets/img/animales/titan-principal.jpg",
    imagenes_secundarias: [
      "/assets/img/animales/titan-lateral.jpg",
      "/assets/img/animales/titan-posterior.jpg"
    ],
    descripcion: "Toro Senangus F1 que combina lo mejor de ambas razas: la calidad carnicera del Angus con la rusticidad y adaptación del Senepol. Mocho, pelaje negro, excelente temperamento. Ideal para rodeos comerciales en zonas de clima cálido.",
    datos_tecnicos: {
      facilidad_parto: "Excelente",
      peso_nacer: "33 kg",
      peso_destete: "295 kg",
      peso_actual: "780 kg",
      frame: "5.8",
      circunferencia_escrotal: "38 cm",
      adn: "Sí",
      evaluacion_reproductiva: "Apto"
    },
    deps: {
      peso_nacer: -1.5,
      peso_destete: 30.2,
      peso_final: 52.8,
      leche: 12.8,
      circunferencia_escrotal: 0.7,
      docilidad: 21,
      aoc: 0.40,
      grasa_dorsal: -0.01,
      marmoleado: 0.32
    },

    // Evaluaciones genéticas (opcionales)
    // Breedplan / International Beef Recording Scheme
    breedplan: {
      fac_parto_directa: { valor: "+2.4", precision: "70%", top: "9%" },
      fac_parto_hijas: { valor: "+1.7", precision: "65%", top: "12%" },
      gestacion: { valor: "-2.0", precision: "73%", top: "12%" },
      peso_nacer: { valor: "-1.0", precision: "76%", top: "15%" },
      peso_200_dias: { valor: "+29.6", precision: "72%", top: "8%" },
      peso_400_dias: { valor: "+49.4", precision: "68%", top: "10%" },
      peso_600_dias: { valor: "+70.5", precision: "64%", top: "14%" },
      peso_vaca_adulta: { valor: "+101", precision: "55%", top: "18%" },
      leche: { valor: "+12.1", precision: "60%", top: "22%" },
      circunferencia_escrotal: { valor: "+0.8", precision: "66%", top: "15%" },
      dias_al_parto: { valor: "+1.3", precision: "50%", top: "35%" },
      peso_carcasa: { valor: "+36.2", precision: "61%", top: "8%" },
      area_ojo_bife: { valor: "+3.3", precision: "58%", top: "7%" },
      espesor_grasa_dorsal: { valor: "-0.2", precision: "55%", top: "25%" },
      espesor_grasa_cadera: { valor: "-0.1", precision: "54%", top: "30%" },
      rendimiento_carcasa: { valor: "+1.1", precision: "57%", top: "10%" },
      marmoleo: { valor: "+1.3", precision: "53%", top: "12%" },
      docilidad: { valor: "+20", precision: "62%", top: "10%" },
      indice_pampa: { valor: "+149", precision: "67%", top: "4%" }
    }
  },

  // ==========================================================================
  // SENANGUS - HEMBRAS
  // ==========================================================================

  {
    id: "senangus-h-001",
    raza: "senangus",
    sexo: "hembra",
    nombre: "Esperanza",
    rp: "SNA-112",
    fecha_nacimiento: "2022-06-08",
    padre: "SAV Bismarck 5682",           // Angus
    madre: "La Mañanita Aurora SP-287",   // Senepol
    categoria: "vaquillona",
    estado: "disponible",
    destacado: false,
    imagen_principal: "/assets/img/animales/esperanza-principal.jpg",
    imagenes_secundarias: [],
    descripcion: "Vaquillona Senangus con excelente desarrollo y conformación. Combina la capacidad maternal del Senepol con la precocidad del Angus. Lista para servicio.",
    datos_tecnicos: {
      facilidad_parto: "Muy Buena",
      peso_nacer: "30 kg",
      peso_destete: "268 kg",
      peso_actual: "420 kg",
      frame: "5.5",
      circunferencia_escrotal: null,
      adn: "En proceso",
      evaluacion_reproductiva: "Apto"
    },
    deps: null  // Aún no evaluado
  },

  {
    id: "senangus-h-002",
    raza: "senangus",
    sexo: "hembra",
    nombre: "Pampa",
    rp: "SNA-098",
    fecha_nacimiento: "2021-07-25",
    padre: "Fortunato 2847",
    madre: "La Mañanita Sol SP-102",
    categoria: "vaca",
    estado: "propio",
    destacado: true,
    imagen_principal: "/assets/img/animales/pampa-principal.jpg",
    imagenes_secundarias: [
      "/assets/img/animales/pampa-cria.jpg"
    ],
    descripcion: "Vaca Senangus con primera cría al pie. Demuestra la excelente habilidad materna que buscamos en nuestro programa de cruzamiento. Dócil y fértil.",
    datos_tecnicos: {
      facilidad_parto: "Excelente",
      peso_nacer: "31 kg",
      peso_destete: "275 kg",
      peso_actual: "540 kg",
      frame: "5.5",
      circunferencia_escrotal: null,
      adn: "Sí",
      evaluacion_reproductiva: "Apto"
    },
    deps: {
      peso_nacer: -1.8,
      peso_destete: 26.5,
      peso_final: 48.2,
      leche: 15.8,
      circunferencia_escrotal: null,
      docilidad: 23,
      aoc: 0.36,
      grasa_dorsal: 0.00,
      marmoleado: 0.29
    }
  }

];


// ============================================================================
// FUNCIONES AUXILIARES PARA FILTRAR EL CATÁLOGO
// ============================================================================

/**
 * Obtiene todos los animales
 */
function obtenerTodos() {
  return CATALOGO_ANIMALES;
}

/**
 * Filtra animales por raza
 * @param {string} raza - "angus" | "senepol" | "senangus"
 */
function filtrarPorRaza(raza) {
  return CATALOGO_ANIMALES.filter(animal => animal.raza === raza);
}

/**
 * Filtra animales por sexo
 * @param {string} sexo - "macho" | "hembra"
 */
function filtrarPorSexo(sexo) {
  return CATALOGO_ANIMALES.filter(animal => animal.sexo === sexo);
}

/**
 * Filtra animales por raza y sexo
 * @param {string} raza - "angus" | "senepol" | "senangus"
 * @param {string} sexo - "macho" | "hembra"
 */
function filtrarPorRazaYSexo(raza, sexo) {
  return CATALOGO_ANIMALES.filter(animal => 
    animal.raza === raza && animal.sexo === sexo
  );
}

/**
 * Obtiene solo animales destacados
 */
function obtenerDestacados() {
  return CATALOGO_ANIMALES.filter(animal => animal.destacado === true);
}

/**
 * Obtiene animales disponibles para venta
 */
function obtenerDisponibles() {
  return CATALOGO_ANIMALES.filter(animal => animal.estado === "disponible");
}

/**
 * Busca un animal por su ID
 * @param {string} id - ID único del animal
 */
function buscarPorId(id) {
  return CATALOGO_ANIMALES.find(animal => animal.id === id) || null;
}

/**
 * Busca un animal por su RP
 * @param {string} rp - Número de RP
 */
function buscarPorRP(rp) {
  return CATALOGO_ANIMALES.find(animal => animal.rp === rp) || null;
}

/**
 * Cuenta animales por raza
 * Devuelve: { angus: X, senepol: Y, senangus: Z }
 */
function contarPorRaza() {
  return {
    angus: CATALOGO_ANIMALES.filter(a => a.raza === "angus").length,
    senepol: CATALOGO_ANIMALES.filter(a => a.raza === "senepol").length,
    senangus: CATALOGO_ANIMALES.filter(a => a.raza === "senangus").length
  };
}


// ============================================================================
// EXPORTACIÓN
// ============================================================================
// Si usás módulos ES6, descomentá las siguientes líneas:
// export { CATALOGO_ANIMALES, obtenerTodos, filtrarPorRaza, ... };

// Para uso directo en el navegador, las variables y funciones ya están 
// disponibles globalmente al incluir este script con <script src="...">
