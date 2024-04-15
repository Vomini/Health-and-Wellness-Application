function ValidateEmail()   
{  
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
 if ((mailformat.test(document.getElementById("inputEmail").value))==false)  
  {
   document.getElementById("emaildiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("emailicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("emailicon").style.display = "";
document.getElementById("emailerror").style.display = "";

    return false;  
  } 
  else
  { 
   document.getElementById("emaildiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("emailicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("emailicon").style.display = "";
document.getElementById("emailerror").style.display = "none";
    return true;  
  }
}  

function allLetter()  
  {  
   var letters = /^[A-Za-z ]*$/;  
  var x = document.getElementById("inputName").value;
   if((letters.test(x)==false) || (x == null || x == ""))  
     {  
      document.getElementById("namediv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("nameicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("nameicon").style.display = "";
document.getElementById("nameerror").style.display = "";

      return false;  
     }  
   else  
     {  
      document.getElementById("namediv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("nameicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("nameicon").style.display = "";  
document.getElementById("nameerror").style.display = "none";
     return true;  
     }  
  } 

  function validatePassword() {
    var x = document.getElementById("inputPassword").value;
    if (x == null || x == "") {
         document.getElementById("passworddiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("passwordicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("passwordicon").style.display = "";
   document.getElementById("passworderror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("passworddiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("passwordicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("passwordicon").style.display = "";  
 document.getElementById("passworderror").style.display = "none";
     return true;  
     }  
}

function validateWork() {
    var x = document.getElementById("inputWork").value;
    if (x == null || x == "") {
         document.getElementById("workdiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("workicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("workicon").style.display = "";
document.getElementById("workerror").style.display = ""; 
        return false;
    }
    else  
     {  
      document.getElementById("workdiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("workicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("workicon").style.display = ""; 
document.getElementById("workerror").style.display = "none";

     return true;  
     }  
}

 function validateFeature() {
    var x = document.getElementById("features").value;
    if (x == null || x == "") {
         document.getElementById("featurediv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("featureicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("featureicon").style.display = "";
document.getElementById("featureerror").style.display = ""; 
        return false;
    }
    else  
     {  
      document.getElementById("featurediv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("featureicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("featureicon").style.display = ""; 
document.getElementById("featureerror").style.display = "none";

     return true;  
     }  
}

 function validateContact() {
    var x = document.getElementById("contact").value;
    if (x == null || x == "") {
         document.getElementById("contactdiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("contacticon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("contacticon").style.display = "";
     document.getElementById("contacterror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("contactdiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("contacticon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("contacticon").style.display = "";  
     document.getElementById("contacterror").style.display = "none";
     return true;  
     }  
}

function validateFee() {
    var x = document.getElementById("fees").value;
    if (x == null || x == "") {
         document.getElementById("feediv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("feeicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("feeicon").style.display = "";
     document.getElementById("feeerror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("feediv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("feeicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("feeicon").style.display = "";  
     document.getElementById("feeerror").style.display = "none";
     return true;  
     }  
}


function validateConfirm() {
    var x = document.getElementById("confirmPassword").value;
    var y = document.getElementById("inputPassword").value;
    
    if (x != y || x == null || x == "") {
         document.getElementById("cnfpassdiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("cnfpassicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("cnfpassicon").style.display = "";
    document.getElementById("cnfpasserror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("cnfpassdiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("cnfpassicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("cnfpassicon").style.display = "";  
   document.getElementById("cnfpasserror").style.display = "none";
    return true;  
     }  
}

function validateForm() {

 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
 if ((mailformat.test(document.getElementById("inputEmail").value))==false)  
  {
   document.getElementById("emaildiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("emailicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("emailicon").style.display = "";
document.getElementById("emailerror").style.display = "";

    return false;  
  } 
  else
  { 
   document.getElementById("emaildiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("emailicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("emailicon").style.display = "";
document.getElementById("emailerror").style.display = "none";
  
  }

  var letters = /^[A-Za-z ]*$/;  
  var x = document.getElementById("inputName").value;
   if((letters.test(x)==false) || (x == null || x == ""))  
     {  
      document.getElementById("namediv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("nameicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("nameicon").style.display = "";
document.getElementById("nameerror").style.display = "";

      return false;  
     }  
   else  
     {  
      document.getElementById("namediv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("nameicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("nameicon").style.display = "";  
document.getElementById("nameerror").style.display = "none";
  
     }  

var x = document.getElementById("inputPassword").value;
    if (x == null || x == "") {
         document.getElementById("passworddiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("passwordicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("passwordicon").style.display = "";
   document.getElementById("passworderror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("passworddiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("passwordicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("passwordicon").style.display = "";  
 document.getElementById("passworderror").style.display = "none";
      }  

     var x = document.getElementById("confirmPassword").value;
    var y = document.getElementById("inputPassword").value;
    
    if (x != y || x == null || x == "") {
         document.getElementById("cnfpassdiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("cnfpassicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("cnfpassicon").style.display = "";
    document.getElementById("cnfpasserror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("cnfpassdiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("cnfpassicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("cnfpassicon").style.display = "";  
   document.getElementById("cnfpasserror").style.display = "none";
    
     }  

 var chx = document.getElementsByTagName('input');
  for (var i=0; i<chx.length; i++) {

    if (chx[i].type == 'radio' && chx[i].checked) {
break;   
    }
        }
  if(i==chx.length)
    {
    document.getElementById("radioerror").style.display = "";
    return false;
        }    

if((document.getElementById("optionsRadios0").checked)==false)
{

 var x = document.getElementById("inputWork").value;
    if (x == null || x == "") {
         document.getElementById("workdiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("workicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("workicon").style.display = "";
document.getElementById("workerror").style.display = ""; 
        return false;
    }
    else  
     {  
      document.getElementById("workdiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("workicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("workicon").style.display = ""; 
document.getElementById("workerror").style.display = "none";

  
     }  

 var x = document.getElementById("features").value;
    if (x == null || x == "") {
         document.getElementById("featurediv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("featureicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("featureicon").style.display = "";
document.getElementById("featureerror").style.display = ""; 
        return false;
    }
    else  
     {  
      document.getElementById("featurediv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("featureicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("featureicon").style.display = ""; 
document.getElementById("featureerror").style.display = "none";

    
     }  

var x = document.getElementById("contact").value;
    if (x == null || x == "") {
         document.getElementById("contactdiv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("contacticon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("contacticon").style.display = "";
     document.getElementById("contacterror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("contactdiv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("contacticon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("contacticon").style.display = "";  
     document.getElementById("contacterror").style.display = "none";
  
     }  

 var x = document.getElementById("fees").value;
    if (x == null || x == "") {
         document.getElementById("feediv").setAttribute("class", "form-group has-error has-feedback");
   document.getElementById("feeicon").setAttribute("class", "glyphicon glyphicon-remove form-control-feedback");
   document.getElementById("feeicon").style.display = "";
     document.getElementById("feeerror").style.display = "";
        return false;
    }
    else  
     {  
      document.getElementById("feediv").setAttribute("class", "form-group has-success has-feedback");
document.getElementById("feeicon").setAttribute("class", "glyphicon glyphicon-ok form-control-feedback");
document.getElementById("feeicon").style.display = "";  
     document.getElementById("feeerror").style.display = "none";
       
     }  
}
  return true;

}
function visible() {
 document.getElementById("formgroup").style.display = "";
    return true;  
    }

function hide() {
 document.getElementById("formgroup").style.display = "none";
    return true;  
    }