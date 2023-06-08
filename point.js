const obj1 = {
   // name : 'wakamatsu'
}
obj1.name ='wakamatsu'
obj1.age =39

   
console.log(obj1.name)
console.log(obj1.age)
//Javaはゆるいので変数を変えなくてもいい

function Obj(name){
       this.name = name
}
//varでもfunctionの中では見えない なので上記のように表示する　
//するとたくさん下のように作れるようになる表示することはプリントという

const obj2 = new Obj('table')
const obj3 = new Obj('chair')

console.log(obj2.name)
console.log(obj3.name)



