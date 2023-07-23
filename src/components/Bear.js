import React, { useState } from 'react';
import useBearStore from "../store";

function Bear() {
  const [inputValue, setInputValue] = useState(1); // Varsayılan değer olarak 1 belirledik
  const increment = useBearStore((state) => state.increment);
  const decrement = useBearStore((state) => state.decrement);
  const bears = useBearStore((state) => state.bears);

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setInputValue(isNaN(value) ? 0 : value); // Eğer geçersiz bir değer girilirse 0 olarak kabul ediyoruz
  };

  const handleIncrement = () => {
    increment(inputValue); // store.js'deki increment fonksiyonunu çağırarak artırma işlemini gerçekleştiriyoruz
  };

  const handleDecrement = () => {
    decrement(inputValue); // store.js'deki decrement fonksiyonunu çağırarak azaltma işlemini gerçekleştiriyoruz
  };

  return (
    <div>
      <h1>{bears} around here ...</h1>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleIncrement}>Increase by {inputValue}</button>
      <button onClick={handleDecrement}>Decrease by {inputValue}</button>
    </div>
  );
}

export default Bear;
