import React from "react";
import { render, screen } from "@testing-library/react";
import Box from "./Box";

test("shows as stamped if stamped", () => {
  render(
    <table>
      <tbody>
        <tr>
          <Box word="Own it" stamped={true} isCenter={false} toggleStamped={() => {}} />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Own it")).toHaveClass("stamped");
});

test("shows as not stamped if not stamped", () => {
  render(
    <table>
      <tbody>
        <tr>
          <Box word="Own it" stamped={false} isCenter={false} toggleStamped={() => {}} />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Own it")).not.toHaveClass("stamped");
});
