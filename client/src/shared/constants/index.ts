export const loginformControls = [
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
        validation : {required : true}
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your password",
        componentType : "input",
        type : "password",
        validation : {required : true, maxLength : 20, minLength : 6}
    },
]
export const registerformControls = [
    {
        name : "name",
        label : "Name",
        placeholder : "Enter your name",
        componentType : "input",
        type : "text",
        validation : {required : true}
    },
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
        validation : {required : true}
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your password",
        componentType : "input",
        type : "password",
        validation : {required : true, maxLength : 20, minLength : 6}
    },
]
export const forgotPasswordformControls = [
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
        validation : {required : true}
    },
]
export const resetPasswordFormControls = [
  {
    name: "password",
    label: "New Password",
    placeholder: "Enter your new password",
    componentType: "input",
    type: "password",
    validation: { required: true, minLength: 6 },
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Re-enter your new password",
    componentType: "input",
    type: "password",
    validation: { required: true, minLength: 6 },
  },
];

export const usersFormControls = [
    {
        name : "username",
        label : "Username",
        placeholder : "Enter your username",
        componentType : "input",
        type : "text",
        validation : {required : true, maxLength : 20, minLength : 6}
    },
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
        validation : {required : true}
    },
    {
        name : "phone",
        label : "Phone",
        placeholder : "Enter your phone",
        componentType : "input",
        type : "text",
        validation : {required : true}
    },
    {
        name : "location",
        label : "Location",
        placeholder : "Enter your location",
        componentType : "input",
        type : "text",
        validation : {required : true}
    },
    {
      name: "status",
      label: "Status",
      placeholder: "Select user status",
      componentType: "select",
      validation : {required : true},
        options: [
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
        { value: "Suspended", label: "Suspended" },
    ],
    },
    {
      name: "role",
      label: "Role",
      placeholder: "Select user role",
      componentType: "select",
      validation : {required : true},
      options: [
        { value: "Super Admin", label: "Super Admin" },
        { value: "Admin", label: "Admin" },
        { value: "Editor", label: "Editor" },
        { value: "Moderator", label: "Moderator" },
        { value: "User", label: "User" },
    ],
    },

]
