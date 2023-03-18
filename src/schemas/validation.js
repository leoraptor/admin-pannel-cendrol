import * as Yup from "yup";

// login schema
export const logInSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Please Enter Email"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Please Enter password"),
});

// add new employee schema
export const addEmpSchema = Yup.object({
  empName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Please Enter Name"),
  empId: Yup.string()
    .min(3, "Id must be at least 3 characters")
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

// update employee data schema
export const editEmpSchema = Yup.object({
  newName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Please Enter Name"),
  newUserId: Yup.string()
    .email()
    .min(3, "Id must be at least 3 characters")
    .required("Enter Empployee Id"),
  newEmpId: Yup.string()
    .min(3, "Id must be at least 3 ")
    .required("Enter Employee Id"),
  newMob: Yup.string()
    .matches(
      /^[0-9]{10}$/,
      "Mobile number must be 10 digits with charactersno decimal points"
    )
    .required("Enter Mobile Number"),
  newPass: Yup.string()
    .min(6, "Password must be 6 characters")
    .required("Enter password"),
  newTeam: Yup.string().required("Select Department"),
  newDesignation: Yup.string().required("Select Designation"),
});

// designation schema
export const addDesignationSchema = Yup.object({
  toSendDesignation: Yup.string()
    .min(3, "Designation must be 3 characters")
    .required("Please Enter designation"),
});

// update designation schema
export const updateNewDesignationSchema = (tableDesigType) =>
  Yup.object({
    currentDesignation: Yup.string()
      .notOneOf(
        [tableDesigType],
        "Input value cannot be the same as the old value"
      )
      .required("Designation name is required")
      .min(3, "Designation must be 3 characters")
      .required("Please Enter designation"),
  });

// add new team schema
export const addNewTeamSchema = Yup.object({
  tosendTeam: Yup.string()
    .min(3, "Team must be 3 characters")
    .required("Please Enter Team"),
});

//update team schema
export const updateTeamSchema = (teamDetail) =>
  Yup.object({
    currentTeam: Yup.string()
      .notOneOf([teamDetail], "Input value cannot be the same as the old value")
      .required("Team name is required")
      .min(3, "Team must be 3 characters")
      .required("Please Enter Team"),
  });
