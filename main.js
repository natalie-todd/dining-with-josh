(function initializePage() {
  let button = document.querySelector('button');
  button.addEventListener("click", clickButton);
})()

function clickButton(event) {
  // console.log(button);
  document.location.href = '/app.html';
};

let orderButton = document.getElementById('orderButton');
orderButton.addEventListener('click', friendlyButton);

function friendlyButton(event) {
  document.location.href = '/app.html';
}