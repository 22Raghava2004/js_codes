let randomNumber=parseInt(Math.random()*100+1)
form =document.querySelector('form')

const submit=form.querySelector('#subt')
const user_input=form.querySelector('#guessField')

const guess_slot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')

const low_high=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')
  
const p =document.createElement('p')

let prevGuess=[]
let numGuess=1
let playgame=true

if (playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(user_input.value)

    console.log(guess)
    validate_guess(guess)

    })}


function validate_guess(guess){
    //check the guess is a number
    if(isNaN(guess)){
        alert('please fok off')
    }
    else if(guess<1){
        alert('please fok off')
    }
    else if (guess>100){
        alert('please fok off')
    }
    else{
        prevGuess.push(guess)
        if (numGuess===11){
            display_guess(guess)
            display_message(`game over the random number was ${randomNumber}`)
            endGame()
        
        }
        else{
            display_guess(guess)
            check_guess(guess)

        }
    }
    
}
function check_guess(guess){
    // message print to chekc the valid number

    if(guess===randomNumber){
        display_message(`congratus u gusees it right`)
        endGame()
    }else if (guess<randomNumber){
        display_message(`your number is too low`)
    }else if (guess>randomNumber){
        display_message(`your number is too high`)
    }
}


function display_guess(guess){
    user_input.value=""
    guess_slot.innerHTML+=` ${guess}  `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`

    //
}


function display_message(message){
//
low_high.innerHTML=`<h1>${message}</h1>`
}


function endGame(){
user_input.value=''
user_input.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML=`<h1 id ='newGame'> mother foker start new game </h1> `
startover.appendChild(p)
playgame=false
newGame()

}
function newGame(){                                   
   const newgamebutton=document.querySelector('#newGame').addEventListener('click',function(e){
    randomNumber=parseInt(Math.random()*100+1)
    prevGuess=[]
    numGuess=1
    guess_slot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`
    user_input.removeAttribute('disabled')
    startover.removeChild(p)

    playgame=true
   })
}



