import ToasterContext from "./helpers/context/ToasterContext";
import "react-circular-progressbar/dist/styles.css";
import Header from "./components/organism/header";
import { Routers } from "../src/components/pages";
import MobileHeader from "./components/organism/mobileHeader";

function App() {
  return (
    <div className="font-custom-font h-screen ">
      <ToasterContext />
      <Header />

      {/* <hr className="border-[0.5px] border-[#D7DFE9] max-w-[1330px] m-auto" /> */}
      <div className="hidden h-[3.75rem] w-full md:block"></div>
      {/* <hr className="border-[0.5px] border-[#D7DFE9]" /> */}
      <Routers />
      {/* mx-auto my-4 flex w-[90%] max-w-[1008px] flex-col gap-4 md:w-[75%] */}
      <MobileHeader />
    </div>
  );
}

export default App;
