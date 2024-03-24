"use client";
import { useEffect, useState } from "react";
import "./page.module.css";
import Cell from "./components/Cell";
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winMassage, setWinMassage] = useState("");
  const [playAgain, setplayAgain] = useState(false);
  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWinMassage("Circle Wins!");
        setplayAgain(true);
      } else if (crossWins) {
        setWinMassage("Cross Wins!");
        setplayAgain(true);
      }
    });
    if (cells.every((cell) => cell != "") && !winMassage) {
      setWinMassage("Draw!");
      setplayAgain(true);
    }
  }, [cells, winMassage]);
  const handelPlayAgain = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setWinMassage("");
    setGo("circle");
    setplayAgain(false);
  };
  return (
    <div className="container">
      <div className="gamebord">
        {cells.map((cell, index) => {
          return (
            <Cell
              id={index}
              cells={cells}
              setCells={setCells}
              go={go}
              setGo={setGo}
              key={index}
              cell={cell}
              winMassage={winMassage}
              setplayAgain={setplayAgain}
            />
          );
        })}
      </div>
      <p>{winMassage}</p>
      {!winMassage && (
        <p style={{ fontSize: "25px" }}>{`its now ${go} turn!`}</p>
      )}
      <button
        style={playAgain ? { display: "block" } : { display: "none" }}
        onClick={handelPlayAgain}
        className="playAgain"
      >
        Play Again!
      </button>
    </div>
  );
}
