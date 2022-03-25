import React, { FC } from 'react';
import { useAppSelector } from '@store/hooks';
import { Hearts as HeartsComponent } from '@components/Hearts/Hearts';

export interface HeartsComponentProps {
  gameKey: string;
}
export const Hearts: FC<HeartsComponentProps> = ({ gameKey }) => {
  const {
    evalGameStore: { maxHearts: evalMaxHearts, currentHearts: evalCurrentHearts },
    catGameStore: { maxHearts: catMaxHearts, currentHearts: catCurrentHearts },
  } = useAppSelector((state) => state);

  const maxHearts = gameKey === 'catGame' ? catMaxHearts : evalMaxHearts;
  const currentHearts = gameKey === 'catGame' ? catCurrentHearts : evalCurrentHearts;

  return <HeartsComponent maxHearts={maxHearts} currentHearts={currentHearts} />;
};
