Number.prototype.between = function (start,end) {
      return this >= start && this <= end
}
const printResult = function (note) {
    if (note.between(9,10)){ //start,end
        console.log("最強")
    }else if (note.between(7,8.99)){
        console.log('強い')
    }else if (note.between(4,6.99)){
        console.log("弱い")
    }else if (note.between(0,3.99)){
        console.log("すごく弱い")
        
    }else {
        console.log('強さを測ることはできません')
    }
}
printResult(10) //this ha 10
printResult(7.8)
printResult(4.5)
printResult(3)
printResult(55)