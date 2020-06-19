let input='hxbxwxba'


let abc='abcdefghijklmnopqrstuvwxyz'
let s2a=(s)=>s.split('').map(e=>abc.indexOf(e))
let a2s=(a)=>a.map(e=>abc[e]).join('')


let valid=(a)=>{
    let c3=0,c2=new Set()
    for(let i=0;i<a.length;i++){
        if([8,11,14].includes(a[i])) return false
        if(i>1 && a[i]-a[i-1]==1 && a[i-1]-a[i-2]==1) c3++
        if(i && a[i]==a[i-1]) c2.add(a[i])
    }
    return c3>=1 && c2.size>=2
}


let next=(a)=>{
    let i=a.length-1
    while(++a[i]==26) a[i--]=0
}


let a=s2a(input)
for(let i=0;i<2;i++){
    while(!valid(a)) next(a)
    console.log(a2s(a))
    next(a)
}