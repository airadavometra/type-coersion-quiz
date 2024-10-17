import classnames from "classnames";
import { ReactNode } from "react";
import s from "./WidthContainer.module.css";

type WidthContainerProps = {
  children: ReactNode;
  className?: string;
};

const WidthContainer = ({ children, className }: WidthContainerProps) => {
  return (
    <div className={classnames(s.widthContainer, className)}>{children}</div>
  );
};

export default WidthContainer;
