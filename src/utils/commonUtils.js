function getFirstAndLastName(fullName) {
  if (!fullName) return "";

  const nameArray = fullName.split(" ");
  const firstName = nameArray[0];
  const lastName = nameArray[nameArray.length - 1];

  return `${firstName} ${lastName}`;
}

export { getFirstAndLastName };

// ========== Formats a date string  =========

//fucntion to convert the days to year
// {(cur?.min_days / 365.25).toFixed(2)} year

// Example usage
// const apiDateString = "2026-03-21";
// const formattedDate = formatDate(apiDateString);
// console.log(formattedDate); // Output: "21 Mar 2026"

// Formats number according to Indian numbering system
// export function formatIndianNumber(number) {
//   if (!number) return "";
//   const numStr = number.toString();
//   const lastThreeDigits = numStr.slice(-3);
//   const otherDigits = numStr.slice(0, -3);

//   const formattedOtherDigits = otherDigits.replace(
//     /\B(?=(\d{2})+(?!\d))/g,
//     ",",
//   );
//   return otherDigits
//     ? `${formattedOtherDigits},${lastThreeDigits}`
//     : lastThreeDigits;
// }

export   function formatIndianNumber(number) {
  if (!number) return "";

  const [integerPart, decimalPart] = number.toString().split(".");
  const lastThreeDigits = integerPart.slice(-3);
  const otherDigits = integerPart.slice(0, -3);

  const formattedOtherDigits = otherDigits.replace(
    /\B(?=(\d{2})+(?!\d))/g,
    ","
  );

  const formattedNumber = otherDigits
    ? `${formattedOtherDigits},${lastThreeDigits}`
    : lastThreeDigits;

  return decimalPart ? `${formattedNumber}.${decimalPart}` : formattedNumber;
}

// ===================
// export const formatNumberIndian = (value) => {
//   let x = value.replace(/\D/g, "");
//   let lastThree = x.slice(-3);
//   let otherNumbers = x.slice(0, -3);
//   if (otherNumbers !== "") {
//     lastThree = "," + lastThree;
//   }
//   let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
//   return result;
// };
export const formatNumberIndian = (value) => {
  if (typeof value !== 'string') {
    value = String(value);
  }
  let x = value.replace(/\D/g, "");
  let lastThree = x.slice(-3);
  let otherNumbers = x.slice(0, -3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return result;
};
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
// export const debounce = (func, delay) => {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => func.apply(this, args), delay);
//   };
// };
