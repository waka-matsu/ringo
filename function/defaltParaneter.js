function sum1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1

    return a+b+c //a,b,cに数字がない時は1
}

console.log(sum1(), sum1(3),sum1(3,2,5),sum1(0,0,0)) //null=0
// // 000の時に返すのが困るので下

function sum2(a,b,c){
    a = a  !== undefined ? a : 1 //
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 :c //数字じゃなければ１

    return a+b+c //a,b,cに数字がない時は1
}
console.log(sum2(), sum2(3),sum2(1,2,3),sum2(0,0,0))

function sum3 (a = 1,b = 1 , c =1 ){
       return a+b+c
}
console.log(sum3(),sum3(3),sum3(1,2,3),sum3(0,0,0))