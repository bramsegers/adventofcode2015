let input
    =require('fs')
    .readFileSync('input/aoc03.txt','utf8')
    .split('')


let houses=(start,santas)=>{    
    let x=0
    let y=0
    let a=[]
    a[[x,y]]=1
    for(let j=start;j<input.length;j+=santas){
        let i=input[j]
        if(i=='^') y--
        if(i=='v') y++
        if(i=='<') x--
        if(i=='>') x++
        a[[x,y]]=1
    }
    return a
}


let h=houses(0,1)
console.log(Object.keys(h).length)


let h1=houses(0,2)
let h2=houses(1,2)
for(let h in h2) h1[h]=1
console.log(Object.keys(h1).length)