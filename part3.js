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


// No. 10
/* Tulis kode untuk mendapatkan jumlah hari dalam sebulan */

function getDaysInMonth(month, year) {
  // Membuat tanggal pertama dalam bulan yang diinginkan
  const date = new Date(year, month - 1, 1);
  
  // Menggeser tanggal ke awal bulan berikutnya
  date.setMonth(date.getMonth() + 1);
  
  // Mengurangkan 1 hari dari tanggal tersebut untuk mendapatkan tanggal terakhir bulan ini
  date.setDate(date.getDate() - 1);
  
  // Mengembalikan jumlah hari dalam bulan ini
  return date.getDate();
}

// Contoh penggunaan fungsi
const month = 9; // Contoh: September
const year = 2023; // Contoh tahun
const daysInMonth = getDaysInMonth(month, year);
console.log(`Jumlah hari dalam bulan ${month} tahun ${year} adalah ${daysInMonth} hari.`);


// No. 11
/* Tulis kode untuk menghitung jumlah hari yang berlalu sejak awal tahun */


function days() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const daysPassed = Math.floor((today - startOfYear) / (24 * 60 * 60 * 1000));
  return daysPassed;
}

console.log("Days passed since the beginning of the year: " + days());



// No. 12

function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();

  if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }

  return age;
}

const birthdate = "2005-05-15"; 
console.log("Age: " + calculateAge(birthdate));

module.exports = {
  salinParuhPertama,
  getDaysInMonth,
  days,
  calculateAge
}
