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