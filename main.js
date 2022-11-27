var tickets = 500;
var hotel = 250;
var rest = 120;
var travel = tickets + hotel  * 11225 + rest * 11686;


var bank = +prompt('Budjetingiz? (sum):');

var balance = bank - travel;

var eltitle = document.querySelector('.title');

if (balance >= 0) {
    eltitle.textContent = 'Oq yul Alisher';
}else {
    eltitle.textContent = -balance + ' sum yetmayapti. Alisher, ozgina sabr qilish kerak bular ekan.';
}

