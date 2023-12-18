let day = document.getElementById('week')
let month = document.getElementById('month')
let year = document.getElementById('year')
let clock = document.getElementById('hours')
let sec = document.getElementById('sec')

let oclock =()=>{
    let date = new Date()  
    let w = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]
    let m = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Cентябрь","Октябрь","Ноябрь","Декабрь"]
    let mont = m[date.getMonth()]
    let d = date.getDate()
    let week = w[date.getDay()]
    let montH = mont +" "+ d
    let yeaR = date.getFullYear()  

    let H = date.getHours()
    let min = date.getMinutes()

    let second =date.getSeconds()
    if(min <= 9){
        min= "0" + min
    }
    if(second <= 9){
        second = "0"+second
    }
   if(H <= 9 ){
        H = "0" + H
    }
    
    let time = H +":"+min
   
    day.innerHTML=week+" ,"
    month.innerHTML=montH+" ,"
    year.innerHTML=yeaR
    clock.innerHTML=time


    sec.innerHTML=":"+second
    console.log(time)

   
    setTimeout(()=>{
        oclock()
    },1000)
}
oclock()