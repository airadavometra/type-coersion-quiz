import { Code } from '@components/Code/Code';
import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './PossibleAnswers.module.scss';

export interface PossibleAnswersProps {
  className: string;
  possibleAnswers: string[];
  correctAnswer: string;
  selectedAnswer: string | null;
  resolved: boolean;
  onSelectAnswer(selectedAnswer: string): void;
}

export const PossibleAnswers: FC<PossibleAnswersProps> = ({
  className,
  possibleAnswers,
  correctAnswer,
  selectedAnswer,
  resolved,
  onSelectAnswer,
}) => {
  return (
    <ul className={classNames(classes.main, className)}>
      {possibleAnswers.map((item, index) => (
        <li key={index}>
          <label className={classNames(classes.customCheckbox)}>
            <input
              className={classNames({
                [classes.correct]: resolved && item === correctAnswer,
                [classes.wrong]: resolved && item === selectedAnswer && selectedAnswer !== correctAnswer,
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
            <span className={classNames(classes.customCheckboxLabel)}>
              <Code code={item} />
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};
