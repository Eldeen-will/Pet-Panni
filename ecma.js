let menu = document.getElementById('menu');

let homeM = document.getElementById('home');
let edreM = document.getElementById('edre');
let tapeM = document.getElementById('tape');
let bandaM = document.getElementById('banda');
let mantaM = document.getElementById('manta');
let traveM = document.getElementById('trave');

let homeA = document.getElementById('ho')
let edreA = document.getElementById('ed');
let tapeA = document.getElementById('ta');
let bandaA = document.getElementById('ba');
let mantaA = document.getElementById('ma');
let traveA = document.getElementById('tr')


menu.addEventListener('click', function(e) {
    let escolha = e.target.id;
    let choices1 = [homeM, edreM, tapeM, bandaM, mantaM, traveM];
    let choices2 = [homeA, edreA, tapeA, bandaA, mantaA, traveA];

    for(i=0; i<6; i++){
        let reset1 = choices1[i];
        let reset2 = choices2[i];
        reset2.classList.remove('activeA');
        reset1.classList.remove('activeM');
    };
       switch(escolha){

        case 'home':
            homeM.className = 'activeM';
            homeA.className = 'activeA';
        break;

        case 'edre':
            edreM.className = 'activeM';
            edreA.className = 'activeA';
        break;

        case 'tape':
            tapeM.className = 'activeM';
            tapeA.className = 'activeA';
        break;

        case 'banda':
            bandaM.className = 'activeM';
            bandaA.className = 'activeA';
        break;

        case 'manta':
            mantaM.className = 'activeM';
            mantaA.className = 'activeA';
        break;

        case 'trave':
            traveM.className = 'activeM';
            traveA.className = 'activeA';
        break;
       };
       
});

let check = document.getElementById("check")

check.addEventListener('click', function() {
if (menu.classList.contains("menuMobile")) {
menu.classList.remove("menuMobile");
} else {
menu.classList.add("menuMobile");
};
});