import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiFillPlusCircle } from "react-icons/ai";
function AddPostBtn() {
  const [hover, setHover] = useState(false);
  function toggleHover() {
    if (hover) {
      setHover(!hover);
    }
  }

  function onClick(e) {
    window.location.pathname = "/create";
  }

  return (
    <IconContext.Provider
      value={{
        style: !hover
          ? {
              color: "blue",
              fontSize: 60,
              position: "fixed",
              bottom: 20,
              right: 30,
              cursor: "pointer",
            }
          : {
              color: "green",
            },
      }}
    >
      <div>
        <AiFillPlusCircle
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
          onClick={onClick}
        />
      </div>
    </IconContext.Provider>
  );
}

export default AddPostBtn;
