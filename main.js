let mouse = document.getElementById('mouse');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2');
let line3 = document.getElementById('line3');
let line4 = document.getElementById('line4');
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

});
mouse.addEventListener('mouseout', ()=>{

    setTimeout(() => {
        mouse.style.transform = 'rotate(-16deg)';
        mouse.style.width = '250px';
        mouse.style.top = '230px';
    }, 800);


    line1.style.width = '0px';
    line2.style.width = '0px';
    line3.style.width = '0px';
    line4.style.width = '0px';
});