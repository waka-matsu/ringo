const notes = [6.7, 5.5 ,9.8 ,7.7] //これはわからない時note.length最後までやってくれ　noteは名前

for (let i in notes){
    console.log(i,notes[i])
}

const person = {
      name: "samuel",
      lastname: "Kinoshita",
      age:"40"
}

for(let a in person) {
    console.log(`${a} = ${person[a]}`)
} 