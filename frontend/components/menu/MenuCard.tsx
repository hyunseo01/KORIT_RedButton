import PickMenu from "@/components/main/pick/subcomponents/PickMenu";
import { MenuCardProps } from "@/types/menuType/menuType";

export default function MenuCard({
  image,
  nameKo,
  nameEN,
  onClick,
}: MenuCardProps) {
  return (
    <div className="flex items-center justify-center">
      <div onClick={onClick} className="cursor-pointer w-[240px]">
        <PickMenu image={image} KoName={nameKo} EnName={nameEN} />
      </div>
    </div>
  );
}
