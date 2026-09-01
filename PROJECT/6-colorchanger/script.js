const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i =0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]


    }
    return color;
}

//console.log(randomColor())
let pushpu=null
const startcolor=function(){


 const setting=function(){
    document.body.style.backgroundColor =randomColor()
 }
 
 if (!pushpu)
{
    pushpu=setInterval(setting, 500);
    ganju.textContent='stop'
}else{
    clearInterval(pushpu)
    ganju.textContent='Start'
    pushpu=null}

}

const ganju=document.querySelector('#start')
ganju.addEventListener
('click',startcolor)