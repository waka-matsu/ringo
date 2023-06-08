function sum() {
    let sum = 0
    for (i in arguments){
        sum += arguments[i]
    }
    return sum
}

console.log(sum())
console.log(sum(1))
console.log(sum(1.2,2.5,3,5.8))