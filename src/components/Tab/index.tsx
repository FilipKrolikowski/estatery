import { TabType } from "@/types/tab";

const Tab = ({ tab, isActive, onClick }: TabType) => {
  return (
    <button
      type="button"
      onClick={() => onClick(tab.type)}
      className={`px-8 py-3 text-center border rounded-md cursor-pointer text-lg capitalize w-40 ${
        isActive
          ? "text-primary-violet bg-white font-bold border-[#EAECF4] hover:bg-[#edeaff] focus-within:border-[#8B8AFF] focus:bg-[#cdc4f9]"
          : "border-transparent text-[#7B8191] hover:text-primary-violet"
      }`}
    >
      {tab.name}
    </button>
  );
};

export default Tab;
