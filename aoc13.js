let input
    =require('fs')
    .readFileSync('input/aoc13.txt','utf8')
    .split('\r\n')


let maxh
let happy=[]
let guests=new Set()
for(let i of input){
    let j=i.slice(0,-1).split(' ')
    let h=j[3]|0
    if(j[2]=='lose') h=-h
    happy[j[0]+j[10]]=h
    guests.add(j[0])
    guests.add(j[10])
}


let maxhappy=(g,path,h=0,plen=1)=>{
    if(!g.length){
        h+=happy[path[plen-1]+path[0]]
        h+=happy[path[0]+path[plen-1]]
        if(h>maxh) maxh=h | console.log(path.join(','),h)
    }
    for(let j=0;j<g.length;j++){
        let h2=happy[path[plen-1]+g[j]]
        let h3=happy[g[j]+path[plen-1]]
        let g2=[...g]
        g2.splice(j,1)
        path[plen]=g[j]
        maxhappy(g2,path,h+h2+h3,plen+1)
    }
}


let solve=(part)=>{
    if(part==2){
        let me='Me'
        for(let g of guests){
            happy[me+g]=0
            happy[g+me]=0
        }
        guests.add(me)
    }
    maxh=0
    let g=[...guests]
    let path=[g.shift()]
    maxhappy(g,path)
    console.log(maxh)
}


solve(1)
solve(2)