import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as React from "react";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { getData } from "../../../utils/Crypto";
import Button from "../../atoms/button";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";
import NomineeModal from "./../../organism/nomineeModal/index";
import { selectCustomStyle } from "../../../utils/selectCustomStyle";
import Select from "react-select";
import NomineePrompt from "../../organism/nominee-prompt";
import { endpoints } from "../../../services/endpoints";
import { useLocation, useNavigate } from "react-router-dom";
import { MY_BASE_URL } from "../../../utils/api";

const AddNomination = () => {
  const navigate=useNavigate()
  const location=useLocation()
  const [dob, setDob] = React.useState(null);
  const [isOver18, setIsOver18] = React.useState(true);
  const [nomineeData, setNomineeData] = React.useState([]);
  const [selectedNominee, setSelectedNominee] = React.useState([]);
  const [relationDropdown, setRelationDropdown] = React.useState([]);
  const [isModalActive, setIsModalActive] = React.useState(false);
  const [currentNominee, setCurrentNominee] = React.useState(null);
  // const [totalShare, setTotalShare] = React.useState(0);
  const [totalSelectedShare, setTotalSelectedShare] = React.useState(0);
  // const initialValues = {
  //   fullName: "",
  //   Relationship: null,
  //   PAN: "",
  //   PercentShare: "",
  //   DateOfBirth: new Date(),
  //   Address: "",
  //   sameAsInvestor: false,
  //   correspondentAddress: {
  //     addressLine1: "",
  //     addressLine2: "",
  //     pincode: "",
  //     city: "",
  //     state: "",
  //     country: "",
  //   },
  //   isShowDob: true,
  //   guardian: {
  //     first_name: "",
  //     middle_name: "",
  //     last_name: "",
  //     guardian_pan: "",
  //   },
  // };
  const [initialValues, setInitialValues] = React.useState({
    fullName: "",
    Relationship: null,
    PAN: "",
    PercentShare: "",
    DateOfBirth: new Date(),
    Address: "",
    sameAsInvestor: false,
    correspondentAddress: {
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    },
    isShowDob: true,
    guardian: {
      first_name: "",
      middle_name: "",
      last_name: "",
      guardian_pan: "",
    },
  });
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required("Full Name is required")
      .matches(/^[A-Za-z\s]+$/, "Full Name can only contain letters"),
    Relationship: Yup.number(),
    PAN: Yup.string()
      .required("PAN is required")
      .length(10, "PAN must be exactly 10 characters")
      .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
    PercentShare: Yup.number()
      .required("Percent Share is required")
      .typeError("Percent Share must be a number")
      .min(1, "Share must be at least 1%")
      .max(100, "Share must not exceed 100%"),

    DateOfBirth: Yup.string().required("Date of Birth is required"),
    // .matches(
    //   /^(0?[1-9]|[12][0-9]|3[01])[-/](0?[1-9]|1[0-2])[-/]\d{4}$/,
    //   "Invalid Date of Birth format (DD/MM/YYYY)",
    // ),
    correspondentAddress: Yup.object().shape({
      addressLine1: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Address Line 1 is required"),
        otherwise: () => Yup.string().optional(),
      }),
      addressLine2: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Address Line 2 is required"),
        otherwise: () => Yup.string().optional(),
      }),
      pincode: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Pincode is required"),
        otherwise: () => Yup.string().optional(),
      }),
      city: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("City is required"),
        otherwise: () => Yup.string().optional(),
      }),
      state: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("State is required"),
        otherwise: () => Yup.string().optional(),
      }),
      country: Yup.string().when("$sameAsInvestor", {
        is: false,
        then: () => Yup.string().required("Country is required"),
        otherwise: () => Yup.string().optional(),
      }),
    }),
    // ============
    guardian: Yup.object().shape({
      first_name: Yup.string().when("$isShowDob", {
        is: true,
        then: () => Yup.string().required("First name is required"),
        otherwise: () => Yup.string().optional(),
      }),
      middle_name: Yup.string().when("$isShowDob", {
        is: true,
        then: () => Yup.string().required("Middle name is required"),
        otherwise: () => Yup.string().optional(),
      }),
      last_name: Yup.string().when("$isShowDob", {
        is: true,
        then: () => Yup.string().required("Last name is required"),
        otherwise: () => Yup.string().optional(),
      }),
      guardian_pan: Yup.string().when("$isShowDob", {
        is: true,
        then: () => Yup.string().required("Guardian pan is required"),
        otherwise: () => Yup.string().optional(),
      }),
    }),
  });

  const updateShare = (nominee, newShare) => {
    const allSelectedNominees = selectedNominee.map((nom) => {
      if (nom.nominee_id === nominee.nominee_id) {
        return { ...nominee, percentage: newShare };
      }
      return nom;
    });
    // Calculating Percentage again after nominee percentage is changes
    const totalSelectedNomineeShare = allSelectedNominees.reduce(
      (total, nominee) => {
        return total + Number(nominee.percentage);
      },
      0,
    );
    if (totalSelectedNomineeShare > 100) {
      toast.error("Percentage share should not exceed 100%");
      return;
    }

    setTotalSelectedShare(totalSelectedNomineeShare);

    setNomineeData((prevData) =>
      prevData.map((data) =>
        data.nominee_id === nominee.nominee_id
          ? { ...data, percentage: newShare }
          : data,
      ),
    );
    setSelectedNominee((prevData) =>
      prevData.map((data) =>
        data.nominee_id === nominee.nominee_id
          ? { ...data, percentage: newShare }
          : data,
      ),
    );

    setIsModalActive(false);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };
  const getNomineeData = async () => {
    // let xmlData = "";
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/profile",
        `${endpoints?.baseUrl}/profile`,
        {
          display_location: "Nomination",
          method: "Get",
          investor_id: Number(getData("userData")?.investor_id),
        },
      );
      const selectedNominee = response.data.data.map((el) => {
        return { ...el, isSelected: false };
      });
      setNomineeData(selectedNominee);
    } catch (e) {
      console.error(e);
    }
  };
  const [checkingStatus, setIscheckingStatus] = React.useState(null);
  const getDropdownData = async () => {
    // let xmlData = "";
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/profile",
        `${endpoints?.baseUrl}/profile`,
        {
          display_location: "RelationShip",
          method: "Get",
        },
      );
      const relationMapped = response?.data?.data.map((rel) => {
        return {
          label: rel.item_value,
          value: rel.item_id,
        };
      });
      console.log("relationMapped,", relationMapped);
      setRelationDropdown(relationMapped);
    } catch (e) {
      console.error(e);
    }
  };
  const handleCheckboxChange = (nominee_id) => {
    setNomineeData((prevState) => {
      return prevState.map((item) => {
        if (item.nominee_id === nominee_id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      });
    });
  };
  const handleSelectedNominee = (value) => {
    const nomineeExists = selectedNominee.some(
      (nominee) => nominee.nominee_id === value.relationship_id,
    );

    if (!nomineeExists) {
      console.log(totalSelectedShare + Number(value.percentage));
      setTotalSelectedShare((prev) => prev + Number(value.percentage));
      setSelectedNominee((prevValue) => {
        return [...prevValue, value];
      });
    } else {
      setTotalSelectedShare((prev) => prev - Number(value.percentage));
      console.log(totalSelectedShare - Number(value.percentage));
      const remove = selectedNominee.filter(
        (nominee) => nominee.nominee_id !== value.nominee_id,
      );
      setSelectedNominee(remove);
    }
  };
  const handleModalShareChange = (nominee) => {
    setCurrentNominee(nominee);
    setIsModalActive(true);
  };
  const [showPrompt, setShowPrompt] = React.useState(true);
  const handleSaveAndAddMore = async (values, { resetForm, setSubmitting }) => {
    const signInData = getData("userData");

    if (
      signInData?.pan_no === values?.PAN ||
      JSON.parse(sessionStorage.getItem("panVerificationInfo"))?.pan_no ===
        values?.PAN
    ) {
      toast.success("Your PAN and the nominee's PAN cannot be the same.");
      return;
    }

    const allNominees = [
      ...nomineeData,
      { ...values, percentage: Number(values.PercentShare) },
    ];

    const totalPercent = allNominees.reduce((total, nominee) => {
      return total + Number(nominee.percentage);
    }, 0);
    debugger;
    if (totalPercent > 100) {
      toast.error(`Percent Share cannot exceed 100%`);
      return;
    }

    // Filter nominees by the specified relationship IDs
    const filteredRelations = nomineeData.filter((nominee) =>
      [1, 2, 4, 5, 11, 8].includes(nominee.relationship_id),
    );

    // Check if any of the filtered relations match the current relationship
    const existingRelation = filteredRelations.some(
      (nominee) => nominee.relationship_id === values?.Relationship,
    );

    if (existingRelation) {
      toast.error(`You already added a nominee with this relationship.`);
      return;
    }

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

      getNomineeData();
      resetForm();
    } catch (e) {
      console.error(e);
    }
  };

  // const handleSaveAndAddMore = async (values, { resetForm, setSubmitting }) => {
  //   const signInData = getData("userData");

  //   if (
  //     signInData?.pan_no === values?.PAN ||
  //     JSON.parse(sessionStorage.getItem("panVerificationInfo"))?.pan_no ===
  //       values?.PAN
  //   ) {
  //     toast.success("Your PAN and the nominee's PAN cannot be the same.");
  //     return;
  //   }

  //   const allNominees = [
  //     ...nomineeData,
  //     { ...values, percentage: Number(values.PercentShare) },
  //   ];

  //   // Check if the same relationship already exists

  //   // const ifRelationExists = nomineeData.some(
  //   //   (nominee) => nominee.relationship_id == values.Relationship,
  //   // );
  //   console.log("relationship_id", nomineeData);
  //   console.log("relationship_ids", values?.relationship_id);
  //   const totalPercent = allNominees.reduce((total, nominee) => {
  //     return total + Number(nominee.percentage);
  //   }, 0);
  //   debugger;
  //   // if (totalPercent > 100) {
  //   if (totalPercent > 100) {
  //     toast.error(`Percent Share cannot exceed 100%`);
  //     return;
  //   }

  //   const existingRelation = nomineeData.find((nominee) =>
  //     [1, 2, 4, 5, 11, 8].includes(nominee.relationship_id),
  //   );
  //   // const existingRelation = [1, 2, 4, 5, 11, 8].includes(values?.Relationship);
  //   console.log(existingRelation);
  //   // if (existingRelation) {
  //   if (existingRelation?.relationship_id == values?.Relationship) {
  //     toast.error(
  //       // `You already added a nominee with the relationship ${existingRelation.relationship}.`,
  //       `You already added a nominee with this relationship `,
  //     );
  //     return;
  //   }
  //   // }
  //   // }

  //   try {
  //     const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
  //       display_location: "Nomination",
  //       method: "Modify",
  //       investor_id: Number(getData("userData")?.investor_id),
  //       data: [
  //         {
  //           nominee_id: 0,
  //           full_name: values.fullName,
  //           relationship_id: values.Relationship,
  //           pan: values.PAN,
  //           investor_id: Number(getData("userData")?.investor_id),
  //           address_line_1: values.correspondentAddress.addressLine1,
  //           address_line_2: values.correspondentAddress.addressLine1,
  //           pincode: values.correspondentAddress.pincode,
  //           city: values.correspondentAddress.city,
  //           state: values.correspondentAddress.state,
  //           country: values.correspondentAddress.country,
  //           date_of_birth: values.DateOfBirth,
  //           percentage: values.PercentShare,
  //           is_investor_address: Number(values.sameAsInvestor),
  //           guardian_first_name: values?.guardian?.first_name,
  //           guardian_middle_name: values?.guardian?.middle_name,
  //           guardian_last_name: values?.guardian?.last_name,
  //           guardian_pan: values?.guardian?.guardian_pan,
  //         },
  //       ],
  //     });

  //     getNomineeData();
  //     // resetForm();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const handleSaveAndAddMore = async (values, { resetForm, setSubmitting }) => {
  //   const signInData = getData("userData");

  //   if (
  //     signInData?.pan_no === values?.PAN ||
  //     JSON.parse(sessionStorage.getItem("panVerificationInfo"))?.pan_no ===
  //       values?.PAN
  //   ) {
  //     toast.success("Your PAN and the nominee's PAN cannot be the same.");
  //     return;
  //   }

  //   const allNominees = [
  //     ...nomineeData,
  //     { ...values, percentage: Number(values.PercentShare) },
  //   ];

  //   const ifRelationExists = nomineeData.some(
  //     (nominee) => nominee.relationship_id === values.Relationship,
  //   );
  //   console.log("ififRelationExists", ifRelationExists);
  //   const totalPercent = allNominees.reduce((total, nominee) => {
  //     return total + Number(nominee.percentage);
  //   }, 0);

  //   if (totalPercent > 100 || ifRelationExists) {
  //     if (totalPercent > 100) {
  //       toast.error(`Percent Share cannot exceed 100%`);
  //     }
  //     if (ifRelationExists) {
  //       const existingRelation = nomineeData.find((nominee) =>
  //         [1, 2, 4, 5, 11, 8].includes(nominee.relationship_id),
  //       );
  //       if (existingRelation) {
  //         toast.error(
  //           `You already added nominee as a ${existingRelation.relationship}`,
  //         );
  //       }
  //     }
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(`${endpoints?.baseUrl}/profile`, {
  //       display_location: "Nomination",
  //       method: "Modify",
  //       investor_id: Number(getData("userData")?.investor_id),
  //       data: [
  //         {
  //           nominee_id: 0,
  //           full_name: values.fullName,
  //           relationship_id: values.Relationship,
  //           pan: values.PAN,
  //           investor_id: Number(getData("userData")?.investor_id),
  //           address_line_1: values.correspondentAddress.addressLine1,
  //           address_line_2: values.correspondentAddress.addressLine1,
  //           pincode: values.correspondentAddress.pincode,
  //           city: values.correspondentAddress.city,
  //           state: values.correspondentAddress.state,
  //           country: values.correspondentAddress.country,
  //           date_of_birth: values.DateOfBirth,
  //           percentage: values.PercentShare,
  //           is_investor_address: Number(values.sameAsInvestor),
  //           guardian_first_name: values?.guardian?.first_name,
  //           guardian_middle_name: values?.guardian?.middle_name,
  //           guardian_last_name: values?.guardian?.last_name,
  //           guardian_pan: values?.guardian?.guardian_pan,
  //         },
  //       ],
  //     });

  //     getNomineeData();
  //     resetForm();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  const handleProceed = async (value) => {
    console.log(value);
    let xmlData = "<D>"; // Start with the opening <D> tag

    value.forEach((nominee, index) => {
      xmlData += `<R><D_ID>${nominee.nominee_id}</D_ID><D_VALUE>${Number(nominee.percentage)}</D_VALUE></R>`;
    });

    xmlData += "</D>";

    try {
      const response = await axios.post(
        `${endpoints?.baseUrl}/investment/updatenominees`,
        {
          fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
          investor_id: Number(getData("userData")?.investor_id),
          nominee_data_xml: xmlData,
          redirection_url: `${MY_BASE_URL}/add-nomination?`,
        },
      );
      const paymentLink = response?.data?.data?.paymentUrl;
      if (response?.data?.status === 200 && paymentLink) {
        window.location.href = paymentLink;
      }
      
      sessionStorage.setItem("showPrompt", showPrompt);

      console.log(response);
    } catch (e) {
      toast.error("Unexpected error caused by server");
      console.error(e);
    }
  };
 
  const callApiToCheckPaymentStatus = React.useCallback(async () => {
    try {
      // setCheckingPaymentStatus(true);
      const fdInvestmentId = Number(sessionStorage.getItem("fd_investment_id"));
      const fdId = Number(sessionStorage.getItem("fdId"));
      const response = await axios.post(
        `${endpoints?.baseUrl}/investment/fd-status`,
        {
          fd_investment_id: fdInvestmentId,
          fd_id: fdId,
        }
      );

      const paymentStatus = response?.data?.data?.payment_status;
      if (paymentStatus === "success") {
        sessionStorage.setItem("paymentData", JSON.stringify(response?.data?.data));
        navigate("/maturity-action", { replace: true });
      } else {
        toast.error("Payment failed, please try again");
        navigate("/add-nomination", { replace: true });
      }
    } catch (error) {
      toast.error("Error in Payment");
      navigate("/add-nomination", { replace: true });
    } finally {
      // setCheckingPaymentStatus(false);
    }
  }, [navigate]);
  const callApiAfterRedirect = React.useCallback(
    async (query) => {
      // setShowOverlay(true);
      try {
        // setCheckingRedirectStatus(true);

        const response = await axios.get(
          `${endpoints?.baseUrl}/investment/verify-payment${query}`
        );

        // setCheckingRedirectStatus(false);
        // setShowOverlay(false);

        await callApiToCheckPaymentStatus();
      } catch (error) {
        if (error?.response?.data?.status === 500) {
          sessionStorage.setItem("showErrorPopUp", true);
        }
        toast.error(error?.message);
        // setShowOverlay(false);
        console.error("Error in callApiAfterRedirect:", error);
      }
    },
    [callApiToCheckPaymentStatus]
  );
  React.useEffect(() => {
    const fetchData = async () => {
      if (location.search) {
        const data = location.search.substring(1).replace(/&/, "?");
        await callApiAfterRedirect(data);
      }
    };

    fetchData();
  }, [callApiAfterRedirect, location.search]);
  React.useEffect(() => {
    document.body.style.backgroundColor = "#F9FAFB";
    const showModal = sessionStorage.getItem("showPrompt");
    if (showModal) {
      console.log("exists", showModal);
      setShowPrompt(showModal);
    }
    getNomineeData();
    getDropdownData();
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const isUserOver18 = React.useCallback((dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      return age - 1 >= 18;
    }
    return age >= 18;
  }, []);

  React.useEffect(() => {
    const result = isUserOver18(dob);
    console.log("helloasd", result);
    setIsOver18(result);
    setInitialValues((prevValues) => ({
      ...prevValues,
      isShowDob: !isOver18,
    }));
  }, [dob, isOver18, isUserOver18]);
  return (
    <>
      {showPrompt && (
        <NomineePrompt
          setShowLoader={setShowPrompt}
          showLoader={showPrompt}
          checkingStatus={checkingStatus}
          setIscheckingStatus={setIscheckingStatus}
        />
      )}
      <div className="mx-auto mb-8 mt-8 flex w-full max-w-[1008px] flex-col gap-5  px-6 sm:max-w-[592px] md:gap-7">
        <OptionHeader
          title="Add Nomination"
          subTitle="Enter nominee details, so that the money invested could be easily claimed by nominees in the unfortunate event of demise of the investor"
        />
        {/* Show the registered nominees */}
        <div className="flex flex-col gap-4">
          {isModalActive && (
            <NomineeModal
              setShowLoader={setIsModalActive}
              showLoader={isModalActive}
              currentShare={currentNominee?.percentage || 100}
              updateShare={updateShare}
              cur={currentNominee}
            />
          )}
          {console.log(
            "nomineeData",
            nomineeData?.map((cur) => cur?.relationship),
          )}
          {nomineeData.map((nominee) => (
            <div
              key={nominee.nominee_id}
              className={`flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5 md:p-8 ${nominee.isSelected ? "border-green-500" : "border-none"}`}
            >
              <div className="flex justify-between">
                <h4 className="semi-bold-text text-sm leading-6 tracking-[-0.2px] text-[#21B546]">
                  Nominee
                </h4>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="bg-green-500"
                    checked={nominee.isSelected}
                    onChange={() => {
                      handleSelectedNominee(nominee);
                      handleCheckboxChange(nominee.nominee_id);
                    }}
                  />
                </div>
              </div>

              <div className="-mt-5">
                <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                  Name
                </p>
                <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                  {nominee.full_name}
                </h5>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    Relationship
                  </p>
                  <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                    {nominee.relationship}
                  </h5>
                </div>
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    PAN
                  </p>
                  <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                    {nominee.pan}
                  </h5>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    Date of birth
                  </p>
                  <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                    {formatDate(nominee.date_of_birth)}
                  </h5>
                </div>
                <div>
                  <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                    Percent Share
                  </p>
                  <div className="flex items-center gap-2">
                    <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                      {nominee.percentage}%
                    </h5>
                    <img
                      src="/images/edit-pencil.svg"
                      alt="pencil"
                      className={`min-h-[1.125rem] min-w-[1.125rem] max-w-[38px] ${nominee.isSelected ? "cursor-pointer" : "cursor-default"} rounded-md border px-2 py-[0.2rem] transition-all duration-200 ease-in-out active:scale-95`}
                      onClick={() => {
                        if (!nominee.isSelected) {
                          return;
                        }
                        handleModalShareChange(nominee);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <p className="regular-text text-xs leading-5 tracking-[-0.2px] text-[#5E718D]">
                  Address
                </p>
                <h5 className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B]">
                  {nominee.address_line_1 + ", " + nominee.address_line_2}
                </h5>
              </div>
            </div>
          ))}
        </div>
        {/* Nominee form */}
        {/* {totalShare < 100 || */}
        {!nomineeData.some((item) => item.isSelected) && (
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSaveAndAddMore}
          >
            {({ values, setFieldValue, handleSubmit, submitForm }) => (
              <Form
                // onSubmit={(event) => {
                //   event.preventDefault();
                //   submitForm();
                // }}
                className="flex flex-col gap-6 rounded-xl border-[0.5px] bg-white p-8"
              >
                <OptionHeading
                  // text="First Nominee"
                  text={`Nominee ${nomineeData?.length + 1} `}
                  className="text-xs leading-5 text-[#21B546]"
                />
                <div id="_fullName" className="flex flex-col">
                  <OptionHeading text="Full Name" className="medium-text" />
                  <Field
                    name="fullName"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                    placeholder="Enter name as on PAN card"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>

                <div id="_relationShip">
                  <OptionHeading text="Relationship" className="medium-text" />
                  {/* <Field
                  name="Relationship"
                  type="text"
                  className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                  placeholder="Select relation with investor"
                /> */}
                  <Select
                    placeholder="Select relation with Investor"
                    className="medium-text block w-full appearance-none rounded-md border  text-sm leading-6 tracking-[-0.2px] text-[#8897AE] outline-none"
                    name="Relationship"
                    options={relationDropdown || []}
                    onChange={(e) => {
                      console.log(e);
                      setFieldValue("Relationship", e.value);
                      // const ifRelationExists = nomineeData.some(
                      //   (nominee) => nominee.relationship === e.label,
                      // );
                      // if (ifRelationExists) {
                      //   toast.error(`You already added nominee as a ${e.label}`);
                      //   return;
                      // }
                    }}
                    styles={selectCustomStyle}
                  />
                  <ErrorMessage
                    name="Relationship"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div
                  id="_panAndPercentageShare"
                  className="flex flex-col gap-5 md:grid md:grid-cols-2"
                >
                  <div id="_pan">
                    <OptionHeading text="PAN" className="medium-text" />
                    <Field
                      name="PAN"
                      type="text"
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                      placeholder="PAN of nominee"
                    />
                    <ErrorMessage
                      name="PAN"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div id="_percentage">
                    <OptionHeading
                      text="Percent Share"
                      className="medium-text"
                    />
                    <Field
                      name="PercentShare"
                      type="text"
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                      placeholder="Enter % share"
                    />
                    <ErrorMessage
                      name="PercentShare"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                </div>
                <div
                  id="_DOB"
                  className="flex flex-col gap-5 md:grid md:grid-cols-2"
                >
                  <div id="_left">
                    <OptionHeading
                      text="Date of Birth"
                      className="medium-text"
                    />
                    {/* <Field
                      name="DateOfBirth"
                      type="date"
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                      placeholder="DD/MM/YYYY"
                    /> */}
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
      // label="Date Picker"
      renderInput={(params)=><TextField {...params}/>}
      value={selectedData}
      onChange={(newValue)=>{
        setSeletedData(newValue)
      }}
         
        />
    </LocalizationProvider> */}
                    {console.log("value of do b", dob)}
                    <input
                      type="date"
                      id="dob"
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                      name="dob"
                      value={dob}
                      placeholder="ddmmyyyy"
                      onChange={(e) => setDob(e.target.value)}
                      checked={values.isShowDob}
                    />
                    {/* <DatePicker
                    showIcon
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    value={values.DateOfBirth}
                    // selected={values.DateOfBirth}
                    onChange={(date) => setFieldValue(date)}
                  /> */}
                    <ErrorMessage
                      name="DateOfBirth"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div id="_empty" className="hidden md:block"></div>
                </div>
                {/* add gurdian */}
                {!isOver18 && (
                  <div id="_guardian_data" className="flex flex-col gap-6">
                    <OptionHeading
                      text="Guardian Details is Mandatory for Minor"
                      className="text-xs leading-5 text-[#21B546]"
                    />
                    <div
                      id="_firstAndMiddleName"
                      className="flex flex-col gap-5 md:grid md:grid-cols-2"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading
                          text="Guardian First Name"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.first_name"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder=" First Name"
                        />
                        <ErrorMessage
                          name="guardian.first_name"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading
                          text="Guardian Middle Name
"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.middle_name"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder="Middle Name"
                        />
                        <ErrorMessage
                          name="guardian.middle_name"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                    <div
                      id="_guardian_last_name"
                      className="flex flex-col gap-5 md:grid md:grid-cols-2"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading
                          text="Guardian Last Name"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.last_name"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder="Last Name"
                        />
                        <ErrorMessage
                          name="guardian.last_name"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading
                          text="Guardian PAN"
                          className="medium-text"
                        />
                        <Field
                          name="guardian.guardian_pan"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder="Guardian PAN"
                        />
                        <ErrorMessage
                          name="guardian.guardian_pan"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div id="_checkbox" className="flex  items-baseline gap-2">
                  <Field
                    type="checkbox"
                    name="sameAsInvestor"
                    checked={values.sameAsInvestor}
                  />
                  <p>Nominee’s address is same as investor’s address</p>
                </div>

                {!values.sameAsInvestor && (
                  <div id="_bottomAddress" className="flex flex-col gap-6">
                    <OptionHeading
                      text="Correspondent Address"
                      className="text-xs leading-5 text-[#21B546]"
                    />
                    <div id="_line1">
                      <OptionHeading
                        text="Address Line 1"
                        className="medium-text"
                      />
                      <Field
                        name="correspondentAddress.addressLine1"
                        type="text"
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                        placeholder="Apartment, Building, House"
                      />
                      <ErrorMessage
                        name="correspondentAddress.addressLine1"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div id="_line2">
                      <OptionHeading
                        text="Address Line 2"
                        className="medium-text"
                      />
                      <Field
                        name="correspondentAddress.addressLine2"
                        type="text"
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                        placeholder="Street, Locality, Area"
                      />
                      <ErrorMessage
                        name="correspondentAddress.addressLine2"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                    <div
                      id="_pinAndCity"
                      className="flex grid-cols-2 flex-col gap-3 md:grid"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading text="Pincode" className="medium-text" />
                        <Field
                          name="correspondentAddress.pincode"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder="Enter Pincode"
                        />
                        <ErrorMessage
                          name="correspondentAddress.pincode"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading text="City" className="medium-text" />
                        <Field
                          name="correspondentAddress.city"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder="Enter City"
                        />
                        <ErrorMessage
                          name="correspondentAddress.city"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                    <div
                      id="_stateAndCountry"
                      className="flex grid-cols-2 flex-col gap-3 md:grid"
                    >
                      <div id="_left" className="w-full">
                        <OptionHeading text="State" className="medium-text" />
                        <Field
                          name="correspondentAddress.state"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder="Enter State"
                        />
                        <ErrorMessage
                          name="correspondentAddress.state"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                      <div id="_right" className="w-full">
                        <OptionHeading text="Country" className="medium-text" />
                        <Field
                          name="correspondentAddress.country"
                          type="text"
                          className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE]"
                          placeholder="Enter Country"
                        />
                        <ErrorMessage
                          name="correspondentAddress.country"
                          component="div"
                          className="mt-1 text-xs text-red-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div id="_button" className="grid grid-cols-2 gap-4">
                  <Button
                    label="Save & Add More"
                    type="submit"
                    className="medium-text h-fit max-h-12 w-fit whitespace-nowrap rounded-md border border-[#55D976] px-[11.5px] py-[10px] text-base leading-7 tracking-[-0.3px] text-[#21B546] md:block"
                  />
                  <div id="_empty"></div>
                </div>
              </Form>
            )}
          </Formik>
        )}

        <div id="_button" className="mb-4 flex items-center gap-5">
          <Button
            label="Go Back"
            type="button"
            className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3px] text-[#21B546] md:block"
          />
          <Button
            label="Save & Continue"
            type="button"
            disabled={!(totalSelectedShare === 100)}
            className={`medium-text max-h-12  text-base leading-7 tracking-[-0.3px]  ${
              totalSelectedShare === 100
                ? "bg-[#21B546] text-white"
                : " bg-[#F0F3F9] text-[#AFBACA] active:scale-[1]"
            }`}
            onClick={() => {
              if (totalSelectedShare === 100) {
                handleProceed(selectedNominee);
              } else if (totalSelectedShare !== 100) {
                toast.error("Percentage share has to be 100%");
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AddNomination;
