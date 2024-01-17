
//the mouse picture animation
let mouse = document.getElementById('mouse');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let line4 = document.getElementById('line4');
let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');
mouse.addEventListener('mouseover', ()=>{
    mouse.style.transform = 'rotate(0deg)';
    mouse.style.width = '200px';
    mouse.style.top = '215px';
    setTimeout(() => {
        line1.style.width = '200px';
        line2.style.width = '170px';
        line3.style.width = '230px';
        line4.style.width = '295px';
    }, 800);
    setTimeout(() => {
        text1.style.opacity = '1';
        text2.style.opacity = '1';
        text3.style.opacity = '1';
        text4.style.opacity = '1';
    }, 1200);
});
mouse.addEventListener('mouseout', ()=>{
    setTimeout(() => {
        text1.style.opacity = '0';
        text2.style.opacity = '0';
        text3.style.opacity = '0';
        text4.style.opacity = '0';
    }, 100);
    setTimeout(() => {
        line1.style.width = '0px';
        line2.style.width = '0px';
        line3.style.width = '0px';
        line4.style.width = '0px';
    }, 800);
    setTimeout(() => {
        mouse.style.transform = 'rotate(-16deg)';
        mouse.style.width = '250px';
        mouse.style.top = '230px';
    }, 1200);
});


//theme changing and saving
let theme = localStorage.getItem('theme') || 'light';
let header_themeChanger = document.getElementById('header_themeChanger');
let wrap = document.getElementById('wrap');
let header_nav = document.getElementById('header_nav')
let activeLi = document.getElementById('activeLi')
let mainPage_textPart_ul = document.getElementById('mainPage_textPart_ul')
let header_themeChangerCircle = document.getElementById('header_themeChangerCircle')
let contactsFooter_privacyPolicy = document.getElementById('contactsFooter_privacyPolicy')
let header_langiageAndTheme_languageCon = document.getElementById('header_langiageAndTheme_languageCon')
function updateTheme() {
    if (theme === 'light') {
        header_themeChanger.style.justifyContent = 'flex-end'
        wrap.style.backgroundColor = '#000'
        header_nav.style.color = '#534EC6'
        activeLi.style.backgroundColor = '#534EC6'
        activeLi.style.boxShadow = '3px 3px 3px #726ce9dd'
        mainPage_textPart_ul.style.color = '#534EC6'
        mainPage_textPart_h1.style.color = '#534EC6'
        mainPage_textPart_h2.style.color = '#534EC6'
        header_themeChangerCircle.style.backgroundColor = '#000'
        text1.style.color = '#000'
        text2.style.color = '#000'
        text3.style.color = '#000'
        text4.style.color = '#000'
        line1.style.background = 'linear-gradient(to right,  #000000, #363466, #4e4ca4, #000)'
        line2.style.background = 'linear-gradient(to right,  #000000, #363466, #4e4ca4, #000)'
        line3.style.background = 'linear-gradient(to right,  #000000, #363466, #4e4ca4, #000)'
        line4.style.background = 'linear-gradient(to right,  #000000, #363466, #4e4ca4, #000)'
        contactsFooter_privacyPolicy.style.color = '#a0a0a0'
        header_langiageAndTheme_languageCon.style.color = '#534EC6'

    } else {
        header_themeChanger.style.justifyContent = 'flex-start'
        wrap.style.backgroundColor = '#fff'
        header_nav.style.color = '#363466'
        activeLi.style.backgroundColor = '#363466'
        activeLi.style.boxShadow = '3px 3px 3px #00000067'
        mainPage_textPart_ul.style.color = '#363466'
        mainPage_textPart_h1.style.color = '#363466'
        mainPage_textPart_h2.style.color = '#363466'
        header_themeChangerCircle.style.backgroundColor = '#fff'
        text1.style.color = '#fff'
        text2.style.color = '#fff'
        text3.style.color = '#fff'
        text4.style.color = '#fff'
        line1.style.background = 'linear-gradient(to right,  #000000, #363466, #817CF2, #ffffff)'
        line2.style.background = 'linear-gradient(to right,  #000000, #363466, #817CF2, #ffffff)'
        line3.style.background = 'linear-gradient(to right,  #000000, #363466, #817CF2, #ffffff)'
        line4.style.background = 'linear-gradient(to right,  #000000, #363466, #817CF2, #ffffff)'
        contactsFooter_privacyPolicy.style.color = '#303030'
        header_langiageAndTheme_languageCon.style.color = '#363466'
    }
}
document.addEventListener('DOMContentLoaded', () => {
    updateTheme();
});
header_themeChanger.addEventListener('click', () => {
    if (theme === 'light') {
        theme = 'dark';
    } else {
        theme = 'light';
    }
    localStorage.setItem('theme', theme);
    updateTheme();
});


//language changer 
let semanticCore ={
    main: {
        "en": "Home",
        "ukraine": "Головна",
    },
    goods: {
        "en": "Goods",
        "ukraine": "Товари",
    },
    basket: {
        "en": "Basket",
        "ukraine": "Кошик",
    },
    contacts: {
        "en": "Contacts",
        "ukraine": "Контакти",
    },
    mainPage_textPart_h1: {
        "en": "The new one",
        "ukraine": "Новітня розробка",
    },
    mainPage_textPart_h2: {
        "en": "Wide functionality, rich, practical and unique design. Two connection types and multiple instance colors!",
        "ukraine": "Широкий функціонал, багатий, практичний та унікальний дизайн. Два типи підключення та декілька кольорів екземплярів!",
    },
    li1: {
        "en": "quality case and reliable ring",
        "ukraine": "якісний корпус та надійне кільце",
    },
    li2: {
        "en": "convenient use and form",
        "ukraine": "зручне використання та форма",
    },
    li3: {
        "en": "rich functionality in all areas",
        "ukraine": "багатий функціонал в усіх сферах",
    },
    li4: {
        "en": "different types of connection",
        "ukraine": "різні типи підключення",
    },
    li5: {
        "en": "wireless type",
        "ukraine": "бездротовий тип",
    },
    li6: {
        "en": "two types of connection",
        "ukraine": "два види з’єднання",
    },
    mainPage_textPart_button1: {
        "en": "More",
        "ukraine": "Детальніше",
    },
    mainPage_textPart_button2: {
        "en": "Buy",
        "ukraine": "Замовити",
    },
    text1: {
        "en": "Scroll bar",
        "ukraine": "Колосо прокрутки",
    },
    text2: {
        "en": "Right button",
        "ukraine": "Права кнопка",
    },
    text3: {
        "en": "Left button",
        "ukraine": "Ліва кнопка",
    },
    text4: {
        "en": "Side button",
        "ukraine": "Бічна кнопка",
    },
    privacyPolicy: {
        "en": `QQC is the main service for the sale of computer equipment in Ukraine. All rights reserved.`,
        "ukraine":  `QQC - головний сервіс продажу комп’ютерної техніки в Україні. Усі права захищено.`,
    },
}

let allLang = ['ukraine', 'en'];
let lang = 'ukraine'

en.onclick = function(){
    lang = 'en'
    console.log(lang)
    changeUrl()
}
ukraine.onclick = function(){
    lang = 'ukraine'
    console.log(lang)
    changeUrl()
}
function changeUrl(){
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = (window.location.hash).substring(1)
    console.log(hash)
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#ukraine'
        location.reload();
    }

    for(let key in semanticCore){
        document.querySelector('.language-' + key).innerText = semanticCore[key][hash]
    }
}

changeLanguage()