// No. 9
/* Tulis kode yang menyalin paruh pertama array. Dengan jumlah elemen array yang ganjil, maka
elemen tengah harus menjadi milik babak pertama */

function salinParuhPertama(array) {
  const panjang = array.length;
  console.log(panjang)
  if (panjang % 2 === 0) {  // Jika jumlah elemen array genap
    return array.slice(0, panjang / 2);
  } else {  // Jika jumlah elemen array ganjil
    return array.slice(0, (panjang + 1) / 2);
  }
}

// Contoh penggunaan:
const array = [1, 2, 3, 4, 5];
const hasil = salinParuhPertama(array);
console.log(hasil);