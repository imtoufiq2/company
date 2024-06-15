import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import LeftArrow from "../../../Icons/LeftArrow";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";
import { endpoints } from "../../../services/endpoints";
import { getData } from "../../../utils/Crypto";
import Button from "../../atoms/button";
import OptionHeading from "../../atoms/optionHeading";
import OptionHeader from "../../molecules/optionHeader";

// Validation schema
const validationSchema = Yup.object({
  correspondentAddress: Yup.object({
    addressLine1: Yup.string()
      .when("$authorize", {
        is: false,
        then: () => Yup.string().required("Address Line 1 is required"),
      })
      .matches(/^[a-zA-Z0-9\s]+$/, "No special characters allowed"),

    addressLine2: Yup.string()
      .when("$authorize", {
        is: false,
        then: () => Yup.string().required("Address Line 2 is required"),
      })
      .matches(/^[a-zA-Z0-9\s]+$/, "No special characters allowed"),
    pincode: Yup.string()
      .when("$authorize", {
        is: false,
        then: () =>
          Yup.string()
            .required("Pincode is required")
            .length(6, "Pincode must be exactly 6 digits"),
      })
      .matches(/^[0-9]+$/, "Pincode must contain only numbers"),

    city: Yup.string()
      .when("$authorize", {
        is: false,
        then: () => Yup.string().required("City is required"),
        otherwise: () => Yup.string().optional(),
      })
      .matches(/^[a-zA-Z\s]+$/, "No special characters allowed"),
    state: Yup.string()
      .when("$authorize", {
        is: false,
        then: () => Yup.string().required("State is required"),
        otherwise: () => Yup.string().optional(),
      })
      .matches(/^[a-zA-Z\s]+$/, "No special characters allowed"),
    country: Yup.string()
      .when("$authorize", {
        is: false,
        then: () => Yup.string().required("Country is required"),
        otherwise: () => Yup.string().optional(),
      })
      .matches(/^[a-zA-Z\s]+$/, "No special characters allowed"),
  }),
  authorize: Yup.boolean(),
});

const UserAddress = () => {
  const navigate = useNavigate();
  const [addressFromApi, setAddressFromApi] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  // console.log("selectedAddress", selectedAddress);
  const [authorize, setAuthorize] = useState(true);
  console.warn("selectedAddress", selectedAddress);
  useBackgroundColor();

  useEffect(() => {
    const getAddressData = async () => {
      try {
        const response = await axios.post(
          // "https://altcaseinvestor.we3.in/api/v1/profile",
          `${endpoints?.baseUrl}/profile`,
          {
            display_location: "Address",
            method: "Get",
            investor_id: getData("userData")?.investor_id,
            fd_investment_id: Number(
              sessionStorage.getItem("fd_investment_id"),
            ),
          },
        );
        setAddressFromApi(response.data.data.addresses);
        return response.data;
      } catch (error) {
        console.error("Error fetching address data:", error);
      }
    };
    getAddressData();
  }, []);

  const handleAuthorizeChange = (e, setFieldValue) => {
    const { checked } = e.target;
    setAuthorize(checked);
    setFieldValue("authorize", checked);

    setFieldValue("correspondentAddress", {
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    });
  };

  const handleSubmit = async (values, { resetForm }) => {
    // console.log("dasfsd", values);
    // if (values.authorize && selectedAddress !== null) {
    //   console.warn("Selected Address:", addressFromApi[selectedAddress]);
    // } else {
    //   console.warn("Correspondent Address:", {
    //     location: "Address from input field",
    //     address: `${values.correspondentAddress?.addressLine1} ${values.correspondentAddress?.addressLine2} ${values.correspondentAddress?.city}  ${values.correspondentAddress?.pincode}`,
    //   });
    // }
    // console.log("joy", values);
    // console.log("currentSelectedAddress", currentSelectedAddress);
    let xmlData = "";
    if (!values.authorize) {
      xmlData = `<D><R><ADDID>${currentSelectedAddress?.address_id ?? 0}</ADDID><ADD1>${currentSelectedAddress?.address_line_1 ?? ""}</ADD1><ADD2>${currentSelectedAddress?.address_line_2 ?? ""}</ADD2><PINCODE>${currentSelectedAddress?.pincode ?? ""}</PINCODE><CITY>${currentSelectedAddress?.city ?? ""}</CITY><STATE>${currentSelectedAddress?.state ?? ""}</STATE><COUNTRY>${currentSelectedAddress?.country ?? ""}</COUNTRY></R><R><ADDID>${values.correspondentAddress.address_id ?? 0}</ADDID><ADD1>${values.correspondentAddress.addressLine1}</ADD1><ADD2>${values.correspondentAddress.addressLine2}</ADD2><PINCODE>${values.correspondentAddress.pincode}</PINCODE><CITY>${values.correspondentAddress.city}</CITY><STATE>${values.correspondentAddress.state}</STATE><COUNTRY>${values.correspondentAddress.country}</COUNTRY><ADDTYPE>${values?.address_type ?? "CA"}</ADDTYPE></R></D>`;
    } else {
      xmlData = `<D><R><ADDID>${currentSelectedAddress?.address_id ?? 0}</ADDID><ADD1>${currentSelectedAddress?.address_line_1 ?? ""}</ADD1><ADD2>${currentSelectedAddress?.address_line_2 ?? ""}</ADD2><PINCODE>${currentSelectedAddress?.pincode ?? ""}</PINCODE><CITY>${currentSelectedAddress?.city ?? ""}</CITY><STATE>${currentSelectedAddress?.state ?? ""}</STATE><COUNTRY>${currentSelectedAddress?.country ?? ""}</COUNTRY><ADDTYPE>${currentSelectedAddress?.address_type ?? "CA"}</ADDTYPE></R></D>`;
    }

    const payload = {
      address_data_xml: xmlData,
      fd_investment_id: Number(sessionStorage.getItem("fd_investment_id")),
      investor_id: Number(getData("userData")?.investor_id),
      is_permanent_address_correspondent: values?.authorize ? 1 : 0,
    };
    try {
      const response = await axios.post(
        // "https://altcaseinvestor.we3.in/api/v1/invest/updateaddress",
        `${endpoints?.baseUrl}/invest/updateaddress`,
        payload,
      );
      console.log("Form Data: ", response?.data);
      if (response?.data?.status === 200) {
        navigate("/professional-details");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
    }

    resetForm();
  };

  console.log("setSelectedAddresssetSelectedAddress", selectedAddress);
  console.log("currentSelectedAddress", currentSelectedAddress);

  const regexCheck = (e, setFieldValue) => {
    const { value } = e.target;

    if (value.length > 6) {
      // console.log(value.length);
      return;
    } else {
      setFieldValue("correspondentAddress.pincode", value);
    }
  };
  useEffect(() => {
    setCurrentSelectedAddress(addressFromApi?.[0]);
    console.log("addressFromApiaddressFromApi", addressFromApi);
  }, [addressFromApi]);
  // console.log("currentSelectedAddress", currentSelectedAddress);
  return (
    <div className="mx-auto mb-4 mt-8 flex w-full max-w-[1008px] flex-col gap-5 px-6 sm:max-w-[592px] md:gap-7">
       <span className="md:hidden mb-3">
        <LeftArrow width="20" height="20" onClickFun={() => navigate(-1)} /> 
        </span>
      <OptionHeader
        title="Address Details"
        subTitle="Enter your permanent and correspondence address below."
      />

      <Formik
        initialValues={{
          correspondentAddress: {
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
          },
          authorize: authorize,
        }}
        validationSchema={validationSchema}
        // validateOnChange={false}
        // validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, handleChange }) => (
          <>
            <div id="_topAddress" className="flex flex-col gap-6">
           
              <OptionHeading
                text="Choose Your Permanent Address"
                className="text-xs leading-5 text-[#8897AE]"
              />
              <div id="_addressFromApi" className="flex flex-col gap-3">
                {addressFromApi.map((curAddress, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-5 rounded-xl border-[0.5px] bg-white p-5"
                  >
                    {/* {console.log("curAddress", curAddress)} */}
                    <div
                      id="_top"
                      className="flex items-center justify-between"
                    >
                      <OptionHeading
                        text={"Address 1"}
                        className="text-[#21B546]"
                      />
                      <input
                        type="radio"
                        id={`_radio_${index}`}
                        name="selectedAddress"
                        className="min-h-4 min-w-4 p-4 accent-[#00a700]"
                        // disabled={!values.authorize}
                        checked={selectedAddress === index}
                        onChange={() => setSelectedAddress(index)}
                      />
                    </div>
                    <OptionHeading
                      text={curAddress.address_line_1}
                      className="medium-text"
                    />
                  </div>
                ))}
              </div>

              <div id="_checkbox" className="flex items-start gap-2">
                <Field
                  name="authorize"
                  type="checkbox"
                  className="min-h-4 min-w-4 p-4 accent-[#00a700]"
                  onChange={(e) => handleAuthorizeChange(e, setFieldValue)}
                  checked={values.authorize}
                />
                <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#2D3643]">
                  My Correspondent Address is same as my Permanent Address
                </p>
              </div>
            </div>

            <Form id="_box" className="flex flex-col gap-6">
              {!values.authorize && (
                <div
                  id="_bottomAddress"
                  className="flex flex-col gap-6 rounded-xl bg-white md:border-[0.5px] md:p-8"
                >
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
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
                      className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                      placeholder="Street, Locality, Area"
                    />
                    <ErrorMessage
                      name="correspondentAddress.addressLine2"
                      component="div"
                      className="mt-1 text-xs text-red-500"
                    />
                  </div>
                  <div id="_pinAndCity" className="flex gap-3">
                    <div id="_left" className="w-full">
                      <OptionHeading text="Pincode" className="medium-text" />
                      <Field
                        name="correspondentAddress.pincode"
                        type="number"
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                        placeholder="Enter Pincode"
                        value={values.correspondentAddress.pincode}
                        onChange={(e) => {
                          e.preventDefault();
                          regexCheck(e, setFieldValue);
                        }}
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
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                        placeholder="Enter City"
                      />
                      <ErrorMessage
                        name="correspondentAddress.city"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>
                  </div>
                  <div id="_stateAndCountry" className="flex gap-3">
                    <div id="_left" className="w-full">
                      <OptionHeading text="State" className="medium-text" />
                      <Field
                        name="correspondentAddress.state"
                        type="text"
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
              <div id="_button" className="flex items-center gap-5">
                <Button
                  label="Go Back"
                  type="button"
                  className="medium-text hidden max-h-12 rounded-md border border-[#55D976] text-base leading-7 tracking-[-0.3] text-[#21B546] md:block"
                />
                <Button
                  label="Continue"
                  type="submit"
                  className="medium-text max-h-12 bg-[#21B546] text-base leading-7 tracking-[-0.3] text-white"
                />
              </div>
            </Form>
          </>
        )}
      </Formik>
      <div id="spacing" className="md:h-8" />
    </div>
  );
};

export default UserAddress;
