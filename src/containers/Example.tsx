import React, { FC, useEffect } from 'react';
import { Example as ExampleComponent } from '@components/Example/Example';
import { exampleAsyncThunk, exampleThunk } from '@store/slices/example';
import { RequestStatus } from '@app-types/common';
import { useAppDispatch, useAppSelector } from '@store/hooks';

export const Example: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.example.status);
  const result = useAppSelector((state) => state.example.result);

  useEffect(() => {
    dispatch(exampleAsyncThunk('123'));
  }, []);

  return (
    <ExampleComponent
      isLoading={status === RequestStatus.Loading}
      data={result?.data ?? ''}
      onClick={() => dispatch(exampleThunk())}
    />
  );
};
