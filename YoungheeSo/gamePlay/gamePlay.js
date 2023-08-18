


const outputArray = ['출력','사랑','싹', '설산', '예수', '물방아 꽃', '사막', '끓는 열매', '얼음', '봄바람','마나님', '트럼프'];   

//ouputArray의 배열의 길이만큼 li 만들기
outputArray.forEach(text => {
    const $textbox = document.getElementById('textBox');
    const $newLi = document.createElement('li');

    $newLi.textContent=text;
    $textbox.appendChild($newLi);
    
    console.log(text);
});

//user input에 text를 쳐서 outputArray배열의 문자를 치면 성공, 없다면 실패
const userInputText={
    
}





