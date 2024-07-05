// const OptionButton = ({ text, isActive, onClick }) => {
//   return (
//     <button
//       className={`medium-text max-h-8 w-fit cursor-pointer rounded-md border px-2 py-1 text-sm leading-6 tracking-[-0.2] ${isActive ? "border-[#21B546] text-[#21B546]" : "text-[#5E718D]"}`}
//       onClick={onClick}
//     >
//       {text}
//     </button>
//   );
// };

// export default OptionButton;
const OptionButton = ({ text, isActive, onClick, disabled }) => {
  return (
    <button
      type="button" // Change to "button" to prevent form submission
      className={`medium-text max-h-8 w-fit cursor-pointer rounded-md border px-2 py-1 text-sm leading-6 tracking-[-0.2] ${isActive ? "border-[#21B546] text-[#21B546]" : "text-[#5E718D]"}`}
      onClick={onClick}
      disabled={disabled} // Add the disabled attribute
    >
      {text}
    </button>
  );
};

export default OptionButton;
