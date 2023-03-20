import React from "react";

// This component is only for practice
export default function Window() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function watchWidth() {
      console.log("Setting UP");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWidth);
    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);
  return (
    <>
      <p>Widow Width : {windowWidth}</p>
    </>
  );
}
