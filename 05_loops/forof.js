//for of
//for in
//forEach

const array =[1,2,3,4,5,6,7,8,9,10]

for (const i of array) {
    // console.log(i)
    
}

const world='himothereforker okfoker'
for (const aim of world) {
    if(aim==" ")
    {continue}
    //console.log(`this is the letter--- ${aim}`)
    
}

//Maps-----map is a 

const map = new Map()

map.set('first-name','raghava')
map.set('last-name','Gowda')
map.set('girl-friend','pushpa')
//map.set('girl-friend','pushpa')//dosnt allow duplicate values
map.set('age',21)

//console.log(map)

for (const [key,value] of map) {
    //console.log(key,':--',value)
    
}


const myobj={
    game1:'superman',
    game2:'spiderman',
    game3:'batman',
    game4:'ironman'


}

