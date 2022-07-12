import { AxiosResponse } from 'axios';
import { User } from '@/types/user/User';
import { http } from '@/http/index';
import { toast } from 'react-toastify';

// const resourceUrl: string = '/api/users';

const useFindByIdUseService = async (id: string): Promise<User> => {
  // const url: string = `${resourceUrl}/${id}`;
  const response: AxiosResponse<User> = await http({
    // withCredentials: true,
    method: 'GET',
    url: `/api/users/${id}`,
  });
  // console.log('Result User: ', response.data);
  return response.data;
};

export { useFindByIdUseService };
