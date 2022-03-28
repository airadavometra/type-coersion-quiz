import classNames from 'classnames';
import React, { FC, useCallback, useState } from 'react';
import classes from './Tooltip.module.scss';

export interface TooltipProps {
  text: string;
}

export const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  const [show, setShow] = useState(false);

  const handleTooltipClick = useCallback(() => {
    setShow(!show);
  }, [show, setShow]);

  return (
    <div className={classes.tooltipContainer}>
      <div
        className={classNames(classes.tooltipBox, {
          [classes.visible]: show,
        })}
      >
        {text}
      </div>
      <div
        className={classes.childrenContainer}
        onClick={handleTooltipClick}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
    </div>
  );
};
