var signupForm = document.getElementById('signupForm');
    var signinForm = document.getElementById('signinForm');
    var signupRadio = document.getElementById('signupRadio');
    var signinRadio = document.getElementById('signinRadio');

    signupRadio.addEventListener('change', function () {
      signupForm.style.display = 'block';
      signinForm.style.display = 'none';
    });

    signinRadio.addEventListener('change', function () {
      signupForm.style.display = 'none';
      signinForm.style.display = 'block';
    });