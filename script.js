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
    titulo: "Casa Familiar Grande",
    precio: "USD $160,000",
    ubicacion: "Belgrano 42, Justiniano Posse",
    habitaciones: 7,
    banos: 3,
    area: 770,
    imagen: "./assets/images catalogo/CASA 5.png",
    imagenes: ["./assets/images catalogo/CASA 5.png"],
    caracteristicas: [
      "patio",
      "cocina",
      "comedor",
      "living",
      "galería",
      "altillo",
      "sótano",
      "lavadero",
      "jardin amplio",
    ],
    descripcion: "Amplia casa familiar con garage, amplio patio y varias habitaciones. Ideal para familias grandes.",
    coordenadas: "-32.87984965312735, -62.67946201642972",
    numeroContacto: "3573447777",
  },
  {
    id: 5,
    tipo: "casa",
    titulo: "Casa Familiar con Rejas",
    precio: "USD $75,000",
    ubicacion: "Sargento Caballero 582, Justiniano Posse",
    habitaciones: 3,
    banos: 1,
    area: 330,
    imagen: "./assets/images catalogo/CASA 6.png",
    imagenes: ["./assets/images catalogo/CASA 6.png"],
    caracteristicas: ["patio", "cocina", "comedor", "living"],
    descripcion: "Casa familiar con excelente ubicación y patio. Ideal para familias con hijos chicos.",
    coordenadas: "40.7282,-73.7949",
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
    imagen: "./assets/images catalogo/CASA 9.png",
    imagenes: ["./assets/images catalogo/CASA 9.png"],
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
    imagen: "./assets/images catalogo/CASA 10.png",
    imagenes: ["./assets/images catalogo/CASA 10.png"],
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

// Crear card de propiedad
function createPropertyCard(propiedad) {
  const card = document.createElement("div")
  card.className = "propiedad-card"
  card.setAttribute("data-tipo", propiedad.tipo)

  card.innerHTML = `
        <div class="propiedad-image" style="background-image: url('${propiedad.imagen}')"></div>
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
            <button class="ver-mas-btn" onclick="verDetalles(${propiedad.id})">
                Ver Detalles
            </button>
        </div>
    `

  return card
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
