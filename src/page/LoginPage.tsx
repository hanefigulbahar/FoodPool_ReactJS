import { IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type Props = {};

const LoginPage = (props: Props) => {
  const [count, setCount] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [newAccount, setNewAccount] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const counitine = (id: number) => {
    setCount(id);
  };
  const selectedAccount = (account: boolean) => {
    setCount(1);
    setNewAccount(account);
  };
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen ">
      <div className=" flex gap-1 justify-end items-center w-1/3 px-2 ">
        <button
          onClick={(e) => selectedAccount(false)}
          className=" text-white border focus:bg-green-500 bg-green-400 w-1/4 rounded-lg rounded-b-none p-2 "
        >
          Login
        </button>
        <button
          onClick={(e) => selectedAccount(true)}
          className=" text-white border focus:bg-green-500 bg-green-400 w-1/4 rounded-lg rounded-b-none p-2 "
        >
          Register
        </button>
      </div>
      {newAccount ? (
        <div className="flex flex-col justify-center items-center bg-white w-1/3 h-96 p-10 border  shadow-md rounded-lg ">
          {count === 1 && (
            <div className="flex flex-col gap-4 w-full p-3">
              <div>
                <img
                  className="text-lg"
                  alt="mail"
                  src="https://img.icons8.com/clouds/100/null/important-mail.png"
                />
              </div>
              <div className=" font-semibold text-lg">What's your email?</div>
              <div className="text-gray-400">
                We'll check if you have an account
              </div>
              <div>
                <TextField
                  className="w-full"
                  size="small"
                  color="warning"
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
              </div>
              <button
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                onClick={(e) => counitine(2)}
              >
                Counitine
              </button>
            </div>
          )}
          {count === 2 && (
            <div className="flex flex-col gap-4 w-full p-3">
              <div>
                <img
                  alt="user"
                  src="https://img.icons8.com/plasticine/100/null/test-account.png"
                />
                <div className="text-gray-400">We need a some information!</div>
              </div>
              <TextField
                className="w-full"
                size="small"
                color="warning"
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                className="w-full"
                size="small"
                color="warning"
                id="outlined-basic"
                label="Surname"
                variant="outlined"
              />
              <TextField
                className="w-full"
                size="small"
                color="warning"
                id="outlined-basic"
                label="Phone"
                variant="outlined"
              />
              <div className="flex gap-3">
                <button
                  className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                  onClick={(e) => counitine(1)}
                >
                  Backwards
                </button>
                <button
                  className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                  onClick={(e) => counitine(3)}
                >
                  Counitine
                </button>
              </div>
            </div>
          )}
          {count === 3 && (
            <div className="flex flex-col gap-4 w-full p-3">
              <div>
                <img
                  alt="pasword"
                  src="https://img.icons8.com/plasticine/100/null/user-credentials.png"
                />
                <div className="text-gray-400">Create password!</div>
              </div>
              <div className="relative">
                <TextField
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
                  position="end"
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              </div>
              <div className="relative">
                <TextField
                  className="w-full"
                  size="small"
                  color="warning"
                  id="outlined-basic"
                  label="Re-Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                />
                <InputAdornment
                  className=" absolute right-3 top-1/2"
                  position="end"
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                  onClick={(e) => counitine(2)}
                >
                  Backwards
                </button>
                <button className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto">
                  Finish
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-white w-1/3 h-96 p-10 border  shadow-md rounded-lg ">
          {count === 1 && (
            <div className="flex flex-col gap-4 w-full p-3">
              <div>
                <img
                  className="text-lg"
                  alt="mail"
                  src="https://img.icons8.com/clouds/100/null/important-mail.png"
                />
              </div>
              <div className=" font-semibold text-lg">Welcome Dear!</div>
              <div className="text-gray-400">Enter your email!</div>
              <div>
                <TextField
                  className="w-full"
                  size="small"
                  color="warning"
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
              </div>
              <button
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                onClick={(e) => setCount(2)}
              >
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
                  position="end"
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                  </IconButton>
                </InputAdornment>
              </div>
              <div className="flex gap-3">
                <button
                  className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                  onClick={(e) => counitine(1)}
                >
                  Backwards
                </button>
                <button className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto">
                  Finish
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
