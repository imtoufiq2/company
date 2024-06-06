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
  const [currentComponent, setCurrentComponent] = useState("ProfileDashboard");

  const hanldeClickNext = (value) => {
    // if (!(currentComponent >= 2)) {
    //   setCurrentComponent(currentComponent + 1);
    // }
    if (!(value === "Refer & Earn" || value === "Profile")) {
      setCurrentComponent(value);
    }

    console.warn("setting", value);
  };
  const hanldeClickPrevious = () => {
    // if (!(currentComponent <= 0)) {
    //   setCurrentComponent(currentComponent - 1);
    // }
  };
  return (
    <div
      className={`mx-auto  mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col  md:w-[65%]  lg:w-[50%] ${currentComponent === "ProfileDashboard" ? "gap-6 md:gap-8" : "gap-4 md:gap-7"}`}
    >
      {currentComponent === "ProfileDashboard" && (
        <ProfileDashboard hanldeClickNext={hanldeClickNext} />
      )}
      {currentComponent === "Bank Accounts" && <ProfileBankAccount />}
      {currentComponent === "Help & Support" && <HelpAndSupportSection />}
      <div id="_spacing" className="h-6"></div>
    </div>
  );
};

export default Profile;
