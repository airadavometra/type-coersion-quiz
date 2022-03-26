import { CatQuizData } from '@app-types/catQuizData';
import { Button } from '@components/Button/Button';
import { CatGameCard } from '@components/CatGameCard/CatGameCard';
import classNames from 'classnames';
import React, { FC } from 'react';
import classes from './CatQuiz.module.scss';

export interface CatQuizProps {
  expressionData: CatQuizData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
  isGameOver: boolean;
  onSelectAnswer(selectedAnswer: string): void;
  onResolve(): void;
  onNext(): void;
  onStartOver(): void;
}

export const CatQuiz: FC<CatQuizProps> = ({
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
      <div className={classNames(classes.quizItem, classes.operandContainer)}>
        {expressionData?.expressionItems.map((item) => (
          <CatGameCard
            key={item}
            text={item}
            onClick={() => {
              alert('click!');
            }}
          />
        ))}
      </div>
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
