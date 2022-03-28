import { httpClient } from '@/http/index';
import { User } from '@/types/user';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/users';

const useCreateUserService = async (user: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await httpClient.post<User>(resourceUrl, user);
    toast.success('Usuário cadastrado com sucesso!');
    console.log('Service: ', response.data);
    return response.data;
  } catch {
    toast.error('Erro ao cadastrar o usuário');
  }
  return user;
};

export { useCreateUserService };
