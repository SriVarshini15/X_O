let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rset");
let m=document.querySelector("#msg");
let r=document.querySelector("#st");
let set=document.querySelector(".set");
let round=true;
const pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const res=()=>{
    round=true;
    enboxes();
    set.classList.add("hide");
}
const checkk=()=>{
    for(let p of pattern){
        let p1=boxes[p[0]].innerText;
        let p2=boxes[p[1]].innerText;
        let p3=boxes[p[2]].innerText;
    
    if(p1!==""&&p2!==""&&p3!==""){
        if(p1===p2&&p2===p3){
            showww(p1);
        }
    }
}}
boxes.forEach(box=> {
    box.addEventListener("click",()=>{
        if(round){
            box.innerText='X';
            round=false;
        }else{
            box.innerText='O';
            round=true;
        }
        box.disabled=true;
        checkk();
    })
    
});
const disboxes=()=>{
    for(let b of boxes){
        b.disabled=true;
    }
}
const enboxes=()=>{
    for(let b of boxes){
        b.disabled=false;
        b.innerText="";
    }
}
const showww=(win)=>{
    m.innerText=`Congratualations Winner ${win}!`;
    set.classList.remove("hide");
    disboxes();
}

r.addEventListener("click",res);
reset.addEventListener("click",res);