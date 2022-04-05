import React from "react";
import "./Cell.css";
import classNames from "classnames";
import { BoxProps } from "../../helper/types";

const Cell: React.FC<BoxProps> = ({ word, stamped, isCenter, toggleStamped }) => {

  const classes = classNames("Cell", { stamped: stamped });

  const htmlSoftHyphen = "&shy;";
  const unicodeSoftHyphen = "\u00ad";
  const normalise = (string: string): string => string.replace(new RegExp(htmlSoftHyphen, "g"), unicodeSoftHyphen);


  return (
    <td role="gridcell" className={classes} onClick={toggleStamped}>

      {isCenter ?
        <>

          🌟 {normalise("Free cell")} 🌟

        </>
        : word}
    </td>

  );
};

export default Cell;
