let input
    =require('fs')
    .readFileSync('input/aoc09.txt','utf8')
    .split('\r\n')


let dist=[]
let set=new Set()
for(let i of input){
    let j=i.split(' ')
    dist[j[0]+j[2]]=j[4]|0
    dist[j[2]+j[0]]=j[4]|0
    set.add(j[0])
    set.add(j[2])
}


let minmaxdist=(s,d=0,plen=0,path=[])=>{
    if(!s.length && d<dmin) dmin=d  //| console.log(path,d)
    if(!s.length && d>dmax) dmax=d  //| console.log(path,d)
    for(let j=0;j<s.length;j++){
        let d2=dist[path[plen-1]+s[j]]|0
        if(plen && !d2) continue
        let s2=[...s]
        s2.splice(j,1)
        path[plen]=s[j]
        minmaxdist(s2,d+d2,plen+1,path)
    }
}


let dmax=0
let dmin=1<<30
minmaxdist([...set])
console.log(dmin,dmax)