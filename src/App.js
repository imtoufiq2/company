import Header from "./components/Header";
import ToasterContext from "./context/ToasterContext";

import { Routers } from "./router/router";

function App() {
  return (
    <div className="h-screen font-custom-font bg-[#F9FAFB]">
      <ToasterContext />
      <Header />
      <Routers />
    </div>
  );
}

export default App;
