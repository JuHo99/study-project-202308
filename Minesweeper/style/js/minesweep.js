const $mineTagble = document.getElementById('mineTable');

//게임 테이블 생성
const createMineTable = () => {
  for (let i = 0; i < 10; i++) {
    const $tableTr = document.createElement('tr');
    $tableTr.classList.add('rows');
    $mineTagble.appendChild($tableTr);
    for (let j = 0; j < 10; j++) {
      const $tableTd = document.createElement('td');
      const $tdBtn = document.createElement('button');
      const $tdNum = document.createElement('p');

      $tableTd.classList.add('cell');

      $tableTr.appendChild($tableTd);
      $tableTd.appendChild($tdBtn);
      $tableTd.appendChild($tdNum);
    }
  }
};
createMineTable();

//폭탄 위치를 담을 배열
const sweep = [];

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

  return [oneIndex, twoIndex];
};

const tableClickHandler = (e) => {
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

  //폭탄 10개를 심을 인덱스 생성
  while (sweep.length !== 10) {
    const one = Math.floor(Math.random() * 10);
    const two = Math.floor(Math.random() * 10);

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
    const tdCell = trList[swp.one].children[swp.two];
    tdCell.setAttribute('boom', 'B');
    tdCell.appendChild(document.createElement('div'));

    if (
      (swp.one - 1 < 0 || swp.two - 1 < 0) &&
      (swp.one + 1 > swp.length || swp.two + 1 > swp.length)
    ) {
      continue;
    }
    console.log(trList[swp.one + 1].children[swp.two + 1]);
    // console.log(trList[swp.one + 1].children[swp.two + 1].children[1]);
  }

  //버튼 클릭시 사라지기
  $mineTagble.addEventListener('click', deleteButtonHandler);
};

const deleteButtonHandler = (e) => {
  selectCell(e);
};

$mineTagble.addEventListener('click', tableClickHandler, { once: true });
