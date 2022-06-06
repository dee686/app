let purchase=JSON.parse(localStorage.getItem("purchase"))
  let arr=JSON.parse(localStorage.getItem("user"))
  let wallet=JSON.parse(localStorage.getItem("wallet"))
console.log(arr.wallet,wallet)
if(wallet===null)
document.getElementById("wallet_balance").innerText=arr.wallet;
if(wallet!=null)  
document.getElementById("wallet_balance").innerText=wallet;

append(purchase);
function append(data){

  let container=document.getElementById("purchased_vouchers")
  
  data.forEach((element) => {
    
    let box=document.createElement("div");
    box.setAttribute("class","voucher");

    let name=document.createElement("h3")
    name.innerText=element.name;

    let img=document.createElement("img")
    img.src=element.image;

    let price=document.createElement("h3")
    price.innerText=element.price;
    

    

    box.append(img,name,price)
    container.append(box)
  });

}
