"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { store } from "@/data/mapData"; // 임시 데이터 가져오기
import Select from "../boardGame/Select";
import Input from "../boardGame/Input";
import StoreList from "./StoreList";

// Kakao 객체의 타입 선언
declare global {
  interface Window {
    kakao: any;
  }
}

// 🔴 API 키 하드코딩 (운영에서는 .env 사용 추천)
const KAKAO_MAP_API_KEY = "84896ad61f8cfbdb4cd0eebe1eeb1f14"; // JavaScript 키

// PlaceEntity와 동일한 데이터 타입
interface PlaceData {
  placeno: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  latitude: string;
  longitude: string;
  time: string;
  service: string;
}

const KakaoMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [places, setPlaces] = useState<PlaceData[]>(store); // 임시 데이터 사용
  const [visiblePlaces, setVisiblePlaces] = useState<PlaceData[]>([]); // 현재 지도에서 보이는 마커 리스트
  const [map, setMap] = useState<any>(null);
  const markerListRef = useRef<any[]>([]); // 마커 리스트 저장

  const initMap = () => {
    if (typeof window === "undefined" || !window.kakao) {
      console.error("Kakao Maps API가 로드되지 않았습니다.");
      return;
    }
    if (!mapContainerRef.current) return;

    const mapOption = {
      center: new window.kakao.maps.LatLng(37.5235531064681, 126.980329796658), // 기본 지도 중심
      level: 9,
    };
    const newMap = new window.kakao.maps.Map(
      mapContainerRef.current,
      mapOption
    );
    setMap(newMap);

    // 클러스터러 생성
    const clusterer = new window.kakao.maps.MarkerClusterer({
      map: newMap,
      averageCenter: true, // 클러스터 중앙 좌표 설정
      minLevel: 5, // 줌 레벨이 5 이상일 때 클러스터링
      styles: [
        {
          width: "36px",
          height: "112px", // 높이 2배
          background: `url('https://redbutton.co.kr/wp-content/uploads/2021/04/redbutton_markers.png') no-repeat center`,
          backgroundSize: "contain",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000", // 글자색 검정
          fontSize: "14px",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "30px",
        },
      ],
    });

    // 마커 추가
    const markerList = places.map((place) => {
      const position = new window.kakao.maps.LatLng(
        parseFloat(place.latitude),
        parseFloat(place.longitude)
      );

      const markerInstance = new window.kakao.maps.Marker({
        position,
        image: new window.kakao.maps.MarkerImage(
          "https://redbutton.co.kr/wp-content/uploads/2021/04/redbutton_marker.png",
          new window.kakao.maps.Size(36, 50), // 크기 (클러스터와 동일)
          { offset: new window.kakao.maps.Point(20, 40) }
        ),
      });

      // 마커 클릭 시 확대 및 이동
      window.kakao.maps.event.addListener(markerInstance, "click", () => {
        newMap.setLevel(3); // 확대
        newMap.setCenter(position); // 클릭한 마커로 중심 이동
      });

      return { marker: markerInstance, data: place };
    });

    markerListRef.current = markerList; // 마커 리스트 저장
    clusterer.addMarkers(markerList.map((item) => item.marker));

    // 지도 이동/줌 변경 시 보이는 마커 업데이트
    window.kakao.maps.event.addListener(newMap, "idle", () => {
      updateVisibleMarkers(newMap);
    });

    // 초기 마커 필터링
    updateVisibleMarkers(newMap);
  };

  // 현재 지도에서 보이는 마커 필터링
  const updateVisibleMarkers = (currentMap: any) => {
    const bounds = currentMap.getBounds();
    const visible = markerListRef.current
      .filter(({ marker }) => bounds.contain(marker.getPosition()))
      .map(({ data }) => data);

    setVisiblePlaces(visible);
  };

  // 리스트 클릭 시 해당 지점으로 이동
  const moveToLocation = (latitude: string, longitude: string) => {
    if (map) {
      const position = new window.kakao.maps.LatLng(
        parseFloat(latitude),
        parseFloat(longitude)
      );
      map.setLevel(3); // 확대
      map.setCenter(position); // 클릭한 마커로 이동
    }
  };

  useEffect(() => {
    if (isLoaded && window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initMap);
    }
  }, [isLoaded, places]);

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* 카카오맵 API 스크립트 */}
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_MAP_API_KEY}&libraries=clusterer&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => setIsLoaded(true)}
        onError={(e) => console.error("카카오맵 스크립트 로드 실패", e)}
      />

      <div style={{ display: "flex" }}>
        {/* 지도 컨테이너 */}
        <div
          ref={mapContainerRef}
          style={{ width: "70%", height: "580px" }}
        ></div>
        <div
          style={{
            backgroundImage:
              "url('https://redbutton.co.kr/wp-content/uploads/2021/04/FIND-REDBUTTON.jpg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30%",
            height: "580px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Select width={233} height={44} title="지역으로 검색하기" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Input
              width={233}
              height={44}
              title="매장명으로 검색하기"
              placeholder="매장명으로 검색하기"
            />
          </div>
        </div>

        {/* 현재 지도에서 보이는 지점 리스트 */}
      </div>
      <div
        style={{
          width: "100%",
          overflowY: "auto",
          border: "1px solid #ccc",
        }}
      >
        <ul>
          {visiblePlaces.map((v) => (
            <li
              onClick={() => moveToLocation(v.latitude, v.longitude)}
              style={{
                marginBottom: "10px",
                cursor: "pointer",
                padding: "5px",
                borderBottom: "1px solid #ddd",
              }}
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
