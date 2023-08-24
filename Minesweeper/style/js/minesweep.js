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

//초급 : 9x9/10 , 중급:16x16/40 , 고급:20x16/68
let ROW = 9;
let COL = 9;
let MINE = 10;

//폭탄 위치를 담을 배열
const sweep = [];

//지뢰 생성 논리
let mineIsValid = false;
//타이머
let timerId;

function closeModal(e) {
  e.target === $deathModalClose && $deathModal.classList.add('hide');
  e.target === $finishModalClose && $finishModal.classList.add('hide');
  $backdrop.classList.remove('visible');
}
//게임 테이블 생성
const createMineTable = (lev = 'easy') => {
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

function openAll() {
  const trList = Array.from($mineTagble.querySelectorAll('tr'));
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      console.log(trList[i].children[j]);
      if (trList[i].children[j].classList.contains('flag')) {
        continue;
      } else if (!trList[i].children[j].classList.contains('clicked')) {
        return false;
      }
    }
  }
  return true;
}
function finishGame() {
  if (MINE === 0 && openAll()) {
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
// 선택한 셀 찾아오기 =================
const selectCell = ($clickTd) => {
  //tr 전체를 배열로 변환
  const trList = Array.from($mineTagble.querySelectorAll('tr'));

  //클릭된 td에서 tr가 몇번째 있는지 확인
  const tdTr = $clickTd.closest('.rows');
  //클릭된 tr에서의 td 리스트 생성
  const tdTrList = Array.from(tdTr.children);

  //tr과 td 인덱스 뽑아옴
  const trIndex = trList.indexOf(tdTr);
  const tdIndex = tdTrList.indexOf($clickTd);

  return {
    trIndex: trIndex,
    tdIndex: tdIndex,
    trList: trList,
  };
};

//지뢰와 숫자 넣기
const setMineAndNum = (trIndex, tdIndex, trList) => {
  //폭탄 10개를 심을 인덱스 생성
  while (sweep.length !== MINE) {
    const one = Math.floor(Math.random() * ROW);
    const two = Math.floor(Math.random() * COL);

    //초기 클릭위치와 one,two가 이미 있는지 확인
    let isDuplicate = false;
    if (trIndex === one && tdIndex === two) {
      isDuplicate = true;
    }
    for (const entry of sweep) {
      if (entry.one === one && entry.two === two) {
        isDuplicate = true;
        break;
      }
    }
    //false일때 실행
    if (!isDuplicate) {
      sweep.push({
        one: one,
        two: two,
      });
    }
  }
  console.log(sweep);
  //지뢰 넣기
  for (const swp of sweep) {
    const { one: trIndex, two: tdIndex } = swp;
    const tdCell = trList[trIndex].children[tdIndex];

    tdCell.setAttribute('mine', 1);
  }

  //지뢰 주변에 숫자 넣기
  for (const swp of sweep) {
    const { one: trIndex, two: tdIndex } = swp;
    for (
      let numTrIndex = trIndex - 1;
      numTrIndex <= trIndex + 1;
      numTrIndex++
    ) {
      if (numTrIndex === ROW || numTrIndex < 0) {
        continue;
      }
      for (
        let numTdIndex = tdIndex - 1;
        numTdIndex <= tdIndex + 1;
        numTdIndex++
      ) {
        const $tdTag = trList[numTrIndex].children[numTdIndex];
        if (
          numTdIndex === COL ||
          numTdIndex < 0 ||
          $tdTag.getAttribute('mine') ||
          (numTdIndex === tdIndex && numTrIndex === trIndex)
        ) {
          continue;
        }

        if (!$tdTag.textContent) {
          $tdTag.textContent = 1;
        } else {
          $tdTag.textContent = +$tdTag.textContent + 1;
          $tdTag.classList.remove('txt-' + `${+$tdTag.textContent - 1}`);
        }
        $tdTag.setAttribute('Num', `${$tdTag.textContent}`);
        $tdTag.classList.add('txt-' + `${$tdTag.getAttribute('Num')}`);
      }
    }
  }
};

//빈칸을 클릭했을때 자동으로 열리게 하기
function openAround(trIndex, tdIndex, trList) {
  console.log('in around');
  const EmpTd = [];
  const $initTdTag = trList[trIndex].children[tdIndex];
  $initTdTag.setAttribute('num', '0');

  for (let numTrIndex = trIndex - 1; numTrIndex <= trIndex + 1; numTrIndex++) {
    if (numTrIndex === ROW || numTrIndex < 0) {
      continue;
    }
    for (
      let numTdIndex = tdIndex - 1;
      numTdIndex <= tdIndex + 1;
      numTdIndex++
    ) {
      const $tdTag = trList[numTrIndex].children[numTdIndex];
      if (
        numTdIndex === COL ||
        numTdIndex < 0 ||
        $tdTag === $initTdTag ||
        $tdTag.hasAttribute('mine')
      ) {
        continue;
      }
      console.log('clickde 추가 ');
      $tdTag.classList.add('clicked');
      if (!$tdTag.hasAttribute('num')) {
        $tdTag.setAttribute('num', '0');
        EmpTd.push({ trIndex: numTrIndex, tdIndex: numTdIndex });
      }
      // openAround(numTdIndex, numTrIndex);
    }
    //빈칸을 클릭했을때 자동으로 열리게 하기
  }
  console.log(EmpTd);
  if (EmpTd.length > 0) {
    console.log('EmpTd 실행');
    for (const eTd of EmpTd) {
      const { trIndex, tdIndex } = eTd;
      openAroundTail(trIndex, tdIndex, trList);
    }
  } else {
    return 0;
  }
}
function openAroundTail(trIndex, tdIndex, trList) {
  console.log(`in aroundTail: ${trIndex}, ${tdIndex}`);

  const EmpTd = [];
  const $initTdTag = trList[trIndex].children[tdIndex];
  $initTdTag.setAttribute('num', '0');

  for (let numTrIndex = trIndex - 1; numTrIndex <= trIndex + 1; numTrIndex++) {
    if (numTrIndex === ROW || numTrIndex < 0) {
      continue;
    }
    for (
      let numTdIndex = tdIndex - 1;
      numTdIndex <= tdIndex + 1;
      numTdIndex++
    ) {
      const $tdTag = trList[numTrIndex].children[numTdIndex];
      if (
        numTdIndex === COL ||
        numTdIndex < 0 ||
        $tdTag === $initTdTag ||
        $tdTag.hasAttribute('mine')
      ) {
        continue;
      }
      console.log('clickde 추가 ');
      $tdTag.classList.add('clicked');
      if (!$tdTag.hasAttribute('num')) {
        $tdTag.setAttribute('num', '0');
        EmpTd.push({ trIndex: numTrIndex, tdIndex: numTdIndex });
      }
      // openAround(numTdIndex, numTrIndex);
    }
    //빈칸을 클릭했을때 자동으로 열리게 하기
  }
  console.log(EmpTd);
  if (EmpTd.length > 0) {
    console.log('EmpTd 실행');
    for (const eTd of EmpTd) {
      const { trIndex, tdIndex } = eTd;
      openAround(trIndex, tdIndex, trList);
    }
  } else {
    return 0;
  }
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

  $clickTd.classList.add('clicked');

  if ($clickTd.hasAttribute('mine')) {
    $deathModal.classList.remove('hide');
    $backdrop.classList.add('visible');

    for (const swp of sweep) {
      const { one: trIndex, two: tdIndex } = swp;
      const $tdCell = trList[trIndex].children[tdIndex];

      $tdCell.classList.add('has-mine');
    }
  } else if (!$clickTd.hasAttribute('num')) {
    openAround(trIndex, tdIndex, trList);
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
    if (MINE > 0) {
      if (!hasFlag) {
        MINE -= 1;
        $minCount.textContent = MINE;
        $clickTd.classList.add('flag');
      } else {
        if (!openAll()) {
          MINE += 1;
          $minCount.textContent = MINE;
          $clickTd.classList.remove('flag');
        }
      }
    }
    hasFlag = !hasFlag;
  }
  finishGame();
};

// =========클릭 이벤트==========
$mineTagble.addEventListener('click', tableLeftClickHandler);
$mineTagble.addEventListener('contextmenu', tableRightClickHandler);

$deathModalClose.addEventListener('click', closeModal);
$finishModalClose.addEventListener('click', closeModal);

// -====== 화면 렌더링 -
$easyBtn.addEventListener('click', () => {
  ROW = 9;
  COL = 9;
  MINE = 10;
  createMineTable();
  resetTimer();
  mineIsValid = false;
});
$nomalBtn.addEventListener('click', () => {
  ROW = 16;
  COL = 16;
  MINE = 40;
  createMineTable('nomal');
  resetTimer();
  mineIsValid = false;
});
$hardBtn.addEventListener('click', () => {
  ROW = 20;
  COL = 16;
  MINE = 68;
  createMineTable('hard');
  resetTimer();
  mineIsValid = false;
});

createMineTable();
