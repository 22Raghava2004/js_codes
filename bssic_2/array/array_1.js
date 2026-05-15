const my_array=[0,1,2,3,4,5,6]
const sec_array=['cap','iron man','loki','thor']

/*
const mix_aray=new Array(1,2,3,4,5) //this is diff way to writting array
console.log(my_array[0])
console.log(sec_array[2])
console.log(mix_aray[3])
*/
//output :- 1
//loki
//4
//array methods


//my_array.push(7)

// console.log(my_array.push(8))//way to push

// console.log(my_array)
// my_array.pop()

//my_array.unshift(0)// it will ad element in beginning of aray
//my_array.unshift(9)// it will add the element at the start of the array

//my_array.shift()// it removeethe first element ofthe array


// console.log(my_array.includes(3))
// console.log(my_array.indexOf(3))


// const new_array=my_array.join(' ') ***


// console.log(my_array)
// console.log(new_array)

//second array methods

// sec_array.unshift('black widow')// beginng of array
// sec_array.push('hulk')//ending ofarray
// console.log(sec_array.includes('loki'))
// console.log(sec_array.indexOf('loki'))
// console.log(sec_array)


// 8888888888888888888888888888888888888888888888888888888888888888888888


// slice ,splice

console.log("a",my_array)
const new_one =my_array.slice(0,3) // this provide shows the element  in the given condition
console.log(new_one)
console.log('b',my_array)


const my2_array =my_array.splice(1,3)// this removes the element in the given condition
console.log(my2_array)
console.log('c',my_array)








