import React, { useState } from "react";
import "./App.css";

function App() {
  const items = [
    {
      name: "1",
      id: 1,
    },
    {
      name: "2",
      id: 2,
    },
    {
      name: "3",
      id: 3,
    },
    {
      name: "4",
      id: 4,
    },
    {
      name: "5",
      id: 5,
    },
    {
      name: "6",
      id: 6,
    },
    {
      name: "7",
      id: 7,
    },
    {
      name: "8",
      id: 8,
    },
  ];

  const [notas, setNotas] = useState([]);

  const handleChange = (index, id, event) => {
    // notas[index] = { id: id, value: event.target.value };
    setNotas({ ...notas, [id]: event.target.value });
  };

  const handleSubmit = () => console.log(notas);

  return (
    <div
      style={{
        marginLeft: 15,
        display: "flex",
        flexDirection: "column",
        width: "400px",
        alignItems: "start",
      }}
    >
      <h1>OAAAAAA</h1>
      {items.map((value, index) => {
        return (
          <>
            <label>{value.name}</label>
            <input
              style={{ marginBottom: "10px" }}
              onChange={(event) => handleChange(index, value.id, event)}
            />
          </>
        );
      })}
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}

export default App;
