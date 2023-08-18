
// =====================ㅡmenuBer 구성=========================
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

// =================box 구성========================
const $container = document.querySelector('.container');
const $gameBox = $container.querySelector('.gameBox');

const createGameBox = (difficulty) => {
    const diffichlty = difficulty;
    for (let i = 1; i < 131; i++) {
        const gameBoxItem = document.createElement("div");
        gameBoxItem.classList.add("box");
        $gameBox.appendChild(gameBoxItem);
        if (diffichlty === 'easy') {
            switch (i) {
                case 1: gameBoxItem.classList.add('area'); break;
                default: break;
            }
        } else if (diffichlty === 'nomal') {
            switch (i) {
                case 14: gameBoxItem.classList.add('area'); break;
                default: break;
            }
        } else {
            switch (i) {
                case 1: gameBoxItem.classList.add('area'); break;
                case 2: gameBoxItem.classList.add('area'); break;
                case 3: gameBoxItem.classList.add('area'); break;
                case 14: gameBoxItem.classList.add('area'); break;
                case 16: gameBoxItem.classList.add('area'); break;
                case 17: gameBoxItem.classList.add('area'); break;
                case 19: gameBoxItem.classList.add('area'); break;
                case 27: gameBoxItem.classList.add('area'); break;
                case 28: gameBoxItem.classList.add('area'); break;
                case 30: gameBoxItem.classList.add('area'); break;
                case 32: gameBoxItem.classList.add('area'); break;
                case 36: gameBoxItem.classList.add('area'); break;
                case 41: gameBoxItem.classList.add('area'); break;
                case 43: gameBoxItem.classList.add('area'); break;
                case 44: gameBoxItem.classList.add('area'); break;
                case 45: gameBoxItem.classList.add('area'); break;
                case 49: gameBoxItem.classList.add('area'); break;
                case 50: gameBoxItem.classList.add('area'); break;
                case 51: gameBoxItem.classList.add('area'); break;
                case 52: gameBoxItem.classList.add('area'); break;
                case 54: gameBoxItem.classList.add('area'); break;
                case 59: gameBoxItem.classList.add('area'); break;
                case 60: gameBoxItem.classList.add('area'); break;
                case 61: gameBoxItem.classList.add('area'); break;
                case 62: gameBoxItem.classList.add('area'); break;
                case 64: gameBoxItem.classList.add('area'); break;
                case 67: gameBoxItem.classList.add('area'); break;
                case 68: gameBoxItem.classList.add('area'); break;
                case 69: gameBoxItem.classList.add('area'); break;
                case 73: gameBoxItem.classList.add('area'); break;
                case 77: gameBoxItem.classList.add('area'); break;
                case 82: gameBoxItem.classList.add('area'); break;
                case 83: gameBoxItem.classList.add('area'); break;
                case 84: gameBoxItem.classList.add('area'); break;
                case 85: gameBoxItem.classList.add('area'); break;
                case 86: gameBoxItem.classList.add('area'); break;
                case 88: gameBoxItem.classList.add('area'); break;
                case 90: gameBoxItem.classList.add('area'); break;
                case 92: gameBoxItem.classList.add('area'); break;
                case 97: gameBoxItem.classList.add('area'); break;
                case 101: gameBoxItem.classList.add('area'); break;
                case 103: gameBoxItem.classList.add('area'); break;
                case 105: gameBoxItem.classList.add('area'); break;
                case 106: gameBoxItem.classList.add('area'); break;
                case 107: gameBoxItem.classList.add('area'); break;
                case 108: gameBoxItem.classList.add('area'); break;
                case 110: gameBoxItem.classList.add('area'); break;
                case 112: gameBoxItem.classList.add('area'); break;
                case 113: gameBoxItem.classList.add('area'); break;
                case 114: gameBoxItem.classList.add('area'); break;
                case 115: gameBoxItem.classList.add('area'); break;
                case 119: gameBoxItem.classList.add('area'); break;
                case 123: gameBoxItem.classList.add('area'); break;
                case 124: gameBoxItem.classList.add('area'); break;
                case 127: gameBoxItem.classList.add('area'); break;
                default: break;
            }
        }
    }
}

// ==================box에 area적용==================
// const $gameBoxItem = $gameBox.querySelectorAll('.box');
// $gameBoxItem.forEach(item => item.classList.add('area'));

// =================explainBox 설정 =================
const $explainBox = document.querySelector('.explainBox');
const $explainBoxWidthLine = $explainBox.querySelector('.widthLine');
const $explainBoxColumnLine = $explainBox.querySelector('.columnLine');

const explainBoxDiffichltyHard = () => {
    $explainBoxColumnLine.innerHTML = `
<h3>세로문제</h3>

<p>1.인간이 자신에 대하여 가지는 태도</p>
<p>2.현실을 판단하여 자신을 깨달음</p>
<p>3.명사. 아주 짧은 동안</p>
<p>4.부사. 더 어찌할 나위가 없을 만큼 가차 없이</p>
<p>5.범죄 사실을 신고하여 기소를 요구하는 일</p>
<p>6.어떤 일이 뜻하지 아니하게 일어남</p>
<p>7.행정기관에서 일의 관련자에게 의견을 듣는 공개적 모임</p>
<p>8.장치들이 과열되어 망가지는 것을 방지하는 화학물질</p>
<p>9.제 몸에 벌어지는 일을 모를 만큼 정신을 잃은 상태</p>
<p>10.풀이나 나무 따위를 얽거나 엮어 경계를 지어 막는 물건</p>
<p>11.프랑스 작가 빅토르 위고가 쓴 소설</p>
<p>12.자기가 저지른 일은 자기가 해결하여야 함을 이르는 말.</p>
`
    $explainBoxWidthLine.innerHTML = `
<h3>가로문제</h3>

<p>1.다른 사람에게 해를 끼친 사람</p>
<p>2.어떤 일에 대한 마음가짐이 유달리 특별함</p>
<p>3.어떤 일에 관계하여 참여</p>
<p>4.서로 이야기를 나누는 모임</p>
<p>5.부사. 얼마 있다가 또는 얼마쯤 시간이 흐른 뒤에</p>
<p>6.소득과 보유재산을 일정비율로 환산한 금액</p>
<p>7.마땅히 그렇게 되리라고 여겨지는 일</p>
<p>8.내성, 외성을 통틀어 이르는 말</p>
<p>9.쌍방이 다투는 사이에 제3자가 이득을 챙기는 일</p>
<p>10.진통제의 일종</p>
<p>11.평생을 사이좋게 지내고 즐겁게 함께 늙어가다</p>
`
}


// ===============startButton click =================
const $startpage = document.querySelector('.start');
const $startBtn = $startpage.querySelector('.startButton');
const startBtnCilckHandler = e => {
    $startpage.classList.add('invisible');
}
$startBtn.addEventListener('click', startBtnCilckHandler);

// ==============diffichlty click=====================
const $difficultypage = document.querySelector('.difficulty');

const difficultyEasyBtnCilckHandler = e => {
    $difficultypage.classList.add('invisible');
    createGameBox('easy');
}

const difficultyNomalBtnCilckHandler = e => {
    $difficultypage.classList.add('invisible');
    createGameBox('nomal');
}

const difficultyHardBtnCilckHandler = e => {
    $difficultypage.classList.add('invisible');
    createGameBox('hard');
    explainBoxDiffichltyHard();
}


const $difficultyEasyBtn = $difficultypage.querySelector('.easy');
$difficultyEasyBtn.addEventListener('click', difficultyEasyBtnCilckHandler);

const $difficultyNomalBtn = $difficultypage.querySelector('.nomal');
$difficultyNomalBtn.addEventListener('click', difficultyNomalBtnCilckHandler);

const $difficultyHardBtn = $difficultypage.querySelector('.hard');
$difficultyHardBtn.addEventListener('click', difficultyHardBtnCilckHandler);







