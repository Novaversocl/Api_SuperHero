// URL base de la API
const BASE_URL = "https://superheroapi.com/api.php/";

// Token de autenticación para la API
const API_TOKEN = "e3fe2be95bda5c16995ec9a94d38bc3a";

// Contenedor donde se mostrarán las tarjetas de los superhéroes
const superHeroesContainer = document.getElementById("oneSuperHero-section"); // Acceder al primer elemento

// ID de inicio para obtener los datos de los superhéroes
const startId = 1;

// ID de fin para obtener los datos de los superhéroes
const endId = 100; // Ajustado para obtener los primeros 20 superhéroes

// Función para obtener los datos de un superhéroe por su ID
function getSuperheroData(id) {
  return $.ajax({
    type: "GET",
    url: `${BASE_URL}${API_TOKEN}/${id}`,
    dataType: "json"
  });
}

// Función para renderizar una tarjeta de superhéroe con los datos proporcionados
function renderSuperheroCard(data) {
  // Calcular el poder total sumando las estadísticas de poder
  const intelligence = parseInt(data.powerstats.intelligence) || 0;
  const strength = parseInt(data.powerstats.strength) || 0;
  const speed = parseInt(data.powerstats.speed) || 0;
  const durability = parseInt(data.powerstats.durability) || 0;
  const power = parseInt(data.powerstats.power) || 0;
  const combat = parseInt(data.powerstats.combat) || 0;
  const PoderTotal = intelligence + strength + speed + durability + power + combat;

  // Construir la estructura HTML de la tarjeta del superhéroe
  let htmlCard = `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
      <div class="card">
        <div class="d-flex justify-content-between fondotarjetatitulo">
          <p class="card-text align-self-start text-white p-2 marvel-indice">ID: ${data.id}</p>
          <p class="card-text align-self-end marvel-indice colorpoder p-2">Poder Total: ${PoderTotal}</p>
        </div>
        <img src="${data.image.url}" class="card-img-top card-img-imagen" alt="Foto de ${data.name}">
        <div class="card-body fondotarjeta text-white">
          <h5 class="card-title marvel-text01">${data.name}</h5>
         
        </div>
      </div>
    </div>
  `;

  // Agregar la tarjeta al contenedor de superhéroes
  superHeroesContainer.innerHTML += htmlCard; 
}

// Función asincrónica para cargar los datos de los superhéroes y renderizar las tarjetas
async function loadSuperheroes() {
  // Crear un array de promesas para obtener los datos de todos los superhéroes
  const promises = [];
  for (let id = startId; id <= endId; id++) {
    promises.push(getSuperheroData(id));
  }

  // Esperar a que todas las promesas se resuelvan
  try {
    const heroesData = await Promise.all(promises);
    // Renderizar una tarjeta para cada superhéroe
    heroesData.forEach(heroData => renderSuperheroCard(heroData));
  } catch (error) {
    console.log("Error al obtener datos de la API:", error);
  }
}

// Iniciar la carga de los superhéroes
loadSuperheroes();
