document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
  
    let isValid = true;
  
    if (name.value.trim() === '') {
      showError(name, 'nameError');
      isValid = false;
    } else {
      hideError('nameError');
    }
  
    if (!phone.value.match(/^\d{10}$/)) {
      showError(phone, 'phoneError');
      isValid = false;
    } else {
      hideError('phoneError');
    }
  
    if (!email.value.match(/^\S+@\S+\.\S+$/)) {
      showError(email, 'emailError');
      isValid = false;
    } else {
      hideError('emailError');
    }
  
    if (isValid) {
      event.target.submit();
    }
  });
  
  function showError(input, errorId) {
    document.getElementById(errorId).style.display = 'block';
    input.focus();
    input.select();
  }
  
  function hideError(errorId) {
    document.getElementById(errorId).style.display = 'none';
  }