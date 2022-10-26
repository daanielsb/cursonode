var result = 0
for (var c = 2;c < process.argv.length; c++){
    result += Number(process.argv[c])
}

console.log(result)