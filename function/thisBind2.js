function Person() {//1秒ごとに年齢が足されるもの
    this.age = 0

    const self = this  //functionの裏でthis表示をする
    setInterval(function() {
        self.age++
        console.log(self.age)
    },1000)
}

new Person

