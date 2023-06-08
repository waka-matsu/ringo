//x pらを２つ
//x,yで　リターンとしてxーy

const sum =function(x,y){
    return x + y
}
console.log(sum(1,2))

const negative =function(x,y){
    return x + y
}
console.log(sum(1,2))

//フンクションのなかにフンクション入れる

const printResult = function(a,b, operation = sum){
    console.log(operation(a,b))//operation = sumはフンクションなのでパラメータ入れる
}

printResult(5,6) //よく使われるがよくわからない

printResult(5,2,negative)

printResult(6,5, function multioly(a,b) {
    return a * b 
})

printResult(6,5, (a,b) => a * b)

const person = {
    speak: function() {
        console.log('Hello')
    }
}
person.speak()
//obj は{} 配列[]
