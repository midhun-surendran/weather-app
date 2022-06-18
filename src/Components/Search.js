import React from "react";

function Search() {
  return (
    <div className="max-w-[500px] lg:max-w-[1000px] w-full ">
      <input
        className="w-full block appearance-none border-0 bg-none outline-none p-4 bg-white opacity-75 focus:opacity-100 rounded-b-2xl shadow-xl text-[#313131] text-xl "
        type="text"
        placeholder="search..City.."
      />
    </div>
  );
}

export default Search;
