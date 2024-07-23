import { useCallback, useEffect } from "react";

import ProfileDashboard from "../../organism/profileDashboard";
import { getLocalStorageData } from "../../../utils/Crypto";
import { useDispatch } from "react-redux";
import { fetchWithWait } from "../../../utils/method";
import { fetchMainProfileDetail } from "../../../redux/actions/profile";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // const getProfileDetail = useCallback(() => {
  //   const data = {
  //     display_location: "Profile",
  //     method: "Get",
  //     investor_id: Number(getLocalStorageData("uInfo")?.investor_id),
  //   };
  //   fetchWithWait({ dispatch, action: fetchMainProfileDetail(data) });
  // }, [dispatch]);

  // useEffect(() => {
  //   getProfileDetail();
  // }, [getProfileDetail]);
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
