import * as Yup from "yup";

export const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(25).required("Please enter your first name"),
  lname: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  phone: Yup.string().max(10).required("Please enter your phone number"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password do not match"),
});
