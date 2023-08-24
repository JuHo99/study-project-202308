// import { closeModal } from "./modal";

const btnCheck = document.getElementById('btnCheck');
const modal = document.getElementById('modal');

var tc = 21 // tile count (must be odd number) 가로,세로 타일의 개수
var gs = 0 // grid size 
var field // map position array which value is 0 for wall, 1~2 for way
var px = (py = 1) // 0 <= px,py < tc
var xv = (yv = 0)
var tracker
var stack
var stucked

var x = 0, y = 1;
var count = 0;

document.addEventListener('keydown', keyPush)
btnCheck.onclick = inputSize;

function initialize() {
    document.getElementById('sizeInput').value = tc
    make2DArray()

    ctx.fillStyle = 'black'
    canv.width = canv.height = tc * gs
    ctx.fillRect(0, 0, canv.width, canv.height)

    // 시작지점 만들기
    makeWay(0, 1)
    // 출구 만들기
    // makeWay(tc - 1, Math.floor(Math.random() * (tc - 1)) + 1)
    makeWay(tc - 1, tc - 2)

    px = py = 1
    // tracker initial position
    tracker = { x: px, y: py }
    stack = []
    stack.push(tracker)
    stucked = false
    randomMazeGenerator()

    // 출구 설정(파란색으로)
    x = tc - 1
    y = tc - 2
    ctx.fillStyle = 'blue'
    ctx.fillRect(x * gs, y * gs, gs, gs)

    x = 0
    y = 1
    // character initial position, 캐릭터 포지션 설정
    ctx.fillStyle = 'red'

    ctx.fillRect(x * gs, y * gs, gs, gs)
}

function inputSize() {
    var sizeInput = document.getElementById('sizeInput').value
    if (sizeInput.length === 0) return;
    if (sizeInput % 2 == 0) {
        alert('미로 사이즈는 홀수만 입력해주세요!')
    } else if (sizeInput < 5) {
        alert('미로 사이즈는 최소 5입니다!')
    } else if (sizeInput > 30) {
        alert('미로 사이즈는 최대 29입니다!')
    } else {
        tc = sizeInput
        canv = document.getElementById('maze')
        ctx = canv.getContext('2d')
        setXY();
        document.getElementById('count').innerHTML = '이동횟수: 0';
        initialize()
        closeModal()
    }
}

function makeWay(xx, yy) {
    //console.log("makeWay: " + xx + " " + yy);
    field[yy][xx]++
    ctx.fillStyle = 'white'
    ctx.fillRect(xx * gs, yy * gs, gs, gs)
}

function keyPush(evt) {
    if (modal.style.display === 'block') return;
    switch (evt.keyCode) {
        case 37:
            xv = -1
            yv = 0
            break
        case 38:
            xv = 0
            yv = -1
            break
        case 39:
            xv = 1
            yv = 0
            break
        case 40:
            xv = 0
            yv = 1
            break
        default: return;
    }
    x += xv
    y += yv
    if (x < 0 || x > tc - 1 || y < 0 || y > tc - 1 || field[y][x] == 0) {
        x -= xv
        y -= yv
        return
    } else {
        ctx.fillStyle = 'red'
        ctx.fillRect(x * gs, y * gs, gs, gs)
        ctx.fillStyle = 'white'
        ctx.fillRect((x - xv) * gs, (y - yv) * gs, gs, gs)
        setXY();
        count++;
        document.getElementById('count').innerHTML = '이동횟수 : ' + count;
        if (x == tc - 1 && y == tc - 2) {
            alert(`탈출 성공! \n이동횟수: ${count}회`);
            count = 0;
            modal.style.display = 'block';
            initialize()
        }
    }
}

function make2DArray() {
    // console.log('tc: ' + tc)
    field = new Array(parseInt(tc))
    for (var i = 0; i < field.length; i++) {
        field[i] = new Array(parseInt(tc))
    }
    // console.log('field length: ' + field.length)
    for (var i = 0; i < field.length; i++) {
        for (var j = 0; j < field[i].length; j++) {
            field[i][j] = 0 // value of 0 is for not visited, 1 for visited, 2 for backtracked.
        }
    }
    // console.log('field: ' + field)
}

function randomMazeGenerator() {
    var cnt = 0
    while (stack.length > 0) {
        if (stucked) backtracking()
        else tracking()
        // console.log("cnt: " + cnt++);
    }
}

function tracking() {
    /* Random Move */
    key = Math.floor(Math.random() * 4)
    switch (key) {
        case 0: // left move
            xv = -2
            yv = 0
            break
        case 1: // up move
            xv = 0
            yv = -2
            break
        case 2: // right move
            xv = 2
            yv = 0
            break
        case 3: // down move
            xv = 0
            yv = 2
            break
    }

    px += xv
    py += yv
    if (px < 0 || px > tc - 1 || py < 0 || py > tc - 1) {
        px -= xv
        py -= yv
        return
    }
    if (field[py][px] < 1) {
        makeWay(px - xv / 2, py - yv / 2)
        makeWay(px, py)
        tracker = { x: px, y: py }
        stack.push(tracker)
        blockCheck()
    } else {
        px -= xv
        py -= yv
        return
    }
}

function blockCheck() {
    var blockCount = 0
    if (py + 2 > tc - 1 || field[py + 2][px] != 0) blockCount++
    if (py - 2 < 0 || field[py - 2][px] != 0) blockCount++
    if (px + 2 > tc - 1 || field[py][px + 2] != 0) blockCount++
    if (px - 2 < 0 || field[py][px - 2] != 0) blockCount++
    if (blockCount >= 4) stucked = true
    else stucked = false
}

function backtracking() {
    var backtracker = stack.pop()
    px = backtracker.x
    py = backtracker.y
    //field[py][px]++;
    //ctx.fillStyle="blue";
    //ctx.fillRect(px*gs,py*gs,gs, gs);
    blockCheck()
}

function setXY() {
    document.getElementById('text').innerHTML =
        'x좌표: ' + x + ' y좌표: ' + y
}

function closeModal() {
    modal.style.display = 'none';
}