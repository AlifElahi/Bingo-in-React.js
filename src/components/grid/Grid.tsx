import React from "react";
import "./Grid.css";
import Box from "../box/Box"
import { BoxProps } from "../../helper/types";
import chunk from "lodash/chunk";

const Grid: React.FC<{ BoxPropsList: BoxProps[] }> = ({ BoxPropsList }) => {
  const chunked = chunk(BoxPropsList, 5);

  return (
    <table className="Grid" role="grid">
      <tbody>
        {chunked.map((row, index) => (
          <Row BoxPropsList={row} key={index} />
        ))}
      </tbody>
    </table>
  );
};

const Row: React.FC<{ BoxPropsList: BoxProps[] }> = ({ BoxPropsList }) => {
  return (
    <tr className="Row">
      {BoxPropsList.map(({ word, stamped,isCenter, toggleStamped }) => (
        <Box
          key={word}
          word={word}
          isCenter={isCenter}
          stamped={stamped}
          toggleStamped={toggleStamped}
        />
      ))}
    </tr>
  );
};

export default Grid;
