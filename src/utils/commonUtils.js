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
// {(cur?.min_days / 360).toFixed(2)} year

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

export const formatNumber = (num) => {
  if (typeof num !== 'number' || isNaN(num)) {
    return ''; // Handle cases where num is not a valid number
  }
console.log("value of num", num)
  if (num >= 100000) {
    // Convert to lakhs (L)
    const formattedNumber = (num / 100000).toFixed(1);
    return formattedNumber.endsWith('.0') ? formattedNumber.slice(0, -2) + 'L' : formattedNumber + 'L';
  } else if (num >= 1000) {
    // Convert to thousands (k)
    const formattedNumber = (num / 1000).toFixed(1);
    return formattedNumber.endsWith('.0') ? formattedNumber.slice(0, -2) + 'k' : formattedNumber + 'k';
  }

  return num.toString(); // Convert to string if smaller than 1000
};

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
  let x = value?.replace(/\D/g, "");
  let lastThree = x?.slice(-3);
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
// export function formatDate(dateString) {
//   // Split the date string by "/"
//   const [day, month, year] = dateString.split('/');

//   // Rearrange to "DD-MM-YYYY"
//   return `${day}-${month}-${year}`;
// }
export function formatDate(dateString) {
  if (!dateString) {
    // If dateString is undefined or null, return today's date
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  }

  // Split the date string by "/"
  const [day, month, year] = dateString.split('/');

  // Rearrange to "DD-MM-YYYY"
  return `${day}-${month}-${year}`;
}


// ============= 403 forbidden image==========
export const getLogoUrl = (logoUrl) => {
  if (logoUrl === "https://altcase.com/images/shriram-icon.png") {
    return "/images/Shriram-finance-icon.svg";
  } else if (logoUrl === "https://altcase.com/images/mahindra.png") {
    return "https://res.cloudinary.com/dhiqmh5x1/image/upload/v1721021824/mahindra_o3syqh.jpg";
  } else if (logoUrl === "https://altcase.com/images/bajaj.png") {
    return "https://res.cloudinary.com/dhiqmh5x1/image/upload/v1721021874/media_20240715_110152_8157761541445258482_hqhqol.jpg";
  } else {
    return logoUrl; 
  }
};

// ========= testimonial avatar name ==========
export function getInitials(name) {
  if (!name) return ""; 

  const nameParts = name.trim().split(" ");
  
  if (nameParts.length > 1) {
    return `${nameParts[0][0].toUpperCase()}${nameParts[nameParts.length - 1][0].toLowerCase()}`;
  } else {
    return `${nameParts[0][0].toUpperCase()}n`;
  }
}