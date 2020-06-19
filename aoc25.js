let row=2981
let col=3075


let a=252533
let b=33554393
let n=20151125


let t=(row+col-2)*(row+col-1)/2+col-1


for(let i=0;i<t;i++)
    n=(n*a)%b
console.log(n)