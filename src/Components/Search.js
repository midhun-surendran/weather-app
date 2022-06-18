import React from "react";

function Search() {
  return (
    <div className="max-w-[500px] lg:max-w-[1000px] w-full ">
      <input
        className="w-full block appearance-none border-0 bg-none outline-none p-4 bg-white opacity-75 focus:opacity-100 rounded-b-2xl shadow-xl text-[#313131] text-xl "
        type="text"
        placeholder="search..City.."
      />
      <div className="max-w-[500px] lg:max-w-[1000px] h-[120px] w-full flex justify-center items-center bg-white opacity-75 rounded-xl mt-10">
        <div className="w-auto h-auto bg-transparent opacity-100">
          <h1 className=" font-extrabold text-transparent text-3xl lg:text-7xl bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 opacity-100 ">
            new york,usa
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Search;
