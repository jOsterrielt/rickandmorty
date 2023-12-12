function validation(userData) {
  const errors = {};

  if (userData.email === "") {
    errors.email = "Este campo no puede estar vacio";
  } else if (!isValidEmail(userData.email)) {
    errors.email = "El mail no es valido";
  } else if (userData.email.length >= 35) {
    errors.email = "El mail no puede tener mas de 35 caracteres";
  }

  //Password validation

  if (!userData.password) {
    errors.password = "Este campo no puede estar vacio";
  } else if (!isValidPassword(userData.password)) {
    errors.password = "nono";
  }
  return errors;
}

function isValidEmail(email) {
  return /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(email);
}

function isValidPassword(password) {
  return /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password);
}

export default validation;
