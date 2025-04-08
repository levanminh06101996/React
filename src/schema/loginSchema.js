import authService from "@/services/authService";
import * as yup from "yup";

const loginschema = yup
  .object({
    email: yup
      .string()
      .required("Email là bắt buộc")
      .min(3, "trường này tối thiểu 8 ki tu")
      .max(30, "truong nay toi da 10 ki tu"),

    password: yup
      .string()
      .required("truong nay bat buoc phai nhap")
      .min(4, "trường này tối thiểu 4 ki tu")
      .max(30, "truong nay toi da 8 ki tu"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), "mật khẩu không khớp"])
      .required("trường bắt buộc"),
    // password_confirmation: yup
    //   .string()
    //   .test(
    //     "password_confirmation",
    //     "mat khau khong khop",
    //     (value, context) => {
    //       return value === context.parent.password;
    //     }
    //   ),
  })
  .required();

export default loginschema;
