// components/adminGame/GameManagement.tsx
"use client";
import React from "react";
import CrudManagement from "./CrudManagement";
import { GameEntity } from "@/types/adminMenu/amindMenuType";

type GameForm = Omit<GameEntity, "gameno">;

const initialGame: GameForm = {
  image: "",
  koname: "",
  enname: "",
  info1: "",
  info2: "",
  level: "",
  player: "",
  time: "",
  age: "",
  category: "",
};

const renderMenuHeader = () => {
  return (
    <tr className="bg-gray-100">
      <th className="border border-gray-300 p-2">게임번호</th>
      <th className="border border-gray-300 p-2">이미지</th>
      <th className="border border-gray-300 p-2">한글 이름</th>
      <th className="border border-gray-300 p-2">영어 이름</th>
      <th className="border border-gray-300 p-2">상세1</th>
      <th className="border border-gray-300 p-2">상세2</th>
      <th className="border border-gray-300 p-2">레벨</th>
      <th className="border border-gray-300 p-2">플레이어 수</th>
      <th className="border border-gray-300 p-2">필요 시간</th>
      <th className="border border-gray-300 p-2">연령</th>
      <th className="border border-gray-300 p-2">카테고리</th>
      <th className="border border-gray-300 p-2">액션</th>
    </tr>
  );
};

const renderGameRow = (game: GameEntity) => {
  return (
    <>
      <td className="border border-gray-300 p-2">{game.gameno}</td>
      <td className="border border-gray-300 p-2">
        <img src={game.image} alt={game.koname} width="50" />
      </td>
      <td className="border border-gray-300 p-2">{game.koname}</td>
      <td className="border border-gray-300 p-2">{game.enname}</td>
      <td className="border border-gray-300 p-2">{game.info1}</td>
      <td className="border border-gray-300 p-2">{game.info2}</td>
      <td className="border border-gray-300 p-2">{game.level}</td>
      <td className="border border-gray-300 p-2">{game.player}</td>
      <td className="border border-gray-300 p-2">{game.time}</td>
      <td className="border border-gray-300 p-2">{game.age}</td>
      <td className="border border-gray-300 p-2">{game.category}</td>
    </>
  );
};

const renderGameFormInputs = (
  form: GameForm,
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
) => {
  return (
    <>
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
        <label className="block text-sm font-medium">게임 한글 이름:</label>
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
        <label className="block text-sm font-medium">게임 영어 이름:</label>
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
        <label className="block text-sm font-medium">상세1:</label>
        <textarea
          name="info1"
          value={form.info1}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">상세2:</label>
        <textarea
          name="info2"
          value={form.info2}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">난이도:</label>
        <input
          type="text"
          name="level"
          value={form.level}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">플레이어 수:</label>
        <input
          type="text"
          name="player"
          value={form.player}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">시간:</label>
        <input
          type="text"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">종류:</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">카테고리:</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
    </>
  );
};

const GameManagement = () => {
  return (
    <CrudManagement<GameEntity, GameForm>
      endpoint="game"
      initialForm={initialGame}
      getId={(game) => game.gameno}
      renderHeader={renderMenuHeader}
      renderRow={renderGameRow}
      renderFormInputs={renderGameFormInputs}
    />
  );
};

export default GameManagement;
