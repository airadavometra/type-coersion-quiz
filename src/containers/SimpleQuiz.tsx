import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { SimpleQuiz as SimpleQuizComponent } from '@components/SimpleQuiz/SimpleQuiz';
import { simpleQuizActions } from '@store/slices/example';
import { generateSimpleQuiz } from 'util/generateSimpleQuiz';

export const SimpleQuiz: FC = () => {
  const state = useAppSelector((state) => state.simpleQuizStore);
  const dispatch = useAppDispatch();

  return (
    <SimpleQuizComponent
      expressionData={state.expression}
      selectedAnswer={state.selectedAnswer}
      resolved={state.resolved}
      onResolve={() => dispatch(simpleQuizActions.resolveExpression())}
      onSelectAnswer={(selectedAnswer: string) => dispatch(simpleQuizActions.setSelectedAnswer(selectedAnswer))}
      onNext={() => dispatch(simpleQuizActions.setExpression(generateSimpleQuiz()))}
    />
  );
};
