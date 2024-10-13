export const Header = () => {
  return (
    <div className="w-full py-3 px-6 bg-[#262626] fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-lg">Logo</h1>
        <button className="px-3 py-1 bg-[#82b440] hover:bg-[#74a632] rounded-md text-white text-sm">
          Buy now
        </button>
      </div>
    </div>
  );
};
