
let months=["January","February","March","April","May","June","July","August","September","October","November","December"]
let week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


const now=new Date();
const date=document.querySelector('.date')
date.textContent=months[now.getMonth()]+" "+now.getDate()+"    "+week[now.getDay()];

const countdown=setInterval(updateSale,1000)

function updateSale(){
    const now=new Date();
    const hours=document.querySelector(".hours")
    const minutes=document.querySelector(".minutes")
    const seconds=document.querySelector(".seconds")
    hours.textContent=now.getHours();
    minutes.textContent=now.getMinutes();
    seconds.textContent=now.getSeconds();
}
// updateSale()




