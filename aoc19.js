let input
    =require('fs')
    .readFileSync('input/aoc19.txt','utf8')
    .split('\r\n')


let med=input.pop()
let repl=input.map(e=>{
    let t=e.split(' => ')
    return {a:t[0],b:t[1]}
})


let count1=new Set()
for(let r of repl){
    for(let i=0;i<med.length;i++){
        if(med.substring(i,i+r.a.length)==r.a)
            count1.add(med.substring(0,i)+r.b+med.substring(i+r.a.length))       
    }
}
console.log(count1.size)


let count2=0
while(med!='e'){
    for(let r of repl){
        if(med.includes(r.b)){
            let i=med.lastIndexOf(r.b)
            med=med.substring(0,i)+r.a+med.substring(i+r.b.length)
            count2++
        }
    }
}
console.log(count2)