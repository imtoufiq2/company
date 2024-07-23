import toast from "react-hot-toast";
import * as Yup from "yup";
import { endpoints } from "../../../services/endpoints";
import axios from "axios";
import { MY_BASE_URL } from "../../../utils/api";
import { getData } from "../../../utils/Crypto";

export const validationSchema = Yup.object({
  pan: Yup.string()
    .length(10, "PAN must be exactly 10 characters")
    .required("PAN is required"),
  dateOfBirth: Yup.date().required("Date of Birth is required"),
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const initialValues = {
  pan: "",
  dateOfBirth: null,
  fullName: "",
  email: "",
};

export const handleSubmit = (values) => {
  // Handle form submission
  console.log("Form submitted with values:", values);
};


export   const validatePan = (pan) => {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(pan);
};


export const verifyPans = async (pan,dobEnabled) => {
  let reqData = {
    investor_id: getData("userData")?.investor_id,
    pan_no: pan,
    mobile_no: getData("userData")?.mobile_no,
    redirection_url: `${MY_BASE_URL}/kyc?`,
    fd_id: +sessionStorage.getItem("fdId") ?? 0,
    ckyc_auth_factor: !dobEnabled ? "dob" : "mobile",
  };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_ENDPOINT_BASE_URL}/onboarding/verifypan`,
      reqData,
    );
    console.log("res", response);
    debugger;
  } catch (error) {
    console.error("Error:", error);
    if (error?.response?.data?.status === 409) {
      toast.error(error?.response?.data?.message);
    } else {
      toast.error("Something went wrong");
    }
  } 
};