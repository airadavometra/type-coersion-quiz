import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './PossibleAnswers.module.scss';

export interface PossibleAnswersProps {
  possibleAnswers: string[];
  correntAnswer: string;
  selectedAnswer: string | null;
  resolved: boolean;
  onSelectAnswer(selectedAnswer: string): void;
}

export const PossibleAnswers: FC<PossibleAnswersProps> = ({
  possibleAnswers,
  correntAnswer,
  selectedAnswer,
  resolved,
  onSelectAnswer,
}) => {
  return (
    <ul className={classes.main}>
      {possibleAnswers.map((item, index) => (
        <li key={index}>
          <label className={classNames(classes.customCheckbox)}>
            <input
              className={classNames({
                [classes.correct]: resolved && item === correntAnswer,
                [classes.wrong]: resolved && item === selectedAnswer && selectedAnswer !== correntAnswer,
              })}
              disabled={resolved}
              type="checkbox"
              checked={item === selectedAnswer}
              onChange={() => {
                if (item !== selectedAnswer) {
                  onSelectAnswer(item);
                }
              }}
            />
            <span className={classNames(classes.customCheckboxLabel)}>{item}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
