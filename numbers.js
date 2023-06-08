const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1,weight2)
console.log(typeof weight1)
console.log(Number.isInteger(weight1))
//整数ですか？って聞いてる javaの場合1.0でも整数。他は点が入ると整数ではない

const assessment1 = 9.871
const assessment2 = 6.871

const total = assessment1 * weight1 + assessment2 * weight2
const average = total / (weight1 + weight2)

console.log(average.toFixed(2))//後ろ２まで
console.log(average.toString())//文字に変える

console.log(typeof average)
console.log(typeof Number) //function nextjs使用している


