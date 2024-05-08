import { twMerge } from "tailwind-merge";


const EarnedTodayMessage = ({text , icon , className}) => {
  const classes = twMerge(
    `semi-bold-text rounded-b-xl bg-[#E8FFED] py-2 text-center   text-[12px] leading-5 tracking-[-0.2] text-[#21B546]`,
    className,
  );
  return (
    <div
    id="_yourEarned"
    className={classes}
  >
    <p>{text ? text :"💰 You earned D 2,340.78 today"}</p>
  </div>
  )
}

export default EarnedTodayMessage