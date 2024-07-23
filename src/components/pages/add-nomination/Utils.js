import axios from "axios";
import { endpoints } from "../../../services/endpoints";
import { getData } from "../../../utils/Crypto";
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import toast from "react-hot-toast";
import { MY_BASE_URL } from "../../../utils/api";

export const getNomineeData = async (setNomineeData) => {
  try {
    const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
      display_location: "Nomination",
      method: "Get",
      investor_id: Number(getData("userData")?.investor_id),
    });
    const selectedNominee = response.data.data.map((el) => {
      return { ...el, isSelected: false };
    });
    setNomineeData(selectedNominee);
  } catch (e) {
    console.error(e);
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};


// Create a styled TextField with custom focus and hover styles
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    border: '1px solid #AFBACA',
    borderRadius: theme.shape.borderRadius,
    padding: '11px 14px',
    '&.Mui-focused': {
      borderColor: 'green',
      boxShadow: '0 0 0 2px rgba(0, 255, 0, 0.2)', // Optional: Adds a shadow effect
    },
    '&:hover': {
      borderColor: 'green', // Ensures the border color stays green on hover
    },
    // Remove default focus outline
    '& .MuiInputBase-input:focus': {
      outline: 'none',
    },
  },
}));

export const CustomTextField = (props) => {
  return <StyledTextField {...props} fullWidth />;
};

export const verifyPayment = async (query) => {
  try {
    const response = await axios.get(
      `${endpoints?.baseUrl}/investment/verify-payment${query}`,
    );
    return response.data;
  } catch (error) {
    if (error?.response?.data?.status === 500) {
      sessionStorage.setItem("showErrorPopUp", true);
    }
    toast.error(error?.message);
    console.error("Error in verifyPayment:", error);
    throw error; // Rethrow the error for further handling
  }
};

export const handleSideEffects = (
  setShowPrompt,
  setNomineeData,
  getNomineeData,
  getDropdownData,
) => {
  document.body.style.backgroundColor = "#F9FAFB";

  const showModal = sessionStorage.getItem("showPrompt");
  if (showModal) {
    setShowPrompt(showModal);
  }

  getNomineeData(setNomineeData);
  getDropdownData();

  return () => {
    document.body.style.backgroundColor = "";
  };
};

export const checkPaymentStatus = async (navigate) => {
  try {
    const fdInvestmentId = Number(sessionStorage.getItem("fd_investment_id"));
    const fdId = Number(sessionStorage.getItem("fdId"));
    const response = await axios.post(
      `${endpoints?.baseUrl}/investment/fd-status`,
      {
        fd_investment_id: fdInvestmentId,
        fd_id: fdId,
      },
    );

    const paymentStatus = response?.data?.data?.payment_status;
    if (paymentStatus === "success") {
      sessionStorage.setItem(
        "paymentData",
        JSON.stringify(response?.data?.data),
      );
      navigate("/maturity-action", { replace: true });
    } else {
      toast.error("Payment failed, please try again");
      navigate("/add-nomination", { replace: true });
    }
  } catch (error) {
    toast.error("Error in Payment");
    navigate("/add-nomination", { replace: true });
  }
};

export const updateNominees = async (value, showPrompt) => {
  let xmlData = "<D>";

  value.forEach((nominee) => {
    xmlData += `<R><D_ID>${nominee.nominee_id}</D_ID><D_VALUE>${Number(nominee.percentage)}</D_VALUE></R>`;
  });

  xmlData += "</D>";

  try {
    const fdInvestmentId = Number(sessionStorage.getItem("fd_investment_id"));
    const investorId = Number(getData("userData")?.investor_id);

    const response = await axios.post(
      `${endpoints?.baseUrl}/investment/updatenominees`,
      {
        fd_investment_id: fdInvestmentId,
        investor_id: investorId,
        nominee_data_xml: xmlData,
        redirection_url: `${MY_BASE_URL}/add-nomination?`,
      },
    );

    const paymentLink = response?.data?.data?.paymentUrl;
    if (response?.data?.status === 200 && paymentLink) {
      window.location.href = paymentLink;
    }

    sessionStorage.setItem("showPrompt", showPrompt);

    return response;
  } catch (error) {
    toast.error("Unexpected error caused by server");
    console.error(error);
    throw error; // Rethrow the error for further handling
  }
};

export const fetchDataAfterRedirect = async (
  locationSearch,
  callApiAfterRedirect,
) => {
  if (locationSearch) {
    const data = locationSearch.substring(1).replace(/&/, "?");
    await callApiAfterRedirect(data);
  }
};

export const validateNomineeData = (values, nomineeData) => {
  const signInData = getData("userData");

  if (
    signInData?.pan_no === values?.PAN ||
    JSON.parse(sessionStorage.getItem("panVerificationInfo"))?.pan_no ===
      values?.PAN
  ) {
    toast.success("Your PAN and the nominee's PAN cannot be the same.");
    return false;
  }

//   const allNominees = [
//     ...nomineeData,
//     { ...values, percentage: Number(values.PercentShare) },
//   ];

//   const totalPercent = allNominees.reduce(
//     (total, nominee) => total + Number(nominee.percentage),
//     0,
//   );

  if (values?.PercentShare > 100) {
    toast.error(`Percent Share cannot exceed 100%`);
    return false;
  }

  const filteredRelations = nomineeData.filter((nominee) =>
    [20, 21, 22, 22, 29, 30, 23].includes(nominee.relationship_id),
  );

  const existingRelation = filteredRelations.some(
    (nominee) => nominee.relationship_id === values?.Relationship,
  );

  if (existingRelation) {
    toast.error(`You already added a nominee with this relationship.`);
    return false;
  }

  return true;
};

export const saveNomineeData = async (values) => {
  try {
    const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
      display_location: "Nomination",
      method: "Modify",
      investor_id: Number(getData("userData")?.investor_id),
      data: [
        {
          nominee_id: 0,
          full_name: values.fullName,
          relationship_id: values.Relationship,
          pan: values.PAN,
          investor_id: Number(getData("userData")?.investor_id),
          address_line_1: values.correspondentAddress.addressLine1,
          address_line_2: values.correspondentAddress.addressLine1,
          pincode: values.correspondentAddress.pincode,
          city: values.correspondentAddress.city,
          state: values.correspondentAddress.state,
          country: values.correspondentAddress.country,
          date_of_birth: values.DateOfBirth,
          percentage: values.PercentShare,
          is_investor_address: Number(values.sameAsInvestor),
          guardian_first_name: values?.guardian?.first_name,
          guardian_middle_name: values?.guardian?.middle_name,
          guardian_last_name: values?.guardian?.last_name,
          guardian_pan: values?.guardian?.guardian_pan,
        },
      ],
    });

    return response;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export const updateNomineeInList = (nomineeList, updatedNominee) =>
  nomineeList.map((nom) =>
    nom.nominee_id === updatedNominee.nominee_id ? { ...updatedNominee } : nom,
  );

// Function to calculate the total percentage
export const calculateTotalPercentage = (nomineeList) =>
  nomineeList.reduce((total, nominee) => total + Number(nominee.percentage), 0);

// Function to validate the total percentage
export const validatePercentage = (totalPercentage) => {
  if (totalPercentage > 100) {
    toast.error("Percentage share should not exceed 100%");
    return false;
  }
  return true;
};

export const parseDateString = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day); // Months are 0-based
};

// Function to check if a user is over 18
export const isUserUnder18 = (dob) => {
  console.log("Received dob:", dob); // Example format: 19/07/2017

  // Split the dob string into day, month, and year
  const [day, month, year] = dob.split("/").map(Number);

  // Create a Date object from the parsed values
  const birthDate = new Date(year, month - 1, day); // Months are zero-based in JavaScript
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age -= 1;
  }
  return age < 18;
};

export const formatDates = (dateObject) => {
  console.log("Received object:", dateObject);

  // Check if the object has the required properties
  if (!dateObject || !dateObject.$d || !(dateObject.$d instanceof Date)) {
    return "Invalid Date"; // Return a default value if the dateObject is invalid
  }

  // Extract date components from the dateObject
  const day = String(dateObject.$d.getDate()).padStart(2, "0");
  const month = String(dateObject.$d.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = dateObject.$d.getFullYear();

  console.log(`Formatted date: ${day}/${month}/${year}`);
  return `${day}/${month}/${year}`;
};
