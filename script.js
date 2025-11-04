// Datos de propiedades (simulando una base de datos)
const propiedades = [
  {
    id: 1,
    tipo: "casa",
    titulo: "Casa Familiar con Garage",
    precio: "USD $90,000",
    ubicacion: "Colectora Este 333, Justiniano Posse",
    habitaciones: 2,
    banos: 1,
    area: 700,
    imagen: "./assets/images catalogo/CASA 2 (1).png",
    imagenes: ["./assets/images catalogo/CASA 2 (1).png"],
    caracteristicas: ["patio", "garaje", "cocina", "comedor", "living", "galería", "jardin amplio"],
    descripcion:
      "Espaciosa casa familiar ideal para familias grandes. Cuenta con amplios jardines y múltiples áreas de entretenimiento.",
    coordenadas: "40.6892,-74.0445",
    numeroContacto: "3573447777",
  },
  {
    id: 2,
    tipo: "casa",
    titulo: "Casa Familiar con Amplio Patio",
    precio: "USD $30,000",
    ubicacion: "Moreno 200, Justiniano Posse ",
    habitaciones: 3,
    banos: 1,
    area: 200,
    imagen: "./assets/images catalogo/CASA 3.png",
    imagenes: ["./assets/images catalogo/CASA 3.png"],
    caracteristicas: ["patio", "cocina", "comedor"],
    descripcion:
      "Casa familiar ideal para pareja o matrimonio. Cuenta con amplio patio con asador y múltiples áreas de entretenimiento.",
    coordenadas: "-32.88194246342032, -62.68138995360713",
    numeroContacto: "3573447777",
    vendida: true,
  },
  {
    id: 3,
    tipo: "casa",
    titulo: "Casa Familiar a Estrenar",
    precio: "USD $50,000",
    ubicacion: "Felipe Varela 26, Justiniano Posse",
    habitaciones: 2,
    banos: 1,
    area: 336,
    imagen: "./assets/images catalogo/CASA 4.png",
    imagenes: ["./assets/images catalogo/CASA 4.png"],
    caracteristicas: ["patio", "cocina", "comedor", "lavadero", "jardin amplio"],
    descripcion: "Casa familiar a estrenar. Cuenta con amplios jardines.",
    coordenadas: "-32.88632753059976, -62.66909254710916",
    numeroContacto: "3573447777",
  },
  {
    id: 4,
    tipo: "casa",
    titulo: "Casa Familiar con Garage",
    precio: "USD $34.000",
    ubicacion: "Dean Funes 631, Justiniano Posse",
    habitaciones: 1,
    banos: 1,
    area: 100,
    imagen: "./assets/images catalogo/CASA 5 (1).png",
    imagenes: ["./assets/images catalogo/CASA 5 (1).png"],
    caracteristicas: [
      "patio",
      "cocina",
      "comedor",
      "living",
      "lavadero",
      "garaje",
    ],
    descripcion: "Casa familiar ubicada en excelente ubicación, cuenta con doble garage y patio amplio.",
    coordenadas: "-32.88723256981051, -62.675908616384824",
    numeroContacto: "3573447777",
  },
  {
    id: 5,
    tipo: "casa",
    titulo: "Casa Familiar con Local Comercial",
    precio: "USD $140.000",
    ubicacion: "9 de Julio 459, Justiniano Posse",
    habitaciones: 2,
    banos: 1,
    area: 625,
    imagen: "./assets/images catalogo/CASA 6 (1).png",
    imagenes: ["./assets/images catalogo/CASA 6 (1).png"],
    caracteristicas: ["patio", "cocina", "comedor", "living", "piscina", "lavadero", "garaje"],
    descripcion: "Casa familiar con excelente ubicación y patio, con local comercial c/baño y excelente ubicación. Ideal para familias grandes.",
    coordenadas: "-32.883520201850665, -62.67432042883577",
    numeroContacto: "3573447777",
  },
  {
    id: 6,
    tipo: "casa",
    titulo: "Casa Familiar con Amplio Patio",
    precio: "USD $80,000",
    ubicacion: "Moreno 478, Justiniano Posse ",
    habitaciones: 3,
    banos: 2,
    area: 625,
    imagen: "./assets/images catalogo/CASA 7.png",
    imagenes: ["./assets/images catalogo/CASA 7.png"],
    caracteristicas: ["patio", "cocina", "comedor", "jardin amplio", "galería", "hall de ingreso"],
    descripcion: "Casa familiar con amplio jardin y galeria, Ideal para familia grande.",
    coordenadas: "-32.88440652767099, -62.681858889439255",
    numeroContacto: "3573447777",
  },
  {
    id: 7,
    tipo: "casa",
    titulo: "Casa Familiar En Venta",
    precio: "USD $34,000",
    ubicacion: "Uruguay 461, Justiniano Posse",
    habitaciones: 2,
    banos: 1,
    area: 400,
    imagen: "./assets/images catalogo/CASA 8.png",
    imagenes: ["./assets/images catalogo/CASA 8.png"],
    caracteristicas: ["patio", "cocina", "comedor", "garaje"],
    descripcion: "Casa familiar excelente ubicación y galeria, Ideal para familia.",
    coordenadas: "-32.88326567510122, -62.687494975944155",
    numeroContacto: "3573447777",
  },
  {
    id: 8,
    tipo: "casa",
    titulo: "Casa Familiar con Pileta",
    precio: "USD $190,000",
    ubicacion: "San lorenzo, Esq. Walter Luján, Luque ",
    habitaciones: 3,
    banos: 2,
    area: 500,
    imagen: "./assets/images catalogo/CASA 9.png",
    imagenes: ["./assets/images catalogo/CASA 9.png"],
    caracteristicas: ["patio", "piscina", "cocina", "comedor", "quincho", "lavadero"],
    descripcion: "Casa familiar con amplio patio y piscina, Ideal para familia grande.",
    coordenadas: "-31.649369554354973, -63.34910327109968",
    numeroContacto: "3573447777",
  },
  {
    id: 9,
    tipo: "casa",
    titulo: "Casa Familiar en Zona Urbana",
    precio: "USD $140,000",
    ubicacion: "Armengol Tecera 261 (Barrio Alberdi), Córdoba Capital ",
    habitaciones: 4,
    banos: 2,
    area: 500,
    imagen: "./assets/images catalogo/CASA 10.png",
    imagenes: ["./assets/images catalogo/CASA 10.png"],
    caracteristicas: ["patio", "cocina", "comedor", "quincho", "lavadero", "oficina", "sala de estar"],
    descripcion: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande.",
    coordenadas: "-31.403471116047072, -64.21487173181319",
    numeroContacto: "3517562763",
  },
  {
    id: 10,
    tipo: "casa",
    titulo: "Casa Familiar",
    precio: "USD $70,000",
    ubicacion: "Dean Funes 123,, Justiniano Posse ",
    habitaciones: 3,
    banos: 2,
    area: 825,
    imagen: "./assets/images catalogo/CASA 11.png",
    imagenes: ["./assets/images catalogo/CASA 11.png"],
    caracteristicas: [
      "patio",
      "cocina",
      "comedor",

      "lavadero",
    ],
    descripcion: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande.",
    coordenadas: "-32.88190165376712, -62.6742641740995",
    numeroContacto: "3517562763",
  },
   {
    id: 11,
    tipo: "terreno",
    titulo: "Terreno en Venta",
    precio: "USD $25,000",
    ubicacion: "Av. La Tabalada, esq Jeremías Gutierrez - Justiniano Posse",
    area: 300,
    imagen: "./assets/images catalogo/TERRENO AV. LA TABLADA 1.jpg",
    imagenes: ["./assets/images catalogo/TERRENO AV. LA TABLADA 1.jpg",
      "./assets/images catalogo/TERRENO AV. LA TABLADA 2.jpg"
    ],
    caracteristicas: [
      "Servicios",
      "Escritura en mano",
      
    ],
    descripcion: "Terreno ubicado en excelente ubicación, a metros de colectora",
    coordenadas: "-32.889157, -62.670597",
    numeroContacto: "3517562763",
  },
   {
    id: 12,
    tipo: "departamento",
    titulo: "Departamento en Nva CBA",
    precio: "USD $76,000",
    ubicacion: "Ituzaingo 1129 - Nueva Córdoba ",
    habitaciones: 1,
    banos: 1,
    area: 60,
    imagen: "./assets/images catalogo/DEPTO ITUZAINGO 1129  7.jpg",
    imagenes: ["./assets/images catalogo/DEPTO ITUZAINGO 1129  7.jpg",
      "./assets/images catalogo/DEPTO ITUZAINGO 1129  4.jpg",
      "./assets/images catalogo//DEPTO ITUZAINGO 1129  5.jpg ",
      "./assets/images catalogo/DEPTO ITUZAINGO 1129 1.jpg",
      "./assets/images catalogo//DEPTO ITUZAINGO 1129  2.jpg ",
      "./assets/images catalogo//DEPTO ITUZAINGO 1129  3.jpg ",
      "./assets/images catalogo/DEPTO ITUZAINGO 1129   6.jpg",
    ],
    caracteristicas: [
      "Disposición : Frente",
      "cocina",
      "comedor amplio",
      "balcón",
      "Piso: 8",
      "Antiguedad: 12 años.",
      "Expensas: $100.000 aproximadamente"
      

      
    ],
    descripcion: "Departamento ubicado en Nva Cba, excelente ubicación a cuadras de Plaza España.",
    coordenadas: "-31.429726568067284, -64.18665885866548",
    numeroContacto: "3517562763",
    vendido: true,
  },
   {
    id: 13,
    tipo: "departamento",
    titulo: "Departamento a Estrenar",
    precio: "USD $85,000",
    ubicacion: "Bv. Ocampos 100 Gral Paz - Córdoba Capital",
    subtitulo: "ENTREGA JULIO 2026, EXCELENTE FINANCIACIÓN",
    habitaciones: 1,
    banos: 1,
    area: 43,
    imagen: "./assets/images catalogo/DEPTO PARA ESTRENAR 1.jpg",
    imagenes: ["./assets/images catalogo/DEPTO PARA ESTRENAR 1.jpg",
      "./assets/images catalogo/DEPTO PARA ESTRENAR 2.jpg",
      "./assets/images catalogo/DEPTO PARA ESTRENAR 3.jpg",
      "./assets/images catalogo/DEPTO PARA ESTRENAR 4.jpg",
      "./assets/images catalogo/DEPTO PARA ESTRENAR 5.jpg",
      "./assets/images catalogo/entorno dpto a estrenar 1.png",
      "./assets/images catalogo/entorno dpto a estrenar 2.png",
      "./assets/images catalogo/entorno dpto a estrenar 3.png"
    ],
    caracteristicas: [
      "Disposición : Contra Frente",
      "cocina",
      "comedor",
      "balcón",
      "Piso: 4",
      "Amenities",
      "ENTREGA JULIO 2026",
      "EXCELENTE FINANCIACIÓN"
      

      
    ],
    descripcion: "Departamento ubicado en barrio Gral Paz, excelente ubicación a metros del Centro Cívico.",
    coordenadas: "-31.416834864638158, -64.17250744551347",
    numeroContacto: "3517562763",
  },

  {
    id: 14,
    tipo: "terreno",
    titulo: "Terreno En Venta",
    precio: "USD $65,000",
    ubicacion: "Belgrano 683 - Justiniano Posse",
    area: 825,
    imagen: "./assets/images catalogo/terreno 65mil.jpg",
    imagenes: ["./assets/images catalogo/terreno 65mil.jpg",
      "./assets/images catalogo/terreno65mil 2.jpg",
      "./assets/images catalogo/terreno65mil 3.jpg",
      "./assets/images catalogo/terreno65mil4.jpg"
    ],
    caracteristicas: [
      "Servicios",
      "Escritura en mano",
      
    ],
    descripcion: "Terreno ubicado en excelente ubicación, a metros de plaza central",
    coordenadas: "-32.88665373812455, -62.68128829447729",
    numeroContacto: "3517562763",
  },

  {
    id: 15,
    tipo: "terreno",
    titulo: "Terreno En Venta",
    precio: "USD $48,000",
    ubicacion: "Av La Tablada, esq Presidente Roca - Justiniano Posse",
    area: 600,
    imagen: "./assets/images catalogo/terreno av la tablada pte roca 1.jpg",
    imagenes: ["./assets/images catalogo/terreno av la tablada pte roca 1.jpg",
      
    ],
    caracteristicas: [
      "Servicios",
      "Escritura en mano",
      
    ],
    descripcion: "Terreno ubicado en excelente ubicación, a metros de colectora",
    coordenadas: "-32.88857835408099, -62.673272726309015",
    numeroContacto: "3517562763",
  },

  {
    id: 16,
    tipo: "terreno",
    titulo: "Terrenos En Venta",
    precio: "USD $50,000 C/U",
    ubicacion: "Rául Alfonsin, Juan Manuel de Rosas - Justiniano Posse",
    area: 0,
    imagen: "./assets/images catalogo/terrenos x3 1.jpg",
    imagenes: ["./assets/images catalogo/terrenos x3 1.jpg",
               "./assets/images catalogo/terrenos x3 2.jpg",
               "./assets/images catalogo/terrenos x3 3.jpg",
               "./assets/images catalogo//terrenox3 4.png"
      
    ],
    caracteristicas: [
      "Servicios",
      "Escritura en mano",
      "3 Terrenos"
      
    ],
    descripcion: "Lote dividido en 3, ubicado en una zona muy tranquila, a metros de rotonda principal y colectora",
    coordenadas: "-32.89130986133661, -62.671676080807444",
    numeroContacto: "3517562763",
  },

  {
    id: 17,
    tipo: "departamento",
    titulo: "Departamento En Venta Gral Paz",
    precio: "USD $93,000",
    ubicacion: "Lima 1600 Gral Paz - Córdoba Capital",
    habitaciones: 2,
    banos: 2,
    area: 85,
    imagen: "./assets/images catalogo/depto-gral-paz-1.jpg",
    imagenes: ["./assets/images catalogo/depto-gral-paz-1.jpg",
      "./assets/images catalogo/dpto-gral-paz-2.jpg",
      "./assets/images catalogo/dpto-gral-paz-3.jpg",
      "./assets/images catalogo/dpto-gral-paz-4.jpg",
      
    ],
    caracteristicas: [
      "Disposición : Contra Frente",
      "cocina",
      "comedor",
      "balcón con asador",
      "Caldera",
      "Dormitorios con placard",
      "Condición de Inmueble A Estrenar",
      

      
    ],
    descripcion: "Piturro Inmobiliaria te presenta el siguiente inmueble ubicado sobre calle Lima esquina General Deheza, en uno de los barrios mas cotizados de la ciudad de Cordoba. Cuenta con 2 dormitorios con placares, baño de servicio, ante baño y baño principal, caldera, cocina amoblada y balcón con asador propio. El edificio posee terraza con quincho de uso común. Bajas expensas!!",
    coordenadas: "-31.411466178872896, -64.16262228944578",
    numeroContacto: "3517562763",
    vendido:true
  },

   {
    id: 18,
    tipo: "departamento",
    titulo: "Departamento En Venta B° Jardín",
    precio: "USD $47,000",
    ubicacion: "Rimini 829 Bº Jardín Hipodromo - Córdoba Capital",
    habitaciones: 2,
    banos: 1,
    area: 65,
    imagen: "./assets/images catalogo/depto-1.jpg",
    imagenes: ["./assets/images catalogo/depto-1.jpg",
     "./assets/images catalogo/depto-2.jpg",
     "./assets/images catalogo/depto-3.jpg",
     "./assets/images catalogo/depto-4.jpg",
     "./assets/images catalogo/depto 5.jpg",
     "./assets/images catalogo/depto 6.jpg",
     "./assets/images catalogo/depto 7.jpg",
    ],
    caracteristicas: [
      "Disposición : Contra Frente",
      "cocina",
      "comedor",
      "living",
      "lavadero",
      "Condición de Inmueble Excelente"
      
      
      

      
    ],
    descripcion: "Piturro Inmobiliaria te presenta el este hermoso departamento ubicado sobre calle Rimini 829, a metros de Circunvalación y Shopping Paseo del Jockey. El mismo posee acceso por escalera y cuenta con 2 dormitorios, baño completo, living, comedor y cocina integrada con lavadero. Excelente oportunidad de inversión!!!! Apto Crédito Hipotecario!!!!",
    coordenadas: "-31.458249101349594, -64.18860924637161",
    numeroContacto: "3517562763",
  },

  {
    id: 19,
    tipo: "departamento",
    titulo: "Departamento En Venta B° Gral Paz",
    precio: "USD $63,000",
    ubicacion: "Jacinto Ríos 299 Bº Gral Paz  - Córdoba Capital",
    habitaciones: 2,
    banos: 1,
    area: 28,
    imagen: "./assets/images catalogo/dpto 1.jpg",
    imagenes: ["./assets/images catalogo/dpto 1.jpg",
     "./assets/images catalogo/dpto 2.jpg",
     "./assets/images catalogo/dpto 3.jpg",
     "./assets/images catalogo/dpto 4.jpg",
     "./assets/images catalogo/dpto 5.jpg",
     "./assets/images catalogo/dpto 6.jpg",
     "./assets/images catalogo/dpto 7.jpg",
     "./assets/images catalogo/dpto 8.jpg",
    ],
    caracteristicas: [
      "Antigüedad: 20 años",
      "Disposición :  Frente",
      "cocina",
      "Gran espacio",
      "Condición de Inmueble Excelente",
      "Dormitorios con placares",
      "Blacon al frente",
      
      
      

      
    ],
    descripcion: "PITURRO INMOBILIARIA TE PRESENTA EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLA JACINTO RIOS ESQUINA LIMA, BARRIO GENERAL PAZ. A METROS DE CLINICA UNIVERSITARIA REINA FABIOLA, COLEGIO PIAS, HIPER LIBERTAD. EL MISMO CUENTA CON 2 DORMITORIOS CON PLACARES EMPOTRADOS, BAÑO COMPLETO. BALCON. COCINA SEPARADA CON MUEBLES BAJO MESADA Y ALACENAS. ACCESO POR ESCALERA. BAJAS EXPENSAS.",
    coordenadas: "-31.412666117893544, -64.1664110182815",
    numeroContacto: "3517562763",
  },

  {
    id: 20,
    tipo: "casa",
    titulo: "Casa Familiar",
    precio: "USD $49,000",
    ubicacion: "Pasaje 1 De Marzo de 1911, Justiniano Posse",
    habitaciones: 3,
    banos: 1,
    area: 269,
    imagen: "./assets/images catalogo/casa pasaje.jpg",
    imagenes: ["./assets/images catalogo/casa pasaje.jpg"],
    caracteristicas: [
      "patio",
      "cocina",
      "comedor",
      "garaje",
      "living",
      "lavadero",
    ],
    descripcion: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande. Superficie cubierta 92m2",
    coordenadas: "-32.88296197479276, -62.685182418274145",
    numeroContacto: "3517562763",
  },

  {
    id: 21,
    tipo: "casa",
    titulo: "Casa Familiar con Amplio Patio",
    precio: "USD $120,000",
    ubicacion: "Av. Tablada 747, Justiniano Posse",
    habitaciones: 2,
    banos: 1,
    area: 606,
    imagen: "./assets/images catalogo/casa tablada.jpg",
    imagenes: ["./assets/images catalogo/casa tablada.jpg"],
    caracteristicas: [
      "patio",
      "cocina",
      "comedor",
      "garaje",
      "living",
      "lavadero",
    ],
    descripcion: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande. Superficie cubierta 129m2",
    coordenadas: "-32.887279160325534, -62.67917131827413",
    numeroContacto: "3517562763",
  },

  {
    id: 22,
    tipo: "terreno",
    titulo: "Terreno en Venta Ubicado en Zona Industrial",
    precio: "USD $35,000",
    ubicacion: "Boulevard Colón - Justiniano Posse",
    area: 1000,
    imagen: "./assets/images catalogo/terreno colon 1.jpg",
    imagenes: ["./assets/images catalogo/terreno colon 1.jpg",
      "./assets/images catalogo/terreno colon 2.jpg",
      "./assets/images catalogo/terreno colon 3.jpg",
      "./assets/images catalogo/terreno colon 4.jpg",
      "./assets/images catalogo/terreno colon 5.jpg",

      
    ],
    caracteristicas: [
      "Alumbrado Público",
      "20 metros de frente",
      "50 metros de fondo"
      
    ],
    descripcion: "Terreno ubicado en zona industrial, rodeados de grandes empresas, cuenta con alumbrado público",
    coordenadas: "-32.877015865281216, -62.676068290541664",
    numeroContacto: "3517562763",
  },

  {
    id: 23,
    tipo: "locales",
    titulo: "Local Comercial ideal para tu Emprendimiento",
    precio: "USD $28,000",
    ubicacion: "9 de Julio 246, Córdoba Capital",
    habitaciones: 0,
    banos: 0,
    area: 26,
    imagen: "./assets/images catalogo/local-comercial-1.jpg",
    imagenes: ["./assets/images catalogo/local-comercial-1.jpg",
      
      "./assets/images catalogo/local-comercial-3.jpg",
      "./assets/images catalogo/local-comercial-4.jpg",
      "./assets/images catalogo/local-comercial-5.jpg",
    ],
    caracteristicas: [
      "Antigüedad: Nuevo",
      "A Estrenar: No",
      "Cobertura Cocheras: Cubierta",
      "Vigilancia: Sí",
   
    
     

    ],
    descripcion: "LOCAL COMERCIAL SOBRE CALLE 9 DE JULIO, GALERIA SHOPPING CENTER PLANETA. MEDIDAS 3,5M DE FRENTE X 3,5M DE FONDO",
    coordenadas: "-31.413797673669844, -64.18703114046383",
    numeroContacto: "3517562763",
  },

  {
    id: 24,
    tipo: "cochera",
    titulo: "Cochera Cubierta en venta",
    precio: "USD $16,000",
    ubicacion: "Catamarca 1655 B° Gral Paz, Córdoba Capital",
    habitaciones: 0,
    banos: 0,
    area: 18,
    imagen: "./assets/images catalogo/cochera-grpal-paz-1.jpg",
    imagenes: ["./assets/images catalogo/cochera-grpal-paz-1.jpg",
      "./assets/images catalogo/cochera-grpal-paz-2.jpg",
      "./assets/images catalogo/cochera-grpal-paz-3.jpg",
      "./assets/images catalogo/cochera-grpal-paz-4.jpg",
    ],
    caracteristicas: [
   "Antigüedad: Nuevo",
   "A Estrenar: Sí",
   "Cobertura Cocheras: Cubierta",
   "Superficie Total m2: 18",
   "Vigilancia: Sí",
   "Baulera: Sí",
   "Propiedad Ocupada: No"

    ],
    descripcion: "Excelente cochera en edificio de categoría. Cuenta con escritura.",
    coordenadas: "-31.413797673669844, -64.18703114046383",
    numeroContacto: "3517562763",
  },

  {
    id: 25,
    tipo: "cochera",
    titulo: "Cochera Cerrada Excelente Ubicación",
    precio: "USD $13,000",
    ubicacion: "Belgrano 33, Córdoba Capital",
    habitaciones: 0,
    banos: 0,
    area: 0,
    imagen: "./assets/images catalogo/local-comercial-2.jpg",
    imagenes: ["./assets/images catalogo/local-comercial-2.jpg",
      
      "./assets/images catalogo/local-comercial-3.jpg",
      
    ],
    caracteristicas: [
      "Ascensor para Vehículo",
      "Cobertura Cocheras: Cubierta",
      "Vigilancia: Sí",
   
     
    

    ],
    descripcion: "COCHERA SOBRE CALLE BELGRANO 33. LA MISMA CUENTA CON ASCENSOR PARA EL TRASLADO DEL VEHICULO",
    coordenadas: "-31.415165395630133, -64.18818979018226",
    numeroContacto: "3517562763",
  },

  {
    id: 26,
    tipo: "terreno",
    titulo: "Lotes en Venta Potrero de Garay",
    precio: "USD $18,000",
    ubicacion: "Potrero de Garay - Córdoba",
    habitaciones: 0,
    banos: 0,
    area: 1000,
    imagen: "./assets/images catalogo/inmuebles-terreno-venta-5504980-9d94559f-1eae-46ed-9334-1c6f622ac8c4.jpg",
    imagenes: ["./assets/images catalogo/inmuebles-terreno-venta-5504980-9d94559f-1eae-46ed-9334-1c6f622ac8c4.jpg",
      "./assets/images catalogo/inmuebles-terreno-venta-5504980-5bbb9dae-d904-4713-82ee-dd1553bc1530.jpg",
      "./assets/images catalogo/inmuebles-terreno-venta-5504980-d066a1b2-2975-4253-accf-9d919406c83b.jpg",
      "./assets/images catalogo/inmuebles-terreno-venta-5504980-f4e3674d-b90c-49f1-a7f5-ac9e145cff6e.jpg",
      
     
      
    ],
    caracteristicas: [
   "Antigüedad: Nuevo",
  "Superficie Total m2: 1000",
   "Propiedad Ocupada: No",
   "Agua Potable",
   "Energía Eléctrica"
   
     
    

    ],
    descripcion: "LOCALIZADO EN UNA ZONA TRANQUILA Y CON GRANDES VISTAS. CUENTA CONX50), SERVICIOS DE AGUA POTABLE Y ENERGIA ELECTRICA. POSEE ESCRITURA.",
    coordenadas: "-31.795630666818777, -64.56263033580471",
    numeroContacto: "3517562763",
  },

  {
    id: 27,
    tipo: "terreno",
    titulo: "Lotes en Venta Barrio Privado",
    precio: "USD $18,000",
    ubicacion: "Potrero de Garay, camino a San Clemente.",
    habitaciones: 0,
    banos: 0,
    area: 3000,
    imagen: "./assets/images catalogo/terreno 1.jpg",
    imagenes: [ "./assets/images catalogo/terreno 1.jpg",
      "./assets/images catalogo/terreno 2.jpg",
      "./assets/images catalogo/terreno 3.jpg",
      "./assets/images catalogo/terreno 4.jpg",
      "./assets/images catalogo/terreno 5.jpg",
      
     
      
    ],
    caracteristicas: [
   "Barrio: Privado.",
   "Expensas: economicas.",
   "Servicios: Energía eléctrica, agua potable, seguridad 24hs.",
   "Amenities: Restaurant, piscina, etc."
   
     
    

    ],
    descripcion: "LOCALIZADO EN UNA ZONA TRANQUILA Y CON GRANDES VISTAS.",
    coordenadas: "-31.7862402425419, -64.63093937863773",
    numeroContacto: "3517562763",
  },

  {
    id: 28,
    tipo: "casa",
    titulo: "Casa con Amplio Patio",
    precio: "USD $60,000",
    ubicacion: "Güemess 1455, Luque",
    habitaciones: 1,
    banos: 1,
    area: 250,
    imagen: "./assets/images catalogo/luque casa 5.jpg",
    imagenes: ["./assets/images catalogo/luque casa 5.jpg",
      "./assets/images catalogo/luque casa 8.jpg",
      "./assets/images catalogo/luque casa 9.jpg",
      "./assets/images catalogo/luque casa 7.jpg",
      "./assets/images catalogo/luque casa 4.jpg",
      "./assets/images catalogo/luque casa 3.jpg",
      "./assets/images catalogo/luque casa 6.jpg",
      "./assets/images catalogo/luque casa 2.jpg",
      "./assets/images catalogo/luque casa 1.jpg",
     
    ],
    caracteristicas: [
      "patio",
      "cocina",
      "comedor",
      "garaje",
      "lavadero",
    ],
    descripcion: "Casa familiar con amplio patio, excelente ubicación, Superficie cubierta 82m2",
    coordenadas: "-31.65077680879449, -63.337585092310206",
    numeroContacto: "3517562763",
  },

  {
    id: 29,
    tipo: "departamento",
    titulo: "Departamento En Nueva Córdoba",
    precio: "USD $110,000",
    ubicacion: "Pueyrredón 85 - Córdoba Capital",
    habitaciones: 2,
    banos: 1,
    area: 68,
    imagen: "./assets/images catalogo/dpto cba comedor.jpg",
    imagenes: ["./assets/images catalogo/dpto cba comedor.jpg",
     "./assets/images catalogo/dpto cba cocina.jpg",
     "./assets/images catalogo/dpto cba hab 1.jpg",
     "./assets/images catalogo/dpto cba hab 2.jpg",
     "./assets/images catalogo/dpto cba baño.jpg",
     "./assets/images catalogo/dpto cba balcon 2.jpg",
     "./assets/images catalogo/dpto cba pasillo.jpg",
     "./assets/images catalogo/dpto cba comedor.jpg",
     
    ],
    caracteristicas: [
      "Primer piso",
      "cocina",
      "comedor",
      "balcón",
      
    ],
    descripcion: "Departamento en venta excelente ubicación",
    coordenadas: "-31.426878023686175, -64.19013656565582",
    numeroContacto: "3517562763",
  },



]

// Variables globales
let propiedadesFiltradas = [...propiedades]
let currentProperty = null
let currentImageIndex = 0
let propertyImages = []

// Inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  setupMobileMenu()
  setupActiveNavigation() // Nueva función para activar el enlace de la página actual

  // Carga condicional de contenido basado en la página actual
  const currentPage = window.location.pathname.split("/").pop()

  if (currentPage === "index.html" || currentPage === "") {
    loadFeaturedProperties()
    setupModalControls() // Asegúrate de que el modal funcione en la página de inicio
  } else if (currentPage === "propiedades.html") {
    setupPropertyFilters()
    setupAdvancedFilters()
    loadProperties()
    setupSearchAndSort()
    setupModalControls() // El modal también es necesario en propiedades.html
  } else if (currentPage === "contacto.html") {
    setupContactForm()
  }
  // No hay inicialización específica para sobre-nosotros.html aparte del menú
}

// Configuración del menú móvil
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", function () {
      this.classList.toggle("active")
      mobileNav.classList.toggle("active")
    })

    // Cerrar menú al hacer clic fuera
    document.addEventListener("click", (e) => {
      if (!mobileMenuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileMenuBtn.classList.remove("active")
        mobileNav.classList.remove("active")
      }
    })
  }
}

// Configuración de navegación activa para múltiples páginas
function setupActiveNavigation() {
  const navLinks = document.querySelectorAll(".nav-link, .nav-link-mobile")
  const currentPath = window.location.pathname.split("/").pop()

  navLinks.forEach((link) => {
    // Eliminar la clase 'active' de todos los enlaces primero
    link.classList.remove("active")

    // Determinar si el enlace corresponde a la página actual
    const linkHref = link.getAttribute("href")
    const linkPage = linkHref.split("/").pop()

    if (currentPath === linkPage || (currentPath === "" && linkPage === "index.html")) {
      link.classList.add("active")
    }
  })
}

// Configuración de filtros de propiedades
function setupPropertyFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
      aplicarFiltros() // Llama a aplicarFiltros para re-filtrar
    })
  })
}

// Cargar propiedades en el DOM
function loadProperties() {
  const grid = document.getElementById("propiedadesGrid")

  if (!grid) return

  grid.innerHTML = ""

  propiedadesFiltradas.forEach((propiedad) => {
    const card = createPropertyCard(propiedad)
    grid.appendChild(card)
  })

  const cards = grid.querySelectorAll(".propiedad-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"

    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 100)
  })
}

// Crear card de propiedad con cartel "VENDIDO" o "VENDIDA" según tipo
function createPropertyCard(propiedad) {
  const card = document.createElement("div");
  card.className = "propiedad-card";
  card.setAttribute("data-tipo", propiedad.tipo);

  // Verificar si está marcada como vendida/o
  const estaVendida = propiedad.vendido || propiedad.vendida;

  // Texto dinámico según el tipo de propiedad
  const textoVendido =
    propiedad.tipo === "casa" ? "VENDIDA" : "VENDIDO";

  // Agregar clase si está vendida/o
  if (estaVendida) card.classList.add("sold");

  card.innerHTML = `
    <div class="propiedad-image" style="background-image: url('${propiedad.imagen}')">
        ${estaVendida ? `<div class="sold-overlay"><span>${textoVendido}</span></div>` : ""}
    </div>
    <div class="propiedad-info">
        <div class="propiedad-precio">${propiedad.precio}</div>
        <h3 class="propiedad-titulo">${propiedad.titulo}</h3>
        <div class="propiedad-ubicacion">
            <i class="fas fa-map-marker-alt"></i>
            ${propiedad.ubicacion}
        </div>
        <div class="propiedad-detalles">
            ${
              propiedad.habitaciones > 0
                ? `
                <div class="detalle">
                    <i class="fas fa-bed"></i>
                    ${propiedad.habitaciones} hab
                </div>
            `
                : ""
            }
            <div class="detalle">
                <i class="fas fa-bath"></i>
                ${propiedad.banos} baños
            </div>
            <div class="detalle">
                <i class="fas fa-ruler-combined"></i>
                ${propiedad.area} m²
            </div>
            <div class="detalle">
                <i class="fas fa-check"></i>
                ${propiedad.caracteristicas.join(", ")}
            </div>
        </div>
        <button class="ver-mas-btn" onclick="verDetalles(${propiedad.id})" ${
          estaVendida ? "disabled" : ""
        }>
            ${estaVendida ? textoVendido : "Ver Detalles"}
        </button>
    </div>
  `;

  return card;
}



// Ver detalles de propiedad
function verDetalles(id) {
  const propiedad = propiedades.find((p) => p.id === id)
  if (propiedad) {
    currentProperty = propiedad
    propertyImages = propiedad.imagenes || [propiedad.imagen]
    currentImageIndex = 0

    openModal(propiedad)
  }
}

function openModal(propiedad) {
  const modal = document.getElementById("propertyModal")

  if (!modal) {
    console.error("Modal de propiedades no encontrado. Asegúrate de que esté en la página actual.")
    return
  }

  document.getElementById("modalTitle").textContent = propiedad.titulo
  document.getElementById("modalPrice").textContent = propiedad.precio
  document.getElementById("modalLocation").querySelector("span").textContent = propiedad.ubicacion
  document.getElementById("modalDescription").textContent = propiedad.descripcion

  loadModalImages()
  loadModalDetails(propiedad)
  loadModalFeatures(propiedad)

  const locationLink = document.getElementById("locationLink")
  locationLink.href = `https://www.google.com/maps?q=${propiedad.coordenadas}`

  modal.classList.add("show") // Añadir clase 'show' para visibilidad y animación
  document.body.style.overflow = "hidden"
}

function loadModalImages() {
  const mainImage = document.getElementById("mainImage")
  const thumbnailContainer = document.getElementById("thumbnailImages")

  if (!mainImage || !thumbnailContainer) return

  mainImage.src = propertyImages[currentImageIndex]
  mainImage.alt = currentProperty.titulo

  thumbnailContainer.innerHTML = ""
  propertyImages.forEach((image, index) => {
    const thumbnail = document.createElement("div")
    thumbnail.className = `thumbnail ${index === currentImageIndex ? "active" : ""}`
    thumbnail.innerHTML = `<img src="${image}" alt="Imagen ${index + 1}">`
    thumbnail.onclick = () => selectImage(index)
    thumbnailContainer.appendChild(thumbnail)
  })
}

function selectImage(index) {
  currentImageIndex = index
  loadModalImages()
}

function previousImage() {
  currentImageIndex = currentImageIndex > 0 ? currentImageIndex - 1 : propertyImages.length - 1
  loadModalImages()
}

function nextImage() {
  currentImageIndex = currentImageIndex < propertyImages.length - 1 ? currentImageIndex + 1 : 0
  loadModalImages()
}

function loadModalDetails(propiedad) {
  const detailsContainer = document.getElementById("modalDetails")
  if (!detailsContainer) return
  detailsContainer.innerHTML = ""

  const details = [
    { icon: "fas fa-bed", label: "Habitaciones", value: propiedad.habitaciones > 0 ? propiedad.habitaciones : "N/A" },
    { icon: "fas fa-bath", label: "Baños", value: propiedad.banos },
    { icon: "fas fa-ruler-combined", label: "Área", value: `${propiedad.area} m²` },
    { icon: "fas fa-home", label: "Tipo", value: propiedad.tipo.charAt(0).toUpperCase() + propiedad.tipo.slice(1) },
  ]

  details.forEach((detail) => {
    const detailElement = document.createElement("div")
    detailElement.className = "detail-item"
    detailElement.innerHTML = `
      <i class="${detail.icon}"></i>
      <div>
        <div class="detail-label">${detail.label}</div>
        <div class="detail-value">${detail.value}</div>
      </div>
    `
    detailsContainer.appendChild(detailElement)
  })
}

function loadModalFeatures(propiedad) {
  const featuresContainer = document.getElementById("modalFeatures")
  if (!featuresContainer) return
  featuresContainer.innerHTML = ""

  const featureIcons = {
    patio: "fas fa-tree",
    balcon: "fas fa-building",
    terraza: "fas fa-mountain",
    garaje: "fas fa-car",
    cochera: "fas fa-warehouse",
    piscina: "fas fa-swimming-pool",
    cocina: "fas fa-utensils",
    comedor: "fas fa-chair",
    living: "fas fa-couch",
    lavadero: "fas fa-tshirt",
    "jardin amplio": "fas fa-seedling",
  }

  propiedad.caracteristicas.forEach((caracteristica) => {
    const featureElement = document.createElement("div")
    featureElement.className = "feature-tag"
    featureElement.innerHTML = `
      <i class="${featureIcons[caracteristica] || "fas fa-check"}"></i>
      ${caracteristica.charAt(0).toUpperCase() + caracteristica.slice(1)}
    `
    featuresContainer.appendChild(featureElement)
  })
}

function closeModal() {
  const modal = document.getElementById("propertyModal")
  if (modal) {
    modal.classList.remove("show") // Eliminar clase 'show' para ocultar y animar
    document.body.style.overflow = "auto"
    currentProperty = null
    propertyImages = []
    currentImageIndex = 0
  }
}

function contactarPropiedadConNumero(numero, ubicacion) {
  if (currentProperty) {
    const mensaje = `Hola, estoy interesado en la propiedad: ${currentProperty.titulo} (${currentProperty.precio}). ¿Podrían brindarme más información?`
    const whatsappUrl = `https://wa.me/54${numero}?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }
}

function contactarPropiedad() {
  if (currentProperty) {
    contactarPropiedadConNumero(currentProperty.numeroContacto)
  }
}

function llamarTelefono(numero) {
  const telUrl = `tel:+54${numero}`
  window.location.href = telUrl
}

function abrirWhatsApp() {
  const mensaje = "Hola, estoy interesado en sus propiedades. ¿Podrían brindarme más información?"
  const numeroWhatsApp = "3537447777"
  const whatsappUrl = `https://wa.me/54${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
  window.open(whatsappUrl, "_blank")
}

function agendarVisita() {
  if (currentProperty) {
    // Redirigir a la página de contacto y pasar datos para pre-llenar
    const propertyTitle = encodeURIComponent(currentProperty.titulo)
    const propertyPrice = encodeURIComponent(currentProperty.precio)
    window.location.href = `contacto.html?consulta=visita&titulo=${propertyTitle}&precio=${propertyPrice}`
  }
}

// Cerrar modal al hacer clic fuera de él
window.onclick = (event) => {
  const modal = document.getElementById("propertyModal")
  if (modal && event.target === modal) {
    closeModal()
  }
}

// Cerrar modal con tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})

// Función para buscar propiedades
function buscarPropiedades(termino = "") {
  if (!termino) {
    termino = document.getElementById("searchInput")?.value || ""
  }

  let tempPropiedades = [...propiedades] // Usar una copia para la búsqueda inicial

  if (termino.trim() !== "") {
    tempPropiedades = tempPropiedades.filter(
      (p) =>
        p.titulo.toLowerCase().includes(termino.toLowerCase()) ||
        p.ubicacion.toLowerCase().includes(termino.toLowerCase()) ||
        p.tipo.toLowerCase().includes(termino.toLowerCase()),
    )
  }

  // Aplicar los filtros avanzados después de la búsqueda
  aplicarFiltros(tempPropiedades)
}

// Función para ordenar propiedades
function ordenarPropiedades(criterio) {
  // Asegurarse de que se está ordenando el conjunto de propiedades actualmente filtrado
  switch (criterio) {
    case "precio-asc":
      propiedadesFiltradas.sort((a, b) => {
        const precioA = Number.parseInt(a.precio.replace(/[USD$,]/g, ""))
        const precioB = Number.parseInt(b.precio.replace(/[USD$,]/g, ""))
        return precioA - precioB
      })
      break
    case "precio-desc":
      propiedadesFiltradas.sort((a, b) => {
        const precioA = Number.parseInt(a.precio.replace(/[USD$,]/g, ""))
        const precioB = Number.parseInt(b.precio.replace(/[USD$,]/g, ""))
        return precioB - precioA
      })
      break
    case "area-desc":
      propiedadesFiltradas.sort((a, b) => b.area - a.area)
      break
    default:
      // Si el criterio es "default", reestablecer a las propiedades originales y luego aplicar filtros
      propiedadesFiltradas = [...propiedades]
      aplicarFiltros() // Reaplicar todos los filtros para asegurar el estado correcto
      return // Salir para evitar doble carga
  }

  loadProperties()
}

function setupSearchAndSort() {
  const searchInput = document.getElementById("searchInput")
  const sortSelect = document.getElementById("sortSelect")

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      buscarPropiedades(this.value)
    })
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      ordenarPropiedades(this.value)
    })
  }
}

function loadFeaturedProperties() {
  const grid = document.getElementById("propiedadesDestacadas")

  if (!grid) return

  const propiedadesDestacadas = propiedades.slice(0, 4)

  grid.innerHTML = ""

  propiedadesDestacadas.forEach((propiedad) => {
    const card = createPropertyCard(propiedad)
    grid.appendChild(card)
  })

  const cards = grid.querySelectorAll(".propiedad-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"

    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 100)
  })
}

function setupAdvancedFilters() {
  const dormitoriosFilter = document.getElementById("dormitoriosFilter")
  const banosFilter = document.getElementById("banosFilter")
  const caracteristicasCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]')

  if (dormitoriosFilter) {
    dormitoriosFilter.addEventListener("change", aplicarFiltros)
  }

  if (banosFilter) {
    banosFilter.addEventListener("change", aplicarFiltros)
  }

  caracteristicasCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", aplicarFiltros)
  })
}

function aplicarFiltros(initialProperties = propiedades) {
  let currentFilteredProperties = [...initialProperties]

  // Filtro por tipo
  const tipoActivo = document.querySelector(".filter-btn.active")?.getAttribute("data-filter")
  if (tipoActivo && tipoActivo !== "all") {
    currentFilteredProperties = currentFilteredProperties.filter((p) => p.tipo === tipoActivo)
  }

  // Filtro por dormitorios
  const dormitoriosValue = document.getElementById("dormitoriosFilter")?.value
  if (dormitoriosValue) {
    currentFilteredProperties = currentFilteredProperties.filter((p) => {
      switch (dormitoriosValue) {
        case "1":
          return p.habitaciones === 1
        case "2-3":
          return p.habitaciones >= 2 && p.habitaciones <= 3
        case "4-5":
          return p.habitaciones >= 4 && p.habitaciones <= 5
        case "5+":
          return p.habitaciones > 5
        default:
          return true
      }
    })
  }

  // Filtro por baños
  const banosValue = document.getElementById("banosFilter")?.value
  if (banosValue) {
    currentFilteredProperties = currentFilteredProperties.filter((p) => {
      switch (banosValue) {
        case "1":
          return p.banos === 1
        case "2-3":
          return p.banos >= 2 && p.banos <= 3
        case "4+":
          return p.banos >= 4
        default:
          return true
      }
    })
  }

  // Filtro por características
  const caracteristicasSeleccionadas = []
  const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked')
  checkboxes.forEach((checkbox) => {
    caracteristicasSeleccionadas.push(checkbox.value)
  })

  if (caracteristicasSeleccionadas.length > 0) {
    currentFilteredProperties = currentFilteredProperties.filter((p) => {
      return caracteristicasSeleccionadas.every(
        (caracteristica) => p.caracteristicas && p.caracteristicas.includes(caracteristica),
      )
    })
  }

  // Filtro por búsqueda de texto (si no se pasó una lista inicial, se aplica aquí)
  if (initialProperties === propiedades) {
    // Solo aplicar si no viene de buscarPropiedades
    const searchTerm = document.getElementById("searchInput")?.value
    if (searchTerm && searchTerm.trim() !== "") {
      currentFilteredProperties = currentFilteredProperties.filter(
        (p) =>
          p.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.ubicacion.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.tipo.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }
  }

  // Actualizar propiedades filtradas globalmente
  propiedadesFiltradas = currentFilteredProperties

  // Reaplicar el ordenamiento actual si existe
  const sortSelect = document.getElementById("sortSelect")
  if (sortSelect && sortSelect.value !== "default") {
    ordenarPropiedades(sortSelect.value) // Esto llamará a loadProperties al final
  } else {
    loadProperties() // Si no hay ordenamiento, solo cargar las propiedades filtradas
  }
}

function limpiarFiltros() {
  // Limpiar filtros de tipo
  document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelector('.filter-btn[data-filter="all"]')?.classList.add("active")

  // Limpiar select de dormitorios
  const dormitoriosFilter = document.getElementById("dormitoriosFilter")
  if (dormitoriosFilter) dormitoriosFilter.value = ""

  // Limpiar select de baños
  const banosFilter = document.getElementById("banosFilter")
  if (banosFilter) banosFilter.value = ""

  // Limpiar checkboxes de características
  document.querySelectorAll('.checkbox-group input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = false
  })

  // Limpiar búsqueda
  const searchInput = document.getElementById("searchInput")
  if (searchInput) searchInput.value = ""

  // Limpiar ordenamiento
  const sortSelect = document.getElementById("sortSelect")
  if (sortSelect) sortSelect.value = "default"

  // Mostrar todas las propiedades
  propiedadesFiltradas = [...propiedades]
  loadProperties()
}

function setupModalControls() {
  // Estos controles solo son relevantes si el modal existe en la página
  const modal = document.getElementById("propertyModal")
  if (modal) {
    const closeBtn = modal.querySelector(".close")
    const prevBtn = modal.querySelector(".prev-btn")
    const nextBtn = modal.querySelector(".next-btn")
    const contactBtn = modal.querySelector(".contact-btn.primary")
    const visitBtn = modal.querySelector(".contact-btn.secondary")

    if (closeBtn) {
      closeBtn.addEventListener("click", closeModal)
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", previousImage)
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", nextImage)
    }

    if (contactBtn) {
      contactBtn.addEventListener("click", contactarPropiedad)
    }

    if (visitBtn) {
      visitBtn.addEventListener("click", agendarVisita)
    }

    // Event listener para cerrar el modal al hacer clic fuera del contenido
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }
}

// Configuración del formulario de contacto
function setupContactForm() {
  const form = document.querySelector(".contacto-form")

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault()

      const nombre = this.querySelector('input[type="text"]').value
      const email = this.querySelector('input[type="email"]').value
      const telefono = this.querySelector('input[type="tel"]').value
      const tipoConsulta = this.querySelector("select").value
      const mensaje = this.querySelector("textarea").value

      if (nombre && email && mensaje && tipoConsulta) {
        enviarMensajeWhatsApp(nombre, email, telefono, tipoConsulta, mensaje)
        alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
        this.reset()
      } else {
        alert("Por favor, completa todos los campos obligatorios.")
      }
    })

    // Lógica para pre-llenar el formulario si viene de agendarVisita
    const urlParams = new URLSearchParams(window.location.search)
    const consultaType = urlParams.get("consulta")
    const propertyTitle = urlParams.get("titulo")
    const propertyPrice = urlParams.get("precio")

    if (consultaType === "visita" && propertyTitle && propertyPrice) {
      const select = form.querySelector("select")
      if (select) {
        const option = Array.from(select.options).find((opt) => opt.value === "otro")
        if (option) option.selected = true
      }
      const textarea = form.querySelector("textarea")
      if (textarea) {
        textarea.value = `Me gustaría agendar una visita para la propiedad: ${decodeURIComponent(propertyTitle)} (${decodeURIComponent(propertyPrice)})`
      }
    }
  }
}

function enviarMensajeWhatsApp(nombre, email, telefono, tipoConsulta, mensaje) {
  const numeroWhatsApp = "3537447777" // Número de Justiniano Posse

  const mensajeWhatsApp = `*Nuevo mensaje desde el formulario de contacto:*

*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono || "No proporcionado"}
*Tipo de consulta:* ${tipoConsulta}

*Mensaje:*
${mensaje}`

  const whatsappUrl = `https://wa.me/54${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`
  window.open(whatsappUrl, "_blank")
}

// Detecta si el sitio se abre dentro del navegador de Instagram o Facebook
(function() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;

  const isInstagram = ua.includes("Instagram");
  const isFacebook = ua.includes("FBAN") || ua.includes("FBAV");

  if (isInstagram || isFacebook) {
    // Para evitar recargar infinitamente, solo lo hace una vez
    if (!window.location.href.includes("refresh")) {
      const separator = window.location.href.includes("?") ? "&" : "?";
      window.location.href = window.location.href + separator + "refresh=" + new Date().getTime();
    }
  }
})();
function compartirPropiedad() {
  if (!currentProperty) return;

  // 🔗 Genera el enlace directo a la propiedad actual
  const link = `${window.location.origin}${window.location.pathname}?propiedad=${currentProperty.id}`;

  // 📱 Si el dispositivo permite compartir (celulares)
  if (navigator.share) {
    navigator.share({
      title: currentProperty.titulo,
      text: `Mirá esta propiedad: ${currentProperty.titulo} (${currentProperty.precio})`,
      url: link,
    }).catch((error) => console.log("Error al compartir:", error));
  } 
  // 💻 Si está en una computadora, copia el enlace
  else {
    navigator.clipboard.writeText(link)
      .then(() => {
        alert("📋 Enlace copiado al portapapeles");
      })
      .catch(() => {
        alert("No se pudo copiar el enlace. Copialo manualmente:\n" + link);
      });
  }
}

