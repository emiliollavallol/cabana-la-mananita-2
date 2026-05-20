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
      fac_parto_directa: "+2.1",
      fac_parto_hijas: "+1.4",
      gestacion: "-2.3",
      peso_nacer: "-1.2",
      peso_200: "+28.0",
      peso_400: "+47.5",
      peso_600: "+69.1",
      pva: "+95",
      leche: "+13.6",
      ce: "+0.9",
      dap: "+1.1",
      carcasa_peso: "+34.8",
      aob: "+3.1",
      egd: "-0.3",
      egc: "-0.2",
      rendimiento: "+1.0",
      marmoleo: "+1.5",
      docilidad: "+18",
      indice_pampa: "+145"
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
      gestacion: "-1.0",
      pn: "+0.4",
      destete: "+31.0",
      final: "+56.2",
      leche: "+9.0",
      ce: "+0.5",
      aob: "+2.5",
      egd: "-0.1",
      egc: "-0.1",
      rendimiento: "+0.8",
      marmoleo: "+0.9"
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
      fac_parto_directa: "+3.0",
      fac_parto_hijas: "+2.2",
      gestacion: "-3.1",
      peso_nacer: "-1.9",
      peso_200: "+24.2",
      peso_400: "+41.0",
      peso_600: "+58.4",
      pva: "+82",
      leche: "+17.9",
      ce: null,
      dap: "+1.8",
      carcasa_peso: "+28.3",
      aob: "+2.8",
      egd: "-0.1",
      egc: "-0.1",
      rendimiento: "+0.6",
      marmoleo: "+1.2",
      docilidad: "+21",
      indice_pampa: "+138"
    },

    // ERA - Evaluación de Reproductores Angus
    era: {
      gestacion: "-1.8",
      pn: "-1.4",
      destete: "+25.5",
      final: "+44.9",
      leche: "+18.2",
      ce: null,
      aob: "+2.1",
      egd: "-0.1",
      egc: "-0.1",
      rendimiento: "+0.5",
      marmoleo: "+1.1"
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
      fac_parto_directa: "+2.4",
      fac_parto_hijas: "+1.7",
      gestacion: "-2.0",
      peso_nacer: "-1.0",
      peso_200: "+29.6",
      peso_400: "+49.4",
      peso_600: "+70.5",
      pva: "+101",
      leche: "+12.1",
      ce: "+0.8",
      dap: "+1.3",
      carcasa_peso: "+36.2",
      aob: "+3.3",
      egd: "-0.2",
      egc: "-0.1",
      rendimiento: "+1.1",
      marmoleo: "+1.3",
      docilidad: "+20",
      indice_pampa: "+149"
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
