
// function Employee(_EmployeeID,_Full_Name ,Department, level , Image_URL){
//     this.ID=_EmployeeID;
//     this.Full_name=_Full_Name;
//     this.Department = Department;

//     this.Level=level;

//     this.Image_URL=Image_URL;

//     this.Salary=salaryCounting(level);

// }

// let employee1=new Employee(1000 , "Ghazi samer" , "Administration" , "Senior" );
// let employee2=new Employee(1001 , "Lana Ali" , "Finance" , "Senior" );
// let employee3=new Employee(1002 , "Tamara Ayoub" , "Marketing" , "Senior" );
// let employee4=new Employee(1003 , "Safi Walid" , "Administration" , "Mid-Senior" );
// let employee5=new Employee(1004 , "Omar Zaid" , "Development" , "Senior" );
// let employee6=new Employee(1005 , "Rana Saleh" , "Development" , "Junior" );
// let employee7=new Employee(1006 , "Hadi Ahmad" , "Finance" , "Mid-Senior" );
// //Math.random() * (max - min) + min;
// function salaryCounting(level){
// let minSal;
// let maxSal;
// let salary;
//     if(level == "Senior"){
// minSal=1500;
// maxSal=2000;
//          salary =Math.floor(Math.random() * (maxSal - minSal) + minSal);
//     }

//     else  if(level == "Mid-Senior"){
//         minSal=1000;
//         maxSal=1500;
//                  salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
//             }
//     else if(level == "Junior"){
//         minSal=500;
//         maxSal=1000;
//                  salary = Math.floor(Math.random() * (maxSal - minSal) + minSal);
//             }
// return salary;
// }
// render();

// function render(){
//     console.log("Name : " + employee1.Full_name + " , Salary =" + employee1.Salary) ;
//     console.log("Name : " + employee2.Full_name + " , Salary =" + employee2.Salary) ;
//     console.log("Name : " + employee3.Full_name + " , Salary =" + employee3.Salary) ;
//     console.log("Name : " + employee4.Full_name + " , Salary =" + employee4.Salary) ;
//     console.log("Name : " + employee5.Full_name + " , Salary =" + employee5.Salary) ;
//     console.log("Name : " + employee6.Full_name + " , Salary =" + employee6.Salary) ;
//     console.log("Name : " + employee7.Full_name + " , Salary =" + employee7.Salary) ;
// }




//  function toggleTable(){

//   document.getElementById("myTable").classList.toggle("hidden");
//  }



// employee1=[1000 , "Ghazi_samer" , "Administration" , "Senior",employee1.Salary ];
// employee2=[1001 , "Lana_Ali" , "Finance" , "Senior",employee2.Salary ];
// employee3=[1002 , "Tamara_Ayoub" , "Marketing" , "Senior",employee3.Salary ];
// employee4=[1003 , "Safi_Walid" , "Administration" , "Mid-Senior",employee4.Salary ];
// employee5=[1004 , "Omar_Zaid" , "Development" , "Senior",employee5.Salary ];
// employee6 = [1005, "Rana_Saleh", "Development", "Junior",employee6.Salary ];
// employee7=[1006 , "Hadi_Ahmad" , "Finance" , "Mid_Senior",employee7.Salary ];
// let arram = ["  Employee_ID  ", "Full_Name", "Department", "level", "Salary"];

// function tableCreate(row, col){
//     let body = document.body;
//     let tbl  = document.createElement('table');
//     tbl.style.width  = '600px';
//   tbl.style.border = 'p6x solid #820000';


//   for (let i = 0; i < row; i++) {
//     let tr = tbl.insertRow();
//     for (let j = 0; j < col; j++) {
//       if (i == 0 && j == 0) {
//         for (let k = 0; k < arram.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${arram[k]} `));
//           td.style.border = '10px solid #F7ECDE';

//           if (k == 6) { break; }
//         }


//       }
//       else if (i == 1 && j == 1) {
//         for (let k = 0; k < employee1.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${employee1[k]}`));
//           td.style.border = '10px solid #F7ECDE';
//           if (k == 6) { break; }
//         }
//       }
//       else if (i == 2 && j == 2) {
//         for (let k = 0; k < employee2.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${employee2[k]}`));
//           td.style.border = '10px solid #F7ECDE';
//           if (k == 6) {
//             break;
//           }
//         }
//       }
//       else if (i == 3 && j == 3) {
//         for (let k = 0; k < employee3.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${employee3[k]}`));
//           td.style.border = '10px solid #F7ECDE';
//           if (k == 6) { break; }
//         }
//       }
//       else if (i == 4 && j == 4) {
//         for (let k = 0; k < employee4.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${employee4[k]}`));
//           td.style.border = '10px solid #F7ECDE';
//           if (k == 6) { break; }
//         }
//       }
//       else if (i == 5 && j==4) {
//         for (let k = 0; k < employee5.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${employee5[k]}`));
//           td.style.border = '10px solid #F7ECDE';
//           if (k == 6) { break; }
//         }
//       }
//       else if (i == 6 && j==4) {
//         for (let k = 0; k < employee6.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${employee6[k]}`));
//           td.style.border = '10px solid #F7ECDE';
//           if (k == 6) { break; }
//         }
//       }
//       else if (i == 7 && j==4) {
//         for (let k = 0; k < employee7.length; k++) {

//           let td = tr.insertCell();

//           td.appendChild(document.createTextNode(` ${employee7[k]}`));
//           td.style.border =  '10px solid #F7ECDE';

//         }
//       }
//     }
//   }
//     body.appendChild(tbl);
// }

// tableCreate(8,5);






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