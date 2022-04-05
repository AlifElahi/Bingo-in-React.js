import type { MouseEvent } from "react";


export type ClickHandler<T> = (event: MouseEvent<T>) => void;
export type BoxClickHandler = ClickHandler<HTMLTableDataCellElement>;
export type ButtonClickHandler = ClickHandler<HTMLButtonElement>;
export type BoxData = { word: string; stamped: boolean;isCenter: boolean };
export type BoxProps = BoxData & { toggleStamped: BoxClickHandler };
export type  ArrayTransformation = <T>(array: T[]) => T[];