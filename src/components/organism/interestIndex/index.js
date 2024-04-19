import { useSelector } from "react-redux";
import { bankIntrestInfo } from "../../../constants/staticData";
import InvestmentCard from "../investmentCard";

const InterestIndex = () => {
  // const { data } = useSelector((state) => console.log("state", state.BankPage));
  // console.log(data);

  //Using Traditional Redux
  const bankPageValues = useSelector((state) => state.BankPage);
  console.log("bankPageValues", bankPageValues);
  return (
    <div className=" mx-auto  my-4 flex w-[90%] max-w-[1008px] flex-col gap-5  md:w-[75%]">
      <div id="top" className=" my-4   ">
        <h2 className="text-[20px] font-bold leading-8 tracking-[-0.3]   text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
          Short tenures,{" "}
          <span className="block text-custom-green sm:inline-block ">
            high interest rate
          </span>
        </h2>
      </div>
      <div
        id="bottom"
        className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
      >
        {bankIntrestInfo?.map((curBank, index) => {
          return <InvestmentCard key={index} curBank={curBank} />;
        })}
      </div>
    </div>
  );
};

export default InterestIndex;
