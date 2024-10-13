import Image from "next/image";
import { CardItem } from "./CardItem";

export const Card = () => {
  const items = [
    {
      logo: "https://demo.bazatheme.com/wp-content/uploads/2021/07/transfer-1.png",
      title: "Billing and transactions",
    },
    {
      logo: "https://demo.bazatheme.com/wp-content/uploads/2021/07/handle-1-1024x1024.png",
      title: "Marketing and public relations",
    },
    {
      logo: "https://demo.bazatheme.com/wp-content/uploads/2021/07/presentation-1-1024x1024.png",
      title: "Management and human resources",
    },
    {
      logo: "https://demo.bazatheme.com/wp-content/uploads/2021/07/rocket-3-1-1024x1024.png",
      title: "Digital transformation",
    },
  ];
  return (
    <div className=" sm:w-full  bg-white sm:h-[450px] md:[500px] lg:h-[700px] h-[350px] rounded-xl sm:p-4  p-4">
      <div className="bg-white w-full h-full rounded-xl overflow-hidden">
        <div className="bg-gradient-to-b from-[#edf2f5] to-white h-[40%] w-full relative">
          <div className="absolute top-0 w-full h-full left-0  z-10">
            <Image
              fill
              alt="all"
              src={
                "https://demo.bazatheme.com/wp-content/uploads/2021/08/dcdcdcdc.png"
              }
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-white z-20" />
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-30 container sm:px-10 min-[390px]:px-20 px-10 flex items-center">
            <div className="w-1/2 lg:space-y-5 sm:space-y-3">
              <h2 className=" lg:text-xl sm:text-xs text-[8px] font-extrabold">
                We know how to boost your business
              </h2>
              <p className="md:text-[6px] text-[3px]">
                More than 20 years of experience. We are a leading business
                consulting agency. Lots of case studies.{" "}
              </p>
              <button className="sm:text-[6px] text-[3px] sm:py-1 sm:px-3 py-[2px] px-[6px] bg-purple-500 rounded-md text-white">
                Get appointment
              </button>
            </div>
            <div className="w-1/2 relative h-full">
              <div className="absolute top-1/2 w-full h-[50%] left-0 transform -translate-y-1/2  z-40">
                <Image
                  fill
                  alt="all"
                  priority={true}
                  src={
                    "https://demo.bazatheme.com/wp-content/uploads/2021/07/People04-1-1024x657.png"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-[8px] justify-center mb-6 sm:mb-0">
          {items.map((item) => (
            <CardItem logo={item.logo} text={item.title} />
          ))}
        </div>

        <div className="w-full h-1/2 container px-5 md:px-10 flex items-start gap-3">
          <div className="w-1/2 relative h-full">
            <div className="absolute bottom-5 w-full h-full right-0  z-10">
              <Image
                fill
                alt="all"
                priority={true}
                style={{ objectFit: "contain" }}
                src={
                  "https://demo.bazatheme.com/wp-content/uploads/2021/07/Group-339.png"
                }
              />
            </div>
            <div className="absolute bottom-5 w-1/2 h-[50%] sm:h-[40%] lg:h-[50%] right-10 transform -translate-y-1/2  z-20">
              <Image
                fill
                alt="all"
                priority={true}
                src={
                  "https://demo.bazatheme.com/wp-content/uploads/2021/07/Elemfvents-686x1024.png"
                }
              />
            </div>
          </div>
          <div className="w-1/2 space-y-2 sm:pt-10">
            <div className="py-1 px-3 bg-[#CFFFF4] text-[#05CD99] w-fit text-[8px] rounded-sm text-bold">
              Who we are{" "}
            </div>
            <h2 className="lg:text-lg sm:text-xs text-[8px] font-extrabold">
              We are the world best consulting company
            </h2>
            <p className="lg:text-[6px] text-[3px]">
              Management consulting is the practice of helping organizations to
              improve their performance. Organizations may draw upon the
              services of management consultants for a number of reasons,
              including gaining external advice and access to consultants’
              specialized expertise.
            </p>
            <p className="lg:text-[6px] text-[3px] ">
              As a result of their exposure to, and relationships with numerous
              organizations, consulting firms are typically aware of industry
              “best practices”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
