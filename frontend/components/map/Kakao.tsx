"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import StoreList from "./StoreList";
import { PlaceData } from "@/types/store/storeType";
import RegionSelect from "../gamePage/subcomponents/RegionSelect";
import StoreInput from "./StoreInput";

declare global {
  interface Window {
    kakao: any;
  }
}

const KAKAO_MAP_API_KEY = "84896ad61f8cfbdb4cd0eebe1eeb1f14";

const KakaoMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [places, setPlaces] = useState<PlaceData[]>([]);
  const [visiblePlaces, setVisiblePlaces] = useState<PlaceData[]>([]);
  const [map, setMap] = useState<any>(null);
  const markerListRef = useRef<{ marker: any; data: PlaceData }[]>([]);
  const [region, setRegion] = useState("시/도");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:8080/place/findall.do");
        const data = await res.json();
        setPlaces(data);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const initMap = () => {
    if (!window.kakao || !mapContainerRef.current) return;
    const kakaoMap = new window.kakao.maps.Map(mapContainerRef.current, {
      center: new window.kakao.maps.LatLng(37.5235531, 126.9803298),
      level: 9,
    });
    setMap(kakaoMap);

    const clusterer = new window.kakao.maps.MarkerClusterer({
      map: kakaoMap,
      averageCenter: true,
      minLevel: 5,
      styles: [
        {
          width: "36px",
          height: "112px",
          background: `url('https://redbutton.co.kr/wp-content/uploads/2021/04/redbutton_markers.png') no-repeat center`,
          backgroundSize: "contain",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#000",
          textAlign: "center",
          lineHeight: "30px",
        },
      ],
    });

    /* 이거 작동 안함 테일윈드 말고 스타일 버전으로 사용 */
    // const clusterer = new window.kakao.maps.MarkerClusterer({
    //   map: kakaoMap,
    //   averageCenter: true,
    //   minLevel: 5,
    //   styles: [
    //     {
    //       content: `
    //         <div class="
    //           w-9 h-28
    //           bg-no-repeat bg-center bg-contain
    //           flex items-center justify-center
    //           text-sm font-bold text-black text-center
    //           leading-7
    //           bg-[url('https://redbutton.co.kr/wp-content/uploads/2021/04/redbutton_markers.png')]
    //         ">
    //           {count}
    //         </div>
    //       `,
    //     },
    //   ],
    // });

    const markerImage = new window.kakao.maps.MarkerImage(
      "https://redbutton.co.kr/wp-content/uploads/2021/04/redbutton_marker.png",
      new window.kakao.maps.Size(36, 50),
      { offset: new window.kakao.maps.Point(20, 40) }
    );

    const markers = places.map((place) => {
      const position = new window.kakao.maps.LatLng(
        parseFloat(place.latitude),
        parseFloat(place.longitude)
      );
      const marker = new window.kakao.maps.Marker({
        position,
        image: markerImage,
      });
      window.kakao.maps.event.addListener(marker, "click", () => {
        kakaoMap.setLevel(3);
        kakaoMap.setCenter(position);
      });
      return { marker, data: place };
    });

    markerListRef.current = markers;
    clusterer.addMarkers(markers.map((m) => m.marker));

    window.kakao.maps.event.addListener(kakaoMap, "idle", () => {
      const bounds = kakaoMap.getBounds();
      const visible = markers
        .filter(({ marker }) => bounds.contain(marker.getPosition()))
        .map(({ data }) => data);
      setVisiblePlaces(visible);
    });
  };

  useEffect(() => {
    if (isLoaded && places.length) window.kakao.maps.load(initMap);
  }, [isLoaded, places]);

  const moveToLocation = (lat: string, lng: string) => {
    if (!map) return;
    const pos = new window.kakao.maps.LatLng(parseFloat(lat), parseFloat(lng));
    map.setLevel(3);
    map.setCenter(pos);
  };

  const handleSearch = (x: string) => {
    const filtered = places.filter((v) =>
      v.name.toLowerCase().includes(x.toLowerCase())
    );
    setVisiblePlaces((prev) => filtered);
  };
  const handleSelect = (x: string) => {
    setRegion((prev) => x);
  };
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=clusterer&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => console.error(e)}
      />

      <div className="flex">
        <div ref={mapContainerRef} className="w-[70%] h-[580px]" />
        <div
          className="w-[30%] h-[580px] flex flex-col items-center justify-center gap-5 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://redbutton.co.kr/wp-content/uploads/2021/04/FIND-REDBUTTON.jpg')",
          }}
        >
          <RegionSelect
            width={233}
            height={44}
            title="지역으로 검색하기"
            color="#979797"
            fontSize={15}
            onChange={handleSelect}
          />
          <StoreInput onSearch={handleSearch} />
        </div>
      </div>

      <div className="w-full border border-gray-300 mt-4">
        <ul>
          {visiblePlaces
            .filter((v) => v.address.includes(region) || region == "시/도")
            .map((v) => (
              <li
                key={v.placeno}
                onClick={() => moveToLocation(v.latitude, v.longitude)}
                className="cursor-pointer p-2 border-b border-gray-200 hover:bg-gray-50"
              >
                <StoreList
                  storeName={v.name}
                  address={v.address}
                  phone={v.phone}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default KakaoMap;
