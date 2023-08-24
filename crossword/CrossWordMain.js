
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
    }
    $backdrop.classList.remove('visible')
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
        gameBoxItem.setAttribute('data-box-id', i);
        $gameBox.appendChild(gameBoxItem);
        if (diffichlty === 'easy') {
            switch (i) {
                case 29: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 1); break;
                case 30: gameBoxItem.classList.add('area'); break;
                case 31: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 1); break;
                case 35: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 44: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 3); break;
                case 45: gameBoxItem.classList.add('area'); break;
                case 46: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 3); break;
                case 48: gameBoxItem.classList.add('area'); break;
                case 55: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 2); break;
                case 56: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 2); break;
                case 57: gameBoxItem.classList.add('area'); break;
                case 59: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 60: gameBoxItem.classList.add('area'); break;
                case 61: gameBoxItem.classList.add('area'); break;
                case 69: gameBoxItem.classList.add('area'); break;
                case 72: gameBoxItem.classList.add('area'); break;
                case 75: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 5); break;
                case 82: gameBoxItem.classList.add('area'); break;
                case 88: gameBoxItem.classList.add('area'); break;
                case 98: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 5); break;
                case 99: gameBoxItem.classList.add('area'); break;
                case 100: gameBoxItem.classList.add('area'); break;
                case 101: gameBoxItem.classList.add('area'); break;
                case 114: gameBoxItem.classList.add('area'); break;
                default: break;
            }
        } else if (diffichlty === 'nomal') {
            switch (i) {
                case 29: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 1); break;
                case 30: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 1); break;
                case 31: gameBoxItem.classList.add('area'); break;
                case 32: gameBoxItem.classList.add('area'); break;
                case 35: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 3); break;
                case 43: gameBoxItem.classList.add('area'); break;
                case 48: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 5); break;
                case 49: gameBoxItem.classList.add('area'); break;
                case 50: gameBoxItem.classList.add('area'); break;
                case 51: gameBoxItem.classList.add('area'); break;
                case 56: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 2); break;
                case 57: gameBoxItem.classList.add('area'); break;
                case 58: gameBoxItem.classList.add('area'); break;
                case 59: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 2); break;
                case 61: gameBoxItem.classList.add('area'); break;
                case 69: gameBoxItem.classList.add('area'); break;
                case 72: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 73: gameBoxItem.classList.add('area'); break;
                case 74: gameBoxItem.classList.add('area'); break;
                case 75: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 85: gameBoxItem.classList.add('area'); break;
                case 88: gameBoxItem.classList.add('area'); break;
                case 95: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 3); break;
                case 96: gameBoxItem.classList.add('area'); break;
                case 97: gameBoxItem.classList.add('area'); break;
                case 98: gameBoxItem.classList.add('area'); break;
                case 101: gameBoxItem.classList.add('area'); break;
                case 112: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 6); break;
                case 113: gameBoxItem.classList.add('area'); break;
                case 114: gameBoxItem.classList.add('area'); break;
                case 115: gameBoxItem.classList.add('area'); break;
                default: break;
            }
        } else {
            switch (i) {
                case 1: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 1); break;
                case 2: gameBoxItem.classList.add('area'); break;
                case 3: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 2); break;
                case 14: gameBoxItem.classList.add('area'); break;
                case 16: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 2); break;
                case 17: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 3); break;
                case 19: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 7); break;
                case 27: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 3); break;
                case 28: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 30: gameBoxItem.classList.add('area'); break;
                case 32: gameBoxItem.classList.add('area'); break;
                case 36: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 12); break;
                case 41: gameBoxItem.classList.add('area'); break;
                case 43: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 44: gameBoxItem.classList.add('area'); break;
                case 45: gameBoxItem.classList.add('area'); break;
                case 49: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 10); break;
                case 50: gameBoxItem.classList.add('area'); break;
                case 51: gameBoxItem.classList.add('area'); break;
                case 52: gameBoxItem.classList.add('area'); break;
                case 54: gameBoxItem.classList.add('area'); break;
                case 59: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 9); break;
                case 60: gameBoxItem.classList.add('area'); break;
                case 61: gameBoxItem.classList.add('area'); break;
                case 62: gameBoxItem.classList.add('area'); break;
                case 64: gameBoxItem.classList.add('area'); break;
                case 67: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 5); break;
                case 68: gameBoxItem.classList.add('area'); break;
                case 69: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 5); break;
                case 73: gameBoxItem.classList.add('area'); break;
                case 77: gameBoxItem.classList.add('area'); break;
                case 82: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 6); break;
                case 83: gameBoxItem.classList.add('area'); break;
                case 84: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 11); break;
                case 85: gameBoxItem.classList.add('area'); break;
                case 86: gameBoxItem.classList.add('area'); break;
                case 88: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 14); break;
                case 90: gameBoxItem.classList.add('area'); break;
                case 92: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 9); break;
                case 97: gameBoxItem.classList.add('area'); break;
                case 101: gameBoxItem.classList.add('area'); break;
                case 103: gameBoxItem.classList.add('area'); break;
                case 105: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 7); break;
                case 106: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 10); break;
                case 107: gameBoxItem.classList.add('area'); break;
                case 108: gameBoxItem.classList.add('area'); break;
                case 110: gameBoxItem.classList.add('area'); break;
                case 112: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 11); break;
                case 113: gameBoxItem.classList.add('area'); break;
                case 114: gameBoxItem.classList.add('area'); break;
                case 115: gameBoxItem.classList.add('area'); break;
                case 119: gameBoxItem.classList.add('area'); break;
                case 123: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 8); break;
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
<p>9.가루로 된 설탕</p>
<p>10.볼과 입술을 붉은 색조로 치장하는 화장품</p>
<p>11.제 몸에 벌어지는 일을 모를 만큼 정신을 잃은 상태</p>
<p>12.풀이나 나무 따위를 얽거나 엮어 경계를 지어 막는 물건</p>
<p>13.프랑스 작가 빅토르 위고가 쓴 소설</p>
<p>14.자기가 저지른 일은 자기가 해결하여야 함을 이르는 말.</p>
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

const explainBoxDiffichltyNomal = () => {
    $explainBoxColumnLine.innerHTML = `
<h3>세로문제</h3>

<p>1.집에만 있고 바깥출입을 아니함.</p>
<p>2.한밤중에 몰래 도망치는 행위</p>
<p>3.여러 사람이 조금씩 힘을 합하면 한 사람을 돕기 쉬움</p>
<p>4.뜻이 매우 깊다</p>
`
    $explainBoxWidthLine.innerHTML = `
<h3>가로문제</h3>

<p>1.어떤 일의 핵심만 간단히 말한다.</p>
<p>2.밤낮을 가리지 않는다</p>
<p>3.사방으로 이리저리 몹시 바쁘게 돌아다님</p>
<p>4.얼마쯤 믿으면서도 한편으로는 의심함</p>
<p>5.그때의 사정이나 요구에 아주 알맞음</p>
<p>6.웃음 속에 칼이 있다</p>
`
}

const explainBoxDiffichltyEasy = () => {
    $explainBoxColumnLine.innerHTML = `
<h3>세로문제</h3>

<p>1.기OO : 기차가 다니는 길</p>
<p>2.솔OO : 소나무 열매의 송이</p>
<p>3.O구O : 지구의 모습을 본따 만든 모형</p>
<p>4.O렁O : 빈모강의 환형동물을 통틀어 이르는 말</p>
<p>5.O랑나O : 호랑나빗과의 곤충들을 통틀어 이르는 말</p>
`
    $explainBoxWidthLine.innerHTML = `
<h3>가로문제</h3>

<p>1.기OO : 한국에서도 볼 수 있는 철새의 종류 </p>
<p>2.O솔O : 폭이 좁은 호젓한 길</p>
<p>3.O고O : 자동차 따위의 차량을 넣어 두거나 세워 놓는 곳</p>
<p>4.OO이 : 한국에서 볼 수 있는 뱀 종류</p>
<p>5.O구아O : 파충류, 과거에는 애완동물로 인기가 있었음</p>
`
}


// ====================정답 버튼 함수==================


function hardButtonClickHandler() {
    const boxIds = [
        '1', '2', '3',
        '14', '16', '17', '19',
        '27', '28', '30', '32', '36',
        '41', '43', '44', '45', '49', '50', '51', '52',
        '54', '59', '60', '61', '62', '64',
        '67', '68', '69', '73', '77',
        '82', '83', '84', '85', '86', '88', '90',
        '92', '97', '101', '103',
        '105', '106', '107', '108', '110', '112', '113', '114', '115',
        '119', '123', '124', '127'
    ];
    const targetArray = [
        '가', '해', '자',
        '치', '각', '별', '공',
        '관', '여', '안', '청', '울',
        '지', '간', '담', '회', '타', '이', '레', '놀',
        '없', '어', '부', '지', '리', '미',
        '이', '윽', '고', '동', '제',
        '소', '득', '인', '정', '액', '결', '라',
        '분', '사', '자', '블',
        '당', '연', '지', '사', '불', '백', '년', '해', '로',
        '지', '성', '곽', '지'
    ];
    const wrongAnswer = compareTextAndArray(boxIds, targetArray);
    endGame(wrongAnswer)
}

function nomalButtonClickHandler() {
    const boxIds = [
        '29', '30', '31', '32', '35',
        '43', '48', '49', '50', '51',
        '56', '57', '58', '59', '61',
        '69', '72', '73', '74', '75',
        '85', '88',
        '95', '96', '97', '98', '101',
        '112', '113', '114', '115'
    ];
    const targetArray = [
        '거', '두', '절', '미', '십',
        '문', '시', '의', '적', '절',
        '불', '철', '주', '야', '일',
        '출', '반', '신', '반', '의',
        '도', '미',
        '동', '분', '서', '주', '심',
        '소', '리', '장', '도'
    ];
    const wrongAnswers = compareTextAndArray(boxIds, targetArray);
    endGame(wrongAnswers);
}

function easyButtonClickHandler() {
    const boxIds = [
        '29', '30', '31', '35',
        '44', '45', '46', '48',
        '55', '56', '57', '59', '60', '61',
        '69', '72', '75',
        '82', '88',
        '98', '99', '100', '101',
        '114'
    ];
    const targetArray = [
        '기', '러', '기', '지',
        '차', '고', '지', '렁',
        '오', '솔', '길', '구', '렁', '이',
        '방', '본', '호',
        '울', '랑',
        '이', '구', '아', '나',
        '비'
    ];
    const wrongAnswers = compareTextAndArray(boxIds, targetArray);
    endGame(wrongAnswers);
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
    explainBoxDiffichltyEasy();
    const $buttonClick = $explainBox.querySelector('button');
    $buttonClick.addEventListener('click', easyButtonClickHandler)
}

const difficultyNomalBtnCilckHandler = e => {
    $difficultypage.classList.add('invisible');
    createGameBox('nomal');
    explainBoxDiffichltyNomal();
    const $buttonClick = $explainBox.querySelector('button');
    $buttonClick.addEventListener('click', nomalButtonClickHandler)
}

const difficultyHardBtnCilckHandler = e => {
    $difficultypage.classList.add('invisible');
    createGameBox('hard');
    explainBoxDiffichltyHard();
    const $buttonClick = $explainBox.querySelector('button');
    $buttonClick.addEventListener('click', hardButtonClickHandler)
}

// =======================focus ========================
$gameBox.addEventListener('click', (e) => {
    const clickedBox = e.target;
    const existingInput = clickedBox.querySelector('input');

    if (clickedBox.classList.contains('area') && !existingInput) {
        const input = document.createElement('input');
        input.type = 'text';

        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                const newText = input.value;
                clickedBox.textContent = newText;
            }
        });

        clickedBox.appendChild(input);
        input.focus(); // Focus on the input element
    }
});


// ====================================================

// const $gameBoxItemText = $gameBox


function addAltBox(box, question = '0') {

    const description = (question);
    const altBox = document.createElement('div');
    altBox.textContent = description;
    box.appendChild(altBox);
}



// ================== 정답 체크 함수 ===================

function compareTextAndArray(classNames, targetArray) {
    // 오답 문자열 추가할 배열 생성
    let wrongAnswer = [];

    for (let i = 0; i < classNames.length; i++) {
        const boxElement = document.querySelector(`[data-box-id="${classNames[i]}"]`);

        if (!boxElement) {
            console.log(`박스 엘리먼트를 찾을 수 없음`);
            continue;
        }
        const boxText = boxElement.textContent;

        if (boxText !== targetArray[i]) {
            wrongAnswer.push(boxText);
        }
    }

console.log(wrongAnswer);    
    return wrongAnswer;
}


// ======================게임 종료 창=====================



function endGame(wrongAnswer) {
    // alert('틀린 글자 : ' + wrongAnswer.join(', '));
    $backdrop.classList.add('visible')
    const $endGameBox = document.createElement('div')
    $endGameBox.classList.add('resultBox')
    $container.appendChild($endGameBox)
    const $endGameBoxText = document.createElement('h4')
    $endGameBoxText.textContent='게임 결과'
    $endGameBox.appendChild($endGameBoxText)
    const $endGameResultBoxText = document.createElement('h5')
    $endGameResultBoxText.textContent='틀린 문자'
    $endGameBox.appendChild($endGameResultBoxText)
    const $endGameResultBox = document.createElement('div')
    $endGameResultBox.classList.add('resultListBox')
    $endGameBox.appendChild($endGameResultBox)
    const $resultListBox = $endGameBox.querySelector('.resultListBox')
    $resultListBox.textContent=wrongAnswer

    $endGameBox.addEventListener('click',e =>{
        $endGameBox.classList.add('hide')
        $backdrop.classList.remove('visible')
    })
    $backdrop.addEventListener('click',e=>{
        $endGameBox.classList.add('hide')
        $backdrop.classList.remove('visible')
    })
}






const $difficultyEasyBtn = $difficultypage.querySelector('.easy');
$difficultyEasyBtn.addEventListener('click', difficultyEasyBtnCilckHandler);

const $difficultyNomalBtn = $difficultypage.querySelector('.nomal');
$difficultyNomalBtn.addEventListener('click', difficultyNomalBtnCilckHandler);

const $difficultyHardBtn = $difficultypage.querySelector('.hard');
$difficultyHardBtn.addEventListener('click', difficultyHardBtnCilckHandler);







