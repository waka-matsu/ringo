const imprintResul = function (num) {
   switch (Math.floor(num)) { //切り捨てている
      //switch (num) {
        case 10 :
            console.log('100%')
            break //ここで検査止めている
        case 9 :
            console.log('90%')
                break
            case 8: case 7:
                console.log('87%')
                break
            case 6: case 5:
                console.log('65%')
                break
            case 4: case 3:
                console.log('43%')
                break
            default:
                console.log('0%')    
    }
}
imprintResul(9)