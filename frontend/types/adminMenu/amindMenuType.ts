export type MenuEntity = {
  menuno: number;
  image: string;
  koname: string;
  enname: string;
  info: string;
  allergy: string;
  drinktype: string;
};

export type GameEntity = {
  gameno: number;
  image: string;
  koname: string;
  enname: string;
  info1: string;
  info2: string;
  level: string;
  player: string;
  time: string;
  age: string;
  category: string;
};

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
