
const form = document.querySelector('.login-form');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;

    const formData = {
      email: email.value,
      password: password.value
    };

    if (email.value === "" || password.value === "") {
       alert("Wszystkie pola powinny zostać wypełnione");
    }
  
    console.log(formData);
    event.currentTarget.reset();
  });
