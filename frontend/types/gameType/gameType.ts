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
};
export type InputProps = {
  width: number;
  height: number;
  title: string;
  placeholder: string;
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
