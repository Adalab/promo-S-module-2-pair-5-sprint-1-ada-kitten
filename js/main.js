"use strict";

const showForm = document.querySelector('.js-new-form');
showForm.classList.remove('collapsed');

const buttonPlus = document.querySelector(".js-plus");



const input_search_desc = document.querySelector(".js_in_search_desc");

const list = document.querySelector('.js-list');

const button = document.querySelector('.js-button');

let html = '';

const intForm = document.querySelector ('.js-new-form');

const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";

const kittenOneName = "Anastacio";

const kittenOneDesc = "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";

const kittenOneRace = "Siamés";

const kittenTwoImage = "https://dev.adalab.es/sphynx-gato.webp";
const kittenTwoName = "Fiona";
const kittenTwoDesc = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenTwoRace = "Sphynx";

const kittenThreeImage = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenThreeName = "Cielo";
const kittenThreeDesc = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
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


if (kittenOneRace === '') {
html = `Uy que despiste no sabemos su raza`;
 console.log (html);
}else {
  html = kittenOneRace;
  console.log (html);
}
if (kittenTwoRace === '') {
  html = `Uy que despiste no sabemos su raza`;
  console.log (html);
  }else {
    html = kittenTwoRace;
    console.log (html);
}
  
if (kittenThreeRace === '') {
    html = `Uy que despiste no sabemos su raza`;
    console.log (html);
    }else {
      html = kittenThreeRace;
      console.log (html);
}
    

/* Mostrarocultar formulario para añadir gatito*/

buttonPlus.addEventListener('click',(event)=> {

  if (intForm.classList.contains('collapsed')) {
    intForm.classList.remove('collapsed');
    }else {
    intForm.classList.add('collapsed');
    }
});





/* Cuando buscamos una palabra y le damos al boton de buscar, aparece solo el gatito que coincida con la busqueda */

input_search_desc.addEventListener('change', (event) => {
  const descrSearchText = input_search_desc.value;
  event.preventDefault();
    if (kittenOneDesc.includes(descrSearchText)){
    kittenOne.classList.add('collapsed-kitten');
    kittenTwo.classList.add('collapsed-kitten');
    kittenThree.classList.add('collapsed-kitten');
    kittenOne.classList.remove('collapsed-kitten');
    };
  if (kittenTwoDesc.includes(descrSearchText)){
    kittenOne.classList.add('collapsed-kitten');
    kittenTwo.classList.add('collapsed-kitten');
    kittenThree.classList.add('collapsed-kitten');
    kittenTwo.classList.remove('collapsed-kitten');
  };
  if (kittenThreeDesc.includes(descrSearchText)){
    kittenOne.classList.add('collapsed-kitten');
    kittenTwo.classList.add('collapsed-kitten');
    kittenThree.classList.add('collapsed-kitten');
    kittenThree.classList.remove('collapsed-kitten');
  };
});


// button.addEventListener('click', (event) => {
//   const descrSearchText = input_search_desc.value;
//   event.preventDefault();
//   if (kittenOneDesc.includes(descrSearchText)){
//   list.innerHTML = kittenOne;
//   };
//   if (kittenTwoDesc.includes(descrSearchText)){
//   list.innerHTML = kittenTwo;
//   };
//   if (kittenThreeDesc.includes(descrSearchText)){
//   list.innerHTML = kittenThree;
//   };
// });






/* if (kittenOneDesc.includes(descrSearchText)){
    
list.innerHTML += kittenOne;
}

if (kittenTwoDesc.includes(descrSearchText)){
  
list.innerHTML += kittenTwo;
}

if (kittenThreeDesc.includes(descrSearchText)){
   
list.innerHTML += kittenThree;
} */
