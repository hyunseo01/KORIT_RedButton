// components/adminMenu/MenuManagement.tsx
"use client";
import React from "react";
import CrudManagement from "./CrudManagement";

export type MenuEntity = {
  menuno: number;
  image: string;
  koname: string;
  enname: string;
  info: string;
  allergy: string;
  drinktype: string;
};

type MenuForm = Omit<MenuEntity, "menuno">;

const initialMenu: MenuForm = {
  image: "",
  koname: "",
  enname: "",
  info: "",
  allergy: "",
  drinktype: "",
};

const renderMenuHeader = () => {
  return (
    <tr className="bg-gray-100">
      <th className="border border-gray-300 p-2">메뉴번호</th>
      <th className="border border-gray-300 p-2">이미지</th>
      <th className="border border-gray-300 p-2">한글 이름</th>
      <th className="border border-gray-300 p-2">영어 이름</th>
      <th className="border border-gray-300 p-2">상세</th>
      <th className="border border-gray-300 p-2">알러지</th>
      <th className="border border-gray-300 p-2">음료 타입</th>
      <th className="border border-gray-300 p-2">액션</th>
    </tr>
  );
};

const renderMenuRow = (menu: MenuEntity) => {
  return (
    <>
      <td className="border border-gray-300 p-2">{menu.menuno}</td>
      <td className="border border-gray-300 p-2">
        <img src={menu.image} alt={menu.koname} width="50" />
      </td>
      <td className="border border-gray-300 p-2">{menu.koname}</td>
      <td className="border border-gray-300 p-2">{menu.enname}</td>
      <td className="border border-gray-300 p-2">{menu.info}</td>
      <td className="border border-gray-300 p-2">{menu.allergy}</td>
      <td className="border border-gray-300 p-2">{menu.drinktype}</td>
    </>
  );
};

const renderMenuFormInputs = (
  form: MenuForm,
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
) => {
  return (
    <>
      {/* 동일하게 폼 입력 구성 */}
      <div>
        <label className="block text-sm font-medium">이미지 URL:</label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">한글 이름:</label>
        <input
          type="text"
          name="koname"
          value={form.koname}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">영어 이름:</label>
        <input
          type="text"
          name="enname"
          value={form.enname}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">상세:</label>
        <textarea
          name="info"
          value={form.info}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">알러지:</label>
        <input
          type="text"
          name="allergy"
          value={form.allergy}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">음료 타입:</label>
        <input
          type="text"
          name="drinktype"
          value={form.drinktype}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
    </>
  );
};

const MenuManagement = () => {
  return (
    <CrudManagement<MenuEntity, MenuForm>
      endpoint="menu"
      initialForm={initialMenu}
      getId={(menu) => menu.menuno}
      renderHeader={renderMenuHeader}
      renderRow={renderMenuRow}
      renderFormInputs={renderMenuFormInputs}
    />
  );
};

export default MenuManagement;
