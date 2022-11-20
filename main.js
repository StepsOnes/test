const logo = document.querySelector('#logo');
const menu = document.querySelector('#menu');

let x1 = null;

logo.addEventListener('click', showMenu);
document.addEventListener('touchstart', handlerTouchStart);
document.addEventListener('touchmove', handlerTouchMove);
document.addEventListener('click', exitMenu);

function exitMenu(event) {
    event.preventDefault();
    let currentItem = event.target;
    console.log(currentItem);
    console.log(currentItem !== menu)

    if (currentItem !== menu) {
        menu.style.transform = `translateX(-100%)`;
    }
}

function showMenu() {
    menu.classList.toggle('visible')
}

function handlerTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
}

function handlerTouchMove(event) {
    if (x1 === null) return false;
    const firstTouch = event.touches[0];
    let x2 = firstTouch.clientX;

    const widthElem = menu.offsetWidth;
    let diff = (x2 - x1);


    if (diff > 0) {
        menu.style.transform = `translateX(0%)`;
    } else {
        menu.style.transform = `translateX(-100%)`;
    }


    x1 = null;

}

