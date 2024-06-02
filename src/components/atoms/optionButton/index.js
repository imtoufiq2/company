const OptionButton = ({ text, isActive, onClick }) => {
  return (
    <span
      className={`medium-text max-h-8 w-fit cursor-pointer rounded-md border px-2 py-1 text-sm leading-6 tracking-[-0.2] ${isActive ? "border-[#21B546] text-[#21B546]" : "text-[#5E718D]"}`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default OptionButton;
