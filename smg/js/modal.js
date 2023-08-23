var closeRtn = function () {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';

}

// modal 창을 보여줌
btnOpen.onclick = function () {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';

}

btnCheck.onclick = closeRtn;
btnClose.onclick = closeRtn;