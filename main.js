
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
let select = document.getElementById('language')
let header_nav = document.getElementById('header_nav')
let activeLi = document.getElementById('activeLi')
let mainPage_textPart_ul = document.getElementById('mainPage_textPart_ul')
let header_themeChangerCircle = document.getElementById('header_themeChangerCircle')
function updateTheme() {
    if (theme === 'light') {
        header_themeChanger.style.justifyContent = 'flex-end'
        wrap.style.backgroundColor = '#000'
        select.style.backgroundColor = '#000'
        select.style.color = '#534EC6'
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
    } else {
        header_themeChanger.style.justifyContent = 'flex-start'
        wrap.style.backgroundColor = '#fff'
        select.style.backgroundColor = '#fff'
        select.style.color = '#363466'
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
