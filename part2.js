// number 5
// Tulis kode untuk mengurutkan string menurut abjad (dengan dan tanpa fungsi sortir)

function sortAlpha(word) {
    return word.split("")
               .sort()
               .join("");
}
let wordsToSort = ["daebc", "hgjfi", "lomkn"];
for (let i = 0; i < wordsToSort.length; i++) {
    let sortedWord = sortAlpha(wordsToSort[i]);
    console.log(`Kata yang diurutkan: ${sortedWord}`);
}

// number 6
//  Tulis kode untuk mendapatkan tanggal minimum dari berbagai tanggal
function getMinDate(dateArray) {
    return new Date(Math.min.apply(null, dateArray));
}
const dates = [new Date("2023-09-30"), new Date("2023-09-03"), new Date("2023-09-10"), new Date("2023-09-13")];
const minDate = getMinDate(dates);

console.log("tanggal terkecil yaitu",minDate);

// number 7
// Tulis kode yang menghitung jumlah semua elemen arra dua dimensi
let arr1 = [];
let rows = 3;
let columns = 2;

let value = 0;
for (let i = 0; i < rows; i++) {
  arr1[i] = [];
  for (let j = 0; j < columns; j++) {
    arr1[i][j] = value++;
  }
}
console.log(arr1);
