import { Card } from "./Card";

export const Section2 = () => {
  return (
    <div className="bg-[#f6f9fe] w-full h-full">
      <div className="container max-w-screen-xl m-auto  flex flex-col items-center">
        <div className="sm:w-[570px] w-[350px] flex flex-col items-center pt-[120px] pb-[40px] gap-[30px] text-[#042942]">
          <h2 className="text-5xl font-bold text-center sm:w-[420px] w-[350px]">
            Get started with awesome demos
          </h2>
          <p className="text-lg text-center sm:w-[420px] w-[350px] text-[#98A4AC]">
            Launch your website without coding in no time, we already made fully
            flexible layouts for you.
          </p>
          <div className="sm:flex sm:gap-[100px] space-y-[20px] sm:space-y-0 items-center">
            <div>
              <h1 className="text-6xl font-semibold text-[#961FCA] text-center">
                50+
              </h1>
              <p className="text-lg text-center font-semibold">
                Stunning Demos
              </p>
            </div>
            <div>
              <h1 className="text-6xl font-semibold text-[#5200FF] text-center">
                300+
              </h1>
              <p className="text-lg text-center font-semibold">Unique Blocks</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 w-full gap-[20px] sm:p-4 md:p-8 p-6">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
