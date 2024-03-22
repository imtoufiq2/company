import { useEffect } from "react";
import WebFont from "webfontloader";
const Font = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Basier Circle"],
      },
    });
  }, []);
};

export default Font;
