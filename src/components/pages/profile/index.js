import { useEffect } from "react";

import ProfileDashboard from "../../organism/profileDashboard";

const Profile = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div
      className={`mx-auto mb-4 mt-8 flex w-full flex-col gap-6  px-5  md:max-w-[592px]  md:gap-8 md:px-0`}
    >
      <ProfileDashboard />

      <div id="_spacing" className="h-6"></div>
    </div>
  );
};

export default Profile;
