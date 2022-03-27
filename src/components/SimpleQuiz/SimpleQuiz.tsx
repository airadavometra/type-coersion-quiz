import { SimpleQuizData } from '@app-types/simpleQuizData';
import { Button } from '@components/Button/Button';
import { Code } from '@components/Code/Code';
import { PossibleAnswers } from '@components/PossibleAnswers/PossibleAnswers';
import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './SimpleQuiz.module.scss';

export interface SimpleQuizProps {
  expressionData: SimpleQuizData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
  isGameOver: boolean;
  onSelectAnswer(selectedAnswer: string): void;
  onResolve(): void;
  onNext(): void;
  onStartOver(): void;
}

export const SimpleQuiz: FC<SimpleQuizProps> = ({
  expressionData,
  selectedAnswer,
  resolved,
  isGameOver,
  onSelectAnswer,
  onResolve,
  onNext,
  onStartOver,
}) => {
  return (
    <div className={classes.main}>
      <div className={classNames(classes.expression, classes.quizItem)}>
        <Code code={expressionData?.expression as string} />
      </div>
      <PossibleAnswers
        className={classes.quizItem}
        possibleAnswers={expressionData?.possibleAnswers ?? []}
        correctAnswer={expressionData?.correctAnswer ?? ''}
        selectedAnswer={selectedAnswer}
        resolved={resolved}
        onSelectAnswer={onSelectAnswer}
      />
      <Button
        className={classes.quizItem}
        onClick={resolved ? (isGameOver ? onStartOver : onNext) : onResolve}
        text={
          resolved
            ? isGameOver
              ? 'Start over'
              : 'Next question'
            : selectedAnswer == null
            ? 'I give up'
            : 'Check my answer'
        }
      />
    </div>
  );
};
