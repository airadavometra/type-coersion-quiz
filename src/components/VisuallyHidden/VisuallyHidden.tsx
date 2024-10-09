import { ReactNode } from "react";
import s from "./VisuallyHidden.module.css";

type VisuallyHiddenProps = {
  children: ReactNode;
};

export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <span className={s.hidden}>{children}</span>;
};
