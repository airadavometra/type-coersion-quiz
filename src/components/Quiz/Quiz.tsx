import { useMemo, useState } from "react";
import s from "./Quiz.module.css";
import { MAX_LIVES } from "../../constants/maxLives";
import { QuizQuestion } from "../../types/quizQuestion";
import { getMultipleAnswersQuestion } from "../../utils/getMultipleAnswersQuestion";
import { MultipleAnswersQuestion } from "../MultipleAnswersQuestion/MultipleAnswersQuestion";
import { MultipleAnswersQuestion as MultipleAnswersQuestionType } from "../../types/quizQuestion";
import { getQuizComplexity } from "../../utils/getQuizComplexity";

export const Quiz = () => {
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(MAX_LIVES);

  const [question, setQuestion] = useState<QuizQuestion>(() =>
    getMultipleAnswersQuestion(2)
  );

  const complexity = useMemo(() => getQuizComplexity(score), [score]);

  const handleCommitAnswer = (isAnswerCorrect: boolean) => {
    if (isAnswerCorrect) {
      setScore((prev) => prev + 1);
    } else {
      setLives((prev) => prev - 1);
    }
  };

  const handleGetNextQuestion = () => {
    // Get randomly 0 or 1
    // If 0 - generate MultipleAnswersQuestion
    // If 1 - generate ReorderQuestion
    setQuestion(getMultipleAnswersQuestion(complexity));
  };

  const handleStartNewGame = () => {
    setScore(0);
    setLives(MAX_LIVES);
    setQuestion(getMultipleAnswersQuestion(2));
  };

  return (
    <>
      <section className={s.gameData}>
        <span className={s.gameDataItem}>Score: {score}</span>
        <span className={s.gameDataItem}>Lives: {lives}</span>
      </section>
      {question.type === "MultipleAnswersQuestion" ? (
        <MultipleAnswersQuestion
          question={question as MultipleAnswersQuestionType}
          isGameOver={lives === 0}
          onGetNextQuestion={handleGetNextQuestion}
          onStartNewGame={handleStartNewGame}
          onCommitAnswer={handleCommitAnswer}
        />
      ) : (
        <></>
      )}
    </>
  );
};
