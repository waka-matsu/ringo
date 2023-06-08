

function fun1 () {} //{}必ず必要なかにロジック入れる基本型

const fun2 = function () {} //名前が入らなくなる　前にあるから　無名関数



const array = [function (a,b) {return a+b}, fun1, fun2]

console.log(array[0](5,5))

const obj = {}

obj.speak = function () { return "Hello"}
console.log(obj.speak())

function run(fun) {
    fun() 
}

run(function name(){console.log('Hello2')})
//パラメーターにフィンクションが入れることができる

function sum(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
sum(5,2)(5)
const plus = sum(3,3)

plus(6)



function sum2(a,b){
    return function(c){ //return console.logで表示
    console.log(a+b+c)
    }
}
sum2(1,2)







