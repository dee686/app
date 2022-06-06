let purchase=JSON.parse(localStorage.getItem("purchase"))||[];
  let arr=JSON.parse(localStorage.getItem("user"))
  let wallet=JSON.parse(localStorage.getItem("wallet"))
console.log(arr.wallet,wallet)
if(wallet===null){
  document.getElementById("wallet_balance").innerText=arr.wallet;

}

if(wallet!=null)  
document.getElementById("wallet_balance").innerText=wallet;













async function display(){

    let url=  `https://masai-vouchers-api.herokuapp.com/api/vouchers`

    let res=await fetch(url)
    let data=await res.json()

   
    append(data[0].vouchers)

  }
display()

function append (data){

  let container=document.getElementById("voucher_list");

  
  data.forEach((element,index) => {
    
    let box=document.createElement("div");
    box.setAttribute("class","voucher");

    let name=document.createElement("h3")
    name.innerText=element.name;

    let img=document.createElement("img")
    img.src=element.image;

    let price=document.createElement("h3")
    price.innerText=element.price;
    

    let btn=document.createElement("button")
    btn.setAttribute("class","buy_voucher")
    btn.innerText="Buy"
    btn.addEventListener("click",function(){

      buy(price.innerText,arr.wallet,element)
    })

    box.append(img,name,price,btn)
    container.append(box)
  });

}
function buy(price,wallet,el){
  price=+price;
  wallet=+wallet;
console.log(typeof(price))
  if(price>wallet){
    
    alert("Sorry! insufficient balance")
  }

  else{
    wallet=wallet-price
    alert("Hurray! purchase successful" )
    arr.wallet=wallet
    document.getElementById("wallet_balance").innerText=arr.wallet;
    localStorage.setItem("wallet",JSON.stringify(arr.wallet))
    purchase.push(el)
    localStorage.setItem("purchase",JSON.stringify(purchase))
  }

  
 
 
}
