//singleton  if a object i s create using constructor it is called singleton



//object literals
const kiss=Symbol('key1')
const user_detail={
    name:'ragjav',
    age:21,
    email:'rghavgowda@gmail.com',
    [kiss]:'this is key',
    location:'bengaluru',
    weeks:['sunday','monday','tuesday']
}

// console.log(user_detail)
// console.log(user_detail.name)
// console.log(user_detail['name'])
// console.log(user_detail[kiss])


user_detail.email='raghava0007@google.com'
//Object.freeze(user_detail)//this is used fotr freezing if u try changig after freeze u  cannot
//if u use freeze u cannot add  or remove or move any object i hte object
console.log(user_detail['email'])



///declaring functon in a object
user_detail.uer_future= function() {
    console.log('hello guys ahow are you')
}

user_detail.user_past= function() {
    console.log(`how i was before ${this[kiss]}`)
    console.log(` this is my email${this.email}`)
}
user_detail.user_loc=function(){

    console.log(`${this.location}`)
    for (let i of this.weeks){
        console.log(i)
    }
}
console.log(user_detail.user_past())
console.log(user_detail.uer_future())
console.log(user_detail.user_loc())