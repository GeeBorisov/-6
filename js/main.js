/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block"; 
}

/* slider2 */
let slideIndex1 = 1;

showSlides1(slideIndex1);
function nextSlide1() {
    showSlides1(slideIndex1 += 1);
}
function previousSlide1() {
    showSlides1(slideIndex1 -= 1);
}
function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}
function showSlides1(n) {
    let slides1 = document.getElementsByClassName("item1");
    if (n > slides1.length) {
        slideIndex1 = 1
    }
    if (n < 1) {
        slideIndex1 = slides1.length
    }
    for (let slide of slides1) {
        slide.style.display = "none";
    }
    slides1[slideIndex1 - 1].style.display = "block"; 
}

/* slider3 */
let slideIndex2 = 1;

showSlides2(slideIndex2);
function nextSlide2() {
    showSlides2(slideIndex2 += 1);
}
function previousSlide2() {
    showSlides2(slideIndex2 -= 1);
}
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
    let slides2 = document.getElementsByClassName("item2");
    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (let slide of slides2) {
        slide.style.display = "none";
    }
    slides2[slideIndex2 - 1].style.display = "block"; 
}

/* popup header */

const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

const openPopUpSingup = document.getElementById('open_pop_up-singup');
const closePopUpSingup = document.getElementById('pop_up_close-singup');
const popUpSingup = document.getElementById('pop_up-singup');


/* Login */
openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

/* Sing UP */
openPopUpSingup.addEventListener('click', function(e){
    e.preventDefault();
    popUpSingup.classList.add('active');
})

closePopUpSingup.addEventListener('click', () => {
    popUpSingup.classList.remove('active');
})



/* popup footer */

const openPopUpFooter = document.getElementById('open_pop_up-footer');
const closePopUpFooter = document.getElementById('pop_up_close-footer');
const popUpFooter = document.getElementById('pop_up-footer');

const openPopUpSingupFooter = document.getElementById('open_pop_up_singup-footer');
const closePopUpSingupFooter = document.getElementById('pop_up_close-singup-footer');
const popUpSingupFooter = document.getElementById('pop_up-singup-footer');


/* Login */
openPopUpFooter.addEventListener('click', function(e) {
    e.preventDefault();
    popUpFooter.classList.add('active');
})

closePopUpFooter.addEventListener('click', () => {
    popUpFooter.classList.remove('active');
})

/* Sing UP */
openPopUpSingupFooter.addEventListener('click', function(e){
    e.preventDefault();
    popUpSingupFooter.classList.add('active');
})

closePopUpSingupFooter.addEventListener('click', () => {
    popUpSingupFooter.classList.remove('active');
})
