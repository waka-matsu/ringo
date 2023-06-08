// let i =0
// while(i <= 10){
//     console.log(i);
//     i++   
// }
// console.log("ループ終わり") //出せば出る
//forはすごく使う
for(let i = 1; i <= 10 ; i++){
    console.log(`i = ${i}`)//``を使用する

}

const note = [6.7, 5.5 ,9.8 ,7.7] //これはわからない時note.length最後までやってくれ　noteは名前
for(i = 0; i < note.length; i++){
    console.log(` note = ${note[i]}`)
}//i = 0はポジション０から始めてください　パソコンは1からも0から始まる
console.log(note[2])