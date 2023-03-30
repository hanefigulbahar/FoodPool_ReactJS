import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import {
  MdOutlineDeliveryDining,
  MdOutlinePersonPinCircle,
} from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";

import BasketCard from "../components/BasketCard";
import { useAppDispatch, useAppSelector } from "../store";
import { RestaurantServices } from "../services";
import { addUser, addUserAddreses } from "../features/userSlice";
import { addOrderCustomer, addOrderDetails } from "../features/orderSlice";
import { User, UserDeliveryAddress } from "../types/user";
import { OrderDetail } from "../types/order";
import { setOpen } from "../features/modalSlice";
import Modals from "../components/Modals";
import { useEffect } from "react";
import { isOrderValidation } from "../features/validationSlice";
import logo from "../assets/Logo.png";

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.user);
  const userAddressesInfo = useAppSelector((state) => state.user.addresses);
  const basket = useAppSelector((state) => state.basket.baskets);
  const orderUser = useAppSelector((state) => state.order);

  const validationOrder = useAppSelector(
    (state) => state.validation.orderValidation
  );

  const deliveryFee: number = 84;
  const total =
    basket.reduce((acc, item) => acc + item.amount * item.fee, 0) + deliveryFee;

  function addUsersValue({
    email = userInfo.email,
    firstName = userInfo.firstName,
    lastName = userInfo.lastName,
    phone = userInfo.phone,
  }: User) {
    dispatch(addUser({ email, firstName, lastName, phone }));
    dispatch(addOrderCustomer(userInfo));
  }

  function addAddresesValue({
    buildingName = userAddressesInfo?.buildingName,
    doorNumber = userAddressesInfo?.doorNumber,
    flat = userAddressesInfo?.flat,
    floor = userAddressesInfo?.floor,
    noteOrRider = userAddressesInfo?.noteOrRider,
  }: UserDeliveryAddress) {
    dispatch(
      addUserAddreses({ buildingName, doorNumber, flat, floor, noteOrRider })
    );
    dispatch(addOrderCustomer(userInfo));
  }
  const validation = ({ orderCustomer, orderDetails }: OrderDetail) => {
    if (
      (orderCustomer.firstName &&
        orderCustomer.email &&
        orderCustomer.lastName &&
        orderCustomer.phone &&
        orderCustomer.addresses?.buildingName &&
        orderCustomer.addresses.doorNumber &&
        orderCustomer.addresses.flat &&
        orderCustomer.addresses.floor) !== ""
    ) {
      RestaurantServices.postData(orderUser)
        .then(() => dispatch(setOpen(true)))
        .catch(() => {
          dispatch(setOpen(false));
        });
    } else {
      dispatch(isOrderValidation(orderCustomer));
    }
  };

  const handlerOrderDataSave = (orderUser: OrderDetail) => {
    validation(orderUser);
  };

  useEffect(() => {
    dispatch(addOrderDetails(basket));
  }, [basket, dispatch]);

  console.log(orderUser);
  return (
    <div>
      <header className="flex justify-between items-center h-16 border shadow-sm mobileS:text-sm mobileS:px-2 laptop:text-base laptop:px-20 ">
        <Link className="flex justify-center items-center gap-2" to="/">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={logo}
            alt=""
          />
          <div>FoodPool</div>
        </Link>
        <div className="flex justify-center items-center h-full">
          <div className="items-center border-r px-1">
            <div className="rounded-md bg-yellow-400/30 p-2">
              <Link
                to="#"
                className="flex gap-1 justify-center items-center text-center my-auto mobileS:text-xs mobileS:mx-2 laptop:text-base laptop:mx-6">
                <BiUserCircle className=" text-xl text-yellow-500" />
                <div className="text-base text-gray-600">Login</div>
              </Link>
            </div>
          </div>
          <div className="p-1 mobileS:hidden tablet:inline">
            <button className="my-auto mx-4 p-1">TR</button>
          </div>
        </div>
      </header>
      <div>
        <>
          <Modals />
        </>
      </div>
      <div className="relative flex laptop:flex-row mobileS:flex-col-reverse justify-center gap-5 laptop:p-20 mobileS:py-10 ">
        <div className="flex flex-col mx-auto gap-10 laptop:w-2/3 ">
          <div className="flex flex-col gap-10 shadow-lg rounded-lg laptop:p-10 mobileS:p-5">
            <div className="flex gap-5 justify-start items-center text-center rounded-lg laptop:text-5xl mobileS:text-4xl">
              <div className="text-orange-300 bg-yellow-400/30 rounded-lg p-2">
                <MdOutlineDeliveryDining />
              </div>
              <div className="laptop:text-2xl mobileS:text-lg">
                Delivery Information
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <div>Delivery Address:</div>
              <div className="flex laptop:flex-row mobileS:flex-col gap-5">
                <TextField
                  error={validationOrder.addresses.buildingName}
                  onChange={(e) =>
                    addAddresesValue({ buildingName: e.target.value })
                  }
                  className="w-full"
                  size="small"
                  color="warning"
                  id="outlined-basic"
                  label="Building name"
                  required
                  variant="outlined"
                />
                <TextField
                  error={validationOrder.addresses.doorNumber}
                  onChange={(e) =>
                    addAddresesValue({ doorNumber: e.target.value })
                  }
                  className="w-full"
                  size="small"
                  color="warning"
                  id="outlined-basic"
                  label="Flat"
                  required
                  variant="outlined"
                />
              </div>
              <div className="flex laptop:flex-row mobileS:flex-col gap-5 ">
                <TextField
                  error={validationOrder.addresses.flat}
                  onChange={(e) => addAddresesValue({ flat: e.target.value })}
                  className="w-full"
                  size="small"
                  color="warning"
                  id="outlined-basic"
                  label="Floor"
                  required
                  variant="outlined"
                />
                <TextField
                  error={validationOrder.addresses.floor}
                  onChange={(e) => addAddresesValue({ floor: e.target.value })}
                  className="w-full"
                  size="small"
                  color="warning"
                  id="outlined-basic"
                  label="Door number"
                  required
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  onChange={(e) =>
                    addAddresesValue({ noteOrRider: e.target.value })
                  }
                  className="w-full"
                  size="medium"
                  color="warning"
                  id="outlined-basic"
                  label="Note to rider - e.g. building, landmark"
                  variant="outlined"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-10 shadow-lg rounded-lg p-10">
              <div className="flex gap-5 justify-start items-center text-center rounded-lg text-5xl">
                <div className="text-orange-300 bg-yellow-400/30 rounded-lg p-2">
                  <IoPersonCircleOutline />
                </div>
                <div className="text-2xl">Personal Information</div>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="flex laptop:flex-row mobileS:flex-col gap-5">
                  <TextField
                    error={validationOrder.email}
                    name="email"
                    onChange={(e) => addUsersValue({ email: e.target.value })}
                    className="w-full"
                    size="small"
                    color="warning"
                    id="outlined-basic"
                    label="Email"
                    required
                    variant="outlined"
                  />
                </div>
                <div className="flex laptop:flex-row mobileS:flex-col gap-5  ">
                  <TextField
                    error={validationOrder.firstName}
                    onChange={(e) =>
                      addUsersValue({ firstName: e.target.value })
                    }
                    className="w-full"
                    size="small"
                    color="warning"
                    id="outlined-basic"
                    label="First name"
                    required
                    variant="outlined"
                  />
                  <TextField
                    error={validationOrder.lastName}
                    onChange={(e) =>
                      addUsersValue({ lastName: e.target.value })
                    }
                    className="w-full"
                    size="small"
                    color="warning"
                    id="outlined-basic"
                    label="Last name"
                    required
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    error={validationOrder.phone}
                    onChange={(e) => addUsersValue({ phone: e.target.value })}
                    className="w-full"
                    size="medium"
                    color="warning"
                    id="outlined-basic"
                    label="Mobile number"
                    required
                    variant="outlined"
                  />
                </div>
              </div>
              {basket.length > 0 ? (
                <button
                  className="bg-orange-400 laptop:w-1/3 mobileS:w-full m-auto p-4 rounded-lg text-white text-center"
                  onClick={() => handlerOrderDataSave(orderUser)}>
                  Place Order
                </button>
              ) : (
                <button
                  className="bg-orange-200 laptop:w-1/3 mobileS:w-full m-auto p-4 rounded-lg text-white text-center"
                  disabled>
                  Place Order
                </button>
              )}
            </div>
          </div>
        </div>
        {basket.length > 0 && (
          <div className="laptop:sticky top-0 h-screen laptop:w-1/3 mx-auto shadow-lg rounded-lg ">
            <div className="h-3/4 overflow-auto">
              <BasketCard />
            </div>
            <div className=" flex flex-col justify-start mx-auto laptop:w-80 mobileS:p-5 laptop:p-1 border-dashed border-t-2 border-gray-400/5 ">
              <div className="mx-auto my-2 h-14 w-80 ">
                <div className="flex justify-between items-center text-center text-xs font-semibold">
                  <div className="flex gap-3 justify-center items-center text-center">
                    <div className="flex justify-center items-center h-14 w-20 bg-yellow-400/30 rounded-2xl border-none">
                      <MdOutlinePersonPinCircle className="text-2xl text-yellow-600" />
                    </div>
                    <div className="flex flex-col gap-1 items-center text-center">
                      <div>Delivery</div>
                      <div className="text-yellow-400">30-40 min</div>
                    </div>
                  </div>
                  <div className="float-right text-gray-400">
                    €{deliveryFee}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center my-4">
                <div>Total Amount:</div>
                <div className="text-xl">€ {total}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
