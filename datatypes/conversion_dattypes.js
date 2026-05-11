
//let numb="33"
let numb="33ere"
//let numb=true
//let numb=null
//let numb=undefined


if (numb==undefined){
    console.log('num is undefined')
}
else
{
    console.log('num is defined')
}

console.log(numb)
console.log(typeof (numb))
new_numb=Number(numb)
console.log(new_numb)
console.log(typeof (new_numb))


//when the number in the form of string can be converted in number
//if aa string consist of the number and letter it will be nan
//if its boolean it will be 1 or 0 

///
/*
let loddein =1

//let loddein=0
//let loddein='raghav'
//let loddein=""
let isloggedin=Boolean(loddein)
console.log(isloggedin)

//1 ==>true 0==>false if string true
// if empty false
*/

/*
//let string_num=0
let string_num=true
new_str=String(string_num)
console.log(new_str )
console.log(typeof (new_str))
*/



let num1=66

if (typeof num1=='string'){
    console.log('num1 is string')
    num2=Number(num1)
    if (isNaN(num2)){
        console.log('num2 is not a number its nan valuse')
    }

}
else{
    console.log('num1 is not string')
}

