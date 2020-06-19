let boss={hit:100,damg:8,armr:2}


let weapons=[
    {name:'Dagger',     cost:8,   damg:4,  armr:0},
    {name:'Shortsword', cost:10,  damg:5,  armr:0},
    {name:'Warhammer',  cost:25,  damg:6,  armr:0},
    {name:'Longsword',  cost:40,  damg:7,  armr:0},
    {name:'Greataxe',   cost:74,  damg:8,  armr:0}
]

let armor=[
    {name:'Leather',    cost:13,  damg:0,  armr:1},
    {name:'Chainmail',  cost:31,  damg:0,  armr:2},
    {name:'Splintmail', cost:53,  damg:0,  armr:3},
    {name:'Bandedmail', cost:75,  damg:0,  armr:4},
    {name:'Platemail',  cost:102, damg:0,  armr:5}
]

let rings=[
    {name:'Damage +1',  cost:25,  damg:1,  armr:0},
    {name:'Damage +2',  cost:50,  damg:2,  armr:0},
    {name:'Damage +3',  cost:100, damg:3,  armr:0},
    {name:'Defense +1', cost:20,  damg:0,  armr:1},
    {name:'Defense +2', cost:40,  damg:0,  armr:2},
    {name:'Defense +3', cost:80,  damg:0,  armr:3}
]


let config=[]
let addconfig=(w,a,r)=>{
    w=w.map(e=>weapons[e])
    a=a.filter(e=>e>=0).map(e=>armor[e])
    r=r.filter(e=>e>=0).map(e=>rings[e])
    let cost=0, damg=0, armr=0
    w.forEach(w=>{cost+=w.cost; damg+=w.damg; armr+=w.armr})
    a.forEach(a=>{cost+=a.cost; damg+=a.damg; armr+=a.armr})
    r.forEach(r=>{cost+=r.cost; damg+=r.damg; armr+=r.armr})
    config.push({w,a,r,cost,damg,armr})
}


let win=(me)=>{
    let me_hit=100
    let mydamg=Math.max(1,me.damg-boss.armr)
    let myturns=Math.ceil(boss.hit/mydamg)
    let bossdamg=Math.max(1,boss.damg-me.armr)
    let bossturns=Math.ceil(me_hit/bossdamg)
    return myturns<=bossturns 
}


for(let w=0;w<weapons.length;w++)
    for(let a=-1;a<armor.length;a++)
        for(let r1=-1;r1<rings.length;r1++)
            for(let r2=(r1==-1)?-1:r1+1;r2<rings.length;r2++)
                addconfig([w],[a],[r1,r2])    


config.sort((a,b)=>a.cost-b.cost)
let one=config.filter(e=>win(e)).shift()
let two=config.filter(e=>!win(e)).pop()
console.log(one)
console.log(two)