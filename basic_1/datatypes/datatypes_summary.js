//primitive

// string, number, boolean, null, undefined, symbol,BigInit

//

 const score=3.14

 const py=3.14
 const outsiede=null
 const isloggedin=false

let emailid; //this is undefined


const id =Symbol('userid')

const sndid =Symbol('userid')
console.log(id==sndid)


const bignumb= 12344567655654567654565n

console.log(typeof bignumb)



//reference(non primitive)

// array,objects,functions

//array
let arr =  [ 'captain america','iron man','thor','black widow']
//object
let bojob={
    myname:'raghava',
    age : 19,
    
}

console.log(typeof arr)// datatype of teh arrya will be also object
console.log(typeof bojob)

//function
const myfuc=function (){
    console.log('helloworld')
}

console.log(typeof myfuc)

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack (primitive) ,heap (non primitive)

// in stack the primitive the data will be copied and send forward to the other variable if requested

// in heap the non primitivethe reference will be send forward if rhe data in one changes theentire data will change in the other data


let username='raghava'

let reusername=username

reusername='ragupati raghava'

console.log(username)
console.log(reusername)

//this output show the name will not be changed because the data is stored in stack and the data wont be updated if the variable namechanges



let maga ={
    email:'goga@gmail.com',
    password:'raghav1234',
}

let remaga=maga

remaga.password='#Ragha2005'

console.log(maga)
console.log(remaga)

let array=['super man','batman','wonder women','spooder man']

let rearray=array

rearray.push('flash')
console.log(array)
console.log(rearray)