import { CatQuizData } from '@app-types/catQuizData';
import { Button } from '@components/Button/Button';
import { CatGameCard } from '@components/CatGameCard/CatGameCard';
import { Code } from '@components/Code/Code';
import classNames from 'classnames';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import React, { FC } from 'react';
import classes from './CatQuiz.module.scss';

export interface CatQuizProps {
  expressionData: CatQuizData;
  resolved: boolean;
  isCorrect?: boolean;
  isGameOver: boolean;
  onChangeOrder(result: DropResult): void;
  onResolve(): void;
  onNext(): void;
  onStartOver(): void;
}

export const CatQuiz: FC<CatQuizProps> = ({
  expressionData,
  resolved,
  isCorrect,
  isGameOver,
  onChangeOrder,
  onResolve,
  onNext,
  onStartOver,
}) => {
  return (
    <div className={classes.main}>
      <div className={classNames(classes.quizItem, classes.expectedResultContainer)}>
        <span className={classNames(classes.expectedResult)}>Expected result:</span>
        <Code code={expressionData.expectedResult} />
      </div>
      {resolved && isCorrect !== undefined && !isCorrect && (
        <div className={classNames(classes.quizItem, classes.errorMessage)}>
          <span>Oops! Your guess is wrong. </span>
          <wbr />
          <span>
            Correct answer: <Code code={expressionData.correctAnswer} />
          </span>
        </div>
      )}
      <div className={classNames(classes.quizItem)}>
        <DragDropContext onDragEnd={onChangeOrder}>
          <Droppable droppableId="expressionItems" direction="horizontal">
            {(provided) => (
              <ul className={classNames(classes.operandContainer)} {...provided.droppableProps} ref={provided.innerRef}>
                {expressionData.expressionItems.map((item, index) => (
                  <Draggable key={`${item}${index}`} draggableId={`${item}${index}`} index={index}>
                    {(provided) => (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <CatGameCard text={item} resolved={resolved} isCorrect={isCorrect} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <Button
        className={classes.quizItem}
        onClick={resolved ? (isGameOver ? onStartOver : onNext) : onResolve}
        text={resolved ? (isGameOver ? 'Start over' : 'Next question') : 'Check my answer'}
      />
    </div>
  );
};
