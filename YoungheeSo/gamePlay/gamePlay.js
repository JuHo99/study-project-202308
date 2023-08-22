

const outputArray = ['출력','사랑','싹', '설산', '예수', '물방아 꽃', '사막', '끓는 열매', '얼음', '봄바람','마나님', '트럼프'];   
// const outputArray = ['출력'];   
const $textbox = document.getElementById('textBox');

const $startBtn = document.querySelector('.start-btn');
const $checkBtn = document.querySelector('.btn-check');
const $outputbg = document.querySelector('.read-Output');
const $timergauge = document.querySelector('.tiem-Gauge');

const $clockImg =document.querySelector('img');

const $content = document.getElementById('content');

const gameStartHandler=(e)=>{
    console.log('시작');

    $checkBtn.classList.add('inaction');
    $timergauge.classList.add('action');

    textLiBoxs(1);

    setTimeout(()=>{
        //여기부분 사진 나오도록 바꾸기
        console.log('끝');
    }, 20000)

    $outputbg.removeAttribute('style');
}

let $target = document.querySelector('.timer-box');

let $top= $target.getBoundingClientRect().top;
console.log(Math.floor($top));

$clockImg.setAttribute('style',`right: ${$top}px;` );

//ouputArray의 배열의 길이만큼 li 만들기
const textLiBoxs=(check)=>{   
    console.log(check, typeof check);

    outputArray.forEach(text => {
        const $newLi = document.createElement('li');
        $newLi.setAttribute('class', `index-${outputArray.indexOf(text)}`);
        // $newLi.setAttribute(`${tag}`, `${value} index-${outputArray.indexOf(text)}`);        
        
        if(check!==1) {
            $newLi.textContent='';
            $outputbg.setAttribute('style','background: #fff;');
            
            return;
        }
        
        $newLi.textContent=text;
        $textbox.appendChild($newLi); 
    });
}

const allremove=()=>{
    if(outputArray.length===0){
        alert('끝!!');
    }
}

textLiBoxs();

// 엔터이벤트
//user input에 text를 쳐서 outputArray배열의 문자를 치면 성공, 없다면 실패
const userInputTextHandler=()=>{
    
    const $userInput = document.querySelector('.write-userInput');
    const $textbox = document.getElementById('textBox');
    
    if(outputArray.includes($userInput.value)===false) {
        // $userInput.value='';
        $userInput.classList.add('typing-error');
        console.log('룰루');
        return;
    }

    $userInput.classList.remove('typing-error');
    
    //outputArray배열의 text의 indexnum 받아서 삭제
    console.log(outputArray.indexOf($userInput.value));
    outputArray.splice(outputArray.indexOf($userInput.value), 1);

    for(const $li of [...$textbox.children]){
        if($userInput.value===$li.textContent){
            console.log($li);
            $li.classList.add('no-see')                
        }            
    }

    if($userInput.value.trim()===''){
        console.log('빈칸');
        alert('빈칸!!!');
    }
        
    $userInput.value='';

    allremove();
}

$startBtn.addEventListener('click', gameStartHandler);

const $EnterInput = document.querySelector('.write-userInput');
$EnterInput.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
        userInputTextHandler();
    }
});











