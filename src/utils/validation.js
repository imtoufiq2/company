export const validatePanNumber = (panNum) => {
  // Regular expression to match the PAN format for individual PANs
  var regIndividualPan = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  // Regular expression to match the PAN format for company PANs
  var regCompanyPan = /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

  if (panNum.charAt(3) !== "P") {
    return false;
  }
  if (regIndividualPan.test(panNum)) {
    // Test the input against the regex for individual PANs
    // If the input matches the regex for individual PANs, it's a valid PAN number
    return true;
  } else if (regCompanyPan.test(panNum)) {
    // If the input matches the regex for company PANs, it's not a valid PAN number for individual
    return false;
  } else {
    // If the input does not match any of the regexes, it's not a valid PAN number
    return false;
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
