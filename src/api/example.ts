import axios from 'axios';

export const exampleRequest = async (id: string) => {
  const { data } = await axios.get('/example', { params: { id } });
  return data;
};
