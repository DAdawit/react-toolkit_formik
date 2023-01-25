import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { ordered, restocked } from "../icecream/icecreamSlice";
function Icecreamview() {
  const [value, setValue] = React.useState(1);
  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  return (
    <div>
      <h2>Number of icecream {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered(1))}>order icecream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>
        Restock icecreams
      </button>
    </div>
  );
}

export default Icecreamview;
