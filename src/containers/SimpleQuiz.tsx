import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { SimpleQuiz as SimpleQuizComponent } from '@components/SimpleQuiz/SimpleQuiz';
import { evalGameActions, simpleQuizActions } from '@store/slices';
import { generateSimpleQuiz } from 'util/generateSimpleQuiz';

export const SimpleQuiz: FC = () => {
  const {
    evalGameStore: { currentScore, isGameOver },
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
        if (selectedAnswer !== expression?.correctAnswer) {
          dispatch(evalGameActions.removeHeart());
        }
      }}
      onSelectAnswer={(selectedAnswer: string) => dispatch(simpleQuizActions.setSelectedAnswer(selectedAnswer))}
      onNext={() => dispatch(simpleQuizActions.setExpression(generateSimpleQuiz(Math.floor(currentScore / 10) + 2)))}
      isGameOver={isGameOver}
      onStartOver={() => {
        dispatch(evalGameActions.resetGame());
        dispatch(simpleQuizActions.setExpression(generateSimpleQuiz(Math.floor(currentScore / 10) + 2)));
      }}
    />
  );
};
