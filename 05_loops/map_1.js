const mynums=[1,2,3,4,5,6,7,8,9,10]

// const num2=mynums.forEach((items)=>{
//     console.log(items+10)})
//this is better than foreach
//const num2=mynums.map((num)=>num+10)
//console.log(num2)

//chaining-------

const num3=mynums
        .map((num)=>{
            return num*10})
        .map((num)=>num+11)
        .filter((num)=>num>40)
//console.log(num3)

