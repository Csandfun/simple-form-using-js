console.log("this is proj 4");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
let validEmail=false;
let validPhone=false;
let validUser=false;
// $('#Success').hide();
// $('#Failure').hide();

// console.log(name, email,phone);
name.addEventListener("blur", () => {
  console.log("name is blured");
  // validate name here
  let regex = /(^[a-zA-Z][0-9a-zA-Z]{2,20}$)/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your name is valid");
    name.classList.remove("is-invalid");
    validUser=true;
  } else {
    console.log("Your name is invalid");
    name.classList.add("is-invalid");
  }
});
email.addEventListener("blur", () => {
  console.log("email is blured");
  // validate email here
  let regex = /^([_0-9a-zA-Z\.\-]+)@([_0-9a-zA-Z\.\-]+)\.([a-zA-z]){2,10}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your email is valid");
    email.classList.remove("is-invalid");
    validEmail=true;
  } else {
    console.log("Your email is invalid");
    email.classList.add("is-invalid");
  }
});
phone.addEventListener("blur", () => {
  console.log("phone is blured");
  // validate phone here
  let regex = /(^[0-9]{10}$)/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("Your phone is valid");
    phone.classList.remove("is-invalid");
    validPhone=true;
  } else {
    console.log("Your phone is invalid");
    phone.classList.add("is-invalid");
  }
});

let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('you clicked on submit');
    // submit form here
    if(validEmail && validPhone && validUser){
      let failure=document.getElementById('Failure');
      console.log('phone ,email and user are valid');
      let success=document.getElementById('Success');
      Success.classList.add('show');
      // Failure.classList.remove('show');
      $('#Failure').alert('close');
      // $('#Failure').hide;      
      // $('#Success').show;      

    }
    else{
      let success=document.getElementById('Success');
      console.log('phone ,email and user are not  valid');
      let failure=document.getElementById('Failure');
      Failure.classList.add('show');
      // Success.classList.remove('show');
      $('#Success').alert('close');
      // $('#Success').hide;      
      // $('#Failure').show;    
    }


})

