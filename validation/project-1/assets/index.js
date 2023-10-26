function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const number = document.getElementById('mnumber').value;
  const name = document.getElementById('fullname').value;


  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  function isValidNumber(number) {
    const numberRegex = /^[0-9]+(\.[0-9]+)?$/;
    return numberRegex.test(number);
  }

  function isValidName(name) {
    const nameRegex = /^[A-Za-z\s'-]+$/;
    return nameRegex.test(name);
  }


  let formIsValid = true;

  if (!isValidName(name)) {
    formIsValid = false;
    alert("Invalid name format");
  }

  if (!isValidEmail(email)) {
    formIsValid = false;
    alert("Invalid email format");
  }

  if (!isValidNumber(number)) {
    formIsValid = false;
    alert("Invalid number format");
  }

  if (formIsValid) {
    alert("Form is valid. Submitting...");
    document.getElementById('contactForm').submit();
  }
}