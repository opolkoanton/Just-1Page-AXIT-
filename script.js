const txt1 = document.getElementById('txt1');
const txt2 = document.getElementById('txt2');
const txt3 = document.getElementById('txt3');

let buttons = document.querySelectorAll('.txtBtn'); //Создаём переменную и записываем в неё три необходимые кнопки
for (let x = 0; x < buttons.length; x++) { //Перебираем массив кнопок
    buttons[x].addEventListener('click', function () {
        changeText(event)
    }); //Присоединяем к каждой кнопке обработчик событий с функцией, в которую передаём событийный объект EVENT
}

function changeText(e) {
    console.log(e.target.className); //Выводим в консоль объект EVENT.поле TARGET.поле CLASS NAME 
    if (e.target.className == 'tab1  txtBtn') { //Сравниваем имя полученного класса с классом кнопки
        txt1.style = 'display: block';
        txt2.style = 'display: none';
        txt3.style = 'display: none';
    } else if (e.target.className == 'tab2  txtBtn') {
        txt1.style = 'display: none';
        txt2.style = 'display: block';
        txt3.style = 'display: none';
    } else if (e.target.className == 'tab3  txtBtn') {
        txt1.style = 'display: none';
        txt2.style = 'display: none';
        txt3.style = 'display: block';
    }
}

//////////////////////////////
/* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function alarma() {
    alert("DOESN`T WORK)")
}

// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
function showModal() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}