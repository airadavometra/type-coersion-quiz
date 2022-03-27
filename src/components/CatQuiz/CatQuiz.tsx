import { CatQuizData } from '@app-types/catQuizData';
import { Button } from '@components/Button/Button';
import { CatGameCard } from '@components/CatGameCard/CatGameCard';
import { Code } from '@components/Code/Code';
import classNames from 'classnames';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import React, { FC } from 'react';
import classes from './CatQuiz.module.scss';

export interface CatQuizProps {
  expressionData: CatQuizData | undefined;
  selectedAnswer: string | null;
  resolved: boolean;
  isGameOver: boolean;
  onChangeOrder(result: DropResult): void;
  onResolve(): void;
  onNext(): void;
  onStartOver(): void;
}

export const CatQuiz: FC<CatQuizProps> = ({
  expressionData,
  selectedAnswer,
  resolved,
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
        <Code code={expressionData?.correctAnswer || ''} />
      </div>
      <span className={classNames(classes.quizItem, classes.howToPlay)}>
        Drag the cards to put them in the correct order to get the expected result
      </span>
      <div className={classNames(classes.quizItem)}>
        <DragDropContext onDragEnd={onChangeOrder}>
          <Droppable droppableId="expressionItems" direction="horizontal">
            {(provided) => (
              <ul className={classNames(classes.operandContainer)} {...provided.droppableProps} ref={provided.innerRef}>
                {expressionData?.expressionItems.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <CatGameCard text={item} />
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
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
