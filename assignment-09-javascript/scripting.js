window.onload=showtime;
function timer(){
  var date=new Date();
  var time=date.toLocaleTimeString();
  document.getElementById("time").innerHTML=time;
}

function showtime(){
setInterval(timer,1000);
}

function validateCredential()
{
  var id=document.getElementById("loginid").value;
  var pass=document.getElementById("password").value;
  console.log(id);
  console.log(pass);
  function credential(id,pass) {
    this.id = id;
    this.password = pass;
  }
  var person1=new credential("jatin","jatin");
  var person2=new credential("anuj","anuj");
  var person3=new credential("hello","hello");
  var person4=new credential("admin","admin");
  var person5=new credential("user","user");
  var credentialarray=[person1,person2,person3,person4,person5];
  var person6=new credential("newuser","newuser");
  credentialarray.push(person6);

  if(id=="")
  {
    alert("Id should not be empty ");
    return false;
  }
  if(pass=="")
  {
    alert("password should not be empty");
    return false;
  }
  var input=new credential(id,pass);
  var idflag=0;
  var passflag=0;
  for (var data in credentialarray) {
      console.log(credentialarray[data].id);
      console.log(credentialarray[data].password);
      if(credentialarray[data].id===id && credentialarray[data].password===pass)
      {
        idflag=1;
        passflag=1;
        break;
      }
   }
  var output=credentialarray.includes(input);
  if(idflag==1 && passflag==1)
   alert("Login Sucess");
   else {
      if(idflag==1)
       alert("Wrong Password");
      else
       alert("Invalid credential");
   }
}

function checkFName(){
  var fname=document.getElementById("fname").value;
  if(fname=="")
    document.getElementById("fname").style.border="2px solid red";
  else {
    document.getElementById("fname").style.border="2px solid green";
  }
}

function checkMidName(){
    document.getElementById("midname").style.border="2px solid green";
}

function checkLastName(){
  var lastname=document.getElementById("lastname").value;
  if(lastname=="")
    document.getElementById("lastname").style.border="2px solid red";
  else
     document.getElementById("lastname").style.border="2px solid green";
}

function checkEmail(){
  var email=document.getElementById("email").value;
  var flag=email.includes("@"); //partial implementation will use regular expressions
  console.log(flag);
  if(flag)
     document.getElementById("email").style.border="2px solid green";
   else
        document.getElementById("email").style.border="2px solid red";
}
function checkMobile(){
  var mobile=document.getElementById("mobile").length;
  if(mobile==10)
     document.getElementById("mobile").style.border="2px solid green";
   else
        document.getElementById("mobile").style.border="2px solid red";
}
function checkReEmail(){
  var reemail=document.getElementById("reemail").value;
  var flag=reemail.includes("@"); //partial implementation will use regular expressions
  if(flag)
     document.getElementById("reemail").style.border="2px solid green";
   else
        document.getElementById("reemail").style.border="2px solid red";
}
function checkPassword(){
  var pass=document.getElementById("pass" ).value;
  if(pass.length>6)
        document.getElementById("pass").style.border="2px solid green";
        else
             document.getElementById("pass").style.border="2px solid red";

}
function checkRePassword(){
  var pass=document.getElementById("pass").value;
  if(pass===document.getElementById("repass").value && pass.length>6)
        document.getElementById("repass").style.border="2px solid green";
        else
             document.getElementById("repass").style.border="2px solid red";

}
