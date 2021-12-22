import * as modul from './modul.js';

document.querySelector('.btn__add').addEventListener('click',function(){

    let input1 = document.querySelector('#radio1').value;
    let input2 = document.querySelector('#radio2').value;
    let input3 = document.querySelector('#radio3').value;
    let iText = document.querySelector('.inp__text').value;
    let area = document.querySelector('.area');

 

    if(document.querySelector('#radio1').checked){
        if(iText > modul.beer){
            document.querySelector('h1').innerText = `Вибачте але на складі залишилося beer ${modul.beer}`; 
            document.querySelector('.error').style.display = "block";
        }
        else {
            area.innerHTML += 
            `<p>${input1}: ${iText} шт.</p>`;
        }
    }
    if(document.querySelector('#radio2').checked){
       if(iText > modul.wine){
        document.querySelector('h1').innerText = `Вибачте але на складі залишилося wine ${modul.wine}`; 
        document.querySelector('.error').style.display = "block";
    }
    else {
        area.innerHTML += 
        `<p>${input2}: ${iText} шт.</p>`;
    }
    }
    if(document.querySelector('#radio3').checked){
        if(iText > modul.pepsi){
            document.querySelector('h1').innerText = `Вибачте але на складі залишилося pepsi ${modul.pepsi}`; 
            document.querySelector('.error').style.display = "block";
        }
        else {
            area.innerHTML += 
            `<p>${input3}: ${iText} шт.</p>`;
        }
    }
    modul.sumTovar();
    document.querySelector('.inp__text').value = "";
})

document.querySelector('.btn__buy').addEventListener('click',function(){
    let copyArea = document.querySelector('.area').innerHTML;
    modul.s();
    document.querySelector('.box3').innerHTML = copyArea;
    document.querySelector('.box3').innerHTML += `<p>Всього: ${modul.many__} грн</p>`;
    document.querySelector('#many').textContent = `${modul.manyU}`
    document.querySelector('#beer').textContent = `${modul.beer}`
    document.querySelector('#wine').textContent = `${modul.wine}`
    document.querySelector('#pepsi').textContent = `${modul.pepsi}`
    document.querySelector('.area').innerHTML = "";
})

document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.error').style.display = "none";
})









