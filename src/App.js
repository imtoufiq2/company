import ToasterContext from "./helpers/context/ToasterContext";
import "react-circular-progressbar/dist/styles.css";
import Header from "./components/organism/header";
import { Routers } from "../src/components/pages";

function App() {
  return (
    <div className="font-custom-font h-screen ">
      <ToasterContext />
      <Header />

     
      {/* <hr className="border-[0.5px] border-[#D7DFE9] max-w-[1330px] m-auto" /> */}
      <div className="h-[3.75rem] w-full"></div>
      {/* <hr className="border-[0.5px] border-[#D7DFE9]" /> */}
      <Routers />
    </div>
  );
}

export default App;
