"use client";
import { useEffect, useState } from "react";
import MobileStoreList from "./MobileStoreList";
import MobileStoreInput from "./MobileStoreInput";
import MobileStoreButton, { ButtonType } from "./MobileStoreButton";
import Select from "../gamePage/subcomponents/Select";

type MobileStoreMapProps = {
  name: string;
  phone: string;
  address: string;
};

const MobileStoreMap = () => {
  const [origin, setOrigin] = useState<MobileStoreMapProps[]>([]);
  const [item, setItem] = useState<MobileStoreMapProps[]>([]);
  const [active, setActive] = useState<ButtonType>("store");

  useEffect(() => {
    fetch("http://localhost:8080/place/findall.do")
      .then((r) => r.json())
      .then((v) => {
        setOrigin((prev) => v);
        setItem((prev) => v);
      })
      .catch(() => alert("서버키라고"));
  }, []);

  const handleSearch = (x: string) => {
    const filtered = origin.filter((v) =>
      v.name.toLowerCase().includes(x.toLowerCase())
    );
    setItem((prev) => filtered);
  };

  return (
    <>
      <MobileStoreButton active={active} setActive={setActive} />
      <div className="bg-[#EDECEA]">
        <div className="flex justify-center py-[20px] items-center gap-2">
          {active === "store" ? (
            <MobileStoreInput onSearch={handleSearch} />
          ) : (
            <Select
              width={400}
              height={38}
              title=""
              color="#979797"
              fontSize={13}
            />
          )}
        </div>
      </div>
      {item.map((v, i) => (
        <MobileStoreList
          key={i}
          name={v.name}
          phone={v.phone}
          address={v.address}
        />
      ))}
    </>
  );
};

export default MobileStoreMap;
