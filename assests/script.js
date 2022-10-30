// function ValidateEmail(form) {
//   const email_format = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//   if (!email_format.value.match(email_format)) {
//     alert( "Please provide a valid email address");
//   }

// }


function ValidateEmail(form) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)



    if (input= )
}