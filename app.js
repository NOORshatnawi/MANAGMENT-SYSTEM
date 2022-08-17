






// event
// 
// 
// 
// 
let id=document.getElementById("id");
let name=document.getElementById("name");
let select = document.getElementById('select');

let select1 = document.getElementById('select1');
let img=document.getElementById("image")


document.getElementById("form").addEventListener('submit',function(e)
{
  e.preventDefault()
  let div=document.createElement("div");
  

  div.style.width="200px"
  div.style.height="245px";
  div.style.background="#FFF8BC";
  div.style.color="#B9005B";
  div.style.fontSize="18.50px";
  div.style.border="7px solid #820000";

  div.style.margin="10px"
  document.body.appendChild(document.getElementById("form"))
  let img=document.createElement("img")
  img.style.width="100%"
  img.style.height="70px"
  div.appendChild(img)
  document.getElementById("container").appendChild(div)
  div.appendChild(img)



  let card=document.createElement("p");
  card.textContent="Id_Number"+" : "+id.value
  div.appendChild(card)
  card.style.paddingLeft="5px"
 
 

  let card1=document.createElement("p");
  card1.textContent="Name"+" : "+name.value
  div.appendChild(card1)
  card1.style.paddingLeft="5px"

  let card2=document.createElement("p");
  card2.textContent="Department"+" : "+select.value
  div.appendChild(card2)
  card2.style.paddingLeft="5px"



  let card3=document.createElement("p");
  card3.textContent="Level"+" : "+select1.value
  div.appendChild(card3)
  card3.style.paddingLeft="5px"
})