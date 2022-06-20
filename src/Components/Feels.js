import React from "react";

function Feel(props) {
  return (
    <div className="max-w-[250px] lg:max-w-[400px] w-full h-[50px] lg:h-[100px]  bg-slate-600 hover:bg-slate-900 group rounded-lg flex justify-around items-center  lg:mb-0">
      <div>
        <h1 className="text-lg hover:text-2xl   lg:text-2xl  lg:hover:text-4xl text-white  group-hover:font-extrabold ">
          <span className="text-lg">Feels-like:</span>
          {props.city ? props.city.main.feels_like.toFixed(0) : ""}°C
        </h1>
      </div>
    </div>
  );
}

export default Feel;
