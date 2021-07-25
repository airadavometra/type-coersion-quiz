import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { SimpleQuiz as SimpleQuizComponent } from '@components/SimpleQuiz/SimpleQuiz';
import { evalGameActions, simpleQuizActions } from '@store/slices/example';
import { generateSimpleQuiz } from 'util/generateSimpleQuiz';

export const SimpleQuiz: FC = () => {
  const {
    evalGameStore: { currentScore },
    simpleQuizStore: { expression, selectedAnswer, resolved },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <SimpleQuizComponent
      expressionData={expression}
      selectedAnswer={selectedAnswer}
      resolved={resolved}
      onResolve={() => {
        dispatch(simpleQuizActions.resolveExpression());
        if (selectedAnswer === expression?.correctAnswer) {
          dispatch(evalGameActions.addPoints(1));
        }
      }}
      onSelectAnswer={(selectedAnswer: string) => dispatch(simpleQuizActions.setSelectedAnswer(selectedAnswer))}
      onNext={() => dispatch(simpleQuizActions.setExpression(generateSimpleQuiz(Math.floor(currentScore / 10) + 2)))}
    />
  );
};
