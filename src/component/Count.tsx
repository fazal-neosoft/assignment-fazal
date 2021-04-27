/**
 * @author Fazal Iqubal
 */

import React, { FC, useState, useCallback } from "react";
const Count: FC<{}> = (): JSX.Element => {
  const [count, setCount] = useState(0);
  const updateCount = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      switch (e.currentTarget.innerText) {
        case "Reset":
          setCount(0);
          break;
        case "Increament":
          setCount(count+1);
          break;
        default:
          setCount(count + 1);
          break;
      }
    },
    [count]
  );
  return (
    <div>
      <h2>Count Value</h2>
      <h1>{count}</h1>
      <button className="btn_counter" onClick={updateCount}>Increament</button>
      <button className="btn_counter" onClick={updateCount}>Reset</button>
    </div>
  );
};
export default Count;
