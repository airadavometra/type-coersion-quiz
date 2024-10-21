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
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { scaleUp } from "../../motions/scaleUp";

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

  const isMobile = useMediaQuery("(max-width: 48rem)");

  let isAnswerCorrect = false;

  try {
    const answer = orderedExpressionItems.join(" ");
    if (
      answer === question.correctAnswer ||
      eval(answer) === eval(question.correctAnswer)
    ) {
      isAnswerCorrect = true;
    } else {
      isAnswerCorrect = false;
    }
  } catch {
    isAnswerCorrect = false;
  }

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
      <div className={s.background}>
        <span className={s.task}>
          Reorder to return
          <Code>{question.expectedResult}</Code>
        </span>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable
            droppableId="expressionItems"
            direction={isMobile ? "vertical" : "horizontal"}
          >
            {(provided) => (
              <ul
                className={s.itemsContainer}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {orderedExpressionItems.map((item, index) => (
                  <Draggable
                    key={`${item}-${index}`}
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
        {isCommited && !isAnswerCorrect && (
          <span className={s.correctAnswer}>
            Correct answer is <Code>{question.correctAnswer}</Code>
          </span>
        )}
      </div>
      <motion.button
        className={s.button}
        variants={scaleUp}
        whileHover={scaleUp.hover}
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
      </motion.button>
    </section>
  );
};
