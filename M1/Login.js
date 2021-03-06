const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
})

function checkInputs(){
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if(usernameValue == 'admin' || usernameValue == 'student1' || usernameValue == 'teacher1'){
    setSuccessFor(username, 'Valid Username');
    if(passwordValue == 'admin' || passwordValue == '1234'){
      if(usernameValue == 'admin' && passwordValue == 'admin'){
        setSuccessFor(password);
        let result = alert("Success! You are logging in as an admin.")
        window.location = "Administrator.html";
      }
      else if(usernameValue == 'teacher1' && passwordValue == '1234'){
        setSuccessFor(password);
        let result = alert("Success! You are logging in as a teacher.")
        window.location = "Teacher.html";
      }
      else if(usernameValue == 'student1' && passwordValue == '1234'){
        setSuccessFor(password);
        let result = alert("Success! You are logging in as a student.")
        window.location = "Student.html";
      }
    }else {
        setErrorFor(password, 'Wrong password');
      }
  } else {
        setErrorFor(username, 'Wrong username');
        setErrorFor(password, 'Wrong password');
  }

}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
