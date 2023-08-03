var SiteNameInput = document.getElementById("SiteName");
var SiteUrlInput = document.getElementById("SiteUrl");
var array = [];

if(localStorage.getItem("array") !==null){
    array= JSON.parse(localStorage.getItem("array"))
    display(array)
    console.log(array);
}
function submit(){
    if(validation() ==true){
        var typeInput ={
            Name : SiteNameInput.value,
            Email:SiteUrlInput.value
        }
        array.push(typeInput);
        display(array)
        localStorage.setItem("array",JSON.stringify(array))
        clear()
    }  
}
function display(){
    var cartona = ``;
    for(var i = 0 ; i < array.length ; i ++){
        cartona += `<tr>
        <td>${i + 1}</td>
        <td>${array[i].Name}</td>
        <td class="align-middle"><a class="btn btn-info text-light" href="http://${array[i].SiteUrlInput}" target="_blank"><i class="fa fa-eye fa-fw me-2"></i>Visit</a></td>
        <td> <button class =" btn btn-danger" onclick="deleteItem(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>
    </tr>`
    }
    document.getElementById("tableBody").innerHTML=cartona;
}
function clear(){
    SiteNameInput.value ="";
    SiteUrlInput.value ="";
}
function deleteItem(index){
    array.splice(index, 1)
    localStorage.setItem("array",JSON.stringify(array))
    display(array)
}
function validation(){
    var regex = /^[A-Za-z]{3,8}$/;
    if(regex.test( SiteNameInput.value) ==true){
        SiteNameInput.style.border ="none";
        document.getElementById('validation').classList.remove('invalid');
        document.getElementById('validation').classList.add('valid');
        return true;
    }else{
        SiteNameInput.style.border ="3px solid red";
        document.getElementById('validation').classList.add('invalid');
        document.getElementById('validation').classList.remove('valid');
        return false;
    }
}


function validateSiteURL() {
    regex= /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;
    if (regex.test(SiteUrlInput.value)==true)  
        {
        SiteUrlInput.style.border='3px solid green'
        document.getElementById('validation').classList.remove('invalid');
        document.getElementById('validation').classList.add('valid');
        return true;
    } else 
    {
        SiteUrlInput.style.border='3px solid red'
        document.getElementById('validation').classList.add('invalid');
        document.getElementById('validation').classList.remove('valid');
        return false;
    }
}








