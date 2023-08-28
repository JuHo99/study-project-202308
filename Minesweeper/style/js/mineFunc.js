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
  const createRandomNum= (tab)=>{
    return Math.floor(Math.random() * tab);
  }
  //지뢰와 숫자 넣기
 function setMineAndNum (trIndex, tdIndex, trList) {
    //폭탄 10개를 심을 인덱스 생성
    while (sweep.length !== MINE) {
      const one = createRandomNum(ROW);
      const two = createRandomNum(COL);

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
    if (trIndex === ROW || trIndex < 0 ||
      tdIndex === COL || tdIndex < 0 ){
        return;
      }
    const $initTdTag = trList[trIndex].children[tdIndex]; 
    if (
        $initTdTag.hasAttribute('mine') || 
        $initTdTag.classList.contains('clicked') ||
        $initTdTag.classList.contains('flag')
    ) {
      return;
    }
    $initTdTag.classList.add('clicked');
    if ($initTdTag.hasAttribute('num') ){
      return;
    } else{
      $initTdTag.setAttribute('num', '0');
    }
  
    openAround(trIndex-1, tdIndex-1, trList);
    openAround(trIndex-1, tdIndex, trList);
    openAround(trIndex-1, tdIndex+1, trList);
    openAround(trIndex, tdIndex-1, trList);
    openAround(trIndex, tdIndex+1, trList);
    openAround(trIndex+1, tdIndex-1, trList);
    openAround(trIndex+1, tdIndex, trList);
    openAround(trIndex+1, tdIndex+1, trList);
  }