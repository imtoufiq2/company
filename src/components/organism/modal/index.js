import { useEffect } from "react";

const Moadal = ({ isModalActive, body, isModified }) => {
  
  useEffect(() => {
    // Disable scrolling on the body when the modal is active
    if (isModalActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    } 
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalActive]);
  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-[#5d5e5e] bg-opacity-[0.97] outline-none focus:outline-none">
      <div className={`relative mx-auto my-6  h-fit w-fit  px-2 lg:max-w-3xl ${isModified ? "w-full" :"w-fit"}`}>
        {/*content*/}
        {body}
        
      </div>
    </div>
  );
};

export default Moadal;
