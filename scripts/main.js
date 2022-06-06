let submit=document.getElementById("submit")
 
 
  submit.addEventListener("click",onsubmit)


  let arr=JSON.parse(localStorage.getItem("user"))
 
  wallet=JSON.parse(localStorage.getItem("wallet"))


function onsubmit(){
    event.preventDefault();
    let user={
       name:document.getElementById("name").value,
    
      email:document.getElementById("email").value,
       address:document.getElementById("address").value,
       wallet:document.getElementById("amount").value,
   
    }
  
    //arr.push(user)
  
    console.log(user)
    localStorage.setItem("user",JSON.stringify(user))
    
    wallet=null
    localStorage.setItem("wallet",JSON.stringify(wallet))
  }
