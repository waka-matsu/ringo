function getValue(min,max) {
    const value = Math.random() * (max-min) + min //ランダムで数くれるrandom
    return Math.floor(value) 
}

let option = 0

while(option != -1) { //optionがマイナス１でなければ続けて
    option = getValue(-3,20)
    console.log(option) 
}