"use client";
import React, { useEffect, useState } from "react";

type MenuEntity = {
  menuno: number;
  image: string;
  koname: string;
  enname: string;
  info: string;
  allergy: string;
  drinktype: string;
};

const initialForm: Omit<MenuEntity, "menuno"> = {
  image: "",
  koname: "",
  enname: "",
  info: "",
  allergy: "",
  drinktype: "",
};

const MenuManagement: React.FC = () => {
  const [menus, setMenus] = useState<MenuEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  const fetchMenus = () => {
    fetch("http://localhost:8080/menu/findall.do")
      .then((res) => res.json())
      .then((data: MenuEntity[]) => {
        setMenus(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("메뉴 데이터를 불러오는 중 오류 발생");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId === null) {
      fetch("http://localhost:8080/menu/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((newMenu: MenuEntity) => {
          setMenus([...menus, newMenu]);
          setForm(initialForm);
        })
        .catch((err) => {
          console.error(err);
          setError("메뉴 생성 중 오류 발생");
        });
    } else {
      fetch(`http://localhost:8080/menu/update/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((updatedMenu: MenuEntity) => {
          setMenus(
            menus.map((m) => (m.menuno === editingId ? updatedMenu : m))
          );
          setEditingId(null);
          setForm(initialForm);
        })
        .catch((err) => {
          console.error(err);
          setError("메뉴 업데이트 중 오류 발생");
        });
    }
  };

  const handleEdit = (menu: MenuEntity) => {
    setEditingId(menu.menuno);
    setForm({
      image: menu.image,
      koname: menu.koname,
      enname: menu.enname,
      info: menu.info,
      allergy: menu.allergy,
      drinktype: menu.drinktype,
    });
  };

  const handleDelete = (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    fetch(`http://localhost:8080/menu/delete/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setMenus(menus.filter((m) => m.menuno !== id));
      })
      .catch((err) => {
        console.error(err);
        setError("메뉴 삭제 중 오류 발생");
      });
  };

  if (loading)
    return <div className="p-4 text-center text-gray-600">로딩 중...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h3 className="mb-2 text-xl font-bold">
        {editingId === null ? "새 메뉴 추가" : `메뉴 수정 (번호: ${editingId})`}
      </h3>
      <form onSubmit={handleSubmit} className="mb-4 space-y-3">
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
        <div className="flex items-center space-x-3">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {editingId === null ? "추가" : "수정"}
          </button>
          {editingId !== null && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(initialForm);
              }}
              className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
            >
              취소
            </button>
          )}
        </div>
      </form>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
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
        </thead>
        <tbody>
          {menus.map((menu) => (
            <tr key={menu.menuno} className="text-center">
              <td className="border border-gray-300 p-2">{menu.menuno}</td>
              <td className="border border-gray-300 p-2">
                <img src={menu.image} alt={menu.koname} width="50" />
              </td>
              <td className="border border-gray-300 p-2">{menu.koname}</td>
              <td className="border border-gray-300 p-2">{menu.enname}</td>
              <td className="border border-gray-300 p-2">{menu.info}</td>
              <td className="border border-gray-300 p-2">{menu.allergy}</td>
              <td className="border border-gray-300 p-2">{menu.drinktype}</td>
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => handleEdit(menu)}
                  className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                >
                  수정
                </button>
                <button
                  onClick={() => handleDelete(menu.menuno)}
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MenuManagement;
