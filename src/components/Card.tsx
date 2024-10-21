import Image from "next/image";
import { CardItem } from "./CardItem";

export const Card = ({ title = "Coding", img }: { title: any; img: any }) => {
  return (
    <div className=" sm:w-full  bg-white sm:h-[200px]  h-[350px] rounded-xl sm:p-4  p-4 shadow-md overflow-hidden">
      <h1 className="text-xl">{title}</h1>

      <img src={img} alt={title} style={{ objectFit: "contain" }} />
    </div>
  );
};
