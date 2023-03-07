import { Box } from "@mui/system";
import React from "react";
import { Modal } from "@mui/material";
import { AiOutlineCheck } from "react-icons/ai";
import { useAppSelector } from "../store";

export default function Modals() {
  const modalStatus = useAppSelector((state) => state.modals.isOpen);

  return (
    <>
      <Modal open={modalStatus}>
        <Box>
          <div className="flex justify-center items-center w-screen h-screen m-auto">
            <div className=" flex justify-center items-center text-center  bg-white mobileS:w-screen mobileS:h-screen tablet:w-1/2 tablet:h-1/2 rounded-lg">
              <div className="grid gap-4 grid-cols-1 p-20">
                <AiOutlineCheck className="text-green-300 border-4 border-green-300 p-2 rounded-full w-28 h-28 m-auto " />
                <div className=" text-lg ">
                  Şiparişiniz başarılı bir şekilde gönderildi
                </div>
                <a
                  href="/"
                  onClick={() => localStorage.clear()}
                  className="bg-green-300 text-white p-2 mx-3 rounded-lg"
                >
                  Go Homepage
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
