import { useState } from "react";
import WidthContainer from "../../components/WidthContainer/WidthContainer";
import s from "./Quiz.module.css";
import { Quiz } from "../../components/Quiz/Quiz";
import { Link } from "../../components/Link/Link";
import { motion } from "framer-motion";
import { scaleUp } from "../../motions/scaleUp";

export const QuizPage = () => {
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);

  return (
    <WidthContainer className={s.widthContainer}>
      {isQuizStarted ? (
        <Quiz />
      ) : (
        <>
          <section className={s.section}>
            <h1 className={s.title}>
              <span className={s.titleDecoratedFragment}>
                Think
                <img
                  src="/SpikyDecor1.png"
                  aria-hidden
                  className={s.spikyDecor}
                />
              </span>{" "}
              you&apos;ve mastered <br />
              JavaScript{" "}
              <span className={s.titleDecoratedFragment}>
                type coercion?
                <img
                  src="/WavyUnderline.png"
                  aria-hidden
                  className={s.wavyUnderline}
                />
              </span>
            </h1>
            <motion.button
              onClick={() => setIsQuizStarted(true)}
              className={s.button}
              variants={scaleUp}
              whileHover={scaleUp.hover}
            >
              Test your knowledge!
            </motion.button>
          </section>
          <section className={s.section2}>
            <h2 className={s.title2}>
              <span className={s.titleDecoratedFragment}>
                Need
                <img
                  src="/SquareYellow.png"
                  aria-hidden
                  className={s.squareDecor}
                />
              </span>{" "}
              a quick recap?
            </h2>
            <p>
              Check out the <Link to="/cheatsheet">Cheat Sheet</Link> about JS
              type coercion rules.
            </p>
          </section>
        </>
      )}
    </WidthContainer>
  );
};
