export const validatePanNumber = (panNum) => {
  // Regular expression to match the PAN format
  var regpan = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;

  // Test the input against the regex
  if (regpan.test(panNum) == false) {
    // If the input does not match the regex, it's not a valid PAN number
    return false;
  } else {
    // If the input matches the regex, it's a valid PAN number
    return true;
  }
};
export const validateEmail = (email) => {
  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  // Test the input against the regex
  if (emailRegex.test(email)) {
    // If the input matches the regex, it's a valid email
    return true;
  } else {
    // If the input does not match the regex, it's not a valid email
    return false;
  }
};
