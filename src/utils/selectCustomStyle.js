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
