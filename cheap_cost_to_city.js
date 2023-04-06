/* 10) Программа получает на вход список 10 городов. Далее вводятся строки типа
“<город1>;<город2>=<цена проезда>”, определяющие цену дороги от одного города
к другому. Последняя строка - “<городA>;<городB>”. Программа должна определить
наименьшую стоимость проезда от городаА до городаB. (если таких дорог не
существует, то выведите стоимость “undefined”)
*/

// Это узел списка городов с ценами проезда
class CityNode {
    // cost - цена проезда
    // city1 - город с
    // city2 - город по

    constructor(cost, city1 = null, city2 = null) {
        this.cost = cost;
        this.city1 = city1;
        this.city2 = city2;
    }
}

// Двусвязный список городов
class CityNodeList {
    constructor() {
        this.cityTab = [];
    }
    append(cost, city1, city2) {
        const newCity = new CityNode(cost, city1, city2);
        this.cityTab.push(newCity);
    }
    findCheapTicket(city1, city2) {
        let sumCost = 0;
        sumCost = this.findCost(city1, city2);
        return sumCost;

    }
    findCost(city1, city2) {
        //for (let i = 0; i < this.cityTab.length; i++) {
        //if ( ( city1 === this.cityTab[i].city1 && city2 === this.cityTab[i].city2 ) ||
        //     ( city2 === this.cityTab[i].city1 && city1 === this.cityTab[i].city2 ) ) {
        //return this.cityTab[i].cost;
        //}
        //}

        let y = 0;
        let min_sum = 0;
        let fl_find = false;
        while (y < this.cityTab.length) {
            let sum = 0;
            let cityA = city1;
            for (let i = y; i < this.cityTab.length; i++) {
                if (cityA === this.cityTab[i].city1) {
                    sum = sum + this.cityTab[i].cost;
                    cityA = this.cityTab[i].city2;
                    if (this.cityTab[i].city2 === city2) {
                        fl_find = true;
                        break;
                    }
                }
            }
            if (min_sum == 0 && sum != 0) { min_sum = sum } // Для первого раза
            if (sum != 0 && sum < min_sum) {
                min_sum = sum;
            }
            console.log(sum, '', y, 'min_sum=', min_sum);
            y++;
        }
        if (fl_find === true) {
            return min_sum;
        }
        else {
            return undefined
        }
    }
}

rr = new CityNodeList();

let arr_city = ["Москва", "Казань", "Аша", "Уфа", "Сочи","Кировск","Курган","Питер","Тула","Пермь"];
// ввод цены за проезд с экрана
for (let i = 0; i <= arr_city.length; i++) {
    y = i + 1;
    if (i == (arr_city.length - 1)) { y = 0 };
    let str = prompt('Введите цену провезда в виде <город1>;<город2>=<цена проезда>', `${arr_city[i]};${arr_city[y]}=`);
    // console.log( str );
    let [city1, city2, cost_str] = str.split(/[;,=]/);
    // console.log(city1, city2, cost);
    // сохраняем в список
    cost = Number(cost_str);
    rr.append(cost, city1, city2);
}

let str_find = prompt('Введите города А и В для определения наименьшей цены проезда между ними: <городA>;<городB>');
let [find_cityA, find_cityB] = str_find.split(/[;]/);
// сюда логику для поиска цены
rr.findCheapTicket(find_cityA, find_cityB);