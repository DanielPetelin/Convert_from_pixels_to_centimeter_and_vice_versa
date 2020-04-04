document.querySelector('.push').onclick = () => {
    let px = 38;
    // let cm = 1;
    let yourPx = document.querySelector('#px').value;
    let result = yourPx / px;

    document.querySelector('#out').innerHTML = yourPx + "px = " + result + 'см'
};