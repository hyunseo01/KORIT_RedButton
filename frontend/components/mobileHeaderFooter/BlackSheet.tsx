"use client";
import { useState } from "react";

type BlackSheetProps = {
  close: () => void;
};

const BlackSheet = ({ close }: BlackSheetProps) => {
  return (
    <div
      onClick={close}
      className="fixed inset-0 w-full h-full bg-black opacity-70 cursor-pointer z-2"
    ></div>
  );
};

export default BlackSheet;
