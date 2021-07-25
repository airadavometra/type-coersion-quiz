export const loadScore = (key: string): number => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return 0;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return 0;
  }
};

export const saveScore = (score: number, key: string): void => {
  try {
    const serializedState = JSON.stringify(score);
    localStorage.setItem(key, serializedState);
  } catch {}
};
