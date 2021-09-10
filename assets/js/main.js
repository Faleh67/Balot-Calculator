let menu = document.querySelector('.menu');
let container = document.querySelector('.container');
let infoLayout = document.querySelector('.infoLayout');
let main = document.querySelector('.main');
menu.onclick = function () {
    menu.classList.toggle('activate');
    container.classList.toggle('activate');
    infoLayout.classList.toggle('activate');
    main.classList.toggle('activate');
}
let mainMenu = document.querySelector('.mainMenu');
let balotCalculator = document.querySelector('.balotCalculator');
let laws = document.querySelector('.laws');
mainMenu.onclick = function () {
    mainMenu.classList.toggle('calcShow');
    main.classList.toggle('calcShow');
    balotCalculator.classList.toggle('calcShow');
    laws.classList.toggle('calcShow');
}
