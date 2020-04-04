function letCm() {
    let px = 38;
    // let cm = 1;
    let yourPx = +document.querySelector('#px').value;
    let result = yourPx / px;

    document.querySelector('#out').innerHTML = yourPx + "px = " + result + 'см'
};

function letPx() {
    let px = 38;
    // let cm = 1;
    let yourCm = +document.querySelector('#cm').value;
    let result = yourCm * px;

    document.querySelector('#out2').innerHTML = yourCm + "см = " + result + 'px'
};