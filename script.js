let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', b3: ''
}
let player ='';
let warning = '';
let playing = false;

document.querySelector('.reset')


function reset() {
    warning = '';

    let random = Math.floor(Math.random *2);
    player = (random === 0) ? 'x' : 'o';

    for(let i in square) {
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();
}

function renderSquare() {
    
}