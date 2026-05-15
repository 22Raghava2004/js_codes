const fruits = ['apple','banana','mango','pineapple']

const veggi =['radish','carrot','tomato','brinjaol']


// fruits.push(veggi)// it will add the 2nd arr as the 3rd element in first array
// console.log(fruits) 
// console.log(fruits[4][3])


// concat opperator used to concatinate two arrays 
// const all_foods=fruits.concat(veggi) // proper merging
// console.log(all_foods)

// spread:
//this is to merge multiple array to one all as all element in all array
const all_food = [...fruits,...veggi]
// console.log(all_food)

const junk_food=[1,2,3,[4,5,7,9,[6,8,0,2,3,4]]] // if array is imrpopper

const reshape_food=junk_food.flat(Infinity)// this will reshape the improper array whisis not good
// console.log(reshape_food)



const name="raghava"
const new_name=Array.from(name) //this will convert any string to array
console.log(new_name)

console.log(Array.isArray(new_name)) //this will check is this array

const obj_array={name:'Kushal'}
console.log(Array.from(obj_array.name)) // if this is not specified it will not work and it will be empty


let score=100
let score2=200
let score3=200

console.log(Array.of(score,score2,score3))

