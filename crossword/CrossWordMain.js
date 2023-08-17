const container = document.querySelector('.gamebox');


// ========================================================
const $menuber = document.querySelector('.lnr-menu');
const $menu = document.querySelector('.menu')
const $backdrop = document.getElementById('backdrop')
const menuberClickHandler = e => {
    $menu.classList.remove('hide');
    $backdrop.classList.add('visible')
}
const backdropHandler = e => {
    if (!$menu.classList.contains('hide')) {
        $menu.classList.add('hide');
        $backdrop.classList.remove('visible')
    }
}
$backdrop.addEventListener("click", backdropHandler);
$menuber.addEventListener('click', menuberClickHandler)

// ========================================================
for (let i = 0; i < 130; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    container.appendChild(div);

}