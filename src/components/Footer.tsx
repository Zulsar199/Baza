import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="relative h-[400px] w-screen">
      <div className="absolute top-0 left-0 w-screen h-[400px] z-10">
        <Image
          fill
          alt="all"
          priority={true}
          quality={100}
          style={{ objectFit: "cover" }}
          src={"https://bazatheme.com/wp-content/uploads/2021/08/Group-347.png"}
        />
      </div>
      <div className="absolute top-0 left-0 w-screen h-[400px] gap-6 z-20 flex flex-col justify-center items-center">
        <div className="text-center flex flex-col md:flex-row md:gap-4 font-semibold text-white text-[35px] md:text-[45px]">
          <h1>Do you like</h1>
          <h1
            style={{
              background: "linear-gradient(to right, #FF15B3, #FCA840)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Baza theme?
          </h1>
        </div>

        <p className="text-[#98A4AC] text-base w-[350px] text-center">
          We frequently add new trendy templates as well as cool features. Buy
          it now and get future updates for free!
        </p>
        <button className="flex gap-2 px-6 py-3 bg-[#155ce7] rounded-full font-bold">
          <ShoppingCart color="white"/>
          <p className="text-white">Buy now</p>
        </button>
      </div>
    </div>
  );
};
