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
let finalResulte = document.querySelector('.finalResulte');
let resulteReport = document.querySelector('.resulteReport');
let resulteBtn = document.querySelector('.resulteBtn');
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
btnr.onclick = function resulte() {
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
    if (usResulte > 152 || themResulte > 152) {
        finalResulte.classList.toggle('resulteShow');
        usInResulte.value = '';
        usResulteHistory.innerHTML = '';
        themInResulte.value = '';
        themResulteHistory.innerHTML = '';
        if (usResulte > themResulte) {
            resulteReport.innerHTML = `
            مبروك لنا <br>
            النتيجة: لنا ${usResulte} vs لهم ${themResulte}
            `;
        } else {
            resulteReport.innerHTML = `
            مبروك لهم ^_^ <br>
            النتيجة: لنا ${usResulte}\t vs\t لهم ${themResulte}
            `;
        }
    }
}
btnres.onclick = function rest() {
    usOutResulte.innerHTML = 0;
    usInResulte.value = '';
    usResulteHistory.innerHTML = '';
    themOutResulte.innerHTML = 0;
    themInResulte.value = '';
    themResulteHistory.innerHTML = '';
    finalResulte.classList.remove('resulteShow');
}
btnbck.onclick = function back() {
    usOutResulte.innerHTML = tempUsOutResulte;
    usInResulte.value = tempUsInResulte;
    usResulteHistory.innerHTML = tempUsResulteHistory;
    themOutResulte.innerHTML = tempThemOutResulte;
    themInResulte.value = tempThemInResulte;
    themResulteHistory.innerHTML = tempThemResulteHistory;
    finalResulte.classList.remove('resulteShow');
}
resulteBtn.onclick = function () {
    usOutResulte.innerHTML = 0;
    usInResulte.value = '';
    usResulteHistory.innerHTML = '';
    themOutResulte.innerHTML = 0;
    themInResulte.value = '';
    themResulteHistory.innerHTML = '';
    finalResulte.classList.remove('resulteShow');
}