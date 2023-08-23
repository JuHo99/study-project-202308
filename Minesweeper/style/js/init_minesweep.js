//게임창
const $mineTagble = document.querySelector('.game-board');

//모달
const $deathModal = document.querySelector('.death_modal');
const $deathModalClose = $deathModal.querySelector('.btn-close');

//레벨 버튼
const $easyBtn = document.querySelector('.easy');
const $nomalBtn = document.querySelector('.nomal');
const $hardBtn = document.querySelector('.hard');
//초급 : 9x9/10 , 중급:16x16/40 , 고급:20x16/68

let ROW = 9;
let COL = 9;
let MINE = 10;

//폭탄 위치를 담을 배열
const sweep = [];

//지뢰 생성 논리
let mineIsValid = false;

$deathModal.addEventListener('click', (e) => {
  $deathModal.classList.add('hide');
  $backdrop.classList.remove('visible');
});

//게임 테이블 생성
const createMineTable = () => {
  for (let i = 0; i < ROW; i++) {
    const $tableTr = document.createElement('tr');
    $tableTr.classList.add('rows');
    $mineTagble.appendChild($tableTr);
    for (let j = 0; j < COL; j++) {
      const $tableTd = document.createElement('td');

      $tableTd.classList.add('square');

      $tableTr.appendChild($tableTd);
    }
  }
};

//테이블 지웠다가 다시 생성
const reCreateTable = () => {
  $mineTagble.textContent = '';
  createMineTable();
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

  //클릭한 td 가져옴
  const clicktable = trList[trIndex].children[tdIndex];
  //배경화면 투명으로 변경

  clicktable.classList.add('clicked');

  return {
    trIndex: trIndex,
    tdIndex: tdIndex,
    trList: trList,
  };
};

// 빈셀 없애기
const nullCellTest = (oneIndex, twoIndex, trList) => {
  let boomCount = 0;
  let emptyCount = 0;
  for (
    let numTrIndex = oneIndex - 1;
    numTrIndex <= oneIndex + 1;
    numTrIndex++
  ) {
    for (
      let numTdIndex = twoIndex - 1;
      numTdIndex <= twoIndex + 1;
      numTdIndex++
    ) {
      const $tdTag = trList[numTrIndex].children[numTdIndex];
      if (!$tdTag) return;

      if ($tdTag.classList.contains('boom')) {
        boomCount++;
        continue;
      }
      if ($tdTag.classList.contains('clicked')) {
        emptyCount++;
        continue;
      }
      $tdTag.classList.add('clicked');
    }
  }
  return [boomCount, emptyCount];
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

function openAround(trIndex, tdIndex, trList) {
  const $clickEmptyTd = trList[trIndex].children[tdIndex];

  $clickEmptyTd.classList.add('clicked');

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
      if (numTdIndex === COL || numTdIndex < 0 || $tdTag.hasAttribute('mine')) {
        continue;
      }
      openAround(numTdIndex, numTrIndex);
    }
    //빈칸을 클릭했을때 자동으로 열리게 하기
  }
}

// ==========테이블 클릭 핸들러 ============
const tableClickHandler = (e) => {
  const $clickTd = e.target;
  const { trIndex, tdIndex, trList } = selectCell($clickTd);

  if (!mineIsValid) {
    setMineAndNum(trIndex, tdIndex, trList);
    mineIsValid = true;
  }
  if ($clickTd.classList.contains('clicked')) {
    return;
  } else if ($clickTd.hasAttribute('mine')) {
    $deathModal.classList.remove('hide');
    $backdrop.classList.add('visible');

    for (const swp of sweep) {
      const { one: trIndex, two: tdIndex } = swp;
      const $tdCell = trList[trIndex].children[tdIndex];

      $tdCell.classList.add('has-mine');
    }
  } else if ($clickTd.hasAttribute('num')) {
    $clickTd.classList.add('clicked');
  } else {
    openAround(trIndex, tdIndex, trList);
  }

  //빈칸을 클릭했을때 자동으로 열리게 하기
};

$mineTagble.addEventListener('click', tableClickHandler);

// - 화면 렌더링 -
$easyBtn.addEventListener('click', () => {
  ROW = 9;
  COL = 9;
  MINE = 10;
  reCreateTable();
  mineIsValid = false;
});
$nomalBtn.addEventListener('click', () => {
  ROW = 16;
  COL = 16;
  MINE = 40;
  reCreateTable();
  mineIsValid = false;
});
$hardBtn.addEventListener('click', () => {
  ROW = 20;
  COL = 16;
  MINE = 68;
  reCreateTable();
  mineIsValid = false;
});

createMineTable();
