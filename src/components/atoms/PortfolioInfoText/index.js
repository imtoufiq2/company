import { twMerge } from "tailwind-merge";

const PortfolioInfoText = ({ text, className }) => {
  const classes = twMerge(
    `regular-text text-sm leading-5 tracking-[-0.2px] text-[#5E718D]`,
    className,
  );
  return <p className={classes}>{text}</p>;
};

export default PortfolioInfoText;
