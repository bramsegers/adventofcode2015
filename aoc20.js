let house=(p,min,num=Infinity)=>{
    let N=1000000
    let a=new Array(N).fill(1)
    for(let i=2;i<N;i++)
        for(let c=0,j=i;j<N;j+=i){
            a[j]+=i
            if(++c==num) break
        }
    for(let i=0;i<N;i++)
        if(p*a[i]>=min)
            return i
}


console.log(house(10,34000000))
console.log(house(11,34000000,50))