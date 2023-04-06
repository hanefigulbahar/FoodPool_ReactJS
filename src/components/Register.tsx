import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { addSessionUser, setCreateSuccess } from "../features/sessionSlice";
import { RestaurantServices } from "../services";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { UserSession } from "../types/user";

type RegisterProps = {
  handleClickShowPassword: () => void;
  loginCardHandler: (id: number) => void;
};

function Register({
  handleClickShowPassword,
  loginCardHandler,
}: RegisterProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.session.sessionUser);
  const count = useAppSelector((state) => state.session.count);
  const showPassword = useAppSelector((state) => state.session.showPassword);
  const userInfoHandler = ({
    email = user.email,
    firstName = user.firstName,
    lastName = user.lastName,
    phone = user.phone,
    password = user.password,
    rePassword = user.rePassword,
  }: UserSession) => {
    dispatch(
      addSessionUser({
        email,
        firstName,
        lastName,
        phone,
        password,
        rePassword,
      })
    );
  };
  const submitHandle = (event: any) => {
    event.preventDefault();
    if (user.password !== user.rePassword) {
      dispatch(setCreateSuccess(false));
    } else {
      RestaurantServices.postUser(user)
        .then((res) => dispatch(setCreateSuccess(true)))
        .catch((err) => dispatch(setCreateSuccess(false)));
    }

    setTimeout(() => {
      dispatch(setCreateSuccess(null));
    }, 2000);
  };
  return (
    <>
      <div
        data-testid={"login-modal"}
        className="flex flex-col justify-center items-center bg-white h-96  laptop:w-1/3 mobileS:w-screenh-96 p-10 border shadow-md rounded-lg">
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
              What's your email?
            </div>
            <div className="text-gray-400 mobileS:text-xs">
              We'll check if you have an account
            </div>
            <div>
              <input
                className="w-full border-2 border-gray-400 outline-none px-3 rounded-md p-2 focus:border-orange-400 "
                type="text"
                placeholder="E-mail"
                onChange={(e) => userInfoHandler({ email: e.target.value })}
                value={user.email}
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
                className="text-lg"
                alt="user"
                src="https://img.icons8.com/plasticine/100/null/test-account.png"
              />
              <div className="text-gray-400 mobileS:text-xs">
                We need a some information!
              </div>
            </div>
            <input
              className="w-full border-2 border-gray-400 outline-none px-3 rounded-md p-2 focus:border-orange-400 "
              type="text"
              placeholder="FirstName"
              onChange={(e) => userInfoHandler({ firstName: e.target.value })}
              value={user.firstName}
            />
            <input
              className="w-full border-2 border-gray-400 outline-none px-3 rounded-md p-2 focus:border-orange-400 "
              type="text"
              placeholder="LastName"
              onChange={(e) => userInfoHandler({ lastName: e.target.value })}
              value={user.lastName}
            />
            <input
              className="w-full border-2 border-gray-400 outline-none px-3 rounded-md p-2 focus:border-orange-400 "
              type="text"
              placeholder="Phone"
              onChange={(e) => userInfoHandler({ phone: e.target.value })}
              value={user.phone}
            />
            <div className="flex gap-3">
              <button
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                onClick={() => loginCardHandler(1)}>
                Backwards
              </button>
              <button
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                onClick={() => loginCardHandler(3)}>
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
              <input
                className="w-full border-2 border-gray-400 outline-none px-3 rounded-md p-2 focus:border-orange-400 "
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => userInfoHandler({ password: e.target.value })}
                value={user.password}
              />
              <button
                onClick={handleClickShowPassword}
                className="absolute top-3 right-2">
                {showPassword ? (
                  <MdVisibilityOff className="text-xl text-gray-400" />
                ) : (
                  <MdVisibility className="text-xl text-gray-400" />
                )}
              </button>
            </div>
            <div className="relative">
              <input
                className="w-full border-2 border-gray-400 outline-none px-3 rounded-md p-2 focus:border-orange-400 "
                type={showPassword ? "text" : "password"}
                placeholder="Re-Password"
                onChange={(e) =>
                  userInfoHandler({ rePassword: e.target.value })
                }
                value={user.rePassword}
              />
              <button
                onClick={handleClickShowPassword}
                className="absolute top-3 right-2">
                {showPassword ? (
                  <MdVisibilityOff className="text-xl text-gray-400" />
                ) : (
                  <MdVisibility className="text-xl text-gray-400" />
                )}
              </button>
            </div>
            <div className="flex gap-3">
              <button
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                onClick={(e) => loginCardHandler(2)}>
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
}

export default Register;
