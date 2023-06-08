function printSum(a,b){     //javaだからできる
     return a + b
}

console.log(printSum(5,5))

//同じやり方　うえは答えを出してくれている　下は答えてない。動くだけ

function printSum2(a,b){   
    console.log(a+b)
}

printSum2(6,88)


//最低限の数字が最初から出て欲しい時はこちら

function printSum3(a=1,b=1){   
    return a + b 
}

console.log(printSum3(2,5))



//functionとはケーキを作る時ケーキの作り方をしる　どこかにメモする　作る時説明書を見る
//またレシピを使うためにfunctionを使うっていう考え


//  console.log()