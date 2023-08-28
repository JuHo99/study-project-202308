const $contain = document.querySelector('.container');
const $gameMain = document.querySelector('.game-main');
//게임창
const $mineTagble = document.querySelector('.game-board');

//모달
const $deathModal = document.querySelector('.death_modal');
const $deathModalClose = $deathModal.querySelector('.btn-close');
const $finishModal = document.querySelector('.finish_modal');
const $finishModalClose = $finishModal.querySelector('.btn-close');

//레벨 버튼
const $easyBtn = document.querySelector('.easy');
const $nomalBtn = document.querySelector('.nomal');
const $hardBtn = document.querySelector('.hard');

//지뢰랑 시간
const $minCount = document.getElementById('mineCnt');
const $timeCount = document.getElementById('time');
const $finishTimeCount = document.getElementById('finish_time');

//리셋 버튼
const $btnReset = document.querySelector('.btn-reset');
const $btnDeathReset = document.querySelector('.btn-death-reset');
const $btnfinishReset = document.querySelector('.btn-finish-reset');

//초급 : 9x9/10 , 중급:16x16/40 , 고급:20x16/68
let ROW = 9;
let COL = 9;
let MINE = 10;
let MINECnt = 10;

//폭탄 위치를 담을 배열
const sweep = [];

//지뢰 생성 논리
let mineIsValid = false;
//타이머
let timerId;
//레벨
let level = 'easy';


//게임 테이블 생성
const createMineTable = (lev) => {
  $mineTagble.textContent = '';
  $minCount.textContent = MINE;
  for (let i = 0; i < ROW; i++) {
    const $tableTr = document.createElement('tr');
    $tableTr.classList.add('rows');
    $contain.className = 'container ' + lev;
    $gameMain.className = 'game-main ' + lev;

    $mineTagble.appendChild($tableTr);
    for (let j = 0; j < COL; j++) {
      const $tableTd = document.createElement('td');

      $tableTd.classList.add('square');
      $tableTr.appendChild($tableTd);
    }
  }
};

//게임 버튼을 다 열었는지 체크 하는 함수 
function openAll() {
  const trList = Array.from($mineTagble.querySelectorAll('tr'));
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (trList[i].children[j].classList.contains('flag')) {
        continue;
      } else if (!trList[i].children[j].classList.contains('clicked')) {
        return false;
      }
    }
  }
  return true;
}
//게임을 끝내는 함수 
function finishGame() {
  if (MINECnt === 0 && openAll()) {
    $finishModal.classList.remove('hide');
    $backdrop.classList.add('visible');
    stopTimer();
    $finishTimeCount.textContent = $timeCount.textContent;
  }
}

//타이며
function startTimer() {
  let timeCnt = 0;
  let fomatTime = ``;

  timerId = setInterval(function () {
    timeCnt++;
    const minutes = Math.floor(timeCnt / 60);
    const second = timeCnt % 60;
    if (minutes < 10) {
      second < 10
        ? (fomatTime = `0${minutes}:0${second}`)
        : (fomatTime = `0${minutes}:${second}`);
    } else if (minutes > 10) {
      second < 10
        ? (fomatTime = `${minutes}:0${second}`)
        : (fomatTime = `${minutes}:${second}`);
    }

    $timeCount.textContent = fomatTime;
  }, 1000);
}
function stopTimer() {
  clearInterval(timerId);
}

const resetTimer = () => {
  clearInterval(timerId);
  $timeCount.textContent = `00:00`;
};

//모달 닫기 
function closeModal(e) {
  e.target === $deathModalClose && $deathModal.classList.add('hide');
  e.target === $finishModalClose && $finishModal.classList.add('hide');
  $backdrop.classList.remove('visible');
}

// ==========테이블 클릭 핸들러 ============
const tableLeftClickHandler = (e) => {
  const $clickTd = e.target;
  const { trIndex, tdIndex, trList } = selectCell($clickTd);

  if (!mineIsValid) {
    setMineAndNum(trIndex, tdIndex, trList);
    mineIsValid = true;
    startTimer();
  }

  if ($clickTd.classList.contains('flag')) {
    return;
  }

  if ($clickTd.hasAttribute('mine')) {
    $clickTd.classList.add('clicked');
    $deathModal.classList.remove('hide');
    $backdrop.classList.add('visible');

    for (const swp of sweep) {
      const { one: trIndex, two: tdIndex } = swp;
      const $tdCell = trList[trIndex].children[tdIndex];

      $tdCell.classList.add('has-mine');
    }
  } else if (!$clickTd.hasAttribute('num')) {
    openAround(trIndex, tdIndex, trList);
  }else{
    $clickTd.classList.add('clicked');
  }

  finishGame();
};

//table 우클릭 깃발 세우기
const tableRightClickHandler = (e) => {
  e.preventDefault();
  const $clickTd = e.target;

  const openValid = openAll;
  let alreadyClicked = $clickTd.classList.contains('clicked');
  let hasFlag = $clickTd.classList.contains('flag');

  if (!mineIsValid) {
    const { trIndex, tdIndex, trList } = selectCell($clickTd);
    setMineAndNum(trIndex, tdIndex, trList);
    mineIsValid = true;
    startTimer();
  }

  if (!alreadyClicked) {
    if (MINECnt > 0) {
      if (!hasFlag) {
        MINECnt -= 1;
        $minCount.textContent = MINECnt;
        $clickTd.classList.add('flag');
      } else {
        MINECnt += 1;
        $minCount.textContent = MINECnt;
        $clickTd.classList.remove('flag');
      }
    } else {
      if (hasFlag) {
        MINECnt += 1;
        $minCount.textContent = MINECnt;
        $clickTd.classList.remove('flag');
      }
    }

    hasFlag = !hasFlag;
  }
  finishGame();
};
const resetHandler = (e) => {
  MINECnt = MINE;
  createMineTable(level);
  resetTimer();
  mineIsValid = false;
  sweep.splice(0);
};

// =========클릭 이벤트==========
$mineTagble.addEventListener('click', tableLeftClickHandler);
$mineTagble.addEventListener('contextmenu', tableRightClickHandler);

$deathModalClose.addEventListener('click', closeModal);
$finishModalClose.addEventListener('click', closeModal);
$btnReset.addEventListener('click', resetHandler);

$btnDeathReset.addEventListener('click', resetHandler);
$btnDeathReset.addEventListener('click', () => {
  $deathModal.classList.add('hide');
  $backdrop.classList.remove('visible');
});

$btnfinishReset.addEventListener('click', resetHandler);
$btnfinishReset.addEventListener('click', () => {
  $finishModal.classList.add('hide');
  $backdrop.classList.remove('visible');
});

$easyBtn.addEventListener('click', () => {
  ROW = 9;
  COL = 9;
  MINE = 10;
  MINECnt = 10;
  level = 'easy';
  createMineTable(level);
  resetTimer();
  mineIsValid = false;
});
$nomalBtn.addEventListener('click', () => {
  ROW = 16;
  COL = 16;
  MINE = 40;
  MINECnt = 40;
  level = 'nomal';
  createMineTable(level);
  resetTimer();
  mineIsValid = false;
});
$hardBtn.addEventListener('click', () => {
  ROW = 20;
  COL = 16;
  MINE = 68;
  MINECnt = 68;
  level = 'hard';
  createMineTable(level);
  resetTimer();
  mineIsValid = false;
});


// -====== 화면 렌더링 -
createMineTable();
