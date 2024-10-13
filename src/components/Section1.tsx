import Image from "next/image";
import { Navbar } from "./Navbar";

export const Section1 = () => {
  return (
    <div className="relative w-screen h-screen">
      <Navbar />
      <div className="absolute top-0 left-0 w-screen h-screen z-10">
        <Image
          fill
          alt="all"
          priority={true}
          quality={100}
          style={{ objectFit: "cover" }}
          src={
            "https://bazatheme.com/wp-content/uploads/2021/08/Group-3fbf46.png"
          }
        />
      </div>
      <div className="absolute bottom-0 md:w-[300px] md:h-[40%] w-[250px] h-[30%] left-1/2 transform -translate-x-1/2 z-20">
        <Image
          fill
          alt="all"
          priority={true}
          quality={100}
          style={{ objectFit: "contain" }}
          src={
            "https://demo.bazatheme.com/wp-content/uploads/2021/08/STROsdc-747x1024.png"
          }
        />
      </div>
      <div className="absolute md:w-[740px] w-[390px] scale-90 top-[40%] text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center">
        <div className="flex font-semibold text-white text-[45px] md:text-[54px]">
          <h1>Meet</h1>
          <h1
            style={{
              background: "linear-gradient(to right, #FF15B3, #FCA840)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
            className="ml-2"
          >
            Baza
          </h1>
        </div>
        <h1 className="font-semibold text-white text-[40px] md:text-[54px]">
          creative WordPress theme
        </h1>
        <p className="text-center text-[#98A4AC] my-4 text-lg sm:w-[500px] w-[370px] font-medium">
          Baza is a combination of trendy design, exceptional performance and
          ease of use. You need nothing extra. Just Baza.
        </p>
        <button className="px-[30px] py-[10px] bg-gradient-to-r from-[#FF15B3] to-[#FCA840] rounded-full text-white text-xl font-medium">
          View Demo
        </button>
      </div>
      <div className="absolute bouncy-element top-[320px] md:top-[250px] w-[70px] h-[70px]  md:w-[130px] md:h-[130px] xl:left-[250px] left-[30px]  z-40">
        <Image
          fill
          alt="all"
          priority={true}
          src={"https://bazatheme.com/wp-content/uploads/2021/08/161sdvsd1.png"}
        />
      </div>
      <div className="absolute bouncy-element top-[70px]  w-[60px] h-[65px] md:w-[100px] md:h-[110px] right-1/2  z-40">
        <Image
          fill
          alt="all"
          priority={true}
          src={"https://bazatheme.com/wp-content/uploads/2021/08/164sdv1.png"}
        />
      </div>
      <div className="absolute bouncy-element top-[320px] md:top-[250px] w-[70px] h-[70px] md:w-[130px] md:h-[130px] xl:right-[250px] right-[30px] z-40">
        <Image
          fill
          alt="all"
          priority={true}
          src={"https://bazatheme.com/wp-content/uploads/2021/08/281sdv-1.png"}
        />
      </div>
    </div>
  );
};
