const $menuber = document.querySelector('.lnr-menu');
const $menu = document.querySelector('.menu');
const $backdrop = document.getElementById('backdrop');

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(target) {
    document.querySelector('#' + target).innerHTML = await fetchHtmlAsText(target + '.html');
}

importPage('input');
// importPage('maze');

const menuberClickHandler = (e) => {
    $menu.classList.remove('hide');
    $backdrop.classList.add('visible');
};
const backdropHandler = (e) => {
    if (!$menu.classList.contains('hide')) {
        $menu.classList.add('hide');
        $backdrop.classList.remove('visible');
    }
};
$backdrop.addEventListener('click', backdropHandler);
$menuber.addEventListener('click', menuberClickHandler);

function enterkey() {
    if (window.event.keyCode == 13) {
        var sizeInput = document.getElementById('sizeInput').value
        if (sizeInput % 2 == 0) {
            alert('미로 사이즈는 홀수만 입력해주세요!')
        } else if (sizeInput < 5) {
            alert('미로 사이즈는 최소 5입니다!')
        } else if (sizeInput > 30) {
            alert('미로 사이즈는 최대 29입니다!')
        } else {
            localStorage.setItem('tc', sizeInput);
            importPage('maze');
        }
    }
}