let input
    =require('fs')
    .readFileSync('input/aoc16.txt','utf8')
    .split('\r\n')


let sue={
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1,
}


let valid1=(a)=>{
    for(let i in a)
        if(sue[i]!=a[i]) 
            return false
    return true
}


let valid2=(a)=>{
    for(let i in a){
        if(i=='cats' || i=='trees'){
            if(sue[i]>=a[i]) return false
        }
        else if(i=='pomeranians' || i=='goldfish'){
            if(sue[i]<=a[i]) return false
        }
        else if(sue[i]!=a[i]) return false
    }
    return true
}


for(let i of input){
    let a=[],
        t=(i+'.')
        .split(' ')
        .map(e=>e.slice(0,-1))
    for(let j=2;j<t.length;j+=2)
        a[t[j]]=t[j+1]|0
    if(valid1(a)) console.log(1,i)
    if(valid2(a)) console.log(2,i)
}