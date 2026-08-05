const form=document.querySelector('form')
//console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#results')
    if (height==="" || height<0 || isNaN(height)){
        result.innerHTML=`please give valid height ${height}`
    }
    else if (weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML=`please give valid weight ${weight}`
    }
    else {
        const bmi=(weight/((height*height)/10000))
        //show the result
        // document.querySelector('#height').value = ''
        // document.querySelector('#weight').value = ''
result.innerHTML=`<span>${height}<br>${weight}<br>${bmi}</span> `
form.reset()
   }
})