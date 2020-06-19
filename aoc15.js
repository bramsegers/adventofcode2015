let input
    =require('fs')
    .readFileSync('input/aoc15.txt','utf8')
    .split('\r\n')


let ingr=input.map(e=>{
    let i=(e+'.').split(' ').map(e=>e.slice(0,-1))
    return{
        name:i[0],
        cap: i[2]|0,
        dur: i[4]|0,
        flv: i[6]|0,
        txt: i[8]|0,
        cal: i[10]|0
    }
})


let score=(a,two)=>{
    let cap=0,dur=0,flv=0,txt=0,cal=0
    for(let i=0;i<a.length;i++){
        cap+=a[i]*ingr[i].cap
        dur+=a[i]*ingr[i].dur
        flv+=a[i]*ingr[i].flv
        txt+=a[i]*ingr[i].txt
        cal+=a[i]*ingr[i].cal
    }
    if(cap<0) return 0
    if(dur<0) return 0
    if(flv<0) return 0
    if(txt<0) return 0
    if(two && cal!=500) return 0
    return cap*dur*flv*txt
}


let maxscore=(i,t,a,two)=>{
    if(i==ingr.length){
        let s=score(a,two)
        if(s>maxs) maxs=s // | console.log(a,s)
    }
    let j0=(i==ingr.length-1)?t:1
    for(let j=j0;j<=t;j++){
        a[i]=j
        maxscore(i+1,t-j,a,two)
    }
}


let maxs=0
maxscore(0,100,[],false)
console.log({maxs})


maxs=0
maxscore(0,100,[],true)
console.log({maxs})