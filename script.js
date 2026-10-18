
// ATLAS GYM ZUMBI
// FUNCIONALIDADES DE LA PÁGINA

// 1. MENÚ PARA CELULARES

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const abierto = navLinks.classList.toggle("open");

  menuBtn.textContent = abierto ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", String(abierto));
});

document.querySelectorAll(".nav-links a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// 2. VIDEO DE LA PORTADA

const video = document.getElementById("heroVideo");
const videoVisual = document.getElementById("heroVisual");
const pauseBtn = document.getElementById("pauseVideo");

function actualizarBotonVideo() {
  if (video.paused) {
    pauseBtn.textContent = "▶ REPRODUCIR VIDEO";
  } else {
    pauseBtn.textContent = "Ⅱ PAUSAR VIDEO";
  }
}

video.muted = true;
video.loop = true;

video.addEventListener("playing", actualizarBotonVideo);
video.addEventListener("pause", actualizarBotonVideo);

video.addEventListener("error", () => {
  videoVisual.classList.add("video-error");
  pauseBtn.style.display = "none";
  console.error("No se pudo cargar el video:", video.currentSrc);
});

const fuente = video.querySelector("source");

if (fuente) {
  fuente.addEventListener("error", () => {
    videoVisual.classList.add("video-error");
    pauseBtn.style.display = "none";
    console.error("Revisa la ruta del archivo:", fuente.src);
  });
}

pauseBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play().catch((error) => {
      console.error("Error reproduciendo video:", error);
    });
  } else {
    video.pause();
  }
});

// Respetar preferencias de movimiento reducido
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  video.pause();
} else {
  video.play().catch(() => {
    actualizarBotonVideo();
  });
}

actualizarBotonVideo();

// 3. CALCULADORA DE PLANES

const planes = {
  1: { nombre: "PLAN INDIVIDUAL", precio: 20 },
  2: { nombre: "PLAN DÚO", precio: 19 },
  3: { nombre: "PLAN TRÍO", precio: 18 },
  4: { nombre: "PLAN CREW", precio: 17 }
};

const botonesPlanes = document.querySelectorAll(".plan-item");

const selectedName = document.getElementById("selectedName");
const selectedPrice = document.getElementById("selectedPrice");
const selectedPeople = document.getElementById("selectedPeople");
const selectedTotal = document.getElementById("selectedTotal");

function seleccionarPlan(personas) {
  const plan = planes[personas];

  if (!plan) return;

  botonesPlanes.forEach((boton) => {
    const activo = Number(boton.dataset.people) === personas;

    boton.classList.toggle("selected", activo);
    boton.setAttribute("aria-pressed", String(activo));
  });

  selectedName.textContent = plan.nombre;
  selectedPrice.textContent = plan.precio;

  selectedPeople.textContent =
    personas === 1 ? "1 persona" : `${personas} personas`;

  const total = plan.precio * personas;

  selectedTotal.textContent = `$${total}`;
}

botonesPlanes.forEach((boton) => {
  boton.addEventListener("click", () => {
    const personas = Number(boton.dataset.people);
    seleccionarPlan(personas);
  });
});

seleccionarPlan(1);

// 4. AÑO AUTOMÁTICO

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
