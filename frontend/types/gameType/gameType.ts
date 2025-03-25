export type Game = {
  image: string;
  koname: string;
  enname: string;
  info1: string;
  info2: string;
  level: string;
  player: string;
  time: string;
};
export type BoardGameProps = {
  KoName: string;
  EnName: string;
  Image: string;
  ClickInfo: () => void;
};

export type GameInfoProps = {
  KoName: string;
  EnName: string;
  Image: string;
  info1: string;
  info2: string;
  Level: string;
  People: string;
  RunningTime: string;
};

export type SelectProps = {
  width: number;
  height: number;
  title: string;
  fontSize: number;
  color: string;
  onChange: (e: string) => void;
};
export type InputProps = {
  width: number;
  height: number;
  fontSize: number;
  title: string;
  placeholder: string;
  onChange: (e: string) => void;
};
export type BoardGameInfoProps = {
  KoName: string;
  EnName: string;
  Image: string;
  info: string;
  Level: string;
  People: string;
  RunningTime: string;
};
export type GamePageSearchProps = {
  onSearch: (searchTerm: string) => void;
};
