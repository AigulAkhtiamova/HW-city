// Это узел списка городов с ценами проезда
class tsCityNode {
    // cost - цена проезда
    // city1 - город с
    // city2 - город по
    cost: number
    city1: string
    city2: string
    constructor(cost: number, city1: string, city2: string) {
        this.cost = cost;
        this.city1 = city1;
        this.city2 = city2;
    }
}

// Двусвязный список городов
class tsCityNodeList {
    cityTab: tsCityNode[]

    constructor() {
        this.cityTab = [];
    }
    append(cost: number, city1: string, city2: string) {
        const newCity = new tsCityNode(cost, city1, city2);
        this.cityTab.push(newCity);
    }
    findCheapTicket(city1: string, city2: string) {
        let sumCost: number | undefined;
        sumCost = 0;
        sumCost = this.findCost(city1, city2);
        return sumCost;
    }
    findCost(city1: string, city2: string) {
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

let rr = new tsCityNodeList();

let arr_city = ["Москва", "Казань", "Аша", "Уфа", "Сочи", "Кировск", "Курган", "Питер", "Тула", "Пермь"];
// ввод цены за проезд с экрана
for (let i = 0; i <= arr_city.length; i++) {
    let y = i + 1;
    if (i == (arr_city.length - 1)) { y = 0 };
    let str: string | null = prompt('Введите цену провезда в виде <город1>;<город2>=<цена проезда>', `${arr_city[i]};${arr_city[y]}=`);
    // console.log( str );
    if (typeof str === 'string') {
        let [city1, city2, cost_str] = str.split(/[;,=]/);
        // console.log(city1, city2, cost);
        // сохраняем в список
        let cost = Number(cost_str);
        rr.append(cost, city1, city2);
    }
}

let str_find: string | null = prompt('Введите города А и В для определения наименьшей цены проезда между ними: <городA>;<городB>');
if (typeof str_find === 'string') {
    let [find_cityA, find_cityB] = str_find.split(/[;]/);
    // сюда логику для поиска цены
    rr.findCheapTicket(find_cityA, find_cityB);
}
