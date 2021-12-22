

let many = 1000;
let beer = 90;
let wine = 45;
let pepsi = 70;

let many__;


let beerOne = 16, wineOne = 45, pepsiOne = 20;
let manyU,beerU = 0, pepsiU = 0, wineU = 0;


function sumTovar() {
  
    let iText = document.querySelector('.inp__text').value;
    if (document.querySelector('#radio1').checked) {
        console.log('input1');
        if (iText > beer) {
            console.log('error');
        }
        else {
            beer -= Number(iText);
            beerU = beerOne * Number(iText);
            console.log(beerU);
        }
    }
    if (document.querySelector('#radio2').checked) {
        console.log('input2');
        if (iText > wine) {
            console.log('error');
        }
        else {
            wine -= Number(iText);
            wineU = wineOne * Number(iText);
            console.log(wineU);
        }
    }
    if (document.querySelector('#radio3').checked) {
        console.log('input3');
        if (iText > pepsi) {
            console.log('error');
        }
        else {
            pepsi -= Number(iText);
            pepsiU = pepsiOne * Number(iText);
            console.log(pepsiU);
        }
    }
}
 
function s() {
    many__ = beerU + wineU + pepsiU; 
    manyU = many + many__; 
    many = manyU
    console.log(many__);
    console.log(many__);
    
    beerU = 0;
    wineU = 0;
    pepsiU = 0;
}

export {beer, wine, pepsi, sumTovar,s, many__, manyU}

