function hardButtonClickHandler() {
    const boxIds = [
        { 1: '1', 2: '2', 3: '3' },
        { 1: '1', 2: '14', 3: '27' },
        { 1: '16', 2: '17' },
        { 1: '3', 2: '16' },
        { 1: '27', 2: '28' },
        { 1: '17', 2: '30', 3: '43' },
        { 1: '43', 2: '44', 3: '45' },
        { 1: '28', 2: '41', 3: '54', 4: '67' },
        { 1: '67', 2: '68', 3: '69' },
        { 1: '69', 2: '82' },
        { 1: '82', 2: '83', 3: '84', 4: '85', 5: '86' },
        { 1: '19', 2: '32', 3: '45' },
        { 1: '105', 2: '106', 3: '107', 4: '108' },
        { 1: '60', 2: '73', 3: '86' },
        { 1: '123', 2: '124' },
        { 1: '92', 2: '105' },
        { 1: '59', 2: '60', 3: '61', 4: '62' },
        { 1: '106', 2: '119' },
        { 1: '49', 2: '50', 3: '51', 4: '52' },
        { 1: '84', 2: '97', 3: '110', 4: '123' },
        { 1: '112', 2: '113', 3: '114', 4: '115' },
        { 1: '36', 2: '49', 3: '62' },
        { 1: '51', 2: '64', 3: '77', 4: '90', 5: '103' },
        { 1: '88', 2: '101', 3: '114', 4: '127' }
    ];
    const targetArray = [
        { 1: '가', 2: '해', 3: '자' },
        { 1: '가', 2: '치', 3: '관' },
        { 1: '각', 2: '별' },
        { 1: '자', 2: '각' },
        { 1: '관', 2: '여' },
        { 1: '별', 2: '안', 3: '간' },
        { 1: '간', 2: '담', 3: '회' },
        { 1: '여', 2: '지', 3: '없', 4: '이' },
        { 1: '이', 2: '윽', 3: '고' },
        { 1: '고', 2: '소' },
        { 1: '소', 2: '득', 3: '인', 4: '정', 5: '액' },
        { 1: '공', 2: '청', 3: '회' },
        { 1: '당', 2: '연', 3: '지', 4: '사' },
        { 1: '부', 2: '동', 3: '액' },
        { 1: '성', 2: '곽' },
        { 1: '분', 2: '당' },
        { 1: '어', 2: '부', 3: '지', 4: '리' },
        { 1: '연', 2: '지' },
        { 1: '타', 2: '이', 3: '레', 4: '놀' },
        { 1: '인', 2: '사', 3: '불', 4: '성' },
        { 1: '백', 2: '년', 3: '해', 4: '로' },
        { 1: '울', 2: '타', 3: '리' },
        { 1: '레', 2: '미', 3: '제', 4: '라', 5: '블' },
        { 1: '결', 2: '자', 3: '해', 4: '지' }
    ];
}





function nomalButtonClickHandler() {
    const boxIds = [
        { 1: '29', 2: '30', 3: '31', 4: '32' },
        { 1: '48', 2: '49', 3: '50', 4: '51' },
        { 1: '56', 2: '57', 3: '58', 4: '59' },
        { 1: '72', 2: '73', 3: '74', 4: '75' },
        { 1: '95', 2: '96', 3: '97', 4: '98' },
        { 1: '112', 2: '113', 3: '114', 4: '115' },
        { 1: '30', 2: '43', 3: '56', 4: '69' },
        { 1: '59', 2: '72', 3: '85', 4: '98' },
        { 1: '35', 2: '48', 3: '61', 4: '74' },
        { 1: '75', 2: '88', 3: '101', 4: '114' }
    ];
    const targetArray = [
        { 1: '거', 2: '두', 3: '절', 4: '미' },
        { 1: '불', 2: '철', 3: '주', 4: '야' },
        { 1: '동', 2: '분', 3: '서', 4: '주' },
        { 1: '반', 2: '신', 3: '반', 4: '의' },
        { 1: '시', 2: '의', 3: '적', 4: '절' },
        { 1: '소', 2: '리', 3: '장', 4: '도' },
        { 1: '두', 2: '문', 3: '불', 4: '출' },
        { 1: '야', 2: '반', 3: '도', 4: '주' },
        { 1: '십', 2: '시', 3: '일', 4: '반' },
        { 1: '의', 2: '미', 3: '심', 4: '장' }
    ];
    const wrongAnswer = compareTextAndArray(boxIds, targetArray);
    const combinedWrongAnswer = wrongAnswer.map(row => row.join('')).join(', ');
    console.log(combinedWrongAnswer);


    endGame(wrongAnswer)
}



function easyButtonClickHandler() {
    const boxIds = [
        { 1: '29', 2: '30', 3: '31' },
        { 1: '55', 2: '56', 3: '57' },
        { 1: '44', 2: '45', 3: '46' },
        { 1: '59', 2: '60', 3: '61' },
        { 1: '98', 2: '99', 3: '100', 4: '101' },
        { 1: '31', 2: '44', 3: '57' },
        { 1: '56', 2: '69', 3: '82' },
        { 1: '46', 2: '59', 3: '72' },
        { 1: '35', 2: '48', 3: '61' },
        { 1: '75', 2: '88', 3: '101', 4: '114' }

    ];
    const targetArray = [
        { 1: '기', 2: '러', 3: '기' },
        { 1: '오', 2: '솔', 3: '길' },
        { 1: '차', 2: '고', 3: '지' },
        { 1: '구', 2: '렁', 3: '이' },
        { 1: '이', 2: '구', 3: '아', 4: '나' },
        { 1: '기', 2: '차', 3: '길' },
        { 1: '솔', 2: '방', 3: '울' },
        { 1: '지', 2: '구', 3: '본' },
        { 1: '지', 2: '렁', 3: '이' },
        { 1: '호', 2: '랑', 3: '나', 4: '비' },
    ];
    const wrongAnswer = compareTextAndArray(boxIds, targetArray);
    const combinedWrongAnswer = wrongAnswer.map(row => row.join('')).join(', ');
    console.log(combinedWrongAnswer);


    endGame(wrongAnswer)
}
