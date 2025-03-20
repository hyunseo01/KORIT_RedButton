// components/adminPlace/PlaceManagement.tsx
"use client";
import React from "react";
import CrudManagement from "./CrudManagement";

export type PlaceEntity = {
  placeno: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  latitude: string;
  longitude: string;
  time: string;
  service: string;
};

type PlaceForm = Omit<PlaceEntity, "placeno">;

const initialPlace: PlaceForm = {
  name: "",
  image: "",
  address: "",
  phone: "",
  latitude: "",
  longitude: "",
  time: "",
  service: "",
};

const renderMenuHeader = () => {
  return (
    <tr className="bg-gray-100">
      <th className="border border-gray-300 p-2">지점 번호</th>
      <th className="border border-gray-300 p-2">이름</th>
      <th className="border border-gray-300 p-2">이미지</th>
      <th className="border border-gray-300 p-2">주소</th>
      <th className="border border-gray-300 p-2">연락처</th>
      <th className="border border-gray-300 p-2">위도</th>
      <th className="border border-gray-300 p-2">경도</th>
      <th className="border border-gray-300 p-2">영업 시간</th>
      <th className="border border-gray-300 p-2">서비스</th>
      <th className="border border-gray-300 p-2">영업</th>
    </tr>
  );
};

const renderPlaceRow = (place: PlaceEntity) => {
  return (
    <>
      <td className="border border-gray-300 p-2">{place.placeno}</td>
      <td className="border border-gray-300 p-2">{place.name}</td>
      <td className="border border-gray-300 p-2">
        <img src={place.image} alt={place.name} width="50" />
      </td>
      <td className="border border-gray-300 p-2">{place.address}</td>
      <td className="border border-gray-300 p-2">{place.phone}</td>
      <td className="border border-gray-300 p-2">{place.latitude}</td>
      <td className="border border-gray-300 p-2">{place.longitude}</td>
      <td className="border border-gray-300 p-2">{place.time}</td>
      <td className="border border-gray-300 p-2">{place.service}</td>
    </>
  );
};

const renderPlaceFormInputs = (
  form: PlaceForm,
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
) => {
  return (
    <>
      <div>
        <label className="block text-sm font-medium">지점 이름:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
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
        <label className="block text-sm font-medium">주소:</label>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">전화번호:</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">위도:</label>
        <input
          type="text"
          name="latitude"
          value={form.latitude}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">경도:</label>
        <input
          type="text"
          name="longitude"
          value={form.longitude}
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
        <label className="block text-sm font-medium">서비스:</label>
        <input
          type="text"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded border border-gray-300 p-2 shadow-sm"
        />
      </div>
    </>
  );
};

const PlaceManagement = () => {
  return (
    <CrudManagement<PlaceEntity, PlaceForm>
      endpoint="place"
      initialForm={initialPlace}
      getId={(place) => place.placeno}
      renderHeader={renderMenuHeader}
      renderRow={renderPlaceRow}
      renderFormInputs={renderPlaceFormInputs}
    />
  );
};

export default PlaceManagement;
