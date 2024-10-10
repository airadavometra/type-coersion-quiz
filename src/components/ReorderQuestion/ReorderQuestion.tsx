import { FC, useState } from "react";
import s from "./ReorderQuestion.module.css";
import classNames from "classnames";
import { ReorderQuestion as ReorderQuestionType } from "../../types/quizQuestion";
import { Code } from "../Code/Code";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
} from "@hello-pangea/dnd";

type ReorderQuestionProps = {
  question: ReorderQuestionType;
  isGameOver: boolean;
  onGetNextQuestion(): void;
  onStartNewGame(): void;
  onCommitAnswer(isAnswerCorrect: boolean): void;
};

export const ReorderQuestion: FC<ReorderQuestionProps> = ({
  question,
  isGameOver,
  onGetNextQuestion,
  onStartNewGame,
  onCommitAnswer,
}) => {
  const [isCommited, setIsCommited] = useState<boolean>(false);
  const [orderedExpressionItems, setOrderedExpressionItems] = useState<
    string[]
  >(question.expressionItems);

  const isAnswerCorrect =
    orderedExpressionItems.join(" ") === question.correctAnswer;

  const handleGetNextQuestion = () => {
    setIsCommited(false);
    onGetNextQuestion();
  };

  const handleStartNewGame = () => {
    setIsCommited(false);
    onStartNewGame();
  };

  const handleCommitAnswer = () => {
    setIsCommited(true);
    onCommitAnswer(isAnswerCorrect);
  };

  const handleDragEnd: OnDragEndResponder = (result) => {
    const { destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const items = Array.from(orderedExpressionItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    setOrderedExpressionItems(items);
  };

  return (
    <section className={s.section}>
      <span className={s.task}>
        Reorder the pieces to make an expression that returns the expected
        result:
        <Code>{question.expectedResult}</Code>
      </span>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="expressionItems" direction="horizontal">
          {(provided) => (
            <ul
              className={s.itemsContainer}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {orderedExpressionItems.map((item, index) => (
                <Draggable
                  key={item}
                  draggableId={item}
                  index={index}
                  isDragDisabled={isCommited}
                >
                  {(provided) => (
                    <li
                      className={classNames(s.card, {
                        [s.correct]: isCommited && isAnswerCorrect,
                        [s.wrong]: isCommited && !isAnswerCorrect,
                      })}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <Code>{item}</Code>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button
        onClick={
          isCommited
            ? isGameOver
              ? handleStartNewGame
              : handleGetNextQuestion
            : handleCommitAnswer
        }
      >
        {isCommited
          ? isGameOver
            ? "Try again"
            : "Next question"
          : "Check my answer"}
      </button>
    </section>
  );
};
