const proc = process.argv.slice(2);
let numbers = [];

for (let num of proc) {
  numbers.push(Number(num));
}

for (let num of numbers) {
  if (!isNaN(num) || !num < 0) {
    let timer = num * 1000;
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer);
  }
}