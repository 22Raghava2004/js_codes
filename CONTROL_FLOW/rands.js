// const name='raghava'

// console.log(name.split('').reverse().join(''))



// const temp=29

// if (temp>30){
//     console.log('its hot outsside')
// }
// else { 
//     console.log('its not hot')
// }
//<,>,<=,>=,===,!=

// const balance=999
// if (balance<=1000){
//     console.log('balance is less than 1000')
// }
// else{
//     console.log('balance is more than 1000')
// }


let userloggin=false
const balance=99
const googlelogin=false
const emaillogin=true
const guestloggin=false
if (googlelogin || emaillogin||guestloggin){
    if (googlelogin){
        console.log('welcome user u logged in using google')
        userloggin=true
        if (userloggin && balance>100){
            console.log('welcome user u can make a payment')

        } 
        else if (userloggin && balance<100){
            console.log('welcome user u can loggin but u cant make payment')


        }

        else{
            console.log('please provide a correct loggin details')
        }
            }
    else if (emaillogin||guestloggin){
        console.log('welcome uer u loggin using email')
        userloggin=true
        if (userloggin && balance>100){
    console.log('welcome user u can make a payment')

} 
else if (userloggin && balance<100){
    console.log('welcome user u can loggin but u cant make payment')


}

else{
    console.log('please provide a correct loggin details')
}
    }
    
    }





else{
        console.log('please logging properly')
    }