window.addEventListener('DOMContentLoaded', function() {
'use strict';
let infoHeader = document.querySelector('.info-header');
console.log(infoHeader);
let infoHeaderTab = document.getElementsByClassName('info-header-tab');
console.log(infoHeaderTab);
let infoTabcontent = document.getElementsByClassName('info-tabcontent');
console.log(infoTabcontent);


function hideinfoTabcontent (a) {
    for (let i = a; i < infoTabcontent.length; i++) {
        infoTabcontent[i].classList.remove('show');
        infoTabcontent[i].classList.add('hide');
    }
}
hideinfoTabcontent(1);

function showinfoTabcontent(b) {
    for (let i = b; i<infoTabcontent.length; i++) {
        infoTabcontent[i].classList.remove('hide');
        infoTabcontent[i].classList.add('show');
        break;
    }
}


infoHeader.addEventListener('click', function (event) {
    let target = event.target;
    for (let i = 0; i < infoHeaderTab.length; i++) {
        if(target == infoHeaderTab[i]) {
            console.log('yes');
            hideinfoTabcontent(0);
            showinfoTabcontent(i);
        }
    }
});

//Timer

let deadLine = '07.06.2020';

function getTimeRemaining(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date());

    let hours = Math.floor( (t/(1000*60*60)) ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        seconds = Math.floor( (t/1000) % 60 );
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
}

function setClock (id, endTime) {
    let timerEl = document.getElementById(id);
    let hoursEleme = document.querySelector('.hours');
    let minEleme = document.querySelector('.minutes');
    let secEleme = document.querySelector('.seconds');
    
    let timerId = setInterval(updateClock, 1000);

    function updateClock () {
        let x = getTimeRemaining(endTime);

        hoursEleme.textContent = x.hours;
        minEleme.textContent = x.minutes;
        secEleme.textContent = x.seconds;

        for (let i = 0; i <= timerEl.children.length; i++) {
            if(i % 2 == 0) {
                if(timerEl.children[i].textContent.length < 2) {
                    timerEl.children[i].textContent = '0' + timerEl.children[i].textContent;
                }
            }
        }

        if (x.total <= 0) {
            clearTimeout(timerId);
        }
        
    }
    

}
setClock('timer', deadLine);

//Modal window:
let descriptionBtns = document.querySelectorAll('.description-btn'),
    overlay = document.querySelector('.overlay'),
    popupClose = document.querySelector('.popup-close'),
    more = document.querySelector('.more');

//обработчик на кнопке под таймером
more.addEventListener('click', function(){
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

//обработчик на все кнопки, там где табы:
descriptionBtns.forEach(function(a) {
    a.addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    });
});

//обработчик на крестик модального окна для его закрытия:
popupClose.addEventListener('click', function(){
    if(this) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
});

//обработчик при нажатии пространства вне модального окна для его закрытия:
overlay.addEventListener('click', function(event){
    let target = event.target;
    if(this == target) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    } else {
        console.log('hui');
    }
});

});