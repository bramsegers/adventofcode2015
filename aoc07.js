let input
    =require('fs')
    .readFileSync('input/aoc07.txt','utf8')
    .split('\r\n')


let abc=[]    
let index=(i)=>{
    if(!i || !isNaN(i)) return -1
    let k=abc.indexOf(i)
    if(k>=0) return k
    abc.push(i)
    return abc.length-1
}


let instr=input.map(e=>{

    // part 2
    // if(e=='19138 -> b') e='16076 -> b'

    let m,a,b,c
    if(e.includes('NOT'))         [m,a,b,c]=['not', 1,-1, 3]
    else if(e.includes('AND'))    [m,a,b,c]=['and', 0, 2, 4]
    else if(e.includes('OR'))     [m,a,b,c]=[ 'or', 0, 2, 4]
    else if(e.includes('RSHIFT')) [m,a,b,c]=['rsh', 0, 2, 4]
    else if(e.includes('LSHIFT')) [m,a,b,c]=['lsh', 0, 2, 4]
    else                          [m,a,b,c]=['set', 0,-1, 2]
    let t=e.split(' ')
    return{
        mode:m,
        op1:t[a],
        ix1:index(t[a]),
        op2:t[b],
        ix2:index(t[b]),
        op3:t[c],
        ix3:index(t[c])
    }
})


let reg=abc.map(e=>-1)
while(instr.length){
    for(let i=0;i<instr.length;i++){
        let e=instr[i]
        let v1=(e.ix1<0)?(e.op1|0):reg[e.ix1]
        let v2=(e.ix2<0)?(e.op2|0):reg[e.ix2]
        if(v1<0) continue
        if(v2<0 && 'and or rsh lsh'.includes(e.mode)) continue
        if(e.mode=='not') reg[e.ix3]=(~v1)&((1<<16)-1)
        if(e.mode=='and') reg[e.ix3]=v1&v2
        if(e.mode== 'or') reg[e.ix3]=v1|v2
        if(e.mode=='rsh') reg[e.ix3]=v1>>v2
        if(e.mode=='lsh') reg[e.ix3]=(v1<<v2)&((1<<16)-1)
        if(e.mode=='set') reg[e.ix3]=v1
        instr.splice(i,1)
        break
    }
}


console.log(reg[index('a')])