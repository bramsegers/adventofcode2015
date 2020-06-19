let input
    =require('fs')
    .readFileSync('input/aoc17.txt','utf8')
    .split('\r\n')
    .map(Number)


let ways=input.map(e=>0)


let count=(i,c,sum)=>{
    if(sum>150) return
    if(i>input.length) return
    if(i==input.length && sum==150) ways[c]++
    count(i+1,c,sum)
    count(i+1,c+1,sum+input[i])
}   


count(0,0,0)
console.log(ways.reduce((a,b)=>a+b))
console.log(ways.find(e=>e>0))