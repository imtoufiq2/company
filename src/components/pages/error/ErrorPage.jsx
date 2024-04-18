import React from "react";
import { useNavigate, useLocation } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //checking is previous page exist
  const hasPreviousPage = location.state?.from;
  console.log("hasPreviousPage", hasPreviousPage);
  const handleClick = () => {
    if (hasPreviousPage) {
      // If there's a previous page, navigate back to it
      navigate(-1);
    } else {
      // If there's no previous page, navigate to the home page
      navigate("/");
    }
  };
  return (
    <div className="mt-[10%] flex flex-col items-center justify-center gap-3 ">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold text-red-600">404</h3>
        <h2 className="text-2xl font-bold  text-red-600">Not found</h2>
      </div>
      <button
        className=" flex items-center justify-center rounded-md border bg-white px-4 py-2 text-lg  font-medium leading-[30px] tracking-[-0.3] transition duration-200 ease-in-out"
        onClick={handleClick}
      >
        {hasPreviousPage ? "Back to previous page" : "Go to Home page"}
      </button>
    </div>
  );
};

export default ErrorPage;
