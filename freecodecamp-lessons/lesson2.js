let sum = 0;
for (var i = 2; i < process.argv.length; i ++) {
    sum += Number(Number(process.argv[i]));
}
console.log(sum);