import { useState } from "react";
import WidthContainer from "../../components/WidthContainer/WidthContainer";
import s from "./Quiz.module.css";
import { Link } from "react-router-dom";
import { Quiz } from "../../components/Quiz/Quiz";

export const QuizPage = () => {
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);

  return (
    <WidthContainer className={s.widthContainer}>
      <div className={s.content}>
        {isQuizStarted ? (
          <Quiz />
        ) : (
          <>
            <section className={s.section}>
              <h1>JavaScript Type Coercion Quiz</h1>
              <span>
                Think you&apos;ve mastered JavaScript type coercion? Test your
                knowledge here!
              </span>
              <span>Two Types of Challenges:</span>
              <ol>
                <li>
                  <span>Pick the Correct Result</span>
                  <span>
                    You&apos;ll see an expression—choose what it evaluates to.
                  </span>
                </li>
                <li>
                  <span>Arrange to Match the Result</span>
                  <span>
                    Reorder the provided pieces to create an expression that
                    equals the expected result.
                  </span>
                </li>
              </ol>
              <span>Ready to start?</span>
              <button onClick={() => setIsQuizStarted(true)}>Start quiz</button>
            </section>
            <section>
              <span>Need a Refresher?</span>
              <span>
                Check out the <Link to="/cheatsheet">Cheat Sheet</Link> if you
                need a quick recap on type coercion rules.
              </span>
            </section>
            <section>
              <span>Compete on the Leader board!</span>
              <span>
                Log in to track your score and see how you rank! Only logged-in
                players will appear on{" "}
                <Link to="/leaderboard">the leader board</Link>.
              </span>
              <button>Log in</button>
            </section>
          </>
        )}
      </div>
    </WidthContainer>
  );
};
