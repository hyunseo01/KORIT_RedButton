type Props = { children: React.ReactNode };

export default function MenuGrid({ children }: Props) {
  return <div className="flex flex-wrap gap-x-5 gap-y-[74px]">{children}</div>;
}
