let input
    =require('fs')
    .readFileSync('input/aoc06.txt','utf8')
    .split('\r\n')


let count=(op)=>{

    let grid=[]
    for(let i=0;i<1000;i++)
        grid[i]=new Array(1000).fill(0)
        
    for(let i of input){
        let a,b,c
        if(i.startsWith('turn on'))  [a,b,c]=[2,4, 'on']
        if(i.startsWith('turn off')) [a,b,c]=[2,4,'off']       
        if(i.startsWith('toggle'))   [a,b,c]=[1,3,'tog']
        a=i.split(' ')[a].split(',').map(e=>e|0)
        b=i.split(' ')[b].split(',').map(e=>e|0)
        for(let j=a[0];j<=b[0];j++)
            for(let k=a[1];k<=b[1];k++)
                grid[j][k]=op(c,grid[j][k])
    }  
    
    let c=0
    for(let j=0;j<1000;j++)
        for(let i=0;i<1000;i++)
            c+=grid[j][i]
    return c
}


let one=(c,i)=>{
    if(c== 'on') return 1
    if(c=='off') return 0
    if(c=='tog') return 1-i
}


let two=(c,i)=>{
    if(c== 'on') return i+1
    if(c=='off') return Math.max(0,i-1)
    if(c=='tog') return i+2
}


console.log(count(one))
console.log(count(two))