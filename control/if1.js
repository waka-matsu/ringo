function onlyGodNew(news){
    if(news >= 7){
     console.log('いいニュースです')
    }
}
onlyGodNew(10)
onlyGodNew(6)

//7という特典以外は　７以上の特典の場合　いいニュースですです。 ７も含める

function IfTureISpeak(value) {
    if(value) {
        console.log('This is  True.....' + value)
    }
}

IfTureISpeak()
IfTureISpeak(null)
IfTureISpeak(undefined)
IfTureISpeak(' ') //なんでもない時は真実ではない　何か入っていれば真実
IfTureISpeak('？')//もしもこれが空じゃなければこれをしてって時に使用します
IfTureISpeak(0)
IfTureISpeak(-1)
IfTureISpeak({})