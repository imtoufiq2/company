// ========== Formats a date string  =========
export function formatIndianNumber(number) {
  if (!number && number !== 0) return "";
  const [integerPart, decimalPart = ""] = Number(number)
    .toFixed(2)
    .toString()
    .split(".");

  // Format the integer part with commas
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{2})+(?!\d))/g,
    ",",
  );
  // Return the formatted number with exactly two decimal places
  return decimalPart
    ? `${formattedIntegerPart}.${decimalPart.slice(0, 2)}`
    : formattedIntegerPart;
}

// funtioin to retun k or L , we have used it on the avatar to show the total user.
export const formatNumber = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    return "";
  }
  console.log("value of num", num);
  if (num >= 100000) {
    // Convert to lakhs (L)
    const formattedNumber = (num / 100000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? formattedNumber.slice(0, -2) + "L"
      : formattedNumber + "L";
  } else if (num >= 1000) {
    // Convert to thousands (k)
    const formattedNumber = (num / 1000).toFixed(1);
    return formattedNumber.endsWith(".0")
      ? formattedNumber.slice(0, -2) + "k"
      : formattedNumber + "k";
  }

  return num.toString();
};

// ===================
export const formatNumberIndian = (value) => {
  if (typeof value !== "string") {
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

export function formatDate(dateString) {
  if (!dateString) {
    // If dateString is undefined or null, return today's date
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  }

  // Split the date string by "/"
  const [day, month, year] = dateString.split("/");

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
// ============ function to chnage the opacity of the background ===============
export const hexToRgba = (hex, opacity) => {
  let r = 0,
    g = 0,
    b = 0;
  // 3 digits
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    // 6 digits
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// ============ function to convert the number into words=============
export function numberConvert(number) {
  if (number < 100) {
    return `${number} Rupees Only`;
  } else if (number >= 100 && number < 1000) {
    return `${number} Rupees`;
  } else if (number >= 1000 && number < 100000) {
    const thousands = Math.floor(number / 1000);
    let remainingRupees = number % 1000;
    const hundreds = Math.floor(remainingRupees % 100);
    remainingRupees -= hundreds;
    let result = `${thousands} Thousand`;
    if (remainingRupees !== 0) {
      result += ` ${Math.floor(remainingRupees / 100)} Hundred`;
    }
    if (hundreds !== 0) {
      result += ` and ${hundreds}`;
    }
    result += " Rupees";
    return result;
  } else if (number >= 100000 && number < 10000000) {
    const lakhs = Math.floor(number / 100000);
    const remainingThousands = Math.floor((number % 100000) / 1000);
    let remainingRupees = number % 1000;
    const hundreds = Math.floor(remainingRupees % 100);
    remainingRupees -= hundreds;
    let result = `${lakhs} Lakh`;
    if (remainingThousands !== 0) {
      result += ` ${remainingThousands} Thousand`;
    }
    if (remainingRupees !== 0) {
      result += ` ${Math.floor(remainingRupees / 100)} Hundred`;
    }
    if (hundreds !== 0) {
      result += ` and ${hundreds}`;
    }
    result += " Rupees";
    return result;
  } else if (number >= 10000000 && number < 1000000000) {
    const crores = Math.floor(number / 10000000);
    const remainingLakhs = Math.floor((number % 10000000) / 100000);
    const remainingThousands = Math.floor((number % 100000) / 1000);
    let remainingRupees = number % 1000;
    const hundreds = Math.floor(remainingRupees % 100);
    remainingRupees -= hundreds;
    let result = `${crores} Crore`;
    if (remainingLakhs !== 0) {
      result += ` ${remainingLakhs} Lakh`;
    }
    if (remainingThousands !== 0) {
      result += ` ${remainingThousands} Thousand`;
    }
    if (remainingRupees !== 0) {
      result += ` ${Math.floor(remainingRupees / 100)} Hundred`;
    }
    if (hundreds !== 0) {
      result += ` and ${hundreds}`;
    }
    result += " Rupees";
    return result;
  } else {
    return "Number out of range";
  }
}

// =============== function to check is multiple of thousand==============
export const isMultipleOfThousand = (amount) => {
  if (typeof amount !== "number" || isNaN(amount)) {
    return false;
  }
  return amount % 1000 === 0;
};

// The investment amount to validate.
export function isValidInvestmentAmount(InvestmentAmount, cardApiResponse) {
  return (
    Number(InvestmentAmount) >= Number(cardApiResponse?.[0]?.deposit_amount) &&
    isMultipleOfThousand(Number(InvestmentAmount))
  );
}
