import { Box } from "@mui/system";
import React from "react";
import { Modal } from "@mui/material";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../store";
import { setOpen } from "../features/modalSlice";

export default function Modals() {
  const dispatch = useAppDispatch();
  const modalStatus = useAppSelector((state) => state.modals.isOpen);

  const modalCloseHandler = () => {
    dispatch(setOpen(null));
    localStorage.removeItem("basket");
  };

  return (
    <>
      {modalStatus === true && (
        <Modal open={true}>
          <Box>
            <div className="flex justify-center items-center w-screen h-screen m-auto">
              <div className=" flex justify-center items-center text-center  bg-white mobileS:w-screen mobileS:h-screen tablet:w-1/2 tablet:h-1/2 rounded-lg">
                <div className="grid gap-4 grid-cols-1 p-20">
                  <AiOutlineCheck className="text-green-300 border-4 border-green-300 p-2 rounded-full w-28 h-28 m-auto " />
                  <div className=" text-lg ">Your order has been created</div>
                  <a
                    href="/"
                    onClick={modalCloseHandler}
                    className="bg-green-300 text-white p-2 mx-3 rounded-lg"
                  >
                    Go Homepage
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
      {modalStatus === false && (
        <Modal open={true}>
          <Box>
            <div className="flex justify-center items-center w-screen h-screen m-auto">
              <div className=" flex justify-center items-center text-center  bg-white mobileS:w-screen mobileS:h-screen tablet:w-1/2 tablet:h-1/2 rounded-lg">
                <div className="grid gap-4 grid-cols-1 p-20">
                  <AiOutlineClose className="text-red-300 border-4 border-red-300 p-2 rounded-full w-28 h-28 m-auto " />
                  <div className=" text-lg ">
                    Upps, Your order could not be created{" "}
                  </div>
                  <a
                    href="/"
                    onClick={modalCloseHandler}
                    className="bg-red-300 text-white p-2 mx-3 rounded-lg"
                  >
                    Go Homepage
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </>
  );
}
