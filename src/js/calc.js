/*
let sum = 0; days = 0;
function calc(){
let site = prompt("Какой тип сайта? 1 - Сайт-визитка 2  - Интернет-магазин");
    
    if( site == "1"){
    sum += 1000;
    days+= 1;
}else if( site == "2"){
    sum+= 5000;
    days += 10;
}else {
    alert("Вы ввели что-то не то");
    calc();
}
    
let design = prompt("Какой тип дизайна? 1 - Шаблон 2  - Уникальный");
let adaptive = prompt("Какой тип адаптивности? 1 - Только ПК 2  - ПК + Мобильная");

    alert("Сроки: " + days + " Стоимость: " + sum);
}
calc();
*/


let site, design, adaptive;

let calculator = {
    price: [
        [100, 500, 1000],
        [500, 1000, 2000],
        [1000, 2000, 5000],
    ],
    days: [
        [1, 2, 3],
        [3, 2, 4],
        [1, 5, 6],
    ],
    run(siteType, designType, adaptiveType){
        let sum = parseInt(calculator.price[0][siteType-1]) + parseInt(calculator.price[1][designType-1]) + parseInt(calculator.price[2][adaptiveType-1]);
        let days = parseInt(calculator.days[0][siteType-1]) + parseInt(calculator.days[1][designType-1]) + parseInt(calculator.days[2][adaptiveType-1]);
        alert("Сроки: " + days + " Стоимость: " + sum);
    }
}


function getAnswers() {
site = prompt("Какой тип сайта? 1 - Сайт-визитка 2  - Интернет-магазин");
    if(site != 1 && site != 2 && site != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
design = prompt("Какой тип дизайна? 1 - Шаблон 2  - Уникальный");
    if(design != 1 && design != 2 && design != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
adaptive = prompt("Какой тип адаптивности? 1 - Только ПК 2  - ПК + Мобильная");

    if(adaptive != 1 && adaptive != 2 && adaptive != 3){
        alert("Такого варианта нет");
        getAnswers();
        return;
    }
    }


getAnswers();
calculator.run(site, design, adaptive);
