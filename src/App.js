// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
   	const [data, setData] = useState([]);

	useEffect(() => {
    console.log(process.env.REACT_APP_BACKEND_URL)
    if(process.env.REACT_APP_BACKEND_URL === undefined) {
      alert("API não configurada")
    }
		fetch(process.env.REACT_APP_BACKEND_URL)
		 .then((res) => res.json())
      		 .then((result) => setData(result))
      		 .catch((err) => console.log("error", err));
	}, []);
  return (
    <div className="divTable">
      {data &&
        data.map((element, index) => (
        <div className="headRow">
          <div className="divCell" align="center">{element.song_id}</div>
          <div className="divCell divCellName">{element.title}</div>
          <div className="divCell divCellName">{element.artist}</div>
          <div className="divCell" align="center">{element.genre}</div>
          </div>
        ))}
    </div>
  );

}

export default App;

