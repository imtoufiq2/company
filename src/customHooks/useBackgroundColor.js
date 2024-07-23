import { useEffect } from "react";

const useBackgroundColor = () => {
  useEffect(() => {
    // Function to set the background color based on window width
    const updateBackgroundColor = () => {
      if (window.innerWidth < 768) {
        document.body.style.backgroundColor = "#fff";
      } else {
        document.body.style.backgroundColor = "#F9FAFB";
      }
    };

    // Set the background color when the component mounts
    updateBackgroundColor();

    // Add an event listener to update the background color on resize
    window.addEventListener("resize", updateBackgroundColor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBackgroundColor);
    };
  }, []);
};

export default useBackgroundColor;
