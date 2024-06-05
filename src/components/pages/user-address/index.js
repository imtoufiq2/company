
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../../atoms/button/Button";
import OptionHeader from "../../molecules/optionHeader";
import OptionHeading from "../../atoms/optionHeading";
import useBackgroundColor from "../../../customHooks/useBackgroundColor";

// Validation schema
const validationSchema = Yup.object({
  permanentAddress: Yup.object({
    addressLine1: Yup.string().required("Required"),
    addressLine2: Yup.string().required("Required"),
    pincode: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  }),
  correspondentAddress: Yup.object({
    addressLine1: Yup.string().when("$authorize", {
      is: false,
      then: () => Yup.string().required("Address Line 1 is required"),
      otherwise: () => Yup.string().optional(),
    }),
    addressLine2: Yup.string().when("$authorize", {
      is: false,
      then: () => Yup.string().required("Address Line 2 is required"),
      otherwise: () => Yup.string().optional(),
    }),

    pincode: Yup.string().when("$authorize", {
      is: false,
      then: () => Yup.string().required("Pincode is required"),
      otherwise: () => Yup.string().optional(),
    }),

    city: Yup.string().when("$authorize", {
      is: false,
      then: () => Yup.string().required("City is required"),
      otherwise: () => Yup.string().optional(),
    }),
    state: Yup.string().when("$authorize", {
      is: false,
      then: () => Yup.string().required("State is required"),
      otherwise: () => Yup.string().optional(),
    }),

    country: Yup.string().when("$authorize", {
      is: false,
      then: () => Yup.string().required("Country is required"),
      otherwise: () => Yup.string().optional(),
    }),
  }),
  authorize: Yup.boolean(),
});

const UserAddress = () => {
  useBackgroundColor();

  const handleAuthorizeChange = (e, setFieldValue, values) => {
    const { checked } = e.target;
    setFieldValue("authorize", checked);
    if (checked) {
      setFieldValue("correspondentAddress", values.permanentAddress);
    } else {
      setFieldValue("correspondentAddress", {
        addressLine1: "",
        addressLine2: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
      });
    }
  };
  const handleSubmit = (values) => {
    const apiData = {
      address_data_xml: JSON.stringify(values),
      fd_investment_id: 0,
      investor_id: 0,
      is_permanent_address_correspondent: values.authorize ? 1 : 0,
    };
    //here we will call the
    console.warn("apiData", apiData);
  };
  return (
    // <div
    //   className={`mx-auto mb-4 mt-8 flex w-[90%] max-w-[1008px] flex-col gap-5 md:w-[65%] md:gap-7 lg:w-[41.11%]`}
    // >
    <div className="mx-auto mb-4 mt-8 flex w-full max-w-[1008px] flex-col gap-5  px-6 sm:max-w-[592px] md:gap-7">
      <OptionHeader
        title="Address Details"
        subTitle="Enter your permanent and correspondence address below."
      />
      <Formik
        initialValues={{
          permanentAddress: {
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
          },
          correspondentAddress: {
            addressLine1: "",
            addressLine2: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
          },
          authorize: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form
            id="_box"
            className="flex flex-col gap-6 rounded-xl bg-white md:border-[0.5px] md:p-8"
          >
            <div id="_topAddress" className="flex flex-col gap-6">
              <OptionHeading
                text="Permanent Address"
                className="text-xs leading-5 text-[#21B546]"
              />
              <div id="_line1">
                <OptionHeading text="Address Line 1" className="medium-text" />
                <Field
                  name="permanentAddress.addressLine1"
                  type="text"
                  className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                  placeholder="Apartment, Building, House"
                />
                <ErrorMessage
                  name="permanentAddress.addressLine1"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />
              </div>
              <div id="_line2">
                <OptionHeading text="Address Line 2" className="medium-text" />
                <Field
                  name="permanentAddress.addressLine2"
                  type="text"
                  className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                  placeholder="Street, Locality, Area"
                />
                <ErrorMessage
                  name="permanentAddress.addressLine2"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />
              </div>
              <div id="_pinAndCity" className="flex gap-3">
                <div id="_left" className="w-full">
                  <OptionHeading text="Pincode" className="medium-text" />
                  <Field
                    name="permanentAddress.pincode"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    placeholder="Enter Pincode"
                  />
                  <ErrorMessage
                    name="permanentAddress.pincode"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div id="_right" className="w-full">
                  <OptionHeading text="City" className="medium-text" />
                  <Field
                    name="permanentAddress.city"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    placeholder="Enter City"
                  />
                  <ErrorMessage
                    name="permanentAddress.city"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
              </div>
              <div id="_stateAndCountry" className="flex gap-3">
                <div id="_left" className="w-full">
                  <OptionHeading text="State" className="medium-text" />
                  <Field
                    name="permanentAddress.state"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    placeholder="Enter State"
                  />
                  <ErrorMessage
                    name="permanentAddress.state"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
                <div id="_right" className="w-full">
                  <OptionHeading text="Country" className="medium-text" />
                  <Field
                    name="permanentAddress.country"
                    type="text"
                    className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2] outline-none placeholder:text-[#8897AE]"
                    placeholder="Enter Country"
                  />
                  <ErrorMessage
                    name="permanentAddress.country"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </div>
              </div>
              <div id="_checkbox" className="flex items-baseline gap-2">
                <Field
                  name="authorize"
                  type="checkbox"
                   className="min-h-4 min-w-4 p-4 accent-[#00a700]"
                  
                  onChange={(e) =>
                    handleAuthorizeChange(e, setFieldValue, values)
                  }
                />
                
                <p className="regular-text text-xs leading-5 tracking-[-0.2] text-[#2D3643]">
                  I hereby authorize Utkarsh Small Finance Bank Ltd to fetch my
                  documents from UIDAI to setup my fixed deposit account.
                </p>
              </div>
            </div>
            {!values.authorize && (
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
        )}
      </Formik>
      <div id="spacing" className="h-16" />
    </div>
  );
};

export default UserAddress;
