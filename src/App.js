import { useParams } from "react-router-dom";
import Header from "./components/Header";
import ToasterContext from "./context/ToasterContext";
import "react-circular-progressbar/dist/styles.css";
import HomeHeader from "./pages/home/components/Header";
import { Routers } from "./router/router";
import { useEffect, useState } from "react";
import DummyHeader from "./pages/home/components/DummyHeader";
function App() {
  console.log(window.location.pathname);
  const [pathName, setpathName] = useState("/login");
  useEffect(() => {
    setpathName(window.location.pathname);
  }, []);
  console.log(pathName);
  return (
    <div className="h-screen font-custom-font ">
      <ToasterContext />
      {/* <Header /> */}
      {/* <DummyHeader /> */}
   
     
      <HomeHeader />
      <hr className="border-[0.5px] border-[#D7DFE9]"/> 
      <Routers />
    </div>
  );
}

export default App;
