import * as Yup from "yup";

export const NomieeValidationSchema = Yup.object().shape({
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