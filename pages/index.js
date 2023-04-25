import styles from "../styles/Home.module.css"
import { useState } from "react";

export default function Home() {
  const [inputs, setInputs] = useState({ input: "" });
  const [error, setError] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [position, setPosition] = useState({ x: 4, y: 4 });
  const [direction, setDirection] = useState("up");

  const handleChange = (event) => {
    const { name, value } = event.target;
    const regex = /^[WLR]*$/;

    if (regex.test(value)) {
      setInputs({ ...inputs, [name]: value });
      setError(null);
      setIsDisabled(value.trim() === "");
    } else {
      setError("สามารถพิมพ์ได้แค่ W, L, R");
      setIsDisabled(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowTable(true);
    handleInput(inputs.input);
    setInputs({ input: "" });
  };

  const handleInput = (input) => {
    let stepsToWalk = 0;
  
    const handleAction = (action) => {
      switch (action) {
        case "W":
          handleWalk(stepsToWalk);
          stepsToWalk = 0;
          break;
        case "L":
          handleTurnLeft();
          break;
        case "R":
          handleTurnRight();
          break;
        default:
          break;
      }
    };
  
    for (let i = 0; i < input.length; i++) {
      const action = input[i];
      if (action === "W") {
        stepsToWalk++;
      } else if (action !== "") { // Skip over empty values
        handleAction(action);
      }
    }
    handleWalk(stepsToWalk);
  };
  
  
  const handleWalk = (steps) => {
    setVisitedCells({ ...visitedCells, [`${position.x},${position.y}`]: true });
    
    switch (direction) {
      case "up":
        setPosition({ ...position, y: position.y - steps });
        break;
      case "down":
        setPosition({ ...position, y: position.y + steps });
        break;
      case "left":
        setPosition({ ...position, x: position.x - steps });
        break;
      case "right":
        setPosition({ ...position, x: position.x + steps });
        break;
      default:
        break;
        
    }
  };
  const handleTurnLeft = () => {
    switch (direction) {
      case "up":
        setDirection("left");
        break;
      case "down":
        setDirection("right");
        break;
      case "left":
        setDirection("down");
        break;
      case "right":
        setDirection("up");
        break;
      default:
        break;
    }
  };
  
  const handleTurnRight = () => {
    switch (direction) {
      case "up":
        setDirection("right");
        break;
      case "down":
        setDirection("left");
        break;
      case "left":
        setDirection("up");
        break;
      case "right":
        setDirection("down");
        break;
      default:
        break;
    }
  };
  const [visitedCells, setVisitedCells] = useState({});

  const renderTable = () => {
    return (
      <table className="mt-4 border-collapse border border-gray-400 " id={styles.id}>
        <tbody>
          {Array.from(Array(9)).map((_, i) => (
            <tr key={i}>
              {Array.from(Array(9)).map((_, j) => {
                const isCurrentCell = i === position.y && j === position.x;
                const isVisitedCell = visitedCells[`${j},${i}`];
                const backgroundColor = isCurrentCell ? "green" : isVisitedCell ? "gray" : "white";
                return (
                  <td
                    key={`${i}-${j}`}
                    className="border border-gray-400 text-center h-8 w-8"
                    style={{ backgroundColor }}
                  >
                    {""}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="pl-[2rem] pt-[1.5rem]">
      
     
      <div className="max-[768px]:flex flex-col justify-center items-center pt-[1rem]">
      
      <form onSubmit={handleSubmit}>
        <h1>Robot Walk</h1>
      <h1>คำสั่ง Robot Walk</h1>
        <input
          type="text"
          name="input"
          value={inputs.input}
          onChange={handleChange}
          className="w-[10rem] h-[2rem] px-2 text-black bg-gray-200 rounded-md outline-none"
        />

        <button
          type="submit"
          disabled={isDisabled}
          className={`w-[5rem] ml-[1rem] h-[2rem] px-2 rounded-md ${
            isDisabled
              ? "bg-gray-400 outline-none text-white cursor-default"
              : "bg-slate-300 text-black hover:bg-slate-400 cursor-pointer"
          }`}
        >
          Submit
        </button>
    
        {error && <div className="text-red-500 mt-1">{error}</div>}
      </form>
       <div >
      {showTable && renderTable()} {}
      </div>
      </div>
     
      
    </div>
  );
}
