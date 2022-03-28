import { AxiosResponse } from 'axios';
import { User } from '@/types/user';
import { httpClient } from '@/http/index';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/users';

const useFindByIdUseService = async (id: string): Promise<User> => {
  const url: string = `${resourceUrl}/${id}`;
  const response: AxiosResponse<User> = await httpClient.get<User>(url);
  // const { id } = response.data;
  // console.log(response.data);
  return response.data;
};

export { useFindByIdUseService };
