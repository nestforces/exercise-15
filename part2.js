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
