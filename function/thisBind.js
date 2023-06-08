const persona = {
    hello: "Goodmorinig" ,
    speak(){
        console.log(this.hello)
    } 
}
 persona.speak()

const A = persona.speak
A()

const speakPersona= persona .speak .bind (persona)//bindはthisが何を示しているのか設定できる
speakPersona()