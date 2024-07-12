import { useEffect, useState } from "react";
import ProfileDashboard from "../../organism/profileDashboard";
import ProfileBankAccount from "../../organism/profileBankAccount";
import HelpAndSupportSection from "../../organism/helpAndSupportSection";

const Profile = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
 

 
 
  return (
    <div
      className={`mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col  md:w-[65%]  lg:w-[50%] gap-6 md:gap-8`}
    >
      <ProfileDashboard/>
      {/* {currentComponent === "ProfileDashboard" && (
        <ProfileDashboard hanldeClickNext={hanldeClickNext} />
      )}
      {currentComponent === "Bank Accounts" && <ProfileBankAccount />}
      {currentComponent === "Help & Support" && <HelpAndSupportSection />} */}
      <div id="_spacing" className="h-6"></div>
    </div>
  );
};

export default Profile;
