import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

const toggleStamped = function () {};

const BoxPropsList = [
  { word: "circle back", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "KPI", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Alligator", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Rock Star", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Anole", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Ant", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Anteater", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Antelope", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Ape", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Armadillo", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Ass", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Baboon", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Badger", stamped: false,isCenter:true, toggleStamped: toggleStamped },
  { word: "Ba&shy;rra&shy;cuda", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Bat", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Bear", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Beaver", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Bee", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Binturong", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Bird", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Bison", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Bluebird", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Boar", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Bobcat", stamped: false,isCenter:false, toggleStamped: toggleStamped },
  { word: "Budgie", stamped: false,isCenter:false, toggleStamped: toggleStamped },
];

test("displays the words in a grid", () => {
  render(<Grid BoxPropsList={BoxPropsList} />);

  const rows = screen.queryAllByRole("row");
  const row1 = rows[0];
  expect(row1).toHaveTextContent("circle back");
  expect(row1).toHaveTextContent("KPI");
  expect(row1).toHaveTextContent("Alligator");
  expect(row1).toHaveTextContent("Rock Star");
  expect(row1).toHaveTextContent("Anole");
  const row2 = rows[1];
  expect(row2).toHaveTextContent("Ant");
  expect(row2).toHaveTextContent("Anteater");
  expect(row2).toHaveTextContent("Antelope");
  expect(row2).toHaveTextContent("Ape");
  expect(row2).toHaveTextContent("Armadillo");
  const row3 = rows[2];
  expect(row3).toHaveTextContent("Ass");
  expect(row3).toHaveTextContent("Baboon");
  expect(row3).toHaveTextContent("Badger");
  expect(row3).toHaveTextContent("Ba\u00adrra\u00adcuda");
  expect(row3).toHaveTextContent("Bat");
  const row4 = rows[3];
  expect(row4).toHaveTextContent("Bear");
  expect(row4).toHaveTextContent("Beaver");
  expect(row4).toHaveTextContent("Bee");
  expect(row4).toHaveTextContent("Binturong");
  expect(row4).toHaveTextContent("Bird");
  const row5 = rows[4];
  expect(row5).toHaveTextContent("Bison");
  expect(row5).toHaveTextContent("Bluebird");
  expect(row5).toHaveTextContent("Boar");
  expect(row5).toHaveTextContent("Bobcat");
  expect(row5).toHaveTextContent("Budgie");
});
