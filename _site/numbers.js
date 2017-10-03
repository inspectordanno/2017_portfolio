function plusTen(num) {
  return num + 10;
}

function minusTen(num) {
  return num - 10;
}

var numbers = {
  plusTen: plusTen,
  minusTen: minusTen
};

console.log(numbers.plusTen(25));
