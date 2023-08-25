
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
                case 19: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 6); break;
                case 27: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 3); break;
                case 28: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 30: gameBoxItem.classList.add('area'); break;
                case 32: gameBoxItem.classList.add('area'); break;
                case 36: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 11); break;
                case 41: gameBoxItem.classList.add('area'); break;
                case 43: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 4); break;
                case 44: gameBoxItem.classList.add('area'); break;
                case 45: gameBoxItem.classList.add('area'); break;
                case 49: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 10); break;
                case 50: gameBoxItem.classList.add('area'); break;
                case 51: gameBoxItem.classList.add('area');addAltBox(gameBoxItem, 12); break;
                case 52: gameBoxItem.classList.add('area'); break;
                case 54: gameBoxItem.classList.add('area'); break;
                case 59: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 9); break;
                case 60: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 7); break;
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
                case 84: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 10); break;
                case 85: gameBoxItem.classList.add('area'); break;
                case 86: gameBoxItem.classList.add('area'); break;
                case 88: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 13); break;
                case 90: gameBoxItem.classList.add('area'); break;
                case 92: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 8); break;
                case 97: gameBoxItem.classList.add('area'); break;
                case 101: gameBoxItem.classList.add('area'); break;
                case 103: gameBoxItem.classList.add('area'); break;
                case 105: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 7); break;
                case 106: gameBoxItem.classList.add('area'); addAltBox(gameBoxItem, 9); break;
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
<p>6.행정기관에서 일의 관련자에게 의견을 듣는 공개적 모임</p>
<p>7.장치들이 과열되어 망가지는 것을 방지하는 화학물질</p>
<p>8.가루로 된 설탕</p>
<p>9.볼과 입술을 붉은 색조로 치장하는 화장품</p>
<p>10.제 몸에 벌어지는 일을 모를 만큼 정신을 잃은 상태</p>
<p>11.풀이나 나무 따위를 얽거나 엮어 경계를 지어 막는 물건</p>
<p>12.프랑스 작가 빅토르 위고가 쓴 소설</p>
<p>13.자기가 저지른 일은 자기가 해결하여야 함을 이르는 말.</p>
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
        { 1: '1', 2: '2', 3: '3' },
        { 1: '1', 2: '14', 3: '27' },
        { 1: '16', 2: '17' },
        { 1: '3', 2: '16' },
        { 1: '27', 2: '28' },
        { 1: '17', 2: '30', 3: '43' },
        { 1: '43', 2: '44', 3: '45' },
        { 1: '28', 2: '41', 3: '54', 4: '67' },
        { 1: '67', 2: '68', 3: '69' },
        { 1: '69', 2: '82' },
        { 1: '82', 2: '83', 3: '84', 4: '85', 5: '86' },
        { 1: '19', 2: '32', 3: '45' },
        { 1: '105', 2: '106', 3: '107', 4: '108' },
        { 1: '60', 2: '73', 3: '86' },
        { 1: '123', 2: '124' },
        { 1: '92', 2: '105' },
        { 1: '59', 2: '60', 3: '61', 4: '62' },
        { 1: '106', 2: '119' },
        { 1: '49', 2: '50', 3: '51', 4: '52' },
        { 1: '84', 2: '97', 3: '110', 4: '123' },
        { 1: '112', 2: '113', 3: '114', 4: '115' },
        { 1: '36', 2: '49', 3: '62' },
        { 1: '51', 2: '64', 3: '77', 4: '90', 5: '103' },
        { 1: '88', 2: '101', 3: '114', 4: '127' }
    ];
    const targetArray = [
        { 1: '가', 2: '해', 3: '자' },
        { 1: '가', 2: '치', 3: '관' },
        { 1: '각', 2: '별' },
        { 1: '자', 2: '각' },
        { 1: '관', 2: '여' },
        { 1: '별', 2: '안', 3: '간' },
        { 1: '간', 2: '담', 3: '회' },
        { 1: '여', 2: '지', 3: '없', 4: '이' },
        { 1: '이', 2: '윽', 3: '고' },
        { 1: '고', 2: '소' },
        { 1: '소', 2: '득', 3: '인', 4: '정', 5: '액' },
        { 1: '공', 2: '청', 3: '회' },
        { 1: '당', 2: '연', 3: '지', 4: '사' },
        { 1: '부', 2: '동', 3: '액' },
        { 1: '성', 2: '곽' },
        { 1: '분', 2: '당' },
        { 1: '어', 2: '부', 3: '지', 4: '리' },
        { 1: '연', 2: '지' },
        { 1: '타', 2: '이', 3: '레', 4: '놀' },
        { 1: '인', 2: '사', 3: '불', 4: '성' },
        { 1: '백', 2: '년', 3: '해', 4: '로' },
        { 1: '울', 2: '타', 3: '리' },
        { 1: '레', 2: '미', 3: '제', 4: '라', 5: '블' },
        { 1: '결', 2: '자', 3: '해', 4: '지' }
    ];
    // const wrongAnswer = compareTextAndArray(boxIds, targetArray);
    const wrongAnswer = compareTextAndArray(boxIds, targetArray);
    const combinedWrongAnswer = wrongAnswer.map(row => row.join('')).join(', ');
    console.log(combinedWrongAnswer);


    endGame(wrongAnswer)
}


// function hardButtonClickHandler() {
//     const boxIds = [
//         '1', '2', '3',
//         '14', '16', '17', '19',
//         '27', '28', '30', '32', '36',
//         '41', '43', '44', '45', '49', '50', '51', '52',
//         '54', '59', '60', '61', '62', '64',
//         '67', '68', '69', '73', '77',
//         '82', '83', '84', '85', '86', '88', '90',
//         '92', '97', '101', '103',
//         '105', '106', '107', '108', '110', '112', '113', '114', '115',
//         '119', '123', '124', '127'
//     ];
//     const targetArray = [
//         '가', '해', '자',
//         '치', '각', '별', '공',
//         '관', '여', '안', '청', '울',
//         '지', '간', '담', '회', '타', '이', '레', '놀',
//         '없', '어', '부', '지', '리', '미',
//         '이', '윽', '고', '동', '제',
//         '소', '득', '인', '정', '액', '결', '라',
//         '분', '사', '자', '블',
//         '당', '연', '지', '사', '불', '백', '년', '해', '로',
//         '지', '성', '곽', '지'
//     ];
//     const wrongAnswer = compareTextAndArray(boxIds, targetArray);
//     endGame(wrongAnswer)
// }


function nomalButtonClickHandler() {
    const boxIds = [
        { 1: '29', 2: '30', 3: '31', 4: '32' },
        { 1: '48', 2: '49', 3: '50', 4: '51' },
        { 1: '56', 2: '57', 3: '58', 4: '59' },
        { 1: '72', 2: '73', 3: '74', 4: '75' },
        { 1: '95', 2: '96', 3: '97', 4: '98' },
        { 1: '112', 2: '113', 3: '114', 4: '115' },
        { 1: '30', 2: '43', 3: '56', 4: '69' },
        { 1: '59', 2: '72', 3: '85', 4: '98' },
        { 1: '35', 2: '48', 3: '61', 4: '74' },
        { 1: '75', 2: '88', 3: '101', 4: '114' }
    ];
    const targetArray = [
        { 1: '거', 2: '두', 3: '절', 4: '미' },
        { 1: '불', 2: '철', 3: '주', 4: '야' },
        { 1: '동', 2: '분', 3: '서', 4: '주' },
        { 1: '반', 2: '신', 3: '반', 4: '의' },
        { 1: '시', 2: '의', 3: '적', 4: '절' },
        { 1: '소', 2: '리', 3: '장', 4: '도' },
        { 1: '두', 2: '문', 3: '불', 4: '출' },
        { 1: '야', 2: '반', 3: '도', 4: '주' },
        { 1: '십', 2: '시', 3: '일', 4: '반' },
        { 1: '의', 2: '미', 3: '심', 4: '장' }
    ];
    const wrongAnswer = compareTextAndArray(boxIds, targetArray);
    const combinedWrongAnswer = wrongAnswer.map(row => row.join('')).join(', ');
    console.log(combinedWrongAnswer);


    endGame(wrongAnswer)
}


// function nomalButtonClickHandler() {
//     const boxIds = [
//         '29', '30', '31', '32', '35',
//         '43', '48', '49', '50', '51',
//         '56', '57', '58', '59', '61',
//         '69', '72', '73', '74', '75',
//         '85', '88',
//         '95', '96', '97', '98', '101',
//         '112', '113', '114', '115'
//     ];
//     const targetArray = [
//         '거', '두', '절', '미', '십',
//         '문', '시', '의', '적', '절',
//         '불', '철', '주', '야', '일',
//         '출', '반', '신', '반', '의',
//         '도', '미',
//         '동', '분', '서', '주', '심',
//         '소', '리', '장', '도'
//     ];
//     const wrongAnswers = compareTextAndArray(boxIds, targetArray);
//     endGame(wrongAnswers);
// }


function easyButtonClickHandler() {
    const boxIds = [
        { 1: '29', 2: '30', 3: '31' },
        { 1: '55', 2: '56', 3: '57' },
        { 1: '44', 2: '45', 3: '46' },
        { 1: '59', 2: '60', 3: '61' },
        { 1: '98', 2: '99', 3: '100', 4: '101' },
        { 1: '31', 2: '44', 3: '57' },
        { 1: '56', 2: '69', 3: '82' },
        { 1: '46', 2: '59', 3: '72' },
        { 1: '35', 2: '48', 3: '61' },
        { 1: '75', 2: '88', 3: '101', 4: '114' }

    ];
    const targetArray = [
        { 1: '기', 2: '러', 3: '기' },
        { 1: '오', 2: '솔', 3: '길' },
        { 1: '차', 2: '고', 3: '지' },
        { 1: '구', 2: '렁', 3: '이' },
        { 1: '이', 2: '구', 3: '아', 4: '나' },
        { 1: '기', 2: '차', 3: '길' },
        { 1: '솔', 2: '방', 3: '울' },
        { 1: '지', 2: '구', 3: '본' },
        { 1: '지', 2: '렁', 3: '이' },
        { 1: '호', 2: '랑', 3: '나', 4: '비' },
    ];
    const wrongAnswer = compareTextAndArray(boxIds, targetArray);
    const combinedWrongAnswer = wrongAnswer.map(row => row.join('')).join(', ');
    console.log(combinedWrongAnswer);


    endGame(wrongAnswer)
}


// function easyButtonClickHandler() {
//     const boxIds = [
//         '29', '30', '31', '35',
//         '44', '45', '46', '48',
//         '55', '56', '57', '59', '60', '61',
//         '69', '72', '75',
//         '82', '88',
//         '98', '99', '100', '101',
//         '114'
//     ];
//     const targetArray = [
//         '기', '러', '기', '지',
//         '차', '고', '지', '렁',
//         '오', '솔', '길', '구', '렁', '이',
//         '방', '본', '호',
//         '울', '랑',
//         '이', '구', '아', '나',
//         '비'
//     ];
//     const wrongAnswers = compareTextAndArray(boxIds, targetArray);
//     endGame(wrongAnswers);
// }


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

// function compareTextAndArray(boxIds, targetArray) {
//     let wrongAnswer = [];

//     for (let i = 0; i < boxIds.length; i++) {
//         const boxRow = boxIds[i];
//         const targetRow = targetArray[i];
//         let rowErrors = [];

//         for (const key in boxRow) {
//             const boxId = boxRow[key];
//             const targetText = targetRow[key];
//             const boxElement = document.querySelector(`[data-box-id="${boxId}"]`);

//             if (!boxElement) {
//                 console.log(`박스 엘리먼트를 찾을 수 없음`);
//                 continue;
//             }

//             const boxText = boxElement.textContent;

//             if (boxText !== targetText) {
//                 rowErrors.push(targetText);
//             }
//         }

//         if (rowErrors.length > 0) {
//             wrongAnswer.push(rowErrors);
//         }
//     }

//     return wrongAnswer;
// }

function compareTextAndArray(boxIds, targetArray) {
    let wrongAnswer = [];

    for (let i = 0; i < boxIds.length; i++) {
        const boxRow = boxIds[i];
        const targetRow = targetArray[i];
        let rowErrors = [];

        for (const key in boxRow) {
            const boxId = boxRow[key];
            const targetText = targetRow[key];
            const boxElement = document.querySelector(`[data-box-id="${boxId}"]`);

            if (!boxElement) {
                console.log(`박스 엘리먼트를 찾을 수 없음`);
                continue;
            }

            const boxText = boxElement.textContent;

            if (boxText !== targetText) {
                rowErrors.push(boxText);
            }
        }

        if (rowErrors.length > 0) {
            wrongAnswer.push(rowErrors);
        }
    }

    console.log(wrongAnswer);
    return wrongAnswer;
}



// ======================게임 종료 창=====================

function endGame(wrongAnswer) {
    $backdrop.classList.add('visible');
    const $endGameBox = document.createElement('div');
    $endGameBox.classList.add('resultBox');
    $container.appendChild($endGameBox);
    const $endGameBoxText = document.createElement('h4');
    $endGameBoxText.textContent = '게임 결과';
    $endGameBox.appendChild($endGameBoxText);
    const $endGameResultBoxText = document.createElement('h5');
    $endGameResultBoxText.textContent = '틀린 문자';
    $endGameBox.appendChild($endGameResultBoxText);
    const $endGameResultBox = document.createElement('div');
    $endGameResultBox.classList.add('resultListBox');
    $endGameBox.appendChild($endGameResultBox);

    const $resultListBox = $endGameBox.querySelector('.resultListBox');

    // Modify the way wrongAnswer is displayed
    for (let i = 0; i < wrongAnswer.length; i += 2) {
        const rowErrorsText = document.createElement('p');
        const row1 = wrongAnswer[i].join(', ');
        const row2 = i + 1 < wrongAnswer.length ? wrongAnswer[i + 1].join(', ') : '';
        rowErrorsText.textContent = `{${row1}}, {${row2}}`;
        $resultListBox.appendChild(rowErrorsText);
    }

    $endGameBox.addEventListener('click', e => {
        $endGameBox.classList.add('hide');
        $backdrop.classList.remove('visible');
    });

    $backdrop.addEventListener('click', e => {
        $endGameBox.classList.add('hide');
        $backdrop.classList.remove('visible');
    });
}


// function endGame(wrongAnswer) {
//     // alert('틀린 글자 : ' + wrongAnswer.join(', '));
//     $backdrop.classList.add('visible')
//     const $endGameBox = document.createElement('div')
//     $endGameBox.classList.add('resultBox')
//     $container.appendChild($endGameBox)
//     const $endGameBoxText = document.createElement('h4')
//     $endGameBoxText.textContent = '게임 결과'
//     $endGameBox.appendChild($endGameBoxText)
//     const $endGameResultBoxText = document.createElement('h5')
//     $endGameResultBoxText.textContent = '틀린 문자'
//     $endGameBox.appendChild($endGameResultBoxText)
//     const $endGameResultBox = document.createElement('div')
//     $endGameResultBox.classList.add('resultListBox')
//     $endGameBox.appendChild($endGameResultBox)
//     const $resultListBox = $endGameBox.querySelector('.resultListBox')
//     $resultListBox.textContent = wrongAnswer

//     $endGameBox.addEventListener('click', e => {
//         $endGameBox.classList.add('hide')
//         $backdrop.classList.remove('visible')
//     })
//     $backdrop.addEventListener('click', e => {
//         $endGameBox.classList.add('hide')
//         $backdrop.classList.remove('visible')
//     })
// }






const $difficultyEasyBtn = $difficultypage.querySelector('.easy');
$difficultyEasyBtn.addEventListener('click', difficultyEasyBtnCilckHandler);

const $difficultyNomalBtn = $difficultypage.querySelector('.nomal');
$difficultyNomalBtn.addEventListener('click', difficultyNomalBtnCilckHandler);

const $difficultyHardBtn = $difficultypage.querySelector('.hard');
$difficultyHardBtn.addEventListener('click', difficultyHardBtnCilckHandler);







