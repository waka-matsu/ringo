const funcs = []

for(var i = 0 ; i < 10; i++){
    funcs.push(function() {
          console.log(i)
    })
    //push新しい配列 funcs　配列
}

funcs[2]()
funcs[8]()
