import * as Yup from "yup";

export const logInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Email"),
  password: Yup.string().min(6).required("Please Enter password"),
});

export const addEmpSchema = Yup.object({
  empName: Yup.string()
    .min(3, "Name must be at least 2 characters")
    .required("Please Enter Name"),
  empId: Yup.string()
    .min(3, "Id must be at least 2 characters")
    .required("Enter Employee Id"),
  empEmail: Yup.string()
    .email("Email must be a valid Email")
    .required("Enter Email"),
  empMobile: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Mobile number must be 10 digits with no decimal points"
    )
    .required("Enter Mobile Number"),
  password: Yup.string().min(6).required("Enter password"),
  empDept: Yup.string().required("Select Department"),
  empDesign: Yup.string().required("Select Designation"),
});

export const editEmpSchema = Yup.object({
  newName: Yup.string().min(2).required("Please Enter Name"),
  newUserId: Yup.string().min(2).required("Enter Empployee Id"),
  newEmpId: Yup.string().email().required("Enter Email"),
  newMob: Yup.number().min(9).required("Enter Mobile Number"),
  newPass: Yup.string().min(6).required("Enter password"),
  newTeam: Yup.string().required("Select Department"),
  newDesignation: Yup.string().required("Select Designation"),
});
