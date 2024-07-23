export const selectCustomStyle2 = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#F0F3F9",
      borderColor: "transparent",
      boxShadow: "none",
      minHeight: "30px",
      "&:hover": {
        borderColor: "transparent",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#5e718d", // This sets the text color of the selected value
      fontWeight: 600,
      lineHeight: "24px",
      fontSize: "14px",
      letterSpacing: "-0.2px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#5e718d", // Optional: set placeholder color
    }),
    option: (provided, state) => ({
      ...provided,
      // backgroundColor: state.isSelected ? "#21B546" : "white",
      backgroundColor: state.isSelected ? "#F9FAFB" : "white",
      color: state.isSelected ? "#3D4A5C" : "#3D4A5C",
      "&:hover": {
        // backgroundColor: state.isSelected ? "#21B546" : "#F9FAFB",
        backgroundColor: "#F9FAFB",
        color: state.isSelected && "#3D4A5C",
      },
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      width: "0px",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "#5e718d",
      paddingLeft: "4px",
      cursor: "pointer",
      "&:hover": {
        color: "#21B546",
      },
    }),
  };