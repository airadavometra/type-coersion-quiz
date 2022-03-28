import classNames from 'classnames';
import React, { FC, useState } from 'react';
import classes from './Tooltip.module.scss';

export interface TooltipProps {
  text: string;
}

export const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={classes.tooltipContainer}>
      <div
        className={classNames(classes.tooltipBox, {
          [classes.visible]: show,
        })}
      >
        {text}
      </div>
      <div className={classes.childrenContainer} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
      </div>
    </div>
  );
};
