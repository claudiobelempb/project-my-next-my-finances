import { http } from '@/http/index';
import { User } from '@/types/user/User';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/users';

const useFindAllUserService = async (user: User): Promise<User> => {
  try {
    // const response: AxiosResponse<User> = await httpClient.get<User>(resourceUrl);
    const response: AxiosResponse<User> = await http({
      method: 'GET',
      url: '/api/users',
    });
    console.log(response.data);
    return response.data;
  } catch {
    toast.error('Erro ao cadastrar o produto');
  }
  return user;
};

export { useFindAllUserService };
