import React from "react";
import "./Box.css";
import classNames from "classnames";
import { BoxProps } from "../../helper/types";

const Box: React.FC<BoxProps> = ({ word, stamped, isCenter, toggleStamped }) => {

  const classes = classNames("Box", { stamped: stamped });



  return (
    <td role="gridcell" className={classes} onClick={toggleStamped}>

      {isCenter ?
        <>

          🌟 {word} 🌟

        </>
        : word}
    </td>

  );
};

export default Box;
