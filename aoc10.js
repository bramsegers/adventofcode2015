let input='1113122113'


let lookandsay=(s)=>{
    let t=[],num=0,occ=0
    for(let i of s){
        if(i==num) {occ++;continue}
        if(occ) t.push(occ,num)
        num=i
        occ=1
    }
    if(occ) t.push(occ,num)
    return t
}


for(let i=1;i<=50;i++){
    input=lookandsay(input)
    console.log(i,input.length)
}