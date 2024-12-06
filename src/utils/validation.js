// file to handle the validation for the data

// for performing the validation for username
export const usernameValidation = (username) => {
  return /^[a-zA-Z ]{3,}$/.test(username.trim());
};

// for validating age
export const validateAge = (age) => {
  return /^\d+$/.test(age);
};

// for validating the email
export const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// for validating the role
export const validateRole = (role) => {
  return role !== null;
};

// for validating the password
export const validatePassword = (password) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSymbol = /[^a-zA-Z0-9]/.test(password);
  return hasUpperCase && hasNumber && hasSymbol && password.length >= 6;
};
