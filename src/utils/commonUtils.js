function getFirstAndLastName(fullName) {
    if (!fullName) return '';
  
    const nameArray = fullName.split(" ");
    const firstName = nameArray[0];
    const lastName = nameArray[nameArray.length - 1];
  
    return `${firstName} ${lastName}`;
  }


  export {getFirstAndLastName}