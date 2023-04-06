import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addSessionUser, setCreateSuccess } from "../features/sessionSlice";
import { RestaurantServices } from "../services";
import { useAppDispatch, useAppSelector } from "../store/hook";
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
  const submitHandle = async () => {
    await RestaurantServices.getAllUser()
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
      <div
        data-testid={"login-modal"}
        className="flex flex-col justify-center items-center bg-white h-96 laptop:w-1/3 mobileS:w-screenh-96 p-10 border shadow-md rounded-lg ">
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
              <input
                data-testid={"login-email"}
                className="w-full border-2 border-gray-400 outline-none px-3 rounded-md p-2 focus:border-orange-400 "
                type="text"
                placeholder="E-mail"
                onChange={(e) => userInfoHandler({ email: e.target.value })}
                value={user.email}
              />
            </div>
            <button
              data-testid={"login-next"}
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
              <input
                data-testid={"login-password"}
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
            <div className="flex gap-3">
              <button
                className="flex justify-center items-center text-white border bg-orange-400 w-1/2 rounded-lg p-2 m-auto"
                onClick={() => loginCardHandler(1)}>
                Backwards
              </button>
              <button
                data-testid={"login-finished"}
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
