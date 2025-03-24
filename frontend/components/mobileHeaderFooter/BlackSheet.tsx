"use client";
import { useState } from "react";

type BlackSheetProps = {
  close: () => void;
};

const BlackSheet = ({ close }: BlackSheetProps) => {
  return (
    <div
      onClick={close}
      style={{
        zIndex: "2",
        backgroundColor: "black",
        opacity: "0.7",
        position: "fixed",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100vw",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default BlackSheet;
