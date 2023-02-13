"use strict";

const showForm = document.querySelector(".js-new-form");
showForm.classList.remove("collapsed");

const buttonPlus = document.querySelector(".js-plus");


/* Variables de filtrar o buscar gatitos por descripción */

const buttonSearch = document.querySelector(".js-button-search"); 
const input_search_desc = document.querySelector(".js_in_search_desc");
const input_search_race = document.querySelector(".js_in_search_race");
const list = document.querySelector(".js-list");


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

//OBJETOS DE GATITOS

const kittenData_1 = {
  image: 'https://dev.adalab.es/gato-siames.webp',
  name: 'Anastacio',
  desc: 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.',
  race: 'Siamés',
};

const kittenData_2 = {
  image: "https://dev.adalab.es/sphynx-gato.webp",
  name: "Fiona",
  desc:  "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.",
  race: "Sphynx",
};

const kittenData_3 = {
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  name: "Cielo",
  desc: "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.",
  race: "Maine Coon",
};


// Lista con la información de todos los gatitos
const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];



//Lista 
function renderKittenList(kittenDataList) {
  //Completa el código:
  //Vaciamos el innerHTML del <ul> de la página.
  //Iteramos sobre el listado de gatitos
  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)
}




let kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src= ${kittenData_1.image}
    alt="siames-cat"
  />
  <h3 class="card_title">${kittenData_1.name.toUpperCase()}</h3>
  <h4 class="card_race">${kittenData_1.race}</h4>
  <p class="card_description">
    ${kittenData_1.desc}
  </p>
</article>
</li>`;

let kittenTwo = `<li class="card">
<img
  class="card_img"
  src= ${kittenData_2.image}
  alt="sphynx-cat"
/>
<h3 class="card_title">${kittenData_2.name.toUpperCase()}</h3>
<h4 class="card_race">${kittenData_2.race}</h4>
<p class="card_description">
  ${kittenData_2.desc}
</p>
</li>`;

let kittenThree = `<li class="card">
<img
  class="card_img"
  src=${kittenData_3.image}
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenData_3.name.toUpperCase()}</h3>
<h4 class="card_race">${kittenData_3.race}</h4>
<p class="card_description">
  ${kittenData_3.desc}
</p>
</li>`;

list.innerHTML = kittenOne + kittenTwo + kittenThree;

if (kittenData_1.race === "") {
  html = `Uy que despiste no sabemos su raza`;
  console.log(html);
} else {
  html = kittenData_1.race;
  console.log(html);
}
if (kittenData_2.race === "") {
  html = `Uy que despiste no sabemos su raza`;
  console.log(html);
} else {
  html = kittenData_2.race;
  console.log(html);
}

if (kittenData_3.race === "") {
  html = `Uy que despiste no sabemos su raza`;
  console.log(html);
} else {
  html = kittenData_3.race;
  console.log(html);
}

/* Crear una nueva tarjeta de gatito con todos los datos y el código HTML */

function renderKitten (kittenData) {
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


const handleButtonSearch =(event)=>{
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  const raceSearchText = input_search_race.value;
  
  if (kittenData_1.desc.includes(descrSearchText)) {
    list.innerHTML = kittenOne;
  }
  if (kittenData_2.desc.includes(descrSearchText)) {
    list.innerHTML = kittenTwo;
  }
  if (kittenData_3.desc.includes(descrSearchText)) {
    list.innerHTML = kittenThree;
  } 
  if (descrSearchText === "" || raceSearchText === "") {
    list.innerHTML = "Uy, parece que has olvidado algo";
  }
}

buttonSearch.addEventListener("click", handleButtonSearch);

