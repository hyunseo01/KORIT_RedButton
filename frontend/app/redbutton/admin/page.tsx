"use client";
import React, { useState, useEffect } from "react";
import MenuManagement from "@/components/adminMenu/SetMenu";

type Section = "menu" | "game" | "place";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState<Section>("menu");
  const [serverOn, setServerOn] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((res) => {
        if (!res.ok) {
          throw new Error("서버 응답이 없습니다.");
        }
        return res.json();
      })
      .then(() => {
        setServerOn(true);
      })
      .catch(() => {
        alert("서버 켜주세요");
        setServerOn(false);
      });
  }, []);

  if (!serverOn) {
    return (
      <div className="p-6 text-center text-red-600">
        서버가 꺼져있습니다. 서버를 켜주세요.
      </div>
    );
  }

  const buttonClasses =
    "rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 mr-2";

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">관리자 대시보드</h1>
      <nav className="mb-6">
        <button
          className={buttonClasses}
          onClick={() => setActiveSection("menu")}
        >
          메뉴 관리
        </button>
        <button
          className={buttonClasses}
          onClick={() => setActiveSection("game")}
        >
          게임 관리
        </button>
        <button
          className={buttonClasses}
          onClick={() => setActiveSection("place")}
        >
          지점 관리
        </button>
      </nav>
      <hr className="mb-6" />
      {activeSection === "menu" && (
        <div>
          <h2 className="mb-4 text-2xl font-semibold">메뉴 관리</h2>
          <MenuManagement />
        </div>
      )}
      {activeSection === "game" && (
        <div>
          <h2 className="mb-4 text-2xl font-semibold">게임 관리</h2>
          <p className="text-gray-700">
            게임 관리 영역 (목록, 추가, 수정, 삭제 등)
          </p>
        </div>
      )}
      {activeSection === "place" && (
        <div>
          <h2 className="mb-4 text-2xl font-semibold">지점 관리</h2>
          <p className="text-gray-700">
            지점 관리 영역 (목록, 추가, 수정, 삭제 등)
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
