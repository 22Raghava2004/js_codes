//singlton using constructor

//const first_user=new Object()

const first_user={}

first_user.id=1
first_user.name='raghav'
first_user.email='raghav007@gmail.com'


console.log(first_user)
console.log(first_user['email'])

// declaring object inside a object
const second_user={
    email:'raghava@gmail.com',
    user_Name:{
        user_Name:{
            first_name:'raghav',
            second_name:'gowda'
        }
    }

}

console.log(second_user.user_Name.user_Name.first_name)


//merging object

// const obj_name1={1:'rag',[Symbol(2)]:'goog'}
// const obj_name2={2:'lowda',3:'gwag'}


//const obj_name3={obj_name1,obj_name2} // this just combins the 2objects
// const obj3=Object.assign(obj_name1,obj_name2)
// console.log(obj3)
// console.log(obj_name1)


// const obj4={...obj_name1,...obj_name2}
// console.log(`thisis 4th ${JSON.stringify(obj4)}`)


//*************create */
// const name3=Object.create(obj_name1)//used to create new object tusing other object ro 

// console.log(name3['1'])


//************  */
const obj_name6={1:'rag',4:'goog'}
const obj_name7={2:'lowda',3:'gwag'}

console.log(Object.keys(obj_name6))

const reg={key1:'raghav',key2:'kushal',key3:'deep',key4:'sandeep'}
console.log(Object.values(reg))
console.log(Object.keys(reg))
console.log(Object.entries(reg))
console.log(reg.hasOwnProperty('key1'))


