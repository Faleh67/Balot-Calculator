let arrow = document.querySelector('.arrow');
let arrowCounter = 0;
let arrowList = ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-down" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>', '<i class="fa fa-arrow-up" aria-hidden="true"></i>'];
arrow.onclick = function () {
    arrow.innerHTML = arrowList[arrowCounter];
    arrowCounter++;
    if (arrowCounter == 4) {
        arrowCounter = 0
    };
}

let btnr = document.querySelector('.btnr');
let btnres = document.querySelector('.btnres');
let btnbck = document.querySelector('.btnbck');
let usInResulte = document.querySelector('.usInResulte');
let usOutResulte = document.querySelector('.usOutResulte');
let usResulteHistory = document.querySelector('.usResulteHistory');
let themInResulte = document.querySelector('.themInResulte');
let themOutResulte = document.querySelector('.themOutResulte');
let themResulteHistory = document.querySelector('.themResulteHistory');
let usResulte = 0;
let tempUsOutResulte = 0;
let tempUsInResulte = 0;
let tempUsResulteHistory = '';
let themResulte = 0;
let tempThemOutResulte = 0;
let tempThemInResulte = 0;
let tempThemResulteHistory = '';
btnr.onclick = function () {
    tempUsOutResulte = usOutResulte.textContent;
    tempUsInResulte = usInResulte.value;
    tempUsResulteHistory = usResulteHistory.value;
    usResulte = Number(usOutResulte.textContent) + Number(usInResulte.value);
    usOutResulte.innerHTML = Number(usOutResulte.textContent) + Number(usInResulte.value);
    usResulteHistory.innerHTML += '\n' + String(tempUsInResulte) + '\n' + '-'.repeat(10) + '\n' + String(usResulte);
    usInResulte.value = '';
    // ------------------------------
    tempThemOutResulte = themOutResulte.textContent;
    tempThemInResulte = themInResulte.value;
    tempThemResulteHistory = themResulteHistory.value;
    themResulte = Number(themOutResulte.textContent) + Number(themInResulte.value);
    themOutResulte.innerHTML = Number(themOutResulte.textContent) + Number(themInResulte.value);
    themResulteHistory.innerHTML += '\n' + String(tempThemInResulte) + '\n' + '-'.repeat(10) + '\n' + String(themResulte);
    themInResulte.value = '';
}
btnres.onclick = function () {
    usOutResulte.innerHTML = 0;
    usInResulte.value = '';
    usResulteHistory.innerHTML = '';
    themOutResulte.innerHTML = 0;
    themInResulte.value = '';
    themResulteHistory.innerHTML = '';
}
btnbck.onclick = function () {
    usOutResulte.innerHTML = tempUsOutResulte;
    usInResulte.value = tempUsInResulte;
    usResulteHistory.innerHTML = tempUsResulteHistory;
    themOutResulte.innerHTML = tempThemOutResulte;
    themInResulte.value = tempThemInResulte;
    themResulteHistory.innerHTML = tempThemResulteHistory;
}
