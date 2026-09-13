import { IoLeafSharp } from "react-icons/io5";
import type { IBtnTypes } from "../../Type/btn";

interface IBtnProps {
    btn: IBtnTypes
}

const CatagoryBtn = ({btn}:IBtnProps) => {
    return (
    <button
      type="button"
      className="flex h-16 cursor-pointer flex-col items-center justify-center rounded-xl bg-white text-green-700 shadow-md"
    >
      <span className="text-2xl">
        <IoLeafSharp />
      </span>

      <span className="text-xs font-bold">
        {btn.category_name}
      </span>
    </button>
  );
};

export default CatagoryBtn;