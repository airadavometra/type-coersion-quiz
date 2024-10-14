import { FC } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import s from "./Link.module.css";
import classNames from "classnames";

export const Link: FC<RouterLinkProps> = ({ children, className, ...rest }) => {
  return (
    <RouterLink className={classNames(s.link, className)} {...rest}>
      {children}
    </RouterLink>
  );
};
