function getValue(min,max) {
    const value = Math.random() * (max-min) + min
    return Math.floor(value)
}

// let option= -1
let option //これでも回る

do{
    option = getValue(-1,10)
     console.log(option)
} while(option != -1) //最低でも1回は回る　−１が最初に来ても回る