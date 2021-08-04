import React, { useCallback, useState } from "react";
import "./App.css";

const items = {
  name: "one",
  id: 1,
  subItems: [
    {
      name: "one-1",
      id: 2,
      subItems: [
        {
          name: "one-2",
          id: 3,
          subItems: [
            {
              name: "one-3",
              id: 4,
              subItems: [
                {
                  name: "one-4",
                  id: 5,
                  subItems: [],
                  fields: [
                    {
                      name: "regiao",
                    },
                    { name: "cargo" },
                  ],
                },
              ],
            },

            {
              name: "one-7",
              id: 7,
              subItems: [
                {
                  name: "one-8",
                  id: 8,
                  subItems: [],
                  fields: [
                    {
                      name: "regiao",
                    },
                    { name: "cargo" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "two",
      id: 6,
      subItems: [
        {
          name: "two-1",
          id: 7,
          subItems: [],
          fields: [
            {
              name: "cavalo",
            },
            { name: "cabra" },
          ],
        },
      ],
    },
  ],
};

const File = ({ id, name, subItems }) => {
  const [showSubItems, SetShowSubItems] = useState(false);

  const handleClick = useCallback(() => {
    SetShowSubItems(!showSubItems);
  }, [showSubItems, SetShowSubItems]);
  return (
    <div>
      <span onClick={handleClick}>
        <h4 style={{ fontWeight: showSubItems ? "bold" : "normal" }}>{name}</h4>
      </span>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          left: 25,
          borderLeft: "1px solid",
          paddingLeft: 15,
        }}
      >
        {showSubItems && subItems.map((node) => <File {...node} />)}
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{ marginLeft: 15 }}>
      <File {...items} />
    </div>
  );
}

export default App;
