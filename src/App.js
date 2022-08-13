import "./styles.css";
import React, { useEffect, useState } from "react";
// import FunctionContextComponent from "./FunctionComponent";
// import { ThemeProvider } from "./ThemeContext";
//import TryingComponent from "./tryingComponent";
//import ReduxTry from "./components/reduxTry";

export default function App() {
  const [users, setUsers] = useState([]);
  const apiLink = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";

  useEffect(() => {
    async function fetchAPi() {
      await fetch(apiLink)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          const filteredData = res.filter((value, index, arr) => index > 1);  
          setUsers(filteredData);
        })
        .catch((err) => console.log(err));
    }
    fetchAPi();
  }, []);

  return (
    <>
      {/* <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider> */}
      {/* <TryingComponent /> */}
      {users?.map((data, i) => {
        return <div key={i}>{data.name}</div>;
      })}
      {/* <ReduxTry /> */}
    </>
  );
}
