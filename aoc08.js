let input
    =require('fs')
    .readFileSync('input/aoc08.txt','utf8')
    .split('\r\n')


let count1=0
for(let s of input){
    count1+=2
    for(let i=1;i<s.length-1;i++){
        if(s[i]!='\\') continue
        if(     s[i+1]=='\\') {count1+=1;i+=1}
        else if(s[i+1]=='\"') {count1+=1;i+=1}
        else if(s[i+1]== 'x') {count1+=3;i+=3}
    }
}


let count2=0
for(let s of input){
    count2+=2
    for(let i=0;i<s.length;i++){
        if(s[i]=='\\') count2++
        if(s[i]=='"')  count2++
    }
}


console.log(count1)
console.log(count2)