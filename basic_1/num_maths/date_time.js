let date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toISOString())
console.log(date.getFullYear())
console.log(date.toJSON())
console.log(date.toDateString())
console.log(date.toLocaleString())

console.log(typeof date)

//let new_date=new Date(2026,11,12,5,3)
let new_date=new Date("2026-05-15")
console.log(new_date.toDateString())

let timeStamp=Date.now()
console.log(timeStamp)

//console.log(new_date.getTime())


console.log(Math.floor(Date.now()/1000))


let gajmadate=new Date()


console.log(gajmadate.getMonth()+1)
console.log(gajmadate.getDate())
console.log(gajmadate.getTime())
console.log(gajmadate.getDay())


console.log(`${gajmadate.toDateString()} this is the ime now`)


let New_york=gajmadate.toLocaleString('default',
    {weekday:'long',
        year:'2-digit',
        month:'long',
        day:'numeric',
        
    }
)

console.log(New_york)