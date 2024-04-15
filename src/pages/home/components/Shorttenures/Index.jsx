import React, { useEffect, useState } from "react";
import BankCard from "./BankCard";
import { useSelector } from "react-redux";
import { usePost } from "../../../../hooks/usePost";
import toast from "react-hot-toast";

const Index = () => {
  // const { data } = useSelector((state) => state?.banks?.banks);
  const [bankDetails, setBankDetails] = useState([]);

  // console.log("data,", data);
  const { postData } = usePost();
  const fetchTheFdDetails = async (e) => {
  
    try {
      const  {data}  = await postData("/dashboard/fd", {
        count: 0,
        display_location: "Dashboard",
        fd_id: 0,
        tag: "Showcase",
      });
    
      if(data?.status===200){
        setBankDetails(data?.data)
      }
      else{
        toast.error("somethings went wrong");
      }
    } catch (error) {
      console.error(error);
      // toast.error("somethings went wrong");
    }
  };
  useEffect(() => {
    fetchTheFdDetails()
  }, []);


  return (
    <div className=" my-4  w-[90%] md:w-[75%] mx-auto flex flex-col gap-5  max-w-[1008px]">
      <div id="top" className=" my-4   ">
        <h2 className="font-bold text-[20px] leading-8 tracking-[-0.3]   text-[#1B1B1B] md:text-4xl md:font-semibold md:leading-[44px]  md:tracking-[-0.1]">
          Short tenures,{" "}
          <span className="text-custom-green block sm:inline-block ">
            high interest rate
          </span>
        </h2>
      </div>
      <div
        id="bottom"
        className={`grid grid-cols-2 gap-3 md:grid-cols-${bankDetails?.length} md:gap-4  `}
        // w-fit
      >
        {bankDetails?.length>0 && bankDetails?.map((curBank) => {
          return <BankCard key={curBank?.fd_id} curBank={curBank} />;
        })}
      </div>
    </div>
  );
};

export default Index;
