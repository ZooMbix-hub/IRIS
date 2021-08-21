

// ================= TABS_1 ================= //

const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsItems = document.querySelectorAll('.tabs__item')
tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if ( !currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    })
})
document.querySelector('.tabs__nav-btn').click();


// ================= SLIDER ================= //

const imagesSliders = document.querySelectorAll('.slider_2 .slider-line .slider_2');
const sliderLine = document.querySelector('.slider_2 .slider-line');
let count = 0;
let width;
function init() {
    width = document.querySelector('.slider_2').offsetWidth;
    sliderLine.style.width = width * imagesSliders.length + 'px';
    imagesSliders.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}
init();
window.addEventListener('resize', init);
document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= imagesSliders.length) {
        count = 0;
    }
    rollSlider();
});
document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = imagesSliders.length - 1;
    }
    rollSlider();
});
function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}


// ================= TABS_2 ================= //

const tabsBtn_2 = document.querySelectorAll('.tabs_2__nav-btn');
const tabsItems_2 = document.querySelectorAll('.tabs_2__item')
tabsBtn_2.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn_2 = item;
        let tabId_2 = currentBtn_2.getAttribute("data-tab");
        let currentTab_2 = document.querySelector(tabId_2);
        if ( !currentBtn_2.classList.contains('active') ) {
            tabsBtn_2.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems_2.forEach(function (item) {
                item.classList.remove('active');
            });
            currentBtn_2.classList.add('active');
            currentTab_2.classList.add('active');
        }
    })
})
document.querySelector('.tabs_2__nav-btn').click();


// ================= TABS_3 ================= //

const tabsBtn_3 = document.querySelectorAll('.tabs_3__nav-btn');
const tabsItems_3 = document.querySelectorAll('.tabs_3__item')
tabsBtn_3.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn_3 = item;
        let tabId_3 = currentBtn_3.getAttribute("data-tab");
        let currentTab_3 = document.querySelector(tabId_3);
        if ( !currentBtn_3.classList.contains('active') ) {
            tabsBtn_3.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems_3.forEach(function (item) {
                item.classList.remove('active');
            });
            currentBtn_3.classList.add('active');
            currentTab_3.classList.add('active');
        }
    })
})
document.querySelector('.tabs_3__nav-btn').click();



// ================= ADD SELECT ================= (all)//

var tabs_3__content__selects = document.querySelector('.tabs_3__content__selects');

const listOption = {
    s4: "Нет",
    s5: "Интерактивные видеоуроки",
    s6: "Автоматические предзаказы",
    s7: "Видео аналитика",
    s8: "Оценка эффективности рекламы",
}

let number = 0;

function aboba () {

    let add__select = document.querySelector(".add__select");
    add__select.onclick = () => {

        // Блок селектора и сценария
        var blockSelects = document.createElement('div');
        blockSelects.classList.add('block__selects');
        
        // Сценарий
        var scenario = document.createElement('p');
        scenario.textContent = "Сценарий роста бизнеса";
        scenario.classList.add('label__tabs');
    
        // Кнопка удаления селектора и сценария
        var btnClose = document.createElement('button');
        btnClose.classList.add('delete__select');
        var img_close_select = document.createElement('img');
        img_close_select.src = 'img/delete__select.png';
        btnClose.appendChild(img_close_select);
        
        // Селектор
        var select = document.createElement('select');
        select.classList.add('select__border');
        for (let key in listOption) {
            var textOption = listOption[key];
            var option = document.createElement('option');
            option.textContent = textOption;
            option.value = key;
            select.appendChild(option);
        }  
    
        // Добавление элментов в блок селектора
        blockSelects.append(scenario);
        blockSelects.append(btnClose);
        blockSelects.append(select);
    
        // Добавление блока селектора в род. блок
        tabs_3__content__selects.append(blockSelects);

        // Удаление селектора и сценария
        const clickHandler = function() {
            this.parentElement.remove();
            if (number == 2) {
                let add__select = document.createElement('button');
                add__select.classList.add('add__select');
                add__select.innerHTML = "Добавить сценарий";
                tabs_3__content__selects.after(add__select);

                aboba ();
            }
            number--;
        }
        document.querySelectorAll('.delete__select').forEach(cross => cross.onclick = clickHandler);

        // Максимальное кол-во блоков селекторов
        number++;
        if (number == 2) {
            add__select.remove();
        }
    }
}

aboba ();



// ================= PROGRESS_BAR ================= //

var progressBar = document.getElementById("myRange");
var output = document.getElementById("demo");

output.addEventListener('blur', function () {
    progressBar.value = output.value;
    console.log();
})

progressBar.oninput = function() {
    output.value = this.value;
}



// ================= POPUP ================= //

$('.model').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(500);
    $('html').addClass('no-scroll');
});


$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(500);
    $('html').removeClass('no-scroll');
});











/* Блок слайдер сфер бизнеса (слайдер для мобайл) */

