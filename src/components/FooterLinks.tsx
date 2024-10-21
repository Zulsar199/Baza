export const FooterLinks = () => {
  return (
    <div className="bg-[#f6f9fe] w-screen py-5 xl:py-7 flex items-center flex-col gap-2 lg:gap-4 text-sm xl:flex-row-reverse xl:justify-between xl:px-10">
      <div className="flex gap-3 *:cursor-pointer">
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Youtube</p>

      </div>
      <div className="text-[#9097aa]">
        Copyright ©2024 CIANA. All rights reserved.
      </div>
    </div>
  );
};
