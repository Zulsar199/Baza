import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div id="about" className="relative h-[400px] w-screen">
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
          <h1
            style={{
              background: "linear-gradient(to right, #FF15B3, #FCA840)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            CIANA
          </h1>
          <h1>баг гэж мэдэх үү?</h1>
        </div>

        <p className="text-[#98A4AC] text-base w-[350px] text-center">
          Бусдад мэдлэгээ түгээхийн төлөө нэгдсэн залуусын нэгдэл юм
        </p>
        <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeMnq2dzAjCjOKyM0XDo-2gXN_z6pYOCI93bpoxCrXMEnaiRw/viewform">
          <button className="flex gap-2 px-6 py-3 bg-[#155ce7] rounded-full font-bold">
            <ShoppingCart color="white" />
            <p className="text-white">Бүртгүүлэх</p>
          </button>
        </Link>
      </div>
    </div>
  );
};
