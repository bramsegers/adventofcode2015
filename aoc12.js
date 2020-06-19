let input
    =require('fs')
    .readFileSync('input/aoc12.txt','utf8')
    .split('\r\n')


let sum=(obj,two)=>{
    if(typeof obj==='number') return obj
    if(typeof obj==='string') return 0
    if(obj.constructor!==Array){
        let arr=[]
        for(let k of Object.keys(obj))
            if(two && obj[k]==='red') return 0
            else arr.push(obj[k])
        obj=arr
    }
    return obj.reduce((n,o)=>n+sum(o,two),0)
}


let json=JSON.parse(input)
console.log(sum(json,false))
console.log(sum(json,true))