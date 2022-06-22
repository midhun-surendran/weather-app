import React from "react";

import Humidity from "./Humidity";
import Feel from "./Feels";
import Temp from "./Temp";
import Wind from "./Wind";

function Weather(props) {
  return (
    <div className="max-w-[300px] lg:max-w-[1000px] h-[400px] lg:h-[250px]  w-full flex flex-col justify-evenly items-center bg-white opacity-75 rounded-xl mt-5 lg:mt-10">
      <div className="max-w-[400px] lg:max-w-[900px] h-[200px] lg:h-[200px]  w-full flex-col lg:flex-row flex justify-evenly items-center  ">
        <Temp city={props.city} />
        <Feel city={props.city} />
      </div>
      <div className="max-w-[400px] lg:max-w-[900px] h-[200px] lg:h-[200px] w-full flex-col lg:flex-row flex justify-evenly items-center ">
        <Wind city={props.city} />

        <Humidity city={props.city} />
      </div>
    </div>
  );
}

export default Weather;
