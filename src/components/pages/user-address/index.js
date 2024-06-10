import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import Button from "../../atoms/button/Button";
import OptionHeader from "../../molecules/optionHeader";
import OptionHeading from "../../atoms/optionHeading";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";

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
        then: () => Yup.string().required("Pincode is required"),
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
  const addressFromApi = [
    {
      location: "Address from CIBIL",
      address: `1603, Whitelily, Nahar Amritshakti, Chandivali, Andheri (E), Mumbai - 400072`,
    },
    {
      location: "Address from Aadhaar",
      address: `1201, Vasant Oasis, Sharda Avenue, Marol, Mumbai - 400072`,
    },
  ];

  const [selectedAddress, setSelectedAddress] = useState(0);
  const [authorize, setAuthorize] = useState(true);
  useBackgroundColor();

  const handleAuthorizeChange = (e, setFieldValue) => {
    const { checked } = e.target;
    setAuthorize(checked);
    setFieldValue("authorize", checked);

    if (!checked) {
      setSelectedAddress(null);
    } else {
      setSelectedAddress(0); // Select the first radio button by default when checkbox is checked
    }

    setFieldValue("correspondentAddress", {
      addressLine1: "",
      addressLine2: "",
      pincode: "",
      city: "",
      state: "",
      country: "",
    });
  };

  const handleSubmit = (values) => {
    if (values.authorize && selectedAddress !== null) {
      console.warn("Selected Address:", addressFromApi[selectedAddress]);
    } else {
      // console.warn("Correspondent Address:", values.correspondentAddress);
      console.warn("Correspondent Address:", {
        location: "Address from input field",
        address: `${values.correspondentAddress?.addressLine1} ${values.correspondentAddress?.addressLine2} ${values.correspondentAddress?.city}  ${values.correspondentAddress?.pincode}`,
      });
    }
  };

  return (
    <div className="mx-auto mb-4 mt-8 flex w-full max-w-[1008px] flex-col gap-5 px-6 sm:max-w-[592px] md:gap-7">
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
        {({ values, setFieldValue }) => (
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
                    <div
                      id="_top"
                      className="flex items-center justify-between"
                    >
                      <OptionHeading
                        text={curAddress.location}
                        className="text-[#21B546]"
                      />
                      <input
                        type="radio"
                        id={`_radio_${index}`}
                        name="selectedAddress"
                        className="min-h-4 min-w-4 p-4 accent-[#00a700]"
                        disabled={!values.authorize}
                        checked={selectedAddress === index}
                        onChange={() => setSelectedAddress(index)}
                      />
                    </div>
                    <OptionHeading
                      text={curAddress.address}
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
                        type="text"
                        className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
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
      <div id="spacing" className="h-16" />
    </div>
  );
};

export default UserAddress;
