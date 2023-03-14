import * as Yup from "yup";

export const logInSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Email"),
  password: Yup.string().min(6).required("Please Enter password"),
});

export const addEmpSchema = Yup.object({
  empName: Yup.string().min(2).required("Please Enter Name"),
  empId: Yup.string().min(2).required("Enter Empployee Id"),
  empEmail: Yup.string().email().required("Enter Email"),
  empMobile: Yup.number().min(9).required("Enter Mobile Number"),
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
