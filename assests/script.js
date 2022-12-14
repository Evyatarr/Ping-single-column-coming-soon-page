function validateForm() {
  const email_format = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
  const element = document.getElementById("error");
  const formstyle = document.getElementById("form");
  let x = document.forms["myForm"]["email-form"].value;
  if (x == "") {
    formstyle.style.color = "hsl(354, 100%, 66%)";
    element.innerHTML = "Whoops! It looks like you forgot to add your email";
    return false;
  } else if (x.match(email_format)) {
    return true;
  } else {
    formstyle.style.color = "hsl(354, 100%, 66%)";
    element.innerHTML = "Please provide a valid email address";
    return false;
  }
}
