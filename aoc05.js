let input
    =require('fs')
    .readFileSync('input/aoc05.txt','utf8')
    .split('\r\n')


let nice1=(s)=>{
    let vowels=0,twice=0
    for(let i=0;i<s.length;i++){
        vowels+='aeiou'.includes(s[i])
        twice+=(i && s[i]==s[i-1])
        if(i && 'ab,cd,pq,xy'.includes(s[i-1]+s[i]))
            return false
    }
    return vowels>=3 && twice>=1
}


let nice2=(s)=>{
    let c2=[], twice=0, aba=0
    for(let i=0;i<s.length;i++){
        if(!i) continue
        let key=s[i-1]+s[i]
        if(!c2[key]) c2[key]=i
        else twice+=(i-c2[key]>1) 
        aba+=(i<s.length-1 && s[i-1]==s[i+1])
        if(twice && aba) return true
    }
    return false
}


let count=(f)=>{
    let count=0
    for(let i of input)
        count+=f(i)
    console.log(count)
}


count(nice1)
count(nice2)