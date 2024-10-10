import { FC, useState } from "react";
import s from "./MultipleAnswersQuestion.module.css";
import classNames from "classnames";
import { MultipleAnswersQuestion as MultipleAnswersQuestionType } from "../../types/quizQuestion";
import { Code } from "../Code/Code";

type MultipleAnswersQuestionProps = {
  question: MultipleAnswersQuestionType;
  isGameOver: boolean;
  onGetNextQuestion(): void;
  onStartNewGame(): void;
  onCommitAnswer(isAnswerCorrect: boolean): void;
};

export const MultipleAnswersQuestion: FC<MultipleAnswersQuestionProps> = ({
  question,
  isGameOver,
  onGetNextQuestion,
  onStartNewGame,
  onCommitAnswer,
}) => {
  const [isCommited, setIsCommited] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>(
    question.possibleAnswers[0]
  );

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
    onCommitAnswer(selectedAnswer === question.correctAnswer);
  };

  return (
    <section className={s.section}>
      <div>
        <span>Task description</span>
        <div className={s.codeWrapper}>
          <Code>{`${question.expression} = ?`}</Code>
        </div>
      </div>
      <fieldset className={s.answersGrid}>
        {question.possibleAnswers.map((item) => (
          <label key={`${question.expression} ${item}`}>
            <input
              className={classNames({
                [s.correct]: isCommited && item === question.correctAnswer,
                [s.wrong]:
                  isCommited &&
                  item === selectedAnswer &&
                  selectedAnswer !== question.correctAnswer,
              })}
              disabled={isCommited}
              type="radio"
              checked={item === selectedAnswer}
              onChange={() => setSelectedAnswer(item)}
            />
            <span className={classNames(s.customCheckboxLabel)}>
              <Code>{item}</Code>
            </span>
          </label>
        ))}
      </fieldset>
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
