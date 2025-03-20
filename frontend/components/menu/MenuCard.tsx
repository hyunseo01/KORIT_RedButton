import PickMenu from "@/components/main/pick/subcomponents/PickMenu";

type MenuCardProps = {
  image: string;
  nameKo: string;
  nameEN: string;
  onClick: () => void;
};

export default function MenuCard({
  image,
  nameKo,
  nameEN,
  onClick,
}: MenuCardProps) {
  return (
    <div onClick={onClick} className="cursor-pointer w-[240px]">
      <PickMenu image={image} KoName={nameKo} EnName={nameEN} />
    </div>
  );
}
