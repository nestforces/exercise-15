function isWeekend(s) {
    const date = new Date(s);
    const dayOfWeek = date.getDay();
    return dayOfWeek == 0 || dayOfWeek == 6
}

console.log(isWeekend("2023-09-17"));
