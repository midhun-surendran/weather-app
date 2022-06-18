import React from "react";
import Search from "./Components/Search";
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="w-full h-screen  flex flex-col justify-start items-center app">
      <Search />
      <Weather />
    </div>
  );
}

export default App;
