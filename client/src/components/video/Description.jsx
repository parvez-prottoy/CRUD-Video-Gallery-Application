import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Description = ({ video }) => {
  const { title, date, description } = video || {};
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>
        <div className="flex gap-10 w-48">
          <Link
            to={`/videos/edit/1`}
            className="flex items-center gap-1 text-yellow-600 font-medium cursor-pointer"
          >
            <FiEdit className="text-lg block" />
            <span className="text-sm leading-[1.7142857] ">Edit</span>
          </Link>
          <div className="flex items-center gap-1 text-[#e91348] font-medium cursor-pointer">
            <MdDeleteOutline className="text-lg block" />
            <a href="add-video.html" className="text-sm leading-[1.7142857] ">
              Delete
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

export default Description;
