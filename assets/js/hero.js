const BASE_URL = "https://superheroapi.com/api.php/";
const variable_apiToken = "e3fe2be95bda5c16995ec9a94d38bc3a";
// const superheroId = "1";

const variable_inputsuperhero = $("#input-superhero");
const variable_searchsuperhero = $("#search-superhero");







const getOneSuperhero = (variable_apiToken, variable_inputsuperhero) => {
  return $.ajax({
    type: "GET",
    url: `${BASE_URL}${variable_apiToken}/${variable_inputsuperhero}`,
    dataType: "json",
    success: function (data) {
      console.log(data);

      // si parseInt() devuelve NaN para alguna propiedad, la expresión || 0 asignará 0

      const intelligence = parseInt(data.powerstats.intelligence) || 0;
      const strength = parseInt(data.powerstats.strength) || 0;
      const speed = parseInt(data.powerstats.speed) || 0;
      const durability = parseInt(data.powerstats.durability) || 0;
      const power = parseInt(data.powerstats.power) || 0;
      const combat = parseInt(data.powerstats.combat) || 0;

      const PoderTotal =
        intelligence + strength + speed + durability + power + combat;

      console.log(PoderTotal);

      let htmlCard = `
                <div class="card" style="width: 18rem;">

                <div class="d-flex justify-content-between fondotarjetatitulo ">
                <p class="card-text align-self-start text-white p-2 marvel-indice">ID: ${data.id}</p>
                <p class="card-text align-self-end marvel-indice colorpoder p-2">Poder Total: ${PoderTotal}</p>
            </div>
            

                <img src="${data.image.url}" class="card-img-top" alt="Foto de ${data.name}">
            
                    <div class="card-body fondotarjeta text-white">
                   
                        <h5 class="card-title marvel-text01">${data.name}</h5>
                        <p class="card-text">${data.connections["group-affiliation"]}</p>
                        
                    </div>
                    <ul class="list-group list-group-flush">

                    </ul>
                </div>
            `;

      $(".oneSuperHero-section").html(htmlCard);
      createSuperHeroChart(data);
    },
    error: function (error) {
      console.log("Error al encontrar el digimon buscado :c", error);
    },
  });
};





variable_searchsuperhero.on("click", function (event) {
  event.preventDefault();

  console.log(variable_inputsuperhero.val());
  getOneSuperhero(variable_apiToken, variable_inputsuperhero.val());
});


function validarNumeros(input) {
    // Expresión regular para verificar si la cadena contiene solo números
    var regex = /^\d+$/;
    return regex.test(input);
}


$("#search-superhero").on("click", function () {
    var inputSuperHero = $("#input-superhero").val();
    if (validarNumeros(inputSuperHero)) {
        console.log("Boton");
        $(".parpadear").parpadear();
    } else {
        console.log("El valor ingresado no es un número.");
        alert("El valor ingresado no es un número.");
     
    }
});


    // Obtener referencia al botón
    const openTestButton = document.getElementById('search-superhero-all');

    // Agregar un evento de clic al botón
    openTestButton.addEventListener('click', function() {

      console.log("all.html")
      // Redireccionar a test.html
      window.location.href = 'all.html';
    });