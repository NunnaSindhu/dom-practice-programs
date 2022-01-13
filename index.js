
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

let button=document.querySelector(".btn");
button.addEventListener("click",function(){
    let item=document.createElement("LI");
    let text=document.querySelector(".itemname").value;
    item.append(text);
    document.querySelector(".list").appendChild(item);
})

