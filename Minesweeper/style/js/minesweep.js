const $mineTagble = document.getElementById('mineTable');

//게임 테이블 생성
const createMineTable = () => {
  for (let i = 0; i < 10; i++) {
    const $tableTr = document.createElement('tr');
    $tableTr.classList.add('rows');
    $mineTagble.appendChild($tableTr);
    for (let j = 0; j < 10; j++) {
      const $tableTd = document.createElement('td');
      $tableTr.appendChild($tableTd);
    }
  }
};
createMineTable();

//폭탄 위치를 담을 배열
const sweep = [];

const tableClickHandler = (e) => {
  console.log(e.target);

  //tr 전체를 배열로 변환
  const $tableTd = $mineTagble.querySelectorAll('tr');
  const trList = Array.from($tableTd);

  //클릭된 tr에서 td가 몇번째 있는지 확인
  const tdTr = e.target.closest('.rows');
  const tdTrList = Array.from(tdTr.children);

  //tr과 td 인덱스 뽑아옴
  const oneIndex = trList.indexOf(tdTr);
  const twoIndex = tdTrList.indexOf(e.target);
  console.log(oneIndex);
  console.log(twoIndex);
  //폭탄 10개를 심을 인덱스 생성
  while (sweep.length !== 10) {
    const one = Math.floor(Math.random() * 10);
    const two = Math.floor(Math.random() * 10);

    //초기 클릭과 one,two가 이미 있는지 확인
    let isDuplicate = false;
    for (const entry of sweep) {
      if (
        (entry.one === one && entry.two === two) ||
        (oneIndex === one && twoIndex === two)
      ) {
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
  //textContent로 넣기
  sweep.map((swp) => (trList[swp.one].children[swp.two].textContent = 'B'));
  console.log(sweep);
};

$mineTagble.addEventListener('click', tableClickHandler, { once: true });
