"use strict";

const showForm = document.querySelector(".js-new-form");
showForm.classList.remove("collapsed");

const buttonPlus = document.querySelector(".js-plus");

const input_search_desc = document.querySelector(".js_in_search_desc");

const list = document.querySelector(".js-list");

const button = document.querySelector(".js-button");

/* Variables botón añadir nuevo gato */
const buttonAdd = document.querySelector(".js-btn-add");

const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const inputRace = document.querySelector(".js-input-race");
const labelMessageError = document.querySelector(".js-label-error");

/* Botón de cancelar menu añadir gatitos */
const buttonCancel = document.querySelector(".js-btn-cancel");

let html = "";

const intForm = document.querySelector(".js-new-form");

const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";

const kittenOneName = "Anastacio";

const kittenOneDesc =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenOneRace = "Siamés";

const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoDesc =
  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenTwoRace = "Sphynx";

const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeDesc =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenThreeRace = "Maine Coon";

let kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenOneImage}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenOneName.toUpperCase()}</h3>
  <h4 class="card_race">${kittenOneRace}</h4>
  <p class="card_description">
    ${kittenOneDesc}
  </p>
</article>
</li>`;

let kittenTwo = `<li class="card">
<img
  class="card_img"
  src= ${kittenTwoImage}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
<h4 class="card_race">${kittenTwoRace}</h4>
<p class="card_description">
  ${kittenTwoDesc}
</p>
</li>`;

let kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenThreeImage}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
<h4 class="card_race">${kittenThreeRace}</h4>
<p class="card_description">
  ${kittenThreeDesc}
</p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

if (kittenOneRace === "") {
  html = `Uy que despiste no sabemos su raza`;
  console.log(html);
} else {
  html = kittenOneRace;
  console.log(html);
}
if (kittenTwoRace === "") {
  html = `Uy que despiste no sabemos su raza`;
  console.log(html);
} else {
  html = kittenTwoRace;
  console.log(html);
}

if (kittenThreeRace === "") {
  html = `Uy que despiste no sabemos su raza`;
  console.log(html);
} else {
  html = kittenThreeRace;
  console.log(html);
}

/* Crear una nueva tarjeta de gatito con todos los datos y el código HTML */

function renderKitten (url, desc, name, race) {
  desc = inputDesc.value;
  url = inputPhoto.value;
  name = inputName.value;
  race = inputRace.value;

  list.innerHTML += `<li class="card">
<img
  class="card_img"
  src=${url}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${name.toUpperCase()}</h3>
<h4 class="card_race">${race}</h4>
<p class="card_description">
  ${desc}
</p>
</li>`;
}


/* Boton para añadir un nuevo gato y verificar que están todos los campos rellenos */

function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "Uy, parece que has olvidado algo";
  } else {
    renderKitten();
  }
}
buttonAdd.addEventListener("click", addNewKitten);

/* Ocultar menu añadir gatito al pulsar el botón CANCELAR */
function handleButtonCancel(event) {
  event.preventDefault();
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
  intForm.classList.add("collapsed");
}

buttonCancel.addEventListener("click", handleButtonCancel);

/* Mostrarocultar formulario para añadir gatito */

function showNewCatForm() {
  intForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  intForm.classList.add("collapsed");
}

function handleButtonPlus(event) {
  event.preventDefault();
  if (intForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

buttonPlus.addEventListener("click", handleButtonPlus);

/* Cuando buscamos una palabra y le damos al boton de buscar, aparece solo el gatito que coincida con la busqueda */

input_search_desc.addEventListener("change", (event) => {
  const descrSearchText = input_search_desc.value;
  event.preventDefault();
  if (kittenOneDesc.includes(descrSearchText)) {
    kittenOne.classList.add("collapsed-kitten");
    kittenTwo.classList.add("collapsed-kitten");
    kittenThree.classList.add("collapsed-kitten");
    kittenOne.classList.remove("collapsed-kitten");
  }
  if (kittenTwoDesc.includes(descrSearchText)) {
    kittenOne.classList.add("collapsed-kitten");
    kittenTwo.classList.add("collapsed-kitten");
    kittenThree.classList.add("collapsed-kitten");
    kittenTwo.classList.remove("collapsed-kitten");
  }
  if (kittenThreeDesc.includes(descrSearchText)) {
    kittenOne.classList.add("collapsed-kitten");
    kittenTwo.classList.add("collapsed-kitten");
    kittenThree.classList.add("collapsed-kitten");
    kittenThree.classList.remove("collapsed-kitten");
  }
});
