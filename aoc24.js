let input
    =require('fs')
    .readFileSync('input/aoc24.txt','utf8')
    .split('\r\n')
    .map(Number)


let search=(sum,i,QE,size,a)=>{
    if(sum>size) return
    if(a.length>minLen) return
    if(a.length==minLen && QE>minQE) return
    if(sum==size) {minLen=a.length;minQE=QE;return}
    if(i==input.length) return
    search(sum,i+1,QE,size,a)
    search(sum+input[i],i+1,QE*input[i],size,[...a,input[i]])
}


let sum=input.reduce((a,b)=>a+b)
let minLen,minQE


minLen=minQE=1<<30
search(0,0,1,sum/3,[])
console.log(minQE)


minLen=minQE=1<<30
search(0,0,1,sum/4,[])
console.log(minQE)