
const outputArray = ['출력','사랑','싹', '설산', '예수', '물방아 꽃', '사막', '해바라기', '얼음', '봄바람','마나님', '나그네'];   
// const outputArray = ['출력'];

const $textbox = document.getElementById('textBox');

const $setblack = document.querySelector('.setGame-before');
const $outputbg = document.querySelector('.read-Output');
const $timergauge = document.querySelector('.tiem-Gauge');

const $timeOver = document.querySelector('.game-over');
const $content = document.getElementById('content');
const $readInput = document.querySelector('input');

const $setgame=document.querySelector('.game-Explanation');


// let secode = new Date().getUTCSeconds()+1
// let ikonwhour=(secode/secode)*20

//타이머 게이지 변수
let num=0;
let setTime=20;
let secode;

//게임 시작 화면 세팅
const textLiBoxs=(check)=>{   
    console.log(check, typeof check);

    outputArray.forEach(text => {
        const $newLi = document.createElement('li');

        if(!check) {
            $outputbg.setAttribute('style','background: #fff;');
            $textbox.appendChild($newLi);
            return;        
        }
        
        $newLi.textContent=text; 
        $textbox.appendChild($newLi);       
    });
}

textLiBoxs();

//게임 시작 버튼 클릭시 이벤트
const gameStartHandler=(e)=>{    
    [...$textbox.children].forEach($text=>{
        $textbox.removeChild($text);
    });

    textLiBoxs(1);  
    
    $setblack.classList.add('inaction');
    $setgame.classList.add('inaction');
    
    $timergauge.classList.add('action');
    $outputbg.removeAttribute('style');

    GameReslut();    
}


//게임 성공, 실패 이벤트
const GameReslut=()=>{
    const $GameClearTime = document.querySelector('.recordTimer');
    const $FindGameClear = document.querySelector('.game-clear');

    // 1초마다 반복
    let timerId = setInterval(()=>{   
        if(secode<0) return;

        secode=(setTime-1)-(num++);        
        console.log(secode, num); //type number        

    },1000);  

    // setTime이 다 지나가면 실행
    let timeOut=setTimeout(()=>{        
        if(outputArray.length>0){
            console.log('끝');
            // $readInput.value=`실패`;

            $timeOver.classList.add('setGame');
            $setblack.classList.remove('inaction');        
        }
        
    }, setTime*1000);
    
    let quarter = setInterval(()=>{
        if(secode>=0 && outputArray.length===0){
            $timergauge.classList.remove('action');
            $FindGameClear.classList.add('action');
            $setblack.classList.remove('inaction');

            // $readInput.value=`걸린 시간: ${setTime-secode+1}초`;
            $GameClearTime.textContent = `${setTime-secode+1}초 만에 찾았다!`;
            
            clearInterval(timerId);
            clearInterval(quarter);

            clearTimeout(timeOut);
            
        }
    }, 100);

}

//outputArray배열의 text를 맞게 치면 성공, 오타가 나면 실패
const userInputTextHandler=()=>{    
    const $userInput = document.querySelector('.write-userInput');
    // const $textbox = document.getElementById('textBox');
    
    if(!outputArray.includes($userInput.value)) {
        $userInput.classList.add('typing-error');
        console.log('오타');

        if($userInput.value.trim()===''){
            console.log('빈칸');
        }
        return;
    }

    $userInput.classList.remove('typing-error');
    
    //outputArray배열의 text의 index번호를 받아서 삭제
    console.log('인덱스번호: ',outputArray.indexOf($userInput.value));
    outputArray.splice(outputArray.indexOf($userInput.value), 1);

    for(const $li of [...$textbox.children]){
        if($userInput.value===$li.textContent){
            console.log($li);
            $li.classList.add('no-see')                
        }            
    }
    $userInput.value='';
}

//이벤트 핸들러
const $startBtn = document.querySelector('.start-btn');
$startBtn.addEventListener('click', gameStartHandler);

const $EnterInput = document.querySelector('.write-userInput');
$EnterInput.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
        userInputTextHandler();
    }
});
