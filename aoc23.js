let input
    =require('fs')
    .readFileSync('input/aoc23.txt','utf8')
    .split('\r\n')

    
let run=(r)=>{
    for(let i=0;i<input.length;){
        let [cmd,prm1,prm2]=[...input[i].split(' ')]
        switch(cmd){
            case 'hlf':
                r[prm1]>>=1n
                i++
                break
            case 'tpl':
                r[prm1]*=3n
                i++
                break
            case 'inc':
                r[prm1]+=1n
                i++
                break
            case 'jmp':
                i+=prm1|0
                break
            case 'jie':
                if(r[prm1]%2n===0n) i+=prm2|0
                else i++
                break
            case 'jio':
                if(r[prm1]===1n) i+=prm2|0
                else i++
                break
        }
    }
    console.log(r)
}


run({a:0n,b:0n})
run({a:1n,b:0n})