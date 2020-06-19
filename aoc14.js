let input
    =require('fs')
    .readFileSync('input/aoc14.txt','utf8')
    .split('\r\n')


let deers=input.map(e=>{
    let i=e.split(' ')
    return{
        name:i[0],
        speed:i[3]|0,
        stamina:i[6]|0,
        rest:i[13]|0,
        score:0
    }
})


let race=(t)=>{
    for(let d of deers){
        let per=(t/(d.stamina+d.rest))|0
        let tleft=t%(d.stamina+d.rest)
        d.dist=per*d.speed*d.stamina
        d.dist+=d.speed*Math.min(tleft,d.stamina)
    }
    deers.sort((a,b)=>b.dist-a.dist)
}


for(let t=1;t<=2503;t++){
    race(t)
    let maxd=deers[0].dist
    for(let d of deers)
        if(d.dist==maxd) d.score++
}


console.log('part1',deers[0])
console.log('part2',deers.sort((a,b)=>b.score-a.score)[0])