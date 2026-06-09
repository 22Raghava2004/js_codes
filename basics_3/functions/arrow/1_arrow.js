const user={

    name:'raghava',
    age :21,
    girlfriend:'guru',
    boyfriend:'none',
    motabhai:function(naughty){
        console.log(`${this.girlfriend} ${naughty} is not his gf its pappa`)
        console.log(this)
    }
   

}
 user.motabhai('pappa')
 user.name='raghv gowda'
 user.motabhai('pappa')
