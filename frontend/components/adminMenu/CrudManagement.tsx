"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

export type CrudProps<T, U> = {
  endpoint: "menu" | "game" | "place";
  initialForm: U;
  getId: (entity: T) => number; // 예: menu => menu.menuno
  renderHeader: () => React.ReactNode; // 헤더 렌더링 함수
  renderRow: (entity: T) => React.ReactNode;
  renderFormInputs: (
    form: U,
    handleChange: (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
  ) => React.ReactNode;
};

function CrudManagement<T extends object, U extends object>({
  endpoint,
  initialForm,
  getId,
  renderHeader,
  renderRow,
  renderFormInputs,
}: CrudProps<T, U>) {
  const [entities, setEntities] = useState<T[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [form, setForm] = useState<U>(initialForm);
  const [editingId, setEditingId] = useState<number | null>(null);

  const baseUrl = `http://localhost:8080/${endpoint}`;

  const fetchEntities = () => {
    fetch(`${baseUrl}/findall.do`)
      .then((res) => res.json())
      .then((data: T[]) => {
        setEntities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(`${endpoint} 데이터를 불러오는 중 오류 발생`);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEntities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (editingId === null) {
      fetch(`${baseUrl}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((newEntity: T) => {
          setEntities([...entities, newEntity]);
          setForm(initialForm);
        })
        .catch((err) => {
          console.error(err);
          setError(`${endpoint} 생성 중 오류 발생`);
        });
    } else {
      fetch(`${baseUrl}/update/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((updatedEntity: T) => {
          setEntities(
            entities.map((entity) =>
              getId(entity) == editingId ? updatedEntity : entity
            )
          );
          setEditingId(null);
          setForm(initialForm);
        })
        .catch((err) => {
          console.error(err);
          setError(`${endpoint} 업데이트 중 오류 발생`);
        });
    }
  };

  const handleEdit = (entity: T) => {
    setEditingId(getId(entity));
    setForm(entity as unknown as U);
  };

  const handleDelete = (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    fetch(`${baseUrl}/delete/${id}`, { method: "DELETE" })
      .then(() => {
        setEntities(entities.filter((entity) => getId(entity) !== id));
      })
      .catch((err) => {
        console.error(err);
        setError(`${endpoint} 삭제 중 오류 발생`);
      });
  };

  if (loading)
    return <div className="p-4 text-center text-gray-600">로딩 중...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="p-4">
      <h3 className="mb-2 text-xl font-bold">
        {editingId === null
          ? `새 ${endpoint} 데이터 추가`
          : `${endpoint} 수정 (번호: ${editingId})`}
      </h3>
      <form onSubmit={handleSubmit} className="mb-4 space-y-3">
        {renderFormInputs(form, handleChange)}
        <div className="flex items-center space-x-3">
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            {editingId == null ? "추가" : "수정"}
          </button>
          {editingId != null && (
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
        <thead>{renderHeader()}</thead>
        <tbody>
          {entities.map((entity) => (
            <tr key={getId(entity)} className="text-center">
              {renderRow(entity)}
              <td className="border border-gray-300 p-2 space-x-2">
                <button
                  onClick={() => handleEdit(entity)}
                  className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600"
                >
                  수정
                </button>
                <button
                  onClick={() => handleDelete(getId(entity))}
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
}

export default CrudManagement;
