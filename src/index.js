import { log } from "handlebars";
import { logger } from "handlebars/runtime";
import menu from "./menu.json";


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuRef = document.querySelector('.js-menu');
const themeRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');
const svgRef = document.querySelector('.theme-switch__control');

// const colorChange=document.body.style.backgroundColor = generateRandomColor()

// setInterval(bodyRef.style.backgroundColor = generateRandomColor(), 1000);
// function generateRandomColor()
// {
//     const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
//     return randomColor;
// }
// console.log(generateRandomColor());
// bodyRef.style.backgroundColor = generateRandomColor()


const colors =['orange','blue', 'green', 'red', 'yellow','violet'];
Math.random()



function getRandomInt() {
let index = Math.floor(Math.random() * 5)
  let newColor = colors[index]
  bodyRef.style.backgroundColor = newColor
  
}




let currTheme = localStorage.getItem('Theme');
function getTheme() {
  
  console.log(currTheme);
  if (currTheme==='DARK'){
    bodyRef.classList.add(Theme.DARK)
    svgRef.children.theme.checked = true
  }
  else{
    bodyRef.classList.add(Theme.LIGHT)
  }
  return currTheme
}

console.log(getTheme());
console.dir();
svgRef.addEventListener('change',random);



let interval = null
function random(e) {
  
if(e.target.checked) {
   interval =  setInterval(() => {getRandomInt()}, 1000);
}
else {
  
  
  clearInterval(interval)
}


  
}

function onChange(e) {
  localStorage.setItem('Theme', 'LIGHT');
  if(e.target.checked){
    bodyRef.classList.remove(Theme.LIGHT)
    bodyRef.classList.add(Theme.DARK)
    localStorage.removeItem('Theme')
    localStorage.setItem('Theme', 'DARK');

  }
  else{
    bodyRef.classList.remove(Theme.DARK)
    bodyRef.classList.add(Theme.LIGHT)}
    // currTheme==='LIGHT'
    
}


function makeMarkUp(el) {
  let { id, name, description, image, price, ingredients } = el
  // console.log(name)
  return `
	<li class="menu__item">
  <article class="card">
    <img
      src=${image}
      alt=${name}
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">${name}</h2>
      <p class="card__price">
        <i class="material-icons"> monetization_on </i>
        ${price} кредитов
      </p>

      <p class="card__descr">
	  ${description}
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картофель</li>
        <li class="tag-list__item">Чеснок</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердый сыр</li>
        <li class="tag-list__item">Зеленый лук</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon"> shopping_cart </i>
      В корзину
    </button>
  </article>
</li>`
}

menuRef.insertAdjacentHTML('beforeend', menu.map(el => makeMarkUp(el)).join(''));











