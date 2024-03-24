"use client";
export default function Cell({
  go,
  setGo,
  id,
  cells,
  setCells,
  cell,
  winMassage,
}) {
  const handelClick = (e) => {
    if (winMassage) {
      return;
    }
    const notToken = !cells[id];
    if (notToken) {
      if (go === "circle") {
        handelChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handelChange("cross");
        setGo("circle");
      }
    }
  };
  const handelChange = (cellToChange) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };
  return (
    <div onClick={handelClick} className="cell">
      <div className={cell}>{cell ? (cell === "circle" ? "o" : "x") : ""}</div>
    </div>
  );
}
