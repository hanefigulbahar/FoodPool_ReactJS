import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import { setCount, setShowPassword } from "../features/sessionSlice";
import { useAppDispatch, useAppSelector } from "../store";
import Alerts from "../components/Alerts";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const showPassword = useAppSelector((state) => state.session.showPassword);
  const createAcounth = useAppSelector((state) => state.session.createSuccess);
  const [newAccount, setNewAccount] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    showPassword
      ? dispatch(setShowPassword(false))
      : dispatch(setShowPassword(true));
  };

  const loginCardHandler = (id: number) => {
    dispatch(setCount(id));
  };
  const selectedAccount = (account: boolean) => {
    dispatch(setCount(1));
    setNewAccount(account);
  };
  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        {createAcounth === true && (
          <Alerts title="Create Account Succsesfly!" />
        )}
        {createAcounth === false && (
          <Alerts title="Upps,something went wrong" alertType="error" />
        )}
      </div>
      <div className="flex flex-col justify-center items-center w-screen h-screen ">
        <div className=" flex gap-1 justify-end items-center w-1/3 px-2 ">
          <button
            onClick={() => selectedAccount(false)}
            className=" text-white border focus:bg-green-500 bg-green-400 w-1/4 rounded-lg rounded-b-none p-2 "
          >
            Login
          </button>
          <button
            onClick={() => selectedAccount(true)}
            className=" text-white border focus:bg-green-500 bg-green-400 w-1/4 rounded-lg rounded-b-none p-2 "
          >
            Register
          </button>
        </div>
        {newAccount ? (
          <Register
            handleClickShowPassword={handleClickShowPassword}
            loginCardHandler={loginCardHandler}
          />
        ) : (
          <Login
            loginCardHandler={loginCardHandler}
            handleClickShowPassword={handleClickShowPassword}
          />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
