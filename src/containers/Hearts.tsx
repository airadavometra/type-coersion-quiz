import React, { FC } from 'react';
import { useAppSelector } from '@store/hooks';
import { Hearts as HeartsComponent } from '@components/Hearts/Hearts';

export const Hearts: FC = () => {
  const {
    evalGameStore: { maxHearts, currentHearts },
  } = useAppSelector((state) => state);

  return <HeartsComponent maxHearts={maxHearts} currentHearts={currentHearts} />;
};
