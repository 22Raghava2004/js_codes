const button=document.querySelectorAll(".button");
const body=document.querySelector("body")

button.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target.id)
        switch(true){
            case(e.target.id==='grey'):
                body.style.backgroundColor=e.target.id
                break;
            case(e.target.id==='white'):
                body.style.backgroundColor=e.target.id
                break;
            case(e.target.id==='blue'):
                body.style.backgroundColor=e.target.id
                break;
            case(e.target.id==='yellow'):
                body.style.backgroundColor=e.target.id
                break;

        }
})
})
