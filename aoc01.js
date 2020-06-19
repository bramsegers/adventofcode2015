let input
    =require('fs')
    .readFileSync('input/aoc01.txt','utf8')
    .split('')


let pos,floor=0
for(let i=0;i<input.length;i++){
    floor+=(input[i]=='(')?1:-1
    if(floor==-1 && !pos)
        pos=i+1
}


console.log(floor)
console.log(pos)