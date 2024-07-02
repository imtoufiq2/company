function getFirstAndLastName(fullName) {
    if (!fullName) return '';
  
    const nameArray = fullName.split(" ");
    const firstName = nameArray[0];
    const lastName = nameArray[nameArray.length - 1];
  
    return `${firstName} ${lastName}`;
  }


  export {getFirstAndLastName}



  // ========== Formats a date string  =========
  export function formatDate(dateString) {
    // Create a Date object from the dateString
    const date = new Date(dateString);
  
    // Define a mapping for month numbers to month names
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                       "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    // Format the date as DD MMM YYYY
    const day = String(date.getDate()).padStart(2, '0');
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex]; // Get the month name
    const year = date.getFullYear();
  
    return `${day} ${monthName} ${year}`;
  }
  // Example usage
  // const apiDateString = "2026-03-21";
  // const formattedDate = formatDate(apiDateString);
  // console.log(formattedDate); // Output: "21 Mar 2026"
  

  // Formats number according to Indian numbering system
  export function formatIndianNumber(number) {
    if(!number) return ""
    const numStr = number.toString();
    const lastThreeDigits = numStr.slice(-3);
    const otherDigits = numStr.slice(0, -3);
  
    const formattedOtherDigits = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
    return otherDigits ? `${formattedOtherDigits},${lastThreeDigits}` : lastThreeDigits;
  }
  
  // ===================
 export const formatNumberIndian = (value) => {
    let x = value.replace(/\D/g, "");
    let lastThree = x.slice(-3);
    let otherNumbers = x.slice(0, -3);
    if (otherNumbers !== "") {
      lastThree = "," + lastThree;
    }
    let result = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return result;
  };
  