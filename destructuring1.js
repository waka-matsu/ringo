const person = {
      name: 'samuel',
      age: 39,
      adress: {
        plase: '群馬県〜大泉町',
        number: 1
      }
}

const {name, age} = person
console.log(name, age)

let {name: n, age: ag} = person
n = waka
console.log(n, ag)

const{name: wakamatsu ,age: a} = person
console.log(wakamatsu, a) //上で変数名を変更できる

const {address: {plase,number}} = person //personからこの内容を取ります新しい変数をとって読んでいる
console.log(plase,number)

console.log(person.name)
