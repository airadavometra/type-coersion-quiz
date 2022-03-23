import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { CatQuiz as CatQuizComponent } from '@components/CatQuiz/CatQuiz';
import { evalGameActions, catQuizActions } from '@store/slices';
import { generateCatQuiz } from 'util/generateCatQuiz';

export const CatQuiz: FC = () => {
  const {
    catGameStore: { currentScore, isGameOver },
    catQuizStore: { expression, selectedAnswer, resolved },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <CatQuizComponent
      expressionData={expression}
      selectedAnswer={selectedAnswer}
      resolved={resolved}
      onResolve={() => {
        dispatch(catQuizActions.resolveExpression());
        if (selectedAnswer === expression?.correctAnswer) {
          dispatch(evalGameActions.addPoints(1));
        }
        if (selectedAnswer !== expression?.correctAnswer) {
          dispatch(evalGameActions.removeHeart());
        }
      }}
      onSelectAnswer={(selectedAnswer: string) => dispatch(catQuizActions.setSelectedAnswer(selectedAnswer))}
      onNext={() => dispatch(catQuizActions.setExpression(generateCatQuiz(Math.floor(currentScore / 10) + 2)))}
      isGameOver={isGameOver}
      onStartOver={() => {
        dispatch(evalGameActions.resetGame());
        dispatch(catQuizActions.setExpression(generateCatQuiz(Math.floor(currentScore / 10) + 2)));
      }}
    />
  );
};
