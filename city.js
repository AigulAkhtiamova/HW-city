// Это узел списка городов с ценами проезда
var tsCityNode = /** @class */ (function () {
    function tsCityNode(cost, city1, city2) {
        this.cost = cost;
        this.city1 = city1;
        this.city2 = city2;
    }
    return tsCityNode;
}());
// Двусвязный список городов
var tsCityNodeList = /** @class */ (function () {
    function tsCityNodeList() {
        this.cityTab = [];
    }
    tsCityNodeList.prototype.append = function (cost, city1, city2) {
        var newCity = new tsCityNode(cost, city1, city2);
        this.cityTab.push(newCity);
    };
    tsCityNodeList.prototype.findCheapTicket = function (city1, city2) {
        var sumCost;
        sumCost = 0;
        sumCost = this.findCost(city1, city2);
        return sumCost;
    };
    tsCityNodeList.prototype.findCost = function (city1, city2) {
        var y = 0;
        var min_sum = 0;
        var fl_find = false;
        while (y < this.cityTab.length) {
            var sum = 0;
            var cityA = city1;
            for (var i = y; i < this.cityTab.length; i++) {
                if (cityA === this.cityTab[i].city1) {
                    sum = sum + this.cityTab[i].cost;
                    cityA = this.cityTab[i].city2;
                    if (this.cityTab[i].city2 === city2) {
                        fl_find = true;
                        break;
                    }
                }
            }
            if (min_sum == 0 && sum != 0) {
                min_sum = sum;
            } // Для первого раза
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
            return undefined;
        }
    };
    return tsCityNodeList;
}());
var rr = new tsCityNodeList();
var arr_city = ["Москва", "Казань", "Аша", "Уфа", "Сочи", "Кировск", "Курган", "Питер", "Тула", "Пермь"];
// ввод цены за проезд с экрана
for (var i = 0; i <= arr_city.length; i++) {
    var y = i + 1;
    if (i == (arr_city.length - 1)) {
        y = 0;
    }
    ;
    var str = prompt('Введите цену провезда в виде <город1>;<город2>=<цена проезда>', "".concat(arr_city[i], ";").concat(arr_city[y], "="));
    // console.log( str );
    if (typeof str === 'string') {
        var _a = str.split(/[;,=]/), city1 = _a[0], city2 = _a[1], cost_str = _a[2];
        // console.log(city1, city2, cost);
        // сохраняем в список
        var cost = Number(cost_str);
        rr.append(cost, city1, city2);
    }
}
var str_find = prompt('Введите города А и В для определения наименьшей цены проезда между ними: <городA>;<городB>');
if (typeof str_find === 'string') {
    var _b = str_find.split(/[;]/), find_cityA = _b[0], find_cityB = _b[1];
    // сюда логику для поиска цены
    rr.findCheapTicket(find_cityA, find_cityB);
}
