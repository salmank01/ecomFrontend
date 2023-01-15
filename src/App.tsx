import { useState, useEffect } from "react";
import { AddProduct } from "./components/molecules/add-product/AddProduct";
import SideMenu from "./components/molecules/side-menu/sideMenu";

const App = () => {
  // Keep track of WindowSize
  const getWindowSize = () => {
    return window.innerWidth;
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <div>
      <AddProduct ws={windowSize}/>
    </div>
  );
};
export default App;
