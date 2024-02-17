const box = document.getElementById('clciker_box')
const clsks = document.getElementById('clicks')

let cookie = document.cookie
let cookie2 = cookie.split(';')

let cookie3 = cookie2[0].replaceAll('score=', '')
console.log(cookie3)
let score = cookie3;
clsks.textContent = score

function click(){
    if(score <= 10){
        score++
        clsks.textContent = score
        document.cookie = `score=${score}; max-age=999999999999999999999999999999999999999999999999`
    }
    else if(score <= 30){
        let random = Math.floor(Math.random() * 35) + 20;
        let r = Math.floor(Math.random() * 250) + 10;    
        let g = Math.floor(Math.random() * 205) + 10;
        let b = Math.floor(Math.random() * 250) + 10;
    



        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        box.style.width =  `${random}%`
        box.style.height = `${random}%` 

        score++
        clsks.textContent = score
        document.cookie = `score=${score}; max-age=999999999999999999999999999999999999999999999999`

    }
    else if(score >= 40){
        let random = Math.floor(Math.random() * 375) + 275;
        let r = Math.floor(Math.random() * 250) + 10;
        let g = Math.floor(Math.random() * 205) + 10;
        let b = Math.floor(Math.random() * 250) + 10;



        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        box.style.width =  `${random}px`
        box.style.height = `${random}px` 
        box.style.borderRadius = '100%'

        score++
        clsks.textContent = score
        document.cookie = `score=${score}; max-age=999999999999999999999999999999999999999999999999`

    }
}
function reset(){
    console.log('+')
    document.cookie = `score=${score}; max-age=-1`
    location.reload()
}
box.addEventListener('click', click)