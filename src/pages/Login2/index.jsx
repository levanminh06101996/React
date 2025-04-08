// import config from "@/config";
// import httpRequest from "@/utils/httpRequest";
import { useForm } from "react-hook-form";
// import { data, useNavigate, useSearchParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import loginschema from "@/schema/loginSchema";
import authService from "@/services/authService";
import { useEffect } from "react";
import Inputext from "@/components/Inputext";

let timer;
function Login2() {
  // const [params] = useSearchParams();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    trigger,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", password_confirmation: "" },
    resolver: yupResolver(loginschema),
  });
  const onSubmit = async (data) => {
    const response = await authService.login(data);
    console.log(response);
  };
  const emailValue = watch("email");
  useEffect(() => {
    if (!emailValue) return;
    clearTimeout(timer);
    timer = setTimeout(async () => {
      const isValid = await trigger("email");
      if (isValid) {
        const exists = await authService.checkEmail(emailValue);
        if (exists) {
          setError("email", {
            type: "manual",
            message: "email này đã được sử dụng",
          });
        }
      }
    }, 800);
  }, [emailValue, trigger, setError]);
  return (
    <div>
      <h1>Login2</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Inputext
          name="email"
          register={register}
          message={errors.email?.message}
        />
        <br />

        <Inputext
          name="password"
          register={register}
          message={errors.password?.message}
        />
        <br />

        <Inputext
          name="password_confirmation"
          register={register}
          message={errors.password_confirmation?.message}
        />
        <br />

        <button>Login2</button>
      </form>
    </div>
  );
}

export default Login2;
