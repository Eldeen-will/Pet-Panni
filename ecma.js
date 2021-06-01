let main = document.getElementById('main');

let homeM = document.getElementById('home');
let itemsM = document.getElementById('items');
let usM = document.getElementById('us');
let depoiM = document.getElementById('depoi');
let socialM = document.getElementById('social');
let contactM = document.getElementById('contact');

let homeA = document.getElementById('h');
let itemsA = document.getElementById('i');
let usA = document.getElementById('u');
let depoiA = document.getElementById('d');
let socialA = document.getElementById('s');
let contactA = document.getElementById('c');


main.addEventListener('click', function(e) {
    let escolha = e.target.id;
    let choices1 = [homeM, itemsM, usM, depoiM, socialM, contactM];
    let choices2 = [homeA, itemsA, usA, depoiA, socialA, contactA];

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

        case 'items':
            itemsM.className = 'activeM';
            itemsA.className = 'activeA';
        break;

        case 'us':
            usM.className = 'activeM';
            usA.className = 'activeA';
        break;

        case 'depoi':
            depoiM.className = 'activeM';
            depoiA.className = 'activeA';
        break;

        case 'social':
            socialM.className = 'activeM';
            socialA.className = 'activeA';
        break;

        case 'contact':
            contactM.className = 'activeM';
            contactA.className = 'activeA';
        break;
       };

main();
       
});
