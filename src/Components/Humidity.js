import React from "react";

function Humidity(props) {
  return (
    <div className="max-w-[250px] lg:max-w-[250px] w-full h-[600px] lg:h-[100px] bg-slate-600 hover:bg-slate-900 group rounded-lg flex justify-around items-center mb-5 lg:mb-0">
      <h1 className="text-2xl group-hover:text-4xl text-white  group-hover:font-extrabold">
        <span className="text-lg">Humidity:</span>
        {props.city ? props.city.main.humidity : ""}
      </h1>
    </div>
  );
}

export default Humidity;
