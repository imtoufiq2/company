import ToasterContext from "./context/ToasterContext";
import "react-circular-progressbar/dist/styles.css";
import HomeHeader from "./components/pages/home/components/Header";
import { Routers } from "./router/router";

function App() {
  return (
    <div className="h-screen font-custom-font ">
      <ToasterContext />
      <HomeHeader />
      <hr className="border-[0.5px] border-[#D7DFE9]" />
      <Routers />
    </div>
  );
}

export default App;
