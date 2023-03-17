import React from "react";

function Child({ handleClick }) {
  console.log("re render");

  return (
    <>
      <h3> this is child</h3>
      <button onClick={handleClick}>click me</button>
    </>
  );
}

export default React.memo(Child);
