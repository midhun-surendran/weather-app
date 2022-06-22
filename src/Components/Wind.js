import React from "react";

function Wind(props) {
  return (
    <div className="max-w-[250px] lg:max-w-[400px] w-full h-[50px] lg:h-[50px] bg-slate-600 hover:bg-slate-900 group rounded-lg flex justify-around items-center">
      <h1 className="text-2xl group-hover:text-4xl text-white  group-hover:font-extrabold">
        <span className="text-lg">Wind Speed :</span>
        {props.city ? props.city.wind.speed : ""}m/s
      </h1>
    </div>
  );
}

export default Wind;
