// let buttonZero=document.getElementById("btn0");
// let buttonOne=document.getElementById("btn1");
// buttonZero.addEventListener("click",function(){
//     let btnZero=document.getElementById("btn0").innerHTML;
//     document.getElementById("res").innerHTML+=btnZero;
// });
// buttonOne.addEventListener("click",function(){
//     let btnOne=document.getElementById("btn1").innerHTML;
//     document.getElementById("res").innerHTML +=btnOne;
// });
// function clearData(){
//     document.getElementById("res").innerHTML= localStorage.clear();
//     // localStorage.clear();
// }
// clearcontent('clear')
// let employees = [
//     {
     
//       fullName: "Suresh",
//       empcode: 1,
//       slary:50000,
//       city:'Hyderabd'
      
//     },
  
//     {

//       fullName: "Sourav",
//       empcode: 2,
//       slary:80000,
//       city:'Mumbai'
      
//     },
  
//     {
    
//       fullName: "John",
//       empcode: 3,
//       slary:50000,
//       city:'Hyderabd'
      
//     },
//     {
      
//       fullName: "Pavan",
//       empcode: 4,
//       slary:70000,
//       city:'Chennai'
      
      
//     },
//     {
     
//       fullName: "Sangeetha",
//       empcode: 5,
//       slary:100000,
//       city:'Delhi'
      
      
//     }
// ]

// let displayData=(data)=>{
//     //select the table body
//     let tableBody=document.querySelector("#table-body");
//     //create a row which is empty and append it to the table tableBody
//     let tablerow="";
//     for(let employee of employees){
//         tablerow +=`<tr>
//         <td>${employee.fullName}</td>
//         <td>${employee.empcode}</td>
//         <td>${employee.slary}</td>
//         <td>${employee.city}</td>
//         <td></td>
       
//         </tr> `;
//     }
//     tableBody.innerHTML=tablerow;
// }



// let fun=document.getElementById("fun");
// let para= document.getElementsByTagName("p");
// fun.addEventListener("click",function(){
//     for(let i=0;i<para.length;i++){
//         para[i].style.color="blue";
//     }   
    
// });
let data=document.getElementById("heading");

    function myfun(){
        data.innerHTML="Content changed";
    }
    function myfun1(){
        document.getElementById("test").style.fontSize="50px";
    }
    function myfun2(){
        document.getElementById("toggle").style.display="none";
    }
    function myfun3(){
        var table=document.getElementById("value");
        var newrow=table.insertRow(table.length);
        var cell1=newrow.insertCell(0);
        var cell2=newrow.insertCell(1);
        cell1.innerHTML="cell1";
        cell2.innerHTML="cell2";
        
    }

