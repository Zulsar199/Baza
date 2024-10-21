import { Card } from "./Card";

export const Section2 = () => {
  return (
    <div id="courses" className="bg-[#f6f9fe] w-full h-full">
      <div className="container max-w-screen-xl m-auto  flex flex-col items-center">
        <div className="sm:w-[570px] w-[350px] flex flex-col items-center pt-[120px] pb-[40px] gap-[30px] text-[#042942]">
          <h2 className="text-5xl font-bold text-center sm:w-[420px] w-[350px]">
            Та зорилгодоо хүрэх аялалдаа бэлэн үү?
          </h2>
          <p className="text-lg text-center sm:w-[420px] w-[350px] text-[#98A4AC]">
            Олон жилийн туршлагатай багш хамт олон таныг хүлээж байна
          </p>
          <div className="sm:flex sm:gap-[100px] space-y-[20px] sm:space-y-0 items-center">
            <div>
              <h1 className="text-6xl font-semibold text-[#961FCA] text-center">
                5+
              </h1>
              <p className="text-lg text-center font-semibold">
                Туршлагатай багш нар
              </p>
            </div>
            <div>
              <h1 className="text-6xl font-semibold text-[#5200FF] text-center">
                100+
              </h1>
              <p className="text-lg text-center font-semibold">Сэдвүүд</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 w-full gap-[20px] sm:p-4 md:p-8 p-6">
          <Card title={"Англи хэл"} img={"/math.png"} />
          <Card title={"Кодинг"} img={"/coding.png"} />
          <Card title={"Математик"} img={"/englsh.png"} />
        </div>
      </div>
    </div>
  );
};
