import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

const Description = () => {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        Some video title
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 23 Nov 2022
        </h2>
        <div className="flex gap-10 w-48">
          <div className="flex items-center gap-1 text-yellow-600 font-medium cursor-pointer">
            <FiEdit className="text-lg block" />
            <a href="add-video.html" className="text-sm leading-[1.7142857] ">
              Edit
            </a>
          </div>
          <div className="flex items-center gap-1 text-[#e91348] font-medium cursor-pointer">
            <MdDeleteOutline className="text-lg block" />
            <a href="add-video.html" className="text-sm leading-[1.7142857] ">
              Delete
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Some video description here
      </div>
    </div>
  );
};

export default Description;
