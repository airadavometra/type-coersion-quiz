import { Footer } from '@components/Footer/Footer';
import { Header } from '@components/Header/Header';
import { PageRoot } from '@constants';
import { CatsQuizPage } from '@pages/CatsQuizPage/CatsQuizPage';
import { MainPage } from '@pages/MainPage/MainPage';
import { NotFoundPage } from '@pages/NotFoundPage/NotFoundPage';
import { SimpleQuizPage } from '@pages/SimpleQuizPage/SimpleQuizPage';
import { Router, RouteComponentProps, useLocation } from '@reach/router';
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import classes from './App.module.scss';
import { db } from '@database/firebase-config';
import { collection, getDocs, updateDoc, doc } from '@firebase/firestore';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent;

export const App: FunctionComponent = () => {
  const [totalLikesAmount, setTotalLikesAmount] = useState<number>(0);
  const [likesAmount, setLikesAmount] = useState<number>(0);
  const [likesDocId, setLikesDocId] = useState<string>('');
  const likesCollectionRef = collection(db, 'likes');

  const animateButton = () => {
    //ev.preventDefault;
    const button = document.getElementById('likeBtn');
    if (button) {
      if (button.classList.contains(classes.animate)) {
        return;
      }
      button.classList.add(classes.animate);
      setTimeout(function () {
        button.classList.remove(classes.animate);
      }, 1000);
    }
  };

  useEffect(() => {
    const getLikesAmount = async () => {
      const data = await getDocs(likesCollectionRef);
      const extractedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as { id: string; amount: number }[];

      setTotalLikesAmount(Number(extractedData[0].amount));
      setLikesDocId(extractedData[0].id);
    };
    getLikesAmount();
  }, []);

  const onLikeClick = useCallback(async () => {
    if (likesAmount < 10) {
      const likesDoc = doc(db, 'likes', likesDocId);
      await updateDoc(likesDoc, { amount: totalLikesAmount + 1 });
      setLikesAmount(likesAmount + 1);
      setTotalLikesAmount(totalLikesAmount + 1);
    }
  }, [likesAmount, totalLikesAmount, likesDocId]);

  const location = useLocation();
  useEffect(() => {
    window.gtag('config', 'G-1HK1RG5BD3', {
      page_title: location.pathname,
      page_path: location.pathname,
    });
  }, [location]);

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.body}>
        <div className={classes.likesContainer}>
          <button onClick={onLikeClick}>
            <div id="likeBtn" onClick={animateButton}>
              ❤️
            </div>
          </button>
          {totalLikesAmount}
        </div>
        <Router className={classes.router}>
          <RouterPage path={PageRoot.Main} pageComponent={<MainPage />} />
          <RouterPage path={PageRoot.Eval} pageComponent={<SimpleQuizPage />} />
          <RouterPage path={PageRoot.CatQuiz} pageComponent={<CatsQuizPage />} />
          <RouterPage default pageComponent={<NotFoundPage />} />
        </Router>
      </div>
      <Footer />
    </div>
  );
};
