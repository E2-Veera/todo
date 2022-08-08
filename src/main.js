
 function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

//global varialbles
var row = null;
function submitForm () {
    var dataEntered = retreiveData();
    var readData = readingDataFromLocalStorage(dataEntered);
  
   if(dataEntered == false){
    msg.innerHTML = "<span style='color:#cc0000'>Please Enter Data!</span>";
   }
   else{

    if(row == null){
        insert(readData);
        msg.innerHTML = "<span style='color:#145858'>Data Inserted!</span>";
    }
    else{
        update();
        msg.innerHTML ="<span style='color:#145858'>Data Updated!</span>";
    }
   }
   
  
}


function retreiveData(){
    var name1= document.getElementById('name').value;   
    var exp= document.getElementById('exp').value;
    var regno= document.getElementById('regno').value;

    var arr = [name1, exp, regno];
    if (arr.includes("")){
        return false;
            }
            else {
                return arr;
            }
    
}

//data in local storange

function readingDataFromLocalStorage (dataEntered){
    //setting data in local storage
    var n = localStorage.setItem("Name",dataEntered[0]);   
    var e = localStorage.setItem("Experiance",dataEntered[1]);
    var r = localStorage.setItem("Registerno",dataEntered[2]);

        // getting values from local to table
    var n1 = localStorage.getItem("Name",n);   
    var e1 = localStorage.getItem("Experiance",e);
    var r1 = localStorage.getItem("Registerno",r);

    var arr = [n1, e1, r1];
    return arr; 
    }

    function insert(readData){
        var row = table.insertRow();

        row.insertCell(0).innerHTML = readData [0];       
        row.insertCell(1).innerHTML = readData [1];
        row.insertCell(2).innerHTML = readData [2];
        row.insertCell(3).innerHTML = `<i onclick = "edit(this),openForm()" class="fa-solid fa-pen-to-square editIcon" ></i>
                                       <i onclick = "remove(this)" class="fa-solid fa-trash-can deleteBtn" ></i>`
                                      

                                     

       /*  var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2); */

       /*  cell1.innerHTML= readData[0];
        cell2.innerHTML= readData[1];
        cell3.innerHTML= readData[2]; */


    }

    //EDIT  

    function edit(td){
        row = td.parentElement.parentElement;
        document.getElementById("name").value = row.cells[0].innerHTML;       
        document.getElementById("exp").value = row.cells[1].innerHTML; 
        document.getElementById("regno").value = row.cells[2].innerHTML; 
    }

    //UPDATE    

        function update(){
            row.cells[0].innerHTML= document.getElementById("name").value;           
            row.cells[1].innerHTML= document.getElementById("exp").value;
            row.cells[2].innerHTML= document.getElementById("regno").value;
            row = null;
        }

        //DELETE    

    function remove(td){
      var ans =  confirm("Are you sure you want to delete this?");
       if (ans == true )
       {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        msg.innerHTML = "<span style='color:#cc0000'>You Have Deleted A Row!</span>";
        row = null;
       }  }



     
       function newReset() {
        document.form1.reset(); 
     }

     