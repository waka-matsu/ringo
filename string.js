const school = "Ordem School"

console.log(school.charAt(6))//0から始まる　基本的なものは０が始まる Ordem Schoolの番数の文字をいっている
console.log(school.charCodeAt(6))//asciiコード
console.log(school.indexOf('S'))//逆引き　Sは６だよ
console.log(school.substring(0))//０の文字を消すよ
console.log(school.substring(0,5))//0-5の文字が出るよ

console.log('学校'.concat(school).concat("!")) //上と下は同じ内容
console.log('学校' + school + "!")
//console.log(school.replace($2,'r'))
console.log('Ana,maria,Sara' . split(','))


// console.log(school.())


