
### Proyecto Api_SuperHero



Este proyecto se encuentra alojado en [SuperHero](https://novaversocl.github.io/Api_SuperHero/).

## Tecnologías y Herramientas Utilizadas

### Seguridad
- **HSTS** (HTTP Strict Transport Security): Implementado para asegurar que las conexiones al sitio sean siempre a través de HTTPS.

### Tipografía
- **Font Awesome**: Para iconos vectoriales y logotipos en el sitio.
- **Google Font API**: Para cargar fuentes personalizadas desde Google Fonts.

### Herramienta de Cache
- **Varnish**: Mejora el rendimiento del sitio mediante almacenamiento en caché HTTP.

### Gráficos JavaScript
- **CanvasJS**: Para crear gráficos interactivos y visualizaciones de datos.

### CDN (Content Delivery Network)
- **Fastly**: Distribuye el contenido del sitio de manera rápida y segura.
- **Google Hosted Libraries**: Aloja y sirve bibliotecas JavaScript de manera eficiente.
- **jsDelivr**: Red de entrega de contenido para bibliotecas JavaScript y otros activos estáticos.

### Librerías JavaScript
- **jQuery**: Facilita la manipulación del DOM, el manejo de eventos y las interacciones AJAX.

### Hosting
- **GitHub Pages**: Para alojar y servir el sitio web.

### Frameworks Web y UI
- **Bootstrap**: Para el desarrollo de interfaces de usuario responsivas y móviles.

### Protocolos
- **HTTP/2**: Mejora el rendimiento y la seguridad de las conexiones HTTP.

---

## Información del Código JavaScript

### API SuperHero

Para la funcionalidad de búsqueda y visualización de información de superhéroes, se ha empleado la API de SuperHero con el siguiente código:

#### Configuración de la API
```javascript
const BASE_URL = "https://superheroapi.com/api.php/";
const variable_apiToken = "xx";
```

#### Elementos del DOM
```javascript
const variable_inputsuperhero = $("#input-superhero");
const variable_searchsuperhero = $("#search-superhero");
```

#### Función para Obtener un Superhéroe
```javascript
const getOneSuperhero = (variable_apiToken, variable_inputsuperhero) => {
  return $.ajax({
    type: "GET",
    url: `${BASE_URL}${variable_apiToken}/${variable_inputsuperhero}`,
    dataType: "json",
    success: function (data) {
      console.log(data);

      const intelligence = parseInt(data.powerstats.intelligence) || 0;
      const strength = parseInt(data.powerstats.strength) || 0;
      const speed = parseInt(data.powerstats.speed) || 0;
      const durability = parseInt(data.powerstats.durability) || 0;
      const power = parseInt(data.powerstats.power) || 0;
      const combat = parseInt(data.powerstats.combat) || 0;

      const PoderTotal = intelligence + strength + speed + durability + power + combat;

      console.log(PoderTotal);

      let htmlCard = `
        <div class="card" style="width: 18rem;">
          <div class="d-flex justify-content-between fondotarjetatitulo">
            <p class="card-text align-self-start text-white p-2 marvel-indice">ID: ${data.id}</p>
            <p class="card-text align-self-end marvel-indice colorpoder p-2">Poder Total: ${PoderTotal}</p>
          </div>
          <img src="${data.image.url}" class="card-img-top" alt="Foto de ${data.name}">
          <div class="card-body fondotarjeta text-white">
            <h5 class="card-title marvel-text01">${data.name}</h5>
            <p class="card-text">${data.connections["group-affiliation"]}</p>
          </div>
        </div>
      `;

      $(".oneSuperHero-section").html(htmlCard);
      createSuperHeroChart(data);
    },
    error: function (error) {
      console.log("Error al encontrar el superhéroe buscado :c", error);
    },
  });
};
```

#### Evento de Búsqueda
```javascript
variable_searchsuperhero.on("click", function (event) {
  event.preventDefault();

  console.log(variable_inputsuperhero.val());
  getOneSuperhero(variable_apiToken, variable_inputsuperhero.val());
});
```

#### Validación del Input
```javascript
function validarNumeros(input) {
  var regex = /^\d+$/;
  return regex.test(input);
}

$("#search-superhero").on("click", function () {
  var inputSuperHero = $("#input-superhero").val();
  if (validarNumeros(inputSuperHero)) {
    console.log("Botón presionado");
    $(".parpadear").parpadear();
  } else {
    console.log("El valor ingresado no es un número.");
    alert("El valor ingresado no es un número.");
  }
});
```

#### Imagen

![imagen](https://github.com/Novaversocl/Api_SuperHero/assets/95386670/e04aa2ce-1a50-4c46-82d3-03aea09c2f91)


Este código muestra cómo se puede integrar una API externa para buscar información de superhéroes, validar la entrada del usuario y presentar los datos obtenidos de manera dinámica en el sitio web.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Para más información.
```


