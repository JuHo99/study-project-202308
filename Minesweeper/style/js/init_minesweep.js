//게임창
const $mineTagble = document.getElementById('mineTable');

//모달
const $deathModal = document.querySelector('.death_modal');

//초급 : 9x9/10 , 중급:16x16/40 , 고급:20x16/68
const ROW = 9;
const COL = 9;
const MINE = 10;

//폭탄 위치를 담을 배열
const sweep = [];

//게임 테이블 생성
const createMineTable = () => {
  for (let i = 0; i < ROW; i++) {
    const $tableTr = document.createElement('tr');
    $tableTr.classList.add('rows');
    $mineTagble.appendChild($tableTr);
    for (let j = 0; j < COL; j++) {
      const $tableTd = document.createElement('td');
      const $tdBtn = document.createElement('button');
      const $tdNum = document.createElement('p');

      $tableTd.classList.add('cell');
      $tdNum.classList.add('mineNum');

      $tableTr.appendChild($tableTd);
      $tableTd.appendChild($tdBtn);
      $tableTd.appendChild($tdNum);
    }
  }
};

// 선택한 셀 찾아오기 =================
const selectCell = (e) => {
  const btncell = e.target; //button
  const clickTd = btncell.parentNode;

  //tr 전체를 배열로 변환
  const trList = Array.from($mineTagble.querySelectorAll('tr'));

  //클릭된 td에서 tr가 몇번째 있는지 확인
  const tdTr = clickTd.closest('.rows');
  const tdTrList = Array.from(tdTr.children);

  //tr과 td 인덱스 뽑아옴
  const oneIndex = trList.indexOf(tdTr);
  const twoIndex = tdTrList.indexOf(clickTd);

  //클릭한 td 가져옴
  const clicktable = trList[oneIndex].children[twoIndex];
  //배경화면 투명으로 변경

  clicktable.classList.add('transparency');
  clicktable.removeChild(btncell);

  return {
    oneIndex: oneIndex,
    twoIndex: twoIndex,
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
      if ($tdTag.classList.contains('transparency')) {
        emptyCount++;
        continue;
      }
      $tdTag.classList.add('transparency');
      $tdTag.removeChild($tdTag.querySelector('button'));
    }
  }
  return [boomCount, emptyCount];
};

// ==========테이블 클릭 핸들러 ============
const tableClickHandler = (e) => {
  //버튼 클릭시 사라지기
  $mineTagble.addEventListener('click', deleteButtonHandler);

  const { oneIndex, twoIndex, trList } = selectCell(e);

  //폭탄 10개를 심을 인덱스 생성
  while (sweep.length !== MINE) {
    const one = Math.floor(Math.random() * ROW);
    const two = Math.floor(Math.random() * COL);

    //초기 클릭위치와 one,two가 이미 있는지 확인
    let isDuplicate = false;
    if (oneIndex === one && twoIndex === two) {
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

    tdCell.classList.add('boom');
    tdCell.appendChild(document.createElement('div'));
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
        const tdTag = trList[numTrIndex].children[numTdIndex];
        if (
          numTdIndex === COL ||
          numTdIndex < 0 ||
          tdTag.classList.contains('boom') ||
          (numTdIndex === tdIndex && numTrIndex === trIndex)
        ) {
          continue;
        } else {
          const $pTag = tdTag.querySelector('.mineNum');
          $pTag.textContent = +$pTag.textContent + 1;
          $pTag.setAttribute('Num', '1');
        }
      }
    }
  }

  //빈칸을 클릭했을때 자동으로 열리게 하기
  const openAround = (trIndex, tdIndex) => {
    console.log(`${trIndex},${tdIndex}`);
    setTimeout(() => {
      if (
        !trList[trIndex].children[tdIndex].querySelector('.mineNum').textContent
      ) {
        if (
          trIndex - 1 < 0 ||
          tdIndex - 1 < 0 ||
          trIndex + 1 > ROW ||
          tdIndex + 1 > COL
        ) {
          return;
        }

        const [boomCount, emptyCount] = nullCellTest(trIndex, tdIndex, trList);
        console.log(`eptCo: ${emptyCount}`);
        if (emptyCount === 9) {
          return;
        }
        if (boomCount === 0) {
          openAround(trIndex - 1, tdIndex - 1);
          openAround(trIndex - 1, tdIndex);
          openAround(trIndex - 1, tdIndex + 1);
          openAround(trIndex, tdIndex - 1);
          openAround(trIndex, tdIndex + 1);
          openAround(trIndex + 1, tdIndex - 1);
          openAround(trIndex + 1, tdIndex);
          openAround(trIndex + 1, tdIndex + 1);
        }
      }
    }, 0);
  };

  openAround(oneIndex, twoIndex);
};

const deleteButtonHandler = (e) => {
  const { oneIndex, twoIndex, trList } = selectCell(e);

  if (trList[oneIndex].children[twoIndex].classList.contains('boom')) {
    $deathModal.classList.remove('hide');
    $backdrop.classList.add('visible');
  }
};

$mineTagble.addEventListener('click', tableClickHandler, { once: true });

// - 화면 렌더링 -
createMineTable();
