const values = [7.2, 8.9, 6.3, 9.2] //[]を使用すると配列
console.log(values[0],values[3])
console.log(values[4])//他だとエラーが出るけどjavaは出ない
values[4] = 10
values[5] = 10
console.log(values) 

console.log(values.length) //6個ある　０は数えない　数をちゃんと数えてくれる


values.push({id:3}, false , null ,'text')

console.log(values)

console.log(values.pop())//一番最後を消した

delete values [2]//内容を消してくれる　代わりに空と書かれる

console.log(values)

