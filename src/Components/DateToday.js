import React from "react";

function DateToday() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Augest",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date}th ${month} ${year}`;
  };

  return (
    <div className="max-w-[250px] lg:max-w-[250px] w-full h-[600px] lg:h-[100px] bg-slate-600 hover:bg-slate-900 group rounded-lg flex justify-center items-center mb-5 lg:mb-0">
      <div>
        <h1 className="text-xl group-hover:text-2xl text-white  group-hover:font-extrabold">
          {dateBuilder(new Date())}
        </h1>
      </div>
      <div></div>
    </div>
  );
}

export default DateToday;
