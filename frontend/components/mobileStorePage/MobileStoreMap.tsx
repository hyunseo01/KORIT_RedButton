"use client";
import { useEffect, useState } from "react";
import MobileStoreList from "./MobileStoreList";
import MobileStoreInput from "./MobileStoreInput";
import MobileStoreButton, { ButtonType } from "./MobileStoreButton";
import RegionSelect from "../gamePage/subcomponents/RegionSelect";

export type MobileStoreMapProps = {
  name: string;
  phone: string;
  address: string;
};

const MobileStoreMap = () => {
  const [origin, setOrigin] = useState<MobileStoreMapProps[]>([]);
  const [item, setItem] = useState<MobileStoreMapProps[]>([]);
  const [active, setActive] = useState<ButtonType>("store");
  const [region, setRegion] = useState("시/도");

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

  const handleSelect = (x: string) => {
    setRegion((prev) => x);
  };

  return (
    <>
      <MobileStoreButton active={active} setActive={setActive} />
      <div className="bg-[#EDECEA]">
        {active === "store" ? (
          <div className="flex flex-col">
            <div className="flex justify-center items-center py-[20px]">
              <MobileStoreInput onSearch={handleSearch} />
            </div>
            {item.map((v, i) => (
              <MobileStoreList
                key={i}
                name={v.name}
                phone={v.phone}
                address={v.address}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="flex justify-center items-center py-[20px]">
              <RegionSelect
                width={400}
                height={38}
                title=""
                color="#979797"
                fontSize={13}
                onChange={handleSelect}
              />
            </div>
            {item
              .filter((v) => v.address.includes(region) || region == "시/도")
              .map((v, i) => (
                <MobileStoreList
                  key={i}
                  name={v.name}
                  phone={v.phone}
                  address={v.address}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
};

export default MobileStoreMap;
