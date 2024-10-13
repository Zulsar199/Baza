import Image from "next/image";

type CardItemProps = {
  logo: string;
  text: string;
};
export const CardItem = ({ logo, text }: CardItemProps) => {
  return (
    <div className="msm:w-[110px] w-[80px] flex flex-col items-center hover:bg-white hover:drop-shadow-lg py-1 md:py-3 rounded-2xl cursor-pointer">
      <Image
        src={logo}
        width={30}
        alt={text}
        height={30}
        className="rounded-full md:w-[50px] md:h-[50px]"
      />
      <p className="w-[60px] lg:text-[8px] text-center text-[6px]">{text}</p>
    </div>
  );
};
