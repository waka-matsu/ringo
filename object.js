const prod1 = {} //{}を使うとオブジェクトになる 下記のがオブジェクト

prod1.name = 'タブレット シャープ'
//オブジェクトの中にキーがあってオブジェクトあるオブジェクトの中にオブジェクトが作れる
prod1.price = 20000
console.log(prod1)


//,は必須 :もね

const prod2 = {
      name : 'タブレット シャープ',
      price : 20000 ,
      obj : {
        bladbladla :1
      }
}

console.log(prod1,prod2)


//{
 //  name : 'タブレット　シャープ'
 //  values : '¥20,000円'

//}


//console.log()

