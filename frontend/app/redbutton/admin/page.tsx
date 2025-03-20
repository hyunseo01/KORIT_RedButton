// pages/admin/index.tsx
"use client";
import React, { useState } from "react";
import MenuManagement from "@/components/adminMenu/MenuManagement";
import GameManagement from "@/components/adminMenu/GameManagement";
import PlaceManagement from "@/components/adminMenu/PlaceManagement";

type Section = "menu" | "game" | "place";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState<Section>("menu");

  const buttonClasses =
    "rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 mr-2";

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">관리자 페이지</h1>
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
          <GameManagement />
        </div>
      )}
      {activeSection === "place" && (
        <div>
          <h2 className="mb-4 text-2xl font-semibold">지점 관리</h2>
          <PlaceManagement />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
