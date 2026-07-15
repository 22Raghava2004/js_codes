const userdata=['name','age','location','phone','email','input']



//userdata.forEach((val)=>(console.log(val)))

function print(val){
    //console.log(`hello---${val}`)
}

userdata.forEach(print)

userdata.forEach((item,index,arr)=>{
    //console.log(item,index,arr)
})



const mrgan=[{
    langname:'englisj',
    langnick:'dodamma'
},
{
    langname:'kannada',
    langnick:'amma'
},
{
    lang:'telugu', 
    nick:'gandu'
},
{
    langname:'hindi',
    langnick:'worst'
}
]

mrgan.forEach((item)=> {
    console.log(item.lang)
})


