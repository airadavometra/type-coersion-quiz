import { SimpleQuizData } from '@app-types/simpleQuizData';
import { Button } from '@components/Button/Button';
import { PossibleAnswers } from '@components/PossibleAnswers/PossibleAnswers';
import React, { FC } from 'react';
import classes from './SimpleQuiz.module.scss';

export interface SimpleQuizProps {
  expressionData: SimpleQuizData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
  onSelectAnswer(selectedAnswer: string): void;
  onResolve(): void;
  onNext(): void;
}

export const SimpleQuiz: FC<SimpleQuizProps> = ({
  expressionData,
  selectedAnswer,
  resolved,
  onSelectAnswer,
  onResolve,
  onNext,
}) => {
  return (
    <div className={classes.main}>
      <div className={classes.expression}>{`${expressionData?.expression} = ?`}</div>
      <PossibleAnswers
        possibleAnswers={expressionData?.possibleAnswers ?? []}
        correntAnswer={expressionData?.correctAnswer ?? ''}
        selectedAnswer={selectedAnswer}
        resolved={resolved}
        onSelectAnswer={onSelectAnswer}
      />
      <Button
        onClick={resolved ? onNext : onResolve}
        text={resolved ? 'Next question' : selectedAnswer == null ? 'I give up' : 'Check my answer'}
      />
    </div>
  );
};
