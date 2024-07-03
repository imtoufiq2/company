import { useEffect } from "react";
import ToasterContext from "./helpers/context/ToasterContext";
import "react-circular-progressbar/dist/styles.css";
import Header from "./components/organism/header";
import { Routers } from "../src/components/pages";
import MobileHeader from "./components/organism/mobileHeader";

function App() {
  useEffect(() => {
    // Add the script to the footer
    const script = document.createElement('script');
    script.src = '//cdn.invitereferrals.com/js/invite-referrals-1.0.js';
    script.async = true;
    script.type = 'text/javascript';

    const div = document.createElement('div');
    div.id = 'invtrflfloatbtn';
    document.body.appendChild(div);

    const inviteReferralsScript = `
      var ir = ir || function(){(window.ir.q = window.ir.q || []).push(arguments)};
      var invite_referrals = window.invite_referrals || {}; (function() { 
        invite_referrals.auth = { 
          bid_e :'3C708DFF241C0C15CC3941A0C10D1CB3',
          bid : '68573', 
          t : '420', 
          email : '', 
          userParams : {'fname': ''}
        };
        invite_referrals.async = false;
      })();
    `;

    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = inviteReferralsScript;
    document.body.appendChild(scriptElement);

    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component is unmounted
      document.body.removeChild(script);
      document.body.removeChild(scriptElement);
      document.body.removeChild(div);
    };
  }, []);
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
      {/* <div id="_auto-scroll" className="border absolute" style={{width:"50px" , height:"50px"}}>

      </div> */}
    </div>
  );
}

export default App;
