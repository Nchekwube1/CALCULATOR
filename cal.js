class calculator {
    constructor() {
        this.ce = document.getElementById("CE")
        this.del = document.getElementById("C")
        this.ti = document.getElementById("X")
        this.seven = document.getElementById("se")
        this.eight = document.getElementById("ei")
        this.nine = document.getElementById("ni")
        this.di = document.getElementById("di")
        this.four = document.getElementById("fo")
        this.five = document.getElementById("fi")
        this.six = document.getElementById("si")
        this.mi = document.getElementById("mi")
        this.one = document.getElementById("on")
        this.two = document.getElementById("tw")
        this.three = document.getElementById("th")
        this.pl = document.getElementById("pl")
        this.zero = document.getElementById("ze")
        this.do = document.getElementById("po")
        this.eq = document.getElementById("eq")
        this.scr = document.querySelector(".scr")
        this.num = document.querySelector(".disp")
        this.body = document.querySelector(".body")
    }
   runam(event){
       if(event.classList =="are"){
        this.num.value +=event.value
       }
       else if(event.id == "eq"){
        this.num.value=eval(this.num.value)
        let self =this
        if(this.num.value =="undefined"){
            self.num.value = "syntax error"
        }
       }
       else if(event.id =="CE"){
        this.num.value=""
       }
       else if(event.id =="C"){
        this.num.value=this.num.value.substring(0,this.num.value.length-1)
       }
   }
}


function arithmetic() {
    let cal = new calculator
    cal.body.addEventListener("click",function(event){
           cal.runam(event.target)
    })
}

document.addEventListener("DOMContentLoaded", arithmetic)