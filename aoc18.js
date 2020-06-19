let input
    =require('fs')
    .readFileSync('input/aoc18.txt','utf8')
    .split('\r\n')


let S=100,grid=[]
for(let i,j=0;j<S;j++)
    for(grid[j]=[],i=0;i<S;i++)
        grid[j][i]=input[j][i]=='#'?1:0


let setcorners=(grid)=>{
    grid[0][0]=1
    grid[0][S-1]=1
    if(grid[S-1]) grid[S-1][0]=1
    if(grid[S-1]) grid[S-1][S-1]=1
}


let lights=(part)=>{
    let count
    let g=grid
    if(part==2) setcorners(g)
    for(let r=0;r<100;r++){
        count=0
        let g2=[]
        for(let j=0;j<S;j++){
            g2[j]=[]
            for(let i=0;i<S;i++){
                let nb=0
                for(let n=j-1;n<=j+1;n++){
                    for(let m=i-1;m<=i+1;m++){
                        if(n<0  || m<0 ) continue
                        if(n==S || m==S) continue
                        if(n==j && m==i) continue
                        nb+=g[n][m]
                    }   
                }
                g2[j][i]=0
                if(g[j][i] && (nb==2||nb==3)) g2[j][i]=1
                if(!g[j][i] && nb==3) g2[j][i]=1
                if(part==2) setcorners(g2)
                count+=g2[j][i]
            }
        }
        g=g2
    }
    return count
}


console.log(lights(1))
console.log(lights(2))