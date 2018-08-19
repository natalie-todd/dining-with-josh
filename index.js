const foodArray = [];
const pizzaArray = [];
const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

(function initializePage() {
    fetch(url)
        .then(response => response.json())
        .then(data => makeFoodArray(data));

    loadJSON("./pizzatype.json").then(pizza => {
        let result = pizza.data;
        console.log(pizza);
        for (i = 0; i < result.length; i++) {
            pizzaArray.push(result[i].pizzaType)
        }
    })
})()

let makeFoodArray = (response) => {
    for (i = 0; i < 6; i++) {
        foodArray.push(response.meals[i].strMeal)
    }
    appendToMenu(response);
}

const appendToMenu = (response) => {
    for (i = 0; i < foodArray.length; i++) {
        let menuParagraph = document.createElement('p');
        let menuButton = document.createElement('button');
        menuParagraph.textContent = response.meals[i].strMeal;
        menuButton.textContent = 'Add to Bag';
        let menuContainer = document.getElementById('menuContainer');
        menuContainer.appendChild(menuParagraph);
        menuContainer.appendChild(menuButton);
        menuButton.addEventListener('click', addToCart);
    }
}

async function loadJSON(pizzaUrl) {
    const res = await fetch(pizzaUrl);
    return await res.json();
}

function addToCart(event) {
    let random = pizzaArray[Math.floor(Math.random() * pizzaArray.length)];
    let cartContainer = document.getElementById('cartContainer');
    let pizzaParagraph = document.createElement('p');
    pizzaParagraph.textContent = random + ' Pizza';
    cartContainer.appendChild(pizzaParagraph);
}

let homeButton = document.getElementById('home');
homeButton.addEventListener("click", clickHome);

function clickHome(event) {
    document.location.href = '/index.html';
};

function totalButton() {
    let pizzaContainer = document.getElementById('pizzaContainer');
    total = document.createElement('button');
    total.textContent = 'Checkout Now';
    total.id = ('totalId');
    pizzaContainer.appendChild(total);
    total.addEventListener('click', alertWindow);
}
totalButton();

function alertWindow(event) {
    window.confirm(`Get Dan's credit card!`)
}