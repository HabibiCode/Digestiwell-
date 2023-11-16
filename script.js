

let gotocart="Add to cart";
let checkid="";
let array=[];
for(let i=0;i<6;i++){
    array[i]="Add to cart";
    // console.log(array[i]);
    document.getElementById(`atc${i+1}`).textContent=array[i];
    // console.log(document.getElementById(`atc${i+1}`).textContent)
}

let productinfo=[
    {
        img:"./pics/LiceCrean.png",
        name:"Vanilla Lactose Free Ice Cream",
        status:"not added",
        noOfProductAdded:0,
        price:500
    },
    {
        img:"./pics/LiceCrean2.png",
        name:"Chocolate Lactose Free Ice Cream",
        status:"not added",
        noOfProductAdded:0,
        price:600
    },
    {
        img:"./pics/LiceCrean3.png",
        name:"Salty Caramel Lactose Free Ice Cream",
        status:"not added",
        noOfProductAdded:0,
        price:700
    },
    {
        img:"./pics/Licecream4.png",
        name:" Cookies & Cream",
        status:"not added",
        noOfProductAdded:0,
        price:800
    },
    {
        img:"./pics/Licecream5.png",
        name:"Maple Lactose Free Ice Cream",
        status:"not added",
        noOfProductAdded:0,
        price:1000
    },
    {
        img:"./pics/LiceCrean.png",
        name:"Very Vanilla Lactose Free Ice Cream",
        status:"not added",
        noOfProductAdded:0,
        price:500
    },
]
let addtocart=(id1,id2,id3,id4,no)=>{
    const pic = document.getElementById(id1);
    const pic1=document.getElementById(id2);
    const info=document.getElementById(id3);
    const atc=document.getElementById(id4); 
    
    pic.style.backgroundColor="#d0b798fa"
    atc.style.display="block";

    
    
    atc.style.padding="10px 20px";
    atc.style.borderRadius="20rem";
    atc.style.fontFamily="monospace";
    atc.style.border="none";
    atc.style.backgroundColor="#a1a1a1";
    atc.style.fontWeight="bold";
    atc.style.cursor="pointer"
    // atc.textContent=gotocart;
    console.log("sujit")
    pic1.style.display="none";
    info.style.display="none";
    pic.style.display="flex";
    checkid=id4;
   
}
function show(id1,id2,id3,id4){

    const pic = document.getElementById(id1);
    const pic1=document.getElementById(id2);
    const info=document.getElementById(id3);
    const atc=document.getElementById(id4); 

    pic.style.backgroundColor="#a1a1a1"
    atc.style.display="none"
    pic.style.display="flex"
    pic1.style.display="block";
    info.style.display="block";
    info.style.display="flex"

    

}

function gotocart1(id4,no){   
   
    let stto=array[no];
    console.log(stto)
    array.forEach((item)=>{
        console.log(item)
    })
    if(stto=="Add to cart"){
        document.getElementById(id4).textContent="go to cart";
        array[no]="go to cart";
        console.log("fjsdklfjlsd")
    } else{
        
        console.log("ji")
        document.getElementById("atcpage").style.display="block";
        document.getElementById("nextpage").style.display="none";
        document.getElementById("productop").style.display="none"
        document.getElementById(id4).textContent="Add to cart";
        array[no]="Add to cart";
    }
}

let nocount=1;

function add(){
    nocount++;
    document.getElementById("number").textContent=nocount;
}
function minus(){
    if(nocount <=0){
        alert("Click on remove to remove the item.");
        return;
    } else{
        nocount--;
    document.getElementById("number").textContent=nocount;
    }
    
}
function alremove(){
    document.getElementById("product").style.display="none";
    document.getElementById("leftside").style.backgroundColor="#adadad"
    document.getElementById("noitem").style.display="block"
}

document.getElementById("placeorder").addEventListener("click",()=>{
    // document.getElementsByClassName("OP").style.display="block"
    alert("Your order has been placed");
})



// atc.addEventListener("click",()=>{
//     if(gotocart == "Go to cart"){
//         gotocart="Add to cart"     
//     } else{
//         gotocart="Go to cart"
//     }
   
//     atc.innerHTML=gotocart;
    
// })

