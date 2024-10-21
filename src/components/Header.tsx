import Link from "next/link";

export const Header = () => {
  return (
    <div className="w-full py-3 px-6 bg-[#262626] fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-lg">CIANA</h1>
        <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeMnq2dzAjCjOKyM0XDo-2gXN_z6pYOCI93bpoxCrXMEnaiRw/viewform">
          <button className="px-3 py-1 bg-[#82b440] hover:bg-[#74a632] rounded-md text-white text-sm">
            Бүртгүүлэх
          </button>
        </Link>
      </div>
    </div>
  );
};
