import React from "react";
import DateTime from "./DateTime";
import Humidity from "./Humidity";
import Maxmin from "./Maxmin";
import Temp from "./Temp";
import Wind from "./Wind";

function Weather() {
  return (
    <div className="max-w-[500px] lg:max-w-[1000px] h-[400px] lg:h-[450px]  w-full flex flex-col justify-evenly items-center bg-white opacity-75 rounded-xl mt-5 lg:mt-10">
      <div className="max-w-[400px] lg:max-w-[900px] h-[200px] lg:h-[200px]  w-full flex-col lg:flex-row flex justify-around items-center mt-10 ">
        <DateTime />
        <Temp />
        <Humidity />
      </div>
      <div className="max-w-[400px] lg:max-w-[900px] h-[200px] lg:h-[200px] w-full flex-col lg:flex-row  flex justify-evenly items-center ">
        <Wind />
        <Maxmin />
      </div>
    </div>
  );
}

export default Weather;
