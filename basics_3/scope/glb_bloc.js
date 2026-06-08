// function getworth(){
//     let worth =200

//     function letworth(){
//         let notworth=100
//         console.log(worth)
        
//     }
//     letworth()
//     //console.log(notworth)// this  ownt work as it cannot access the inner function variable
// }
// getworth()



// if (true){
//     let firtname='hello'
//     let secondnme='world'
//     if (true){
//         let thirdname=firtname+secondnme
//         console.log('my name is ',thirdname)
//     }
//     //console.log(thirdname) //this will show error as it it outside the inner if statement
// }
// //console.log(firtname) //same



//************ intresting******************* */
//>>>>>> this is assigning variable to a function 
// whis is used for hoisting and cannot call before the dunction is declared
const name=function(username){
    console.log(username+'GOWDA')
}

name('raghav')

// this is declared function and can be called before the declaring also asit call the function that will be declared
name2('pushpa')
function name2(username2){

    console.log(username2+'GOWDA')
}
