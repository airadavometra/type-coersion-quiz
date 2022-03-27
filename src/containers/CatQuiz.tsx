import React, { FC } from 'react';
import { useAppSelector, useAppDispatch } from '@store/hooks';
import { CatQuiz as CatQuizComponent } from '@components/CatQuiz/CatQuiz';
import { catQuizActions, catGameActions } from '@store/slices';
import { generateCatQuiz } from 'util/generateCatQuiz';
import { DropResult } from 'react-beautiful-dnd';

export const CatQuiz: FC = () => {
  const {
    catGameStore: { currentScore, isGameOver },
    catQuizStore: { expression, selectedAnswer, resolved, isCorrect },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeOrder = (result: DropResult) => {
    if (result.destination) {
      const items = Array.from(expression.expressionItems);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      dispatch(
        catQuizActions.setExpression({
          expressionItems: items,
          expectedResult: expression.expectedResult,
          correctAnswer: expression.correctAnswer,
        })
      );
      dispatch(catQuizActions.setSelectedAnswer(items.join('')));
    }
  };

  const handleResolve = () => {
    try {
      const answerRaw = eval(selectedAnswer);
      let answer = '';
      if (typeof answerRaw === 'string') {
        answer = `"${String(eval(selectedAnswer))}"`;
      } else {
        answer = String(eval(selectedAnswer));
      }
      if (answer === expression.expectedResult) {
        dispatch(catGameActions.addPoints(1));
        dispatch(catQuizActions.resolveExpression(true));
      } else {
        dispatch(catGameActions.removeHeart());
        dispatch(catQuizActions.resolveExpression(false));
      }
    } catch {
      dispatch(catGameActions.removeHeart());
      dispatch(catQuizActions.resolveExpression(false));
    }
  };
  const handleNext = () => {
    const complexity = Math.floor(currentScore / 10) + 2;
    dispatch(catQuizActions.setExpression(generateCatQuiz(complexity)));
    dispatch(catQuizActions.setComplexity(complexity));
  };
  const handleStartOver = () => {
    dispatch(catGameActions.resetGame());
    const complexity = Math.floor(currentScore / 10) + 2;
    dispatch(catQuizActions.setExpression(generateCatQuiz(complexity)));
    dispatch(catQuizActions.setComplexity(complexity));
  };

  return (
    <CatQuizComponent
      expressionData={expression}
      resolved={resolved}
      isCorrect={isCorrect}
      onResolve={handleResolve}
      onChangeOrder={handleChangeOrder}
      onNext={handleNext}
      isGameOver={isGameOver}
      onStartOver={handleStartOver}
    />
  );
};
