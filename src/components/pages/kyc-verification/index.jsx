import React from "react";
import WatchIcon from "../../../Icons/WatchIcon";
import LeftArrow from "../../../Icons/LeftArrow";
import Verified from "../../atoms/verified";
import clsx from "clsx";
import { ErrorMessage, Field, Formik, Form } from "formik";
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import Email from "../../../Icons/EmailIcons";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CustomTextField } from "../add-nomination/Utils";
import dayjs from "dayjs";

import CustomEmailInput from "../../atoms/customEmailInput";
import { toBeRequired } from "@testing-library/jest-dom/matchers";
import Button from "../../atoms/button/Button";
import { handleSubmit, initialValues, validationSchema } from "./utils";
import { TextField } from "@mui/material";

const KycVerification = () => {
  return (
    <div className="mx-auto mt-8 w-full rounded-md bg-white sm:max-w-[592px] sm:border-[0.5px] md:rounded-2xl">
      <div className="flex h-fit flex-col gap-6 px-6 py-[60px] md:gap-9 md:px-[72px] md:py-[72px]">
        <div
          id="header"
          className="medium-text flex items-baseline justify-between md:flex-row md:items-center"
        >
          <div
            id="leftIcon"
            className="flex flex-col items-baseline gap-8 self-start md:flex-row md:items-center md:gap-4"
          >
            <LeftArrow width="24" height="24" />
            <h2 className="bold-text text-2xl leading-8 tracking-[-0.5px] text-[#1B1B1B]">
              KYC Verification
            </h2>
          </div>
          <button type="button" className="flex items-center gap-1 md:gap-2">
            <WatchIcon />
            <p className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#455468] md:text-base md:leading-7 md:tracking-[-0.3px]">
              Verify Later
            </p>
          </button>
        </div>
        <div>
          <p
            id="content"
            className="regular-text -mt-4 text-left text-sm leading-6 tracking-[-0.2px] text-[#1B1B1B] md:mt-[0.625rem] md:text-base md:leading-7 md:tracking-[-0.3px] md:text-[#1B1B1B]"
          >
            Verify your KYC in 90 seconds to start investing in high rate FDs.
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, errors, touched }) => (
            <Form className="flex flex-col gap-4">
              <div
                id="first-input"
                className="mt-4 flex min-h-[4.75rem] flex-col items-start justify-between gap-1 md:mt-0"
              >
                <label
                  htmlFor="panInput"
                  className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
                >
                  PAN
                </label>
                <Field
                  name="pan"
                  type="text"
                  id="panInput"
                  placeholder="Enter PAN number"
                  className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-2 focus:border-custom-green"
                />
              </div>
              <div
                id="second-input"
                className="flex min-h-[4.75rem] flex-col items-start justify-between gap-1 "
              >
                <label
                  htmlFor="DOBInput"
                  className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
                >
                  Date of Birth
                </label>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat="DD/MM/YYYY"
                    //   value={values?.DateOfBirth}
                    onChange={(newValue) => {}}
                    renderInput={(params) => (
                      <TextField {...params} className="myDatePicker" />
                    )}
                    slotProps={{
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    maxDate={dayjs()}
                  />
                  <DesktopDatePicker
                    sx={{
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        { border: "1px solid gray" }, // at page load
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        { border: "2px solid green" }, // at hover state
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        { border: "3px solid green" }, // at focused state
                    }}
                  />
                </LocalizationProvider> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    inputFormat="DD/MM/YYYY"
                    onChange={(newValue) => {}}
                    renderInput={(params) => (
                      <TextField {...params} className="myDatePicker" />
                    )}
                    slotProps={{
                      inputAdornment: {
                        position: "start",
                      },
                    }}
                    maxDate={dayjs()}
                    sx={{
                      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #AFBACA", // Border at page load
                          minWidth: "100%",
                        },
                      "& input::placeholder": {
                        color: "#8897AE", // Placeholder color
                        fontWeight: 600,
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          border: "1px solid #AFBACA", // Border at hover state
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          border: "2px solid #21B546", // Border at focused state
                        },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div
                id="third-input"
                className="relative flex min-h-[4.75rem] flex-col items-start justify-between gap-1"
              >
                <label
                  htmlFor="nameInput"
                  className="medium-text text-sm  leading-6 tracking-[-0.2px] text-[#3D4A5C]"
                >
                  Full Name
                </label>
                <Field
                  name="fullName"
                  type="text"
                  id="nameInput"
                  placeholder="Enter your full name as on PAN"
                  className="medium-text max-h-[2.875rem] w-full rounded-md border border-[#AFBACA] px-[14px] py-[11px] text-sm leading-6 tracking-[-0.2px] outline-none placeholder:text-[#8897AE] focus:border-2 focus:border-custom-green"
                />
              </div>
              <div
                id="fourth-input"
                className="flex min-h-[4.75rem] flex-col items-start justify-between gap-1 "
              >
                <label
                  htmlFor="emailInput"
                  className="medium-text text-sm leading-6 tracking-[-0.2px] text-[#3D4A5C]"
                >
                  Email Address
                </label>
                <Field
                  name="email"
                  id="emailInput"
                  placeholder="Enter your email address"
                  component={CustomEmailInput}
                />
              </div>

              <Button
                onClick={() => {}}
                label="Continue"
                className={`medium-text mt-7 max-h-12 min-h-14 px-5 py-[0.625rem] text-base leading-7 md:-mt-1   md:py-[0.8125rem] md:text-lg md:leading-[1.875rem] ${
                  toBeRequired
                    ? "bg-custom-green text-[#fff]"
                    : "bg-[#F0F3F9] text-[#AFBACA] "
                } ${false ? "opacity-60" : "opacity-100"}`}
              />

              {/* <Button className="success-button">Success</Button> */}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default KycVerification;
