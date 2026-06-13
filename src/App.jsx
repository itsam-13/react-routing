import { Route } from "react-router-dom"
import { Routes } from "react-router-dom";

import Nav from "./components/Nav";
import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-800 text-white p-[5%]">
      <Nav />
      <MainRoutes/>
    </div>
  )
}

export default App

