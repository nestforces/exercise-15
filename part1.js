function isWeekend(s) {
    const date = new Date(s);
    const dayOfWeek = date.getDay();
    return dayOfWeek == 0 || dayOfWeek == 6
}

console.log(isWeekend("2023-09-17"));

function findGCD(num1, num2) {
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  }
  
  console.log(findGCD(36, 18));

  
function findLCM(num1, num2) {
  const oriNum1 = num1;
  const oriNum2 = num2;

  do {
    if (num1 > num2) {
      num2 += oriNum2;
    } else {
      num1 += oriNum1;
    }
  } while (num1 !== num2);

  return num1;
}

console.log(findLCM(4, 9));


function mostCommon(str) {
  const charCount = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  //console.log(charCount);
  let most = "";
  let maxCount = 0;

  for (const char in charCount) {
    if (charCount[char] > maxCount) {
      most = char;
      maxCount = charCount[char];
    }
  }

  return most;
}

console.log(mostCommon("purwadhika"));

module.exports = {
    isWeekend,
    findGCD,
    findLCM,
    mostCommon
}

