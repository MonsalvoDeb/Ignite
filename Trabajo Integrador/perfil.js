const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});





const formulario = document.querySelector('.formulario-up');
formulario.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = formulario.querySelector('input[type="text"]').value;
  const email = formulario.querySelector('input[type="email"]').value;
  const contraseña = formulario.querySelector('input[type="password"]').value;
  if (nombre === '' || email === '' || contraseña === '') {
    alert('Por favor completa cada uno de los campos, son obligatorios');
    return;
  }
  const datosFormulario = {
    nombre: nombre,
    email: email,
    contraseña: contraseña
  };
  const datosArray = [];
  datosArray.push(datosFormulario);

  console.log("Datos guardados:" + datosArray);
  console.log("Nombre:", nombre)
  console.log("Email: ", email);
  console.log("Contraseña: ", contraseña);
});





const form = document.querySelector('.formulario-in');
form.addEventListener('submit', e => {
  e.preventDefault();
  const gmail = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;
  if ( gmail === '' || password === '') {
    alert('Por favor completa cada uno de los campos, son obligatorios');
    return;
  }
  const datosForm = {
    gmail: gmail,
    password: password
  };
  const datosArr = [];
  datosArr.push(datosForm);
  console.log("Datos guardados:" + datosArr);
  console.log("Email: ", gmail);
  console.log("Contraseña: ", password);
});