/** @format */

import React from "react";

function Canvas() {
  const canvas = React.useRef();

  // React.useEffect(() => {
  //   const context = canvas.current.getContext("2d")
  // })

  return (
    <div className="canvas">
      <canvas
      // className=""
      // ref={canvas}
      />
    </div>
  );
}

export default Canvas;
