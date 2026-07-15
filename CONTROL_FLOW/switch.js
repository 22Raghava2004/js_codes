// switch(key){
//     case value:
//         break;
//     default:
//         break;
// }
let num=32
switch(true){
    case num<18:
        console.log('age should be above 18') 
        break;
    case num>18 && num<=60:
        console.log('uare elegible')
        break;
    case num>60:
        console.log('u are senior citizen')
        break;
    default:
        console.log('u still not born')

}