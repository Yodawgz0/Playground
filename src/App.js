import "./styles.css";
import React from "react";
// import FunctionContextComponent from "./FunctionComponent";
// import { ThemeProvider } from "./ThemeContext";
//import TryingComponent from "./tryingComponent";
//import ReduxTry from "./components/reduxTry";
import HeadingHOC from "./components/headingHOC";

export default function App() {
  return (
    <>
      {/* <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider> */}
      {/* <TryingComponent /> */}={/* <ReduxTry /> */}
      <HeadingHOC style={{ backgroundColor: "red" }} />
    </>
  );
}
