function area(width,height) {
    const area = width * height
    if (area > 20) {
         console.log(`Area = ${area}m2`) //returnがないとundefindも出てくる
    }else{
        return area
    }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,2,2,4))
console.log(area(30,2))