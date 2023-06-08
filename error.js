function handleError(err) {
    //throw new Error('若松が間違えました')
    //throw 10
    throw {
     name : err.name,
     msg : err.message,
     date : new Date
    }
}


function printCry(obj){
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        handleError(e)
    } finally {
        console.log('Finally')
    }
}
const obj = {nome: 'Samuel'}

//try上でエラー出た時これをやってくれ　eはエラーパラメーター
//finallyは絶対最後に出してくれってやつ
//tryはめっちゃ大事だから覚えておいて　C#にしても絶対出るので覚えておく


printCry(obj)