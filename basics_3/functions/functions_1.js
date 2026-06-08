// function userinput() {

//     let name = prompt('what is your name')
//     if (!name){
//         alert('please enter a valid name')
//     }
//     else{
//         alert(`welcome ${name}`)
//     }
// }

// userinput()



// addition ins function

// function add(num1,num2)
// { let result =num1+num2
//     console.log(result) //this only prints not giveds the value
//    return result //ths send the result to the place where it cmae from
// }

// res=add(2,3)
// console.log(res)


//name function 

function username(name){

    if (!name){//or we can use name===undefined
        console.log(`please enter a valid name`)
        return
    }

    return `welcome ${name}`
}

let res=username('raghav')
console.log(res)
console.log(username('kushal'))

