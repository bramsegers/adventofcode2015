let input
    =require('fs')
    .readFileSync('input/aoc02.txt','utf8')
    .split('\r\n')


let paper=0
let ribbon=0
for(let inp of input){
    let [a,b,c]=inp
        .split('x')
        .sort((a,b)=>a-b)
    paper+=2*a*b+2*b*c+2*a*c+a*b
    ribbon+=2*a+2*b+a*b*c
}


console.log(paper)
console.log(ribbon)