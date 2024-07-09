export const selectCustomStyle = {
  control: (provided, state) => ({
    ...provided,
    padding: "5px",
    border: state.isFocused ? "1px solid #AFBACA" : provided.border,
    // boxShadow: state.isFocused ? "0 0 0 1px #21B546" : provided.boxShadow,
    boxShadow: "none",
    "&:hover": {
      borderColor: state.isFocused ? "#AFBACA" : provided.borderColor,
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#21B546" : "white",
    color: state.isSelected ? "white" : provided.color,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: state.isSelected ? "#21B546" : "#F9FAFB",
      color: state.isSelected && "#fff",
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#21B546" : provided.color,
    cursor: "pointer",
    "&:hover": {
      color: "#21B546",
    },
  }),
};

export const selectCustomStyle2 = {
  control: (provided, state) => ({
    ...provided,
    padding: "2px",
    border: "1px solid #AFBACA",
    boxShadow: "none",
    "&:hover": {
      borderColor: state.isFocused ? "#AFBACA" : provided.borderColor,
    },
  }),


  option: (provided, state) => {
    console.log("value of the state is ", state?.data?.scheme_master_id , state?.value); // Log the state object to console
  
    return {
      ...provided,
      backgroundColor: state.isSelected ? "#21B546" : "white",
      color: state.isSelected ? "white" : provided.color,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? "#21B546" : "#F9FAFB",
        color: state.isSelected && "#fff",
      },
    };
  },
  
  singleValue: (provided) => ({
    ...provided,
    color: "#1B1B1B", // This sets the text color of the selected value
    fontWeight: 600,
    lineHeight: "24px",
    fontSize: "14px",
    letterSpacing: "-0.2px",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    color: "#D7DFE9",
    height: "16px",
    marginTop: "10px",
  }),
  dropdownIndicator: (provided, state) => ({
    ...selectCustomStyle.dropdownIndicator,
    ...provided,
    cursor: "pointer",
    color: "#5E718D",
    "&:hover": {
      color: "#5E718D",
    },
  }),
};
