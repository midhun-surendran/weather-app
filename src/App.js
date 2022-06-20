import React, { useState, useEffect } from "react";
import Weather from "./Components/Weather";
import axios from "./Axios";
import { API_KEY } from "./Constants/Constants";
import { HiOutlineSearch } from "react-icons/hi";

function App() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  useEffect(
    () => {
      axios
        .get(`weather?q=${query}&units=metric&appid=${API_KEY}`)
        .then((response) => {
          console.log(response.data);
          setCity(response.data);
        })
        .catch((error) => {
          console.log("error");
        });
    },
    [query],
    [data],
    [city]
  );

  const textOnchangeHandler = (e) => {
    setData(e.target.value);
  };
  const handleSearch = () => {
    setQuery(data);
  };

  return (
    <div className="w-full h-screen  flex flex-col justify-start items-center app">
      <div className="max-w-[300px] lg:max-w-[1000px] w-full flex flex-col justify-center items-center ">
        <input
          className="w-full block appearance-none border-0 bg-none outline-none p-4 bg-white opacity-75 focus:opacity-100 rounded-b-2xl shadow-xl text-[#313131] text-xl "
          type="text"
          placeholder="search..City.."
          onChange={textOnchangeHandler}
        />

        <div className="max-w-[200px] lg:max-w-[200px] h-[50px] w-full flex justify-center items-center  bg-slate-600 hover:bg-slate-900   opacity-75 rounded-b-2xl ">
          <button className=" text-white  " onClick={handleSearch}>
            <HiOutlineSearch size={40} />
          </button>
        </div>

        <div className="max-w-[300px] lg:max-w-[1000px] h-[120px] w-full flex justify-center items-center bg-white opacity-75 rounded-xl mt-10">
          <div className="w-auto h-auto bg-transparent opacity-100">
            <h1 className=" font-extrabold text-transparent text-3xl lg:text-7xl bg-clip-text bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 opacity-100 ">
              {city ? city.name : ""},{city ? city.sys.country : ""}
            </h1>
          </div>
        </div>
      </div>
      <Weather city={city} />
    </div>
  );
}

export default App;
