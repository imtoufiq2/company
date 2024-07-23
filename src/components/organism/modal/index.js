import { useEffect } from "react";

const Modal = ({ isModalActive, body, isModified, isTable }) => {
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
      <div
        className={`relative mx-auto my-6  flex h-fit  w-fit items-center justify-center px-2 lg:max-w-3xl ${isModified ? "w-full" : "w-fit"} ${isTable && "w-full"}`}
      >
        {/*content*/}
        {body}
      </div>
    </div>
  );
};

export default Modal;
