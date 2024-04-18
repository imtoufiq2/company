import React, { useEffect, useState } from "react";
import BankInvestmentWidget from "../bankInvestmentWidget";
import BankInvestmentOverview from "../bankInvestmentWidget/BankInvestmentOverview";
import { getData } from "../../../utils/Crypto";

const SecureInvestWidget = () => {
    const [userLogedIn, setUserLogedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = () => {
      const userData = getData("userData");
      if (userData?.access_token) {
        setUserLogedIn(true);
      } else {
        setUserLogedIn(false);
      }
      setTimeout(checkLoginStatus, 1000);
    };
    checkLoginStatus();

    return () => clearTimeout(checkLoginStatus);
  }, []);
  return (
    <div
    id="mainParent"
    className="m-auto max-w-[1280px] rounded-[32px] lg:mb-[100px] lg:mt-[40px] lg:bg-[#C2F2CE] lg:py-[60px]  lg:pb-0"
  >
    <div
      id="parent"
      className="mx-auto mb-[10px]   flex w-full max-w-[1008px] flex-col lg:w-[75%] lg:flex-row lg:gap-2 xl:w-full"
    >
      <BankInvestmentOverview />
      <BankInvestmentWidget
        userLogedIn={userLogedIn}
        setUserLogedIn={setUserLogedIn}
      />
    </div>
  </div>
  )
}

export default SecureInvestWidget
