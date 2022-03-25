import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { CatQuiz as CatQuizComponent } from '@components/CatQuiz/CatQuiz';
import { catQuizActions, catGameActions } from '@store/slices';
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
          dispatch(catGameActions.addPoints(1));
        }
        if (selectedAnswer !== expression?.correctAnswer) {
          dispatch(catGameActions.removeHeart());
        }
      }}
      onSelectAnswer={(selectedAnswer: string) => dispatch(catQuizActions.setSelectedAnswer(selectedAnswer))}
      onNext={() => {
        const complexity = Math.floor(currentScore / 10) + 2;
        dispatch(catQuizActions.setExpression(generateCatQuiz(complexity)));
        dispatch(catQuizActions.setComplexity(complexity));
      }}
      isGameOver={isGameOver}
      onStartOver={() => {
        const complexity = Math.floor(currentScore / 10) + 2;
        dispatch(catGameActions.resetGame());
        dispatch(catQuizActions.setExpression(generateCatQuiz(complexity)));
        dispatch(catQuizActions.setComplexity(complexity));
      }}
    />
  );
};
