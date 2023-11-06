import {useEffect} from 'react'


import Login from "./pages/Login/Login";
import "./styles/styles.css";


export const App = () => {
  return (
    <div>
        <h6>{process.env.name}</h6>
      <Login title={"Hello world"}/>
    </div>
  );
};
