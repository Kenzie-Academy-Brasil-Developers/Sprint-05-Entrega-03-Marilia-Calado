//Elementos HTML selecionados

const body = document.querySelector('body');


//Divs

const section = document.createElement('section');


//Inserindo divs e respectivas id's no body:

body.appendChild(section);
section.id = 'my-section';


//Criação da bombinha

const inhaler = document.createElement('img');
inhaler.id = 'inhaler';
inhaler.setAttribute('src', './assets/img/inhaler.png')
section.appendChild(inhaler);


//Setando a imagem de fundo

const oldLady = document.createElement('img');
oldLady.id = 'old-lady';
oldLady.setAttribute('src', './assets/img/s-l1600.jpg');
section.appendChild(oldLady);


//Movimentação da bombinha

let inhalerTop = 200;
let inhalerLeft = 200;

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName === 'ArrowDown') {
      inhalerTop += 3;
  } else if (keyName === 'ArrowUp') {
      inhalerTop -= 3;
  } else if (keyName === 'ArrowLeft') {
      inhalerLeft -= 3;
  } else if (keyName === 'ArrowRight') {
      inhalerLeft += 3;
  }
  document.getElementById("inhaler").style.top = inhalerTop + "px";
  document.getElementById("inhaler").style.left = inhalerLeft + "px";
});





