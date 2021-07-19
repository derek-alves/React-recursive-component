import "./App.css";
import React, { useState } from "react";

const items = [
  {
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
            ],
          },
        ],
      },
      {
        name: "two",
        value: 6,
        subItems: [
          {
            name: "two-1",
            value: 7,
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
  },
];

const OptionsList = ({ options, onChange, selectedOptions }) => {
  console.log(selectedOptions);
  const handleCheckboxClicked = (selectedOptionId) => {
    // o que esta selecionado atualmente
    if (selectedOptions[selectedOptionId]) {
      // remove o item selecionado da lista
      delete selectedOptions[selectedOptionId];
    } else {
      // caso não seja o atual o selecionado
      // adicionando a chave do selecionado
      selectedOptions[selectedOptionId] = [];
    }

    onChange(selectedOptions);
  };

  const handleSubOptionsListChange = (optionId, subSelections) => {
    // add sub selections to current optionId
    console.log("AQQQQUI");
    selectedOptions[optionId] = subSelections;
    // call onChange function given by parent
    onChange(selectedOptions);
  };

  return (
    <div>
      {options.map((option, key) => (
        <ul>
          <Checkbox
            selected={selectedOptions[option.name]}
            label={option.name}
            onChange={() => {
              handleCheckboxClicked(option.name);
            }}
          />
          {option.subItems.length > 0 && selectedOptions[option.name] && (
            <OptionsList
              options={option.subItems}
              selectedOptions={selectedOptions[option.name]}
              onChange={(subItems) =>
                handleSubOptionsListChange(option.name, subItems)
              }
            />
          )}
        </ul>
      ))}
    </div>
  );
};

const Checkbox = ({ selected, label, onChange }) => {
  return (
    <div>
      <input
        type="Checkbox"
        id="html"
        name={label}
        value={label}
        onChange={() => onChange(!selected)}
      />

      <div className="label">{label}</div>
    </div>
  );
};

function App() {
  const [selectedOptions, setSelectedOptios] = useState([]);

  return (
    <div className="App">
      <h1>Toppings</h1>
      <OptionsList
        options={items}
        onChange={(selectedOptions) => {
          setSelectedOptios(selectedOptions);
        }}
        selectedOptions={selectedOptions}
      />
    </div>
  );
}

export default App;
