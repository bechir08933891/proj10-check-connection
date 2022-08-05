let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');
let cnt = document.querySelector('.container');

function onLines(){
    title.innerHTML = 'onLine';
    cnt.style.border = '5px solid #7fff00';
    title.style.color = '#7fff00';
    ul.classList.add('hide');
    reload.classList.add('hide');

}

function offLines(){
    title.innerHTML = 'offLine';
    cnt.style.border = '5px solid #666';
    title.style.color = '#555';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}

// check the connection
window.onload = function(){
    if (window.navigator.onLine) {
        onLines();
    } else {
        offLines();
    }
}
// those 2 linesto automatic reload
window.addEventListener("online", function(){
    onLines();
});
window.addEventListener("offline", function(){
    offLines();
});

// reload button
reload.onclick = function(){
    window.location.reload;
}