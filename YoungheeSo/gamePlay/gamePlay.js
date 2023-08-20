

// const outputArray = ['출력','사랑','싹', '설산', '예수', '물방아 꽃', '사막', '끓는 열매', '얼음', '봄바람','마나님', '트럼프'];   
const outputArray = ['출력'];   
const $textbox = document.getElementById('textBox');

//ouputArray의 배열의 길이만큼 li 만들기
const textLiBoxs=()=>{    
    outputArray.forEach(text => {
        const $newLi = document.createElement('li');
        $newLi.setAttribute('class', `index-${outputArray.indexOf(text)}`);
        // $newLi.setAttribute(`${tag}`, `${value} index-${outputArray.indexOf(text)}`);        
        
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

    // const $newLi = document.ele('li');
    // const $textli =  $textbox.createElement('li');
    
    outputArray.forEach(textBox => {
        if(textBox!==$userInput.value) return;

        // console.log($textbox.querySelector('li').textContent);
        
        //outputArray배열의 text의 indexnum 받아서 삭제
        console.log(outputArray.indexOf(textBox));
        outputArray.splice(outputArray.indexOf($userInput.value), 1);
        console.log(textBox);

        // console.log($userInput.value);
        console.log(outputArray);

        
        for(const $li of [...$textbox.children]){
            if(textBox===$li.textContent){
                console.log($li);
                $li.classList.add('no-see')                
            }            
            // $textbox.removeChild($li);
        }    
    });

    // if(outputArray.length===0){
    //      alert('끝!!');
    //  }
    
    if($userInput.value.trim()===''){
        console.log('빈칸');
        alert('빈칸!!!');
    }

    // if(outputArray.length===0){
    // }

    $userInput.value='';
    allremove();
}



const $EnterInput = document.querySelector('.write-userInput');
$EnterInput.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
        userInputTextHandler();
    }
});










