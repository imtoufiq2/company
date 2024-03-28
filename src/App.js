import { useParams } from "react-router-dom";
import Header from "./components/Header";
import ToasterContext from "./context/ToasterContext";
import HomeHeader from "./pages/home/components/Header";
import { Routers } from "./router/router";
import { useEffect, useState } from "react";

function App() {
  console.log(window.location.pathname);
  const [pathName, setpathName] = useState("/login");
  useEffect(() => {
    setpathName(window.location.pathname);
  }, []);
  console.log(pathName);
  return (
    <div className="h-screen font-custom-font bg-[#F9FAFB]">
      <ToasterContext />

      {/* <Header /> */}
      <HomeHeader />
      <Routers />
    </div>
  );
}

export default App;
