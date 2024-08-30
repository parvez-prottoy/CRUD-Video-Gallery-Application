import logoImg from "../assets/logo.svg";

const Navigation = () => {
  return (
    <nav class="bg-slate-100 shadow-md">
      <div class="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <a href="/">
          <img class="h-10" src={logoImg} alt="Video Gallery" />
        </a>
        <a
          href="/videos/add"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white duration-200 bg-[#1b66b9] hover:bg-[#e91348] focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
        >
          + Add Video
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
