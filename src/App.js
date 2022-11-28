import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./component/weather";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<todayWeather />} />
        <Route path='/about' element={<weeklyWeather />} />
        <Route path='/code' element={<settings/>}/>
        {/* <Route path='*' element={<Error />} /> */}
    </Routes>
  </BrowserRouter>
  );
}
export default App;
