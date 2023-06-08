function shoping(work1,work2) {
   const buyIceCream = work1 || work2
   const buyTv50 = work1 && work2
   const buyTv30 =  work1 != work2  //<>違う
   const keepHealthy = !buyIceCream
   
   //return { buyIceCream : buyIceCream,
     //       buyTv50 : buyTv50  ,
       //     buyTv30 : buyTv30 ,  
         //   keepHealthy : keepHealthy              
//}


  retrun{ buyIceCream, buyTv50, buyTv30, keepHealthy }
   //returnをobjにする

}
console.log(shopping(false,false))
//work1 =false work2 = false