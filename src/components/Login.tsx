import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addSessionUser, setCreateSuccess } from "../features/sessionSlice";
import { RestaurantServices } from "../services";
import { useAppDispatch, useAppSelector } from "../store";
import { UserSession } from "../types/user";

interface SinginProps {
  handleClickShowPassword: () => void;
  loginCardHandler: (id: number) => void;
}
const Login = ({ handleClickShowPassword, loginCardHandler }: SinginProps) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.session.count);
  const showPassword = useAppSelector((state) => state.session.showPassword);
  const user = useAppSelector((state) => state.session.sessionUser);
  const navigate = useNavigate();
  const userInfoHandler = ({
    email = user.email,
    password = user.password,
  }: UserSession) => {
    dispatch(addSessionUser({ email, password }));
  };
  const submitHandle = () => {
    RestaurantServices.getAllUser()
      .then((res) => authenticationControl(res))
      .catch((err) => console.log(err));
  };

  const authenticationControl = (res: UserSession) => {
    const dataFilter = res.filter(
      (data: { email: string | undefined; password: string | undefined }) =>
        data.email === user.email && data.password === user.password
    );
    if (dataFilter.length > 0) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(dataFilter));
    } else {
      dispatch(setCreateSuccess(false));
      setTimeout(() => {
        dispatch(setCreateSuccess(null));
      }, 2000);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white  laptop:w-1/3 mobileS:w-screenh-96 p-10 border shadow-md rounded-lg ">
        {count === 1 && (
          <div className="flex flex-col gap-4 w-full p-3">
            <div>
              <img
                className="text-lg"
                alt="mail"
                src="https://img.icons8.com/clouds/100/null/important-mail.png"
              />
            </div>
            <div className=" font-semibold laptop:text-lg mobileS:text-base">
              Welcome Dear!
            </div>
            <div className="text-gray-400 mobileS:text-xs">
              Enter your email!
            </div>
            <div>
              <TextField
                required={true}
                onChange={(e) => userInfoHandler({ email: e.target.value })}
                className="w-full"
                value={user.email}
                size="small"
                color="warning"
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
            </div>
            <button
              className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
              onClick={() => loginCardHandler(2)}>
              Counitine
            </button>
          </div>
        )}
        {count === 2 && (
          <div className="flex flex-col gap-4 w-full p-3">
            <div>
              <img
                alt="pasword"
                src="https://img.icons8.com/plasticine/100/null/user-credentials.png"
              />
              <div className="text-gray-400">Enter your password!</div>
            </div>
            <div className="relative">
              <TextField
                required={true}
                onChange={(e) => userInfoHandler({ password: e.target.value })}
                className="w-full"
                size="small"
                color="warning"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
              />
              <InputAdornment
                className=" absolute right-3 top-1/2"
                position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end">
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            </div>
            <div className="flex gap-3">
              <button
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                onClick={() => loginCardHandler(1)}>
                Backwards
              </button>
              <button
                onClick={submitHandle}
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto">
                Finish
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
