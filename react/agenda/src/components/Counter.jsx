import { useState } from "react";
export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState("");

  function handleAddOneToCounter() {
    setCounter((value) => value + 1);
  }

  function handleMinusOneToCounter() {
    if (counter > 0) setCounter(counter - 1);
  }

  function handleAddTenToCounter() {
    setCounter(counter + 10);
  }

  function handleMinusTenToCounter() {
    setCounter((prev) => {
      if (prev > 9) return prev - 10;
      return prev;
    });
  }

  function handleZeroCounter() {
    setCounter(0);
  }

  function handleAddAmountToCounter() {
    setCounter((prev) => prev + Number(amount));
    setAmount("0");
  }

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          className="w-8 h-8 border shadow-md rounded text-xl"
          onClick={handleMinusOneToCounter}
        >
          <span className="relative bottom-[2px]">-</span>
        </button>
        <p>Resultado: {counter}</p>
        <button
          className="w-8 h-8 border shadow-md rounded text-xl"
          onClick={handleAddOneToCounter}
        >
          <span className="relative bottom-[2px]">+</span>
        </button>
      </div>
      <div className="flex gap-2 mt-2">
        <button
          className="w-fit h-fit p-1 border shadow-md rounded text-xl"
          onClick={handleMinusTenToCounter}
        >
          <span className="relative bottom-[2px]">- 10</span>
        </button>
        <button
          className="w-fit h-fit p-1 border shadow-md rounded text-xl"
          onClick={handleZeroCounter}
        >
          <span className="relative bottom-[2px]">Zerar contador</span>
        </button>
        <button
          className="w-fit h-fit p-1 border shadow-md rounded text-xl"
          onClick={handleAddTenToCounter}
        >
          <span className="relative bottom-[2px]">+ 10</span>
        </button>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <input
          className="border outline-none"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleAddAmountToCounter}
          className="border p-1 rounded"
        >
          Adicionar valor
        </button>
      </div>
    </>
  );
};
