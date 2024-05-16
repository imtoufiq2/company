import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCallVerifyApi } from "../../../redux/slice/allBankSlice";

const SuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCallVerifyApi(true));
  }, [dispatch]);
useEffect(()=>{
  setTimeout(() => {

      window.close();

  }, 2000);
},[])
console.log("hello")
  return <div>successPage</div>;
};

export default SuccessPage;
